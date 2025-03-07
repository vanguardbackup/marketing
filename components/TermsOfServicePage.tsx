'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <header className="mb-8">
                    <Link href="/" className="text-sky-400 hover:text-sky-300 flex items-center mb-8">
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
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold">Terms of Service</h1>
                    <p className="text-gray-400 mt-2">Last updated: March 7, 2025</p>
                </header>

                <div className="space-y-12">
                    {/* Section 1: Acceptance of Terms */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">1</span>
                            Acceptance of Terms
                        </h2>
                        <p className="text-lg text-gray-300">
                            By accessing or using the official Vanguard website
                            (https://vanguardbackup.com) and the official Vanguard instance
                            (https://app.vanguardbackup.com) (collectively, the &ldquo;Service&rdquo;),
                            you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you
                            disagree with any part of the Terms, you may not access the
                            Service.
                        </p>
                    </div>

                    {/* Section 2: Description of Service */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">2</span>
                            Description of Service
                        </h2>
                        <p className="text-lg text-gray-300">
                            Vanguard provides backup management services for remote Ubuntu
                            servers. Our official instance allows users to connect to remote
                            servers, facilitate backups to various destinations, and manage
                            both scheduled and manual backup operations.
                        </p>
                    </div>

                    {/* Section 3: User Accounts */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">3</span>
                            User Accounts
                        </h2>
                        <p className="text-lg text-gray-300">
                            To use our Service, you must create an account. You are
                            responsible for maintaining the confidentiality of your account
                            and password. You agree to accept responsibility for all
                            activities that occur under your account. We reserve the right to
                            refuse service, terminate accounts, remove or edit content, or
                            cancel orders in our sole discretion.
                        </p>
                    </div>

                    {/* Section 4: User Obligations */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">4</span>
                            User Obligations
                        </h2>
                        <p className="text-lg text-gray-300">
                            You agree to use our Service only for lawful purposes and in
                            accordance with these Terms. You are responsible for all content
                            and activity that occurs under your account. You agree not to use
                            the Service in any way that causes, or may cause, damage to the
                            Service or impairment of the availability or accessibility of the
                            Service.
                        </p>
                    </div>

                    {/* Section 5: Intellectual Property */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">5</span>
                            Intellectual Property
                        </h2>
                        <p className="text-lg text-gray-300">
                            The Vanguard software is open-source and licensed under the GNU
                            Affero General Public License v3.0 (AGPL-3.0). However, the
                            content on our official website and instance, including but not
                            limited to text, graphics, logos, and images, is the property of
                            Vanguard and is protected by applicable copyright and trademark
                            laws.
                        </p>
                    </div>

                    {/* Section 6: Limitation of Liability */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">6</span>
                            Limitation of Liability
                        </h2>
                        <p className="text-lg text-gray-300">
                            To the fullest extent permitted by applicable law, Vanguard and
                            its developers shall not be liable for any indirect, incidental,
                            special, consequential or punitive damages, including without
                            limitation, loss of profits, data, use, goodwill, or other
                            intangible losses, resulting from (i) your access to or use of or
                            inability to access or use the Service; (ii) any conduct or
                            content of any third party on the Service; (iii) any content
                            obtained from the Service; and (iv) unauthorized access, use or
                            alteration of your transmissions or content, whether based on
                            warranty, contract, tort (including negligence) or any other legal
                            theory, whether or not we have been informed of the possibility of
                            such damage.
                        </p>
                    </div>

                    {/* Section 7: Modifications to Service */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">7</span>
                            Modifications to Service
                        </h2>
                        <p className="text-lg text-gray-300">
                            We reserve the right to modify or discontinue, temporarily or
                            permanently, the Service (or any part thereof) with or without
                            notice. You agree that Vanguard shall not be liable to you or to
                            any third party for any modification, suspension or discontinuance
                            of the Service.
                        </p>
                    </div>

                    {/* Section 8: Termination and Account Disabling */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">8</span>
                            Termination and Account Disabling
                        </h2>
                        <p className="text-lg text-gray-300 mb-4">
                            We may terminate or suspend access to our Service immediately,
                            without prior notice or liability, for any reason whatsoever,
                            including without limitation if you breach the Terms. All
                            provisions of the Terms which by their nature should survive
                            termination shall survive termination, including, without
                            limitation, ownership provisions, warranty disclaimers, indemnity
                            and limitations of liability.
                        </p>
                        <p className="text-lg text-gray-300">
                            We reserve the right to disable your account on the official
                            Service for any reason, at our sole discretion. While this is
                            unlikely to occur except in extreme cases, such as violation of
                            these Terms, engaging in illegal activities, or actions that
                            threaten the integrity of our Service, we maintain this right to
                            protect our Service and other users.
                        </p>
                    </div>

                    {/* Section 9: Governing Law */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">9</span>
                            Governing Law
                        </h2>
                        <p className="text-lg text-gray-300">
                            These Terms shall be governed and construed in accordance with the
                            laws of England and Wales, without regard to its conflict of law
                            provisions. Our failure to enforce any right or provision of these
                            Terms will not be considered a waiver of those rights. If any
                            provision of these Terms is held to be invalid or unenforceable by
                            a court, the remaining provisions of these Terms will remain in
                            effect.
                        </p>
                    </div>

                    {/* Section 10: Changes to Terms */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">10</span>
                            Changes to Terms
                        </h2>
                        <p className="text-lg text-gray-300">
                            We reserve the right, at our sole discretion, to modify or replace
                            these Terms at any time. If a revision is material we will try to
                            provide at least 30 days' notice prior to any new terms taking
                            effect. What constitutes a material change will be determined at
                            our sole discretion. By continuing to access or use our Service
                            after those revisions become effective, you agree to be bound by
                            the revised Terms.
                        </p>
                    </div>

                    {/* Section 11: Data Backup and Loss */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">11</span>
                            Data Backup and Loss
                        </h2>
                        <p className="text-lg text-gray-300 mb-4">
                            While Vanguard strives to ensure the integrity and security of all
                            data backups, we cannot guarantee that the backup process will
                            always be error-free or that data loss will never occur. By using
                            our Service, you acknowledge and agree to the following:
                        </p>
                        <ul className="space-y-3 mb-4">
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">Vanguard is not responsible for any loss of data resulting from
                failures in the backup process, server outages, network issues,
                or any other technical problems.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">It is your responsibility to verify the completeness and
                integrity of your backups regularly.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">We strongly recommend maintaining multiple backups, including
                backups stored separately from those managed by Vanguard.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">Vanguard does not guarantee the availability, integrity, or
                security of your original data on the servers you connect to our
                Service.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">In the event of data loss, Vanguard's liability is limited to
                assisting with the restoration of the most recent successful
                backup, if available.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">You are responsible for ensuring that your use of Vanguard
                complies with any data protection or privacy regulations
                applicable to your business or personal data.</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-300">
                            By using Vanguard, you agree to hold us harmless from any and all
                            claims, losses, or damages arising from data loss or corruption,
                            regardless of the cause.
                        </p>
                    </div>

                    {/* Section 12: Indemnification */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">12</span>
                            Indemnification
                        </h2>
                        <p className="text-lg text-gray-300">
                            You agree to defend, indemnify and hold harmless Vanguard and its
                            licensee and licensors, and their employees, contractors, agents,
                            officers and directors, from and against any and all claims,
                            damages, obligations, losses, liabilities, costs or debt, and
                            expenses (including but not limited to attorney's fees), resulting
                            from or arising out of a) your use and access of the Service, by
                            you or any person using your account and password; b) a breach of
                            these Terms, or c) content posted on the Service.
                        </p>
                    </div>

                    {/* Section 13: Disclaimer */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">13</span>
                            Disclaimer
                        </h2>
                        <p className="text-lg text-gray-300">
                            Your use of the Service is at your sole risk. The Service is
                            provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The Service is
                            provided without warranties of any kind, whether express or
                            implied, including, but not limited to, implied warranties of
                            merchantability, fitness for a particular purpose,
                            non-infringement or course of performance.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 py-12 px-6 bg-gray-800 rounded-lg text-white">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
                            <p className="text-xl mb-8 text-gray-300">
                                If you have any questions about these Terms of Service, we're here to help.
                            </p>
                            <a
                                href="mailto:terms@vanguardbackup.com"
                                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            >
                                Contact Our Legal Team
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </a>
                        </div>
                        <div className="hidden md:block relative">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-700 rounded-lg opacity-20"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-700 rounded-lg opacity-20"></div>
                            <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-700">
                                <h3 className="text-xl font-bold mb-4">Legal Team</h3>
                                <p className="text-gray-300 mb-2">Email: terms@vanguardbackup.com</p>
                                <p className="text-gray-300">Response time: Within 48 hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            &copy; {new Date().getFullYear()} Vanguard. All rights reserved.
                        </div>
                        <div className="mt-4 sm:mt-0 flex space-x-6">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                                Home
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default TermsOfServicePage;