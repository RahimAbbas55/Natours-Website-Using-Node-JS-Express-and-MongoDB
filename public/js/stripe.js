import { loadStripe } from '@stripe/stripe-js';
import { showAlert } from './alerts';
import axios from 'axios';
const stripePromise = loadStripe("<Your stripe publishable key>");
  
export const bookTour = async (tourId, res) => {
    try 
    {
        // 1) Get session from API endpoint
        const session = await axios.get(`http://127.0.0.1:8000/api/v1/booking/checkout-session/${tourId}`);
        const id = session.data.session.id;
        // 2) Create checkout form 
        const stripe = await stripePromise;

        await stripe.redirectToCheckout({
            sessionId: id
        });
        showAlert('success' , 'Purchase successful!');
    } 
    catch (error) 
    {
        console.log(error);
        showAlert('error', error.message); // Show only error message
    }
 };
 