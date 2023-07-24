import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useAllUser from "../../../hooks/useAllUser";
import useCollegeCards from "../../../hooks/useCollegeCards";
import { AuthContext } from "../../../Providers/AuthProvider";


const AdmissionForCollege = () => {


    const [collegeCards] = useCollegeCards();
    const [getEmail, setGetEmail] = useState([])
    const [getId, setGetId] = useState([])

    const { user } = useContext(AuthContext)
    const [users] = useAllUser()

    useEffect(() => {
        const typeUser = user?.email
        const normalUser = users?.filter(item => item.email === typeUser)
        setGetEmail(normalUser[0]?.email)
        setGetId(normalUser[0]?._id)

    }, [users])

    




    return (
        <div>
            <h2 className="text-center my-5 text-6xl font-serif">Admission</h2>
            <p className="text-center font-serif">Choose Your Favorite College</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto justify-items-center">
                {
                    collegeCards.map((collegeCard) => <div key={collegeCard._id}>

                        {/* ---------------------------------------------- */}

                        <div className="card w-[450px]  glass font-serif">
                            <figure><img className="w-full h-[304px]" src={collegeCard.image} alt="College Here" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{collegeCard.name}</h2>
                                <p><span className="underline">Admission Date:</span> {collegeCard.admissionDate}</p>

                                <button className="btn btn-primary"><Link state={{getEmail, getId}} to={`/admissionPortal/${collegeCard._id}`}>Apply Now</Link></button>

                            </div>
                        </div>


                        {/* ---------------------------------------------- */}

                    </div>)
                }



            </div>
        </div>
    );
};

export default AdmissionForCollege;