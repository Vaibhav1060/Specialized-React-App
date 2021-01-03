import React, { Component } from 'react';
import './AccountCreation.scss';


export default class AccountCreation extends Component {
    render() {
        return (
            <div className='accountCreation'>
                <div className='accountCreationWrap'>

                  <p className='accountCreation-Title'>Create an Account</p>

                    <p className='accountCreationText'>This will allow you to:</p>

                        <ul className='accountCreation-List'>
                            <li className='accountCreationText'>Save billing and shipping details for faster checkout.</li>
                            <li className='accountCreationText'>Complete your rider profile to receive Specialized news and product updates.</li>
                            <li className='accountCreationText'>Archive purchases and order history.</li>
                            <li className='accountCreationText'>Register purchased bikes and warranties.</li>
                        </ul>

                    <p className='accountCreationText'>All fields are required unless otherwise noted</p>

                    <form action='/' className='accountCreation-Form'>

                        <label className='accountCreation-FormLabel'>FIRST NAME</label>
                        <input type='name' name='firstName' className='accountCreation-FormInput'></input>

                        <label className='accountCreation-FormLabel'>LAST NAME</label>
                        <input type='name' name='lastName' className='accountCreation-FormInput'></input>

                        <label className='AccountCreation-FormLabel'>EMAIL</label>
                        <input type='email' name='email' placeholder='Used For Sign In *' className='accountCreation-FormInput'></input>

                        <label className='accountCreation-FormLabel'>PASSWORD</label>
                        <input type='password' name='password' className='accountCreation-FormInput'></input>

                        <label className='accountCreation-FormLabel'>CONFIRM PASSWORD</label>
                        <input type='password' name='password confirmation' className='accountCreation-FormInput'></input>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='accountCreation-Form-TermsBox'/>Sign me up to receive email offers and updates
                        </label>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='accountCreation-Form-TermsBox'/>I accept the Specialized Terms & Conditions
                        </label>

                        <label className='SignIn-Form-Terms'>
                            <input type='checkbox' name='remember me' value='true' className='accountCreation-Form-TermsBox'/>I accept the Specialized Terms Of Use
                        </label>

                        <button type='submit' className='accountCreation-FormSubmit'>SUBMIT</button>

                    </form>

                </div>
            </div>
        )
    }
}