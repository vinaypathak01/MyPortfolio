import React from "react";
import "./Review.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const reviewData = [
    {
      avatar: require("../../assets/cricketfootball.webp"),
      name: "Cricket & Football",
      review: `Captain of the department's cricket team, leading the team in tournaments and fostering teamwork, strategic thinking, and leadership skills.
      Represented the campus in inter-college football and cricket tournaments, showcasing competitive spirit and collaboration.
      Participated in a departmental badminton competition, reflecting dedication to sports and fitness.`,
    },
    {
      avatar: require("../../assets/Hobbies.png"),
      name: "Hobbies",
      review: `Tech Enthusiast: Passionate about staying ahead of the curve in software development, with a keen interest in emerging trends like AI, DevOps, and cloud computing.
      Online Gaming: Passionate about exploring the world of online gaming for fun and relaxation, with a love for engaging titles like BGMI.
      Travel Enthusiast: Thrives on discovering new places, embracing diverse cultures, and creating unforgettable memories through travel.`,
    },
  ];

  return (
    <section id="review">
      {/* <h5 data-aos="fade-up" data-aos-anchor="#review" data-aos-duration="700">
        Feedback from colleagues and clients
      </h5> */}
      <h2 data-aos="fade-up" data-aos-anchor="#review" data-aos-duration="900">
        Extra Curricular Activities
      </h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container reviews__container"
        data-aos="fade-up"
        data-aos-anchor="#review"
        data-aos-duration="1800"
      >
        {reviewData.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="review" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
