'use server'
import React from 'react';
import { useAuth } from '@payloadcms/ui'
import { Media, User } from '../payload-types';

const ProfilePicture: React.FC = () => {
  console.log(useAuth<User>(), 'PPPPPP')
  const {user} = useAuth<User>();
  console.log(user, 'USER')
  return (
    <img
      style={{
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        background: 'none red'
      }}
      src='https://placehold.co/25'
      alt='ALT'
      width={25}
      height={25}
    />
  );
}

export default ProfilePicture;
