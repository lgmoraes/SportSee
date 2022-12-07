# Getting started

## Prerequisites

In order to run the project, your system must have `nodejs` and `npm` installed

## Install

Runs the command below to install all dependencies:

```
npm install
```

## Run the backend server

In its current state, the application requires the presence of the SportSee local REST server.

Run the command below from the `back-end` folder:

```
npm start
```

## Run the app

You can now run the start command (from the `front-end` folder):

```
npm start
```

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Switch to local mocked data

To force api object to return local mocked data, change `USE_MOCKED_DATA` to `true` in Api.js

```
const USE_MOCKED_DATA = true
```