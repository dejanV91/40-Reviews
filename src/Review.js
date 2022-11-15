import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

console.log(people);

const Review = () => {
  return (
    <article className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[0].image}
          alt={people[0].name}
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[0].name}</h4>
      <p className="job">{people[0].job}</p>
      <p className="info">{people[0].text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">suprise me</button>
    </article>
  );
};

export default Review;
