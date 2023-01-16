import CartContainer from "components/cartContainer";


const Cart = () => {

    return (
        <CartContainer />
    );
}

export default Cart;

export const getStaticProps = async () => {
    return {
        props: {
            DontShowFooter: true
        }
    }
}