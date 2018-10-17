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

    create = (name, base, middle, toppings, condiments, author) => {
        
        const formData = new FormData();
        formData.append("name", name)
        formData.append("base", base)
        formData.append("middle", middle)
        formData.append("toppings", toppings)
        formData.append("condiments", condiments)
        //formData.append("photo", imgPath)
        formData.append("author", author)
   
        return this.service.post('/', {name, base, middle, toppings, condiments, author})
        .then(res => res.data)
        .catch(error=>console.log(error))

    }

    oneSandwich = (id) => {
        return this.service.get(`/${id}`)
        .then(res => res.data)
        .catch(e => console.log(e))
    }
    sandwichEdit = (name, base, middle, toppings, condiments, id, imgPath) => {
        return this.service.put(`/edit/${id}`, {name, base, middle, toppings, condiments })
        .then(res => {console.log(res); return res.data})
        .catch(error => console.log(error))
    }
    
}

export default SandwichService;