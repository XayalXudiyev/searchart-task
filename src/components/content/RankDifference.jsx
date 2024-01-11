import { useEffect, useState } from 'react'
import axios from 'axios'

const RankDifference = () => {

    const equal = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M21.375 15C21.375 15.2984 21.2565 15.5845 21.0455 15.7955C20.8345 16.0065 20.5484 16.125 20.25 16.125H3.75C3.45163 16.125 3.16548 16.0065 2.9545 15.7955C2.74353 15.5845 2.625 15.2984 2.625 15C2.625 14.7016 2.74353 14.4155 2.9545 14.2045C3.16548 13.9935 3.45163 13.875 3.75 13.875H20.25C20.5484 13.875 20.8345 13.9935 21.0455 14.2045C21.2565 14.4155 21.375 14.7016 21.375 15ZM3.75 10.125H20.25C20.5484 10.125 20.8345 10.0065 21.0455 9.7955C21.2565 9.58452 21.375 9.29837 21.375 9C21.375 8.70163 21.2565 8.41548 21.0455 8.2045C20.8345 7.99353 20.5484 7.875 20.25 7.875H3.75C3.45163 7.875 3.16548 7.99353 2.9545 8.2045C2.74353 8.41548 2.625 8.70163 2.625 9C2.625 9.29837 2.74353 9.58452 2.9545 9.7955C3.16548 10.0065 3.45163 10.125 3.75 10.125Z" fill="#A3ABB9" /></svg>
    const up = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">  <path d="M15.6688 7C15.6688 6.80109 15.7478 6.61032 15.8885 6.46967C16.0291 6.32902 16.2199 6.25 16.4188 6.25H22.0008C22.1997 6.25 22.3905 6.32902 22.5311 6.46967C22.6718 6.61032 22.7508 6.80109 22.7508 7V12.546C22.7508 12.7449 22.6718 12.9357 22.5311 13.0763C22.3905 13.217 22.1997 13.296 22.0008 13.296C21.8019 13.296 21.6111 13.217 21.4705 13.0763C21.3298 12.9357 21.2508 12.7449 21.2508 12.546V8.803L15.1148 14.9C14.6458 15.366 14.2418 15.768 13.8748 16.047C13.4808 16.345 13.0448 16.571 12.5058 16.571C11.9678 16.571 11.5308 16.345 11.1368 16.046C10.7698 15.768 10.3668 15.366 9.89681 14.9L9.62281 14.627C9.10881 14.116 8.77581 13.787 8.49781 13.576C8.23781 13.378 8.11581 13.356 8.03481 13.356C7.95481 13.356 7.83281 13.379 7.57281 13.576C7.29581 13.787 6.96281 14.116 6.44881 14.628L2.52981 18.53C2.38739 18.6622 2.19921 18.734 2.0049 18.7302C1.8106 18.7264 1.62536 18.6474 1.4882 18.5097C1.35104 18.372 1.27268 18.1865 1.26962 17.9922C1.26657 17.7978 1.33905 17.6099 1.47181 17.468L5.42481 13.53C5.89481 13.064 6.29781 12.661 6.66481 12.382C7.05881 12.082 7.49581 11.857 8.03481 11.856C8.57381 11.856 9.01081 12.082 9.40481 12.381C9.77181 12.66 10.1758 13.062 10.6448 13.529L10.9198 13.801C11.4338 14.312 11.7668 14.641 12.0438 14.851C12.3038 15.049 12.4258 15.071 12.5058 15.071C12.5858 15.071 12.7078 15.049 12.9678 14.851C13.2458 14.641 13.5778 14.312 14.0928 13.801L20.1828 7.749H16.4188C16.2199 7.749 16.0291 7.66998 15.8885 7.52933C15.7478 7.38868 15.6688 7.19891 15.6688 7Z" fill="#23D30F" /></svg>
    const down = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M15.6688 17C15.6688 17.1989 15.7478 17.3897 15.8885 17.5303C16.0291 17.671 16.2199 17.75 16.4188 17.75H22.0008C22.1997 17.75 22.3905 17.671 22.5311 17.5303C22.6718 17.3897 22.7508 17.1989 22.7508 17V11.454C22.7508 11.2551 22.6718 11.0643 22.5311 10.9237C22.3905 10.783 22.1997 10.704 22.0008 10.704C21.8019 10.704 21.6111 10.783 21.4705 10.9237C21.3298 11.0643 21.2508 11.2551 21.2508 11.454V15.197L15.1148 9.1C14.6458 8.634 14.2418 8.232 13.8748 7.953C13.4808 7.655 13.0448 7.429 12.5058 7.429C11.9678 7.429 11.5308 7.655 11.1368 7.954C10.7698 8.232 10.3668 8.634 9.89681 9.1L9.62281 9.373C9.10881 9.884 8.77581 10.213 8.49781 10.424C8.23781 10.622 8.11581 10.644 8.03481 10.644C7.95481 10.644 7.83281 10.621 7.57281 10.424C7.29581 10.213 6.96281 9.884 6.44881 9.372L2.52981 5.47C2.38739 5.33778 2.19921 5.266 2.0049 5.26979C1.8106 5.27358 1.62536 5.35264 1.4882 5.49032C1.35104 5.62799 1.27268 5.81353 1.26962 6.00785C1.26657 6.20216 1.33905 6.39008 1.47181 6.532L5.42481 10.47C5.89481 10.936 6.29781 11.339 6.66481 11.618C7.05881 11.918 7.49581 12.143 8.03481 12.144C8.57381 12.144 9.01081 11.918 9.40481 11.619C9.77181 11.34 10.1758 10.938 10.6448 10.471L10.9198 10.199C11.4338 9.688 11.7668 9.359 12.0438 9.149C12.3038 8.951 12.4258 8.929 12.5058 8.929C12.5858 8.929 12.7078 8.951 12.9678 9.149C13.2458 9.359 13.5778 9.688 14.0928 10.199L20.1828 16.251H16.4188C16.2199 16.251 16.0291 16.33 15.8885 16.4707C15.7478 16.6113 15.6688 16.8011 15.6688 17Z" fill="#CE1126" /></svg>

    const [rankIndicator, setRankIndicator] = useState([])
    const [flag, setFlag] = useState([])

    useEffect(() => {
        const fetchRankIndicator = async () => {
            try {
                const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/rank-diff/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars&year1=2019&year2=2021&countries=Pakistan`);
                setRankIndicator(res.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchRankIndicator();
    }, []);

    useEffect(() => {
        const fetchFlag = async () => {
            try {
                const res = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`);
                setFlag(res.data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchFlag();
    }, [flag])

    const rankDifferences = rankIndicator.countries?.map((country) => country.rank_difference)
    const rank = rankIndicator.countries?.map((country, index) => (<span key={index}>{country.rank_difference}</span>))
    const COUNTRYY = rankIndicator.countries?.map((country, index) => (<span>{country.country}</span>))

    return (
        <section className='w-2/6 mx-auto mt-8 text-white  rounded-md'>

            <div className='h-[56px] bg-[#0D1F3D]'><p className='text-[#A7B4CA]'>Difference in rank between years</p></div>

            <div className='bg-[#051124] p-2 '>
                <div className="flex justify-between ">
                    <select className="select-none text-center w-5/12 p-x-2.5 text-[#A7B4CA] bg-[#051124] border border-[#172E55] text-2xl shadow-sm outline-none appearance-none rounded-[7px] hover:bg-[#293F64]">
                        <option value={rankIndicator.first_year}>{rankIndicator.first_year}</option>
                    </select>

                    <select className="select-none text-center w-5/12  p-x-2.5  text-[#A7B4CA] bg-[#051124] border border-[#172E55] text-2xl  shadow-sm outline-none appearance-none  rounded-[7px] hover:bg-[#293F64]">
                        <option value={rankIndicator.second_year}>{rankIndicator.second_year}</option>
                    </select>
                </div>

                <div className='h-[331px] flex justify-between mt-6 overflow-y-auto content'>
                    <div className='content text-end w-2/5  '>

                        <div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div>

                        <div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div><div className='text-white flex items-center justify-end h-fit gap-2 '>
                            {
                                COUNTRYY
                            }

                            {
                                flag.filter((country) => country.name.common == 'Pakistan').map((country, index) => (
                                    <img className='w-4 rounded-sm' src={country.flags.svg} alt="" />
                                ))

                            }
                        </div>














                    </div>
                    <div className=''>
                        {rankDifferences > 0 ? (
                            <h1 className='flex gap-2 text-[#23D30F]'>{up}{rank}</h1>
                        ) : rankDifferences < 0 ? (
                            <h1 className='flex gap-2 text-[#CE1126]'>{down}{rank}</h1>
                        ) : (
                            <h1 className='flex gap-2 text-[#A3ABB9]'>{equal}{rank}</h1>
                        )}
                        <span>
                            {

                            }
                        </span>
                    </div>
                    <span>
                        {rankDifferences > 0 ? (
                            <h1 className='flex text-[#23D30F]'>Positions Up</h1>
                        ) : rankDifferences < 0 ? (
                            <h1 className='flex text-[#CE1126]'>Positions Down</h1>
                        ) : (
                            <h1 className='flex text-[#A3ABB9]'>No Changes</h1>
                        )}

                    </span>
                </div>
            </div>
        </section>
    )
}

export default RankDifference