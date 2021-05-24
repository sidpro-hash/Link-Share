import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAdd}) => {

  	

  return (
  	<header className="header">
  		<h1>{title}</h1>
  		<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
  	</header>
  )
}

Header.defaultProps = {
  title: 'Link Share'
}
Header.propTypes = {
  title: PropTypes.string,
  color:PropTypes.string,
}
// CSS in JS
// <h1 style={headingStyle}>Task Tracker {props.title}</h1>
// const headingStyle = {
// 	color:'red',
// 	backgroundColor:'black',
// }

// Inline css in js
// <h1 style={{color:'red',backgroundColor:'black'}}>Task Tracker {props.title}</h1>
export default Header