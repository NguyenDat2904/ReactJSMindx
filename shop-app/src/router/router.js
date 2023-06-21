import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

export const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        component: ProductDetail,
    },
    {
        path: '/user',
        component: ProductDetail,
    },
];
export const privateRouter = [];
