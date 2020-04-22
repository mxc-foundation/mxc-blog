# MXC Blog - built in Gatsby

This is the MXC blog, built with Gastby, and designed to be easy to work with and maintain. This blog uses Strapi for content management.

This ReadMe needs to be updated with the following:

- [ ] Update file structure to include new folders, with Jest integration

## Building your Test Environment

1. **Clone this Repo and install NPM**

   Clone this repository with:

   ```shell
   git clone git@github.com:stahldom/mxc-blog.git
   ```

   Then install npm:

   ```shell
   npm install
   ```

1. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   cd my-hello-world-starter/
   gatsby develop
   ```

1. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Styled Component Helper Functions

We used a number of helper functions while developing this site. You here's a list of what was made, and how to use them. You can find all the helper functions in full detail in `/styles.js`.

- **Flexbox**

  If you're unfamiliar with Flexbox, you can find a full overview [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). All options outlined in the Flexbox helper options rely on the standard styles used in Flexbox.

  - **Content Position**

          Use `javascript ${setFlex()}` to set content position within a div.

    _Options_

        ```
        X: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
        Y: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
        ```

- **Media Query**

          Use `javascript ${media.tablet``} to set your media queries. The Tablet option can be replaced with one of the following options. The words correspond with the pixel number listed.
              * phone: 320
              * smallTablet: 481
              * portraitTablet: 641
              * tablet: 961
              * laptop: 1025
              * desktop: 1281

- **setRem**
  Convert pixels to Rem with setRem.

            Use `javascript ${setRem(60)}` with 60 being the number of pixel. If you leave it empty, it will default at 16 pixels, making it 1 rem.

- **Letter Spacing**
  Set the CSS `letter-spacing` using Pixels that will be automatically converted to rem.

            Use `javascript ${setLetterSpacing(60)}` with 60 being the number of pixel. If you leave it empty, it will default to 2 pixels.

- **Set a Border**
  Create a border around an item. This use the CSS `border` element.

          Use `javascript ${setBorder()}` to create a border around an element with `2px black solid` as your defaults. You can customize these using `width="5",color="white",style="solid"`
