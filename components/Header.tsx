import { useState } from "react";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
	darkMode: boolean;
	setDarkMode: (value: boolean) => void;
	searchQuery?: string;
	setSearchQuery?: (value: string) => void;
	showSearch?: boolean;
}

export default function Header({
	darkMode,
	setDarkMode,
	searchQuery = "",
	setSearchQuery,
	showSearch = false,
}: HeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ name: "Portfolio", href: "/" },
		{ name: "Blog", href: "/blog" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	const isActive = (href: string) => {
		if (href === "/" && pathname === "/") return true;
		if (href !== "/" && pathname.startsWith(href)) return true;
		return false;
	};

	return (
		<header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Link
						href="/"
						className="text-2xl font-bold hover:text-primary transition-colors"
					>
						Hemant B.
					</Link>
				</motion.div>

				<div className="hidden md:flex items-center space-x-4">
					<motion.button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</motion.button>

					{showSearch && setSearchQuery && (
						<motion.div
							className="relative"
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.1 }}
						>
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<Input
								type="text"
								placeholder="Search projects or posts..."
								className="pl-10 w-64"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</motion.div>
					)}

					<nav>
						<ul className="flex space-x-6">
							{navItems.map((item) => (
								<motion.li key={item.name} whileHover={{ scale: 1.05 }}>
									<Link
										href={item.href}
										className={`hover:text-primary transition-colors ${isActive(item.href) ? "text-primary font-semibold" : ""
											}`}
									>
										{item.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</nav>
				</div>

				<div className="md:hidden flex items-center space-x-4">
					<motion.button
						onClick={() => setDarkMode(!darkMode)}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</motion.button>
					<motion.button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</motion.button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						className="md:hidden backdrop-blur-md border-t border-border/50"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="container mx-auto px-4 py-4">
							{showSearch && setSearchQuery && (
								<div className="relative mb-4">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
									<Input
										type="text"
										placeholder="Search projects or posts..."
										className="pl-10 w-full"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
							)}
							<nav>
								<ul className="space-y-2">
									{navItems.map((item) => (
										<motion.li
											key={item.name}
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Link
												href={item.href}
												className={`block w-full text-left py-2 hover:text-primary transition-colors ${isActive(item.href)
														? "text-primary font-semibold"
														: ""
													}`}
												onClick={() => setMobileMenuOpen(false)}
											>
												{item.name}
											</Link>
										</motion.li>
									))}
								</ul>
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
