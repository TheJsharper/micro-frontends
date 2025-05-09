declare module '*.png,jpg,jpeg,gif, svg'{
    const value: string;
    export default value;
}



declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const value: string;
    export default value;
  }

  declare module 'products/Products' ;
  declare module 'orders/Orders' ;
  declare module  'carts/Carts' ;