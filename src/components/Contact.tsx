import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Send, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ramenavenkata@gmail.com',
      href: 'mailto:ramenavenkata@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (609) 783-9178',
      href: 'tel:+1609-783-9178'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fairfax, VA, USA',
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </motion.p>
        </motion.div>

        {/* Commented out Send me a message section */}
        {/* 
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 justify-center lg:justify-start">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Send me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-2 glass-card border-primary/20 focus:border-primary"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="mt-2 glass-card border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="mt-2 glass-card border-primary/20 focus:border-primary min-h-32"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hero-gradient text-white py-2.5 sm:py-3 text-base sm:text-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        */}

        {/* Contact Section - Two Column Layout */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
              
              {/* Left Side - Let's Connect */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl text-center w-full h-full flex flex-col justify-center">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
                    Let's <span className="gradient-text">Connect</span>
                  </h4>
                  <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                    I'm always interested in hearing about new opportunities and 
                    exciting projects. Don't hesitate to reach out!
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 sm:space-x-6">
                    <motion.a
                      href="mailto:ramenavenkata@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="glass-card border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14"
                      >
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/venakataramena/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="glass-card border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14"
                      >
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Information */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
                className="flex flex-col justify-center h-full"
              >
                <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-center">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex-1"
                    >
                      <a href={info.href} className="flex items-center h-full">
                        <div className="p-3 sm:p-4 bg-primary/10 rounded-lg sm:rounded-xl mr-4 sm:mr-6 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base sm:text-lg mb-1">{info.label}</h4>
                          <p className="text-muted-foreground text-sm sm:text-base break-all">{info.value}</p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;