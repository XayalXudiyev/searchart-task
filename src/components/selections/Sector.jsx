import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectors, setSelectedSector } from '../../redux/features/sectorSlice';
import vector from '../../../public/img/vector/vector.svg'


const Sector = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, [dispatch]);

  const sectors = useSelector((state) => state.sector.sectors);
  const selectedSector = useSelector((state) => state.sector.selectedSector);
  const [isOpen, setIsOpen] = useState(false);

  const handleSectorClick = (sector) => {
    dispatch(setSelectedSector(sector));
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 className='text-[#A7B4CA] my-2'>Sector</h1>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center cursor-pointer p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A] w-[202px] shadow-sm outline-none rounded-[7px]"
        >
          {selectedSector || 'Economy'}
          <img src={vector} alt="" className='pr-2' />
        </div>
        {isOpen && (
          <ul className="overflow-y-auto bg-[#293F64] list-none p-0 absolute top-full left-0 text-center p-x-2.5 text-[#A7B4CA] border border-[#172E55] text-shadow-sm outline-none rounded-[7px] hover:bg-[#293F64]">
            {sectors.map((sector) => (
              <li
                key={sector}
                onClick={() => handleSectorClick(sector)}
                className={`flex items-center gap-1 justify-between p-1 w-[198px] cursor-pointer hover:bg-[#4A628A] ${
                  selectedSector === sector ? 'bg-[#4A628A] text-[#A7B4CA]' : ''
                }`}
              >
                {sector}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sector;
