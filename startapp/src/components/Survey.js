import React, {Component, useState} from 'react'
import Top from "./hero/Nav"
import About from './features/TwoColWithButton'
import Newest from './blogs/GridWithFeaturedPost'
import Footer from './footers/MiniCenteredFooter'
import tw from "twin.macro";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;


firebase.initializeApp({
    apiKey: "AIzaSyAkM9lNrcxHJkrAnwNJ5eaS6aK6L_ajqwY",
    authDomain: "pens-40e09.firebaseapp.com",
    databaseURL: "https://pens-40e09.firebaseio.com",
    projectId: "pens-40e09",
    storageBucket: "pens-40e09.appspot.com",
    messagingSenderId: "1080903402856",
    appId: "1:1080903402856:web:504e006132d8316759c2dd",
    measurementId: "G-SXPT8R85JQ"
})
const auth = firebase.auth();
const firestore = firebase.firestore();
const useType = '';
function Survey() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();
        await messagesRef.add({
            useType,
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setFormValue('');
    }

    function setType(type){
        useType = type;
    }
    return(
        <form onSubmit = {sendMessage}>
            <p>Which do you use the most?</p>
            <input type="radio" id="Pens" name="Pens" value="pen" onClick = 'setType(this.value)'/>
            <label for="Pens">Pens</label><br/>
            <input type="radio" id="Pencils" name="Pencils" value="pencil" onClick = 'setType(this.value)'/>
            <label for="Pencils">Pencils</label><br/>
            <input type="radio" id="Both" name="Both" value="both" onClick = 'setType(this.value)'/>
            <label for="Both">Equal</label><br/>
            <input placeholder = 'Type here...' value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/>
            <button type = "submit">Submit</button>
        </form>
    )

}


export default Survey