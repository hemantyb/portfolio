"use client";

import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer className="bg-background border-t border-border py-8 mt-16">
			<div className="container mx-auto px-4 text-center">
				<motion.p
					className="text-muted-foreground"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					© {new Date().getFullYear()} Hemant Baviskar. All rights reserved.
				</motion.p>
			</div>
		</footer>
	);
}
