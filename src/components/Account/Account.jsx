import Error from "../Member/Error"
import { useState } from "react"
import axios from "axios"
function Account (props) {
    const user = JSON.parse(localStorage.getItem("user")) || {}
    const accessToken = localStorage.getItem("token")
    const [inputs, setInputs] = useState({
        name:user.name,
        email:user.email,
        avatar:user.avatar,
        password:user.password,
        phone:user.phone,
        address:user.address
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

    const handleSubmit = (e) => {
        let frag = true
        let errs = {}
        e.preventDefault()
        
        if(inputs.name === "") {
            errs.name = "Vui long nhap ten"
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
          
            if (inputs) {
                const formData = new FormData()
                    formData.append('id', user.id)
                    inputs.password ? formData.append('password', inputs.password) :formData.append('password',"")
                    formData.append('name', inputs.name)
                    formData.append('email', inputs.email)
                    formData.append('avatar',inputs.avatar)
                    formData.append('phone', inputs.phone)
                    formData.append('address', inputs.address)

                const url = "http://localhost:8080/laravel/public/api/user/update/" + user.id
                let config = {
                    headers: {
                        'Authorization':'Bearer ' + accessToken,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
                }
                axios.post(url, formData, config)
                    .then(res => {
                        if(res.data.errors){
                            setErr(res.data.errors)
                        }else{
                            alert('Update Success!')
                            const data = {
                                id:user.id,
                                name:inputs.name,
                                email:inputs.email,
                                avatar:inputs.avatar,
                                phone:inputs.phone,
                                address:inputs.address
                            }
                            localStorage.setItem('user', JSON.stringify(data))
                        }
                    })
                .catch(err => console.log(err))
            }
        }
    }
    return(
    <div className="col-sm-9">
        <section id="form" enctype="multipart/form-data">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="signup-form">
                            <Error err={err}></Error>
                            <h2>User Update!</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name" name="name" value={inputs.name}  onChange={handleInputs}/>
                                <input type="text" placeholder="Email" name="email" value={inputs.email} readOnly = {true}/>
                                <input type="password" placeholder="New Password" name="password" onChange={handleInputs}/>
                                <input type="phone" placeholder="Phone" name="phone"  value={inputs.phone} onChange={handleInputs}/>
                                <input type="text" placeholder="Address" name="address"  value={inputs.address} onChange={handleInputs}/>
                                <input type="file" placeholder="Avatar" name="avatar"  onChange={handleInputFile}/>
                                <button type="submit" className="btn btn-default">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
    </div>
    )
}
export default Account