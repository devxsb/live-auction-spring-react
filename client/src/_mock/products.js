import {faker} from '@faker-js/faker';

// ----------------------------------------------------------------------

const PRODUCTS = [
    {
        name: 'Gibson Les Paul',
        price: 4999,
        color: '#090A0A',
        link: 'https://www.gibson.com/en-US'
    },
    {
        name: 'Fender Stratocaster',
        price: 2849,
        color: '#EFF5F5',
        link: 'https://www.fender.com/en-US'
    },
    {
        name: 'Jackson Premium',
        price: 1467,
        color: '#4D5050',
        link: 'https://www.jacksonguitars.com/en'
    },
];
// ----------------------------------------------------------------------

const products = [...Array(3)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/assets/images/products/product_${setIndex}.jpg`,
        name: PRODUCTS[index].name,
        price: PRODUCTS[index].price,
        color: PRODUCTS[index].color,
        link: PRODUCTS[index].link
    };
});

export default products;
