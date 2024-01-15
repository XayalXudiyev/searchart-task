import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubsector, setSelectedSubsector } from '../../redux/features/subsectorSlice';

const Subsector = () => {
    const dispatch = useDispatch();
    const selectedSector = useSelector((state) => state.sector.selectedSector);

    useEffect(() => {
        if (selectedSector) {
            dispatch(fetchSubsector(selectedSector));
        }
    }, [dispatch, selectedSector]);

    const subsectors = useSelector((state) => state.subsector.subsectors);

    return (
        <div className="relative  w-[202px]">
            <h1 className='text-[#A7B4CA] my-2'>Subsector</h1>
            <select
                className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none  rounded-[7px]"
                onChange={(e) => dispatch(setSelectedSubsector(e.target.value))}
            >
                {subsectors.map((subsector) => (
                    <option key={subsector} value={subsector}>{subsector}</option>
                ))}
            </select>
        </div>
    );
}

export default Subsector;
