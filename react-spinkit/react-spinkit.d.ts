// Type definitions for react-spinkit 1.1.4
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />


import { Component } from 'react';

interface Props {
    spinnerName?: string;
}

declare class Spinner extends Component<Props, {}> { }

export default Spinner;
