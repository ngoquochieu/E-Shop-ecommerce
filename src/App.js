import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer'
import MenuLeft from './components/Layout/MenuLeft';
import { useLocation } from 'react-router-dom';
import MenuAcc from './components/Layout/MenuAcc';
import { CartQtyContext } from './components/CartQtyContext';
import { useState } from 'react';

function App(props) {
  let params = useLocation()
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  let total = 0
  if(cart) {
    cart.map(ele=> {
      total += +Object.values(ele)
    })
  }
  const cartQty = {qty: total}
  const [qty, setQty] = useState(cartQty.qty)
  return (
          <CartQtyContext.Provider value={[qty, setQty]}>
            <Header/>
            <section>
                <div className='container'>
                    {/* <div className='row'>
                        <div className="col-sm-3">
                          {['/account', '/products/list', '/products/add', '/products/edit'].includes(params['pathname']) ? <MenuAcc/> : <MenuLeft/>}
                        </div>
                        {props.children}
                    </div> */}
                        {props.children}
                </div>
            </section>
            <Footer/>
            </CartQtyContext.Provider>
  );
}

export default App;
