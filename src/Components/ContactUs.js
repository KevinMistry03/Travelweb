import React, { useState } from "react";

const ContactUs = (props) => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [newData, setnewData] = useState([]);
    const loginData = (e) => {
        e.preventDefault();
        if (email && password) {
            const newEntry = { email: email, password: password };
            setnewData([...newData, newEntry]);

            setemail("");
            setpassword("");
        }
        else {
            alert("Sign In First & Fill The Data ");
        }
    }


    const [Text, setText] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const [newUser, setnewUser] = useState([]);
    const newName = (e) => {
        e.preventDefault();
        if (Text && Email && Password) {
            const otherName = { Email: Email, Password: Password, Text: Text, };
            setnewUser([otherName]);

            setText("");
            setEmail("");
            setPassword("");
        }
        else {
            alert("Fill The Data");
        }
    }














    return (
        <>

            <img src="Image/3.jpg" className="img-fluid" alt="..." style={{ width: '100%', height: '300px' }} />
            <h1 className="text-center" > {props.title}</h1>

            <div className="container mt-5">
                <div className="row">

                    <div className="col-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                            <h4>Sign In Here</h4>


                            <form onSubmit={newName}>
                                <div className="mb-3">

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputText" className="form-label">
                                            Enter Full Name
                                        </label>
                                        <input
                                            type="Text"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="Enter First Name"
                                            value={Text}
                                            onChange={(event) => setText(event.target.value)}
                                        />
                                        <div className="icon">
                                            <img src="Image/12.png" alt="" />
                                        </div>
                                    </div>

                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Enter New Email address
                                    </label>
                                    <input
                                        type="Email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter New Email address"
                                        value={Email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <div className="icon">
                                        <img src="Image/9.png" alt="" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Enter New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter New Password address"
                                        value={Password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <div className="icon">
                                        <img src="Image/10.png" alt="" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-info">
                                    Sign In
                                </button>
                            </form>

                            <div>
                                {
                                    newUser.map((newUser) => {
                                        return (
                                            <>
                                                <h6 className="alert alert-info mt-4">{newUser.Text}</h6>
                                                <h6 className="alert alert-info mt-4">{newUser.Email}</h6>
                                                <h6 className="alert alert-info mt-4">{newUser.Password}</h6>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="h-100 p-5 bg-info border rounded-3">
                            <h4>Log In Here</h4>
                            <form onSubmit={loginData}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email address"
                                        value={email}
                                        onChange={(event) => setemail(event.target.value)}
                                    />
                                    <div className="icon">
                                        <img src="Image/9.png" alt="" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(event) => setpassword(event.target.value)}
                                    />
                                    <div className="icon">
                                        <img src="Image/10.png" alt="" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Log in
                                </button>
                            </form>

                            <div>
                                {
                                    newData.map((newData) => {
                                        return (
                                            <>
                                                <h6 className="alert alert-danger rounded-0 mt-4">{newData.email}</h6>
                                                <h6 className="alert alert-danger rounded-0 mt-4">{newData.password}</h6>
                                            </>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>








        </>
    );

};

export default ContactUs;
