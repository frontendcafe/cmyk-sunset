import React, { createContext } from 'react';

export const DataContext = React.createContext('');

const dataFixed = {
	name: 'Doctor Strange',
	lastname: 'Lee',
	email: 'stanlee@marvel.com',
	is_logged: false,
};

export const DataProvider = ({ children }) => {
	const [data, setData] = React.useState(dataFixed);

	const isLogged = () => {
		var logged = JSON.parse(localStorage.getItem('logged'));
		return !!logged;
	};

	const logIn = logged => {
		setData(logged);
		localStorage.setItem('logged', JSON.stringify(logged));
		return logged;
	};

	const logOut = () => {
		setData(null);
		localStorage.removeItem('logged');
		return true;
	};

	return (
		<DataContext.Provider
			value={{
				data,
				setData,
				isLogged,
				logIn,
				logOut,
			}}>
			{children}
		</DataContext.Provider>
	);
};
