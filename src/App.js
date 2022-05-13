import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import SingleProducts from './components/SingleProducts';
import Cart from './pages/Cart'
import Navigation from './components/Navigation'
import { CartContext } from './CartContext'

function App() {
    const [cart, setCart] = useState({});
    //fetch from local storage

    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
        setCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/products" exact element={<ProductsPage />}></Route>
                        <Route path="/products/:_id" element={<SingleProducts />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </CartContext.Provider>
            </Router>
        </div>
    )
}

export default App