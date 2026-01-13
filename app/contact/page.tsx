"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "hemantyb22@gmail.com",
			link: "mailto:hemantyb22@gmail.com",
		},
		{
			icon: MapPin,
			title: "Location",
			value: "India",
			link: null,
		},
	];

	const socialLinks = [
		{
			icon: Github,
			name: "GitHub",
			url: "https://github.com/hemantyb",
			color: "hover:text-gray-900 dark:hover:text-white",
		},
		{
			icon: Linkedin,
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/hemantyb/",
			color: "hover:text-blue-600",
		},
		{
			icon: Twitter,
			name: "Twitter",
			url: "https://x.com/hemantyb22",
			color: "hover:text-blue-400",
		},
	];

	return (
		<Layout>
			<motion.div
				className="max-w-6xl mx-auto"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h1
						className="text-4xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						Get In Touch
					</motion.h1>
					<motion.p
						className="text-xl text-muted-foreground max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
					>
						Have a project in mind or just want to chat? I&apos;d love to hear
						from you. Let&apos;s create something amazing together!
					</motion.p>
				</div>

				<div className="flex justify-center">
					{/* Contact Information */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5 }}
					>
						{/* Contact Details */}
						<Card>
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{contactInfo.map((info, index) => (
									<motion.div
										key={info.title}
										className="flex items-center space-x-3"
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 + index * 0.1 }}
									>
										<info.icon className="h-5 w-5 text-primary" />
										<div>
											<p className="font-medium">{info.title}</p>
											{info.link ? (
												<a
													href={info.link}
													className="text-muted-foreground hover:text-primary transition-colors"
												>
													{info.value}
												</a>
											) : (
												<p className="text-muted-foreground">{info.value}</p>
											)}
										</div>
									</motion.div>
								))}
							</CardContent>
						</Card>

						{/* Social Links */}
						<Card>
							<CardHeader>
								<CardTitle>Follow Me</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex space-x-4">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.name}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-muted-foreground transition-colors ${social.color}`}
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.3 + index * 0.1 }}
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
										>
											<social.icon className="h-5 w-5" />
											<span className="sr-only">{social.name}</span>
										</motion.a>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Availability */}
						<Card>
							<CardHeader>
								<CardTitle>Availability</CardTitle>
							</CardHeader>
							<CardContent>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.9 }}
								>
									<div className="flex items-center space-x-2 mb-3">
										<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
										<span className="font-medium text-green-600 dark:text-green-400">
											Available for new projects
										</span>
									</div>
									<p className="text-muted-foreground text-sm">
										I am very interested in collaborations. Typical response
										time is within 24 hours.
									</p>
								</motion.div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</motion.div>
		</Layout>
	);
}
