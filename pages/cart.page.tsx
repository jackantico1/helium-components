import React from 'react';
import { Cart, AddToCartButton, CartUIProvider, CartButton, EcommItemType } from '@thoughtindustries/cart';



export { Page };

function Page() {

  return (
    <>
      <div className='text-2xl p-10'>
            <h1>Hi!</h1>
            <a href='/'>Home</a>
        </div>
      <Cart checkoutUrl="/checkout">
        <CartButton />
        <AddToCartButton
          purchasableType={EcommItemType.Product}
          purchasable={{id:'f57682e2-5a4b-4fbe-907d-7fd1aa5910c0', priceInCents:2000}}
        >Add to Cart</AddToCartButton>
      </Cart>
    </>
  );
}