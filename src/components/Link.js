//npm i react-icons
import { FaTimes,FaClipboard,FaShareAlt } from "react-icons/fa";



const Link = ({link,onDelete,onCopy}) => {
	function changeColor(e){
		 e = e || window.event;
		var target = e.target || e.srcElement;
		
		//target.classList.remove('cliptrans'); // reset animation
		//void target.offsetWidth; // trigger reflow
		target.classList.add('cliptrans'); // start animation
		//console.log(e);
		setTimeout(function(){ target.classList.remove('cliptrans'); }, 3000);

	}
  return (
  	<div id={link.id} className={`link ${link.reminder ? 'reminder' : ''}`}>
  		<h4><span>{link.title}</span> 
  		 <FaTimes data-bs-toggle="tooltip" data-bs-placement="right" title="Delete Link!"
  		 style={{color:'red',cursor:'pointer'}} 
  		 onClick={() => onDelete(link.id)}
  		 />
  		 </h4>
  		 <p><img src={link.img} alt="icon" style={{width:'25px',height:'25px'}}></img>&nbsp;&nbsp;{link.description}</p>
  		<p><a href={link.url} rel="noreferrer" target="_blank"> {link.url} </a>&nbsp;&nbsp;
  		<FaClipboard className="Clipboard" data-bs-toggle="tooltip" onClick={(e) => {onCopy(link.url);changeColor(e);} } 
  		data-bs-placement="right" title="Copy to Clipboard" />&nbsp;&nbsp;
  		<FaShareAlt className="Clipboard" data-bs-toggle="tooltip" onClick={(e) => {let currentLocation = window.location+"#"+link.id; onCopy(currentLocation);changeColor(e);} } 
  		data-bs-placement="right" title="Share it!"/>
  		&nbsp;&nbsp;&nbsp;&nbsp;{link.day}</p>
  	</div>
  )
}

export default Link