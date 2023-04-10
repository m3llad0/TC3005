import "../styles/price.css"

const Price = (props) =>{
    return(
        <h4 className="price">
            {props.price}
        </h4>
    )
}

export default Price