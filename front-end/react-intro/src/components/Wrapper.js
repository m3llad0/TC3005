import Image from "./Img"
import Title from "./Title"
import Price from "./Price"
import Calification from "./Stars"

const Wrapper = (props) =>{
    return (
        <>
        <Image archive = {props.elements.image}/>
        <Title title = {props.elements.title}/>
        <Calification calification = {props.elements.calification}/>
        <Price price = {props.elements.price}/>
        </>
    )
}

export default Wrapper;