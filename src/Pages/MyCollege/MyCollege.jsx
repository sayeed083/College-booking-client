import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useAllUser from "../../hooks/useAllUser";
import { AuthContext } from "../../Providers/AuthProvider";
import MyCollegeSingle from "./MyCollegeSingle";

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation()
    // const [users] = useAllUser();

    const [getEmail, setGetEmail] = useState([])

    const [mySelectedColleges, setMySelectedColleges] = useState([]);

    // const url = 

    useEffect(() => {
        fetch(`http://localhost:5000/allAdmissions?email=${location.state.getEmail}`)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                setMySelectedColleges(data)
            


            })
    }, [location.state.getEmail]);












    console.log({location});

    return (
        <div>
            <h2 className="text-center my-5 text-4xl">Role for : {mySelectedColleges.length}</h2>


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