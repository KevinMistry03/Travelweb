import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiFillCaretUp, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const TravelPackage = (props) => {


    // Count Number first
    const [Count, setCount] = useState(3);

    // Count Number secound
    const [first, setfirst] = useState(3);

    // Count Number Third
    const [Road, setRoad] = useState(3);


    // Adults First Plus State
    const [Adult, setAdult] = useState(1);
    const [Children, setChildren] = useState(1);

    // Adults Secoend Plus State
    const [Circle, setCircle] = useState(1);
    const [Html, setHtml] = useState(1);

    // Adults Third Plus State
    const [Square, setSquare] = useState(1)
    const [Aware, setAware] = useState(1);



    useEffect(() => {
        console.log('first load');
        if (Count > 1) {
            document.title = `Notification (${Count})`
        }
        else {
            document.title = `Notification`
        }
    }, [Count]);

    useEffect(() => {
        console.log('slow reload');
    }, []);










    return (
        <>

            <img src="Image/13.jpeg" className="img-fluid" alt="..." style={{ width: '100%', height: '670px' }} />
            <h1 className="text-center mt-5" > {props.title} </h1>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-4'>
                        <div className="card" style={{ width: "22rem" }}>
                            <img src="Image/1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Paris Hill Tour</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 pt-3 badge bg-info border-0 rounded-0 pt-3 text-light text-start">
                                    <button type="button" className="btn btn-link">
                                        <a href="https://www.google.co.in/maps/place/Free+Montmartre+Tour/@48.883475,-31.4169906,4z/data=!4m9!1m2!2m1!1sParis+Hill+Tour!3m5!1s0x47e66e4f02561459:0xd2e9426cd6eda4a6!8m2!3d48.8834631!4d2.3330193!15sCg9QYXJpcyBIaWxsIFRvdXKSAQ10b3VyX29wZXJhdG9y4AEA?hl=en" target={'blank'}> View On Maps </a>
                                    </button>
                                </li>

                                <li className="list-group-item">{Count}
                                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setCount(Count + 1)} style={{ margin: '0px 37px' }}>
                                        Select Days <AiFillCaretUp className="AiFillCaretUp" />
                                    </button>
                                </li>

                                <li className="list-group-item badge bg-info border-0 rounded-0 pt-3 text-start text-light"> <h6>Adults</h6>
                                    <div className="Rail">
                                        <button type="button" className="btn btn-light" onClick={() => setAdult(Adult + 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" />
                                        </button>
                                        <span>{Adult}</span>
                                        <button type="button" className="btn btn-light" onClick={() => setAdult(Adult - 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" />
                                        </button>
                                    </div>
                                </li>

                                <li className="list-group-item border-0 rounded-0 pt-3 text-start"><h6>Childrens</h6>
                                    <div className="Iphone">
                                        <button type="button" className="btn btn-dark" style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" onClick={() => setChildren(Children + 1)} />
                                        </button>
                                        {Children}
                                        <button type="button" className="btn btn-dark" style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" onClick={() => setChildren(Children - 1)} />
                                        </button>
                                    </div>
                                </li>

                            </ul>
                            <div className="fix text-center bg-dark">
                                <NavLink to="/ContactUs">
                                    <button type="button" className="btn btn-info rounded-0">
                                        BOOK NOW
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className="card" style={{ width: "22rem" }}>
                            <img src="Image/2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Lake Garda, Italy</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 pt-3 badge bg-info border-0 rounded-0 pt-3 text-light text-start">
                                    <button type="button" className="btn btn-link">
                                        <a href="https://www.google.co.in/maps/place/Lake+Garda/@45.6604208,10.4136519,10z/data=!3m1!4b1!4m5!3m4!1s0x4781eca8aec020b9:0x91dcf07c1c969bb8!8m2!3d45.6049385!4d10.6351414?hl=en" target={'blank'}> View On Maps </a>
                                    </button>
                                </li>

                                <li className="list-group-item border-0">{first}
                                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setfirst(first + 1)} style={{ margin: '0px 37px' }}>Select Days
                                        <AiFillCaretUp className="AiFillCaretUp" />
                                    </button>
                                </li>

                                <li className="list-group-item badge bg-info border-0 rounded-0 pt-3 text-start text-light"><h6>Adults</h6>
                                    <div className="temp">
                                        <button type="button" className="btn btn-light" onClick={() => setCircle(Circle + 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" />
                                        </button>
                                        {Circle}
                                        <button type="button" className="btn btn-light" onClick={() => setCircle(Circle - 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" />
                                        </button>
                                    </div>
                                </li>

                                <li className="list-group-item border-0 rounded-0 pt-3 text-start"><h6>Childrens</h6>
                                    <div className="main">
                                        <button type="button" className="btn btn-dark" onClick={() => setHtml(Html + 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" />
                                        </button>
                                        {Html}
                                        <button type="button" className="btn btn-dark" onClick={() => setHtml(Html - 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" />
                                        </button>
                                    </div>
                                </li>
                            </ul>

                            <div className="fix text-center bg-dark">
                                <NavLink to="/ContactUs">
                                    <button type="button" className="btn btn-info rounded-0">
                                        BOOK NOW
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div className='col-4'>
                        <div className="card" style={{ width: "22rem" }}>
                            <img src="Image/3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Mount Dtna, Italyr</h3>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-0 pt-3 badge bg-info border-0 rounded-0 pt-3 text-light text-start">
                                    <button type="button" className="btn btn-link">
                                        <a href="https://www.google.co.in/maps/place/Mt+Etna/@37.7510211,14.9846801,15z/data=!4m5!3m4!1s0x1316aa3714a7a0eb:0x1d0b042aa5c52a70!8m2!3d37.751005!4d14.9934349?hl=en" target={'blank'}> View On Maps </a>
                                    </button>
                                </li>

                                <li className="list-group-item border-0">{Road}
                                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => setRoad(Road + 1)} style={{ margin: '0px 37px' }}>
                                        Select Days  <AiFillCaretUp className="AiFillCaretUp" />
                                    </button>
                                </li>

                                <li className="list-group-item badge bg-info border-0 rounded-0 pt-3 text-start text-light"><h6>Adults</h6>
                                    <div className="last">
                                        <button type="button" className="btn btn-light" onClick={() => setSquare(Square + 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" />
                                        </button>
                                        {Square}
                                        <button type="button" className="btn btn-light" onClick={() => setSquare(Square - 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" />
                                        </button>
                                    </div>
                                </li>

                                <li className="list-group-item border-0 rounded-0 pt-3 text-start"><h6>Childrens</h6>
                                    <div className="oneline">
                                        <button type="button" className="btn btn-dark" onClick={() => setAware(Aware + 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlinePlus className="AiOutlinePlus" />
                                        </button>
                                        {Aware}
                                        <button type="button" className="btn btn-dark" onClick={() => setAware(Aware - 1)} style={{ margin: '0px 20px' }}>
                                            <AiOutlineMinus className="AiOutlineMinus" />
                                        </button>
                                    </div>
                                </li>
                            </ul>

                            <div className="fix text-center bg-dark">
                                <NavLink to="/ContactUs">
                                    <button type="button" className="btn btn-info rounded-0">
                                        BOOK NOW
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

};

export default TravelPackage;
