import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">About Us</h2>
            <p className="text-sm">
              We offer a platform where you can thrift, trade, and request books.
              Browse our catalog to find rare books or exchange your own! Join the
              growing community of book lovers today!
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <div className='flex-col space-y-2'>
            <h2 className="font-bold text-xl mb-4">Contact</h2>
            <p className="text-sm ">kitabsathi@gmail.com</p>
            <p className="text-sm">+977 9866141333</p>
            <p className="text-sm">Butwal, Nepal</p>
            </div>
            <div className="mt-4 flex space-x-4 ">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-red-500 hover:text-red-700">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          {/* Need Help Section */}
          <div className='flex-col space-y-2'>
            <h2 className="font-bold text-xl mb-4">Need Help?</h2>
            <ul className="text-sm space-y-2">
              <li>FAQs</li>
              <li>Order and Return</li>
              <li>Customer Care</li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Policies</h2>
            <ul className="text-sm space-y-2">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">&copy; 2024 by BookSathi</p>
          <form className="mt-6 md:mt-0">
            <div className="flex space-x-2">
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Name"
              />
              <input
                type="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email"
              />
              <textarea
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Message"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;