import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51QWuGtEVluwpLQXfuifi5TzNYgGpdel1gj0R52PJbttwf3rsdp6dfH2orBP0BwL0RnBiptqak18gyyQyBJwOGhVn00W3z9pCRC');
const CheckOut = () => {

const submitHandler=async (e)=>{
e.preventDefault()
axios.post('http://localhost:3000/api/carts/checkout', {
    name: e.target.name.value,
    email: e.target.email.value
  })
  .then(async function (res) {
      const sessionId=res.data.data.sessionId
    const stripe = await stripePromise;
await stripe.redirectToCheckout({ sessionId });
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log(e.target.name.value)
}

  return (
    <div>
      <form className= 'card p-5 bg-body-secondary' onSubmit={submitHandler} >
        <h5 className='card-title' style={{marginBottom:'1rem'}}>Enter Your Details</h5>
        <input className='form-control' style={{fontSize:'20px', border:'1px solid grey'}} type="text" placeholder='Name' required name='name' /> <br /><br />
        <input className='form-control' style={{fontSize:'20px', border:'1px solid grey'}} type="email" placeholder='Email' required name='email' /> <br /><br />
        <button>Proceed To checkout</button>
      </form>
    </div>
  )
}

export default CheckOut
