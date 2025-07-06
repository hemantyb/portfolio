"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
	showSearch?: boolean;
	searchQuery?: string;
	setSearchQuery?: (value: string) => void;
}

export default function Layout({
	children,
	showSearch,
	searchQuery,
	setSearchQuery,
}: LayoutProps) {
	const { darkMode, setDarkMode } = useDarkMode();

	return (
		<div
			className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}
		>
			<Header
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				showSearch={showSearch}
			/>
			<main className="container mx-auto px-4 py-8 min-h-screen">
				{children}
			</main>
			<Footer />
		</div>
	);
}
