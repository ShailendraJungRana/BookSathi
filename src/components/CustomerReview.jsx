import React from 'react';

const CustomerReview = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-center">
          <div className="max-w-5xl mx-auto bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">
          What are our customers review
        </h2>
        <p className="text-center text-gray-600 mb-10">
          People Talk About Us
        </p>
            <p className="text-center text-gray-700 text-lg mb-6">
              Here is what our fellow customers have to say about our unique platform where you can exchange books with others and purchase thrift books.
              This innovative approach has made us one of the best book communities in Nepal.
            </p>

            {/* Reviews Slider */}
            <div className="relative">
              {/* First Review */}
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "The request book feature is a game-changer! I managed to get a book I've been looking for ages. Excellent service!"
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/1.jpg"
                      alt="User"
                    />
                    <div>
                      <p className="font-bold">Emily Johnson</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Review */}
              <div className="flex justify-center mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">
                    "The thrift book service is fantastic! I found some rare gems at unbeatable prices. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="User"
                    />
                    <div>
                      <p className="font-bold">John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex justify-center mt-6">
              <button className="focus:outline-none bg-gray-300 text-gray-700 rounded-full h-10 w-10 flex items-center justify-center">
                &lt;
              </button>
              <button className="focus:outline-none bg-gray-300 text-gray-700 rounded-full h-10 w-10 flex items-center justify-center ml-4">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;