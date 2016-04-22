// Type definitions for easy-xapi-utils
// Project: https://github.com/DeadAlready/easy-xapi-utils
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../easy-jsend/easy-jsend.d.ts" />
/// <reference path="../easy-x-headers/easy-x-headers.d.ts" />


import express = require('express');

declare export function isLoggedIn(role?: string): express.RequestHandler;
declare export function isLoggedOut(): express.RequestHandler;
declare export function hasRole(role: string): express.RequestHandler;
