import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Error from "./Error"

function Login() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email:"",
        pass:"",
        level:0
    })
    const [user, setUser] = useState({})
    const [err, setErr] = useState({})
       
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(state=>({...state, [name]:value}))
    }

    const handleSubmit = (e) => {

        let frag = true
        e.preventDefault()
        let errs = {}
        // checkEmail()
        if(!isEmail(inputs.email)) {
            frag = false
            errs.email = "Email Khong Hop Le" 
        }
        if(inputs.email === "") {
            errs.email = "Vui long nhap email"
            frag = false
        }
        if(inputs.pass ==="") {
            errs.password = "Vui long nhap mat khau"
            frag = false
        }
        if(inputs.level ==="") {
            errs.level = "Vui long nhap level"
            frag = false
        }
        if(!frag) {
            setErr(errs)
        } else {
            setErr("")
            axios.post("http://localhost:8080/laravel/public/api/login", {
                email: inputs.email,
                password: inputs.pass,
                level: inputs.level
            })
            .then(res => {
                if(res.data.errors) {
                    setErr(res.data.errors)
                }
                else {
                        alert("Dang nhap Thanh Cong")
                        navigate("/")
                        const state = true
                        localStorage.setItem("state", state)
                        localStorage.setItem("user", JSON.stringify(res.data.Auth))
                        localStorage.setItem("token", res.data.success.token)
                        
                }
            })
            .catch(err => console.log(err))
        }
    }
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    return (
        <section id="form">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <ul>
                            <Error err={err}></Error>
                            </ul>
                            <h2>Login to your account</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Email Address" name="email" onChange={handleInputs}/>
                                <input type="password" placeholder="Password" name="pass"onChange={handleInputs} />
                                <input type="tex" placeholder="Level" name="level"onChange={handleInputs} value={0}/>
                                <span>
                                    <input type="checkbox" className="checkbox"/> 
                                    Keep me signed in
                                </span>
                                <button type="submit" className="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-sm-1">
                        <h2 className="or">OR</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>New User Signup!</h2>
                            <form action="#">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email Address"/>
                                <input type="password" placeholder="Password"/>
                                <button type="submit" className="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
	    </section>
    )
}
export default Login