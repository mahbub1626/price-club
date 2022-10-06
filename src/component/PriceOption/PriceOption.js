import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, features, price } = option
    return (
        <div className=' bg-indigo-300 m-3 rounded-md p-6'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{price}</span>
                    <span className='text-gray-200 text-2xl '>/month</span>
                </h3>
                <p className='text-3xl mt-2'>{name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full py-2 rounded-md mt-2'>Buy Now</button>
        </div>
    );
};

export default PriceOption;