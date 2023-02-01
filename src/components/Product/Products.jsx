import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
function Products(props) {
    const [products, setProducts] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))||{}
    useEffect(() => {
        axios.get("http://localhost:8080/laravel/public/api/product/list")
            .then(res => {
                setProducts(res.data.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    function renderData() {
        return products.map((product, index) => {
            JSON.parse(product['image'])
            let img = `http://localhost:8080/laravel/public/upload/user/product/${product.id_user}/${JSON.parse(products[index]['image'])[0]}`
           return(
                <tr>
                    <td>{product["id"]}</td>
                    <td>{product["name"]}</td>
                    <td>
                        <div className="iframe-img">
                            <img src={img}  alt="" />
                        </div>
                    </td>
                    <td>$,{product["price"]}</td>
                    <td className="action-products" value= {product.id}>
                        <Link to={'/products/edit/' + product.id}><AiOutlineEdit/></Link>
                        <a onClick={deleteProduct} id={product.id}><RiDeleteBin5Line/></a>
                    </td>
                </tr>
           )
        })
    }
    function deleteProduct(e) {
        const id = e.target.id
        const url = "http://localhost:8080/laravel/public/api/user/delete-product/" + id
        let accessToken = localStorage.getItem("token") 
            //Config de gui token qua API
            let config = {
                    headers: {
                        'Authorization':'Bearer ' + accessToken,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
            }
        axios.get(url,config)
            .then(res => {
                console.log(res)
                setProducts(res.data.data)
            })
            .catch(err=> {
                console.log(err)
            })
        
    }
    return(
        <div className="col-sm-9">
           <div className="container-products">
                <table className="table-products" border="1px" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Acction</th>
                        </tr>
                    </thead>       
                    <tbody>
                        {renderData()}
                    </tbody>
                </table>
           </div>
        </div>
    )
}
export default Products