import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wish = () => {
  const dispatch = useDispatch()
  const { wishlist } = useSelector((state) => state.wishReducer)
  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-xl font-semibold p-2'>Wish List</h1>
      </div>

      <div className='flex justify-center items-center'>
        <section className="grid grid-rows-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {
            wishlist?.length > 0 ?
              <>
                {
                  wishlist.map(item => (
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <Link to={`/view/${item?.id}`}>
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
                          {/* Add to cart */}
                          <button onClick={()=>dispatch(addToCart(item))} className='btn'><i className="fa-solid fa-cart-shopping fa-xl" /></button>
                          {/* Remove from wishlist */}
                          <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className='btn'><i className="fa-solid fa-xl fa-heart-circle-xmark" /></button>

                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
              :
              <h3 className='mx-auto'>No items added yet !!</h3>
          }

        </section>
      </div>

    </>
  )
}

export default Wish