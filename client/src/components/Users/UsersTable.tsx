import { useGetAllUsers, useGetUser } from '../../ApiService/Requests/useUser';
import { ToastError } from '../Common/Toastify/Toasts';

const UsersTable = () => {
	// const { users, isError, error } = useGetAllUsers();
	// console.log(users);

	// return (
	// 	<div>
	// 		<h1>USERS</h1>
	// 		{users ? (
	// 			users.map((user) => {
	// 				return (
	// 					<div>
	// 						<div>{user.id}</div>
	// 						<div>{user.name}</div>
	// 						<div>{user.level}</div>
	// 					</div>
	// 				);
	// 			})
	// 		) : (
	// 			<p>Loading...</p>
	// 		)}
	// 		{isError && <div>error: {error.message}</div>}
	// 	</div>
	// );

	const { user, isError, error, isLoading } = useGetUser('65cda845338b09b0ec900a6f');
	console.log(user, 'user');
	// if(isError) ToastError(error.message);

	return (
		<div>
			<h1>USERS</h1>
			{user ? (
				<div>
					<div>{user.id}</div>
					<div>{user.name}</div>
					<div>{user.level}</div>
				</div>
			) : (
				isLoading && <p>Loading...</p>
			)}
			{isError && <div>error: {error.message}</div>}
		</div>
	);
};

export default UsersTable;
