import { Card, CardContent } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Ritik Awachat
        </motion.h1>
        <p className="text-xl text-gray-600">Shopify App Developer | Full Stack Developer</p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:ritikawachat@gmail.com"><Mail /></a>
          <a href="https://github.com/ritikawachat" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/ritikawachat" target="_blank"><Linkedin /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a Full Stack Developer based in Nagpur, Maharashtra, with professional experience in building Shopify apps using React.js, Node.js, and GraphQL. At OSCprofessionals, I’ve developed several impactful apps like OSCP Pricing & Discount Suite and OSCP Wholesale that helped merchants optimize their stores.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6">Shopify Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">OSCP Pricing & Discount Suite</h3>
              <p>
                Built a scalable discount engine for Shopify merchants with flexible rules and dynamic pricing features. Integrated Shopify Admin APIs and ensured a responsive UI using React.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">OSCP Add-On Tier Pricing</h3>
              <p>
                Designed a tiered pricing logic for wholesale merchants. Optimized backend processes using Node.js and Express with seamless frontend UX in React.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-x-4">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>GraphQL & REST APIs</li>
          <li>Shopify App Development</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">Feel free to reach out if you'd like to collaborate or have a project in mind.</p>
        <Button asChild>
          <a href="mailto:ritikawachat@gmail.com">Send Email</a>
        </Button>
      </section>
    </div>
  );
}
