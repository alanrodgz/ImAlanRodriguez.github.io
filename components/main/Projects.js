import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"
import ProjectsTitle from "./projects/ProjectsTitle"

const projects = [
    {
        link: 'https://www.google.com/?',
        color: '#1ed760',
        title: "Squabe Runner",
        description: "I have created a 2D game for the App Store using Xcode, the Swift programming language, and Sprite nodes.",
        techs: [
            'Swift',
            'SpriteNodes',
        ],
        gitLink: 'https://github.com/',
        bgPath: '/app.jpg'
    },
]

export default function Projects() {
    const md = useMediaQuery(768)

    return (
        <section id="projects" className="flex justify-center items-center w-full mt-8">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden">
                <ProjectsTitle />
                {projects.map((project, index) => <ProjectItem 
                    key={index}
                    link={project.link}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    gitLink={project.gitLink}
                    bgPath={project.bgPath}
                    index={index}
                    md={md}
                />)}
            </div>
        </section>
    )
}