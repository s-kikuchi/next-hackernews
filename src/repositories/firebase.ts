import * as firebase from 'firebase/app';
import 'firebase/database';

export default function createAPI({ config, version }) {
  let api;
  if (process.__API__) {
    api = process.__API__;
  } else {
    firebase.initializeApp(config);
    api = process.__API__ = firebase.database().ref(version);
    api.onServer = true;
  }
  return api;
}
