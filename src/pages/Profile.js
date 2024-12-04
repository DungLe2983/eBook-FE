import React, { useState, useEffect } from "react";
import { getUserById, updateUserById } from "../services/profileService";
import toast from "react-hot-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("id");
      if (!userId) {
        setError("User ID not found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const data = await getUserById(userId);
        setUserData(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e, field) => {
    setUserData({
      ...userData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userId = localStorage.getItem("id");
      const payload = {
        ...userData,
      };
      await updateUserById(userId, payload);
      toast.success("Profile updated successfully.");
      setIsEditing(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='text-red-500'>Error: {error}</p>;

  return (
    <div className='min-h-screen text-white p-8 mt-20'>
      <div className='max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold'>User Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2'
          >
            <i className={`ri-${isEditing ? "close" : "edit"}-line`}></i>
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {userData && (
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Profile Image */}
              <div className='md:col-span-2 flex justify-center mb-6'>
                <img
                  src={`https://ui-avatars.com/api/?name=${userData.fullName}&size=150`}
                  alt='Profile'
                  className='rounded-full w-32 h-32'
                />
              </div>

              {/* Basic Information */}
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-400'>
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type='text'
                      value={userData.fullName}
                      onChange={(e) => handleInputChange(e, "fullName")}
                      className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500'
                    />
                  ) : (
                    <p className='mt-1 text-lg'>{userData.fullName}</p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-400'>
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type='email'
                      value={userData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      className='mt-1 w-full bg-gray-500 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 cursor-not-allowed'
                      disabled
                    />
                  ) : (
                    <p className='mt-1 text-lg'>{userData.email}</p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-400'>
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type='tel'
                      value={userData.phoneNumber}
                      onChange={(e) => handleInputChange(e, "phoneNumber")}
                      className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500'
                    />
                  ) : (
                    <p className='mt-1 text-lg'>{userData.phoneNumber}</p>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-400'>
                    Address
                  </label>
                  {isEditing ? (
                    <input
                      type='text'
                      value={userData.address}
                      onChange={(e) => handleInputChange(e, "address")}
                      className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500'
                    />
                  ) : (
                    <p className='mt-1 text-lg'>{userData.address}</p>
                  )}
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-400'>
                    Username
                  </label>
                  {isEditing ? (
                    <input
                      type='text'
                      value={userData.userName}
                      onChange={(e) => handleInputChange(e, "userName")}
                      className='mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500'
                    />
                  ) : (
                    <p className='mt-1 text-lg'>{userData.userName}</p>
                  )}
                </div>
              </div>
            </div>

            {isEditing && (
              <div className='mt-8 flex justify-end'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  <i className='ri-save-line'></i>
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
