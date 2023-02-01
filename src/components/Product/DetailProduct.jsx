import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Modal } from "react-bootstrap"

function DetailProduct() {
	const params = useParams()
	const navigate = useNavigate()
    const [product, setProduct] = useState({})
	const [currentImg, setCurrentImg] = useState()
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:8080/laravel/public/api/product/detail/" + params.id)
			.then(res => {
				setProduct(res.data.data)
				setCurrentImg(JSON.parse(res.data.data.image)[0])
			})
			.catch(err => {
				console.log(err)
			})
    }, [])
	function render () {
		if(product !=={})
			return <img src={`http://localhost:8080/laravel/public/upload/user/product/${product.id_user}/larger_${currentImg}`} alt=''/>
	} 
 	function renderImg () {
		if(Object.keys(product).length > 0)
			return JSON.parse(product.image).map((img, index) => {
				return <a onClick={handleClickImg}><img src={`http://localhost:8080/laravel/public/upload/user/product/${product.id_user}/small_${img}`} alt='' /></a>
					
			})
		
	}
	const handleClickImg = (e) => {
		const img = e.target.src.split('small_')[1]
		setCurrentImg(img)
	} 
	const handleQuantity = (e) => {
		const qty = e.target.value
		setQuantity(qty)
	}
	const addToCart = (e) => {
		const state = localStorage.getItem('state')
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		const id = params.id
		if(state) {
			const obj = {
				[id]: quantity
			}
			const index = cart.findIndex(element => Object.keys(element) == id)
			console.log(index)
			if(index >= 0) {
				cart[index][id] = quantity
			} else {
				cart.push(obj)
			}
			localStorage.setItem('cart', JSON.stringify(cart))
		} else {
			navigate('/')
		}
	}
    return (
        <div className="col-sm-9 padding-right">
            <div className="product-details">
                <div className="col-sm-5">
					<div className="view-product">
						{render()}
						<a href="#" onClick={handleShow}><h3>ZOOM</h3></a>	
					</div>
					<div id="similar-product" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="item active">
							{renderImg()}
							</div>
							<div className="item">
								{renderImg()}
							</div>
							<div className="item">
								{renderImg()}
							</div>		
						</div>
						<a className="left item-control" href="#similar-product" data-slide="prev">
						    <i className="fa fa-angle-left"></i>
						</a>
						<a className="right item-control" href="#similar-product" data-slide="next">
							<i className="fa fa-angle-right"></i>
						</a>
					</div>
				</div>
				<Modal show={show} onHide={handleClose} animation={false}>
        				<Modal.Header closeButton>
          					<Modal.Title>Modal heading</Modal.Title>
        				</Modal.Header>
        				<Modal.Body>{render()}</Modal.Body>
						<Modal.Footer>
          					<Button variant="primary" onClick={handleClose}>
            					Close
          					</Button>
          					{/* <Button variant="Primary" onClick={handleClose}>
            					Save Changes
          					</Button> */}
        				</Modal.Footer>
      			</Modal>
				<div className="col-sm-7">
					<div className="product-information">
						<img src="images/product-details/new.jpg" className="newarrival" alt="" />
						<h2>{product.name}</h2>
						<p>Web ID: 1089772</p>
						{/* <img src="../../images/product-details/new.jpg" alt="" /> */}
						<span>
							<span>US $59</span>
							<label>Quantity:</label>
							<input type="text" value={quantity} onChange={handleQuantity} />
							<button type="button" className="btn btn-fefault cart" onClick={addToCart}>
								<i className="fa fa-shopping-cart"></i>
								Add to cart		
							</button>
						</span>
						<p><b>Availability:</b> In Stock</p>
						<p><b>Condition:</b> New</p>
						<p><b>Brand:</b> E-SHOPPER</p>
						<a href=""><img src="../../images/product-details/share.png" className="share img-responsive"  alt="" /></a>
					</div>
				</div>				
            </div>
        </div>
    )
}
export default DetailProduct