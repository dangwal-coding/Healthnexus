
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Medicine.css";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import liver from '../assets/liver.webp'
import cold from '../assets/cold.webp'
import old from '../assets/old.webp'
import pain from '../assets/pain.webp'
import respiration from '../assets/respiration.webp'
import diabetes from '../assets/diabetes.webp'
import stomach from '../assets/stomach.webp'
import sexual from '../assets/heart.webp'
import cardiac from '../assets/cardiac.webp'
import oral from '../assets/oral.webp'
import lab from '../assets/lab.svg'
import shop from '../assets/shop.webp'
import health from '../assets/health.svg'
import medicine from '../assets/medicine.svg'
import doctor from '../assets/doctor.svg'
import { loadStripe } from '@stripe/stripe-js';


export default function Medicine() {
  const [query, setQuery] = useState('')
  const [medicines, setMedicines] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [selectedMedicine, setSelectedMedicine] = useState(null);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  address: '',
});

  const queryParams = new URLSearchParams(window.location.search);
const status = queryParams.get('payment');

useEffect(() => {
  if (status === 'success') {
    alert('Payment successful! Details have been sent to your email.');
  } else if (status === 'cancel') {
    alert('Payment cancelled.');
  }
}, []);
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};
const openCheckoutModal = (medicine) => {
  setSelectedMedicine(medicine);
  setShowModal(true);
};

