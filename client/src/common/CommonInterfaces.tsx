import {
	QueryClient,
	QueryKey,
	UseMutationOptions,
	UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

export type QueryOptions<TData> = Omit<
	UseQueryOptions<TData, Error, TData, QueryKey>,
	'initialData' | 'queryKey'
> & {
	initialData?: () => undefined;
};
export type FetchMethod = 'Post' | 'Patch' | 'Put' | 'Delete';

export interface IMutation<TData> {
	path: string;
	method: FetchMethod;
	data: TData;
	headers?: AxiosRequestConfig['headers'];
}