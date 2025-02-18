import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchProductsThunk } from '../redux/slices/productSlice'
import { addToWishlist } from '../redux/slices/wishSlice'

const Home = () => {

    const dispatch = useDispatch()
    const { product, loading, error } = useSelector((state) => state.productReducer)

    useEffect(() => {
        dispatch(fetchProductsThunk())
    }, [])
    console.log(product);

    return (
        <>
            <header className='flex flex-col justify-center bg-base-300 items-center w-full h-[350px]'>
                <h1 className='text-4xl sm:text-6xl font-bold'>SHOPPING CART</h1>
                <p className='text-xs sm:text-lg text-base-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis.</p>
            </header>

            <div className='flex justify-center items-center'>
                <section className="grid grid-rows-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    loading ?
                        <h2>Loading...</h2>

                        :
                        <>
                        {
                            error ?
                            <h2 className='text-red-500'>{error}</h2>
                            :
                            <>
                                {
                                    product?.map(item => (
                                        <div className="card bg-base-100 w-96 shadow-xl">
                                            <figure>
                                                <Link to={`/view/${item.id}`}>
                                                    <img
                                                        src={item?.thumbnail}
                                                        alt="Shoes" />
                                                </Link>

                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {item?.title}
                                                </h2>
                                                <p>${item?.price}</p>
                                                    <div className="card-actions justify-end">
                                                        {/* Add to cart Button */}
                                                        <button className='btn'><i className="fa-solid fa-cart-shopping fa-xl" /></button>
                                                        {/* Wish List Button */}
                                                        <button onClick={()=>dispatch(addToWishlist(item))} className='btn'><i className="fa-solid fa-xl fa-heart" /></button>

                                                    </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        }
                        </>
                }

                </section>
            </div>
        </>
    )
}

export default Home