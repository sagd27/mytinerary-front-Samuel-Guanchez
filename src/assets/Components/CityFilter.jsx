// CityFilter.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterImput } from '../../../store/action/actionCity.js';


const CityFilter = () => {
    const {filterValue} = useSelector(state => state.cityReducer)
    const dispatch =  useDispatch()
    return (
        <div className="flex mb-4 w-full justify-center">
            <input 
                type="text"
                placeholder="Buscar ciudad..."
                value={filterValue}
                onChange={(e) => dispatch(filterImput(e.target.value))}
                className="border rounded p-2 sm:w-[30%] w-[50%]  "
            />
        </div>
    );
};

export default CityFilter;
