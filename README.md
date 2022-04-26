# react-redux-firebase-imdb

# 🚀 Javascript full-stack 🚀

### React / Next / MongoDB / ReCharts / Highcharts / Firebase / IMDB API

https://github.com/coding-to-music/react-redux-firebase-imdb

https://react-redux-firebase-imdb.herokuapp.com

https://react-redux-firebase-imdb.vercel.com

by Adriengibaud https://github.com/adriengibaud

http://movie-app-next-mu.vercel.app

https://github.com/adriengibaud/movie-app-next

# Environment Values that use process.env

```java
NEXT_PUBLIC_TMDB_API_KEY
MONGODB_URI

FIREBASE_KEY=""
FIREBASE_DOMAIN=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET=""
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
FIREBASE_MEASUREMENT_ID=""

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,


const baseUrl = 'https://api.themoviedb.org/3/';

const getByName = async (infos) => {
  const url = `${baseUrl}search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${infos.name}&language=en-us&page=${infos.page}`;
  const response = await axios.get(url);
  return response.data;
};

```

# Redux Toolkit example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is intended to be the standard way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit&project-name=with-redux-toolkit&repository-name=with-redux-toolkit)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-redux-toolkit with-redux-toolkit-app
# or
yarn create next-app --example with-redux-toolkit with-redux-toolkit-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### TypeScript Setup (optional)

If you haven't already added [TypeScript](https://www.typescriptlang.org/) to your project, follow the [steps in the Next.js documentation](https://nextjs.org/docs/basic-features/typescript). If you are new to TypeScript, go through the Next.js [learning lesson on TypeScript](https://nextjs.org/learn/excel/TypeScript).

Once TypeScript is added, follow the instructions given on the Redux Toolkit [documentation](https://redux-toolkit.js.org/tutorials/TypeScript) to set up and use Redux Toolkit and React-Redux with TypeScript

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/react-redux-firebase-imdb.git
git push -u origin main
```

## Heroku

```java
heroku create react-redux-firebase-imdb
```

## Heroku MongoDB Environment Variables

```java
heroku config:set


heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://react-redux-firebase-imdb.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
