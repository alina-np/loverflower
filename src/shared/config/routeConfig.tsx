import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { FaqPage } from 'pages/FaqPage';
import { AboutPage } from 'pages/AboutPage';
import { CatalogPage } from 'pages/CatalogPage';
import { BouquetPage } from 'pages/CatalogPage';
import { ContactsPage } from 'pages/ContactsPage';
import { CorporationPage } from 'pages/CorporationPage';
import { InfoPage } from 'pages/InfoPage';
import { CartPage } from 'pages/CartPage';
import { OrderPage } from 'pages/OrderPage';
import { ErrorPage } from 'pages/ErrorPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    FAQ = 'faq',
    CATALOG = 'catalog',
    BOUQUET = 'bouquet',
    CONTACTS = 'contacts',
    CORPORATION = 'corporation',
    INFO = 'info',
    CART = 'cart',
    ORDER = 'order',
    ERROR = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.FAQ]: '/faq',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.BOUQUET]: '/catalog/:id',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.CORPORATION]: '/corporation',
    [AppRoutes.INFO]: '/info',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.ORDER]: '/order',
    [AppRoutes.ERROR]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.FAQ]: {
        path: RoutePath.faq,
        element: <FaqPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.BOUQUET]: {
        path: RoutePath.bouquet,
        element: <BouquetPage />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />,
    },
    [AppRoutes.CORPORATION]: {
        path: RoutePath.corporation,
        element: <CorporationPage />,
    },
    [AppRoutes.INFO]: {
        path: RoutePath.info,
        element: <InfoPage />,
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <CartPage />,
    },
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        element: <OrderPage />,
    },
    [AppRoutes.ERROR]: {
        path: RoutePath.not_found,
        element: <ErrorPage />,
    }
};
