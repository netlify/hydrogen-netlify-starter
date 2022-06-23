# Hydrogen Demo Store Starter Template

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/hydrogen-netlify-starter"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

[Hydrogen](https://shopify.dev/custom-storefronts/hydrogen) is a React framework and Software Development Kit (SDK) that can be used to build fast and dynamic custom Shopify storefronts.

## Getting started

**Requirements:**

- [Node.js](https://nodejs.org/en/) version 16.5.0 or higher

## Running the dev server locally

1. Clone the repositoritory to your computer:

Then `cd` into the new directory and run:

```bash
npm install
npm run dev
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
npm run build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Netlify, build your Hydrogen app and then run `npm run preview`:

```bash
npm run build
npm run preview
```
