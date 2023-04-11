import Masuk from './upload_img.js';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
//import './App.css';
import './upload_img.css';
function App() {
	return (
		<>
		
		<Switch>
		{/*<div className='kotak_konten'>*/}
				<nav className='navigasi' id='nav_nav'>
					
						<div className='kotak_didalam_nav'>
							<p>Foru64~</p>
							<div>
								{/*<a href='/'>Beranda</a>*/}
								{/*<a href='/tes'>Tes Diagnostik</a>*/}
								{/*<a href='/sumber'>Sumber Belajar</a>*/}
								
								
								
							</div>
						</div>
				</nav>
				{/*</div>*/}
			<Routes>
				<Route path='/' element={<Masuk />} />
			</Routes>
		</Switch>
		
		</>
	)
}

export default App;
