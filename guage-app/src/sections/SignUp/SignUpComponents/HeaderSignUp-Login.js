import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function HeaderSignUp({children, title}) {
    return (
        <>
            <div className='md:hidden lg:hidden'>
                <Mobile  > {title && (<>
                <h1 className="heading">{title}</h1>
                <hr />
              </>)} </Mobile>
            </div>

            <div className='hidden md:block lg:block'>
                <Desktop> {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )} </Desktop>
            </div>
        </>
    )
}

export default HeaderSignUp
