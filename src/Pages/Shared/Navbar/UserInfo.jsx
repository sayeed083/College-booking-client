import { FaEdit, FaHome } from "react-icons/fa"
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

                        <div className="bg-sky-300 text-white font-serif">
                            <div className="hero min-h-screen ">
                                <div className="hero-content flex-col lg:flex-row gap-44">
                                    <img src={dataOfUser.userImage} className="max-w-lg rounded-3xl shadow-2xl" />
                                    <div>
                                        <h1 className="text-5xl font-bold">{dataOfUser.name}</h1>
                                        <p className="py-6">Email: {dataOfUser.email}</p>
                                        <div className="flex justify-evenly items-center">
                                        <button className="btn btn-circle btn-success"><Link to={`/updateInfo/${dataOfUser._id}`}><FaEdit></FaEdit></Link></button>
                                        <button className="btn btn-circle"><Link to="/"><FaHome/></Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>







        </div>
    );
};

export default UserInfo;