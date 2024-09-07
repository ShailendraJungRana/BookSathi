import React from 'react'

const Search = () => {
    
  return (
    // const SearchWithDropdown = () => {
    //     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      
    //     const toggleDropdown = () => {
    //       setIsDropdownOpen(!isDropdownOpen);
    //     };
    <div>
 <form className="max-w-md mx-auto mt-8">   
     <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
     <div className="relative">
         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
             </svg>
         </div>
         <input type="search"
          id="default-search"
           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Search..." required />
         <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-dark hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-7 py-2 dark:bg-primary dark:hover:bg-dark dark:focus:ring-primary">Search</button>
     </div>

     </form>
 {/* Type Dropdown */}
 <div className="relative inline-flex ">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary flex items-center"
          >
            Type
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            id="dropdown"
            className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10 mt-2"
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Non-Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Romance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Filter Button */}
        <button className="text-gray-500 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V19a1 1 0 001 1h4a1 1 0 001-1v-3.586l5.707-5.707A1 1 0 0021 6V4a1 1 0 00-1-1H4a1 1 0 00-1 1v2a1 1 0 01-.293.707L1 7.414V12a1 1 0 001 1h5.586l4-4H21a1 1 0 011-1V6a1 1 0 00-.293-.707L17 2H7L3 6.414V4z"
            />
          </svg>
        </button>

        {/* Cart Button */}
        <button className="text-gray-500 bg-white border border-gray-300 rounded-lg p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l1.68 8.39M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H7l-.35-1.32A2 2 0 004.66 3H3zm9 13a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
      





  )
}

export default Search


