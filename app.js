var config = {
  apiKey: "AIzaSyB3Zok07MOe1FtWr1f2Xzai8IkZ_bPNMfs",
  authDomain: "nfc-animal-passport.firebaseapp.com",
  databaseURL: "https://nfc-animal-passport.firebaseio.com",
  projectId: "nfc-animal-passport",
  storageBucket: "nfc-animal-passport.appspot.com",
  messagingSenderId: "333276086554"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();
const docRef = firestore.doc("samples/animalDB");

const addAnimalID = document.querySelector("#addID");
const addAnimalName = document.querySelector("#addName");
const addButton = document.querySelector("#add");
const searchAnimalID = document.querySelector("#searchID");
const searchButton = document.querySelector("#search");
const returnedName = document.querySelector("#searchName");

addButton.addEventListener("click", function(){
  firestore.collection("samples").add({
    animalID: addAnimalID.value,
    animalName: addAnimalName.value
  }).then(function() {
    console.log("Status Saved.");
  });
})

searchButton.addEventListener("click", function(){
  firestore.collection("samples").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if(doc && doc.exists){
        const myData = doc.data();
        returnedName.innerText = myData.animalName;
      }
    });
  });
})
