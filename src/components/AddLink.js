import { useState } from 'react'
import axios from 'axios'


const AddLink = ({onAdd}) => {

	const options = {
	  headers: {"Access-Control-Allow-Origin": "*"}
	};
	const [title,setText] = useState('')
	const [reminder,setReminder] = useState(false)

	function isUrlValid(userInput) {
	    var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
	    var url = new RegExp(regexQuery,"i");
	    return url.test(userInput);
	}

	const eatLinks = async (Title,URL,day,id,date) => {
		try{
			const res = await axios.post(URL,options);

			//console.log(res);
			const data = res.data
			
			let title = data.title || Title;
			let url = data.url || Title;
			let img = data.image || "https://collegeek.com/image/icons/favicon-180x180.png";
			let description = data.description;
			onAdd({title,day,reminder,id,url,img,description,date})
		}catch(err) {
		  console.log(err.message);
		  	let title = Title;
			let url = Title;
			let img = "https://collegeek.com/image/icons/favicon-180x180.png";
			let description = "link is Private pages or pages that require authentication or login";
		  onAdd({title,day,reminder,id,url,img,description,date})
		}
		
	}
	/*const eatLinks = async (Title,URL,day,id) => {
		const res = await fetch(URL);
		const data = await res.json()
		
		let title = data.title || Title;
		let url = data.url || Title;
		let img = data.image || "https://collegeek.com/image/icons/favicon-180x180.png";
		let description = data.description;
		onAdd({title,day,reminder,id,url,img,description})
	}*/

	const onSubmit = (e) => {
		e.preventDefault();

		if(!title){
			alert("Please Add Link")
			return
		}
		if(!isUrlValid(title.trim())){
			alert("Please Add Valid Link!")
			return
		}
		// set Date & Time
		var id = "id";
		var d = new Date();
		let url = "https://api.linkpreview.net/?key=APIKEY&q="+title;
		var day = d.toDateString();
		var l = d.toTimeString().match(/([0-9]{2}):([0-9]{2}):([0-9]{2})/);
		var period = "AM";
		var date = "";
		if(l[1]>=12){
			period = "PM";
		}
		if(l[1]>12){l[1]=l[1]-12;}
		day= day+" "+l[1]+":"+l[2]+period;

		eatLinks(title.trim(),url,day,id,date)

		

		setText('')
		
		setReminder(false)
	}


  return (
  	<form className='add-form' onSubmit={onSubmit}>
  		<div className='form-control'>
  			<label>Link</label>
  			<input type='text' value={title} onChange={ (e) => setText(e.target.value) } placeholder='Add Link' />
  			
  			<div className="form-check form-control-check" style={{width:'100px'}}>
			  <input  className="form-check-input form-control-check" type="checkbox" checked={reminder} value={reminder} onChange={ (e) => setReminder(e.currentTarget.checked) } id="flexCheckDefault"/>
			  <label className="form-check-label" htmlFor="flexCheckDefault">
			    Important
			  </label>
			</div>
  			<input type='submit' value='Share Link' 
  			className="btn btn-dark" />
  		</div>
  	</form>
  )
}

export default AddLink
