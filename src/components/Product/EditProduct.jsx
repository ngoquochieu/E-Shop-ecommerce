import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Error from "../Member/Error"
function EditProduct () {
    const param = useParams()
    const [err, setErr] = useState({})
    const [product, setProduct] = useState([])
    const [categorys, setCategorys] = useState([])
    const [avatarCheckBox, setAvatarCheckBox] = useState([])
    const [brands, setBrands] = useState([])
    const [avatar, setAvatar] = useState()
    const [inputs, setInputs] = useState({
        name:'',
        price:'',
        category:'',
        brand:'',
        status:'',
        sale:'',
        company:'',
        detail:'',
        image:''
    })
    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(state=>({...state, [name]:value}))
    }
    const url = "http://localhost:8080/laravel/public/api/user/product/" + param.id
        let accessToken = localStorage.getItem("token") 
            //Config de gui token qua API
            let config = {
                    headers: {
                        'Authorization':'Bearer ' + accessToken,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
            }
    useEffect(() => {
        
        axios.get(url, config) 
            .then(res => {
                setProduct(res.data.data)
                inputs.name = res.data.data.name
                inputs.price = res.data.data.price
                inputs.category = res.data.data.id_category
                inputs.brand = res.data.data.id_brand
                inputs.status = res.data.data.status
                inputs.sale = res.data.data.sale
                inputs.company = res.data.data.company_profile
                inputs.detail = res.data.data.detail
                inputs.image = res.data.data.image
            })
            .catch(err => {
                console.log(err)
            })

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
            return brands.map((brand, index) => {
                if(product.id_brand === brand.id) 
                    return <option value={brand.id} selected>{brand.brand}</option>
                else 
                    return <option value={brand.id} >{brand.brand}</option>
                
            })
    }
    const handleCategory = (e) => {
        if(categorys.length > 0) {
            return categorys.map((category, index) => {
                if(product.id_category === category.id)
                    return <option value={category.id} selected>{category.category}</option>
                else 
                    return <option value={category.id}>{category.category}</option>
            })
        }
    }
    // let avatarCheckBox = []
    const handleSelectImg = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        if(checked) {
            // setAvatarCheckBox(state=> ([...state, value]))
            avatarCheckBox.push(value)
        } else {
            const index = avatarCheckBox.indexOf(value)
            avatarCheckBox.splice(index, 1)

        }
    }
    const handleFile = (e) => {
        const files = e.target.files
        console.log(files)
        setAvatar(files)
    }
    function renderProduct() {
        // console.log(product.image)
        if(product.image) {
            return product.image.map((img, index) => {
                const urlImage = `http://localhost:8080/laravel/public/upload/user/product/${product.id_user}/${img}`
                return <div >
                    <img src={urlImage} alt="" />
                    <input type='checkbox' value={img} onChange={handleSelectImg}></input>
                </div>       
            })      
        }
    }
    const handlSubmit = (e) => {
        console.log(avatar)
        let errs = {}
        let flag = true
        e.preventDefault()

        if(inputs.name === "") {
            errs.name = "Vui long nhap ten"
            flag = false
        }
        if(inputs.price === "") {
            flag = false
            errs.price = "Vui long nhap gia"
        }
        if(inputs.company === "") {
            flag = false
            errs.company = "Vui long nhap thong tin con ty"
        }
        if(inputs.detail === "") {
            flag = false
            errs.company = "Vui long nhap mo ta"
        }
        if(!avatar) {
            flag = false
            errs.img = "Vui long chon hinh anh"
        } else 
        if(avatar.length > 3) {
            flag = false
            errs.img_length = "Hinh anh khong qua 3"
        }
        if (!flag) {
            setErr(errs)
        } else {
            setErr("")
            if(inputs) {
                const data = new FormData()
                data.append('name', inputs.name)
                data.append('price', inputs.price)
                data.append('category', inputs.category)
                data.append('brand', inputs.brand)
                data.append('company', inputs.company)
                data.append('detail', inputs.detail)
                data.append('status', inputs.status)
                data.append('sale', inputs.sale ? inputs.sale : 0)
                avatarCheckBox.map((item) => {
                    data.append("avatarCheckBox[]", item)
                })
                Object.keys(avatar).map((item) => {
                    // console.log(avatar[item].name)
                    data.append("file[]", avatar[item])
                })
                const url = "http://localhost:8080/laravel/public/api/user/edit-product/" + param.id 
                axios.post(url, data, config)
                .then(res => {
                    console.log(res)
                    alert("Edit Thanh cong")
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
    return(
        <div className="col-sm-6">
            <div className="container-products">
                <div className="signup-form">
                    <Error err={err}></Error>
                    <h2>Edit Product</h2>
                    <form onSubmit = {handlSubmit}>
                        <input type="text" placeholder="Name" name="name"  value={inputs.name} onChange={handleInputs} />
                        <input type="text" placeholder="Price" name="price" value={inputs.price} onChange={handleInputs}/>
                        <select name="category" onChange={handleInputs}>
                            <option value="" disabled selected>Please choose category</option>
                            {handleCategory()}
                        </select>
                        <select name="brand" onChange={handleInputs}>
                            <option value="" disabled selected>Please choose brand</option>
                            {handleBrands()}
                        </select>
                        <select name="status" >
                            <option value="" disabled selected>Please choose status</option>
                            <option value="1">Sale</option>
                            <option value="0">New</option>
                        </select>
                        {/* {renderSale()} */}
                        <input type="text" placeholder="Company profile" name="company"  value={inputs.company} onChange={handleInputs}/>
                        <input type="file" name="image" multiple onChange={handleFile}/>
                        <div className="edit_product_img">{renderProduct()}</div>
                        <input type="text" name="detail" placeholder="Detail" value={inputs.detail} onChange={handleInputs}/>
                        <button type="submit" className="btn btn-default">Edit</button>
                    </form>                            
                </div>
            </div>
        </div>
)

}
export default EditProduct