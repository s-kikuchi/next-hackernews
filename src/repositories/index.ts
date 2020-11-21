// This files should be separate in the big project.
import createAPI from './firebase';
const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com',
  },
});

const logRequests = !!process.env.DEBUG_API;

const fetch = (child) => {
  logRequests && console.log(`fetching ${child} from api`);
  return new Promise((resolve, reject) => {
    api.child(child).once('value', (snapshot) => {
      const val = snapshot.val();
      if (val) val.__lastUpdated = Date.now();
      logRequests && console.log(`fetched ${child}.`);
      resolve(val);
    });
  });
};

export const fetchIdsByType = (type: string) => {
  return fetch(`${type}stories`);
};

export const fetchItem = (id: number) => {
  return fetch(`item/${id}`);
};

export const fetchItems = (ids: number[]) => {
  return Promise.all(ids.map((id) => fetchItem(id)));
};

export const fetchUser = (id: string | string[]) => {
  return fetch(`user/${id}`);
};
