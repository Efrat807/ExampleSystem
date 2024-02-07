import { useReducer } from 'react';

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

	return (
		<div>
			<h1>Count: {state.count}</h1>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
		</div>
	);
};

export default Home;
