import React, { useState } from 'react';
import { UserSignUp } from './user-sign-up';
import { FarmSignUp } from './farm-sign-up';

const SignUp = () => {
    const [isInitialPage, setIsInitialPage] = useState(true);
    const [isFarm, setIsFarm] = useState(false);

    if (isInitialPage) {
        return (
            <div>
                <span>I am a...</span>
                <button onClick={() => {
                    setIsInitialPage(false);
                    setIsFarm(true);
                }}>Farmer</button>
                <button onClick={() => {
                    setIsInitialPage(false);
                }}>Farm enthusiast</button>
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