import {useContext} from'react'
import userContext from '../Context/userContext';

const Profile = () => {
    const user = useContext(userContext);

    return (
        <div className="p-6 max-w-md mx-auto mt-10 border rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">My name is {user.name}</h1>
            <h3 className="text-gray-600 mt-2">I am {user.age} years old</h3>
            <h3 className="text-gray-600 mt-2">I am from {user.city}</h3>
        </div>
    )
};

export default Profile;