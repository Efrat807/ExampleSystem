import { QueryOptions } from '../../common/CommonInterfaces';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../Interfaces/IUser';
import { USER_QUERY_KEY } from '../../common/ReactQuerykeys';

export const useGetAllUsers = (options?: QueryOptions<IUser[]>) => {
	const { data: users, ...queryInfo } = useQuery<IUser[]>({
		queryKey: [USER_QUERY_KEY],
		...options,
	});
	console.log(users, 'users');

	return { users, ...queryInfo };
};

export const useGetUser = (id: string, options?: QueryOptions<IUser>) => {
	const { data: user, ...queryInfo } = useQuery<IUser>({
		queryKey: [`${USER_QUERY_KEY}/${id}`],
		
		...options,
	});
	console.log(user, 'user');
	
	return { user, ...queryInfo };
};
