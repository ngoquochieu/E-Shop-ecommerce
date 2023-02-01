import { Link} from "react-router-dom"
function ListCommnet(props) {
    const comment = props.comment
	const parentCmt = comment.filter((cmt) => {
		return cmt.id_comment === 0
	})
	const childCmt = comment.filter((cmt) => {
		return cmt.id_comment !== 0
	})
	const handleReply = (e) => {
		const idUser = e.target.id
		props.getIdUser(idUser)
		const repCmt = document.querySelector('.postCmt')
		repCmt.focus()
	}
	function renderChildMedia(id) {
		if(childCmt.length > 0) {
			return childCmt.map((cmt, index) => {
				if(cmt.id_comment === id) {
					const tepmCmt = cmt
					return(
						<li className="media second-media">
							<Link className="pull-left" href="#">
								<img className="media-object"  alt=""/>
							</Link>
							<div className="media-body">
								<ul className="sinlge-post-meta">
									<li><i className="fa fa-user"></i>{tepmCmt.name_user}</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<p>{tepmCmt.comment}</p>
								<Link className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</Link>
							</div>
						</li>
					)
				}
			})
		}
	}
    function renderMedia() {
        if(parentCmt.length > 0) {
            return parentCmt.map((cmt, index) => {
                	return<>
                        <li className="media">		
							<Link className="pull-left" href="#">
								<img className="media-object" src="" alt=""/>
							</Link>
							<div className="media-body">
								<ul className="sinlge-post-meta">
									<li><i className="fa fa-user"></i>{cmt.name_user}</li>
									<li><i className="fa fa-clock-o"></i> 1:33 pm</li>
									<li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
								</ul>
								<p>{cmt.comment}</p>
								<Link className="btn btn-primary" href=""  onClick={handleReply} id = {cmt.id} ><i className="fa fa-reply"></i>Replay</Link>
							</div>
						</li>
						{renderChildMedia(cmt.id)}
					</>
            })
        }
    }

    return(
                    <div className="response-area">
						<h2>{comment.length} RESPONSES</h2>
						<ul className="media-list">
							{/* <li className="media">		
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
							</li> */}
                            {renderMedia()}
							{/* <li className="media second-media">
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
							</li> */}
						</ul>					
					</div>
    )
}
export default ListCommnet