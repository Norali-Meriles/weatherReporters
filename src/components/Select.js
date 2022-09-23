import React from 'react';

const Select = ({ city, setIdCity }) => {
  const getCityId = (e) => {
    e.preventDefault();
    for (let i = 0; i < city.length; i += 1) {
      if (city[i].name === e.target.value) {
        console.log(city[i].id);
        setIdCity(city.id);
      }
    }
  };
  return (
    <div>
      <div>
        <label className="form-label">
          Datalist example
        </label>
      </div>
      <input className="form-control" list="datalistOptions" placeholder="Type to search your city..." onChange={(e) => getCityId(e)} />
      <datalist id="datalistOptions">
        {city?.map(ciudad => <option
          key={ciudad.id}
          value={ciudad.name} />)};
      </datalist>
    </div>
  );
};

export default Select;
