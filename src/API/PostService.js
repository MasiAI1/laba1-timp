import axios from 'axios';
export default class PostServ{
    static async getAll(limit=10,page=1){
           const response= await axios.get("https://69e6072dce4e908a155ed5a5.mockapi.io/incidents",{
                params:{
                    limit:limit,
                    page:page
                }
           });
           return response;
    }
     static async getById(id){
           const response= await axios.get("https://69e6072dce4e908a155ed5a5.mockapi.io/incidents/" + id);
           return response;
    }
    static async create(post) {
        return await axios.post('https://69e6072dce4e908a155ed5a5.mockapi.io/incidents', post);
    }

    static async update(post) {
        return await axios.put(`https://69e6072dce4e908a155ed5a5.mockapi.io/incidents/${post.id}`, post);
    }

    static async delete(id) {
        return await axios.delete(`https://69e6072dce4e908a155ed5a5.mockapi.io/incidents/${id}`);
    }
}