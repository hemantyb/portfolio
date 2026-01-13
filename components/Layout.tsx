"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Footer from "./Footer";
import type React from "react";
import FloatingHeader from "./FloatingHeader";

interface LayoutProps {
	children: React.ReactNode;
	showSearch?: boolean;
	searchQuery?: string;
	setSearchQuery?: (value: string) => void;
}

export default function Layout({ children }: LayoutProps) {
	const { darkMode, setDarkMode } = useDarkMode();

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}
		>
			<FloatingHeader darkMode={darkMode} setDarkMode={setDarkMode} />
			<main className="container mx-auto px-4 py-8 mt-20 min-h-screen">
				{children}
			</main>
			<Footer />
		</div>
	);
}
