import { Edit } from "react-iconly";
import * as yup from "yup";
import InputTemplate from "common/formsUtils/InputTemplate";
import { useFormik } from "formik";
import { useEffect } from "react";
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';
import { toast } from "react-hot-toast";




const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
};

const validationSchema = yup.object({
    fullName: yup
        .string()
        .required("فیلد نام و نام خانواگی الزامی می باشد.")
        .min(4, "نام و نام خانوادگی باید حداقل 4 کارکتر باشد."),
    email: yup
        .string()
        .email("فرمت وارد شده برای ایمیل صحیح نمی باشد.")
        .required("فیلد ایمیل الزامی می باشد"),
    phoneNumber: yup.number().required("فیلد شماره همراه الزامی می باشد"),
    password: yup.string().required("فیلد رمز عبور الزامی می باشد").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "رمز عبور باید بیشتر از 8 کاراکتر و دارای حروف بزرگ و کوچک و عدد باشد."
    ),
    confirmPassword: yup
        .string()
        .required("فیلد تکرار رمز عبور الزامی می باشد")
        .oneOf(
            [yup.ref("password"), null],
            "تکرار رمز عبور با رمز عبور مطابقات ندارد"
        ),
});


const Signup = ({ styles, showSignupHandler, setDynamic_padding, showSignup }) => {


    const onSubmit = (values) => {
        toast.success('Here is your toast.')
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
        validateOnMount: true,
    });


    // change padding size when show errors
    useEffect(() => {
        const errors = Object.keys(formik.errors)
        const touched = Object.keys(formik.touched)
        let padding = 80;
        errors.map((error) => {
            touched.map((touch) => {
                if (error === touch) {
                    padding += 30;
                    setDynamic_padding(padding)
                }
            })
        })
    }, [formik.errors, formik.touched])


    return (
        <div className={`${styles.card} ${styles.alt}`}>
            <Tippy followCursor={true} plugins={[followCursor]} content={showSignup ? "" :<p className="bg-gray-600 text-white rounded-md py-2 px-3">ثبت نام</p>}>
                <div onClick={() => showSignupHandler(true)} className={styles.toggle}>
                    <Edit className={styles.toggle_icon} set="bold" primaryColor="white" />
                </div>
            </Tippy>
            <h1 className={styles.title}>ثبت نام
                <div onClick={() => showSignupHandler(false)} className={styles.close}></div>
            </h1>
            <form onSubmit={formik.handleSubmit}>
                <InputTemplate
                    styles={styles}
                    formik={formik}
                    label="نام کاربری"
                    name="fullName"
                />
                <InputTemplate
                    styles={styles}
                    formik={formik}
                    label="شماره همراه"
                    name="phoneNumber"
                    type="number"
                />
                <InputTemplate
                    styles={styles}
                    formik={formik}
                    label="ایمیل"
                    name="email"
                />
                <InputTemplate
                    styles={styles}
                    formik={formik}
                    label="رمز عبور"
                    name="password"
                    type="password"
                />
                <InputTemplate
                    styles={styles}
                    formik={formik}
                    label="تکرار رمز عبور"
                    name="confirmPassword"
                    type="password"
                />
                <div className={styles.button_container}>
                    <button
                        className={`rounded ${formik.isValid ?
                            "cursor-pointer text-orange-500 hover:ring hover:ring-orange-700 hover:ring-offset-2 hover:ring-offset-orange-600" :
                            "hover:bg-transparent text-gray-400"
                            }`}
                        disabled={!formik.isValid}
                        type="submit"
                    >ثبت نام</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;