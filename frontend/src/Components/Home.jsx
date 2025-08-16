import { Link } from 'react-router-dom'
import '../../src/App.css'
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
import Chatbot from '../Elements/Chatbot'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Elements/Footer';
import Navbar from '../Elements/Navbar';
import b1 from '../assets/images/blog1.png';
import b2 from '../assets/images/blog2.png';
import b3 from '../assets/images/blog3.png';
import b4 from '../assets/images/blog4.png';

const faqData = {
    "Q. General Questions": [
        { q: "How do I book an appointment?", a: "You can call us or book online via our portal." },
        { q: "What are the visiting hours?", a: "We're open from 8 AM to 8 PM daily." },
        { q: "What about the Visitor's Waiting Areas in your hospital?", a: "For the comfort of your loved ones, waiting areas are available. The nursing staff can direct you to the correct waiting area." },
    ],
    "Q. Billing & Insurance": [
        { q: "Which insurance do you accept?", a: "We accept Niva-Bupa, Nexus Health Insurance, and others." },
        { q: "How can I pay my bill?", a: "You can pay online, in person, or by phone." },
        { q: "Q. Who will guide me during the process of my treatment?", a: "Not just the medical physicians but each and every person involved with Nexus Healthcare." },

    ],
};
const PatientsReviews = [
    {
        name: "Prabhakar Singh",
        review:
            "I, Prabhakar Singh, 24, was diagnosed with a large 10L left ovarian cyst. (Dr.) Sunil Kumar Chawla handled my case with great care and professionalism.",
        posted: "Posted on: 17/06/2025",
        img: "./src/assets/images/patient6.png",
    },
    {
        name: "Ajit Singh Chopra",
        review:
            "Need a consultation regarding your health? I'm always ready to provide you professional health consulting at an affordable price.",
        posted: "Posted on: 27/04/2029",
        img: "./src/assets/images/patient2.png",
    },
    {
        name: "Rishabh Pant",
        review:
            "Need a consultation regarding your healthcare or diagnosis? I'm always ready to provide you with professional healthcare consulting at an affordable price.",
        posted: "Posted on: 27/09/2022",
        img: "./src/assets/images/patient3.png",
    },
    {

        name: "Madhurika Das",
        review:
            "My experience under the care of Dr. Sushil Sharma has been nothing short of extraordinary. As a Senior Consultant in Orthopedics and Joint Replacement Surgery, Dr. Sharma's expertise is unmatched. His thorough evaluation and personalized 31/06/2023",
        img: "./src/assets/images/patient5.png",
    },
];

