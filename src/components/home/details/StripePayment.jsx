// // Correct Working COde
// import React, { useState, useEffect } from 'react';
// import { Elements, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51POLSORr2k4AYrtAOOYjO2SMtsENDlIASpZwrlpt5IpH8NLcO4BVpHBhzLlva2AUDQdP3Mp5z7Uc69yvHALJPlOz00HsM3RWZX');

// const CheckoutForm = ({ clientSecret }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       console.error('Stripe.js has not loaded yet.');
//       return;
//     }

//     const paymentElement = elements.getElement(PaymentElement);
//     if (!paymentElement) {
//       console.error('PaymentElement is not mounted.');
//       return;
//     }

//     try {
//       const result = await stripe.confirmPayment({
//         elements,
//         confirmParams: {
//           return_url: "https://example.com/order/123/complete",
//         },
//       });

//       if (result.error) {
//         console.log(result.error.message);
//       } else {
//         console.log('Payment confirmed:', result.paymentIntent.status);
//       }
//     } catch (error) {
//       console.error('Error confirming payment:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe}>Submit Payment</button>
//     </form>
//   );
// };

// const PaymentButton = ({ amount }) => {
//   const [clientSecret, setClientSecret] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const createPaymentIntent = async () => {
//       try {
//         const response = await fetch('https://api.stripe.com/v1/payment_intents', {
//           method: 'POST',
//           headers: {
//             'Authorization': 'Bearer sk_test_51POLSORr2k4AYrtAMTYxJpf3cZ55y7E23oRnHNAVtT96O28obBtB6zPA9ts8O7fdum9qIlw733YqhLuUbG6tNh7B008htkEosZ',
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: new URLSearchParams({
//             'amount': amount.toString(),
//             'currency': 'usd',
//             'payment_method_types[]': 'card',
//           })
//         });

//         if (response.ok) {
//           const paymentIntent = await response.json();
//           setClientSecret(paymentIntent.client_secret);
//         } else {
//           const errorData = await response.json();
//           console.error('Failed to create payment intent:', errorData);
//         }
//       } catch (e) {
//         console.error('Payment failed:', e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     createPaymentIntent();
//   }, [amount]);

//   return (
//     !loading && clientSecret ? (
//       <Elements stripe={stripePromise} options={{ clientSecret }}>
//         <CheckoutForm clientSecret={clientSecret} />
//       </Elements>
//     ) : (
//       <p>Loading...</p>
//     )
//   );
// };

// export default PaymentButton;

// Server and client side codes
//CLient side code
// PaymentButton.js
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51POLSORr2k4AYrtAOOYjO2SMtsENDlIASpZwrlpt5IpH8NLcO4BVpHBhzLlva2AUDQdP3Mp5z7Uc69yvHALJPlOz00HsM3RWZX"
);

const PaymentButton = ({ amount }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch(
        "http://localhost:4242/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      const session = await response.json();

      // Redirect to Checkout.
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // <button onClick={handleClick} disabled={loading}>
  //   {loading ? 'Loading...' : 'Pay Now'}
  // </button>
  return (
    <button className={`button`} disabled={loading} onClick={handleClick} >
      Proceed payment
    </button>
  );
};

export default PaymentButton;
