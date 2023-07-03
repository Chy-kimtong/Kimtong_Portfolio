import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { FiFacebook } from 'react-icons/fi'

function Footer() {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Chy-kimtong"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/kimtong-chy2001/"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.kaggle.com/chykimtong"
                                target="_blank"
                                style={{ color: 'white' }}
                                rel="noopener noreferrer"
                            >
                                <SiKaggle />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.facebook.com/kimtong.boysingle"
                                style={{ color: 'white' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiFacebook />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
