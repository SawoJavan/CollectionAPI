import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import AddingPro from "./AddingPro";
import Orders from "./Orders";
import { getAllOrders ,getMenu } from "../ApiLoader";
import Products from "./Products";
export const Admin=()=>{
   const [adding,setAdding]=useState(false);
   const [viewin,setViewing]=useState(false);
   const [orders,setOrders]=useState({});
   const [products,setProds]=useState({});
   const [viewingProd,setViewingProd]=useState(false);
    const locate=useLocation();
    const NAme=locate.state;
    const jina=NAme.name.name.split(' ');
    const Jina=jina[jina.length-1];
    function getGreeting() {
        const hour = new Date().getHours();
        let greeting = '';
    
        if (hour >= 0 && hour < 12) {
            greeting = 'Good morning';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }
    
        return greeting;
    }
    
    // Example usage:
    const greeting = getGreeting();

    const addHandler=(e)=>{
      setAdding(true);
      setViewing(false);
      setViewingProd(false);
    };

    const orderHandler=(e)=>{
      setViewing(true);
      setAdding(false);
      setViewingProd(false);
      (async ()=>{
        const returned= await getAllOrders();
        console.log(returned);
        setOrders(returned);
      })()
      

    };
    const proHandler=(e)=>{
    setViewingProd(true);
    setAdding(false);
    setViewing(false);
    (async ()=>{
        const prods= await getMenu();
        console.log(prods);
        setProds(prods);
      })()
      console.log(products);
    };

    const Onclick=()=>{
        setAdding(false);
    }


    // const renderOrders=Object.keys(orders).length!==0 ? orders.data.map((elem)=>(<Orders customerDetails={elem.CustomerDetails} 
    //         amountPaid={elem.amountPaid} 
    //         delStatus={elem.deliverStatus} 
    //         items={elem.Items}
    //         id={elem._id}
    //         OrderId={elem.OrderId}
    
    //         />)): 
    
    
    return(
        <div>
            <h3>{greeting} {Jina}.What activiteis do you want to perform today?</h3>
            <Button type='button' onClick={addHandler}>Add Product</Button>
            <Button type='button' onClick={orderHandler}>View Orders</Button>
            <Button type='button' onClick={proHandler}>View Products</Button>
            {adding && <AddingPro onClose={Onclick}/>}
            {viewin && Object.keys(orders).length!==0 &&  orders.data.map((elem)=>(<Orders customerDetails={elem.CustomerDetails} 
            amountPaid={elem.amountPaid} 
            delStatus={elem.deliverStatus} 
            items={elem.Items}
            id={elem._id}
            OrderId={elem.OrderId}
    
            />)) }
            {viewingProd && Object.keys(products).length!==0 && <Products  Prods={products.data} />}
                  
        </div>
    )
}
// export default Admin;