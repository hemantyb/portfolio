"use client";

import { useEffect, useState } from "react";

export function useDarkMode() {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.setAttribute("data-theme", "light");
		}
	}, [darkMode]);

	return { darkMode, setDarkMode };
}
