import React from 'react';
import { Catalog, CatalogProvider, CatalogProviderConfig } from '@thoughtindustries/catalog';

function Page() {

    let config = {
        parsedUrl: {
            pathname: '/catalog',
        }
    }

  return (
    <>
        <div className='text-2xl p-10'>
            <h1>Hi!</h1>
            <a href='/'>Home</a>
        </div>
        <CatalogProvider config={config}>
            <Catalog onAddedToQueue={(item) => Promise.resolve()} />
        </CatalogProvider>
    </>
  );
}

export { Page };