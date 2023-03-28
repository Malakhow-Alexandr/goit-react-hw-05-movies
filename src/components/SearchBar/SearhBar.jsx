import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchBarStyled,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchFormInput,
} from './SearchBarStyled';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('🍳Please enter somthing to search!', {
        theme: 'dark',
      });
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <main>
      <SearchBarStyled className="Searchbar">
        <SearchForm className="SearchForm" onSubmit={handleSubmit}>
          <SearchButton className="SearchForm-button" type="submit">
            <SearchButtonLabel className="SearchForm-button-label">
              Find
            </SearchButtonLabel>
          </SearchButton>
          <SearchFormInput
            placeholder="Hello I am Movie Search!"
            className="SearchForm-input"
            type="text"
            name="movieName"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </SearchForm>
      </SearchBarStyled>
    </main>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
