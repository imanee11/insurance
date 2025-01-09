import React from 'react';
import image from '../../constants/image';

const Main = () => {
    return (
        <>
            <div>
                {/* hero section */}
                <section className='hero'>
                    {/* navbar */}
                    <nav className=' flex justify-between items-center py-3 px-[5vw]'>
                        {/* left */}
                        <div>
                            <div>
                                <img src={image.logo} alt="" className='w-[5vw]' />
                            </div>
                        </div>

                        {/* right */}
                        <div>
                            <div className='flex items-center gap-3'>
                                <a href="">link1</a>
                                <a href="">link2</a>
                                <a href="">link3</a>
                            </div>
                        </div>
                    </nav>


                    <div className='flex flex-col justify-center items-center text-center'>
                        <div className='pt-5'>
                            {/* text-[#3352A5] */}
                            {/* <p><span className='uppercase font-semibold text-[13px] text-[#E51C24]'>assurance al bayane</span></p> */}
                            <p className='font-bold text-[40px]  w-[60vw] text-center m-auto pb-4 '>Votre Partenaire de Confiance pour des Assurances Innovantes</p>
                            <p className='w-[50vw] text-center m-auto'>Découvrez nos solutions d’assurances personnalisées pour protéger ce qui compte le plus pour vous.</p>

                            <div className='flex gap-5 justify-center pt-8'>
                                <div className='bg-white py-4 w-[11vw] border-[1px] border-[#dadada] rounded-xl flex flex-col gap-2 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer  transition duration-300 '>
                                    <div className='rounded-md'>
                                        {/* <FaCar className='text-[#3352A5] text-[20px]'/> */}
                                        <img src={image.auto} alt="" className='w-[5vw]' />
                                    </div>
                                    <p className='text-[14px] font-medium'>Automobile</p>
                                </div>
                                <div className='bg-white py-4 w-[11vw] border-[1px] border-[#dadada] rounded-xl flex flex-col gap-2 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer  transition duration-300 '>
                                    <div className='rounded-md'>
                                        {/* <FaCar className='text-[#3352A5] text-[20px]'/> */}
                                        <img src={image.travel} alt="" className='w-[5vw]' />
                                    </div>
                                    <p className='text-[14px] font-medium'>Voyage</p>
                                </div>
                                <div className='bg-white py-4 w-[11vw] border-[1px] border-[#dadada] rounded-xl flex flex-col gap-2 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer  transition duration-300 '>
                                    <div className='rounded-md'>
                                        {/* <FaCar className='text-[#3352A5] text-[20px]'/> */}
                                        <img src={image.home} alt="" className='w-[5vw]' />
                                    </div>
                                    <p className='text-[14px] font-medium'>Habitation</p>
                                </div>
                                <div className='bg-white py-4 w-[11vw] border-[1px] border-[#dadada] rounded-xl flex flex-col gap-2 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer  transition duration-300 '>
                                    <div className='rounded-md'>
                                        {/* <FaCar className='text-[#3352A5] text-[20px]'/> */}
                                        <img src={image.health} alt="" className='w-[5vw]' />
                                    </div>
                                    <p className='text-[14px] font-medium'>Santé</p>
                                </div>
                                <div className='bg-white py-4 w-[11vw] border-[1px] border-[#dadada] rounded-xl flex flex-col gap-2 justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer  transition duration-300 '>
                                    <div className='rounded-md'>
                                        {/* <FaCar className='text-[#3352A5] text-[20px]'/> */}
                                        <img src={image.company} alt="" className='w-[5vw]' />
                                    </div>
                                    <p className='text-[14px] font-medium'>Entreprise</p>
                                </div>
                            </div>
                        </div>

                    </div>



                </section>

            </div>


        </>
    );
};

export default Main;