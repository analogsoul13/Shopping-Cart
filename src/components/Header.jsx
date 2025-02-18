import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const {cart} = useSelector((state)=>state.cartReducer)
    const {wishlist} = useSelector((state)=>state.wishReducer)
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to={'/'}>
                        <button className="btn btn-ghost font-bold uppercase text-md sm:text-xl">Shopping Cart</button>
                    </Link>

                </div>
                <div className='navbar-end flex space-x-2'>
                    <Link to={'/cart'}>
                        <div role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <i className="fa-solid fa-cart-shopping fa-xl" />
                                <span className="badge badge-sm indicator-item">{cart?.length}</span>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/wish'}>
                        <div role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <i className="fa-solid fa-xl fa-heart" />
                                <span className="badge badge-sm indicator-item">{wishlist?.length}</span>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden sm:flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header