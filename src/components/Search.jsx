import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from './api';

const Search = ({ onSearchChange }) => {
	// useState hook to keep track of the current search input value
	const [search, setSearch] = useState(null);

	// function to load options for the async paginate component
	// inputValue is the current input value entered by the user
	const loadOptions = (inputValue) => {
		// make a GET request to the specified API endpoint
		// passing the inputValue as a query parameter
		// and using the geoApiOptions for additional options
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				// format the response data and return it as options
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude}, ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
							population: `${city.population}`,
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};

	// function to handle changes to the search input value
	const handleOnChange = (searchData) => {
		console.log(searchData);
		setSearch(searchData);
		onSearchChange(searchData);
	};

	// render the AsyncPaginate component
	// passing the necessary props
	return (
		<AsyncPaginate
			className='w-full p-5 rounded-md box-shadow-md hover:border-blue-500 focus:border-blue-600'
			placeholder='Search for a city...'
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
