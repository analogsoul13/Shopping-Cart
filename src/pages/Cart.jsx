import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,increase,decrease,checkout } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {

    const dispatch = useDispatch()
    const nav = useNavigate()

    const { cart } = useSelector((state) => state.cartReducer)

    const handleCheckout =()=>{
        dispatch(checkout())
        nav('/')
        toast.success("Cart Checked Out!")

    }

    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {cart?.length > 0 ? (
                                cart.map((item) => (
                                    <div key={item.id} className="p-4 border rounded-lg shadow-sm">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <img
                                                src={item?.thumbnail}
                                                alt="Product"
                                                className="w-20 h-20 object-cover rounded"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium truncate">{item.title}</h3>
                                                <p className="text-sm text-gray-500">Product ID: {item.id}</p>
                                                <p className="font-semibold">${item?.price}</p>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    className="btn btn-sm btn-outline"
                                                    onClick={() => dispatch(decrease(item?.id))}
                                                >
                                                    <i className="fas fa-minus text-sm"></i>
                                                </button>
                                                <span className="w-8 text-center">{item?.quantity}</span>
                                                <button
                                                    className="btn btn-sm btn-outline"
                                                    onClick={() => dispatch(increase(item?.id))}
                                                >
                                                    <i className="fas fa-plus text-sm"></i>
                                                </button>
                                            </div>
                                            {/* Remove from cart */}
                                            <button
                                                className="btn btn-sm btn-ghost text-red-500 hover:text-red-700"
                                                onClick={() => dispatch(removeFromCart(item?.id))}
                                            >
                                                <i className="fas fa-trash-alt text-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">Your cart is empty</div>
                            )}
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-1 border rounded-lg shadow-sm p-4 sticky top-4">
                        <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>

                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Total Items:{cart.length}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total Amount : ${
                                    cart?.reduce((prev, item) => prev + (item.price * item.quantity), 0)}</span>
                            </div>
                        </div>

                        <button onClick={handleCheckout} className="btn btn-accent w-full">
                            <i className="fas fa-shopping-cart mr-2"></i>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
