import CollegeCards from "../CollegeCards/CollegeCards";
import CollegeGalary from "../CollegeGalary/CollegeGalary";
import ResearchedPapers from "../ResearchedPapers/ResearchedPapers";


const Home = () => {
    return (
        <div>
            <CollegeCards></CollegeCards>
            <CollegeGalary></CollegeGalary>
            <ResearchedPapers/>
        </div>
    );
};

export default Home;