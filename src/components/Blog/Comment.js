import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Comment(props) {
    const [comment, setComment] = useState("")
	// const [error, setError] = useState({})
    const [user, setUser] = useState({})
    function checkLogin() {
		const user = JSON.parse(localStorage.getItem("user"))
		if(!user) {
			alert("Vui long login")
		} else {
            setUser(user)
        }
	}
	const handleInput = (e) => {
		setComment(e.target.value)
	}
	const handleSubmit = (e) => {
		let frag = true
		if(comment === "") {
			frag = false;
			alert("Vui long nhap binh luan")
		}
		if(!frag) {

		} else {
            let url = 'http://localhost:8080/laravel/public/api/blog/comment/' + props.idBlog
            let accessToken = localStorage.getItem("token") 
            //Config de gui token qua API
            let config = {
                    headers: {
                        'Authorization':'Bearer ' + accessToken,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
            }

            if(comment) {
                const formData = new FormData()
                    let id_user = props.id_user ? props.id_user : 0
                    formData.append('id_blog', props.idBlog)
                    formData.append('id_user', user.id)
                    formData.append('id_comment', id_user)
                    formData.append('comment', comment)
                    formData.append('image_user',user.avatar)
                    formData.append('name_user', user.name)
                
                axios.post(url, formData, config)
                    .then(res=> {
                        console.log(res)
                        props.getCmt(res.data.data)
                    })
                    .catch (err=> {
                        console.log(err)
                    })
            }        
		}
	}
    return (
                    <div className="replay-box">
						<div className="row">
							<div className="col-sm-12">
								<h2>Leave a replay</h2>				
								<div className="text-area">
									<div className="blank-arrow">
										<label>{user.name}</label>
									</div>
									<span>*</span>
									<textarea name="message" className="postCmt" rows="11" onChange={handleInput} onClick ={checkLogin} ></textarea>
									<Link className="btn btn-primary" onClick={handleSubmit }>post comment</Link>
								</div>
							</div>
						</div>
					</div>
    )
}
export default Comment