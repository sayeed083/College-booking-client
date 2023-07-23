import { useLoaderData } from "react-router-dom";


const ReviewandRatings = () => {
    const giveFeedBack = useLoaderData()
    return (
        <div>
           <div className="hero min-h-screen bg-cyan-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-violet-500">Send FeedBack! {giveFeedBack.name}</h1>
                        <h1 className="text-2xl text-center my-5 text-violet-500">{giveFeedBack.name}</h1>
                    </div>
                    <form>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Send FeedBack</span>
                                    </label>
                                    <input type="text" name="feedback"
                                        placeholder="Write About It" className="input input-bordered" />
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Send Feedback" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewandRatings;