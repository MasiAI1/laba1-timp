import axios from 'axios';
const API_URL = 'http://localhost:3000/incidents';
export default class PostServ{
    static async getAll(limit=10,page=1){
           const response= await axios.get(API_URL,{
                params:{
                    limit:limit,
                    page:page
                }
           });
           return response;
    }
     static async getById(id){
           const response= await axios.get(`${API_URL}/${id}`);
           return response;
    }
    static async create(post) {
        return await axios.post(API_URL, post);
    }

    static async update(post) {
        return await axios.put(`${API_URL}/${post.id}`, post);
    }

    static async delete(id) {
        return await axios.delete(`${API_URL}/${id}`);
    }
}