import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Error from "../Member/Error"
function AddProduct(props) {
    const [err, setErr] = useState({})
    const [brands, setBrands] = useState([])
    const [categorys, setCategorys] = useState([])
    const [avatar, setAvatar] = useState()
    const [inputs, setInputs] = useState({
        name:'',
        price:'',
        category:'',
        brand:'',
        status:'',
        sale:'',
        company:'',
        detail:''
    })
    function renderSale() {
        if(inputs.status === '1')
            return (<input type="text" placeholder="0" name="sale"/>)
    }
    const handleSubmit = (e) => {
        let frag = true
        let errs = {}
        e.preventDefault()
        
        if(!frag) {
            setErr(errs)
        } else {
            setErr("")
            let data = new FormData();
            data.append('name', inputs.name)
            data.append('price', inputs.price)
            data.append('category', inputs.category)
            data.append('brand', inputs.brand)
            data.append('company', inputs.company)
            data.append('detail', inputs.detail)
            data.append('status', inputs.status)
            data.append('sale', inputs.sale ? inputs.sale : 0)
            Object.keys(avatar).map((item, i) => {
                data.append("file[]", avatar[item])
            })
            let accessToken = localStorage.getItem("token")
            let config = {
                headers: {
                    'Authorization':'Bearer ' + accessToken,
                    'Content-Type': 'multipart/form-data',
                    'Accept':'application/json'
                }
            }
            axios.post("http://localhost:8080/laravel/public/api/user/add-product", data, config)
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
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(state=>({...state, [name]:value}))
    }
    useEffect(() => {
        axios.get("http://localhost:8080/laravel/public/api/category-brand")
        .then(res => {
            setBrands(res.data.brand)
            setCategorys(res.data.category)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const handleBrands = (e) => {
        if(brands.length > 0)
            return brands.map(brand => {
                return (
                    <option  value={brand.id}>{brand.brand}</option>
                )
            })
    }
    const handleCategory = (e) => {
        if(categorys.length > 0)
            return categorys.map(category => {
                return (
                    <option  value={category.id}>{category.category}</option>
                )
            })
    }
    const handleFile = (e) => {
        const files = e.target.files
        setAvatar(files)
    }
    return(
            <div className="col-sm-6">
                <div className="container-products">
                    <div className="signup-form">
                        {/* <Error err={err}></Error> */}
                        <h2>Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="name"  onChange={handleInputs} />
                            <input type="text" placeholder="Price" name="price" onChange={handleInputs}/>
                            <select name="category" onChange={handleInputs}>
                                <option value="" disabled selected>Please choose category</option>
                                {handleCategory()}
                            </select>
                            <select name="brand" onChange={handleInputs}>
                                <option value="" disabled selected>Please choose brand</option>
                                {handleBrands()}
                            </select>
                            <select name="status" onChange={handleInputs}>
                                <option value="" disabled selected>Please choose status</option>
                                <option value="1">Sale</option>
                                <option value="0">New</option>
                            </select>
                            {renderSale()}
                            <input type="text" placeholder="Company profile" name="company"  onChange={handleInputs} />
                            <input type="file" name="image" multiple onChange={handleFile}/>
                            <input type="text" name="detail" placeholder="Detail" onChange={handleInputs}/>
                            <button type="submit" className="btn btn-default">Update</button>
                        </form>                            
                    </div>
                </div>
            </div>
    )
}
export default AddProduct