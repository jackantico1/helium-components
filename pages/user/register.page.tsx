import React from 'react';
import { Registration } from '@thoughtindustries/user'

function Page() {

  return (
    <>
      <div className='text-2xl p-10'>
          <h1>Hi!</h1>
          <a href='/'>Home</a>
      </div>
      <Registration/>
    </>
  );
}

export { Page };