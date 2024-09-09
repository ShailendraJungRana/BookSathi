import React from 'react';

const Cards = () => {
  const categories = [
    { name: 'Children', icon: '👶' },
    { name: 'History', icon: '📚' },
    { name: 'Fiction', icon: '👻' },
    { name: 'Romance', icon: '💖' },
    { name: 'Comic', icon: '💬' },
  ];

  return (
    <div className="mt-10 max-w-screen">
      <h2 className="text-center text-4xl font-bold text-orange-600 mb-8">Book Categories</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-max-screen gap-0 justify-items-center cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-center bg-dark shadow-lg rounded-[50px] w-40 h-40 hover:shadow-xl transition-all transform hover:scale-105 hover:rounded-full duration-300"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">
              {category.icon}
            </div>
            {/* Category Name */}
            <h3 className="text-xl font-semibold text-white text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
