import Layout from "./components/Layout";
import "./css/contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        contact_number: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true

        const templateParams = {
            from_name: formData.fullname,
            to_name: "Obinna Osegbu",
            message: formData.message,
            contact_number: formData.contact_number,
            email: formData.email,
        };

        axios
            .post("https://api.emailjs.com/api/v1.0/email/send", {
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: "template_oq4f8qv",
                user_id: process.env.EMAILJS_USER_ID,
                template_params: templateParams,
            })
            .then((response) => {
                alert("Message sent successfully!");
                setFormData({
                    fullname: "",
                    email: "",
                    contact_number: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false after completion
            });
    };

    return (
        <div className="mainCover">
            <div className="container">
                <h1 className="pageTitle">Contact Me</h1>
                <div className="innerCon">
                    <div className="contactCover">
                        <section>
                            <motion.div
                                className="intro"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div>
                                    Have a project in mind or need some help
                                    with your website, mobile app, or digital
                                    strategy? I&#39;d love to hear from you!
                                    Whether you have a quick question or want to
                                    explore a new collaboration, feel free to
                                    reach out using the form below or any of the
                                    contact options provided.
                                </div>
                            </motion.div>

                            <motion.div
                                className="contactDetails"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <h4>Get in Touch</h4>
                                <div>
                                    <li>
                                        <span>
                                            <b>Phone:</b>{" "}
                                        </span>
                                        <a href="tel:+2347034517747">
                                            +234 703 451 7747
                                        </a>
                                    </li>
                                    <li>
                                        <span>
                                            <b>Email:</b>{" "}
                                        </span>
                                        <a href="mailto:valentineosegbu@gmail.com">
                                            valentineosegbu@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <span>
                                            <b>Address:</b>{" "}
                                        </span>
                                        <span>
                                            No. 3 Egbu Road, Shoprite, Owerri,
                                            Imo State.
                                        </span>
                                    </li>
                                </div>
                            </motion.div>

                            <motion.div
                                className="letsWorkTogether"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <h4>Let&#39;s Work Together</h4>
                                <div>
                                    I&#39;m always open to new opportunities and
                                    challenges. If you&#39;re ready to start a
                                    project, have a question, or need advice,
                                    don&#39;t hesitate to reach out. I look
                                    forward to connecting with you!
                                </div>
                            </motion.div>
                        </section>

                        <motion.div
                            className="howIHelp"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <h4>Send a Quick Mail</h4>
                            <p>
                                We respond in less than 24 hours. Let&#39;s
                                discuss your project.
                            </p>
                            <form onSubmit={sendEmail}>
                                <input
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    name="contact_number"
                                    placeholder="Contact Number"
                                    value={formData.contact_number}
                                    onChange={handleInputChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>

                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? (
                                        <i className="loading-icon"></i>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Contact.layout = (page) => (
    <Layout
        title="Contact"
        description="Get in touch with me to start your project."
    >
        {page}
    </Layout>
);
