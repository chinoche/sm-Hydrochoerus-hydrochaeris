# SM Product list

Complete a project as descried here [Project Requirements](https://github.com/jeleputs/fullstack-challenge)

This project will also add some logic for view the details of every product and be able
to see these details and add the product to the cart and finally, the user will be able to
see the cart and its details

# What is included in this project?

The technologies used for this project are:

- [React 18 using Typescript](https://react.dev/)
- [React Router](https://github.com/remix-run/react-router)
- [React UI tools](https://mui.com/)
- [Vite](https://vitejs.dev/)
- Containerization ([Docker](https://www.docker.com/)) so it can be exported to the container/artifact registry and use
  everywhere

# Requirements

- Internet connection

## For production

- Docker, for install instructions take a look [here](https://www.docker.com/)
- execute the following commands

```
docker build -t sm-products .

```

You can change "sm-products" for any name you want, just keep in mind you should use this name when you're about to run
the
container

To Run the docker container execute:

```
docker run --name sm-products-container -p 8080:80 -d sm-products
```

our application is now running in a Docker container. Open a browser and navigate to http://localhost:8080 to view your
containerized React application.

## For development

- Nodejs 16+ and npm installed, you can take a look at [NVM](https://github.com/nvm-sh/nvm)
  or [NVM for windows](https://github.com/coreybutler/nvm-windows)
- Make Sure to install the dependencies using

```
npm install

```

In the root directory

To run the development server you can execute

```
npm run dev

```

And enjoy the HMR that vite will provide, just make sure to open the url prompted in the command interface

Enjoy!