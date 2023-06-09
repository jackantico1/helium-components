import React from 'react';

function Page() {

  return (
    <div className='text-4xl p-10'>
      <h1>Hi!</h1>
      <h1><a href='/catalog'>Catalog Page</a></h1>
      <h1><a href='/cart'>Cart</a></h1>
      <h1><a href='/featured-content'>Featured Content</a></h1>
      <h1><a href='/dashboard-stats'>Dashboard Stats</a></h1>
      <h1><a href='/user/login'>Login</a></h1>
      <h1><a href='/user/register'>Register</a></h1>
    </div>
  );
}

export { Page };