import Aos from 'aos';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/useData';

const Appointment = () => {
    const {appID} = useParams();
    const {tests} = useData();
    const test = tests?.find(ts=> ts.testId===appID );
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="container my-5" data-aos="zoom-in-up"  data-aos-duration="1000">
            <h2 data-aos="fade-up-right">We are going to learn details about {test?.testName} </h2>
            <p data-aos="fade-up-left">Read this page properly to know about {test?.testName}</p>
            <div className="container">
                <div className="row my-5" >
                    <div className="col-sm-10 col-md-8  my-auto" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="800"
     data-aos-duration="1500">
                        <h2 className="mb-5">{test?.descriptionTitle}</h2>
                        <p>{test?.testDescription}</p>
                    </div>
                    <div className="col-sm-12 col-md-4" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="800"
     data-aos-duration="1500">
                        <img src={test?.img} className="card-img-top card-image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;