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

    create = (name, base, middle, toppings, condiments, author, imgPath) => {
        
        const formData = new FormData();
        formData.append("name", name)
        formData.append("base", base)
        formData.append("middle",  JSON.stringify(middle))
        formData.append("toppings", JSON.stringify(toppings))
        formData.append("condiments",  JSON.stringify(condiments))
        formData.append("photo", imgPath)
        formData.append("author", author)
   
        return this.service.post('/create', formData,  {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => res.data)
        .catch(error=>console.log(error))

    }

    oneSandwich = (id) => {
        return this.service.get(`/${id}`)
        .then(res => res.data)
        .catch(e => console.log(e))
    }
    sandwichEdit = (name, base, middle, toppings, condiments, id, author, imgPath) => {

        const formData = new FormData();
        formData.append("name", name)
        formData.append("base", base)
        formData.append("middle", JSON.stringify(middle))
        formData.append("toppings", JSON.stringify(toppings))
        formData.append("condiments", JSON.stringify(condiments))
        formData.append("photo", imgPath)
        formData.append("author", author)


        return this.service.post(`/edit/${id}`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {console.log(res); return res.data})
        .catch(error => console.log(error))
    }
    
}

export default SandwichService;