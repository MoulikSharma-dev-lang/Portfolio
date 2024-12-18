export default function Card({ image, description, url, githubUrl }) {
    return (
        <div className="border-2 border-white w-80 rounded-lg text-center">
            <img src={image} alt="Image" className="rounded-sm" height={217} width={350} />
            <p className="text-center">{description}</p>
            <a href={url} target="_blank"><button className="text-white my-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View live</button></a>
            <a href={githubUrl} target="_blank"><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">View GitHub</button></a>
        </div>
    )
}