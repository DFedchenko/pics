import './searchBar.css'
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }; 

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search for images</label>
        <input value={term} onChange={handleChange} type="text" />
        {/* <button onClick={() => handleClick}>Submit</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
