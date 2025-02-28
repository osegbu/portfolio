import { Link, usePage } from "@inertiajs/react";
import "../css/header.css";
import { useStore } from "../store/StoreContext";
import { style } from "framer-motion/client";

export default function Header() {
    const { component } = usePage();
    const { openMenu } = useStore();

    return (
        <div className="header">
            <div>
                <div className="headerInner">
                    <div className="logo">
                        <Link href="/" className="logo">
                            Logo
                        </Link>
                    </div>
                    <div className="navigation">
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

                    <div className="menuBtn">
                        <svg
                            height="24px"
                            width="24px"
                            viewBox="0 -960 960 960"
                            fill="#000000"
                            onClick={() => openMenu()}
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
