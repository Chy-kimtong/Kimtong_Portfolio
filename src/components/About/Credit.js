import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Credit() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col md="10" className="tech-icons">
                <h4>
                    I would like to thanks Mr.Soumyajit Behera for this
                    Portfolio. Designed and Developed are publicly on github:{' '}
                    <a
                        href="https://github.com/soumyajit4419/Portfolio"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Here
                    </a>
                </h4>
            </Col>
        </Row>
    )
}

export default Credit
