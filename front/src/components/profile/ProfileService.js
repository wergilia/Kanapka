import axios from 'axios';

class ProfileService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/profile',
            withCredentials: true
        })
    }

    profile = (name, email, imgPath, id) => {
        console.log(id);
        
        return this.service.put(`/edit/${id}`, {name, email, imgPath})
        .then(res => res.data)
    }









}

export default ProfileService;