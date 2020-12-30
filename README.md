# next-hackernews
Hackernews clone build with:

- **<img alt="TypeScript" src="https://user-images.githubusercontent.com/4289883/72760400-7524e080-3b8d-11ea-9b0c-f6e09280e6d8.png" height="16"> [TypeScript](https://www.typescriptlang.org/)**
- **<img alt="React" src="https://user-images.githubusercontent.com/4289883/72760398-7524e080-3b8d-11ea-95ea-736bd3081ac9.png" height="16"> [React](https://reactjs.org)**
- **<img alt="Recoil" src="https://user-images.githubusercontent.com/38875367/100594712-62e30980-333d-11eb-9501-25a92bdb6a5f.png" height="16"> [Recoil](https://reactjs.org)**
- **<img alt="Next.js" src="https://user-images.githubusercontent.com/4289883/73734536-a4416300-46f2-11ea-94c5-db97d7e9a814.png" height="16"> [Next.js](https://nextjs.org/)**
- **<img alt="Jest" src="https://user-images.githubusercontent.com/4289883/72760396-748c4a00-3b8d-11ea-9eba-e3df28a3f18a.png" height="16"> [Jest](https://jestjs.io/)**
- **<img alt="Styled Compnents" src="https://user-images.githubusercontent.com/38875367/100569069-454b7b00-3310-11eb-8227-751b0ca73234.png" height="16"> [Styled Components](https://emotion.sh/)**
- **<img alt="Storybook" src="https://user-images.githubusercontent.com/4289883/72760399-7524e080-3b8d-11ea-9174-1aa265d9c239.png" height="16"> [Storybook](https://storybook.js.org/)**
- **<img alt="Prettier" src="https://user-images.githubusercontent.com/38875367/100571106-a4f85500-3315-11eb-94c6-f205212297f6.png" height="16"> [Prettier](https://prettier.io/)**
- **<img alt="ESLint" src="https://user-images.githubusercontent.com/38875367/100571315-35369a00-3316-11eb-9238-07324deec076.png" height="16"> [ESLint](https://eslint.org/)**

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

| Directory | Inside |
| :--- | :--- |
| `components/` | All components that draw GUI and container |
| `hooks/` | Custom hooks |
| `models/` | Interfaces |
| `pages/` | Page components |
| `repositories/` | Functions that fetch data from backend api |
| `utils/` | Functions for screen drawing |

### components
In side `components` directory, there are `containers`, `domain`, `gui`, and `layouts` directories.

| Directory | Inside |
| :--- | :--- |
| `containers/` | Components that fetch data from backend and inject state to other components |
| `domain/objects` | Domain objects |
| `domain/elements` | Domain elements for domain objects  |
| `gui/group` | GUI component consisting of GUI parts |
| `gui/parts` | GUI component that can't be split any further |
| `layouts/` | Layout components |

## Test
All test code are inside `src/__tests__`.

Run `npm run test` if you want to test.

### Test direction

In this project, execute testing in the following 3 phases of tests.
- Unit
- Integration
- E2E

Moreover, these are the features of tests in each phase.
 
| Test | Isolated / Integrated | Environment | Data Source |
| :--- | :--- | :--- | :--- |
| Unit | Isolated | Virtual DOM (Node) | Mock (Local) |
| Integration | Integrated | Virtual DOM (Node) | Mock (Local) |
| E2E | Integrated | Real DOM (Browser) | Response (API) |

## Storybook 
```
npm run storybook
```

Go to `http://localhost:6006`

## Branch management
Create a new branch that follows [GitHub flow](https://githubflow.github.io/).
