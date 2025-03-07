/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: [
                    'ui-monospace',
                    'SFMono-Regular',
                    'SF Mono',
                    'Menlo',
                    'Consolas',
                    'Liberation Mono',
                    'monospace'
                ],
            },
            colors: {
                gray: {
                    900: '#111827', // Primary color
                },
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
                    },
                },
            },
        },
    },
    plugins: [],
}