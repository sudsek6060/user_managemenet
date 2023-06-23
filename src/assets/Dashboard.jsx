import { useState } from "react";
import Swal from "sweetalert2";

import EditUser from "./EditUser";
import AddUser from "./AddUser";
import UserCard from "./UserCard";

import { UserDatas } from "./UserList";
import Header from "./Header";

const Dashboard = () => {
  const [users, setUsers] = useState(UserDatas);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [user] = users.filter(user => user.id === id);

    setSelectedUser(user);
    setIsEditing(true);
}

const handleDelete = (id) => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then(result => {
        if (result.value) {
            const [user] = users.filter(user => user.id === id);

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${user.name}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });

            setUsers(users.filter(user => user.id !== id));
        }
    });
}




  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header 
            setIsAdding={setIsAdding}
          />

          <UserCard 
            users={users}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
         />
        </>
      )}

      {isAdding && (
        <AddUser 
            users={users}
            setUsers={setUsers}
            setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <EditUser 
            users={users}
            selectedUser={selectedUser}
            setUsers={setUsers}
            setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;

