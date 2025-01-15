import React from 'react';
import EditIcon from '../components/icons/EditIcon';

const UserPhoto = ({ photo, setPhoto }) => {
  return (
    <label className="relative cursor-pointer inline-flex">
      {/* Display the photo */}
      <div className="relative">
        <img
          src={photo}
          width={72}
          height={72}
          alt=""
          className="w-[72px] h-[72px] rounded-full object-cover"
        />
        <div className='absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-smallShadow'>
          <EditIcon />
        </div>
      </div>
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={setPhoto}
      />
    </label>
  );
};

export default UserPhoto;
