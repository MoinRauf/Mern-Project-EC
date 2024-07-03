const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51POLSORr2k4AYrtAMTYxJpf3cZ55y7E23oRnHNAVtT96O28obBtB6zPA9ts8O7fdum9qIlw733YqhLuUbG6tNh7B008htkEosZ');
const cors = require('cors'); // Import cors package

const app = express();
app.use(cors()); // Use cors middleware
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Total Amount',
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));
