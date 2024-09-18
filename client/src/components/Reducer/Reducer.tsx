import { useReducer } from 'react';
import classes from './Reducer.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CounterState {
	count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

const reducer = (state: CounterState, action: Action): CounterState => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
};

const Home = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	const navigate = useNavigate();

	return (
		<div>
			<div className={classes.card}>
				<h1>Count: {state.count}</h1>
				<Button
					onClick={() => dispatch({ type: 'increment' })}
					sx={{ border: '2px solid black', width: '20px' }}
				>
					+
				</Button>
				<Button
					onClick={() => dispatch({ type: 'decrement' })}
					sx={{ border: '2px solid black', width: '20px' }}
				>
					-
				</Button>
			</div>
			<Button
				className={classes.back}
				sx={{ border: '2px dotted black' }}
				onClick={() => navigate('/')}
			>
				back
			</Button>
		</div>
	);
};

export default Home;
