import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Header() {
    return (
        <>
            <div className='md:hidden lg:hidden'>
                <Mobile />
            </div>

            <div className='hidden md:block lg:block'>
                <Desktop />
            </div>
        </>
    )
}

export default Header
