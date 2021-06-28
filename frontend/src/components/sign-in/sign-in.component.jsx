import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.css';

import { googleSignInStart } from '../../redux/user/user.actions';

import googleLogo from '../../assets/google-logo.png';


const SignIn = ({ googleSignInStart }) => {
    return (
        <div className="sign-in-form">
            <button className="google-sign-in" onClick={googleSignInStart}>
                <img src={googleLogo} alt="google-logo" />
                <p>Iniciar Sesión con Google</p>
            </button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);