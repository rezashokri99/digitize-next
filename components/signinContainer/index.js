import AppbarMobile from 'common/appbarMobile/appbarMobile';
import { useState } from 'react';
import Signin from './signin';
import styles from './signinContainer.module.css';
import Signup from './signup';

const SigninContainer = () => {
    const [showSignup, setShowSignup] = useState(false)
    const [dynamic_padding, setDynamic_padding] = useState(80)

    const showSignupHandler = (bool) => {
        setShowSignup(bool)
    }
    return (
        <div className={`container mx-auto xl:max-w-7xl px-4`} style={dynamic_padding ? { paddingBottom: dynamic_padding + "px" } : ""}>
            {/* app bar im mobile */}
            <AppbarMobile />
            <div className={`${styles.container} ${showSignup ? styles.active : ""}`}>
                <div className={styles.card}></div>
                {/* signin */}
                <Signin styles={styles} />
                {/* signup */}
                <Signup styles={styles} showSignup={showSignup} setDynamic_padding={setDynamic_padding} showSignupHandler={showSignupHandler} />
            </div>
        </div>
    );
}

export default SigninContainer;