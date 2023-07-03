import React from 'react'
import Card from 'react-bootstrap/Card'
import { BiSolidRightArrow } from 'react-icons/bi'

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hello everyone, I'm{' '}
                        <span className="purple">Kimtong Chy </span>
                        from{' '}
                        <span className="purple">
                            {' '}
                            Phnom Penh City of Cambodia
                        </span>
                        <br /> I am a final year student of{' '}
                        <span className="purple">
                            Kirirom Institute of Technology
                        </span>
                        , major
                        <span className="purple"> Software Engineering</span>
                        <br />
                        I am currently doing a research on data science field
                        which are machine learning, data analyst and artificial
                        intelligent.
                        <br />
                        <br />
                        <br />
                        Apart from coding and doing research, I am also interest
                        in doing such as:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Playing Mobile Games
                        </li>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Taking photoes
                        </li>
                        <li className="about-activity">
                            <BiSolidRightArrow /> Travelling
                        </li>
                        <li className="about-activity">
                            <BiSolidRightArrow /> and creating a story
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Looking for improvement without bringing a difficult on
                        the other"{' '}
                    </p>
                    <footer className="blockquote-footer">Soumyajit</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
