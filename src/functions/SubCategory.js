import axios from 'axios'
//n to add all the authentication routes inside it. 
export const getSubCategory=async (slug)=>
    await axios.get(`/subcategory/read/${slug}`);

export const getSubCategories=async (parentCategory)=>
    await axios.get(`api/subcategory/list?parentId=${parentCategory}`);

export const postSubCategory=async (SubCategory)=>
    await axios.post(`api/subcategory/create`,SubCategory);

export const updateSubCategory=async (slug,SubCategory)=>
    await axios.put(`api/subcategory/update/${slug}`,SubCategory);

export const deleteSubCategory=async (slug)=>
    await axios.delete(`api/subcategory/delete/${slug}`);
