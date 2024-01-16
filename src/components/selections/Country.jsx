import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry, setSelectedCountries } from '../../redux/features/countrySlice';
import vector from '../../../public/img/vector/vector.svg';

const Country = () => {
    const dispatch = useDispatch();
    const [checkedCountries, setCheckedCountries] = useState([]);
    const [selectAll, setSelectAll] = useState(false);  // State for "All" checkbox
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCountry());
    }, [dispatch]);

    const countries = useSelector((state) => state.country.countries);

    const handleCountryClick = (country) => {
        if (country === "(All)") {
            // Eğer "All" seçeneğine tıklanırsa, tüm ülkeleri seç veya seçimi kaldır
            setCheckedCountries(selectAll ? [] : countries.filter((c) => c !== "(All)"));
            setSelectAll(!selectAll);
        } else {
            // Eğer bir ülkeye tıklanırsa, "All" seçeneğini kaldır ve diğer ülkeleri işaretle
            const updatedCheckedCountries = checkedCountries.includes(country)
                ? checkedCountries.filter((c) => c !== country)
                : [...checkedCountries, country];

            setCheckedCountries(updatedCheckedCountries);
            setSelectAll(false);
        }

        dispatch(setSelectedCountries(checkedCountries));
    };

    const toggleCountryList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h1 className='text-[#A7B4CA] my-2'>Country</h1>
            <div className="relative">
                <div onClick={toggleCountryList} className="flex justify-between items-center cursor-pointer py-2.5 px-4 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A] w-[150px] shadow-sm outline-none rounded-[7px]">
                    <p>(All)</p>
                    <div className=''><img src={vector} alt="" /></div>
                </div>
                {isOpen && (
                    <ul className="overflow-y-auto text-start h-[300px] bg-[#293F64] list-none p-0 absolute top-full left-0  p-x-2.5 text-[#A7B4CA] border border-[#172E55] text- shadow-sm outline-none rounded-[7px] hovr:bg-[#293F64]">

                        <li onClick={() => handleCountryClick("(All)")} className='flex items-center gap-1 justify-between p-1 w-[146px]'>
                            <p>All</p>
                            <input type="checkbox" id="selectAll" checked={selectAll} onChange={() => handleCountryClick("(All)")} className="mr-2" />
                        </li>

                        {countries.map((country) => (
                            <li key={country} className="flex items-center gap-1 justify-between p-1 w-[146px]">
                                <label htmlFor={country} className='text-[#A7B4CA]'>{country}</label>
                                <input type="checkbox" id={country} value={country} checked={checkedCountries.includes(country)} onChange={() => handleCountryClick(country)} className="mr-2" />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Country;
