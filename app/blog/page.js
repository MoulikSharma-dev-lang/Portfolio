import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    const dateString = "2024-12-26"
    return (
        <main>
            <h1 className="text-4xl font-bold text-center">My Blogs</h1>
            <section className="flex flex-wrap justify-center gap-4 py-3">
                <Link className="p-4 md:w-1/4" href={"/blogpost/how-to-learn-js"}>
                    <div className="">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={"/problogger.png"} width={600} height={300} alt="image" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center">Mastering JavaScript: A Comprehensive Guide for Beginners</h2>
                                <p className="leading-relaxed mb-3">JavaScript is one of the most widely used programming languages in web development. It is the backbone of interactivity on the web, powering everything from form validation ...</p>
                                <div className="flex gap-4">
                                    <span className="italic">Moulik</span>
                                    <span>{dateString}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blogpost/how-to-learn-react"} className="p-4 md:w-1/4">
                    <div className="">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={"/problogger.png"} width={600} height={300} alt="image" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center">Mastering React: A Comprehensive Guide for Beginners</h2>
                                <p className="leading-relaxed mb-3">React is a popular JavaScript library for building user interfaces. It's known for its component-based architecture, virtual DOM, and efficient rendering.It's created by Facebook and ...</p>
                                <div className="flex gap-4">
                                    <span className="italic">Moulik</span>
                                    <span>{dateString}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blogpost/how-to-learn-node"} className="p-4 md:w-1/4">
                    <div className="">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={"/problogger.png"} width={600} height={300} alt="image" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center">Mastering Node.js: A Comprehensive Guide for Beginners</h2>
                                <p className="leading-relaxed mb-3">Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem ...</p>
                                <div className="flex gap-4">
                                    <span className="italic">Moulik</span>
                                    <span>{dateString}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/blogpost/how-to-learn-express"} className="p-4 md:w-1/4">
                    <div className="">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={"/problogger.png"} width={600} height={300} alt="image" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center">Mastering Express: A Comprehensive Guide for Beginners</h2>
                                <p className="leading-relaxed mb-3">Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to make the process of building ...</p>
                                <div className="flex gap-4">
                                    <span className="italic">Moulik</span>
                                    <span>{dateString}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </main>
    )
}