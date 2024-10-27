import './Title.css'

export default function Title(props) {
   

return(<>
    <div className='Title'>
    <h3>{props.heading}</h3>
    <p>{props.subheading}</p>
    </div>
    </>)
}