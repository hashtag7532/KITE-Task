import React from "react";
export const getStaticProps = async () => {
  const res = await fetch('https://fakerapi.it/api/v1/users?_quantity=50');
  const data = await res.json();
  console.log(data);
  
  return {
    props : {
      users : data
    }
  }
}

const usersData = ({ users }) => {
  return (
    <div className="grid grid-cols-4">
        {users.data.map((user) => {
          return(<div className="shadow m-5">
          <div className=""> Name : <span className="font-bold">{`${user.firstname} ${user.lastname}`}</span></div>
          <div>Username : <span className="font-bold">{user.username}</span></div>
          <div>{user.email}</div>
          </div>

        )})}
 </div>
  )
}

export default usersData