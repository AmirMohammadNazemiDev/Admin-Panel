import axios from "axios"
import { data } from "react-router";

export const getUsersService = async ()=> {
    const response =  await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
}


export const createUserService = (data) => {
  return axios.post(
    "https://jsonplaceholder.typicode.com/users",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};


export const updateUserService = (data, id)=> {
    return axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
        data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
}

export const deleteUserService = (id)=> {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}