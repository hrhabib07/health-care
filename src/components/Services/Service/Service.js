import { faCalendarPlus, faCalendarTimes, faClock, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({test}) => {
    const {testName, img, testFees, reportDevivery} = test;
    return (
        <div>
             <Col>
      <Card className="card-container">
        <Card.Img variant="top" src={img} className="card-image" />
        <Card.Body>
          <Card.Title> <h2>{testName}</h2>
          </Card.Title>
          <Card.Text>
            <><b><FontAwesomeIcon className="regular-icon" icon={ faWallet}/> {testFees} BDT</b></>
            <br />
            <><b><FontAwesomeIcon className="time-icon" icon={ faClock}/> {reportDevivery} hrs</b></>
            <br />
            <button className="btn-regular my-3">Get a Schedule <FontAwesomeIcon className="regular-icon" icon={ faCalendarPlus}/> </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;  