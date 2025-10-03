import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'Admin-Controlled E-Commerce Dashboard',
      description: 'Developed a full-stack eCommerce platform with real-time analytics for products, users, and revenue, improving business transparency. Built scalable RESTful APIs with MongoDB and Redux, enhancing CRUD efficiency and product filtering.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux ', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Student Feedback Management System',
      description: 'Built a secure survey platform with Spring Boot and MySQL to manage student feedback efficiently. Designed Angular dashboards with advanced validation, reducing administrative errors and streamlining workflows.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      tech: ['Angular', 'MySql', 'TypeScript', 'Spring Boot', 'Java', 'HTML', 'Bootstrap'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'PWA'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Comprehensive analytics platform for social media insights with beautiful data visualizations.',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
    //   tech: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    //   github: 'https://github.com',
    //   demo: 'https://demo.com'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with 
            cutting-edge technologies and best practices.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-0`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start sm:items-center justify-between mb-4 flex-col sm:flex-row gap-2 sm:gap-0">
                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass-card text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      className="hero-gradient text-white hover:scale-105 transition-transform w-full sm:w-auto"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card border-primary/30 hover:border-primary w-full sm:w-auto"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="text-sm">Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;