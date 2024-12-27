import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <section className="text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Moulik Sharma</h1>
          <p className="text-xl mb-8">A passionate web developer who loves creating intuitive and beautiful user experiences.</p>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-2xl font-bold text-center">My Projects: </h2>
        <article className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <Card title={"Problogger"} image={"/problogger.png"} description={"A platform where users can create, view and delete blogs!"} url={"https://pro-blogger-six.vercel.app"} githubUrl={"https://github.com/MoulikSharma-dev-lang/ProBlogger"} />
              <Card title={"Bitlinks"} image={"/bitlinks.png"} description={"A platform where users can create short urls for their work . No authentication required!"} url={"https://bitlinks-4jem.onrender.com/"} githubUrl={"https://github.com/MoulikSharma-dev-lang/BitLinks"} />
              <Card image={"/linktree.png"} title={"Linktree Clone"} description={"A very basic linktree clone with normal features!"} url={"https://linktree-six-chi.vercel.app"} githubUrl={"https://github.com/MoulikSharma-dev-lang/Linktree-Clone"} />
            </div>
          </div>
        </article>
      </section>
    </main >
  );
}