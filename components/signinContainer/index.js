import AppbarMobile from 'common/appbarMobile/appbarMobile';
import { useEffect, useState } from 'react';
import { Edit } from 'react-iconly';
import styles from './signinContainer.module.css';

const SigninContainer = () => {
    // useEffect(() => {
    //     const toggle = document.querySelector(".toggle");
    //     const close = document.querySelector(".close");
    //     toggle.addEventListener("click", () => {
    //         document.querySelector(".container").classList.add("active")
    //     })
    //     close.addEventListener("click", () => {
    //         document.querySelector(".container").classList.remove("active")
    //     })
    // }, [])

    const addActive = () => {
        setActive(true)
    }
    const removeActive = () => {
        setActive(false)
    }
    const [active, setActive] = useState(false)
    return (
        <div className={`container mx-auto xl:max-w-7xl px-4`}>
            {/* app bar im mobile */}
            <AppbarMobile />
            <div className={`${styles.container} ${active ? styles.active : ""}`}>
                <div className={styles.card}></div>
                {/* signin */}
                <div className={styles.card}>
                    <h1 className={styles.title}>ورود</h1>
                    <form>
                        <div className={styles.input_container}>
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">نام کاربری</label>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.input_container}>
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">رمز عبور</label>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.button_container}>
                            <button><span>ورود</span></button>
                        </div>
                        <div className={styles.footer}><a href="#">رمز عبور را فراموش کردید؟</a></div>
                    </form>
                </div>
                {/* signup */}
                <div className={`${styles.card} ${styles.alt}`}>
                    <div onClick={addActive} className={styles.toggle}>
                        <Edit className={styles.toggle_icon} set="bold" primaryColor="white" />
                    </div>
                    <h1 className={styles.title}>ثبت نام
                        <div onClick={removeActive} className={styles.close}></div>
                    </h1>
                    <form>
                        <div className={styles.input_container}>
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">نام کاربری</label>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.input_container}>
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">رمز عبور</label>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.input_container}>
                            <input type="#{type}" id="#{label}" required="required" />
                            <label for="#{label}">تکرار رمز عبور</label>
                            <div className={styles.bar}></div>
                        </div>
                        <div className={styles.button_container}>
                            <button><span>ثبت نام</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SigninContainer;