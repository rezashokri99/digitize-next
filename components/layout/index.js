import Footer from "./footer";
import Header from "./header";

const Layout = ({ dontShowFooter, children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer dontShowFooter={dontShowFooter} />
        </>
    );
}

export default Layout;