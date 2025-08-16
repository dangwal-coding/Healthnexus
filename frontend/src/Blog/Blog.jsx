import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import b1 from '../assets/images/blog1.png';
import b2 from '../assets/images/blog2.png';
import b3 from '../assets/images/blog3.png';
import b4 from '../assets/images/blog4.png';
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

function Blogs() {
    return (
      <>
      <Navbar />
        <Container>
          <Card className="p-4 d-flex flex-md-row align-items-center #f1f3fb' border-0">
          <Col md={7}>
            <h2 className="fw-bold mb-3">The Ultimate Guide to Holistic Health: <br />Mind, Body, and Soul</h2>
            <p>
              Embark on a journey toward comprehensive well-being. This blog series delves into the interconnected realms of mind, body, and soul, exploring the profound impact each has on your overall health,              Embark on a journey toward comprehensive well-being. This blog series delves into the interconnected realms of mind, body, and soul, exploring the profound impact each has on your overall health,              Embark on a journey toward comprehensive well-being. This blog series delves into the interconnected realms of mind, body, and soul, exploring the profound impact each has on your overall health,              Embark on a journey toward comprehensive well-being. This blog series delves into the interconnected realms of mind, body, and soul, exploring the profound impact each has on your overall health...
            </p>
            <a href="#" className="fw-bold text-decoration-underline">Continue reading...</a>
          </Col>
          <Col md={5}>
            <img
              src="./src/assets/Photos/h.jpg"
              alt="Holistic Health"
              className="img-fluid rounded"
            />
          </Col>
        </Card>
      </Container>
      <Row className=" g-4 mt-3">
  {/* Card 1 - Fitness */}
</Row>
<Container className="my-5">
      <Row className="justify-content-between align-items-center mb-3">
        <Col><h4>Health Blogs</h4></Col>
       
      </Row>
      <Row xs={1} md={2} lg={4} className="g-4">
       <Link to={"/blog"}><Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b1} />
              <Card.Body>
                <Card.Title className="fs-6">Understanding Blood Cancer & Its Symptoms</Card.Title>
                <Card.Text className="text-muted">Cancer means uncontrolled growth of...</Card.Text>
              </Card.Body>
            </Card>
          </Col></Link>

          <Link to={"/blog"}><Col>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={b2} />
              <Card.Body>
                <Card.Title className="fs-6">Migraine headache: Symptoms, Home Remedies, and Treatment</Card.Title>
                <Card.Text className="text-muted">Migraine means uncontrolled growth of...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
</Link>

 <Link to={"/blog"}>
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
 <Link to={"/blog"}>
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
 <div className="container mt-4" style={{  padding: '2rem', borderRadius: '10px' }}>
      <div className="row">
        {/* Main Blog Content */}
        <div className="col-md-8">
          <p className="fst-italic text-muted">From Healthful Integration Rises</p>
          <hr />

          <h1 className="fw-bold">Sample blog post</h1>
          <p className="text-muted">January 1, 2021 by <a href="#">Mark</a></p>

          <h3 className="fw-semibold">
            Harmony Within: Nurturing Mind, Body, and Soul on the Holistic Health Odyssey
          </h3>
          <p>
            In the hustle and bustle of our modern lives, the pursuit of holistic health has emerged as a beacon 
            guiding us toward a more profound sense of well-being. It transcends the physical, inviting us to explore 
            the intricate interplay between mind, body, and soul. "The Ultimate Guide to Holistic Health: Mind, Body, 
            and Soul" is not just a collection of practices; it is a transformative journey that beckons us to embark 
            on an odyssey of self-discovery and profound well-being.
          </p>

          <h3 className="fw-semibold">Embarking on the Holistic Odyssey:</h3>
          <p>
            Consider this journey not as a destination but as a state of being—a tapestry woven with threads of 
            mindfulness, movement, and spiritual exploration. Holistic health is an odyssey, a pilgrimage to the core of 
            our existence, a quest that begins with understanding the interconnectedness of the mind, body, and soul.
          </p>

          <h3 className="fw-semibold">Igniting the Soul:</h3>
          <p>
            In a world where the mind often resembles a turbulent sea of thoughts, our guide unfolds the art of 
            mindfulness—an ancient practice with contemporary relevance. Mindfulness extends beyond meditation mats; it 
            seeps into the fabric of everyday life. Through intentional breathing, visualization, and meditation, we 
            learn to quiet the mind, paving the way for mental clarity and inner peace. This isn't just about calming 
            the storm but about navigating the waves with grace.
          </p>
            <h3 className="fw-semibold">Revitalizing the Body:</h3>
            <p>
                The body, a magnificent vessel, demands not just attention but reverence. Holistic fitness, an amalgamation of ancient wisdom and modern science, becomes the key to unlocking physical vitality. Yoga, with its graceful postures and breathwork, offers more than just a workout; it's a gateway to holistic well-being. Dynamic exercises, carefully curated to invigorate and strengthen, awaken dormant energy within. The guide encourages us to view exercise not as a chore but as a celebration of the body's capabilities—a dance of movement that nurtures our physical and mental selves.
            </p>
            <h3 className="fw-semibold">The Dance of Balance:</h3>
          <p>
            In a world where the mind often resembles a turbulent sea of thoughts, our guide unfolds the art of 
            mindfulness—an ancient practice with contemporary relevance. Mindfulness extends beyond meditation mats; it 
            seeps into the fabric of everyday life. Through intentional breathing, visualization, and meditation, we 
            learn to quiet the mind, paving the way for mental clarity and inner peace. This isn't just about calming 
            the storm but about navigating the waves with grace.
          </p>
          <h3 className="fw-semibold">Cultivating a Harmonious Lifestyle:</h3>
          <p>
            In a world where the mind often resembles a turbulent sea of thoughts, our guide unfolds the art of 
            mindfulness—an ancient practice with contemporary relevance. Mindfulness extends beyond meditation mats; it 
            seeps into the fabric of everyday life. Through intentional breathing, visualization, and meditation, we 
            learn to quiet the mind, paving the way for mental clarity and inner peace. This isn't just about calming 
            the storm but about navigating the waves with grace.
          </p>
          <h3 className="fw-semibold">The Symphony of Well-being:
</h3>
          <p>
            In a world where the mind often resembles a turbulent sea of thoughts, our guide unfolds the art of 
            mindfulness—an ancient practice with contemporary relevance. Mindfulness extends beyond meditation mats; it 
            seeps into the fabric of everyday life. Through intentional breathing, visualization, and meditation, we 
            learn to quiet the mind, paving the way for mental clarity and inner peace. This isn't just about calming 
            the storm but about navigating the waves with grace.
          </p>
          <h3 className="fw-semibold">The Finale: Embracing Holistic Wellness</h3>
          <p>
            In a world where the mind often resembles a turbulent sea of thoughts, our guide unfolds the art of 
            mindfulness—an ancient practice with contemporary relevance. Mindfulness extends beyond meditation mats; it 
            seeps into the fabric of everyday life. Through intentional breathing, visualization, and meditation, we 
            learn to quiet the mind, paving the way for mental clarity and inner peace. This isn't just about calming 
            the storm but about navigating the waves with grace.
          </p>
            

                  </div>

        {/* Sidebar */}
        <div className="col-md-4">
          <div className="bg-light p-3 rounded mb-4">
            <h5 className="fst-italic">About</h5>
            <p>
              Customize this section to tell your visitors a little bit about your publication, writers, content, or 
              something else entirely. Totally up to you.
            </p>
          </div>

          <h5 className="fst-italic">Recent posts</h5>
          <div className="d-flex mb-3">
            <img src="./src/assets/Photos/a1.png" alt="Mindful Eating" className="me-2 rounded" />
            <div>
              <strong>Mindful Eating Journal Prompts</strong>
              <div className="text-muted">January 15, 2023</div>
            </div>
          </div>

          <div className="d-flex mb-3">
            <img src="./src/assets/Photos/a2.png" alt="Blood Test" className="me-2 rounded" />
            <div>
              <strong>WHAT REASONS WOULD YOU NEED A BLOOD TEST FOR?</strong>
              <div className="text-muted">January 14, 2023</div>
            </div>
          </div>

          <div className="d-flex mb-3">
            <img src="./src/assets/Photos/a3.png" alt="Hydration" className="me-2 rounded" />
            <div>
              <strong>THE LINK BETWEEN HYDRATION AND HEALTH</strong>
              <div className="text-muted">January 13, 2023</div>
            </div>
          </div>


<h5 className="fst-italic mt-4">Archives</h5>

<ul className="list-unstyled mt-2">
  <li><a href="#" className="text-primary text-decoration-none">March 2021</a></li>
  <li><a href="#" className="text-primary text-decoration-none">February 2021</a></li>
  <li><a href="#" className="text-primary text-decoration-none">January 2021</a></li>
  <li><a href="#" className="text-primary text-decoration-none">December 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">November 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">October 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">September 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">August 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">July 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">June 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">May 2020</a></li>
  <li><a href="#" className="text-primary text-decoration-none">April 2020</a></li>
</ul>

        </div>
      </div>
    </div>
   <Footer />

      </>
    )
}

export default Blogs
