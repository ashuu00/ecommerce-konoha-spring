import axios from 'axios'
//n to add all the authentication routes inside it. 
export const getCollection=async (slug)=>
    await axios.get(`api/Collection/read/${slug}`);

export const getCollections=async ()=>
    await axios.get(`/api/Collection/list`);

export const postCollection=async (name, getItems)=>
    await axios.post(`/api/Collection/create`,{"name":name,"items":getItems});

export const updateCollection=async (slug,Collection)=>
    await axios.put(`/api/Collection/update?id=${slug}`,Collection);

export const deleteCollection=async (slug)=>
    await axios.delete(`/api/Collection/delete?id=${slug}`);

export const getFilter=async (parent)=>
    await axios.get(`/Collection/sub?name=${parent}`);