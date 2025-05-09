import axios from "axios";


const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

export const getPost=(pageNumber)=>{
    return api.get(`/posts?_page=${pageNumber}&_limit=10`)
}

export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}
export const postData=(post)=>{
    return api.post(`/posts`, post)
}
export const updatePost=(id, post)=>{
    return api.put(`/posts/${id}`, post)

}