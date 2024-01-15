import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountry } from '../../redux/features/countrySlice'
import { setSelectedCountries } from '../../redux/features/countrySlice'

const Country = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountry());

    }, [dispatch]);

    const countries = useSelector((state) => state.country.countries);

    const selectedCountries = useSelector((state) => state.country.selectedCountries);

    const handleSectorChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
        dispatch(setSelectedCountries(selectedOptions));
    };

    useEffect(() => {
        dispatch(setSelectedCountries([]));
    }, [dispatch]);
    return (
        <div className="   ">
            <h1 className='text-[#A7B4CA] my-2'>Country</h1>
            <select
            value={selectedCountries}
            onChange={handleSectorChange}
             multiple 
            className="select-none  p-2.5  text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none overflow-y-auto h-[7rem] rounded-[7px]">
               <option value="" disabled></option>
                {
                    countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Country
