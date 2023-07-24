import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa"



const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://college-bookings-server.vercel.app/allCollege')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])



    return (
        <div>
            <h2 className="text-center text-5xl font-serif my-10 underline">Reviews of Our Colleges</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-24">
                            <h3 className="text-4xl text-center mb-10 font-serif">{review.name}</h3>
                            <div className="text-center text-3xl mb-5">
                                <Rating
                                    placeholderRating={review.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                ></Rating>
                            </div>
                            <p className="max-w-3xl mx-auto font-serif">
                                {review.review}
                            </p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;