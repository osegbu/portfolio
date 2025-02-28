import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import "../css/hero.css";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Stagger time between animations
        },
    },
};

const slideUpVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HeroComponent(props) {
    const { component } = usePage();

    return (
        <motion.div
            className="heroCover"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div>
                <motion.div className="skillCover" variants={containerVariants}>
                    <motion.h1 variants={slideUpVariants}>
                        Hi, I am Obinna Osegbu
                    </motion.h1>
                    <motion.h2 variants={slideUpVariants}>
                        I am a FullStack Developer, Mobile App Developer, and
                        DevOps Engineer.
                    </motion.h2>
                    <motion.div className="skills" variants={slideUpVariants}>
                        Experienced in building scalable and high-performance
                        web and mobile applications using modern technologies
                        such as React, Next.js, and React Native. Proficient
                        with backend frameworks like FastAPI, Django, and
                        Laravel (with Inertia.js). Skilled in cloud
                        infrastructure, CI/CD, and containerization tools
                        including Docker, Kubernetes, AWS, and Linux, ensuring
                        robust and reliable development pipelines.
                    </motion.div>
                    <motion.div
                        className="letsTalk"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={slideUpVariants}
                    >
                        <a
                            href="/Obinna_Osegbu.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open CV
                        </a>
                    </motion.div>
                </motion.div>

                <div className="heroImage">
                    <div className="image">
                        <img src="/images/large.png" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
