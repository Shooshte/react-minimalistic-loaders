## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Adding shapes

1. Add a shape folder into `/src/shapes`. Use the existing naming convention (`Base`).
1. Add a `index.js` file inside the folder
1. Import the Base shape from the `Base` folder. This is a square div, ensuring all the props from the React component get passed correctly. The shapes should consist of a single `div`, and only use a single color that can be accesed by using `${props => props.color}` For instance:
```javascript
import { extend } from "styled-components";
import { Base } from "../Base/";

export const My Shape = Base.extend`
    ...new styles here
`;
```
1. After you add the styles, add your shape into `/src/shapes/index.js`

## Adding animations

1. Add a animation folder into `/src/animations`. Use the existing naming convention (`NormalRotation`).
1. Add a `index.js` file inside the folder
1. Create a animation using the styled-components keyframes. For instance:
```javascript
import { keyframes } from "styled-components";

export const NormalRotation = keyframes`
  0% {
    transform: opacity(0);
  }
  100% {
    transform: opacity(100);
  }
`;
```
1. After you add the styles, add your animation into `/src/animations/index.js`