import { ROUTE_NAMES } from './constants';

const ROOT_SIGNIN = {
  stack: {
    children: [
      {
        component: {
          name: ROUTE_NAMES.SIGN_IN,
        },
      },
    ],
  },
};

export { ROOT_SIGNIN };
