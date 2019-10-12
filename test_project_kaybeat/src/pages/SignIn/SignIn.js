
import React from 'react';
import './SignIn.css';
import SignInForm from "./SignInForm";

// This is the website's menu page
export default class SignIn extends React.Component {


    render() { 

        return (
        <div>
			<div className='contact'>
			<div class="a">
            <h1 className="contactTitle">Sign In </h1>
            </div>
            {/* Do contact form here */}
            <p className="introText"> 
      <SignInForm/>
            </p>
        </div>
        </div>
        );
    }

}