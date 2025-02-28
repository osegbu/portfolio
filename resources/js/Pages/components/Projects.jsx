import { Link, usePage } from "@inertiajs/react";
import "../css/project.css";
import ProjectCard from "./projectCard";
import projects from "../data/projects.json";

export default function Projects() {
    const { component } = usePage();
    return (
        <div className="projects">
            <div className="innerProject">
                <div className="topPart">
                    <div className="titleName">Projects</div>
                    <div className="thickBorder"></div>
                </div>

                <div className="projectList">
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
    );
}
