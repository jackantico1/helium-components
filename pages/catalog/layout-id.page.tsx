import React from 'react';
import { Catalog, CatalogProvider, CatalogProviderConfig } from '@thoughtindustries/catalog';

function Page() {

    let config = {
        parsedUrl: {
            pathname: '/catalog',
        },
        layoutId: '61c7702b-e738-44c5-8fb9-fc2a8fd5276e',
        //widgetId: 'widget-id'
    }

  return (
    <>
        <div className='text-2xl p-10'>
            <h1>Hi!</h1>
            <a href='/'>Home</a>
            <h1><a href='/catalog'>Regular Catalog</a></h1>
            <h1><a href='/catalog/custom-price'>Custom Price</a></h1>
            <h1><a href='/catalog/widget-id'>Widget Id</a></h1>
        </div>
        <CatalogProvider config={config}>
            <Catalog onAddedToQueue={(item) => Promise.resolve()} />
        </CatalogProvider>
    </>
  );
}

export { Page };