import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <header className="text-center my-3">
        <h1 className="text-4xl font-bold">Moulik Sharma</h1>
        <br />
        <br />
        <p className="text-center font-bold">An aspiring web developer with a passion for becoming a full-stack developer . I am 13 year old</p>
        <br />
        <div className="social-links text-center">
          <a href="https://github.com/MoulikSharma-dev-lang" target="_blank"><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Github</button></a>
        </div>
      </header>
      <hr />
      <main>
        <h2 className="text-2xl font-bold text-center">My Projects: </h2>
        <br />
        <section className="projects flex justify-around gap-3 overflow-hidden">
          <Card image={"/problogger.png"} description={"A platform where users can create an account and create, view and delete blogs!"} url={"https://pro-blogger-six.vercel.app"} githubUrl={"https://github.com/MoulikSharma-dev-lang/ProBlogger"} />
          <Card image={"/bitlinks.png"} description={"A platform where users can create short URL for their work. No authentication required!"} url={"https://bitlinks-4jem.onrender.com"} githubUrl={"https://github.com/MoulikSharma-dev-lang/BitLinks"} />
          <Card image={"/problogger.png"} description={"A platform where users can create an account and create, view and delete blogs!"} url={"https://pro-blogger-six.vercel.app"} githubUrl={"https://github.com/MoulikSharma-dev-lang/ProBlogger"}  />
        </section>
      </main>
    </>
  );
}