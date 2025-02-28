import { Head, Link, usePage } from "@inertiajs/react";
import "../css/home.css";
import Header from "./Header";
import { StoreProvider } from "../store/StoreContext";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import "../css/home.css";

export default function Layout({ title, description, children }) {
    const { url, component, props } = usePage();

    return (
        <StoreProvider>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            <MobileMenu />

            {children}
            <Footer />
        </StoreProvider>
    );
}
