# Hydrogen Demo Store

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/hydrogen-netlify-starter"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

## Getting started

**Requirements:**

- Node.js version 16.5.0 or higher

## Running the dev server

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