function Home() {
    return (
        <>
        <Navbar/>
        <div>
      
            {/* Emergency Sticker - Better visibility */}
            <div className='position-fixed start-0 d-flex align-items-center justify-content-center text-white fw-bold'
                style={{
                    top: '25%',
                    height: '250px',
                    width: '40px',
                    backgroundColor: '#ff4444',
                    fontSize: '16px',
                    zIndex: 1000,
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    boxShadow: '3px 0 10px rgba(0,0,0,0.4)',
                    border: '2px solid #ffffff',
                    letterSpacing: '2px'
                }}>
                <div style={{
                    transform: 'rotate(-90deg)',
                    whiteSpace: 'nowrap',
                    fontWeight: '900',
                    fontSize: '18px',
                    cursor: 'pointer',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                    EMERGENCY
                </div>
            </div>

            {/* WhatsApp Sticker - Fixed positioning */}
            <div className='position-fixed d-flex align-items-center'
                style={{ right: '1.7%', bottom: '15%', zIndex: 1000 }}>
                    <a href="">
                <div className='rounded-circle d-flex align-items-center justify-content-center'
                    style={{ width: '60px', height: '60px',backgroundColor:'green' }}>
                    <img src="./src/assets/images/whats-app-logo.svg" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
                </div>
                </a>
            </div>

            <Chatbot />
            

            {/* Hero Section with Bootstrap */}
            <div className='container-fluid  schedule-appointment mb-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-md-12'>
                        <h2 className='text-primary text-center mb-4 mt-5'>Schedule Your Appointment Online</h2>
                        <div className='appointment-bar bg-white rounded p-4 mb-4 text-center'>
                            <div className='row rounded'>
                                <div className='col-lg-9 col-md-8 mb-3 mb-md-0'>
                                    <div className='input-group search-container h-100 rounded-2 bg-white'>
                                        <span className='input-group-text bg-transparent border-0 px-3'>
                                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className='form-control border-0 search-input fs-6'
                                            placeholder='Search For Doctor or Speciality'
                                            style={{ height: '70px', boxShadow: 'none' }}
                                        />
                                    </div>
                                </div>
                                 <div className='col-lg-3 col-md-4'>
                                    <Link to={'/find-doctor'} className='text-decoration-none'>
                                    <div className='h-100 rounded d-flex align-items-center justify-content-center text-white fw-bold'
                                        style={{ backgroundColor: '#0b8aa3ff', minHeight: '70px', borderRadius: '0 0.25rem 0.25rem 0', fontSize: '20px' }}>
                                        Book an Appointment
                                    </div> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Facilities Cards with Bootstrap Grid */}
                <div className='row justify-content-center mt-5 mx-3 cursor-pointer' id="facilities">
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                        <Link to="/find-doctor" className="text-decoration-none"> {/*Link to appointment page */}
                            <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto find-doc' style={{ maxWidth: '250px', minHeight: '150px' }}>
                                <img src="./src/assets/images/search-doctor2.gif" alt="Find a Doctor" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Find a Doctor</h6>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 cursor-pointer'>
                        <Link to="/labtest" style={{ textDecoration: 'none' }}>
                            <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto' style={{ maxWidth: '250px', minHeight: '150px' }}>
                                <img src="./src/assets/images/search-doctor.gif" alt="Health Check-up" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Health Check-up</h6>
                            </div>
                        </Link>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                    <Link to="/medicine" style={{ textDecoration: 'none' }}>
                        <div className='bg-white rounded shadow text-center p-3 h-100 mx-auto' style={{ maxWidth: '250px', minHeight: '150px' }}>
                            <img src="./src/assets/images/medi.gif" alt="Second Opinion" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                            <h6 className='mt-2 text-primary fw-bold' style={{ fontSize: '24px', margin: '0' }}>Medicine</h6>
                        </div>
                        </Link>
                    </div>
                    <div style={{height:'120px',width:'100vw'
            }}> <marquee behavior="" scrollamount="30" direction="right" style={{height:'180px',position:'absolute'}}><img src="./src/assets/images/ambulance.gif" alt="" className='marque-img'/></marquee></div>
                </div>
            </div>


            {/* Specialities Section with Bootstrap Grid */}
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="sp-container">
                            <h2 className="sp-title border-bottom border-primary pb-2 mb-4">Specialities & Procedures</h2>
                            <div className="sp-tabs mb-4">
                                <span className="active-tab text-info border-bottom border-info fw-bold">Specialities</span>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/first.png" alt="Cancer Centre" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Cancer Centre</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/second.png" alt="Heart & Vascular" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Heart & Vascular Institute</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/third.png" alt="Digestive & Liver" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Institute For Digestive & Liver Diseases</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/fourth.png" alt="Bone & Ortho" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Institute For Bone, Joint Replacement,<br /> Orthopedics Spine & Sports Medicine</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/fifth.png" alt="Bone Marrow" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Bone Marrow Transplant</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/sixth.png" alt="Neuro" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Neurosciences</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/seven.png" alt="Kidney" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Renal Sciences & Kidney Transplant</p>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <img src="./src/assets/images/eight.png" alt="Chest & Respiratory" className="me-3" style={{ width: '30px', height: '30px' }} />
                                        <p className="text-primary mb-0">Centre For Chest & Respiratory Diseases</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a href="#" className="text-primary text-decoration-none fw-bold">View all &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <a href="" className="d-block">
                        <img src="./src/assets/images/animation-specialist.gif" alt="" className='img-fluid ' style={{borderRadius:'50px'}}/>
                        </a>
                    </div>
                      <div style={{height:'50px',width:'100vw'
            }}> <img src="./src/assets/images/globe.gif" alt="" className='right-globe'/></div>
                </div>
            </div>

            {/* -----------------------------Facalities_section--------------------------------------- */}

            <div className="departments-bg py-5">
                <div className="container text-center">
                    <h2 className="mb-4 text-dark">OUR FACILITIES</h2>
                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/heart.gif" alt="" /></div>Emergency Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/stomach.gif" alt="" /></div>Pediatric Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4 active-card">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/urinery.gif" alt="" /></div> Gynecology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/kidney.gif" alt="" /></div>Cardiology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/chest.gif" alt="" /></div>Neurology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/skull.gif" alt="" /></div>Psychiatry Department</div>
                            </a>
                        </div>
                        <div className="card department-card px-3 py-4 active-card">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/teeth.gif" alt="" /></div> Gynecology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/brain.gif" alt="" /></div>Cardiology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/liver.gif" alt="" /></div>Neurology Department</div>
                            </a>
                        </div>

                        <div className="card department-card px-3 py-4">
                            <a href="" className='facalities-a-tag'>
                                <div className="icon mb-2"></div>
                                <div className="name"><div><img className='facalities-card-img' src="./src/assets/images/heart.gif" alt="" /></div>Psychiatry Department</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*----------------------------Patient_reviews--------------------------------- */}



            <div className="patient-review-section container my-5">
                <div className="patient-review text-center mb-4 pt-4">
                    <h2 style={{color:'black',fontFamily:"monospace",fontSize:'xxx-large'}}>What Our Patients Says</h2>
                </div>

                <div className="row">
                    {PatientsReviews.map((t, i) => (
                        <div className="patient-review-section-cards col-md-6 mb-4" key={i}>
                            <div className=" card border-0 shadow-sm p-3">
                                <div className="review-card-head d-flex align-items-center ">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="rounded-circle me-3"
                                        width="70"
                                        height="70"
                                        style={{ position: 'sticky' }}
                                    />
                                    <div>
                                        <h6 className="mb-0">{t.name}</h6>
                                        <small className="text-muted">{t.position}</small>
                                    </div>
                                </div>
                                <p>{t.review}</p>
                                <p className="text-muted">{t.posted}</p>
                                <div className="text-warning">
                                    {"★★★★★"}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>

                <div className="text-center pb-4">
                    <a href="">
                        <button className="consultation-button ">Get Consultation</button>
                    </a>
                </div>
            </div>


            {/* ---------------------------Faq-section----------------------------------------- */}



            <Container className="faq-section my-5">
                <h2 className="faq-heading text-center">Do You Have Questions?</h2>
                <p className="text-center text-muted">We have answers (well, most of the time!)</p>
                <img className='faq-image' src="./src/assets/images/faq-image.png" alt="" />
                <Row className="mt-4">
                    {Object.entries(faqData).map(([category, items], colIndex) => (
                        <Col md={6} key={colIndex}>
                            <h4 className='faq-que-heading'>{category} FAQs</h4>
                            <Accordion defaultActiveKey="0">
                                {items.map((item, idx) => (
                                    <Accordion.Item eventKey={idx.toString()} key={idx}>
                                        <Accordion.Header>{item.q}</Accordion.Header>
                                        <Accordion.Body>{item.a}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                    ))}
                    
                </Row>
                
            </Container>

            {/* ----------------------Blog_section-------------------------------------- */}

<Container className="my-5">
      <Row className="justify-content-between align-items-center mb-3">
        <Col><h4>Health Blogs</h4></Col>
       
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
       <Link to={"/blog"} className='text-decoration-none'><Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b1} />
              <Card.Body>
                <Card.Title className="fs-6">Understanding Blood Cancer & Its Symptoms</Card.Title>
                <Card.Text className="text-muted">Cancer means uncontrolled growth of...</Card.Text>
              </Card.Body>
            </Card>
          </Col></Link>

          <Link to={"/blog"} className='text-decoration-none'><Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b2} />
              <Card.Body>
                <Card.Title className="fs-6">Migraine headache: Symptoms, Home Remedies, and Treatment</Card.Title>
                <Card.Text className="text-muted">Migraine means uncontrolled growth of...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
</Link>

 <Link to={"/blog"} className='text-decoration-none'>
        <Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b3} />
              <Card.Body>
                <Card.Title className="fs-6">Lung Cancer Symptoms: Everything You Need to Know</Card.Title>
                <Card.Text className="text-muted">Lung cancer is a severe form of cancer...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
</Link>
 <Link to={"/blog"} className='text-decoration-none'>
          <Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b4} />
              <Card.Body>
                <Card.Title className="fs-6">Breast Cancer Symptoms: Early Detection Is Key to Effective...</Card.Title>
                <Card.Text className="text-muted">Breast cancer demands early detection...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
  </Link>
      </Row>

    </Container>

        </div>
        <Footer/>
        </>
        
    )
}

export default Home