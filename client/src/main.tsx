import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createQueryClient } from './Utils/ReactQueryConfig.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import ToastsContainer from './components/Common/Toastify/ToastsContainer.tsx';

const queryClient = createQueryClient();

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ToastsContainer />
		</QueryClientProvider>
	</React.StrictMode>
);
