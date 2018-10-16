import axios from 'axios';

class SandwichService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/sandwich/',
            withCredentials: true
        });
    }

    all = () => {
        return this.service.get('/all')
            .then(response => response.data )
    }

    create = (name, imgPath, base, middle, toppings, condiments, author) => {
        
        const formData = new FormData();
        formData.append("name", name)
        formData.append("base", base)
        formData.append("middle", middle)
        formData.append("toppings", toppings)
        formData.append("condiments", condiments)
        formData.append("photo", imgPath)
        
        return this.service.post('/', formData,  {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => res.data)
        .catch(err=>console.log(err))
    }
}

export default SandwichService;