# [ARCHIVED]

There's a ton of things wrong, but the site is still viewable, at least in a reduced capacity.

Instead of running an Express server, there's now an `index.html` that serves as the entrypoint, loading the bundled application.  
_Blog and Data pages do not work._

To run the site, simply serve the `public` directory from a server. There's a handy `server.go` for that purpose, so `go run server.go` followed by `open localhost:3000` should do the trick.

---

[![Build Status](https://travis-ci.org/AlmightyLobsters/LobsterPages.svg?branch=master)](https://travis-ci.org/AlmightyLobsters/LobsterPages)
[![dependencies Status](https://david-dm.org/AlmightyLobsters/LobsterPages/status.svg)](https://david-dm.org/AlmightyLobsters/LobsterPages)
[![devDependencies Status](https://david-dm.org/AlmightyLobsters/LobsterPages/dev-status.svg)](https://david-dm.org/AlmightyLobsters/LobsterPages?type=dev)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE.md)
<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

# LobsterPages

<a href="https://github.com/AlmightyLobsters"><img src="https://cdn.rawgit.com/AlmightyLobsters/LobsterPages/6ed8e2cb/src/assets/imgs/logoRed.svg" alt="Almighty Lobsters Logo" width="80" height="80" align="right"></a>

Project of a webpage covering the exploits and advances of the team the **Almighty Lobsters** through the [CanSat competition](http://www.esero.scientica.cz/cansat).

## Technologies used

- [React.js](https://facebook.github.io/react/)
- [React-router](https://github.com/ReactTraining/react-router)
- [Express](https://expressjs.com)
- [Babel](https://github.com/babel/babel)
- [Sass](http://sass-lang.com/)
- [ESLint](http://eslint.org/)

## How to run

You want to get your hands on those new nifty features that are in making? Sure, no problem.<br>
Simply find on what branch they may be (eg.: design) and follow these instructions:

1. `git clone https://github.com/AlmightyLobsters/LobsterPages.git -b [the name of the brach you have chosen]` to clone repository <br>
2. `cd LobsterPages` <br>
3. `yarn` / `npm install` to install packages <br>
4. `yarn dev` / `npm dev` to spin up the hot-reloading express server <br>
5. Done, you are all set

## TODO

To look at what awaits us, look at the GitHub Issues.
