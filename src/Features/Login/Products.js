import Button from "../Button/Button";
const Products=(props)=>{

    console.log(props.Prods)
    return(
        <div>
            <div>
                {
                    props.Prods.map((elem)=>(<div >
                      <p> {elem.name}</p>
                      <p> {elem.description}</p>
                      <p> {elem.size}</p>
                      <p> {elem.gender}</p>
                      <p> {elem.price}</p>

                      <Button>Update</Button> <Button>Delete</Button>
                    </div>))
                }
            </div>
        </div>
    )
}
export default Products;