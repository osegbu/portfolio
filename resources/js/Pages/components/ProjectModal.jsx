import { motion } from "framer-motion";
import { useEffect } from "react";
import "../css/modal.css";

export default function ProjectModal({ project, isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modalOverlay" onClick={onClose}>
            <motion.div
                className="modalContent"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modalHeader">
                    <h1>{project.title}</h1>
                    <button className="closeButton" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modalBody">
                    <p className="modalDescription">{project.description}</p>
                    <div className="featureList">
                        <h3>Features</h3>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </div>

                    <div className="techList">
                        <h3>Technologies Used</h3>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </div>
                    <h3>Links</h3>
                    <div className="links">
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub Repository
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
