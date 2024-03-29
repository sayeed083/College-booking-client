import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyCollegeSingle from "./MyCollegeSingle";

const MyCollege = () => {
    const location = useLocation()
    const [mySelectedColleges, setMySelectedColleges] = useState([]);

    useEffect(() => {
        fetch(`https://college-bookings-server.vercel.app/allAdmissions?email=${location.state.getEmail}`)
            .then(res => res.json())
            .then(data => {
                setMySelectedColleges(data)
            })
    }, [location.state.getEmail]);

    return (
        <div>
            <h2 className="text-center my-5 text-6xl font-serif">My College</h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Address</th>
                            <th>College</th>
                            <th>Contact Number</th>
                            <th>Give Review     ||  Ratings</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            mySelectedColleges.map(mySelectedCollege => <MyCollegeSingle
                                key={mySelectedCollege._id}
                                mySelectedCollege={mySelectedCollege}
                            ></MyCollegeSingle>)
                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyCollege;