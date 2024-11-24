const Projects = () => {
    const Data = [
      { id: 1, name: "Static Resume Builder", description: "HTML, CSS, TypeScript", image: "/image/ssrb.png", href: "https://milestones1to2-delta.vercel.app/" },
      { id: 2, name: "Dynamic Resume Builder", description: "HTML, CSS, TypeScript", image: "/image/drb.png", href: "https://milestones-3-nine-henna.vercel.app/" },
      { id: 3, name: "CLI Calculator", description: "Inquirer, TypeScript, JavaScript", image: "/image/cli.png", href: "https://cli-calculator-ochre.vercel.app/?vercelToolbarCode=4eQPPxJXMWqOkii" },
      { id: 4, name: "Multi Page Website", description: "Next.js, TailwindCSS", image: "/image/mweb.png", href: "https://multiweb-tailwind.vercel.app/" },
      {id: 2, name: " Shareable Resume Builder", description: "HTML, CSS, TypeScript", image: "/image/srb.png", href: "https://milestone5-seven-smoky.vercel.app/" }, 
    ];
  
    return (
      <div>
        <div>
          <h1 className="text-center text-4xl sm:text-5xl p-4 sm:p-6">PROJECTS</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
          {Data.map((project) => (
            <div key={project.id} className="bg-white p-5 rounded-md shadow-md text-center">
              <img
                src={project.image}
                alt={project.name}
                className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
              />
              <h3 className="mt-4 text-2xl font-bold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  className="text-gray-500 underline mt-4 inline-block"
                > Visit Project</a>
              ) : (
                <p className="text-gray-500 mt-4">Link unavailable</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  