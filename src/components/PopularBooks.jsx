import React from 'react'

const PopularBooks = () => {
     // Array of books for the "Popular this month" section
  const popularBooks = [
    {
      title: 'Think And Grow Rich',
      author: 'Napoleon Hill',
      image: 'https://via.placeholder.com/150', // Add your image URL here
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
      <h3 className="text-3xl font-semibold text-gray-800 mb-6">Popular this month</h3>
      
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularBooks.map((book, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Book Image */}
            <img src={book.image} alt={book.title} className="w-full h-56 object-cover" />
            
            {/* Book Details */}
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800">{book.title}</h4>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-gray-900 mt-2 font-bold">{book.price}</p>
              
              {/* View Details Button */}
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularBooks
