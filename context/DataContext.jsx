import React, { createContext, useEffect } from 'react';

export const DataContext = createContext('');

export const DataProvider = ({ children }) => {
	const [data, setData] = React.useState();

	//That would be used to important validations that require instant response
	const isLogged = () => localStorage.getItem('logged');

	const isStateLogged = () => !!data;

	const logIn = logged => {
		setData(logged);
		localStorage.setItem('logged', JSON.stringify(logged));
		return logged;
	};

	const logOut = () => {
		setData(null);
		localStorage.removeItem('logged');
		window.location.href = '/login';
		return true;
	};

	useEffect(() => {
		const logged = JSON.parse(localStorage.getItem('logged'));
		setData(logged);
	}, [])

	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				isLogged,
				logIn,
				logOut,
				isStateLogged
			}}>
			{children}
		</DataContext.Provider>
	);
};
