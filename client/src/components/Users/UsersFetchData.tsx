import axios from 'axios';
import { useEffect, useState } from 'react';

interface IUser {
	userId: number;
	id: number;
	title: string;
	completed: string;
}

const UsersFetchData = () => {
	const [users, setUsers] = useState<IUser>();

	useEffect(() => {
		// Function to fetch user data
		const fetchUserData = async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/todos/1'
				);
				setUsers(response.data); 
			} catch (error) {
				console.error('Error fetching user data:', error);
			}
		};

		fetchUserData();
	}, []);

	return (
		<div>
			<h1>Users:</h1>
			{users ? (
				<div>
					<p>ID: {users.id}</p>
					<p>USER_ID: {users.userId}</p>
					<p>TITLE: {users.title}</p>
					<p>completed: {users.completed}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default UsersFetchData;
