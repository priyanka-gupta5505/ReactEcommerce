import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjCqyM2eOa7Z3oVpjaz1ZSBFHvLVbXNTo",
  authDomain: "cart-237f3.firebaseapp.com",
  databaseURL: "https://cart-237f3-default-rtdb.firebaseio.com",
  projectId: "cart-237f3",
  storageBucket: "cart-237f3.appspot.com",
  messagingSenderId: "89488250631",
  appId: "1:89488250631:web:bb81b7b4c2432dca2417a2",
  measurementId: "G-316C21S3E6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));
