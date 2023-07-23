import useCollegeCards from "../../../hooks/useCollegeCards";


const CollegeGalary = () => {

    const [collegeCards] = useCollegeCards();




    return (
        <div>
            <h2 className="text-center text-5xl font-serif my-10 underline">College Gallery</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-5">

                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/wB2qy5XQ/Graduate-Group-1.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[0]?.name}</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/VvyjScBt/Graduate-Group-2.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[1]?.name}</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/ThMWPqxJ/Graduate-Group-3.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[2]?.name}</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/0y5H5pNs/Graduate-Group-4.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[3]?.name}</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/zGDGFPxR/Graduate-Group-5.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[4]?.name}</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-[900px] rounded-3xl mx-auto" src="https://i.postimg.cc/K801MyrW/Graduate-Group-6.jpg" alt="" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:translate-y-[210px] md:translate-y-[220px] lg:translate-y-[230px]">
                        <p className="text-white text-sm lg:text-2xl font-bold font-serif bg-sky-500 p-3 rounded-2xl">{collegeCards[5]?.name}</p>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default CollegeGalary;