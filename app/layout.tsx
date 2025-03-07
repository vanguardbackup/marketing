import './globals.css';
import type { Metadata } from 'next';
import React from "react";
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Vanguard - Open Source Backup Solution',
    description: 'A community-driven open-source backup solution built specifically for servers and applications. MySQL, PostgreSQL, and file backups done right.',
    metadataBase: new URL('https://vanguardbackup.com'),
    openGraph: {
        title: 'Vanguard - Open Source Backup Solution',
        description: 'A community-driven open-source backup solution built specifically for servers and applications. MySQL, PostgreSQL, and file backups done right.',
        type: 'website',
        url: 'https://vanguardbackup.com',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Vanguard - Open Source Backup Solution',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vanguardbackup',
        title: 'Vanguard - Open Source Backup Solution',
        description: 'A community-driven open-source backup solution built specifically for servers and applications. MySQL, PostgreSQL, and file backups done right.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <Script
                src="https://cloud.umami.is/script.js"
                data-website-id="a51c4b23-0e1c-45e5-8a85-863164fe739b"
                strategy="afterInteractive"
            />
        </head>
        <body className="font-mono bg-gray-900 min-h-screen text-white">{children}</body>
        </html>
    );
}