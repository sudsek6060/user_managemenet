/* eslint-disable react/prop-types */
import  {useState} from 'react';
import Swal from 'sweetalert2';

const EditUser = ({ users, selectedUser, setUsers, setIsEditing}) => {

    const id = selectedUser.id;

    const [name, setName] = useState(selectedUser.name);
    const [email, setEmail] = useState(selectedUser.email)
    const [phoneNo, setPhoneNo] = useState(selectedUser.phoneNo)


    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !email || !phoneNo ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const user = {
            id,
            name,
            email,
            phoneNo            
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1, user);
                break;
            }
        }

        setUsers(users);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${user.name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };


  return (
    <>
      <div className="flex justify-center items-center h-screen">
    <div className="bg-white shadow-lg rounded-lg px-8 py-6">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Name:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Email:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}  required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >Phone No:</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" type="Update">Edit</button>
          <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" type="button" 
          value="Cancel"
          onClick={() => setIsEditing(false)}  >Cancel</button>
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default EditUser