# Dev3 Database Viewer

Dev3 Database Viewer is a Chrome extension that allows you to view the contents from an SQL database in a table format quickly and easily. All you need to do is enter the database connection string and the query you want to run.

## Getting Started

### Prerequisites

You will need the following to run this project:

- Node.js

  Install Node.js from [here](https://nodejs.org/en/download/), using your preferred package manager (Choco, Scoop, brew, etc) or using the following commands:

  ```sh
  # On Windows
  winget install OpenJS.NodeJS

  # On Linux (Ubuntu)
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
  sudo apt-get install -y nodejs
  ```

### Installation

1. Clone the repo

2. Install NPM packages

   ```sh
   npm install
   ```

3. (Optional) Run the development server

   ```sh
   npm run dev
   ```

4. Build the extension

   ```sh
    npm run build
   ```

5. Load the extension in Chrome (or any Chromium-based browser)

   1. Open the Extension Management page by navigating to `chrome://extensions`.
   2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
   3. Click the LOAD UNPACKED button and select the `dist` directory.

6. Profit! :tada:

## Recommended VS Code Extensions for Development

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for code formatting
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for autocomplete in Tailwind CSS classes
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for linting and error checking
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - for auto-completing any tags like in HTML or React
