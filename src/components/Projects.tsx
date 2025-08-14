import { Button } from "@/components/ui/enhanced-button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard Vuestic",
      description: "A modern admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      tech: ["Vue", "TypeScript", "Javascript", "SCSS"],
      image: "https://i.ibb.co/JwFFhchX/H-nh-nh-PNG.png",
      github: "https://github.com/ontopcommunity/vuestic-admin",
      live: "https://vuestic-admin-one.vercel.app"
    },
    {
      title: "Telegram Group Management Bot",
      description: " Powerful Assistant to help you manage Telegram groups .",
      tech: ["Python", "MongoDB"],
      image: "https://i.ibb.co/yByXBMJs/IMG-8812.jpg",
      github: "https://github.com/ontopcommunity/Ruby",
      live: "https://t.me/tiensi_teo_bot"
    },
    {
      title: "Portfolio",
      description: "A responsive portfolio website showcasing modern web development techniques and beautiful animations.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "https://i.ibb.co/3yB0TVDP/IMG-8810.png",
      github: "https://github.com/ontopcommunity/visage-vue-forge",
      live: "https://visage-vue-forge.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-glass border border-glass rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted/30 rounded border border-muted/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
