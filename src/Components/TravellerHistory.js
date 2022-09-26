import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

const TravellerHistory = (Props) => {

    const [Travel, setTravel] = useState([]);

    const getUsers = async () => {
        const Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(Response);
        setTravel(await Response.json());

    }



    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <img src="Image/14.jpg" className="img-fluid" alt="..." style={{ width: '100%', height: '670px' }} />
            <h3 className="text-center mt-5">{Props.title}</h3>
            <div className="container mt-2 text-center">
                <div className="row">
                    {
                        Travel.map((Travel) => {
                            return (
                                <div className="col-3 mt-5" key={Travel.id}>
                                    <div className="card" style={{ 'borderRadius': '30px', 'height': '100%' }}>
                                        <CgProfile className="CgProfile" style={{ 'height': '50px', 'width': '40px', 'margin': 'auto' }} />
                                        <div className="card-body">
                                            <h5 className="card-title"> {Travel.id} </h5>
                                            <p className="card-text">
                                                {Travel.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default TravellerHistory;
