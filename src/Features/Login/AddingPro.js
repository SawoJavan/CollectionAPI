import Button from "../Button/Button";
import { useState } from "react";
const AddingPro=(props)=>{
const [name,setName]=useState('');
const [nameValid,setNameValid]=useState(true);
const [size,setSize]=useState('');
const [sizeValid,setSizeValid]=useState(true);
const [description,setDescription]=useState('');
const [desValid,setDesValid]=useState(true);
const [price,setPrice]=useState('');
const [priceValid,setPriceValid]=useState(true);
const [selectedImage, setSelectedImage] = useState(null);

const nameHandler=(e)=>{
   setName(e.target.value) ;
   setNameValid(true);
  }
  const sizeHandler=(e)=>{
    setSize(e.target.value) ;
    setSizeValid(true);
   }
   const desHandler=(e)=>{
    setDescription(e.target.value);
    setDesValid(true) ;
   }
   
   const priceHandler=(e)=>{
    setPrice(e.target.value); 
    setPriceValid(true);
   }
   const validator=(validatee,valfunction)=>{
    if(validatee.trim().length===0){
        valfunction(false);
        return;
     };
   }
   const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // Read the selected image file and set it in state
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

    const submitHandler=(e)=>{
      e.preventDefault();
      validator(name,setNameValid);
      validator(description,setDesValid);
      validator(price,setPriceValid);
      validator(size,setSizeValid);
      const NewProd={
        name,description,price,size
      }
      console.log(NewProd);
    }
    console.log(selectedImage);
    // let Message;
    // const CreateErrMessage=(validity,messo)=>{
    //     if(!validity){
    //         Message=messo;
    //     }
    //  }
    //  CreateErrMessage(nameValid,'Forget to enter product name');
    //  CreateErrMessage(desValid,'Forgot to enter product description');
    //  CreateErrMessage(priceValid,'Forgot to enter Price');
    //  CreateErrMessage(sizeValid,'Forgot to provide size')
    
    return(
        <div>
             <form   onSubmit={submitHandler}>
                <label htmlFor="ProdName">Product Name</label><br/>
                <input type="text" onChange={nameHandler}/><br/>
                {!nameValid && <p>Forget to enter product name</p>}
                <label htmlFor="Description">Description</label><br/>
                <input type="text" onChange={desHandler}/> <br/>
                {!desValid && <p>Forgot to enter product description</p>}
                <label htmlFor="price">Price</label><br/>
                <input type="Number" onChange={priceHandler}/><br/>
                {!priceValid && <p>Forgot to enter Price</p>}
                <label  htmlFor="size">Size</label><br/>
                <input type="text" onChange={sizeHandler}/><br/>
                {!sizeValid && <p>Forgot to provide size</p>}
                <label htmlFor="imageInput">Select Image:</label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                  <Button type='submit'>Add</Button>
                  <Button type='button' onClick={props.onClose}  >Close</Button>
                </form>
                <div>
                {selectedImage && (
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '4rem', maxHeight: '4rem' }} />
                )}
            </div>
        </div>
    )
};
export default AddingPro;