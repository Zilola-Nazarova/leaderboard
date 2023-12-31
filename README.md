<h3 align="center"><b>Leaderboard</b></h3>

This Leaderboard app displays scores submitted by different players and allows a user to submit his/her own score. All data is preserved using the external Leaderboard API service. Buit with JavaScript.


<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 "Leaderboard" <a name="about-project"></a>

**"Leaderboard"** project is a simple app consisting of the following main files:

- style.css, index.html, index.js (with imported modules) files are located in ./src directory;
- distribution files main.js, index.html are generated by Webpack and served by Webpack dev server from /dist folder.

The repo was documented in a professional way. The Website is simple and dynamic. It displays scores submitted by different players and allows a user to submit his/her own scores. It preserves data using the external Leaderboard API service.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
  <summary>Server</summary>
  <ul>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

**Technical features:**
- **no linter errors**
- **dynamically created leaderboard list**
- **Webpack**
  - **The index.html file is set as a template using the HTML Webpack Plugin**
  - **The style.css is loaded by Webpack Style/CSS Loader**
- **All data is preserved using the external Leaderboard API service**
- **ES6 features used**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- use this link to visit and try the [Leaderboard app](https://zilola-nazarova.github.io/leaderboard/);

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Login to your GitHub account. Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Zilola-Nazarova/leaderboard.git

### Prerequisites

In order to run and modify this project you need:

- gitHub account;
- git installed on your OS;
- VSCode (or another code editor);
- modern browser (supporting HTML5 and CSS3) is highly recommended;

### Install

You need to have [Node.js and npm](https://nodejs.org/) installed to to successfully run and modify this project using packages.

To install all dependencies run the following command:
> npm install

To run and use this website run the following command:
> npm start

---

If you want to install dependencies manually follow these guidelines:

You need to have [Webpack](https://nodejs.org/) installed to successfully run, modify and bundle the code in the `./dist` directory. In the root directory of the repo run the following command:
> npm install webpack webpack-cli --save-dev

To be able to use live reloading you need to install webpack-dev-server. In the root directory of the repo run the following command:
> npm install --save-dev webpack-dev-server

To make Webpack generate its own index.html file run the following command:
> npm install --save-dev html-webpack-plugin

Install the loaders in order to import a CSS file from within a JavaScript module by running:
> npm install --save-dev style-loader css-loader

To be able to deploy the project you need to install 'gh-pages':
> npm install gh-pages --save-dev

You might want to have linters installed in your local env to successfully run and modify this project:

- Webhint installation. Run the following command:
> npm install --save-dev hint@7.x

- Stylelint installation. Run the following command:
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

- Eslint installation. Run the following command:
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x



### Usage

You can use this project to view the scores of players and add your own scores:

1. Open the Demo link of this project (or run `npm start` in CLI if you cloned the project and installed all dependencies). This will open a new browser tab.
2. You should be able to see the leaderboard displaying the scores of players.
3. Type your name and score in the input field. Click the "Submit" button or press "Enter" key to submit your own score to the database.
4. You may refresh or close the page. All data should be preserved using the external Leaderboard API service.

### Run tests

There are no test provided for this project, but you can check linter errors by running this commands:

> npx hint .<br />
> npx stylelint "**/*.{css,scss}" <br />
> npx eslint . <br />
> lighthouse url options

### Deployment

Visit the Leaderboard app [here](https://zilola-nazarova.github.io/leaderboard/).

To deploy modified version of this repo run the following command:
> npm run deploy

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 Zilola Nazarova

- GitHub: [@Zilola-Nazarova](https://github.com/Zilola-Nazarova)
- Twitter: [@NazarovaZi](https://twitter.com/NazarovaZi)
- LinkedIn: [in/NazarovaZi](https://www.linkedin.com/in/NazarovaZi)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

Future features may include:
- design improvements;
- additional functionalities.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcomed!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project just star it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse program for the knowledge and skills we have acquired in Modules 1 and 2.

I am grateful for all our previous project reviewers for their advice. Thanks to them we could build this app.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
