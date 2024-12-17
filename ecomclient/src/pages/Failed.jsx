import { Link } from "react-router-dom";

const Failed = () => {
    return (
      <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
        <span style={{border:'2px solid red',backgroundColor:'black', borderRadius:'20px',padding:'10px 30px',fontSize:'30px'}}>
          <h3>Transaction Failed</h3>
          <h4>Go back to Cart</h4>
          <button> <Link to={'/cart'}>Checkout</Link> </button>

        </span>
       
      </div>
    )
  }
  
  export default Failed;
