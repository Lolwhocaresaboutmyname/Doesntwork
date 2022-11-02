const firebaseConfig = {

    apiKey: "AIzaSyCjJBH4bv-OaAMoV_o7DLvnFQNGbNwO-4c",
  
    authDomain: "twi--quitt--kwitter.firebaseapp.com",
  
    databaseURL: "https://twi--quitt--kwitter-default-rtdb.firebaseio.com",
  
    projectId: "twi--quitt--kwitter",
  
    storageBucket: "twi--quitt--kwitter.appspot.com",
  
    messagingSenderId: "296827973601",
  
    appId: "1:296827973601:web:79d1c0e5774a7c7647eca0",
  
    measurementId: "G-GJBNN60ER1"
  
  };
  
  
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}