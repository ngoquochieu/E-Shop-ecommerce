import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Blog(props) {
     const [blogs, setBlogs] = useState([])
        useEffect(()=> {
            axios.get("http://localhost:8080/laravel/public/api/blog")
                .then(res => {
                     setBlogs(res.data.blog.data)
                })
                .catch(err => console.log(err))
        },[])    
    function render() {
        if (blogs.length > 0) {
            return blogs.map((blog, index )=> {
                  return (
                        <div className="single-blog-post" id={index}>
							<h3>{blog.title}</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<span>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-half-o"></i>
								</span>
							</div>
							<Link href="">
								<img src={"http://localhost:8080/laravel/public/upload/Blog/image/" + blog.image} alt=""/>
							</Link>
							<p>{blog.description}</p>
							<Link  className="btn btn-primary" to={"/blog/detail/" + blog.id}>Read More</Link>
						</div>
                  ) 
            })
        }
            
    }
    return (
                <div className="col-sm-9">
					<div className="blog-post-area">
						<h2 className="title text-center">Latest From our Blog</h2>
						{/* <div className="single-blog-post">
							<h3>Girls Pink T Shirt arrived in store</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<span>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star-half-o"></i>
								</span>
							</div>
							<Link href="">
								<img src="images/blog/blog-one.jpg" alt=""/>
							</Link>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<Link  className="btn btn-primary" href="">Read More</Link>
						</div>
						<div className="single-blog-post">
							<h3>Girls Pink T Shirt arrived in store</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<span>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-half-o"></i>
								</span>
							</div>
							<Link href="">
								<img src="images/blog/blog-two.jpg" alt=""/>
							</Link>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<Link  className="btn btn-primary" href="">Read More</Link>
						</div>
						<div className="single-blog-post">
							<h3>Girls Pink T Shirt arrived in store</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<span>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-half-o"></i>
								</span>
							</div>
							<Link href="">
								<img src="images/blog/blog-three.jpg" alt=""/>
							</Link>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<Link  className="btn btn-primary" href="">Read More</Link>
						</div> */}
                        {render()}
						<div className="pagination-area">
							<ul className="pagination">
								<li><Link href="" className="active">1</Link></li>
								<li><Link href="">2</Link></li>
								<li><Link href="">3</Link></li>
								<li><Link href=""><i className="fa fa-angle-double-right"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
    )
}
export default Blog