import SideMenu from '../components/sideMenu';
import Home from '../screens/home';
import List from '../screens/list';
import Root from '../screens/root';
import Signin from '../screens/signin';
import Tab1 from '../screens/tab1';
import Tab2 from '../screens/tab2';
import { ROUTE_NAMES } from './constants';

export const COMPONENTS = {
  [ROUTE_NAMES.SIDE_MENU]: {
    name: ROUTE_NAMES.SIDE_MENU,
    component: SideMenu,
  },
};

export const ROUTES = {
  [ROUTE_NAMES.SIGN_IN]: {
    name: ROUTE_NAMES.SIGN_IN,
    component: Signin,
  },
  [ROUTE_NAMES.ROOT]: {
    name: ROUTE_NAMES.ROOT,
    component: Root,
  },
  [ROUTE_NAMES.HOME]: {
    name: ROUTE_NAMES.HOME,
    component: Home,
  },
  [ROUTE_NAMES.LIST]: {
    name: ROUTE_NAMES.LIST,
    component: List,
  },
  [ROUTE_NAMES.TAB_1]: {
    name: ROUTE_NAMES.TAB_1,
    component: Tab1,
  },
  [ROUTE_NAMES.TAB_2]: {
    name: ROUTE_NAMES.TAB_2,
    component: Tab2,
  },
};
