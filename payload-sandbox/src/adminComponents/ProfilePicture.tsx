'use server'
import React from 'react';
import { useAuth } from '@payloadcms/ui'
import { Media, User } from '../payload-types';

import type { Payload } from 'payload';

const ProfilePicture: React.FC = ({ payload }: { payload: Payload }) => {
  console.log(useAuth<User>(), 'PPPPPP')
  const {user} = useAuth<User>();
  console.log(user, 'USER')
  return (
    <img
      className='gravatar-account'
      style={{
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      src='https://placeholder.pics/svg/50'
      alt='ALT'
      width={25}
      height={25}
    />
  );
}

export default ProfilePicture;
