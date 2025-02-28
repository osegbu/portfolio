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
                        I am a ...
                        <br />
                        FullStack Web Developer, Mobile App Developer, DevOps
                        Engineer.
                    </motion.h2>
                    <motion.div className="skills" variants={slideUpVariants}>
                        Skilled in building seamless web and mobile applications
                        using React, Next.js, and React Native. Proficient in
                        frameworks like FastAPI, Django, Laravel with
                        Inertia.js, and tools like SQL Databases, Docker,
                        Kubernetes, AWS, and Linux, ensuring efficient, scalable
                        infrastructure.
                    </motion.div>
                    <motion.div
                        className="letsTalk"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={slideUpVariants}
                    >
                        <Link href="" as="button">
                            Let's Talk
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#FFFFFF"
                                initial={{ rotate: 180 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </motion.svg>
                        </Link>
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
