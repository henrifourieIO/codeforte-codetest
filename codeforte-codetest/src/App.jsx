
import Products from './components/Views/Products'
import {useDispatch} from 'react-redux'
import {fetchProducts} from './redux/actions/productActions'
import {useEffect} from 'react'
import CartCard from './components/Cards/CartCard';
import Navbar from './components/Navbar';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (
    <>
        <Navbar />
        <Products />
    </>
  )
}

export default App
