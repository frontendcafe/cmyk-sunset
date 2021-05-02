import React, { createContext } from 'react';

export const ShoppingContext = React.createContext('');

const orderData = {
	userName: null,
	totalAmount: 0,
	itemsCount: 0,
	orderStatus: 'Pending',
	payMethod: null,
	payId: null,
	payStatus: 'Pending',
	deliveryMethod: null,
	deliveryAdress: null,
	delivered: null,
	finished: false,
	createdAt: null,
	updatedAt: null,
	items: [],
	// 	{
	// 		id_item: mongoose.Schema.Types.ObjectId,
	// 		idMarve: String,
	// 		title: String,
	// 		quantity: Number,
	// 		price: Number,
	// 		total: Number,
	// 	},
	// ],
};

export const ShoppingProvider = ({ children }) => {
	const [orderData, setOrderData] = React.useState([]);

	const setCart = user => {
		const order = orderData;
		order.userName = user.userName;
		order.createdAt = Date.now();
		order.updatedAt = Date.now();
		localStorage.setItem('cart', JSON.stringify(order));
		setOrderData(order);
		return order;
	};

	const getCart = () => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		return cart;
	};

	const addItemCart = item => {

		console.log(item);
		return item;
	};

	const removeItemCart = item => {
		// localStorage.removeItem('logged');
		return true;
	};

	const setPayDelivery = order => {
		// TODO

		return order;
	};

	const checkout = () => {
		// Todo
	};

	return (
		<ShoppingContext.Provider
			value={{
				cart,
				setCart,
				getCart,
				addItemCart,
				removeItemCart,
				setPayDelivery,
				checkout,
			}}>
			{children}
		</ShoppingContext.Provider>
	);
};
