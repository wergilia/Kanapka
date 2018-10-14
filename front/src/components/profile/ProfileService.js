import axios from 'axios';

class ProfileService {
    contructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3001/profile',
            withCredentials: true
        })
    }

    profile = (name, username, email, imgName, imgPath, id) => {
        console.log(id);
        
        return this.service.patch(`/edit/${id}`, {name, username, email, imgName, imgPath})
        .then(res => res.data)
    }









}

export default ProfileService;