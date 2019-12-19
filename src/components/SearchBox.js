import React from 'react';
import './styles.css'

const SearchBox = ({searchChange, searchField}) => {
  return (
    <div className="pad2 search-cont">
      <input
        className="pad3 ba b--green bg-lightest-blue search-box"
        type="search"
        placeholder="search robo friends"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
