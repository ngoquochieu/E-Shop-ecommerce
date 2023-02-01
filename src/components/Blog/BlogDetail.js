import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Rate from "../Rate/Rate"
import Comment from "./Comment"
import ListCommnet from "./ListComment"

function BlogDetail(props) {
	let params = useParams()
	const [data, setData] = useState("")
	const [comment, setComment] = useState([])
	const [userID, setUserId] = useState(0)

	useEffect(() => {
		axios.get("http://localhost:8080/laravel/public/api/blog/detail/" + params.id)
			.then(res => {
				setData(res.data.data)
				setComment(res.data.data.comment)
			})
			.catch(err => console.log(err))
	}, [comment && comment.length])
	function getCmt(data) {
		 setComment([data, ...comment])
	}
	function getIdUser(id) {
		setUserId(id)
	}

	// function renderComment() {
	// 	const comments = data.comment
	// 	return comments.map((comment, index) => {
	// 		return (
	// 			<li className="media" id={comment.id} id-blog = {comment.id_blog} id-user={comment.id_user}>		
	// 				<Link className="pull-left" href="#">
	// 					<img className="media-object" src="images/blog/man-two.jpg" alt=""/>
	// 				</Link>
	// 				<div className="media-body">
	// 					<ul className="sinlge-post-meta">
	// 						<li><i className="fa fa-user"></i>Janis Gallagher</li>
	// 						<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
	// 						<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
	// 					</ul>
	// 					<p>{comment.comment}</p>
	// 					<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
	// 				</div>
	// 				<li className="media second-media">
	// 					<Link className="pull-left" href="#">
	// 						<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
	// 					</Link>
	// 					<div className="media-body">
	// 						<ul className="sinlge-post-meta">
	// 							<li><i className="fa fa-user"></i>Janis Gallagher</li>
	// 							<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
	// 							<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
	// 						</ul>
	// 						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	// 						<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
	// 					</div>
	// 				</li>
	// 				<li className="media second-media">
	// 					<Link className="pull-left" href="#">
	// 						<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
	// 					</Link>
	// 					<div className="media-body">
	// 						<ul className="sinlge-post-meta">
	// 							<li><i className="fa fa-user"></i>Janis Gallagher</li>
	// 							<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
	// 							<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
	// 						</ul>
	// 						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	// 						<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
	// 					</div>
	// 				</li>
	// 			</li>
	// 		)
	// 	})	
	// }
	function render() {
		return (
			<>
				<div className="blog-post-area">
						<h2 className="title text-center">Latest From our Blog</h2>
						<div className="single-blog-post" id={data.id}>
							<h3>{data.title}</h3>
							<div className="post-meta">
								<ul>
									<li><i className="fa fa-user"></i> Mac Doe</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
							</div>
							<Link href="">
								<img src="images/blog/blog-one.jpg" alt=""/>
							</Link>
							<p>{data.description}</p>
							<div className="pager-area">
								<ul className="pager pull-right">
									<li><Link href="#">Pre</Link></li>
									<li><Link href="#">Next</Link></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <div className="rating-area">
						<ul className="ratings">
							<li className="rate-this">Rate this item:</li>
							<li>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star color"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</li>
							<li className="color">(6 votes)</li>
						</ul>
						<ul className="tag">
							<li>TAG:</li>
							<li><Link className="color" href="">Pink <span>/</span></Link></li>
							<li><Link className="color" href="">T-Shirt <span>/</span></Link></li>
							<li><Link className="color" href="">Girls</Link></li>
						</ul>
					</div> */}
					<Rate/>
					<div className="socials-share">
						<Link href=""><img src={"http://localhost:8080/laravel/public/upload/Blog/image/" + data.image} alt=""/></Link>
					</div>
					{/* <div className="response-area">
						<h2>{comment.length} RESPONSES</h2>
						<ul className="media-list">
							<li className="media">		
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-two.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-four.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
							<li className="media second-media">
								<Link className="pull-left" href="#">
									<img className="media-object" src="images/blog/man-three.jpg" alt=""/>
								</Link>
								<div className="media-body">
									<ul className="sinlge-post-meta">
										<li><i className="fa fa-user"></i>Janis Gallagher</li>
										<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
										<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
								</div>
							</li>
						</ul>					
					</div> */}
					{<ListCommnet comment={comment} getIdUser={getIdUser} />}
					{/* <div className="replay-box">
						<div className="row">
							<div className="col-sm-12">
								<h2>Leave a replay</h2>				
								<div className="text-area">
									<div className="blank-arrow">
										<label>Your Name</label>
									</div>
									<span>*</span>
									<Error err={error}/>
									<textarea name="message" rows="11" onChange={handleInput} onClick ={checkLogin} ></textarea>
									<button className="btn btn-primary" onSubmit={handleSubmit} >post comment</button>
								</div>
							</div>
						</div>
					</div> */}
					{<Comment idBlog = {data.id} getCmt={getCmt} id_user = {userID} />}
			</>
		)
	}
    return (
                <div className="col-sm-9">
					{render()}
				</div>	
    )
}
export default BlogDetail