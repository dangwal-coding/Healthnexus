import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

const AddCart = ({ cart = [], updateQuantity, removeFromCart, clearCart, totalAmount = 0 }) => {
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);

  const handlePayNow = () => {
    setPaidAmount(totalAmount); // Store the amount before clearing cart
    setShowPaymentSuccess(true);
    // Clear the cart after successful payment
    if (clearCart) {
      clearCart();
    }
    // Hide the success message after 4 seconds
    setTimeout(() => {
      setShowPaymentSuccess(false);
    }, 4000);
  };

  if (showPaymentSuccess) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <img 
            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" 
            alt="Payment Success" 
            style={{ width: '250px', height: '250px', borderRadius: '10px' }}
          />
        </div>
        <h3 className="text-success mb-3">🎉 Payment Successful!</h3>
        <p className="text-muted mb-4">Your order has been confirmed. You will receive a confirmation email shortly.</p>
        <div className="bg-light p-3 rounded">
          <p className="mb-1"><strong>Order Summary:</strong></p>
          <p className="mb-1">Total Amount: ₹{paidAmount}</p>
          <p className="mb-0 text-success">Status: ✅ Confirmed</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      {/* Cart Section */}
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted">Your cart is empty</h4>
          <p className="text-muted">Add some tests to get started!</p>
        </div>
      ) : (
        <>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Test</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title || item.name}</td>
                  <td>₹{item.price}</td>
                  <td style={{ width: "120px" }}>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity && updateQuantity(item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart && removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end fw-bold">
                  Total:
                </td>
                <td colSpan="2" className="fw-bold">
                  ₹{totalAmount}
                </td>
              </tr>
            </tfoot>
          </table>
          
          {/* Pay Now Button */}
          <div className="text-center mt-4">
            <Button 
              variant="success" 
              size="lg" 
              onClick={handlePayNow}
              className="px-5 py-3"
              style={{ fontSize: '1.2rem' }}
            >
              💳 Pay Now - ₹{totalAmount}
            </Button>
            <p className="text-muted mt-2 small">Click to proceed with payment</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AddCart;