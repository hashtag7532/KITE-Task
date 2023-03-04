import React from "react";
export const getStaticProps = async () => {
  const res = await fetch('https://fakerapi.it/api/v1/users?_quantity=50');
  const data = await res.json();
  console.log(data);
  
  return {
    props : {
      users : data.data
    }
  }
}

const usersData = ({ users }) => {
  return (
    <div className="grid grid-cols-3">
        {users.map((user) => {
          return(
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-4 mx-auto mt-5">
                <div class="flex justify-end px-4 pt-4">
                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.image} alt="Bonnie image"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 ">{user.firstname} {user.lastname}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{user.username}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                    
                </div>
            </div>
            

        )})}
 </div>
  )
}

export default usersData