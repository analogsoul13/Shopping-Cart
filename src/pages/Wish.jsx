import React from 'react'
import { Link } from 'react-router-dom'

const Wish = () => {
  return (
    <>
      <div className='flex justify-center'>
        <h1 className='text-xl font-semibold p-2'>Wish List</h1>
      </div>

      <div className='flex justify-center items-center'>
        <section className="grid grid-rows-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <Link to={'/view'}>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </Link>

            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Price : 24$</p>
              <div className="card-actions justify-end">
                <button className='btn'><i className="fa-solid fa-cart-shopping fa-xl" /></button>
                <button className='btn'><i className="fa-solid fa-xl fa-heart" /></button>

              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Wish