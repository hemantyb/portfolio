import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X, Home, User, Briefcase, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
}

const FloatingHeader = ({ darkMode, setDarkMode }: HeaderProps) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const navItem = [
		{ name: "Portfolio", href: "/", icon: Home },
		{ name: "Blog", href: "/blog", icon: Briefcase },
		{ name: "About", href: "/about", icon: User },
		{ name: "Contact", href: "/contact", icon: Mail },
	];

	const isActive = (href: string) => {
		if (href === "/" && pathname === "/") return true;
		if (href === "/" && pathname.startsWith(href)) return true;
		return false;
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ type: "spring", damping: 10, stiffness: 100 }}
				className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-xl backdrop-blur-lg ${
					darkMode ? "" : ""
				} shadow-lg border ${darkMode ? "" : ""}`}
			>
				<div className="px-4 sm:px-6">
					<div className="flex justify-between h-16 items-center">
						<div className="flex items-center">
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="text-xl font-bold"
							>
								<Link
									href="/"
									className="text-2xl font-bold hover:text-primary transition-colors"
								>
									Hemant B.
								</Link>
							</motion.h1>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-4">
							<motion.button
								onClick={() => setDarkMode(!darkMode)}
								className="p-2 rounded-full hover:bg-green-200 dark:hover:bg-gray-700"
							>
								{darkMode ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</motion.button>
							<nav>
								<ul className="flex space-x-6 gap-3">
									{navItem.map((item) => (
										<motion.li key={item.name} whileHover={{ scale: 1.05 }}>
											<Link
												href={item.href}
												className={`hover:text-primary transition-colors flex items-center ${
													isActive(item.href)
														? "text-primary font-semibold"
														: ""
												}`}
											>
												<item.icon className="w-5 h-5 mr-3" />
												{item.name}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden flex items-center space-x-4">
							<motion.button
								onClick={() => setDarkMode(!darkMode)}
								className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								{darkMode ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</motion.button>
							<motion.button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
								aria-expanded="false"
								aria-label="Toggle navigation menu"
							>
								<span className="sr-only">Open main menu</span>
								{mobileMenuOpen ? (
									<X className="block h-6 w-6" aria-hidden="true" />
								) : (
									<Menu className="block h-6 w-6" aria-hidden="true" />
								)}
							</motion.button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					ref={menuRef}
					className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="px-2 pt-2 pb-4 space-y-1 sm:px-4">
						{navItem.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="px-4 py-3 rounded-lg text-base font-medium flex items-center transition-colors hover:text-primary"
								onClick={() => setMobileMenuOpen(false)}
							>
								<item.icon className="w-5 h-5 mr-3" />
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default FloatingHeader;
