'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Database, Clock, Cloud, BellRing, Code, Star, GitFork, Users } from 'lucide-react';
import GitHubService from "@/services/GitHubService";
import Image from 'next/image';

interface Contributor {
    login: string;
    avatar_url: string;
    html_url: string;
}

interface RepoStats {
    stars: number;
    forks: number;
    contributors: Contributor[];
    isLoading: boolean;
}

interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

const MarketingPage: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [repoStats, setRepoStats] = useState<RepoStats>({
        stars: 0,
        forks: 0,
        contributors: [],
        isLoading: true
    });

    // Fetch GitHub repo data
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Using GitHubService to fetch actual data from GitHub
                const repoData = await GitHubService.getRepoData('vanguardbackup', 'vanguard');
                const contributors = await GitHubService.getContributors('vanguardbackup', 'vanguard', 10);

                setRepoStats({
                    stars: repoData.stargazers_count,
                    forks: repoData.forks_count,
                    contributors: contributors,
                    isLoading: false
                });
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setRepoStats(prev => ({ ...prev, isLoading: false }));
            }
        };

        fetchGitHubData();
    }, []);

    const toggleQuestion = (index: number): void => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    const FeatureIcon: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => (
        <Icon className="w-6 h-6 mr-3 text-sky-400" />
    );

    const features: Feature[] = [
        {
            icon: Shield,
            title: 'Secure Backups',
            description: 'Strong encryption and secure SSH connections protect your data.'
        },
        {
            icon: Database,
            title: 'Multi-Database Support',
            description: 'Seamlessly backup MySQL and PostgreSQL databases.'
        },
        {
            icon: Clock,
            title: 'Automated Scheduling',
            description: 'Set up custom backup schedules with cron syntax.'
        },
        {
            icon: Cloud,
            title: 'Flexible Storage',
            description: 'Support for multiple cloud providers (S3, DigitalOcean, etc).'
        }
    ];

    const securityPoints: string[] = [
        'SSH key authentication',
        'Data encryption in transit and at rest',
        'Regular security updates',
        'Secure storage integrations'
    ];

    const faqItems: FAQItem[] = [
        {
            question: 'What is Vanguard?',
            answer: 'Vanguard is an open-source backup solution designed for servers and applications. It provides robust and flexible backup options for developers.'
        },
        {
            question: 'Which cloud storage providers does Vanguard support?',
            answer: 'Vanguard supports multiple cloud storage providers, including:<br>- Amazon S3<br>- DigitalOcean Spaces<br>- Backblaze B2<br>- Custom S3-compatible storage solutions<br>Additionally, you can use local storage for your backups.'
        },
        {
            question: 'What types of backups does Vanguard support?',
            answer: 'Vanguard supports backing up:<br>- MySQL databases<br>- PostgreSQL databases<br>- Directory/file backups'
        },
        {
            question: 'What are the system requirements?',
            answer: 'To run Vanguard, you need:<br>- Ubuntu 24.04 or newer (other Linux distributions may work but are not officially supported)<br>- PHP 8.3 or newer<br>- MySQL 5.7+ or PostgreSQL 12+ (for the Vanguard application database)<br>- Composer<br>- Node.js and npm (for building the frontend)'
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-900 text-white font-mono">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Header */}
                <header className="mb-14">
                    <h1 className="text-3xl font-bold mb-4">Vanguard</h1>
                    <div className="text-lg text-gray-300 mb-8 flex items-center">
                        <span>A simple, community-driven open-source backup solution built for</span>
                        <div className="mx-2 h-8 inline-block relative overflow-hidden">
                            <div className="tagline-animation">
                                <div className="text-sky-400">developers</div>
                                <div className="text-sky-400">applications</div>
                                <div className="text-sky-400">servers</div>
                                <div className="text-sky-400">you</div>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .tagline-animation {
                            animation: tagline 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                        }

                        .tagline-animation > div {
                            height: 2rem;
                            line-height: 2rem;
                        }

                        @keyframes tagline {
                            0%, 20% {
                                transform: translateY(0);
                            }
                            25%, 45% {
                                transform: translateY(-2rem);
                            }
                            50%, 70% {
                                transform: translateY(-4rem);
                            }
                            75%, 95% {
                                transform: translateY(-6rem);
                            }
                            100% {
                                transform: translateY(0);
                            }
                        }
                    `}</style>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a
                            href="#install"
                            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-md text-sm font-medium flex items-center border border-gray-700 transition-colors duration-200"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                            Installation
                        </a>
                        <a
                            href="https://docs.vanguardbackup.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Documentation
                        </a>
                        <a
                            href="https://github.com/vanguardbackup/vanguard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-md text-sm font-medium flex items-center border border-gray-700 transition-colors duration-200"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub Repository
                        </a>
                    </div>

                    {/* Documentation Banner */}
                    <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-5 sm:px-8 sm:py-6 flex flex-col md:flex-row md:items-center justify-between">
                            <div className="mb-4 md:mb-0 md:pr-5">
                                <h3 className="text-xl font-bold text-white">Comprehensive Documentation</h3>
                                <p className="text-sky-100 mt-1">Everything you need to get started with Vanguard.</p>
                            </div>
                            <a
                                href="https://docs.vanguardbackup.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white hover:bg-gray-100 text-sky-600 px-6 py-2.5 rounded-md font-bold flex items-center justify-center transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                            >
                                View Docs
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </header>

                {/* GitHub Stats */}
                <section className="mb-14 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-5 sm:px-8 sm:py-6">
                        <h2 className="text-xl font-bold mb-5 flex items-center">
                            <svg
                                className="w-5 h-5 mr-2 text-sky-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Project Stats
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-gray-700 pb-8">
                            <div className="flex items-center">
                                <Star className="w-5 h-5 mr-3 text-yellow-400" />
                                <div>
                                    <span className="text-2xl font-bold block text-white">{repoStats.stars}</span>
                                    <span className="text-sm text-gray-400">GitHub Stars</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <GitFork className="w-5 h-5 mr-3 text-sky-400" />
                                <div>
                                    <span className="text-2xl font-bold block text-white">{repoStats.forks}</span>
                                    <span className="text-sm text-gray-400">Forks</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-3 text-sky-400" />
                                <div>
                                    <span className="text-2xl font-bold block text-white">{repoStats.contributors.length}</span>
                                    <span className="text-sm text-gray-400">Contributors</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mb-4">Contributors</h3>
                        <div className="flex flex-wrap gap-4 mb-5">
                            {repoStats.isLoading ? (
                                <div className="text-sm text-gray-400 flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading contributors...
                                </div>
                            ) : (
                                repoStats.contributors.map((contributor) => (
                                    <a
                                        key={contributor.login}
                                        href={contributor.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                        title={contributor.login}
                                    >
                                        <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-700 group-hover:border-sky-400 transition-colors duration-200 bg-gray-900">
                                            <Image
                                                src={contributor.avatar_url}
                                                alt={`${contributor.login}'s avatar`}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                        <a
                            href="https://github.com/vanguardbackup/vanguard/contributors"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-200 flex items-center"
                        >
                            View all contributors
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>
                </section>

                {/* Features */}
                <section className="mb-14">
                    <h2 className="text-xl font-bold mb-5 flex items-center">
                        <BellRing className="w-5 h-5 mr-2 text-sky-400" />
                        Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-gray-700 p-5 rounded-lg bg-gray-800 hover:border-sky-500 transition-colors duration-200"
                            >
                                <div className="flex items-start">
                                    <FeatureIcon icon={feature.icon} />
                                    <div>
                                        <h3 className="font-medium mb-2 text-white">{feature.title}</h3>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* API Highlight Section */}
                <section className="mb-14 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 sm:p-8 border-l-4 border-sky-500">
                        <h2 className="text-xl font-bold mb-5 flex items-center">
                            <Code className="w-5 h-5 mr-2 text-sky-400" />
                            Powerful API & Integrations
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Vanguard comes with a powerful, expressive REST API that lets you:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                            <li>Trigger backup tasks programmatically</li>
                            <li>Run backups via webhooks</li>
                            <li>Manage backup configurations remotely</li>
                            <li>Integrate easily with your existing workflows</li>
                        </ul>
                        <p className="text-gray-300 mb-4">
                            Get notified about your backup status through multiple channels:
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Discord</span>
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Slack</span>
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Email</span>
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Pushover</span>
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Telegram</span>
                            <span className="bg-gray-700 px-3 py-1.5 rounded-full text-sky-300">Microsoft Teams</span>
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="mb-14">
                    <h2 className="text-xl font-bold mb-5 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-sky-400" />
                        Security Features
                    </h2>
                    <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700">
                        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                            {securityPoints.map((point, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        className="w-5 h-5 mr-2 text-sky-400 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-14">
                    <h2 className="text-xl font-bold mb-5 flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-sky-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Frequently Asked Questions
                    </h2>
                    <div className="bg-gray-800 rounded-lg divide-y divide-gray-700 overflow-hidden">
                        {faqItems.map((item, index) => (
                            <div key={index} className="hover:bg-gray-750">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className="font-medium text-white">{item.question}</span>
                                    <span className="text-sky-400 ml-2 flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-gray-700">
                                        {activeQuestion === index ? "−" : "+"}
                                    </span>
                                </button>
                                {activeQuestion === index && (
                                    <div className="px-6 pb-4 text-gray-300">
                                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Installation */}
                <section id="install" className="mb-14">
                    <h2 className="text-xl font-bold mb-5 flex items-center">
                        <svg
                            className="w-5 h-5 mr-2 text-sky-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Installation
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                            <div className="p-5 border-b border-gray-700 bg-gray-750">
                                <h3 className="font-medium text-white">Self-Hosted</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Full control over your data and infrastructure.
                                </p>
                            </div>
                            <div className="p-8 flex flex-col items-center">
                                <p className="text-gray-300 mb-6 text-center">
                                    Install Vanguard on your own server with our simple setup guide.
                                </p>
                                <div className="mb-6 w-full flex justify-center">
                                    <a
                                        href="https://docs.vanguardbackup.com/installation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200"
                                    >
                                        View Installation Guide
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                                <p className="text-sm text-gray-400 text-center">
                                    Recommended: 1GB RAM, 2 CPU cores, 20GB storage
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                            <div className="p-5 border-b border-gray-700 bg-gray-750">
                                <h3 className="font-medium text-white">Hosted Version</h3>
                                <p className="text-sm text-gray-400 mt-1">
                                    Quick setup with no infrastructure management.
                                </p>
                            </div>
                            <div className="p-8 flex flex-col items-center justify-center">
                                <p className="text-gray-300 mb-8 text-center">
                                    Get started quickly with our fully managed solution. No server setup required.
                                </p>
                                <a
                                    href="https://app.vanguardbackup.com"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-200"
                                >
                                    Sign Up for Hosted Version
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-700 pt-8 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        <div className="mb-6 md:mb-0">
                            <h3 className="font-bold text-white mb-3">Vanguard</h3>
                            <p>Open-source backup solution for developers</p>
                            <div className="flex items-center mt-4">
                                <svg className="mr-2.5 h-6 w-6 fill-[#F05340]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Laravel</title><path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/></svg>
                                <span className="mr-1 text-xs">Vanguard is proudly built with Laravel.</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                            <div>
                                <h4 className="font-bold text-white mb-3">Legal</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="https://vanguardbackup.com/privacy-policy"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://vanguardbackup.com/terms-of-service"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-3">Resources</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="https://docs.vanguardbackup.com"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/vanguardbackup/vanguard"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-3">Community</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="https://github.com/vanguardbackup/vanguard/issues"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            Report an Issue
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/vanguardbackup/vanguard/discussions"
                                            className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                                        >
                                            GitHub Discussions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 border-t border-gray-800 pt-4">
                        &copy; 2024 - {new Date().getFullYear()} Vanguard. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default MarketingPage;