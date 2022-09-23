import React from 'react';

const Select = ({ city, setIdCity }) => {
  const getCityId = () => {
    setIdCity(city.id);
  };
  return (
    <div>
        <div>
            <label className="form-label">
                Datalist example
            </label>
        </div>
            <input className="form-control" list="datalistOptions" placeholder="Type to search your city..." />
                <datalist id="datalistOptions">
                {city?.map(ciudad => <option
                key={ciudad.id}
                value={ciudad.name}
                onClick={getCityId} />)};
                </datalist>
    </div>
  );
};

export default Select;
