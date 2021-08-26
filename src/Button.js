import './Button.css'


function Button(props) {
  return (
    <a 
      href={props.link}
      style={ {"width": props.width} } 
      className="btn btn-dark">{props.children}</a>
  )
}

export default Button;