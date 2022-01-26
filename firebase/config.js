import  firebase from 'firebase/compat/app';
import 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC_JwpXS4uj9sRRDrbFAtalE1QulNTmKnw',
  authDomain: 'visualizer-new-devs-test.firebaseapp.com',
  projectId: 'visualizer-new-devs-test',
  storageBucket: 'visualizer-new-devs-test.appspot.com',
  messagingSenderId: '702664185241',
  appId: '1:702664185241:web:580752c50d570d0c89ef08'
}

//1- 20220126 OmarFiz connection with Fire
firebase.initializeApp(firebaseConfig);

//2- 20220126 OmarFiz retrieve ID`s / coordinates for material that will be used to 3

const matertialcol = firebase.firestore().collection('materials');
  matertialcol
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All data in 'materials' collection", data); 
});

const pointcol = firebase.firestore().collection('points');
  point
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All data in 'points' collection", data); 
});


//3- 20220126 OmarFiz retrieve path for images  

const pointdoc = firebase
  .firestore()
  .collection("points")
  .doc("mTrveExUlJpsEInPt1KX");

pointdoc.get().then((doc) => {
  console.log("data in mTrveExUlJpsEInPt1KX:", doc.data());
});


const matertialdoc = firebase
  .firestore()
  .collection("materials")
  .doc("R4eHqq0Zi1Hb6GrP8JuV");

matertialdoc.get().then((doc) => {
  console.log(" data in R4eHqq0Zi1Hb6GrP8JuV:", doc.data());
});
