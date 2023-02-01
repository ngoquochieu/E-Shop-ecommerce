
import { useState } from "react"
import axios from "axios"
import Error from "./Error"

function Register() {
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        avatar:"",
        password:"",
        phone:"",
        address:""
    })
    const [avatar, setAvatar] = useState({})
    const [file, setFile] = useState({})
    const [err, setErr] = useState({})
    
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(state=>({...state, [name]:value}))
    }

    function handleInputFile(e){
        const files = e.target.files

        let reader = new FileReader()
        reader.onload = (e) => {  

            setAvatar(e.target.result)
            setFile(files[0])
        }

        reader.readAsDataURL(files[0])
        setInputs(state => ({...state, avatar:avatar}))
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const handleSubmit = (e) => {
        let frag = true
        let errs = {}
        e.preventDefault()
        
        if(inputs.name === "") {
            errs.name = "Vui long nhap ten"
        }
        if(!isEmail(inputs.email)) {
            frag = false
            errs.email = "Email Khong Hop Le" 
        }
        if(inputs.email === "") {
            errs.email = "Vui long nhap email"
            frag = false
        }
        if(inputs.password === "") {
            errs.password = "Vui long nhap mat khau"
            frag = false
        }
        if(inputs.phone === "") {
            errs.phone = "Vui long nhap phone"
            frag = false
        }
        if(inputs.address === "") {
            errs.address = "Vui long nhap address"
            frag = false
        }
        // if(inputs.avatar === "") {
        //     errs.avatar = "Vui long nhap hinh anh"
        //     frag = false
        // }
        if(!frag) {
            setErr(errs)
        } else {
            setErr("")
            const data = {
                name:inputs.name,
                email:inputs.email,
                avatar:avatar,
                password:inputs.password,
                phone:inputs.phone,
                address:inputs.address,
                level:0
            }
            axios.post("http://localhost:8080/laravel/public/api/register", data)
                .then(res => {
                    if(res.data.errors){
                        setErr(res.data.errors)
                    }else{
                        alert("ok")
                    }
                })
                .catch(err => console.log(err))
        }
    }
   
    return(
        <section id="form" enctype="multipart/form-data">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="signup-form">
                            <Error err={err}></Error>
                            <h2>New User Signup!</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name" name="name" onChange={handleInputs}/>
                                <input type="text" placeholder="Email" name="email"onChange={handleInputs}/>
                                <input type="password" placeholder="Password" name="password"onChange={handleInputs}/>
                                <input type="phone" placeholder="Phone" name="phone"onChange={handleInputs}/>
                                <input type="text" placeholder="Address" name="address"onChange={handleInputs}/>
                                <input type="file" placeholder="Avatar" name="avatar" onChange={handleInputFile}/>
                                <input type="text" placeholder="Level" name="level" value={0}/>
                                <button type="submit" className="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    )
}
export default Register