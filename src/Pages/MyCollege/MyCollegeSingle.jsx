
import Swal from "sweetalert2";
import useCollegeCards from "../../hooks/useCollegeCards";


const MyCollegeSingle = ({ mySelectedCollege }) => {

// TODO : there is a _id
    const { name, image, subject, phoneNumber, address, collegeName, collegeID
    } = mySelectedCollege;

    const [collegeCards] = useCollegeCards();
    console.log({ collegeCards });

    
    const filteredCollege = collegeCards?.filter (item => item?._id === collegeID)
  
    


    const handleSendReviewRatings = event => {
        event.preventDefault();
        const {name, image, admissionDate, events, researchHistory, admissionProcess, researchWorks, sportsCategories, sportsInformation } = filteredCollege[0] || [];
        
        const form = event.target;
        const review = form.review.value;
        const rating = form.rating.value;
        const shortRandR = { review, rating: parseInt(rating),  name, image, 
            admissionDate, events, researchHistory, admissionProcess, researchWorks, sportsCategories, sportsInformation, collegeID }
            console.log({shortRandR});
        fetch(`http://localhost:5000/allCollege/review/${collegeID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(shortRandR),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Send Review & Ratings.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }









    return (

        <tr>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Nothing" />
                    </div>
                </div>


            </td>
            <td>{name}</td>
            <td>{subject}</td>
            <td>{address}</td>
            <td>{collegeName}</td>
            <td>{phoneNumber}</td>
            <td>
               




            </td>
            <td> <form onSubmit={handleSendReviewRatings}>
                <input name="review" className="input input-bordered mr-5" type="text" />
                <input name="rating" className="input input-bordered mr-5" type="number" />

                <input className="btn btn-info" type="submit" value="Send" />

            </form>
            </td>

        </tr>

    );
};

export default MyCollegeSingle;