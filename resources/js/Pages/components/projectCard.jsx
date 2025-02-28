import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import "../css/project_card.css";

export default function ProjectCard({ project }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [project.images.length]);

    return (
        <>
            <motion.div
                className="singleProject"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                onClick={openModal}
            >
                <div className="projectImg">
                    <AnimatePresence>
                        <motion.img
                            key={project.images[currentImageIndex]}
                            src={project.images[currentImageIndex]}
                            alt="Project Image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                </div>
                <div className="bodyDiv">
                    <h1 className="projectTitle">{project.title}</h1>
                    <div className="projectDescription">
                        {project.description}
                    </div>
                </div>
            </motion.div>

            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}
