import React, { useState } from 'react';
import { UserSignUp } from './user-sign-up';
import { FarmSignUp } from './farm-sign-up';

const SignUp = () => {
    const [isInitialPage, setIsInitialPage] = useState(true);
    const [isFarm, setIsFarm] = useState(false);

    if (isInitialPage) {
        return (
            <div className = "signUpText">
                <span className = "signUpText2">I am a...</span>
                <div className = "container">
                    <div className = "buttons">
                        <button className = "signUpButton farmerButton" onClick={() => {
                        setIsInitialPage(false);
                        setIsFarm(true);
                    }}>Farmer</button>
                    <button className = "signUpButton enthusiastButton" onClick={() => {
                        setIsInitialPage(false);
                    }}>Farm enthusiast</button>
                    </div>
                </div>
            </div>
        )
    } else if (isFarm) {
        return (
            <div>
                <FarmSignUp/>
            </div>
        )
    } else {
        return (
            <div>
                <UserSignUp/>
            </div>
        )
    }
}

export default SignUp;