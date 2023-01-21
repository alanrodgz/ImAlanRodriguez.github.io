import SkillsItem from '../main/skills/SkillsItem'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer } from 'react-icons/si'

const techs = [
    {
        name: 'NEXTJS',
        Icon: SiNextdotjs,
        color: 'black'
    },
    {
        name: 'TAILWINDCSS',
        Icon: SiTailwindcss,
        color: 'black'
    },
    {
        name: 'THREEJS',
        Icon: SiThreedotjs,
        color: 'black'
    },
    {
        name: 'MOTION',
        Icon: SiFramer,
        color: 'black'
    }
]

export default function Footer() {
    return (
        <footer className="relative bg-white w-full">
            <div className="flex flex-col items-center z-[9999] pb-2 sm:pb-2 p-2 sm:p-8 relative bg-gray-100 w-full">
                <div className="w-full justify-center items-center max-w-7xl flex flex-col p-2 sm:p-8">
                    <h1 className="text-3xl font-bold text-center">How this website was built</h1>
                    <div className="flex flex-col flex-wrap max-w-5xl font-semibold p-2 pt-8 pb-8">
                        <p>The following technologies were used to create this website:</p>
                        <div className="flex flex-wrap flew-col justify-center">
                            {techs.map((tech, index) => <SkillsItem key={index} name={tech.name} Icon={tech.Icon} color={tech.color} />)}
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center border-t-[1px] border-black">
                    <p className="p-2 pt-3 text-xs text-bold">Alan</p>
                </div>
            </div>
        </footer>
    )
}