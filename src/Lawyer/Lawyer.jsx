import React from 'react'
import "./legal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPhone,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

const Lawyer = () => {
  return (
    <div className="bg-white">
    <div className="page-heading bg-dark bg-gradient text-light pt-4 pb-4 container-fluid">
      <h1 className="legalAd ps-5">LEGAL ADVICE</h1>
    </div>
    <div className="latestAns border rounded-5 border-dark mt-5 ms-5 me-5">
      <div className="heading-latest mt-4 ms-4">
        <h3 className="text-decoration-underline">Latest Answers:</h3>
      </div>
      <div className="content-latest-top mt-4 ms-4">
        <Row>
          <Col>
            <p className="fw-bold">
              Are domestic workers eligible for pension, paid leaves and
              maternity benefits?
            </p>
            With the passing of the domestic workers (Registration, social
            security and welfare) Act 2008 every registered domestic....
          </Col>
          <Col lg>
            <p className="fw-bold">
              Are there any law protecting domestic workers against sexual
              harassment?
            </p>
            Section 23 of the Domestic Workers Act, 2008 mentions that any
            person who sexually harasses domestic worker or child will be
            punishable...
          </Col>
          <Col lg>
            <p className="fw-bold">
              Where can the domestic worker complain if there is under payment
              or an other problem?
            </p>
            District Board shall be constituted by Central Government or State
            Government, which will review...
          </Col>
        </Row>
        <br></br>
        <Row className="mt-3 mb-4">
          <Col lg>
            <p className="fw-bold">
              Do abusers show any potential warning signs?
            </p>
            They criticize their partner’s appearance and make frequent
            put-downs. Their words and actions don’t match...
          </Col>
          <Col lg>
            <p className="fw-bold">Is it possible for abusers to change? </p>
            Yes, but they must first make the choice to change their behavior.
            It’s not easy for an abusive partner to stop choosing abusive
            behavior, once an abuser has had all of the power in a
            relationship, it’s difficult to transition.
          </Col>
          <Col lg>
            <p className="fw-bold">
              How does the economy affect domestic violence?
            </p>
            A bad economy does not cause domestic violence, but it can make it
            worse. Job loss, housing foreclosures, debt, and other factors
            contribute to higher stress levels at home...
          </Col>
        </Row>
      </div>
    </div>
    <div className="cardsBtn mt-5 mb-5 d-flex flex-column flex-sm-row align-items-center justify-content-evenly flex-wrap">
      <div className="cards card1">
        <div className="cards-content d-flex flex-column align-items-center">
          <div className="card1-heading cards-heading">Ask a Question</div>
          <div className="cards-inner-content">
            Get legal answers from laywers. It's quick, easy and anonymous!
          </div>
          <button className="cards-button ">
            <FontAwesomeIcon icon={faMessage} className="me-3" />
            Ask here
          </button>
        </div>
      </div>
      <div className="cards card2">
        <div className="cards-content d-flex flex-column align-items-center">
          <div className="card2-heading cards-heading">Talk to a Lawyer</div>
          <div className="cards-inner-content">
            Personally talk to a lawyer about your problems.
          </div>
          <button className="cards-button">
            <FontAwesomeIcon icon={faPhone} className="me-3" />
            Find a Lawyer
          </button>
        </div>
      </div>
      <div className="cards card3">
        <div className="cards-content d-flex flex-column align-items-center">
          <div className="card1-heading cards-heading">Hire a Lawyer</div>
          <div className="cards-inner-content">
            Get a reputated lawyer to sort out your problems.
          </div>
          <button className="cards-button">
            <FontAwesomeIcon icon={faUserCheck} className="me-3" />
            Hire here
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lawyer