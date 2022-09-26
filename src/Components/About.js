import React, { useState } from 'react'

const About = (props) => {


    const newData = [
        {
            id: 0,
            "phone": "(792) 450-8154",
        },
    ];

    const [myData, setmyData] = useState(newData);
    const emptyData = () => {
        // setmyData([]);
    }

    const clear = (id) => {
        const upDate = myData.filter((newData) => {
            return newData.id !== id;
        })
        setmyData(upDate);
    }



    const profileName = [
        {
            id: 0,
            "name": "Lance Baker",
        },

    ];

    const [profileData, setprofileData] = useState(profileName);
    const withName = () => {
        // setprofileData([]);
    }

    const gotMail = (id) => {
        const receiveData = profileData.filter((profileName) => {
            return profileName.id !== id;
        })
        setprofileData(receiveData);
    }





    const [other, setother] = useState(
        {
            id: 0,
            "name": "Hayes Mcmillan",
            "phone": "1-847-928-8671"
        },
    );
    const options = () => {
        setother({ ...other, name: 'kevin Hayes', phone: "(952)-516-472-8245", });
    }





    const [text, settext] = useState("");


    const [enterData, setenterData] = useState([]);
    const getPlace = (e) => {
        e.preventDefault();
        if (text && text) {
            const displyaName = { text: text };
            setenterData([displyaName]);
            settext("");
        }
        else {
            alert("Fill The Data");
        }
    }











    return (
        <>

            <img src="Image/2.jpg" className="img-fluid" alt="..." style={{ width: '100%', height: 'auto' }} />
            <h1 className='text-center'>{props.title}</h1>

            <div className='container front-last mt-4'>
                <div className='row'>
                    <div className='col-6'>
                        <img src="Image/7.jpg" alt="" style={{ width: '100%' }} />
                    </div>
                    <div className='col-6'>
                        <p className='mt-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>

                        <form onSubmit={getPlace}>
                            <input
                                type="text"
                                name="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder='Seacrh Places'
                                value={text}
                                onChange={(event) => settext(event.target.value)}
                            />
                            <div className="icon">
                                <img src="Image/11.png" alt="" />
                            </div>
                            <button type="submit" className="btn btn-dark rounded-0 mt-0">
                                Search Destination
                            </button>
                        </form>

                        <div>
                            {
                                enterData.map((enterData) => {
                                    return (

                                        <>
                                            <h6 className="alert alert-danger rounded-0 mt-4">{enterData.text}
                                            </h6>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>



            <h2 className='text-center mt-5'>{props.props}</h2>
            <div className='container old-new text-center mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="Image/4.png" alt="" width={'100%'} />
                    </div>
                    <div className='col-md-4'>
                        <img src="Image/5.png" alt="" width={'100%'} />
                    </div>
                    <div className='col-md-4'>
                        <img src="Image/6.png" alt="" width={'100%'} />
                    </div>
                </div>
            </div>





            <div className='container mt-5 text-center'>
                <div className='row'>
                    <div className='col-4 text-center'>
                        {
                            myData.map((newData) => {
                                return <h5 className="alert alert-dark text-center" key={newData.id}>Phone: {newData.phone}
                                    <button type="button" className="btn btn-light btn-sm" onClick={() => clear(newData.id)} style={{ margin: '10px' }}>
                                        Send To Your Mail
                                    </button>
                                </h5>
                            })
                        }
                        <button type="button" className="btn" onClick={emptyData}></button>
                    </div>

                    <div className='col-4 text-center'>

                        {
                            profileData.map((profileName) => {
                                return <h5 className='alert alert-dark text-center text-center' key={profileName.id}>Name: {profileName.name}
                                    <button type="button" className="btn btn-light btn-sm" onClick={() => gotMail(profileName.id)} style={{ margin: '10px' }}>
                                        Send To Your Mail
                                    </button>
                                </h5>
                            })
                        }

                        <div className='text-center'>
                            <button type="button" className="btn" onClick={withName}></button>
                        </div>
                    </div>

                    <div className='col-4 text-center'>
                        <h5 className='alert alert-dark text-center text-center' key={other.id}> Name: {other.name} & Phone: {other.phone}
                            <button type="button" className="btn btn-light btn-sm" key={other.id} onClick={options} style={{ margin: '10px' }} >
                                Click Here
                            </button>
                        </h5>
                    </div>

                </div>
            </div>




        </>
    )
}

export default About