import { ROUTE_NAMES } from './constants';

const SIDE_MENU = {
  sideMenu: {
    left: {
      component: {
        name: ROUTE_NAMES.SIDE_MENU,
      },
    },
    center: {
      stack: {
        children: [
          {
            component: {
              name: ROUTE_NAMES.ROOT,
            },
          },
        ],
      },
    },
  },
};

export { SIDE_MENU };
