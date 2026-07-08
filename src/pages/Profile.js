import { useContext } from "react";
import userContext from "../Context/userContext";

const Profile = () => {
  const user = useContext(userContext);

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4" style={{height: 'calc(100vh - 64px)'}}>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        
        <div className="flex justify-center mb-6">
          <img 
    src="https://avatars.githubusercontent.com/Muteebkamboh" 
    alt="Profile" 
    className="w-32 h-32 rounded-full object-cover shadow-md"
/>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {user.name}
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">
            <span className="text-2xl">🎂</span>
            <div>
              <p className="text-gray-500 text-sm">Age</p>
              <p className="text-gray-800 font-semibold">
                {user.age} years old
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-gray-500 text-sm">City</p>
              <p className="text-gray-800 font-semibold">{user.city}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl">
            <span className="text-2xl">🏏</span>
            <div>
              <p className="text-gray-500 text-sm">Hobby</p>
              <p className="text-gray-800 font-semibold">{user.hobby}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
