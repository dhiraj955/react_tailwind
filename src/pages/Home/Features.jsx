import React from 'react'
import { FaTruck, FaLock, FaClock } from 'react-icons/fa';
import { FiRotateCcw } from 'react-icons/fi';

const features = [
    {icon: FaTruck, text: 'Free Shipping', subtext: 'On orders over $100'},
    {icon: FaLock, text: 'Secure Payment', subtext: '100% protected payments'},
    {icon: FiRotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
    {icon: FaClock , text: '24/7 Support', subtext: 'Dedicated customer service'},
]
const Features = () => {

  return (
    <div className='mt-10 py-8 px-4 sm:px-6 lg:px-8'>
        <h1 className="text-center text-gray-600 pb-20 font-bold text-4xl">Our Service</h1>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
            {features.map((feature, index)=> {
                const Icon = feature.icon;
               return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                    <Icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true" />
                    <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>{feature.text}</p>
                        <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Features