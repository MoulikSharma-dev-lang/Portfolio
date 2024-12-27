export default function About() {
    return (
        <main>
            <section id="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Moulik Sharma</h2>
                    <p className="text-xl text-gray-600 mb-6">A passionate web developer focused on building beautiful and functional websites.</p>
                    <div className="max-w-3xl mx-auto text-left space-y-6 text-black">
                        <p>
                            Welcome to my portfolio! I'm a web developer with a strong focus on Full stack development. I have experience building websites and web applications using modern technologies like React.js, Node.js, and MongoDB. I am passionate about creating responsive, user-friendly websites that provide a seamless experience across all devices.
                        </p>
                        <p>
                            I believe that web development is more than just writing code; it’s about crafting meaningful experiences for users. I am always striving to combine aesthetic design with solid functionality to create websites and apps that not only look great but also work seamlessly.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">My Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Front-End</h4>
                            <ul className="list-none pl-6 text-gray-600">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript (ES6+)</li>
                                <li>React.js</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Back-End</h4>
                            <ul className="list-none pl-6 text-gray-600">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Other Tools</h4>
                            <ul className="list-none pl-6 text-gray-600">
                                <li>Git & GitHub</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">My Approach</h3>
                    <div className="max-w-3xl mx-auto text-left space-y-6 text-black">
                        <p>
                            When working on a project, my goal is to always understand the problem from the client’s perspective and build a solution that exceeds expectations. I take pride in the quality of my code, and I strive to maintain the balance between clean, scalable code and creative, innovative design.
                        </p>
                        <ol className="list-decimal pl-6 space-y-4 text-gray-600">
                            <li><strong>Research:</strong> Understand the user’s needs and project goals.</li>
                            <li><strong>Design:</strong> Translate ideas into responsive, user-friendly designs.</li>
                            <li><strong>Development:</strong> Build high-performance, secure applications.</li>
                            <li><strong>Testing & Iteration:</strong> Test thoroughly and refine the product.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    )
}