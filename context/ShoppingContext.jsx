import React, { createContext, useContext, useEffect } from 'react';
import { DataContext } from './DataContext';

export const ShoppingContext = React.createContext('');

const orderDataBase = {
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
};

export const ShoppingProvider = ({ children }) => {
	const [orderData, setOrderData] = React.useState(null);
	const { data } = useContext(DataContext);

	const setCart = user => {
		const order = orderData || orderDataBase;

		order.items = [];
		order.userName = user?.name;
		order.createdAt = Date.now();
		order.updatedAt = Date.now();

		setOrderData(order);
	};

	const setUser = user => {
		setOrderData(data => ({
			...data,
			userName: user,
		}));
	};

	const getCart = () => JSON.parse(localStorage.getItem('cart'));

	const itemsCount = () =>
		orderData?.items?.reduce((a, b) => a + b.quantity, 0) || 0;

	const totalItemCart = cart =>
		(cart || orderData)?.items?.reduce((a, b) => a + b.total, 0) || 0;

	const addItemCart = newItem => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		const cursor =
			cart.items?.findIndex(({ idMarvel }) => idMarvel === newItem.idMarvel) ??
			-1;

		if (cursor >= 0) {
			const {total: actualTotal, quantity: actualQuantity} = cart.items[cursor];

			cart.items[cursor].total = actualTotal + (newItem.quantity * newItem.total);
			cart.items[cursor].quantity = actualQuantity + newItem.quantity || 1;
		} else {
			cart.items.push(newItem);
		}

		cart.totalAmount = totalItemCart(cart);
		setOrderData(cart);

		return cart;
	};

	const removeItemCart = (idMarvel, quantity = 1) => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		const cursor = cart.items?.findIndex(item =>
			item.idMarvel == idMarvel ? true : false
		);
		if (cursor == -1) {
			throw '404 id not found';
		} else {
			if(cart.items[cursor].quantity > 1) {
				const {total: actualTotal, quantity: actualQuantity} = cart.items[cursor];

				cart.items[cursor].total = (actualTotal / actualQuantity) * (actualQuantity - quantity);
				cart.items[cursor].quantity = actualQuantity - quantity;
			}
			else cart.items.splice(cursor, 1);

			cart.totalAmount = totalItemCart(cart);
			setOrderData(cart);
		}
	};

	const setPayDelivery = payDeli => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		cart.payMethod = payDeli.payMethod;
		cart.payId = payDeli.payMethod;
		cart.payStatus = payDeli.payMethod;
		cart.deliveryMethod = payDeli.payMethod;
		cart.deliveryAdress = payDeli.payMethod;

		setOrderData(cart);

		return order;
	};

	const checkout = async () => {
		const cart = JSON.parse(localStorage.getItem('cart'));
		cart.orderStatus = 'finished';
		cart.finished = true;

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cart),
		};
		const response = await fetch('/api/orders', requestOptions);
		const resData = await response.json();
		return resData;
	};

	useEffect(() => {
		if (data) setUser(data);
	}, [data]);

	useEffect(() => {
		const cartData = getCart();

		if (!cartData) setCart();
		else setOrderData(cartData);
	}, []);

	useEffect(() => {
		if (orderData) localStorage.setItem('cart', JSON.stringify(orderData));
	}, [orderData]);

	return (
		<ShoppingContext.Provider
			value={{
				setCart,
				orderData,
				addItemCart,
				itemsCount,
				removeItemCart,
				setPayDelivery,
				checkout,
			}}>
			{children}
		</ShoppingContext.Provider>
	);
};
