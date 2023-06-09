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
        purchasable={{id:'b9c7347-ac9b-4e16-8538-6b928a8e425f', priceInCents:1000}}
      >Add to Cart</AddToCartButton>
    </Cart>
    </>
  );
}