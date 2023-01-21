import { useEffect, useRef } from "react"

export default function About() {
    const imgRef = useRef()
    const titleRef = useRef()

    const parallax = e => {
        if (imgRef && titleRef) {
            const y = (e.clientY * -1) / 100
            const x = (e.clientX * -1) / 100
            titleRef.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', parallax, false)
        return () => {
            window.removeEventListener('mousemove', parallax, false)
        }
    }, [])

    return (
        <section id="about" className="my-16 w-full flex items-center justify-center">
            <div className="max-w-7xl text-white z-[9999]">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start overflow-hidden">
                    <div className="order-1 md:order-2 ">
                        <h1 ref={titleRef} className="text-center font-home p-6 md:p-12 pt-0 px-2 text-4xl sm:text-6xl font-bold">ABOUT ME</h1>
                        <p className="px-4 sm:px-16 pb-8 font-bold">
                        I am writing to express my passion for development and my eagerness to learn new things. 
                        I am fascinated by how computers and the Internet work, and I am excited about the opportunity 
                        to connect people via widely available devices.
                        </p>

                        <p className="px-4 sm:px-16 pb-8 font-bold">
                        I am a highly motivated developer who is constantly seeking to expand my knowledge and skills. 
                        I am particularly interested in the inner workings of computers and the Internet, and I am always 
                        looking for new and innovative ways to use technology to solve problems.
                        </p>

                        <p className="px-4 sm:px-16 pb-8 font-bold">
                        In addition to my technical skills, I am also a quick learner and a team player. 
                        I am able to work well under pressure and I am always willing to go the extra mile to ensure 
                        that a project is completed on time and to the highest standard.
                        </p>

                        <p className="px-4 sm:px-16 pb-8 font-bold">
                        I am currently seeking employment and I would be honored to have the opportunity to work with your team. 
                        I am confident that my passion for development and my eagerness to learn new things would make me a valuable 
                        asset to any organization.
                        </p>

                        <p className="px-4 sm:px-16 pb-8 font-bold">
                        Thank you for considering my application. I look forward to the opportunity to discuss my qualifications 
                        further and to learn more about the opportunities available at your company.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}