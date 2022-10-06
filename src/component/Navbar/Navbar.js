import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Notice', path: '/notice' },
        { id: 4, name: 'Addmission', path: '/addmission' },
        { id: 5, name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            {/* <span>{open ? 'Open' : 'Close'}</span> */}

            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-purple-200 w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(rout => <Link
                        key={rout.id}
                        rout={rout}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;