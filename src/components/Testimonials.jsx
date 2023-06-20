import React, { useRef } from 'react';
import CardTestimonials from './CardTestimonials';
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


export default function Testimonials() {

  const testimonials = [
    {
      content: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. The entire experience surpassed our expectations, and we couldn't have been happier with our choice.",
      name: 'Bruce Bane',
      city: 'Gotham',
      image: 'https://i2-prod.mirror.co.uk/incoming/article1148425.ece/ALTERNATES/s1200c/Christian%20Bale%20attends%20the%20European%20premiere%20of%20Dark%20Knight%20Rises%20at%20Odeon%20Leicester%20Square%20on%20July%2018,%202012%20in%20London'
    },
    {
      content: "The rental rates were surprisingly affordable, especially considering the high-quality amenities and spaciousness of the property. Upon arrival, we were greeted by a warm and welcoming host who ensured that everything was in perfect order.",
      name: 'Mary Jensen',
      city: 'Rhode Island',
      image: 'https://media.vanityfair.com/photos/6228db8acc25b7f73c9226a6/1:1/w_2694,h_2694,c_limit/539863928'
    },
    {
      content: "The rental car itself was well-maintained. The interior was clean and equipped with modern features that added to the overall driving experience. It felt great to embark on my journey with a reliable and comfortable vehicle at my disposal.",
      name: 'Nick Fury',
      city: 'Alabama',
      image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/33/1502794376-samuel-l-jackson-nick-fury-side-eye.jpg?crop=0.678xw:1.00xh;0.244xw,0&resize=1200:*'
    },
    {
      content: "When I arrived at the CarStar location, I was warmly welcomed by their staff. The host on duty was friendly and made sure that all the necessary arrangements were in place. It was evident that they took great pride in maintaining a high standard.",
      name: 'Rachel Green',
      city: 'Manhattan',
      image: 'https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg'
    },
    {
    content: "I recommend CarStar for their affordable rates and well-maintained vehicles. They truly exceeded my expectations. One of the standout aspects of their service was the incredibly reasonable rental rates they offered. ",
    name: 'Sheldon Cooper',
    city: 'Texas',
    image: 'https://images.bstatic.de/lNmMYb-xM7RSPJJYShCcOKUK2T8=/480x480/filters:focal(2651x1564:2671x1584):format(webp)/images/41b2dc71/b1af/408b/8e53/cfb1e49c0221.jpg'
    }
    // Add more testimonials here
  ];

  const testimonialsContainerRef = useRef(null);

  const handleClickPrev = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scroll({
        left: testimonialsContainerRef.current.scrollLeft - 384,
        behavior: 'smooth',
      });
    }
  };

  const handleClickNext = () => {
    if (testimonialsContainerRef.current) {
      testimonialsContainerRef.current.scroll({
        left: testimonialsContainerRef.current.scrollLeft + 384,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center m-auto mt-14 p-10  bg-white'>
      <span className='text-2xl font-bold text-slate-500'>Reviewed by People</span>
      <h1 className='text-3xl lg:text-5xl'>Client's Testimonials</h1>
      <span className='text-sm text-slate-400 w-96 md:w-97 text-center mt-4'>
        Discover the positive impact we've made on our clients by reading through their testimonials.
      </span>

      <div
        ref={testimonialsContainerRef}
        className='container flex overflow-hidden w-96 h-62 shadow-xl mt-5'
      >
        <div className='flex flex-row'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=''>
              <CardTestimonials
                content={testimonial.content}
                name={testimonial.name}
                city={testimonial.city}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <button onClick={handleClickPrev} className='bg-slate-300 p-3 rounded-full m-2 text-slate-500 hover:bg-slate-500 hover:text-slate-200 transition-colors'>
          <IoIosArrowBack size={30}/>
        </button>

        <button onClick={handleClickNext} className='bg-slate-300 p-3 rounded-full m-2 text-slate-500 hover:bg-slate-500 hover:text-slate-200 transition-colors'>
          <IoIosArrowForward size={30}/>
        </button>
      </div>
    </div>
  );
}




































