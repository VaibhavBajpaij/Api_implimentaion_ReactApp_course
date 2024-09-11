import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import { apiUrl, filterData } from './data';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import { toast } from 'react-toastify';
import Spinner from  './Components/Spinner';
function App() {
  const [courses, setCourses] = useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // Save data into a variable
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        toast.error('Something went wrong');
      }
      setLoading(false);
    }
    useEffect(() => {
    fetchData();
  }, []); // Added dependency array to run useEffect only once

  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <div>
        <Navbar /></div>
        <div  className="bg-gray-800">
        <div>
      <Filter filterData={filterData}
      category={category}
      setCategory={setCategory}/>
     
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]">
      {
         loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />) //{/* Corrected prop name */}
      }
      </div>
        </div>
      
      
     
    </div>
  );
}

export default App;
