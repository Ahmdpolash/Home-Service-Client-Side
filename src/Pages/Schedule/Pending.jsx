import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Pending = () => {

  const {user} = useContext(authContext)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/pending/${user.email}`)
    .then(res=>{
      console.log(res.data);
    })
  },[user])


  return (
    <div className="px-4 lg:px-16 py-3 lg:py-8">
      <div className="space-y-2">
        <h1 className="font-bold text-2xl lg:text-4xl">My Pendings Service</h1>
        <p className="bg-gray-100 py-2 px-4">Total Pending Service</p>
      </div>
    </div>
  );
};

export default Pending;
