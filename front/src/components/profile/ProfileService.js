import axios from 'axios';

class ProfileService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:4000/profile',
            withCredentials: true
        })
    }

    profile = (name, email, imgPath, id) => {

        const formData = new FormData();
        formData.append("username", name)
        formData.append("email", email)
        formData.append("photo", imgPath)
        
        return this.service.post(`/edit/${id}`, formData,  {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => res.data)
        .catch(err=>console.log(err))
    }


}

export default ProfileService;