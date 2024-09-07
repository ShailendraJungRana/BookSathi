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
      </div>







      





  )
}

export default Search


