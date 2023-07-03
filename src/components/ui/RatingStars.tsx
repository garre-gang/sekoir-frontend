"use client"
import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingStarsProps {
  rating: number;
  totalStars: number;
  onStarClick: (rating: number) => void;
}

const RatingStars = ({ rating, totalStars, onStarClick }: RatingStarsProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      const starType = i <= rating ? "text-yellow-500" : "text-gray-300";
      stars.push(
        <FaStar
          key={i}
          className={`w-6 h-6 ${starType} cursor-pointer`}
          onClick={() => onStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center justify-center gap-1">
      {renderStars()}
    </div>
  );
};

export default RatingStars;
