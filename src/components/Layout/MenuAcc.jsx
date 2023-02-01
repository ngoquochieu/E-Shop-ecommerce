import { Link } from "react-router-dom"
import {AiOutlinePlus} from 'react-icons/ai'
function MenuAcc() {
    return (
		<div className="left-sidebar">
			<h2>ACCOUNT</h2>
			<div className="panel-group category-products" id="accordian">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h4 className="panel-title">
							<Link data-toggle="collapse" data-parent="#accordian" to="#sportswear">
								<span className="badge pull-right"><AiOutlinePlus/></span>
								ACCOUNT
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
							<Link data-toggle="collapse" data-parent="#accordian" to="/products/list">
								<span className="badge pull-right"><AiOutlinePlus/></span>
								MY PRODUCT
							</Link>
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
			</div>
		</div>
    )
}
export default MenuAcc