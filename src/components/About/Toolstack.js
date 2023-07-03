import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiVisualstudiocode, SiSlack, SiJupyter } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'
import { GiOrange } from 'react-icons/gi'

function Toolstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiJupyter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BiLogoPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GiOrange />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
        </Row>
    )
}

export default Toolstack
