# Hydrogen Demo Store Starter Template

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/hydrogen-netlify-starter"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

[Hydrogen](https://shopify.dev/custom-storefronts/hydrogen) is a React framework and Software Development Kit (SDK) that can be used to build fast and dynamic custom Shopify storefronts.

This template will show you how to create a sample custom storefront that can be hosted on Netlify.

## Getting started

**Requirements:**

- [Node.js](https://nodejs.org/en/) version 16.5.0 or higher

### Running the dev server locally

1. Clone the repositoritory to your computer:
    ```bash
    git clone https://github.com/netlify/hydrogen-netlify-starter
    ```

2. Navigate to the repostitory folder:
    ```bash
    cd hydrogen-netlify-starter
    ```

3. Update [`hydrogen.config.js`](hydrogen.config.js) with your shop's domain (replace the `storeDomain` sample value) and [Storefront API token](https://shopify.dev/api/examples/storefront-api#step-2-generate-a-storefront-api-access-token) (replace the `storefrontToken` sample value).

4. Install the package dependencies:
    ```bash
    npm install
    ```

5. Start the application:
    ```bash
    npm run dev
    ```

### Building for production

To build a production-ready instance of the application, run the following command:

```bash
npm run build
```

### Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Netlify:

1. Build your Hydrogen app:
    ```bash
    npm run build
    ```

2. Run the preview command:
    ```bash
    npm run preview
    ```

## Questions and troubleshooting

If you found an issue with the code [in this repository](https://github.com/netlify/hydrogen-netlify-starter/), feel free to open an issue or let us know [in the Netlify Forums](https://answers.netlify.com/).