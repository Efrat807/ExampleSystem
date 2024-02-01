import {
	QueryClient,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from '@tanstack/react-query';

export type QueryOptions<TData> = Omit<
	UseQueryOptions<TData, Error, TData, QueryKey>,
	'initialData' | 'queryKey'
> & {
	initialData?: () => undefined;
};
