import React from 'react';
import { Catalog, CatalogProvider, CatalogProviderConfig } from '@thoughtindustries/catalog';

function Page() {

    let config = {
        parsedUrl: {
            pathname: '/catalog',
        }
    }

    const priceFormat = (priceInCents: number) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        return formatter.format(priceInCents / 100);
    }

  return (
    <>
        <div className='text-2xl p-10'>
            <h1>Hi!</h1>
            <h1><a href='/'>Home</a></h1>
            <h1><a href='/catalog'>Regular Catalog</a></h1>
            <h1><a href='/catalog/widget-id'>Widget Id</a></h1>
            <h1><a href='/catalog/layout-id'>Layout Id</a></h1>
        </div>
        <CatalogProvider config={config}>
            <Catalog 
                onAddedToQueue={(item) => Promise.resolve()} 
                priceFormat={priceFormat}/>
        </CatalogProvider>
    </>
  );
}

export { Page };