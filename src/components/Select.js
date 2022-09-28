import React from 'react';

const Select = ({ city, setCityName }) => {
  const getCityId = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div>
        <input className="form-control" list="datalistOptions" placeholder="Search your city..." onChange={(e) => getCityId(e)} />
          <datalist id="datalistOptions">
            {city?.map(ciudad => <option
            key={ciudad.id}
            value={ciudad.url} />)};
          </datalist>
    </div>
  );
};

export default Select;
