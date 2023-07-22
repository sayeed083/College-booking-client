import { useState } from "react";
import { Link } from "react-router-dom";
import useCollegeCards from "../../../hooks/useCollegeCards";


const CollegeCards = () => {

    const [collegeCards] = useCollegeCards();

    const [searchTerm, setSearchTerm] = useState("");




    const searchedColleges = collegeCards.filter((collegeCard) => {
        const nameMatch = collegeCard.name.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch
    })

    const limitedColleges = searchedColleges.slice(0, 3);


    return (
        <div>
            <div className="flex justify-center items-center ">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="my-4 px-4 py-2 border rounded w-1/2 text-center"
                />
            </div>





            {/* card here  */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto justify-items-center">
                {
                    limitedColleges.map((searchedCollege) => <div key={searchedCollege._id}>

                        {/* ---------------------------------------------- */}



                        <div className="card w-[450px] h-[800px] glass font-serif">
                            <figure><img className="w-full h-[304px]" src={searchedCollege.image} alt="College Here" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{searchedCollege.name}</h2>
                                <p><span  className="underline">Admission Date:</span> {searchedCollege.admissionDate}</p>
                                <p><span  className="underline">Events:</span></p>
                                <p>- {searchedCollege.events[0]}</p>
                                <p>- {searchedCollege.events[1]}</p>
                                <p>- {searchedCollege.events[2]}</p>
                                <p><span className="underline">About Research:</span> {searchedCollege.researchHistory}</p>
                                <p><span className="underline">Sports:</span> {searchedCollege.sportsInformation}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to={`/collegeCardDetails/${searchedCollege._id}`}>Details</Link></button>
                                </div>
                            </div>
                        </div>








                        {/* ---------------------------------------------- */}




                    </div>)
                }



            </div>











        </div>
    );
};

export default CollegeCards;