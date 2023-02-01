import { Link } from "react-router-dom"

function MenuLeft() {
    return (
		<div className="left-sidebar">
		<h2>Category</h2>
		<div className="panel-group category-products" id="accordian">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<Link data-toggle="collapse" data-parent="#accordian" to="#sportswear">
							<span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Sportswear
						</Link>
					</h4>
				</div>
				<div id="sportswear" className="panel-collapse collapse">
					<div className="panel-body">
						<ul>
							<li><Link href="#">Nike </Link></li>
							<li><Link href="#">Under Armour </Link></li>
							<li><Link href="#">Adidas </Link></li>
							<li><Link href="#">Puma</Link></li>
							<li><Link href="#">ASICS </Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#mens">
							<span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Mens
						</a>
					</h4>
				</div>
				<div id="mens" className="panel-collapse collapse">
					<div className="panel-body">
						<ul>
							<li><Link href="#">Fendi</Link></li>
							<li><Link href="#">Guess</Link></li>
							<li><Link href="#">Valentino</Link></li>
							<li><Link href="#">Dior</Link></li>
							<li><Link href="#">Versace</Link></li>
							<li><Link href="#">Armani</Link></li>
							<li><Link href="#">Prada</Link></li>
							<li><Link href="#">Dolce and Gabbana</Link></li>
							<li><Link href="#">Chanel</Link></li>
							<li><Link href="#">Gucci</Link></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordian" href="#womens">
							<span className="badge pull-right"><i className="fa fa-plus"></i></span>
							Womens
						</a>
					</h4>
				</div>
				<div id="womens" className="panel-collapse collapse">
					<div className="panel-body">
						<ul>
							<li><Link href="#">Fendi</Link></li>
							<li><Link href="#">Guess</Link></li>
							<li><Link href="#">Valentino</Link></li>
							<li><Link href="#">Dior</Link></li>
							<li><Link href="#">Versace</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Kids</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Fashion</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Households</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Interiors</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Clothing</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Bags</Link></h4>
				</div>
			</div>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title"><Link href="#">Shoes</Link></h4>
				</div>
			</div>
		</div>
	
		<div className="brands_products">
			<h2>Brands</h2>
			<div className="brands-name">
				<ul className="nav nav-pills nav-stacked">
					<li><Link href="#"> <span className="pull-right">(50)</span>Acne</Link></li>
					<li><Link href="#"> <span className="pull-right">(56)</span>Grüne Erde</Link></li>
					<li><Link href="#"> <span className="pull-right">(27)</span>Albiro</Link></li>
					<li><Link href="#"> <span className="pull-right">(32)</span>Ronhill</Link></li>
					<li><Link href="#"> <span className="pull-right">(5)</span>Oddmolly</Link></li>
					<li><Link href="#"> <span className="pull-right">(9)</span>Boudestijn</Link></li>
					<li><Link href="#"> <span className="pull-right">(4)</span>Rösch creative culture</Link></li>
				</ul>
			</div>
		</div>
		
		<div className="price-range">
			<h2>Price Range</h2>
			<div className="well text-center">
				 <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2"/><br />
				 <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
			</div>
		</div>
		
		<div className="shipping text-center">
			<img src="images/home/shipping.jpg" alt="" />
		</div>
	
		</div>
    )
}
export default MenuLeft