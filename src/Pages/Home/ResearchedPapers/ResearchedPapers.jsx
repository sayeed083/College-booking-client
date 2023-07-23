


const ResearchedPapers = () => {
    return (
        <div>
            <h2 className="text-center text-5xl font-serif my-10 underline">Researched Papers</h2>


            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-10 ">
                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src="https://i.postimg.cc/sf7ywYfC/Research-Groups-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="btn btn-outline btn-info mt-36"><a href="https://www.sciencedaily.com/news/matter_energy/nanotechnology/" target="_blank" rel="noopener noreferrer" >View Researched Papers</a></button>
                    </div>
                </div>

                {/* ---------------END---------------------- */}



                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src="https://i.postimg.cc/bJdHHxK7/Research-Groups-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="btn btn-outline btn-info mt-36"><a href="https://climate.nasa.gov/" target="_blank" rel="noopener noreferrer" >View Researched Papers</a></button>
                    </div>
                </div>

                {/* ---------------END---------------------- */}


                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src="https://i.postimg.cc/3xJyv8M6/Research-Groups-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="btn btn-outline btn-info mt-36"><a href="https://spectrum.ieee.org/topic/artificial-intelligence/" target="_blank" rel="noopener noreferrer" >View Researched Papers</a></button>
                    </div>
                </div>

                {/* ---------------END---------------------- */}


                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src="https://i.postimg.cc/VNJWXBy3/Research-Groups-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <button className="btn btn-outline btn-info mt-36"><a href="https://www.nist.gov/cybersecurity" target="_blank" rel="noopener noreferrer" >View Researched Papers</a></button>
                    </div>
                </div>

                {/* ---------------END---------------------- */}



            </div>



        </div>
    );
};

export default ResearchedPapers;