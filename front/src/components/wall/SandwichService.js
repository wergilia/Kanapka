import axios from 'axios';

class SandwichService {
    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3001/api/sandwich/',
            withCredentials: true
        });
    }

    all = () => {
        return this.service.get('/all')
            .then(response => response.data )
    }


    /* login = (username, password) => {
      return this.service.post('/login', {username, password})
      .then(response => response.data)
    }
  
    loggedin = () => {
      return this.service.get('/currentUser',)
      .then(response => response.data)
    }
  
    logout = () => {
      return this.service.get('/logout',)
      .then(response => response.data)
    } */
}

export default SandwichService;