import { Link } from "react-router-dom";

const Success = () => {
    return (
      <div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
        <span style={{border:'2px solid #7ffa59', backgroundColor:'#bff776aa', borderRadius:'20px',padding:'10px 30px',fontSize:'30px'}}>
          <h3>Transaction Successfull</h3>
          <button className="btn btn-light"> <Link to={'/'}>Checkout</Link> </button>
        </span>
       
      </div>
    )
  }
  
  export default Success