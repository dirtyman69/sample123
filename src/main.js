import Vue from 'vue'
import App from './App.vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDfzTAsbgKdqI302E3qglIGDDhxTO4mFQ",
  authDomain: "fir-test-552ca.firebaseapp.com",
  projectId: "fir-test-552ca",
  storageBucket: "fir-test-552ca.appspot.com",
  messagingSenderId: "1068767067789",
  appId: "1:1068767067789:web:5b783424a748b2dc1cecc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFirestore(app);

// Get a list of cities from your database
// eslint-disable-next-line no-unused-vars
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
