'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage: React.FC = () => {
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
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="text-gray-400 mt-2">Last updated: March 7, 2025</p>
                </header>

                <div className="space-y-12">
                    {/* Section 1: Information We Collect */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">1</span>
                            Information We Collect
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            We collect minimal information to provide our services and improve your experience. This includes:
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">User names and email addresses provided during account creation</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">Anonymous usage data through Umami analytics</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">Information you provide when contacting us or contributing to the project</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-300">
                            We collect this information to create and manage your account, communicate with you about our services, and enhance the functionality of Vanguard.
                        </p>
                    </div>

                    {/* Section 2: How We Use Your Information */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">2</span>
                            How We Use Your Information
                        </h2>
                        <p className="text-lg text-gray-300">
                            We use the collected information to improve our website, understand user behavior, and enhance the Vanguard project. We do not sell or share your personal information with third parties.
                        </p>
                    </div>

                    {/* Section 3: Cookies and Analytics */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">3</span>
                            Cookies and Analytics
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            We use Umami, a privacy-focused analytics tool, to collect anonymous usage data. Umami does not use cookies and does not track users across websites.
                        </p>
                        <div className="bg-gray-900 p-4 rounded-md text-sm text-gray-300 font-mono">
                            The Umami script is loaded from https://cloud.umami.is/script.js and uses the website ID &ldquo;a51c4b23-0e1c-45e5-8a85-863164fe739b&rdquo;.
                        </div>
                    </div>

                    {/* Section 4: Third-Party Services */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">4</span>
                            Third-Party Services
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            We use Bunny Fonts to serve the Poppins font family. Bunny Fonts is a privacy-friendly alternative to Google Fonts and does not track users or collect personal data.
                        </p>
                        <div className="bg-gray-900 p-4 rounded-md text-sm text-gray-300 font-mono">
                            The font is loaded from https://fonts.bunny.net/css?family=poppins:300,400,500,600,700.
                        </div>
                    </div>

                    {/* Section 5: Data Security */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">5</span>
                            Data Security
                        </h2>
                        <p className="text-lg text-gray-300">
                            We implement appropriate security measures to protect your information. However, please note that no method of transmission over the internet is 100% secure.
                        </p>
                    </div>

                    {/* Section 6: Your Rights */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">6</span>
                            Your Rights
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us.
                        </p>
                        <p className="text-lg mb-4 text-gray-300">
                            To delete your account and associated data, you can visit the account settings page on the Vanguard instance you're using. This process allows you to directly control the removal of your personal information from our systems.
                        </p>
                        <p className="text-lg text-gray-300">
                            Please note that some information may be retained in our records as required for legal, financial, or security purposes.
                        </p>
                    </div>

                    {/* Section 7: Changes to This Policy */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">7</span>
                            Changes to This Policy
                        </h2>
                        <p className="text-lg text-gray-300">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                        </p>
                    </div>

                    {/* Section 8: Official Hosting and Self-Hosting */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">8</span>
                            Official Hosting and Self-Hosting
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            Vanguard hosts its official app at https://app.vanguardbackup.com. We do our best to secure your data on this official instance.
                        </p>
                        <p className="text-lg mb-4 text-gray-300">
                            Please note that Vanguard is an open-source project, which means it can be self-hosted by individuals or organizations. Any other instance of Vanguard is not our official product, and we cannot guarantee the security or privacy practices of these self-hosted instances.
                        </p>
                        <p className="text-lg text-gray-300">
                            If you are using a self-hosted version of Vanguard, please refer to the privacy policy and security practices of that specific instance should it exist.
                        </p>
                    </div>

                    {/* Section 9: Disclaimer and Limitation of Liability */}
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">9</span>
                            Disclaimer and Limitation of Liability
                        </h2>
                        <p className="text-lg mb-4 text-gray-300">
                            Vanguard is an open-source project provided "as is" without warranty of any kind, either expressed or implied. By using Vanguard, you acknowledge and agree to the following:
                        </p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">We do not guarantee the accuracy, completeness, or usefulness of the software or any related documentation.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">We are not responsible for any damages or losses resulting from the use of Vanguard, including but not limited to data loss, system failure, or any other issues that may arise.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">For self-hosted instances of Vanguard, the responsibility for security, privacy, and compliance with local laws and regulations lies solely with the individual or organization hosting the instance.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">We are not liable for any modifications made to the Vanguard software by third parties in self-hosted or forked versions.</span>
                            </li>
                            <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                  <span className="h-2 w-2 bg-sky-400 rounded-full"></span>
                </span>
                                <span className="text-lg text-gray-300">While we strive to address security vulnerabilities promptly, we cannot guarantee immediate fixes or updates for all reported issues.</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-300">
                            By using Vanguard, you agree to indemnify and hold harmless the project maintainers, contributors, and any affiliated parties from any claims, damages, or losses arising from your use of the software.
                        </p>
                    </div>

                    {/* Section 10: Additional Information */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-sky-500 transition-colors duration-300">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-sky-500 text-white font-bold mr-4">10</span>
                            Additional Information
                        </h2>
                        <ul className="space-y-6 mb-6">
                            <li>
                                <h3 className="text-lg font-bold mb-2">Data Retention</h3>
                                <p className="text-lg text-gray-300">As we offer user accounts, we retain user data for as long as the account is active or as needed to provide our services. You can request deletion of your account and associated data at any time.</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold mb-2">International Data Transfers</h3>
                                <p className="text-lg text-gray-300">Data collected through our services may be transferred to, processed, and stored in countries other than your own. By using Vanguard, you consent to the transfer of your information to countries which may have different data protection rules than your country. We make efforts to ensure that transfers of personal data are carried out in accordance with applicable law and carefully manage all transfers to ensure your rights and interests are protected.</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold mb-2">Children's Privacy</h3>
                                <p className="text-lg text-gray-300">Vanguard is not recommended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information of a child under 13, we will take steps to delete such information from our files as soon as possible.</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold mb-2">Open Source License</h3>
                                <p className="text-lg text-gray-300">Vanguard is distributed under the GNU Affero General Public License v3.0 (AGPL-3.0). For more details, see the LICENSE file in our repository.</p>
                            </li>
                            <li>
                                <h3 className="text-lg font-bold mb-2">Reporting Security Vulnerabilities</h3>
                                <p className="text-lg text-gray-300">If you discover a potential security vulnerability, please read and follow the guidelines outlined in our security policy at https://github.com/vanguardbackup/vanguard/blob/main/SECURITY.md.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 py-12 px-6 bg-gray-800 rounded-lg text-white">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Questions About Our Privacy Policy?</h2>
                            <p className="text-xl mb-8 text-gray-300">
                                If you have any questions or concerns about this privacy policy or our practices, we're here to help.
                            </p>
                            <a
                                href="mailto:privacy@vanguardbackup.com"
                                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                            >
                                Contact Our Privacy Team
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
                                <h3 className="text-xl font-bold mb-4">Privacy Team</h3>
                                <p className="text-gray-300 mb-2">Email: privacy@vanguardbackup.com</p>
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
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
                                Terms of Service
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

export default PrivacyPolicyPage;