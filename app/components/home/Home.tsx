'use client'
import React from 'react'
import {  Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Image from 'next/image'
import Image1 from '../../../public/images/wp4252970-bollywood-movies-wallpapers.jpg'
import Image2 from '../../../public/images/wp5510430-girlfriend-movies-wallpapers.jpg'
import Image3 from '../../../public/images/wp6669272-bollywood-couple-wallpapers.jpg'
import Image4 from '../../../public/images/wp6972331-romance-movies-wallpapers.jpg'
import Image5 from '../../../public/images/wp8073251-bollywood-song-wallpapers.jpg'
import HeadLine from '../HeadLine'
import PlayButton from '../PlayButton'
import { useRouter } from 'next/navigation'
const list = [
    {
        title: "Orange",
        img: Image1,
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: Image2,
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: Image3,
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: Image4,
        price: "$5.30",
    },
    {
        title: "Avocado",
        img: Image5,
        price: "$15.70",
    },
    {
        title: "Orange",
        img: Image1,
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: Image2,
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: Image3,
        price: "$10.00",
    },
];
const Home = () => {
    const router = useRouter()
    return (
        <div className='p-4 bg-secondary-300'>
            <div className='flex flex-col '>
                <HeadLine title='Top hits' subTitle='2024' />
                <hr className='w-full  p-2'/>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800
                rounded-lg">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable className='bg-transparent '
                        onClick={() => {
                            router.push('/music')
                        }}
                        >
                            
                            <CardBody className="overflow-visible p-0">
                            
                                <Image
                                    alt={item.title}
                                    className="w-full object-cover h-[190px] hover:scale-125 transition-all duration-500 cursor-pointer"
                                    src={item.img}
                                />
                               <div className='absolute bottom-0 ml-8 mb-4' >
                                    <PlayButton/>
                                    <div className='flex flex-col ml-4'>
                                    <p className='relative align-end text-white text-lg font-bold '>Perfect</p>
                                    <p className='relative align-end text-white  font-bold opacity-50'>ED Sheeran</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

            </div>
            <div className='flex flex-row-2 p-3'>
                <div className='text-4xl bg-secondary-200 rounded-lg m-3'>
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page

                </div>
                <div className='text-4xl bg-secondary-100 p-3 rounded-lg m-3'>
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page
                    Welcome to the Home Page

                </div>
            </div>
            <div className='flex flex-row bg-secondary-100 rounded-lg m-3'>
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
                aaaaa
            </div>
        </div>

    )
}

export default Home