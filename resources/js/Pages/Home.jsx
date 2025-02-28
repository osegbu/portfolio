import HeroComponent from "./components/HeroComponent";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { useStore } from "./store/StoreContext";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

export default function Home() {
    const { state, closeMenu } = useStore();

    return (
        <div className="mainCover">
            <div className="container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    <HeroComponent />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <Services />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <Projects />
                </motion.div>
            </div>
        </div>
    );
}

Home.layout = (page) => (
    <Layout title="Home" description="This is the Home page.">
        {page}
    </Layout>
);
