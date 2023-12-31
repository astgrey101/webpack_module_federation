import React from 'react'

import Login from "cart/Login"

export default function Header() {
    return (
        <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <div className="flex">
                <div className="flex-grow">
                    Fidget Spinner World II
                </div>
                <div className="flex-end">
                    <Login/>
                </div>
            </div>
        </div>
    )
}