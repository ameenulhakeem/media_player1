import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <div className='container my-5' style={{fontFamily:'-moz-initial'}}>
            <Row className='d-flex justify-content-evenly align-items-center'>
                <Col>
                    <h3>Welcome to <span className='text-primary '>Media Player</span></h3>
                    <p style={{ textAlign: "justify" }}>Media players provide most or all of the following features. They allow users to organize their multimedia collection, play songs and movies, rip CD tracks to MP3 and other audio formats, burn CDs, listen to Internet radio, download content from online music stores and stream content from the Internet.</p>
                    <Link to={'./home'}>
                        <button className='btn btn-primary mt-5 rounded p-3'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
                    </Link>
                </Col>
                <Col>
                    <div className='ms-5 '>
                        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" height={'400px'} />
                    </div>
                </Col>
                <div className='container '>
                    <h3>Features</h3>
                    <div className='container d-flex justify-content-evenly align-items-center my-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Row>
            <div className='container border border-2 border-secondary rounded my-5 p-5'>
                <Row className='d-flex align-items-center justify-content-evenly'>
                    <div className='col-md-6'>
                        <h3 className='text-primary '>Simple And Powerfull</h3>
                        <p ><span className='fw-bold text-secondary fs-5'>Play Everything : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem minus maiores vero. Reiciendis voluptas numquam ad, distinctio veritatis eius harum accusantium similique cumque explicabo non saepe consequatur cum tempore. Magnam.</p>
                        <p><span className='fw-bold text-secondary fs-5'>Play Everything : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem minus maiores vero. Reiciendis voluptas numquam ad, distinctio veritatis eius harum accusantium similique cumque explicabo non saepe consequatur cum tempore. Magnam.</p>
                        <p><span className='fw-bold text-secondary fs-5'>Play Everything : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem minus maiores vero. Reiciendis voluptas numquam ad, distinctio veritatis eius harum accusantium similique cumque explicabo non saepe consequatur cum tempore. Magnam.</p>
                    </div>
                    <div className='col-md-6 p-5'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=3TQiW9XDPKbricZX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Row>
            </div>
        </div>
    )
}
export default Landingpage;