import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import firebase from 'firebase/app';
import firebaseDb from './firebase';
import Header from './components/Header';
import Links from './components/Links';
import AddLink from './components/AddLink';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
	const ref = firebaseDb.firestore().collection("links");

	const [showAddLink,setShowAddLink] = useState(false)

	const [links,setLinks] = useState([]) 

	//Fetch Links
	const fetchLinks = async () => {
		const data = [];
		ref.orderBy('date','desc').get().then((querySnapshot) => {
			//console.log(querySnapshot.json())
			querySnapshot.forEach((doc) => {
		        // doc.data() is never undefined for query doc snapshots
		        // eslint-disable-next-line
		        let p = doc.data(); // eslint-disable-next-line
		        p["id"] = doc.id;
		       data.push(p);
		    });
			setLinks(data);
		});
	}

	useEffect(()=> {
		const getLinks = async () =>{
			await fetchLinks()
		}
		getLinks()
	},[])

	
	// Add link
	const addLink = (link) => {
		// Add a new document with a generated id.
			link.date = firebase.firestore.FieldValue.serverTimestamp()
			ref.add(link)
			.then((docRef) => {
			    //console.log("Document written with ID: ", docRef.id);
			    link.id = docRef.id;
			    //console.log(link);
				setLinks([...links,link]);
			})
			.catch((error) => {
			    console.log("Error adding document: ", error);
			});

	}

	// Delete link
	const deleteLink = async (id) => {
		ref.doc(id).delete().then(() => {
		    //console.log("Document successfully deleted!");
		    setLinks(links.filter((link)=>link.id!==id));
		}).catch((error) => {
		    console.error("Error removing document: ", error);
		});
		
	}
	// copy
	function copyToClipboard(text) {
	    if (window.clipboardData && window.clipboardData.setData) {
	        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
	        return window.clipboardData.setData("Text", text);

	    }
	    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
	        var textarea = document.createElement("textarea");
	        textarea.textContent = text;
	        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
	        document.body.appendChild(textarea);
	        textarea.select();
	        try {
	            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
	        }
	        catch (ex) {
	            console.warn("Copy to clipboard failed.", ex);
	            return false;
	        }
	        finally {
	            document.body.removeChild(textarea);
	        }
	    }

	}
	// Toggle Reminder
	/*const toggleReminder = (id) => {
		setLinks(
			links.map((link)=>
				link.id === id ? {...link,reminder:!link.reminder} : link
			)
		)
	}*/

  return (
  	<>
  		<Navbar />
	  	<Route exact path="/">
		    <div className='container-md'>
		    <Helmet>
            	<title>LinkShare</title>
        	</Helmet>
		    	<div className='container'>
		      		<Header onAdd={() => setShowAddLink(!showAddLink)} 
		      		showAdd={showAddLink}/>
		      		{showAddLink && <AddLink onAdd={addLink}/>}
		      	</div>
		      	{links.length > 0 ?
		      		(<Links 
		      			links={links} 
		      			onDelete={deleteLink}
		      			onCopy={copyToClipboard}/>) :
		      		(<div className="alert alert-primary" role="alert">
							No Links founds, Add your first Link now!
						</div>) }
		    </div>
		</Route>

		<Route path="/About">
			<About/> 
		</Route>
    </>
  );
}

export default App;
