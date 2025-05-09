# Leilukin's Hub

Source code of my hobby website, [Leilukin's Hub](https://leilukin.com/). Built with [Eleventy](https://www.11ty.dev/) and hosted on [Hostinger](https://www.hostinger.my/).

More technical information about this website can be found on my site's [colophon page](https://leilukin.com/colophon).

## Run Locally

It is recommended to use [Bun](https://bun.sh) as the JavaScript runtime for this project. If you want to use Node.js to run this project, for each terminal command and `package.json` script, replace `bun` with `npm` and `bunx` with `npx`.

1. Clone the project repository locally:
    ```
    git clone https://git.32bit.cafe/Leilukin/leilukin-site.git
    ```
1. Install dependencies:
    ```
    bun install
    ```
1. Run the project:
    ```
    bun start-pagefind
    ```
1. Open http://localhost:1414/ in your web browser.

The `bun start-pagefind` command runs both Eleventy to build the website and [Pagefind](https://pagefind.app/) to create the website's search index, then serves the website project output in a live server.

After the website's search index has been created and updated, when you want to run the project again, you can run the `bun start` command, then open `http://localhost:8080` in your web browser to view the website project output in a live server.
