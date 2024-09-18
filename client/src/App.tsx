import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './App.css';
import Home from './components/Home';
import Reducer from './components/Reducer/Reducer';
import UsersFetchData from './components/Users/UsersFetchData';
import UsersTable from './components/Users/UsersTable';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/reducer" element={<Reducer />} />
					<Route path="/users" element={<UsersFetchData />} />
					<Route path="/usersTable" element={<UsersTable />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
