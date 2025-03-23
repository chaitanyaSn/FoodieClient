import React, { useState } from 'react';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zip: '',
    paymentMethod: 'credit',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Placed:', formData);
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout Form</h2>
          <p className="lead">Fill in your details to complete the purchase.</p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your Cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product 1</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing Address</h4>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" name="country" value={formData.country} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option value="IN">India</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" name="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Choose...</option>
                    <option value="MA">Maharashtra</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input type="text" className="form-control" name="zip" value={formData.zip} onChange={handleChange} required />
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="paymentMethod" value="credit" checked={formData.paymentMethod === "credit"} onChange={handleChange} />
                  <label className="form-check-label">Credit card</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="paymentMethod" value="debit" checked={formData.paymentMethod === "debit"} onChange={handleChange} />
                  <label className="form-check-label">Debit card</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="paymentMethod" value="paypal" checked={formData.paymentMethod === "paypal"} onChange={handleChange} />
                  <label className="form-check-label">PayPal</label>
                </div>
              </div>

      

              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to Checkout</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlaceOrder;
