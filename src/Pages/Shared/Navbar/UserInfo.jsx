
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const UserInfo = () => {

    const location = useLocation()
    const getData = location.state.getEmail
    console.log({ getData });


    const [ss, setSs] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log({ data });
                const allData = data.filter(item => item.email === getData)
                console.log({ allData });
                setSs(allData)

            })

    }, [getData])


    return (
        <div>

            <div>
                {
                    ss.map(dataOfUser => <div key={dataOfUser._id}>

                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={dataOfUser.userImage} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{dataOfUser.name}</h1>
                                    <p className="py-6">{dataOfUser.email}</p>
                                    <button className="btn btn-primary"><Link to={`/updateInfo/${dataOfUser._id}`}>Update Information</Link></button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>


  



            <button className="btn"><Link to="/">Go Back</Link></button>
        </div>
    );
};

export default UserInfo;