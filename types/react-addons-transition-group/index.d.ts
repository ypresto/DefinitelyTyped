// Type definitions for React (react-addons-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { ComponentClass, TransitionGroupProps } from 'react';

declare module 'react' {
    export interface HTMLTransitionGroupProps extends HTMLAttributes<HTMLElement> {
        component?: ReactType;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    export interface TransitionGroupProps extends HTMLTransitionGroupProps {
    }
}

declare var ReactTransitionGroup: ReactTransitionGroup;
type ReactTransitionGroup = ComponentClass<TransitionGroupProps>;
export = ReactTransitionGroup;
