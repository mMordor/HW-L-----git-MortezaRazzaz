import { useState, useEffect } from "react";


interface prop{
    onSearchChange : (query:string) => void;
}




function SearchComponent({onSearchChange}:prop) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 500); 

    return () => clearTimeout(timer);
  }, [searchTerm,onSearchChange]);


  return (
    <input
      type="text"
      placeholder="Search Product..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-[79%] h-full bg-white shadow-md rounded-md p-3 "
    />
  );
}

export default SearchComponent