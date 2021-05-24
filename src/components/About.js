import React from 'react'
import {Helmet} from "react-helmet";

const About = () => {
  return (
  	<>
  		<Helmet>
            <title>About | LinkShare</title>
        </Helmet>
  		<div className="container-md my-3">
		    <h1 className="title-of" style={{textAlign:'center'}}>ABOUT US</h1>
			<div className="Pcontainer">
			  <hr/>
			  <span className="title-description"><b>Easy Link Sharing</b></span>
			  <p>We often share links to various different types of content with our team and peers. These can be links to inspirational designs, product videos, reference articles, cloud files, document links and much more.</p>
			  <p>What if there was a way to generate a link preview, something which visually showcases the content behind the link.
				By having these link previews in place, <i><b>the probability of an individual clicking on a link increases exponentially when he or she is able to see what’s actually behind that link</b></i>, i.e. what the link is actually about.</p>
			  <p><a href="https://linkshare.collegeek.com">linkshare.collegeek.com</a> is a new-age Link management and collaboration tool that helps teams to collaborate, share, track and manage all company Links and other content in one place.</p>
			  <p>We, humans beings, have always been drawn to all <b>things visual</b>. In fact, we love <b>visuals</b> way more than plain text and reading stuff. But don’t take our word for it, here are some of the stats to back up my claim</p>
				<ul>
				  <li>According to Adobe, <b><span style={{color:'cornflowerblue'}}>two-thirds</span></b> of people would rather read something beautifully designed than something plain.</li>
				  <li>Researchers at HubSpot found that tweets with images are <b><span style={{color:'cornflowerblue'}}>94% more</span></b> likely to be retweeted than tweets without images.</li>
				</ul>
			  <p>The million-dollar question is: If we love visuals so much, why are we sharing links as texts? Well, its because there wasn’t a better way to do it, until now.
			  share links to various different types of content with your team and peers. These can be links to inspirational designs, product videos, reference articles, cloud files, document links and much more with <b>LinkShare</b>.</p>
			  <span className="title-description"><b>Add a Link to Us</b></span>
			  <p>If you want others to discover LinkShare, please add a link to us.</p>
			  <p>To add a simple text link, insert the following HTML code on your site:</p>
			  <div style={{"border":"1px solid gray","padding":"5px","width":"100%"}}>
				<span style={{color:'blue'}}>&lt;</span>a <span style={{color:'red'}}>href</span> <span style={{color:'blue'}}>="https://www.linkshare.collegeek.com/"</span>
					<span style={{color:'blue'}}>&gt;</span>linkshare.collegeek.com<span style={{color:'blue'}}>&lt;</span>/a<span style={{color:'blue'}}>&gt;</span></div><br/>
			  <span className="title-description"><b>Founder</b></span>
			</div><br/>

			<div className="Icontainer">
			  <img id="bigImage" className="responsive" src="About_Collegeek.png" alt="Founder of Collegeek"/>
			</div>
			<img id="smallImage" className="responsive" src="About_Collegeek_mob.png" alt="Founder of Collegeek"/>
			
	</div>
	</>
  )
}

export default About