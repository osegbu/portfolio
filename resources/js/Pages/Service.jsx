import Layout from "./components/Layout";
import ServiceCard from "./components/serviceCard";

export default function Service() {
    const services = [
        {
            name: "Web Development",
            description: (
                <ul>
                    <li>Responsive websites tailored for performance.</li>
                    <li>Scalable web applications for growth.</li>
                    <li>User-friendly designs that enhance engagement.</li>
                </ul>
            ),
        },
        {
            name: "Mobile App Development",
            description: (
                <ul>
                    <li>Cross-platform apps using React Native.</li>
                    <li>Seamless experience across iOS and Android.</li>
                    <li>Optimized performance and smooth interactions.</li>
                </ul>
            ),
        },
        {
            name: "API Development & Integration",
            description: (
                <ul>
                    <li>Secure and scalable API design.</li>
                    <li>Efficient integration of third-party services.</li>
                    <li>Streamlined workflows and automation.</li>
                </ul>
            ),
        },
        {
            name: "UI/UX Design",
            description: (
                <ul>
                    <li>User-focused design for increased engagement.</li>
                    <li>Clean, modern, and intuitive interfaces.</li>
                    <li>Enhancing the user journey with intuitive layouts.</li>
                </ul>
            ),
        },
        {
            name: "Backend Development",
            description: (
                <ul>
                    <li>Server-side logic using Django, Laravel, FastAPI.</li>
                    <li>Scalable and secure backend architectures.</li>
                    <li>Optimized performance for robust systems.</li>
                </ul>
            ),
        },
        {
            name: "CI/CD Automation",
            description: (
                <ul>
                    <li>Automated pipelines using GitHub Actions.</li>
                    <li>Continuous integration and delivery with Docker.</li>
                    <li>Faster releases through Kubernetes automation.</li>
                </ul>
            ),
        },
        {
            name: "Cloud Deployment",
            description: (
                <ul>
                    <li>Cloud deployment solutions with AWS.</li>
                    <li>Efficient scaling using Docker and Kubernetes.</li>
                    <li>Secure cloud management and cost optimization.</li>
                </ul>
            ),
        },
        {
            name: "Consulting & Technical Support",
            description: (
                <ul>
                    <li>Expert guidance on technology stacks.</li>
                    <li>Ongoing support for smooth operations.</li>
                    <li>Best practices in development and architecture.</li>
                </ul>
            ),
        },
        {
            name: "SEO Optimization",
            description: (
                <ul>
                    <li>On-page SEO for increased visibility.</li>
                    <li>Technical SEO improvements for better rankings.</li>
                    <li>Boost traffic and enhance site performance.</li>
                </ul>
            ),
        },
    ];

    return (
        <div className="mainCover">
            <div className="container">
                <h1 className="pageTitle">
                    <span>My Services</span>
                </h1>
                <div className="innerCon">
                    <div className="serviceList main">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                isExpanded={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Service.layout = (page) => (
    <Layout title="Home" description="This is the Blog page.">
        {page}
    </Layout>
);
