import React from 'react';
import image from '../../constants/image';

import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoHappyOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbPointFilled } from "react-icons/tb";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { MdSecurity } from 'react-icons/md';
import { IoShieldCheckmarkOutline } from "react-icons/io5";





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
                            <div className='flex items-center gap-[2vw]'>
                                <a href="#about" className='font-medium hover:border-b-[2px] hover:border-[#3352A5]  transition duration-300 text-[15px] '>À propos</a>
                                <a href="#services" className='font-medium hover:border-b-[2px] hover:border-[#3352A5]  transition duration-300 text-[15px] '>Services</a>
                                <a href="" className='font-medium hover:border-b-[2px] hover:border-[#3352A5]  transition duration-300 text-[15px] '>link3</a>
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


                {/* numbers part */}
                <section className='pt-[10vh] pb-10'>
                    <div className='flex justify-center gap-[10vw]'>
                        <div className='flex flex-col items-center justify-center'>
                            <IoHappyOutline className='text-[30px] text-[#3352A5] ' />
                            <p className='pt-2 font-medium text-[30px]'>+30 000</p>
                            <p className='uppercase'>Clients satisfaits</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <LiaHandsHelpingSolid className='text-[30px] text-[#E51C24] ' />
                            <p className='pt-2 font-medium text-[30px]'>+8 ans</p>
                            <p className='uppercase'>d'experience</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <LiaUserFriendsSolid className='text-[30px] text-[#ECB2B4] ' />
                            <p className='pt-2 font-medium text-[30px]'>+6</p>
                            <p className='uppercase'>Partenaires Assurance</p>
                        </div>
                        {/* <div className='flex flex-col items-center justify-center'>
                            <HiOutlineEmojiHappy />
                            <p>+30 000</p>
                            <p className='uppercase'>Clients satisfaits</p>
                        </div> */}

                    </div>
                </section>


                {/* about us */}
                <section className='px-[5vw] pb-10' id='about'>
                    <div className='flex gap-5 items-center'>
                        {/* left */}
                        <div className='w-[50vw]'>
                            <img src={image.insurance} alt="" className='w-[100%] object-cover object-top rounded-xl ' />
                        </div>


                        {/* right */}
                        <div className='w-[50vw]'>
                            <p className='border-l-[4px] border-l-[#3352A5] pl-3 text-[#E51C24] font-medium '>À Propos de <span className='uppercase'>assurance al bayane :</span></p>
                            <p className='text-[30px] font-bold pt-2'><span className='uppercase'>assurance al bayane :</span> Le choix des entreprises pour une protection efficace</p>
                            <p>Assurance Al Bayane est une société marocaine offrant un éventail complet de services d’assurance, allant de l’automobile à la santé, en passant par l’habitation et les entreprises. Avec une approche centrée sur le client, elle propose des solutions personnalisées et adaptées aux besoins de chaque assuré. Grâce à son expertise locale et son réseau de partenaires de confiance, elle accompagne ses clients tout au long de la gestion de leurs risques, en garantissant des services fiables et de qualité pour assurer leur tranquillité d’esprit.</p>
                        </div>
                    </div>

                </section>


                {/* services  */}
                <section className='px-[5vw] bg-[#f1f6fc] pt-10' id='services'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='border-l-[4px] border-l-[#3352A5] pl-3 text-[#E51C24] font-medium'>Notre expertise</p>
                        <p className='text-[30px] font-bold pt-2 '>Nos Services</p>
                    </div>

                    <div className='pt-10 pb-10'>
                        {/* first part */}
                        <div className='flex gap-5 justify-center'>
                            {/* left */}
                            <div className='w-[50vw] border-[1px] bg-[#fff] border-[#dadada] rounded-xl p-4  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-300 cursor-pointer group'>
                                {/* top part */}
                                <div className='flex gap-3'>
                                    <div>
                                        <div className="flex items-center   ">
                                            <TbPointFilled className="fa-solid fa-circle text-[40px]  text-[#3352A5]" />
                                            <p className='flex gap-2 items-center text-[#000] font-medium'>Assurance Automobile</p>
                                        </div>
                                        <div className="border-l-[1px] border-[#3352A5] pl-[1.5vw] ml-[1.5vw]">
                                            {/* <p className="text-[#fff] text-[30px] font-bold">powerful when need.</p> */}
                                            <p className='text-[14px]'>Nous vous apporte une offre de garanties complète pour répondre à tous vos besoins.</p>
                                        </div>
                                    </div>
                                    <img src={image.auto} alt="" className='w-[20%] object-cover' />
                                </div>

                                {/* bottom part */}
                                <div className="pt-2 flex flex-wrap gap-3">
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <MdOutlineNotificationImportant className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Obligatoire</p>
                                    </div>
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <MdSecurity className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Classiques</p>
                                    </div>
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <IoShieldCheckmarkOutline className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Innovantes</p>
                                    </div>

                                </div>
                            </div>

                            {/* right */}
                            <div className='w-[50vw] border-[1px] bg-[#fff] border-[#dadada] rounded-xl p-4  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition duration-300 cursor-pointer group'>
                                {/* top part */}
                                <div className='flex gap-3'>
                                    <div>
                                        <div className="flex items-center   ">
                                            <TbPointFilled className="fa-solid fa-circle text-[40px]  text-[#E51C24]" />
                                            <p className='flex gap-2 items-center text-[#000] font-medium'>Assurance Voyage</p>
                                        </div>
                                        <div className="border-l-[1px] border-[#E51C24] pl-[1.5vw] ml-[1.5vw]">
                                            {/* <p className="text-[#fff] text-[30px] font-bold">powerful when need.</p> */}
                                            <p className='text-[14px]'>Assurance Al Bayane couvre les risques comme les urgences médicales, l'annulation de voyage et la perte de bagages, offrant ainsi une protection pendant les déplacements.</p>
                                        </div>
                                    </div>
                                    <img src={image.travel} alt="" className='w-[20%] object-cover' />
                                </div>

                                {/* bottom part */}
                                {/* <div className="pt-2 flex flex-wrap gap-3">
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <MdOutlineNotificationImportant className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Obligatoire</p>
                                    </div>
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <MdSecurity className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Classiques</p>
                                    </div>
                                    <div className="flex items-center gap-3 border-[1px] border-[#dadada] p-2 w-[16vw] rounded-md group-hover:border-[#3352A5] transition duration-300">
                                        <IoShieldCheckmarkOutline className='text-[#3352A5]' />
                                        <p className="text-[14px]">Garanties Innovantes</p>
                                    </div>

                                </div> */}
                            </div>
                        </div>



                    </div>

                </section>

            </div>


        </>
    );
};

export default Main;