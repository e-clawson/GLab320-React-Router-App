# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# GLAB 320H.8.1 - React Router App

Learning Objectives
After completing this lab, learners will be able to:

- Create a "multi-page" React application using BrowserRouter.
- Fetch and handle data from an external API in React.

(this lab uses old setup instructions for Create-react-app, we used the folloeing to setup a vite project: 

In terminal: 
‘Npm create vite@latest’
Give it a name and hit enter 
Choose react and hit enter (using up and down arrows)
Choose javascript and hit enter
It will give you commands to get started: 


  cd vite-project - move into the folder
  npm install - install 
  npm run dev - 
)

Setting Up the Router
The first component we'll explore is BrowserRouter, which is a context provider allowing all the features of our React-Router to be available to its children. To make our code more semantic, we'll rename BrowserRouter as Router.

We want all of our application to have the router features, so we'll wrap the App component in index.js with the <Router> component.

index.js
    <!-- import { StrictMode } from "react";
    import ReactDOM from "react-dom";
    import "./style.css";
    import App from "./App";
    // Import BrowserRouter and rename it to Router
    import { BrowserRouter as Router } from "react-router-dom";
    // Wrap the App component with the Router component to enable the router features.
    ReactDOM.render(
    <StrictMode>
        <Router>
        <App />
        </Router>
    </StrictMode>,
    document.getElementById("root")
    ); -->

    Components versus Pages
A common convention is to create two folders, components and pages. Any component that is used as a piece of UI goes in the components folder, any component meant to act as a "page" of the website goes in pages.

To accomplish this for our example project, we:

Create a components and pages folder.
Create a Main.js, Currencies.js, and Price.js file in the pages folder.
Create the component boilerplate in each component.

Main.js
    <!-- export default function Main (props) {
    return <h1>This is the Main Component</h1>;
    } -->

Currencies.js
    <!-- export default function Currencies (props) {
    return <h1>This is the Currencies Component</h1>;
    } -->

Price.js
    <!-- export default function Price (props) {
    return <h1>This is the Price Component</h1>;
    } -->

Creating Our Routes
Now, we will will import the Route & Routes component into App. This will allow us define which of our components should render depending on the URL. We'll also import our pages for our routes.

App.js
