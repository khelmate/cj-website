import React from 'react'

const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-12 select-none" src="./assets/logo.jpeg" alt="logo"  style={{ clip: "rect(0,50,200,0)"}}/>
            <h1 className="text-3xl font-semibold text-blue-600 brand-font select-none">CJ Engineering Solutions</h1>
        </div>
    )
}

export default NavBrand
