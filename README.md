# next-hackernews

Hackernews clone build with:

- **<img alt="TypeScript" src="https://user-images.githubusercontent.com/4289883/72760400-7524e080-3b8d-11ea-9b0c-f6e09280e6d8.png" height="16"> [TypeScript](https://www.typescriptlang.org/)**
- **<img alt="React" src="https://user-images.githubusercontent.com/4289883/72760398-7524e080-3b8d-11ea-95ea-736bd3081ac9.png" height="16"> [React](https://reactjs.org)**
- **<img alt="SWR" src="https://user-images.githubusercontent.com/38875367/117539545-27640e00-b046-11eb-9f7b-de941e9276ea.png" height="16"> [SWR](https://swr.vercel.app/)**
- **<img alt="Next.js" src="https://user-images.githubusercontent.com/4289883/73734536-a4416300-46f2-11ea-94c5-db97d7e9a814.png" height="16"> [Next.js](https://nextjs.org/)**
- **<img alt="Styled Compnents" src="https://user-images.githubusercontent.com/38875367/100569069-454b7b00-3310-11eb-8227-751b0ca73234.png" height="16"> [Styled Components](https://emotion.sh/)**
- **<img alt="Storybook" src="https://user-images.githubusercontent.com/4289883/72760399-7524e080-3b8d-11ea-9174-1aa265d9c239.png" height="16"> [Storybook](https://storybook.js.org/)**
- **<img alt="Prettier" src="https://user-images.githubusercontent.com/38875367/100571106-a4f85500-3315-11eb-94c6-f205212297f6.png" height="16"> [Prettier](https://prettier.io/)**
- **<img alt="ESLint" src="https://user-images.githubusercontent.com/38875367/100571315-35369a00-3316-11eb-9238-07324deec076.png" height="16"> [ESLint](https://eslint.org/)**
- **<img alt="Jest" src="https://user-images.githubusercontent.com/4289883/72760396-748c4a00-3b8d-11ea-9eba-e3df28a3f18a.png" height="16"> [Jest](https://jestjs.io/)**

## Build Setup

Clone this project, install npm packages, and, start node server.

```
git clone https://github.com/s-kikuchi/next-hackernews.git
cd next-hackernews
npm install
npm run dev
```

Go to `http://localhost:3000`

## Directory structure

This project follows [Presentational + container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) and [Clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

| Directory   | Inside                                                   |
| :---------- | :------------------------------------------------------- |
| `common/`   | UI components, functions, or configs that use commonly   |
| `features/` | Directories have domain components, functions, utilities |
| `pages/`    | Nextjs page routing                                      |

### common

In side `common` directory, there are `api`, `components`, `hooks`, and `utils` directories.

| Directory     | Inside                                                 |
| :------------ | :----------------------------------------------------- |
| `api/`        | Functions and types for fetching data from backend     |
| `components/` | Re-useful UI components                                |
| `hooks/`      | Custom hooks                                           |
| `utils/`      | Utility functions that don't have effect and constants |

## Test

Tests are inside directory that related to.

### Test direction

In this project, execute testing in the following 3 phases of tests.

- Unit
- Integration
- E2E

Moreover, these are the features of tests in each phase.

| Test        | Isolated / Integrated | Environment        | Data Source    |
| :---------- | :-------------------- | :----------------- | :------------- |
| Unit        | Isolated              | Virtual DOM (Node) | Mock (Local)   |
| Integration | Integrated            | Virtual DOM (Node) | Mock (Local)   |
| E2E         | Integrated            | Real DOM (Browser) | Response (API) |

## Storybook

```
npm run storybook
```

Go to `http://localhost:6006`

## Branch management

Create a new branch that follows [GitHub flow](https://githubflow.github.io/).
