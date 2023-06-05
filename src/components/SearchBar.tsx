import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import React, { useState } from "react";
import "./SearchBar.css";
import "react-toastify/dist/ReactToastify.css";

interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

/**
 * SearchBar component displays an input field and a search button.
 * Users can enter a search query and trigger the search by pressing Enter or clicking the button.
 */
const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const search = () => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      props.onSearch(trimmedValue);
    } else {
      props.onSearch("");
    }
    setValue("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={search}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  );
};

export default SearchBar;
