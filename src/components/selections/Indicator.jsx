import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndicators } from '../../redux/features/indicatorSlice';
import { setSelectedIndicator } from '../../redux/features/indicatorSlice';

const Indicator = () => {
    const dispatch = useDispatch();
    const selectedSubsector = useSelector((state) => state.subsector.selectedSubsector);

    useEffect(() => {
        if (selectedSubsector) {
            dispatch(fetchIndicators(selectedSubsector));
        }
    }, [dispatch, selectedSubsector]);

    const indicators = useSelector((state) => state.indicators.indicators);

    const selectedIndicator = useSelector((state) => state.indicators.selectedIndicator);

    const handleIndicatorChange = (event) => {
        dispatch(setSelectedIndicator(event.target.value));
    };

    useEffect(() => {
        dispatch(setSelectedIndicator(''));
    }, [dispatch]);
    return (
        <div className="relative  w-[202px] ">
            <h1 className='text-[#A7B4CA] my-2'>Indicator</h1>
            <select
                value={selectedIndicator}
                onChange={handleIndicatorChange}
                className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]">
                {indicators.map((indicator) => (
                    <option key={indicator} value={indicator}>{indicator}</option>
                ))}
            </select>
        </div>
    );
}

export default Indicator;
