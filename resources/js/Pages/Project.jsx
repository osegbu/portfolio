import Layout from "./components/Layout";
import ProjectCard from "./components/projectCard";
import projects from "./data/projects.json";

export default function Project() {
    return (
        <div className="mainCover">
            <div className="container">
                <h1 className="pageTitle">
                    <span>My Projects</span>
                </h1>
                <div className="innerCon">
                    <div className="projectList main">
                        {projects.map((project) => {
                            return (
                                <ProjectCard
                                    project={project}
                                    key={project.title}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

Project.layout = (page) => (
    <Layout title="Home" description="This is the Project page.">
        {page}
    </Layout>
);
