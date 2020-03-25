import React, { useState, useEffect } from "react";
import axios from "axios";
import NewFriendForm from "./NewFriendForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
    .then(res => {
      console.log('friends res', res.data)
      setFriends(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="friends-list">
      <NewFriendForm />
      <h1>Friends List</h1>
      {friends.map(friend => {
        return(
          <div className="friends-info" key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Friends;