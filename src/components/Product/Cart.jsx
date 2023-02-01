import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import $ from "jquery";
function Cart() {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    // setCart(JSON.parse(localStorage.getItem('cart')) || [])
    // useEffect(() => {
    //     let cart = JSON.parse(localStorage.getItem('cart')) || []
    //     if(cart) {
    //     let urls = cart.map(element => {
    //         return "http://localhost:8080/laravel/public/api/product/detail/" + Object.keys(element)
    //     })
    //     const requests = urls.map((url) => axios.get(url));
    //     // const temp = []
    //     axios.all(requests).then((responses) => {
    //         setProducts(responses)
    //       });
    //     }
    // }, [])
    useEffect(() => {
        const carts = JSON.parse(localStorage.getItem('cart')) || []
        let data = {}
        for(let value of carts) {
            Object.assign(data, value)
        }
        axios.post("http://localhost:8080/laravel/public/api/product/cart", data)
            .then(respone => {
                setProducts(respone.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    
    function renderCart() {
        if(products.length > 0) {
            return products.map(product => {
                const img = `http://localhost:8080/laravel/public/upload/user/product/${product.id_user}/${JSON.parse(product.image)[0]}`
                return  <tr>
                            <td className="cart_product">
                                <a href=""><img src={img} alt=""/></a>
                            </td>
                            <td className="cart_description">
                                <h4><a href="">{product.name}</a></h4>
                                <p>Web ID: 1089772</p>
                            </td>
                            <td className="cart_price">
                                <p>${product.price}</p>
                            </td>
                            <td className="cart_quantity">
                                <div className="cart_quantity_button">
                                    <a className="cart_quantity_up" href=""> + </a>
                                    <input className="cart_quantity_input" type="text" name="quantity" value={product.qty} autocomplete="off" size="2"/>
                                    <a className="cart_quantity_down" href=""> - </a>
                                </div>
                            </td>
                            <td className="cart_total">
                                <p className="cart_total_price">{product.price * product.qty}</p>
                            </td>
                            <td className="cart_delete">
                                <a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
                            </td>
                        </tr> 
            })
        }
    }
    function renderTotal() {
        let total = 0
        products.map(product => {
            return total += product.price * product.qty
        })
         $('.total_area').find("li:last-child").find("span").text(`${total}`)
    }     
    renderTotal()              
return <>
    <section id="cart_items">
    <div className="container">
        <div className="breadcrumbs">
            <ol className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li className="active">Shopping Cart</li>
            </ol>
        </div>
        <div className="table-responsive cart_info">
            <table className="table table-condensed">
                <thead>
                    <tr className="cart_menu">
                        <td className="image">Item</td>
                        <td className="description"></td>
                        <td className="price">Price</td>
                        <td className="quantity">Quantity</td>
                        <td className="total">Total</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody className="cart-item">
                {renderCart()}
                
                </tbody>
            </table>
        </div>
    </div>
    </section>
    <section id="do_action">
            <div class="container">
                <div class="heading">
                    <h3>What would you like to do next?</h3>
                    <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="chose_area">
                            <ul class="user_option">
                                <li>
                                    <input type="checkbox"/>
                                    <label>Use Coupon Code</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Use Gift Voucher</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Estimate Shipping & Taxes</label>
                                </li>
                            </ul>
                            <ul class="user_info">
                                <li class="single_field">
                                    <label>Country:</label>
                                    <select>
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>UK</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>Ucrane</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                    
                                </li>
                                <li class="single_field">
                                    <label>Region / State:</label>
                                    <select>
                                        <option>Select</option>
                                        <option>Dhaka</option>
                                        <option>London</option>
                                        <option>Dillih</option>
                                        <option>Lahore</option>
                                        <option>Alaska</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                
                                </li>
                                <li class="single_field zip-field">
                                    <label>Zip Code:</label>
                                    <input type="text"/>
                                </li>
                            </ul>
                            <a class="btn btn-default update" href="">Get Quotes</a>
                            <a class="btn btn-default check_out" href="">Continue</a>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="total_area">
                            <ul>
                                <li>Cart Sub Total <span>$59</span></li>
                                <li>Eco Tax <span>$2</span></li>
                                <li>Shipping Cost <span>Free</span></li>
                                <li>Total <span>$61</span></li>
                            </ul>
                                <a class="btn btn-default update" href="">Update</a>
                                <a class="btn btn-default check_out" href="">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</>
}
export default Cart