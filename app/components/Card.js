export default function Card({ image, description, url, githubUrl, title }) {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {image && <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="blog" />}
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-center">{title}</h2>
                    <p className="leading-relaxed mb-3">{description}.</p>
                    <div className="flex items-center flex-wrap gap-3 justify-center">
                        <a target="_blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href={url}>View Live</a>
                        <a target="_blank" href={githubUrl}>Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}