import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchYears } from '../redux/features/yearSlice'


const Year = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchYears());

    }, [dispatch]);

    const years = useSelector((state) => state.years.years);
    console.log(years)

    return (
        <div className="relative ">
            <h1 className='text-[#A7B4CA] my-2'>Year</h1>
            <select className="select-none w-tfull p-2.5  text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none  rounded-[7px]">
                <option value="#">2021</option>
                {
                    years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Year
