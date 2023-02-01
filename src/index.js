import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Blog from './components/Blog/Blog'
import BlogDetail from './components/Blog/BlogDetail';
import Login from './components/Member/Login';
import Test from './components/Member/Test';
import Register from './components/Member/Register';
import Account from './components/Account/Account';
import Products from './components/Product/Products';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';
import ShowProductHome from './components/Product/ShowProductHome';
import DetailProduct from './components/Product/DetailProduct';
import Cart from './components/Product/Cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path='/' element = {<ShowProductHome/>}/>
          <Route path='/blog/list' element = {<Blog/>}/>
          <Route path='/blog/detail/:id' element = {<BlogDetail/>}/>
          <Route path='/member/login' element = {<Login/>}/>
          <Route path='/member/register' element={<Register/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/products/list' element={<Products/>}/>
          <Route path='/products/add' element={<AddProduct/>}/>
          <Route path='/products/edit/:id' element={<EditProduct/>}/>
          <Route path='/product/detail/:id' element={<DetailProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/test" element = {<Test/>}/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
