# Vanguard Marketing Page

Welcome to the official marketing website for Vanguard, the open-source backup solution for remote servers. This website is designed to showcase Vanguard's features, benefits, and impact in the world of server management and data protection.

## About Vanguard

Vanguard is a powerful, open-source Laravel application that enables users to:
1. Connect to remote Ubuntu servers seamlessly
2. Facilitate efficient backups from these servers to various destinations (e.g., S3 buckets)
3. Manage both scheduled and manual backup operations with ease

## Technology Stack

Our marketing page is built with modern web technologies to ensure a fast, responsive, and engaging user experience:

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/vanguardbackup/marketing.git
   cd marketing
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Build for production:
   ```
   npm run build
   # or
   yarn build
   ```

## Project Structure

- `/src`: Contains all source files
    - `/components`: Vue components
    - `/assets`: Static assets like images and icons
    - `/styles`: Global styles and Tailwind configuration
- `/public`: Public assets that are copied to the build directory
- `/tests`: Jest test files

## Testing

We use Jest for unit and integration testing. Run the tests with:

```
npm run test
# or
yarn test
```

To run tests in watch mode:

```
npm run test:watch
# or
yarn test:watch
```

## Contributing

We welcome contributions to improve Vanguard's marketing page! If you have ideas for enhancements or spot any issues:

1. Fork the repository
2. Create a new branch for your changes
3. Make your improvements
4. Write or update tests as necessary
5. Submit a pull request with a clear description of your changes

## License

The Vanguard marketing page is open-source software licensed under the MIT licence. See the [LICENCE](LICENSE) file for more details.

## Deployment

The marketing page is automatically deployed using [GitHub Pages](https://pages.github.com/) when changes are pushed to the main branch. The live site can be viewed at [https://vanguardbackup.com](https://vanguardbackup.com).

## Support

For questions or suggestions about the marketing page please open an issue in this repository.

Thank you for your interest.
