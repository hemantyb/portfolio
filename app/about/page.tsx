// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    { name: "Vim", level: 100, icon: Code },
    { name: "Java", level: 90, icon: Code },
    { name: "Spring Boot", level: 88, icon: Code },
    { name: "TypeScript", level: 70, icon: Code },
    { name: "React", level: 95, icon: Code },
    { name: "Next.js", level: 70, icon: Globe },
    { name: "PostgreSQL", level: 80, icon: Database },
    { name: "Go", level: 60, icon: Code },
    { name: "Python", level: 90, icon: Code },
    { name: "MySQL", level: 80, icon: Database },
  ];

  return (
    <Layout>
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-4xl text-white font-bold">HB</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Self-taught software developer with a strong foundation in computer
            science. I started my journey with Linux (I use Arch btw) and Vim,
            and have since progressed to building enterprise-level projects
            using Spring Boot and .NET. I also enjoy working on personal
            projects in Rust and Go. I got into web development to build a site
            & blogs for myself, and along the way became proficient in React,
            with hands-on experience in building projects using Next.js.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/hemantyb">View My Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <skill.icon className="h-8 w-8 text-primary" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personal Touch */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Card className="p-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">What I Love</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge through
              blog posts. I believe in continuous learning and the power of
              community in driving innovation.
            </p>
          </Card>
        </motion.section>
      </motion.div>
    </Layout>
  );
}
