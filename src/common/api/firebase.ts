import * as firebase from 'firebase/app';
import 'firebase/database';

export default function createAPI({ config, version }) {
  let api;
  try {
    api = firebase.app();
  } catch (e) {
    firebase.initializeApp(config);
    api = firebase.database().ref(version);
    api.onServer = true;
  }
  return api;
}
