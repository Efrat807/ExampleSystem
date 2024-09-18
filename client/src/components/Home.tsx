import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>helllooooooo</h1>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Button onClick={() => navigate('/reducer')}>reducer</Button>
				<Button onClick={() => navigate('/users')}>
					users - fetch data
				</Button>
				<Button onClick={() => navigate('/usersTable')}>
					users table
				</Button>
			</div>
		</div>
	);
};

export default Home;
