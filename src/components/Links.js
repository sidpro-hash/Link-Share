import Link from './Link'

const Links = ({links,onDelete,onCopy}) => {
  return (
  	<>
  		{links.map((link,index) => (
  			<Link 
  			key={index} 
  			link={link} 
  			onDelete={onDelete}
  			onCopy={onCopy}/>
  		))}
  	</>
  )
}

export default Links