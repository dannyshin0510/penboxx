import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


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


const StyledDiv = tw.div`text-secondary-500 p-8 overflow-hidden`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

function SurveyForm() {
  const subheading = "Submit a suggestion!";
  const heading = <>Tell us what <span tw="text-primary-500">you</span><wbr/> are using.</>;
  const description = "Tell us about the pen or pencil you are using, and it could be featured in the next month's Hall of Fame. Our team will make a careful decision after each month and update the Hall of Fame. Let everyone know!";
  const submitButtonText = "Send";
  const formAction = "#";
  const formMethod = "get";
  const textOnLeft = true;

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
        var useType = '';
        var ele = document.getElementsByName('selection');
        var i;
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            useType = ele[i].value;
        }
        e.preventDefault();
        await messagesRef.add({
            type_used: useType,
            text:formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setFormValue('');
    }


    return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit = {sendMessage} action={formAction} method={formMethod}>
                {'Which are you suggesting?' && <Description>Which are you suggesting?</Description>}
                <br/>
                <input type="radio" id="Pens" name="selection" value="pen"/>
                <label for="Pens">Pens</label><br/>
                <input type="radio" id="Pencils" name="selection" value="pencil"/>
                <label for="Pencils">Pencils</label><br/>
                <input type="radio" id="Neither" name="selection" value="neither"/>
                <label for="Neither">None</label><br/>
                <Textarea placeholder = 'Type your suggestion and why...' value = {formValue} onChange = {(e) => setFormValue(e.target.value)}/>
                <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default SurveyForm
