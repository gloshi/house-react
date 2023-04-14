
import { useDispatch } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AppRoutes from './routes/Routes';
import { useEffect } from 'react';
import { getNotices } from './store/slices/noticeSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getNotices())
  },[dispatch])
  return (
    <div className="App">
      <div className='content'>
        <NavBar />
        <AppRoutes/>

      </div>
      <Footer />
    </div>
  );
}

export default App;
