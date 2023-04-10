import star from '../images/star.png'
import "../styles/calification.css"

const Calification = (props) =>{

    return(
        <div className='calification'>
            <img src = {star}/>
            {props.calification}
        </div>
    )
}

export default Calification;