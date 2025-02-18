import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Classic Cotton T-Shirt",
            image: "https://sagebuyers.com/wp-content/uploads/2024/09/LD0006166713_0006166744_0006166773-1.jpg",
            price: 29.99,
            quantity: 1
        },
        {
            id: 2,
            title: "Premium Denim Jeans",
            image: "https://sagebuyers.com/wp-content/uploads/2024/09/LD0006166713_0006166744_0006166773-1.jpg",
            price: 59.99,
            quantity: 2
        }
    ]);

    // Function to update item quantity
    const updateQuantity = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        ));
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="space-y-4">
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className="p-4 border rounded-lg shadow-sm">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-20 h-20 object-cover rounded"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium truncate">{item.title}</h3>
                                                <p className="text-sm text-gray-500">Product ID: {item.id}</p>
                                                <p className="font-semibold">${item.price}</p>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <button
                                                    className="btn btn-sm btn-outline"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <i className="fas fa-minus text-sm"></i>
                                                </button>
                                                <span className="w-8 text-center">{item.quantity}</span>
                                                <button
                                                    className="btn btn-sm btn-outline"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <i className="fas fa-plus text-sm"></i>
                                                </button>
                                            </div>

                                            <button
                                                className="btn btn-sm btn-ghost text-red-500 hover:text-red-700"
                                                onClick={() => removeItem(item.id)}
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
                                <span>Total Items:</span>
                                <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total Amount:</span>
                                <span>${totalPrice}</span>
                            </div>
                        </div>

                        <button className="btn btn-accent w-full">
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
