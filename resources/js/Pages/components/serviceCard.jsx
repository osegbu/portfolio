import { motion } from "framer-motion";

const serviceItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCard = ({ service, isExpanded, toggleService }) => {
    return (
        <motion.li
            onClick={() => toggleService(service.name)}
            className={`serviceItem ${isExpanded ? "expanded" : ""}`}
            variants={serviceItemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="listTitle">{service.name}</div>
            {isExpanded && (
                <div className="description">{service.description}</div>
            )}
        </motion.li>
    );
};

export default ServiceCard;
