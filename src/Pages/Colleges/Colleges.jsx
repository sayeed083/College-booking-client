import { Link } from "react-router-dom";
import useCollegeCards from "../../hooks/useCollegeCards";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa"



const Colleges = () => {


    const [collegeCards] = useCollegeCards();

    return (
        <div>
            <h2 className="text-center text-6xl my-16 font-serif">Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto justify-items-center">
                {
                    collegeCards.map((collegeCard) => <div key={collegeCard._id}>

                        {/* ---------------------------------------------- */}

                        <div className="card w-[450px] h-[800px] glass font-serif">
                            <figure><img className="w-full h-[304px]" src={collegeCard.image} alt="College Here" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{collegeCard.name}</h2>
                                <p><span className="underline">Admission Date:</span> {collegeCard.admissionDate}</p>

                                <p><span className="underline">About Research:</span> {collegeCard.researchHistory}</p>
                                <p><span className="underline">Successful Research:</span> {collegeCard.researchWorks.length}</p>
                                <p><span className="underline">Our Research Works:</span></p>
                                <p>- {collegeCard.researchWorks[0]}</p>
                                <p>- {collegeCard.researchWorks[1]}</p>
                                <p>- {collegeCard.researchWorks[2]}</p>

                                <div className="flex justify-start items-center">
                                    <p className="underline">Ratings:</p>
                                    {collegeCard.rating ? (
                                        <Rating
                                            placeholderRating={collegeCard.rating}
                                            readonly
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        />
                                    ) : (
                                        <p>No ratings</p>
                                    )}
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to={`/collegeCardDetails/${collegeCard._id}`}>Details</Link></button>
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

export default Colleges;