import React from 'react'

const PopularBooks = () => {
     // Array of books for the "Popular this month" section
  const popularBooks = [
    {
      title: 'Think And Grow Rich',
      author: 'Napoleon Hill',
      image: '../assets/thinkgrow.png', // Add your image URL here
      price: '$9.99',
    },
    {
      title: 'Start With Why',
      author: 'Simon Sinek',
      image: 'https://via.placeholder.com/150',
      price: '$12.99',
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      image: 'https://via.placeholder.com/150',
      price: '$14.99',
    },
    {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      image: 'https://via.placeholder.com/150',
      price: '$11.99',
    },
  ];
  return (
    <div className="mt-10 max-w-screen-lg mx-auto">
    {/* Section Header */}
    <h3 className="text-[24px] font-semibold text-dark mb-6">Popular this month</h3>
    
    {/* Card Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-4 ">
      {popularBooks.map((book, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Book Image */}
          <img src={book.image} alt={book.title} className="w-full h-64 object-contain p-4" />
          
          {/* Book Details */}
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.author}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-orange-600">{book.price}</span>
              {/* Icons */}
              <div className="flex space-x-2">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3z"></path>
                  </svg>
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
       
        </div>
      ))}
    </div>
  </div>
  )
}

export default PopularBooks
