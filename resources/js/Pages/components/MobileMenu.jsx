import { Link, usePage } from "@inertiajs/react";
import "../css/mobile.css";
import Footer from "./Footer";
import { useStore } from "../store/StoreContext";
import { useEffect, useState } from "react";

export default function MobileMenu() {
    const { component } = usePage();
    const { state, closeMenu } = useStore();

    useEffect(() => {
        if (state.menu) {
            document.querySelector(".MobileMenu").style.visibility = "visible";
        } else {
            document.querySelector(".MobileMenu").style.visibility = "hidden";
        }
    }, [state.menu]);

    return (
        <div
            className={`MobileMenu ${state.menu ? "active" : ""}`}
            onClick={() => closeMenu()}
        >
            <div
                className={`mobileInner ${
                    state.menu ? "slide-in" : "slide-out"
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className="closeMenu">
                        <button onClick={() => closeMenu()}>
                            <svg
                                height="20px"
                                viewBox="0 -960 960 960"
                                width="20px"
                                fill="#000000"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="menuNavLinks">
                        <Link
                            href="/"
                            className={`${
                                component === "Home" ? "active" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/project"
                            className={`${
                                component === "Project" ? "active" : ""
                            }`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/service"
                            className={`${
                                component === "Service" ? "active" : ""
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className={`${
                                component === "Contact" ? "active" : ""
                            }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
