import React from 'react';

const Select = ({ city, setCityName }) => {
  const getCityId = (e) => {
    e.preventDefault();
    // console.log(city[6]);
    // console.log(city[6].name);
    console.log(e.target.value);
    setCityName(e.target.value);
    // for (let i = 0; i < city.lenght; i += 1) {
    //   if (city[i].name === e.target.value) {
    //     console.log(city[i].id);
    //     setIdCity(city[i].id);
    //   }
    // }
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
                value={ciudad.url} />)};
                </datalist>
    </div>
  );
};

export default Select;