const handleCheckout = async () => {
  const { name, email, phone, address } = formData;
  if (!name || !email || !phone || !address) {
    return alert("Please fill out all the fields.");
  }

  try {
    const stripe = await loadStripe("pk_test_51Rvv1xJCsoKPd0cPHYMfKkTlxO9rCXl0imzzbNmQrsGGBERPKi9ZHFQW65zXMfn9aRjwrtoxlAVZlneInRQR7RG800hkgTjiva");

    const response = await axios.post('http://localhost:8000/api/payment/create-medicine-checkout-session', {
      medicineName: selectedMedicine.name,
      medicinePrice: selectedMedicine.price,
      user: formData,
    });

    const sessionId = response.data.id;
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error('Payment failed', error);
    alert('Failed to initiate payment');
  }
};


  useEffect(() => {
    async function fetchMedicineData() {
      try {
        const response = await axios.get("http://localhost:8000/medicine");
        if (response.data.msg === "success") {
          setMedicines(response.data.value);
        }
      } catch {
        alert("Failed to fetch medicines");
      }
    }
    fetchMedicineData();
  }, []);

 const filtered = medicines.filter(m => (m.name || '').toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <Navbar />
      {/* header start here */}
       <div className="container p-3">
      
              <div className="row g-3">
      
                <div className="col  text-white rounded mx-3 p-3 card-custom d-flex justify-content-between"> <img src={shop} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
                  <div className="fw-bold">Pharmacy near Me</div>
                  <small className="text-muted">FIND NOW</small>
                </div> </div>
                <div className="col  text-white rounded mx-3 p-3 card-custom-2 d-flex justify-content-between"> <img src={medicine} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
                  <div className="fw-bold">Get 20% off on all Medicines</div>
                  <small className="text-muted">ORDER NOW</small>
                </div> </div>
                <div className="col  text-white rounded mx-3 p-3 card-custom-3 d-flex justify-content-between">  <img src={health} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
                  <div className="fw-bold">Health Insurance</div>
                  <small className="text-muted">EXPLORE NOW</small>
                </div> </div>
                <div className="col  text-white rounded mx-3 p-3 card-custom-4 d-flex justify-content-between"> <img src={doctor} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
                  <div className="fw-bold">Order With Prescription</div>
                  <small className="text-muted">ORDER NOW</small>
                </div></div>
                <div className="col text-white rounded mx-3 p-3 card-custom-5 d-flex justify-content-between"> <img src={lab} alt="icon" className="icon-img me-2" /> <div className="my-auto text-dark">
                  <div className="fw-bold">Covid Essentials</div>
                  <small className="text-muted">AT HOME</small>
                </div>  </div>
              </div>
            </div>
      {/* header end here */}

    {/* -------------------------------------------- Browse By Health Conditions Section ------------------------------------                    */}

      {/* -------------------------------------------- Carousel Section ------------------------------------------------------------------ */}


      <div id="carouselExampleControls" className="carousel slide p-3" data-bs-ride="carousel" data-bs-interval="2500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="c1.jpg" className="d-block img-thumbnail w-100 rounded carousel-img-fixed" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c2.jpg" className="d-block img-thumbnail w-100 rounded carousel-img-fixed" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c3.jpg" className="d-block img-thumbnail w-100 rounded carousel-img-fixed" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c4.jpg" className="d-block img-thumbnail w-100 rounded carousel-img-fixed" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="c5.jpg" className="d-block img-thumbnail w-100 rounded carousel-img-fixed" alt="..." />
          </div>
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}></span>
          </button>
      </div>


      {/*--------------------------------------------- Carousel Section End ------------------------------------------------------------------ */}


      <div className="container text-center p-3">


        <h2 className="mb-4 fw-bold ">
          <span className='text-success'>Browse By Health </span>Conditions</h2>



        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div class="p-3 border bg-light rounded-pill">
              <img src={diabetes} alt="icon" className="icon-img me-2" />
              Diabetes Care</div>
          </div>
          <div className="col">
            <div class="p-3 border bg-light rounded-pill">
              <img src={oral} alt="icon" className="icon-img me-2" />
              Oral Care</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light rounded-pill">
              <img src={stomach} alt="icon" className="icon-img me-2" />
              Stomach Care</div>
          </div>
          <div className="col">
            <div class="p-3 border bg-light rounded-pill">
              <img src={pain} alt="icon" className="icon-img me-2" />
              Pain Rlief</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light rounded-pill">
              <img src={liver} alt="icon" className="icon-img me-2" />
              Liver Care</div>
          </div>
          <div className="col">
            <div class="p-3 border bg-light rounded-pill">
              <img src={old} alt="icon" className="icon-img me-2" />
              Elder Care</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light rounded-pill">
              <img src={cold} alt="icon" className="icon-img me-2" />
              Cold & Immunity</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light rounded-pill">
              <img src={sexual} alt="icon" className="icon-img me-2" />
              Sexual Health</div>
          </div>
          <div className="col">
            <div class="p-3 border bg-light rounded-pill">.
              <img src={respiration} alt="icon" className="icon-img me-2" />

              Respiratory Care</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light rounded-pill">
              <img src={cardiac} alt="icon" className="icon-img me-2" />
              Cardiac Care</div>
          </div>
        </div>
      </div>



      {/* -------------------------------------------- Browse By Health Conditions Section End -------------------------------------------------- */}

      <div className="container mt-4">
        <div className="py-4 d-flex justify-content-center align-items-center" style={{ maxWidth: 500, margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Search medicines..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="form-control"
          />
            <button
            className="btn btn-success ms-3"
            style={{ minWidth: 100 }}
          >
            Search
          </button>
        </div>
        <h2 className="mb-4 fw-bold mt-4">Medicines</h2>
        <div className="row gy-4">
          {filtered.length === 0 ? (
            <div className="col-12 text-center text-muted">No medicines found.</div>
          ) : (
            filtered.map(med => (
              <div key={med._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100">
                  <img
                    src={`http://localhost:8000/public/image/medicine/${med.imageUrl}`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={med.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{med.name}</h5>
                    <p className="card-text text-muted small mb-2">{med.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">₹{med.price}</div>
                        <small className="text-success">{med.turnaround} turnaround</small>
                      </div>
                      <div>
                        <button className="btn btn-sm btn-primary" onClick={() => openCheckoutModal(med)}>Buy</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
            {/* --------------------------------------------  Brands Section ------------------------------------------------------------- */}

      <div className="container p-3">
        <h2 className="mb-4 fw-bold text-center"> <span className='text-success'>Brands</span> We Trust</h2>

        <div id="pharmacyCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp1.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand1" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp2.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand2" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp3.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand3" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp4.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp5.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand5" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp6.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand6" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp7.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand7" />
                  </div>
                </div>
                <div className="col-md-3 p-3">
                  <div className="shadow-sm border-0 h-100">
                    <img src="sp8.webp" className="card-img-top img-thumbnail rounded carousel-img-size-fixed" alt="brand8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#pharmacyCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}></span>
          </button>
        </div>
      </div>

      {/* --------------------------------------------  Brands Section End ------------------------------------------------------------- */}
      {/* -------------------------------------------- Carousel Section ------------------------------------------------------------- */}

      <div id="myCarousel" className="carousel slide p-3" data-bs-ride="carousel" data-bs-interval="1000">
        <h2 className="mb-4 fw-bold text-center">India’s Largest <span className='text-success'> Healthcare Platform</span></h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <img src="Save.png" className="d-block w-100 carousel-img-fixed" alt="Image 1" />
              </div>
              <div className="col-md-6">
                <img src="80%.png" className="d-block w-100 carousel-img-fixed" alt="Image 2" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* -------------------------------------------- Carousel Section End ------------------------------------------------------------- */}


{showModal && (
  <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Checkout - {selectedMedicine?.name}</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" name="phone" onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" name="address" rows="3" onChange={handleInputChange}></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="btn btn-success" onClick={handleCheckout}>Complete Checkout</button>
        </div>
      </div>
    </div>
  </div>
)}


      <Footer />
    </>
  );
}
