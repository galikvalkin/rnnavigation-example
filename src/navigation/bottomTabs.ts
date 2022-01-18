import { ROUTE_NAMES } from './constants';

const BOTTOM_TABS = {
  bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTE_NAMES.TAB_1,
              },
            },
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: ROUTE_NAMES.TAB_2,
              },
            },
          ],
        },
      },
    ],
  },
};

export { BOTTOM_TABS };
