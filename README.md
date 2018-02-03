# React-minimalistic-loaders

[![npm package][npm-badge]][npm]

## A lightweight react loader component. I will try to add new animations and shapes consistently.

### Usage:

#### installation:
`npm i react-minimalistic-loaders` or
`yarn add react-minimalistic-loaders`

#### use it in your component:
```javascript
import React, { Component } from "react";
import Loader from "react-minimalistic-loaders";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader shape="Sunshine" size="100px" />
      </div>
    );
  }
}

export default App;
```

### Props:

| Name   | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `size` | string | `28px` | The size of the loader component - must be a valid CSS size unit. |
| `color` | string | `#000` | The color of the loader shape and text - must be a valid CSS color. |
| `fontSize` | string | `28px` | The size of the loader text - must be a valid CSS size unit. |
| `loaderText` | string | `28px` | Loader text, inputing en empty string - `""` removes the text. |
| `length` | string | `4s` | The length of a single animation loop - must be a valid CSS time unit. |
| `animation` | string | `NormalRotation` | The name of the loader animation. |
| `shape` | string | `Base` | The name of the loader shape. |

### Available animations:
* `JumpyRotation`
* `NormalRotation`

### Available shapes:
* `Base`
* `NothedCircle`
* `Sunshine`

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

### Contributing:

Please read CONTRIBUTING.md before commiting. PRs that do not follow the existing code structure will be rejected.
