// Will be the search bar or form used to search locations.
const LocationSearch = ({ searchKeys, setSearchKeys }) => {
  //
  let countryList = [{id: 196, name: 'United States of America', shortname: 'USA'}, {id: 197, name: 'Canada', shortname: 'Canada'}]
  const handleFormChange = (e) => {
    setSearchKeys({...searchKeys, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <p>Oh No! Would be nice to have that interact map show up here...</p>
      <form>
        <div></div>
        <div className="search-field">
          <label htmlFor="name">Name: </label>
          <input
            className="search-input"
            name="name"
            type="text"
            required
            onChange={handleFormChange}
            defaultValue={searchKeys.name}
          />
        </div>
        <div className="search-dropdown">
          <label htmlFor="country">Country: </label>
          <select className="search-select" name="country">
            {countryList.map((country, index) => (
              <option key={country.id} aria-label="country">{country.name}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default LocationSearch

// Logic: Will have a countries list filled with all the countries (3rd party API?) to fill country select box for filtering. Said list will also be used in the location form, if I get to creating it.