import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Service from './Service/Service';

const Services = () => {
    const {tests} = useData();
    console.log(tests); 
    return (
        <div>

            <div className="container">
            <div className="my-3 py-5">
            <h2>Conditions We Treat</h2>
            <p>We treat every type of digestive disorders.</p>
            </div>
            <div>
            <Row xs={1} md={4} className="g-4">
            {
                    tests?.map(test=><Service key={test.testId} test={test}></Service>)
            }
            </Row>
            </div>
        </div>
        </div>
    );
};

export default Services;