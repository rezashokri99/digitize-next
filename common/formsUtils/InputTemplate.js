import { Danger } from "react-iconly";

const InputTemplate = ({ styles, formik, label, name, type = "text" }) => {
    return (
        <div className="mb-6">
            <div className={styles.input_container}>
                <input  {...formik.getFieldProps(name)} type={type} id={`#${label}`} required />
                <label htmlFor={`#${label}`}>{label}</label>
                <div className={styles.bar}></div>
            </div>
            {
                formik.errors[name] && formik.touched[name] && (
                    <p className={`${styles.error_message} relative flex items-end text-gray-100 mb-1 text-xs text-right font-semibold`}>
                        <Danger className="w-5 h-5 ml-1" set="bold" primaryColor="#e5e7eb" />{formik.errors[name]}
                    </p>
                )
            }
        </div>

    );
}

export default InputTemplate;