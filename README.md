# dockerized-CoreUIReact
**Dockerized CoreUI/React.js Template Project**

Is it possible to rapidly develop web applications with traditional software development practices? Can these web applications be made to look attractive, be responsive, and be more customizable than the alternatives we use today? Can these web applications connect to Microsoft SQL Server and Oracle databases, and even funnel data from one to the other? And the bottom line question - can you really do all this for free?

Yes. Yes, you can.

# Overview ##
### The container framework - Docker ###

### The frontend - React + CoreUI + Datatables.net ###

## Puzzle Pieces ##
### React.js ###
* [React.js](https://reactjs.org/) - an extension to Javascript that makes it easier to rapidly develop responsive and reactive web sites and single page applications
* [CoreUI](https://coreui.io/) - a free set of user interface elements implemented as React.js components
* [Datatables.net](https://datatables.net/) - a Javascript library that can be integrated with React.js that has many options for displaying, sorting, reordering, and modifying tabular data from a web page
* [JQuery](https://jquery.com/) - a Javascript library that adds many utility methods for manipulating the browser's DOM
* [CoreUI Free React Admin Template](https://github.com/coreui/coreui-free-react-admin-template) - a free, fully-functioning application template written in React.js that contains examples of every component offered by CoreUI, as well as examples of how to create custom components

### Container Architecture ###
* [Docker](https://www.docker.com/) - a cross-platform container platform
* [`docker-compose`](https://docs.docker.com/compose/) - a utility program distributed by the Docker organization that allows linking together multiple Docker containers to perform tasks

### Frontend System Dependencies ###
* Docker base image - [node](https://hub.docker.com/_/node/)
* [`sudo`](https://www.sudo.ws/) - convenience utility when developing containers
* Node module: [`datatables.net`](https://www.npmjs.com/package/datatables.net)
* Node module: [`jquery`](https://www.npmjs.com/package/jquery)
* [CoreUI Free React Admin Template](https://github.com/coreui/coreui-free-react-admin-template), patched

## Instructions ##
* Configure Docker on your machine, and install the `docker-compose` utility.
* Clone this repository
* Enter the directory created and run the `./react_new` command.  Follow the instructions.
* Bring the frontend project up with `./up`.  The frontend will run on your local machine at port 3080.
* After configuration, you should be able to see the following:
  * http://localhost:3080/ - the React.js CoreUI frontend. 
* Notice that when you edit any code for the React.js container, the changes are immediately evident in your browser. 

## Making Dynamic Datatables Work ##
  * For this, you will need to install and configure the companion backend project to this one, [dockerized-RoR](https://github.com/ArkieCoder/dockerized-RoR), or else create your own compatible project.
