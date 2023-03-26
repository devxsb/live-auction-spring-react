// ----------------------------------------------------------------------

const PRODUCTS = [
    {
        id: 1,
        name: 'Gibson Les Paul',
        price: 4999,
        color: '#090A0A',
        link: 'https://www.gibson.com/en-US',
        cover: `/assets/images/products/product_1.jpg`
    },
    {
        id: 2,
        name: 'Fender Stratocaster',
        price: 2849,
        color: '#EFF5F5',
        link: 'https://www.fender.com/en-US',
        cover: `/assets/images/products/product_2.jpg`
    },
    {
        id: 3,
        name: 'Jackson Premium',
        price: 1467,
        color: '#4D5050',
        link: 'https://www.jacksonguitars.com/en',
        cover: `/assets/images/products/product_3.jpg`
    },
];
// ----------------------------------------------------------------------

const products = [...Array(3)].map((_, index) => {
    return {
        id: PRODUCTS[index].id,
        name: PRODUCTS[index].name,
        price: PRODUCTS[index].price,
        color: PRODUCTS[index].color,
        link: PRODUCTS[index].link,
        cover: PRODUCTS[index].cover,
    };
});

export default products;
