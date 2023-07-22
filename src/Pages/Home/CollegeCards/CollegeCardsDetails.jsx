import { Link, useLoaderData } from "react-router-dom";
import { FaHome } from "react-icons/fa"


const CollegeCardsDetails = () => {

    const cardDetails = useLoaderData();

    // image, name, admissionProcess, events, researchWorks, sportsCategories



    return (
        <div>
            <div className="card lg:card-side mx-[100px] bg-sky-400 shadow-xl my-20 text-white font-serif">
                <figure><img className="w-[1000px] rounded-lg" src={cardDetails.image} alt="College" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{cardDetails.name}</h2>
                    <p><span className="underline">Admission Process:</span><span className=""> {cardDetails.admissionProcess}</span></p>
                    <p><span className="underline">Events:</span></p>
                    <p>- {cardDetails.events[0]}</p>
                    <p>- {cardDetails.events[1]}</p>
                    <p>- {cardDetails.events[2]}</p>
                    <p><span className="underline">Our Research Works:</span></p>
                    <p>- {cardDetails.researchWorks[0]}</p>
                    <p>- {cardDetails.researchWorks[1]}</p>
                    <p>- {cardDetails.researchWorks[2]}</p>
                    <p><span className="underline">Sports:</span></p>
                    <p>- {cardDetails.sportsCategories[0]}</p>
                    <p>- {cardDetails.sportsCategories[1]}</p>
                    <p>- {cardDetails.sportsCategories[2]}</p>
                    <p>- {cardDetails.sportsCategories[3]}</p>
                    <p>- {cardDetails.sportsCategories[4]}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-circle btn-info"><Link to="/"><FaHome/></Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollegeCardsDetails;