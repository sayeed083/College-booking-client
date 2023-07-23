import CollegeCards from "../CollegeCards/CollegeCards";
import CollegeGalary from "../CollegeGalary/CollegeGalary";
import ResearchedPapers from "../ResearchedPapers/ResearchedPapers";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <CollegeCards></CollegeCards>
            <CollegeGalary></CollegeGalary>
            <ResearchedPapers/>
            <Reviews/>
        </div>
    );
};

export default Home;