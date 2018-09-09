// This file is an attempt to achieve true code coverage values.
// See https://stackoverflow.com/questions/51790353/
declare const require: any;

const ctx = require.context('../src', true, /\.ts$/);
ctx.keys().map(ctx);
