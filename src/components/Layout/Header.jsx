import { Link, useNavigate } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import { useContext } from 'react';
import { CartQtyContext } from '../CartQtyContext';
function Header() {
	const navigate = useNavigate()

	function renderLogin() {
		const state = localStorage.getItem("state") || false
		if(state) {
			return (
				<li><a onClick={logOut}>Logout</a></li>
			)
		} else {
			return <li><Link to = '/member/login'><i className="fa fa-lock"></i> Login</Link></li>
		}
	}

	function logOut() {
		localStorage.clear()
		navigate("/member/login")
	}

	function checkAccount() {
		const user = JSON.parse(localStorage.getItem("user"))
		if(!user) {
			navigate("member/login")
		}

	}
	const [cartQty, setCartQty] = useContext(CartQtyContext)
    return (
        <>
            <header id="header">
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="contactinfo">
									<ul className="nav nav-pills">
										<li><Link><i className="fa fa-phone"></i> +2 95 01 88 821</Link></li>
										<li><Link><i className="fa fa-envelope"></i> info@domain.com</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="social-icons pull-right">
									<ul className="nav navbar-nav">
										<li><Link><i className="fa fa-facebook"></i></Link></li>
										<li><Link><i className="fa fa-twitter"></i></Link></li>
										<li><Link><i className="fa fa-linkedin"></i></Link></li>
										<li><Link><i className="fa fa-dribbble"></i></Link></li>
										<li><Link><i className="fa fa-google-plus"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="header-middle">
					<div className="container">
						<div className="row">
							<div className="col-md-4 clearfix">
								<div className="logo pull-left">
									<Link><img src="images/home/logo.png" alt="" /></Link>
								</div>
								<div className="btn-group pull-right clearfix">
									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											USA
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><Link>Canada</Link></li>
											<li><Link>UK</Link></li>
										</ul>
									</div>
									
									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											DOLLAR
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><Link>Canadian Dollar</Link></li>
											<li><Link>Pound</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-8 clearfix">
								<div className="shop-menu clearfix pull-right">
									<ul className="nav navbar-nav">
									{/* to= '/account' */}
										<li><Link to = '/account' onClick={checkAccount}><i className="fa fa-user"></i> Account</Link></li>
										<li><Link><i className="fa fa-star"></i> Wishlist</Link></li>
										<li><Link><i className="fa fa-crosshairs"></i> Checkout</Link></li>
										<li className="cart-quantity">
											<Link to='/cart'><i className="fa fa-shopping-cart"></i> Cart</Link>
											<span className="cart-quantity">{cartQty}</span>
										</li>
										{/* <li><Link to = '/member/login'><i className="fa fa-lock"></i> Login</Link></li> */}
										{renderLogin()}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			
				<div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col-sm-9">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								<div className="mainmenu pull-left">
									<ul className="nav navbar-nav collapse navbar-collapse">
										<li><Link to='/' className="active">Home</Link></li>
										<li className="dropdown"><Link>Shop<FiShoppingCart/></Link>
											<ul role="menu" className="sub-menu">
												<li><Link>Products</Link></li>
												<li><Link>Product Details</Link></li> 
												<li><Link>Checkout</Link></li> 
												<li><Link>Cart</Link></li> 
												<li><Link>Login</Link></li> 
											</ul>
										</li> 
										<li className="dropdown"><Link>Blog<i className="fa fa-angle-down"></i></Link>
											<ul role="menu" className="sub-menu">
												<li><Link to={"/blog/list"}>Blog List</Link></li>
												<li><Link>Blog Single</Link></li>
											</ul>
										</li> 
										<li><Link>404</Link></li>
										<li><Link>Contact</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="search_box pull-right">
									<input type="text" placeholder="Search"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
        </>
    )
}
export default Header