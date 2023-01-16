
const Signin = ({styles}) => {
    return (
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
    );
}

export default Signin;