import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchYears } from '../../redux/features/yearSlice';
import vector from '../../../public/img/vector/vector.svg'


const Year = () => {
  const dispatch = useDispatch();
  const years = useSelector((state) => state.years.years);

  useEffect(() => {
    dispatch(fetchYears());
  }, [dispatch]);

  const [selectedYear, setSelectedYear] = useState(''); 
  const [isOpen, setIsOpen] = useState(false);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 className=' text-[#A7B4CA] my-2'>Year<p className=' pl-4 pr-1 flex items-center justify-center border-l border-[#4A628A]'></p></h1>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between  items-center  cursor-pointer p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A] w-[102px] shadow-sm outline-none rounded-[7px]"
        >
          {selectedYear || '2021'}

          <img src={vector} alt="" className='pr-2' />
        </div>
        {isOpen && (
          <ul className="overflow-y-auto h-[300px] bg-[#293F64] list-none p-0 absolute top-full left-0 text-center p-x-2.5 text-[#A7B4CA] border border-[#172E55] text-shadow-sm outline-none rounded-[7px] hover:bg-[#293F64]">
            {years.map((year) => (
              <li
                key={year}
                onClick={() => handleYearClick(year)}
                className={`flex items-center gap-1 justify-between p-1 w-[100px] cursor-pointer ${
                  selectedYear === year ? 'bg-[#4A628A] text-[#293F64]' : ''
                }`}
              >
                {year}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Year;
