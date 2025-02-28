import { useState } from "react";
import { motion } from "framer-motion";
import "../css/services.css";
import ServiceCard from "./serviceCard";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.2 },
    },
};

export default function Services() {
    const [expandedService, setExpandedService] = useState(null);

    const services = [
        {
            name: "Web Development",
            description:
                "Building responsive, high-performance websites and web applications that are user-friendly and scalable.",
        },
        {
            name: "Mobile App Development",
            description:
                "Creating cross-platform mobile apps using React Native that deliver a seamless user experience across iOS and Android.",
        },
        {
            name: "API Development & Integration",
            description:
                "Developing secure, scalable APIs and integrating third-party services to streamline workflows and connect systems efficiently.",
        },
        {
            name: "UI/UX Design",
            description:
                "Designing intuitive, modern, and user-centered interfaces that enhance user engagement and retention.",
        },
        {
            name: "Backend Development",
            description:
                "Building powerful backend systems using Django, Laravel, or FastAPI. Specializing in server-side logic, and scalable architectures.",
        },
        {
            name: "CI/CD Automation",
            description:
                "Automating development and deployment pipelines using GitHub Actions, GitHub, Docker, and Kubernetes for faster release cycles.",
        },
        {
            name: "Cloud Deployment",
            description:
                "Offering cloud deployment solutions using AWS, Docker, and Kubernetes to help businesses scale securely and efficiently.",
        },
        {
            name: "Consulting & Technical Support",
            description:
                "Providing expert consulting on technology stacks and best practices, along with ongoing technical support for smooth operations.",
        },
        {
            name: "SEO Optimization",
            description:
                "Implementing on-page and technical SEO to improve search engine visibility, increase traffic, and enhance overall site performance.",
        },
    ];

    const toggleService = (serviceName) => {
        setExpandedService(
            expandedService === serviceName ? null : serviceName
        );
    };

    return (
        <motion.div
            className="serviceCon"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="innerServices">
                <div>
                    <div className="topPart">
                        <div className="titleName">Services</div>
                        <div className="thickBorder"></div>
                    </div>

                    <motion.div
                        className="serviceList"
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                isExpanded={expandedService === service.name}
                                toggleService={toggleService}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
