import React from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';

const Appointment = () => {
    const {appID} = useParams();
    const {tests} = useData();
    const test = tests?.find(ts=> ts.testId===appID );
    console.log(test);
    console.log(appID);
    return (
        <div className="container my-5">
            <h2>We are going to learn details about {test?.testName} </h2>
            <p>Read this page properly to know about {test?.testName}</p>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-8 w-50 me-5 my-auto">
                        <h2 className="mb-5">{test?.descriptionTitle}</h2>
                        <p>{test?.testDescription}</p>
                    </div>
                    <div className="col-md-4">
                        <img src={test?.img} className="card-img-top card-image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;