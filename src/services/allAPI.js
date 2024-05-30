import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";
import Category from "../components/Category";

//to upload a new video
export const uploadAllVideo = async (reqBody)=>{
   return  await commonAPI('POST',`${serverURL}video`,reqBody)
}

// to get alll videos already inserted

 export const getAllVideos = async()=>{
   return await commonAPI('GET',`${serverURL}video`,"")
}

// to delete specific video
export const deleteVideo = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
}

// add details to watch history
export const addToHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}history`,videoDetails)
}

//get all details of history

export const getHistory = async()=>{
   return await commonAPI('GET',`${serverURL}history`,"")
}

//to delete history
export const deleteHistory = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
}

// to add category
export const uploadAllCategory = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}category`,reqBody)
}

// to get Category

export const getAllCategory = async()=>{
   return await commonAPI('GET',`${serverURL}category`,"")
}

// delete category

export const deleteCategory = async(id) =>{
   return await commonAPI('DELETE',`${serverURL}category/${id}`,{})
}

//get videodetails with video id

export const getVideoDetails = async(id) =>{
   return await commonAPI('GET',`${serverURL}video/${id}`,"")
}

// update category with video details

export const updateCategory = async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}

// delete video from category

export const deleteVideoFromCategory = async(id,body)=>{
   return await commonAPI('DELETE',`${serverURL}category/${id}`,body)
}