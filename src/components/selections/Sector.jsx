// Sector.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSectors, setSelectedSector } from '../../redux/features/sectorSlice';

const Sector = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSectors());
    }, [dispatch]);

    const sectors = useSelector((state) => state.sector.sectors);
    const selectedSector = useSelector((state) => state.sector.selectedSector);

    const handleSectorChange = (event) => {
        dispatch(setSelectedSector(event.target.value));
    };

    useEffect(() => {
        dispatch(setSelectedSector(''));
    }, [dispatch]);

    return (
        <div className="relative  w-[202px]  ">
            <h1 className='text-[#A7B4CA] my-2'>Sector</h1>
            <select
                className="w-full p-2.5 text-[#A7B4CA] bg-[#293F64] border border-[#4A628A]  shadow-sm outline-none appearance-none rounded-[7px]"
                value={selectedSector} // Seçilen sektörü kontrol edilen bileşen olarak ayarla
                onChange={handleSectorChange}
            >
                <option value="#">{}</option> 
                {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                ))}
            </select>
        </div>
    )
}

export default Sector;
