import React from 'react'
import imgOne from "../../assets/Images/SecThree/image-one.jpg";

export const SectionTwo = () => {
    const supports = [
        {
            id: 1,
            title: "Our mode",
            description: "Our mode of operation is deeply rooted in compassion and care. We embrace a flexible and empathetic approach to ensure we can assist those in need during their most challenging times.",
        },
        {
            id: 2,
            title: "Our focus",
            description: "Our unwavering focus is on improving the lives of individuals and communities in need. We work tirelessly to provide essential resources, support, and hope to those who require it the most.",
        },
        {
            id: 3,
            title: "Our impact",
            description: "Our impact can be measured in the smiles we bring, the lives we transform, and the communities we uplift. We're dedicated to leaving a positive, lasting mark on the world through our charitable initiatives.",
        }
    ];

    return (
        <div className="py-20 px-32">
            <ul className='flex gap-0.5 w-full flex-nowrap justify-center'>
                {supports.map((support) => (
                    <li className='relative flex-1 h-[300px] group mb-28'
                        key={support.id
                        }>
                        <img src={imgOne} alt={support.title + "image"} className='w-full h-full' />
                        <div className="hidden bg-blue-800 bg-opacity-40 absolute top-0 left-0 h-full w-full z-10 group-hover:inline-block duration-500 ease-in-out transition-all transform"></div>
                        <div className='absolute z-10 w-[90%] h-full top-56 left-[24px] bg-white flex flex-col gap-10 justify-center items-center text-center p-8 group-hover:top-44 duration-500 ease-in-out transition-all transform cursor-pointer'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='capitalize text-green-800 font-bold text-[32px]'>
                                    {support.title}
                                </h2>
                                <p className='text-base font-semibold'>
                                    {support.description}
                                </p>
                            </div>
                            <button className='text-orange-700 font-bold text-xl uppercase'>
                                Learn More
                            </button>
                        </div>
                        <div className='absolute w-full z-10 bg-white h-10 -bottom-52'>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}