// Type definitions for gulp-cheerio
// Project: https://github.com/KenPowers/gulp-cheerio
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../cheerio/cheerio.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts"/>


import Vinyl = require('vinyl');

declare namespace cheerio {
    interface Cheerio {
        (callback: Callback): NodeJS.ReadWriteStream;
        (option: Option): NodeJS.ReadWriteStream;
    }

    interface Callback {
        ($: CheerioStatic, file: Vinyl, done?: Function): any;
    }

    interface Option {
        run?: Callback;
        parserOptions?: CheerioOptionsInterface;
        cheerio?: CheerioStatic;
    }
}

declare var cheerio: cheerio.Cheerio;

export = cheerio;
