import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import StarRatings from "react-star-ratings"
function Rate(props) {
    let params = useParams()
    const [rate, setRate] = useState()
    const [data, setData] = useState([])
    const user = JSON.parse(localStorage.getItem("user")) || ""
    const setNewRating = (rating) => {
        setRate(rating)
        let url = "http://localhost:8080/laravel/public/api/blog/rate/" + params.id
        let accessToken = localStorage.getItem("token") 
        let data = {
            user_id:user.id,
            blog_id:params.id,
            rate:rating
        }
        let config = {
            headers: {
                'Authorization':'Bearer ' + accessToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept':'application/json'
            }
        }
        axios.post(url, data, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axios.get("http://localhost:8080/laravel/public/api/blog/rate/" + params.id)
        .then(res => {
            // console.log(res.data.data)
            setData(res.data.data)
            let rates = data.map(item => {
                return item.rate
            }).reduce(((a, b) => {return a + b}), 0) / data.length
           
            setRate(rates)
        })
        .catch(err => console.log(err))
    }, [rate])
                return (
                    <div className="rating-area">
						<ul className="ratings">
							<li className="rate-this">Rate this item:</li>
							<li>
                                <StarRatings 
                                    rating={rate}
                                    name='rating'
                                    starEmptyColor
                                    starRatedColor='yellow'
                                    starHoverColor='yellow'
                                    changeRating={setNewRating}
                                />
							</li>
							<li className="color">({data.length})</li>
						</ul>
                        
						<ul className="tag">
							<li>TAG:</li>
							<li><Link className="color" href="">Pink <span>/</span></Link></li>
							<li><Link className="color" href="">T-Shirt <span>/</span></Link></li>
							<li><Link className="color" href="">Girls</Link></li>
						</ul>
					</div>
    )
}
export default Rate