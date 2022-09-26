import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaGlassMartini, FaHiking, FaBus, FaShoppingCart } from "react-icons/fa";


const Home = () => {



    const [Count, setCount] = useState(10000);
    const [text, settext] = useState("");
    const [username, setusername] = useState("");
    const [Email, setEmail] = useState("");

    const [newName, setnewName] = useState([]);
    const someNew = (e) => {
        e.preventDefault();
        if (text && username && Email) {
            const google = { text: text, username: username, Email: Email };
            setnewName([google]);

            settext("");
            setusername("");
            setEmail("");
        }
        else {
            alert('Please Fill The All Data');
        }
    }







    return (
        <>
            <div id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Image/1.webp" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="Image/2.webp" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="Image/3.webp" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





            <div className="h-100 p-4 text-white bg-black rounded-0">
                <form className="row g-3 needs-validation" noValidate="" onSubmit={someNew}>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom01" className="form-label">
                            Select Price
                        </label>
                        <input
                            type="Text"
                            name='Text'
                            className="form-control"
                            id="validationCustom01"
                            required=""
                            value={Count}
                            onChange={(event) => settext(event.target.value)}
                        />

                        <AiOutlinePlus className="AiOutlinePlus" cursor={'pointer'} onClick={() => setCount(Count + 500)} /> Select Price <AiOutlineMinus className="AiOutlineMinus" cursor={'pointer'} onClick={() => setCount(Count - 500)} />


                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom01" className="form-label">
                            Enter Name
                        </label>
                        <input
                            type="text"
                            name='text'
                            className="form-control"
                            id="validationCustom01"
                            required=""
                            value={text}
                            onChange={(event) => settext(event.target.value)}

                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustomUsername" className="form-label">
                            Enter Username
                        </label>
                        <div className="input-group has-validation">
                            <input
                                type="username"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                required=""
                                value={username}
                                onChange={(event) => setusername(event.target.value)}
                            />
                            <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="validationCustom03" className="form-label">
                            Enter Email
                        </label>
                        <input
                            type="Email"
                            className="form-control"
                            id="validationCustom03"
                            required=""
                            value={Email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline-info rounded-0" style={{ padding: '07px 40px', marginTop: '-25px' }} type="submit">
                            Search
                        </button>
                    </div>
                </form>

                {
                    newName.map((newName) => {
                        return (
                            <div>
                                <h6 className="alert alert-info mt-4">{newName.text}</h6>
                                <h6 className="alert alert-info mt-4">{newName.username}</h6>
                                <h6 className="alert alert-info mt-4">{newName.Email}</h6>
                            </div>
                        )
                    })
                }

            </div>



            <div className="container-fluid text-center py-5">
                <h3 className='text-info'>Services</h3>
                <div className='row mt-3'>
                    <div className='col-md-3'>
                        <FaGlassMartini className="FaGlassMartini text-info" />
                        <h6 className='mt-2 text-info'><b>Free Cocktails</b></h6>
                        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.</p>
                    </div>
                    <div className='col-md-3'>
                        <FaHiking className="FaHiking text-info" />
                        <h6 className='mt-2 text-info'><b>Endless Hiking</b></h6>
                        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.</p>
                    </div>
                    <div className='col-md-3'>
                        <FaBus className="FaBus text-info" />
                        <h6 className='mt-2 text-info'><b>Free Shuttle</b></h6>
                        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.</p>
                    </div>
                    <div className='col-md-3'>
                        <FaShoppingCart className="FaShoppingCart text-info" />
                        <h6 className='mt-2 text-info'><b>Storages Beer</b></h6>
                        <p className='text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.</p>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Home