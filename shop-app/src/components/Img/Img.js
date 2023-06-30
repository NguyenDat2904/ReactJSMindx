import shoes1 from '../../assets/img/product4/1.jpg';
import shoes2 from '../../assets/img/product4/2.jpg';
import shoes3 from '../../assets/img/product4/3.jpg';
import shoes4 from '../../assets/img/product4/4.jpg';
import shoes5 from '../../assets/img/product4/5.png';
import shoes6 from '../../assets/img/product4/6.png';
import shoes7 from '../../assets/img/product4/7.png';
import shoes8 from '../../assets/img/product4/8.png';

import product11 from '../../assets/img/product1/1.jpg';
import product21 from '../../assets/img/product1/2.jpg';
import product31 from '../../assets/img/product1/3.jpg';
import product41 from '../../assets/img/product1/4.jpg';

import product12 from '../../assets/img/product2/1.jpg';
import product22 from '../../assets/img/product2/2.jpg';
import product32 from '../../assets/img/product2/3.jpg';
import product42 from '../../assets/img/product2/4.jpg';

import product13 from '../../assets/img/product3/1.jpg';
import product23 from '../../assets/img/product3/2.jpg';
import product33 from '../../assets/img/product3/3.jpg';
import product43 from '../../assets/img/product3/4.jpg';

export const productShoes = [
    {
        title: 'Air Jordan Zion 1',
        img: shoes1,
        list_img: [product13, product23, product33, product43],
        discount: 50,
        price: 100,
        star: Array(5).fill(null),
        id: 1,
    },
    {
        title: 'Air Jordan Kids',
        img: shoes2,
        list_img: [product11, product21, product31, product41],
        discount: 40,
        price: 120,
        star: Array(5).fill(null),
        id: 2,
    },
    {
        title: 'Air Jordan Zion Noah',
        img: shoes3,
        list_img: [product13, product23, product33, product43],
        discount: 44,
        price: 110,
        star: Array(4).fill(null),
        id: 3,
    },
    {
        title: 'Nike Jordan PF Noah',
        img: shoes4,
        discount: 30,
        price: 115,
        star: Array(3).fill(null),
        id: 4,
    },
    {
        title: 'Air Jordan Kids',
        img: shoes5,
        list_img: [product13, product23, product33, product43],
        discount: 10,
        price: 200,
        star: Array(5).fill(null),
        id: 5,
    },
    {
        title: 'Air Jordan Kids',
        img: shoes6,
        list_img: [product11, product21, product31, product41],
        discount: 20,
        price: 320,
        star: Array(2).fill(null),
        id: 6,
    },
    {
        title: 'Air Jordan Kids',
        img: shoes7,
        list_img: [product12, product22, product32, product42],
        discount: 15,
        price: 920,
        star: Array(5).fill(null),
        id: 7,
    },
    {
        title: 'Air Jordan Kids',
        img: shoes8,
        discount: 5,
        price: 520,
        star: Array(4).fill(null),
        id: 8,
    },
];
