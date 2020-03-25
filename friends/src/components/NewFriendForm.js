import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriendForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const { register, handleSubmit, reset } = useForm();

  const handleChanges = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
      axiosWithAuth()
        .post("/api/friends", data)
        .then(res => {
          // res
          console.log(res); 
          setNewFriend(res.data)         
        })
        .catch(err => console.log(err.response));
    };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        ref={register({ required: true, maxLength: 20 })}
        onChange={handleChanges}
      />

      <input
        type="text"
        placeholder="Age"
        name="age"
        ref={register({ required: true, maxLength: 20 })}
        onChange={handleChanges}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true, maxLength: 20 })}
        onChange={handleChanges}
      />

      <input type="submit" />
    </form>
  );
};

export default NewFriendForm;