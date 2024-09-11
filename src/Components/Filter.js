import React from 'react';

function Filter({ filterData, category, setCategory }) { // Destructured props

  function filterHandler(title) {
    setCategory(title); // Corrected syntax
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center bg-bgDark">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)} // Corrected onClick handler
          className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ${
            category === data.title ? 'bg-blue-500 text-white' : 'bg-white text-bgDark hover:bg-gray-200'
          }`} // Corrected onClick handler

          //className="bg-white text-bgDark py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
