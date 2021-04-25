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
		return logged == null ? false : logged.is_logged;
	};

	const logIn = logged => {
		setData(logged);
		localStorage.setItem('logged', JSON.stringify(logged));
		return logged;
	};

	const logOut = () => {
		setData('');
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


// HOW TO USE

// in APP
// import { DataProvider } from './context/DataContext';
//  <DataProvider>
// 		<Router>
// 			<Route exact path='/' component={ListTodo} />
// 			<Route path='/:id' component={Todo} />
// 		</Router>
//  </DataProvider>;

// In Component

// import React, { useContext } from 'react';
// import { DataContext } from '../context/DataContext';

// ...
// const { data, setData, isLogged, logIn } = useContext(DataContext);

// const handleLogged = () => {
//     alert(isLogged());
// };

// logIn(dataFixed);

// setData({ ...data, name: "Juan", is_logged: true });