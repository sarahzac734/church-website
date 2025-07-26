'use client'

import { useEffect } from 'react'
import Carousel from './components/Carousel'
import AOS from 'aos'
import "aos/dist/aos.css"
import SmallCarousel from './components/smallCarousel'

export default function Home() {
  useEffect(() => {
    AOS.init({})
  }, [])
  
  return (
    <>
    <div className="pt-25">  
      <div className='mb-10'>
          <Carousel />
       </div>
       <section className='mb-40'>
        <div><h2 className="font-extrabold text-2xl mb-15 text-center">Welcome to St. John the Baptist Knanaya Church of Greater Washington</h2></div>
        <article className='pt-10 grid mx-20 lg:grid-cols-2 justify-center items-center ...' data-aos="fade-up" data-aos-duration="1000">
        <img className=" w-150 h-auto mx-auto lg:float-left" src="/images/admin.jpg"/>
        <p className='font-bold mt-5 lg:text-xl px-4 lg:px-10  text-center'>We are located in the DC Metropolitan area and we invite you to join us in prayer on the 3rd Saturday of every month.
                We look forward to seeing you at our next service! </p>
        
        </article>
       </section>

       <section>
       <article className='pt-10 grid mx-20 lg:grid-cols-2 justify-center items-center ...'>
       <SmallCarousel />
       <p className='font-bold mt-5 lg:text-xl px-4 lg:px-10  text-center'>On May 24th, 2024, we gathered as a community to celebrate the uplifting Hosanna Service, guided by the insightful leadership of Fr. Anil K Thomas. It was a day filled with gratitude, reflection, and spiritual renewal. </p>
        
        </article>
       </section>
    </div>

    </>
  )
}
