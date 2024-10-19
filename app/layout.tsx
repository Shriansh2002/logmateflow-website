import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "LogmateFlow",
	description: "LogmateFlow is a log management platform.",
	authors: [
		{
			name: "Shriansh Agarwal",
			url: "https://shrianshagarwal.in",
		},
	],
	keywords: [
		"log management",
		"log management platform",
		"log management software",
		"log management tool",
		"log management system",
		"log management solution",
		"log management services",
		"log management service",
		"log management company",
		"logmateflow",
		"logmateflow.com",
		"logmateflow.in",
		"logmateflow.org",
		"logmateflow.net",
		"logmateflow",
		"logmateflow.com",
		"logmateflow.in",
		"logmateflow.org",
		"logmateflow.ai",
		"logmateflow.io",
		"logmateflow.app",
		"logmateflow.co",
		"logmateflow.dev",
		"logmateflow.live",
		"logmateflow.me",
		"logmateflow.net",
		"logmateflow.org",
		"logmateflow.us",
		"logmateflow.xyz",
		"logmateflow.tech",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
