const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = Stripe("sk_test_51Rvv1xJCsoKPd0cPd6wdAwqUImOsCBmVwhTLT0kvVKERJwW4BvREGmpyJBu2GHHzIhNjHfXQq7eIjqFRaRacC3MI00dfNzWpFI"); // replace with your Secret Key

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { doctorName, doctorFee } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: `Appointment with Dr. ${doctorName}`,
          },
          unit_amount: doctorFee * 100, // INR to paise
        },
        quantity: 1,
      }],
      success_url: 'http://localhost:5173/find-doctor?payment=success',
      cancel_url: 'http://localhost:5173/find-doctor?payment=cancel',
      
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
router.post('/create-medicine-checkout-session', async (req, res) => {
  try {
    const { medicineName, medicinePrice, user } = req.body;

    // Destructure user info (for optional logging or metadata)
    const { name, email, phone, address } = user || {};

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email, // Set email in session
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: medicineName,
            metadata: {
              customer_name: name || '',
              customer_phone: phone || '',
              customer_address: address || '',
            }
          },
          unit_amount: medicinePrice * 100, // Convert to paisa
        },
        quantity: 1,
      }],
      metadata: {
        customer_name: name || '',
        customer_phone: phone || '',
        customer_address: address || '',
        product: medicineName,
      },
      success_url: 'http://localhost:5173/medicine?payment=success',
      cancel_url: 'http://localhost:5173/medicine?payment=cancel',
    });

    res.json({ id: session.id });

  } catch (err) {
    console.error('Stripe checkout session creation failed:', err);
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
