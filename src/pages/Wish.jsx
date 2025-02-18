import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Wish = () => {
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
                          <button className='btn'><i className="fa-solid fa-cart-shopping fa-xl" /></button>
                          <button className='btn'><i className="fa-solid fa-xl fa-trash" /></button>

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