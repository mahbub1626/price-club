import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const priceOption = [
        { id: 1, name: 'free', price: 0, features: [
            'Everything on Free',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] },
        { id: 2, name: 'Medium', price: 9.39, features: [
            'Fverything on premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] },
        { id: 3, name: 'Premium', price: 19.99, features: [
            'Everything on Pro Premium',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use feature',
            'Hudai Feature',
            'Ajaira Feature'
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl bg-indigo-300 p-12 text-white'>Price Option</h2>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    priceOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;