# Leilukin's Hub

Source code of my hobby website, [Leilukin's Hub](https://leilukin.com/). Built with [Eleventy](https://www.11ty.dev/).

More technical information about this website can be found on the site's [colophon page](https://leilukin.com/colophon).

## Run Locally

Requirement: [Node.js](https://nodejs.org/).

1. Clone the project repository locally:
    ```
    git clone https://git.leilukin.com/Leilukin/leilukin-site.git
    ```
1. Install dependencies:
    ```
    npm install
    ```
1. Run the project:
    ```
    npm run start
    ```
1. Open http://localhost:1414/ in your web browser.

The `npm run start` command runs both Eleventy and [Pagefind](https://pagefind.app/) to build the website and create the website's search index respectively, then serve the project output in a local server.

After creating and updating the website's search index, if you want to run the website locally again, you can instead run the `npm run start-11ty` command, which runs Eleventy to build the website and serve the output in a hot-reloading local server, then open `http:localhost:8080/` in your web browser.
