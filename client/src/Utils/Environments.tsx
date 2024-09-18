export const { VITE_API_URL, NODE_ENV } = import.meta.env;
export const IS_ENV_DEVELOPMENT =
	NODE_ENV === 'development' || NODE_ENV === 'developmentLocal';
