import React from 'react';

const Link = ({rout}) => {
    return (
            <li className='mr-12'>
                <a href={rout.path}>{rout.name}</a>
            </li>
    );
};

export default Link;