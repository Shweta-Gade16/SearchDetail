import React from 'react';
import Image from 'next/image'; 
import { AiFillStar } from 'react-icons/ai';
import { MessageButton } from './MessageBtn';

const reviews = [
  { id: 1, title: '"Invaluable guide! Provided insights into market dynamics."', description: 'My mentor, James, has been an invaluable asset on my journey. His deep insights into the industry have revealed new opportunities for me. I appreciate his generosity in sharing his expertise and his constant encouragement to pursue excellence.', rating: 4.0, reviewer: 'John D.', date: 'April 12,2023', image: '/R1.png' },
  { id: 2, title: '"Outstanding mentor! Helped me grasp the nuances of market trends."', description: 'Partnering with my mentor, Lisa, has been a life-changing experience. She possesses a remarkable talent for inspiring and motivating, making even the hardest challenges feel achievable. I am immensely thankful for her...', rating: 3.5, reviewer: 'Maria J', date: 'Janauary 15,2023', image: '/R2.png' },
  { id: 3, title: '"Exceptional mentor! Clarified complex market trends for me."', description: 'My mentor, James, has been an invaluable asset on my journey. His deep insights into the industry have revealed new opportunities for me. I appreciate his generosity in sharing his expertise and his constant encouragement to pursue excellence.', rating: 3.0, reviewer: 'Alex S.', date: 'June 30,2023', image: '/R3.png' },
  { id: 4, title: '"Exceptional mentor! Clarified complex market trends for me."', description: 'My mentor, James, has been an invaluable asset on my journey. His deep insights into the industry have revealed new opportunities for me. I appreciate his generosity in sharing his expertise and his constant encouragement to pursue excellence.', rating: 3.0, reviewer: 'Alex S.', date: 'June 30,2023', image: '/R3.png' },
  { id: 5, title: '"Exceptional mentor! Clarified complex market trends for me."', description: 'My mentor, James, has been an invaluable asset on my journey. His deep insights into the industry have revealed new opportunities for me. I appreciate his generosity in sharing his expertise and his constant encouragement to pursue excellence.', rating: 3.0, reviewer: 'Alex S.', date: 'June 30,2023', image: '/R3.png' },
];


const ReviewCard: React.FC = () => {

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(fullStars)].map((_, index) => (
            <AiFillStar key={`full-${index}`} className="text-[#F0A14D]" />
          ))}
          {halfStar === 1 && (
            <div className="relative">
              <AiFillStar className="text-[#D0D5DD]" />
              <AiFillStar
                className="absolute top-0 left-0 text-[#F0A14D]"
                style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
              />
            </div>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <AiFillStar key={`empty-${index}`} className="text-[#D0D5DD]" />
          ))}
        </div>
        <span className="text-sm font-semibold text-[#324A6D]">{rating.toFixed(1)} rating</span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[684px] flex flex-col gap-6 ">
      <div>
        <p className="font-Poppins font-semibold text-[20px] text-[#324A6D]">Reviews</p>
      </div>
      <div className="flex flex-col gap-6 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-full bg-white rounded-lg  p-6 flex flex-col gap-6 border border-[#324A6D1A]"
          >
            {renderStars(review.rating)}
            <div className="text-[#324A6D]">
              <p className="text-[18px] font-semibold">{review.title}</p>
              <p className="text-[14px] mt-1">{review.description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src={review.image}
                  alt={`Image of ${review.reviewer}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-[14px] font-medium text-[#324A6D]">{review.reviewer}</span>
              </div>
              <span className="text-[14px] text-gray-500">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
      <MessageButton text="View All" />
    </div>
    </div>
  );
};

export default ReviewCard;
