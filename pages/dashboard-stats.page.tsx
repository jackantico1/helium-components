import React from 'react';
import { DashboardStats } from '@thoughtindustries/dashboard-stats';

function Page() {

  return (
    <>
        <div className='text-2xl p-10'>
            <h1>Hi!</h1>
            <a href='/'>Home</a>
        </div>
        <DashboardStats/>
    </>
  );
}

export { Page };