import axios from 'axios';

class ProfileService {
    contructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3001/profile/',
            withCredentials: true
        })
    }

    profile = (userId, name, email, imgName, imgPath) => {
        return this.service.post('/user', {userId, name, email, imgName, imgPath})
        .then(res => res.data)
    }









}

export default ProfileService;