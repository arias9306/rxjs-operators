// bufferCount

const { of } = require('rxjs');
const { bufferCount } = require('rxjs/operators');

//#region Example 1

console.log('### Emit buffer of 2 values or when complete');

of(1, 2, 3, 4, 5, 6, 7, 8).pipe(bufferCount(2)).subscribe(console.log);

console.log();

//#endregion

//#region Example 2

console.log('### Emit buffer of 2 values and start a new buffer when a new value emitted');
// multiple buffer can coexist!

of(1, 2, 3, 4, 5, 6, 7, 8).pipe(bufferCount(2, 1)).subscribe(console.log);

//#endregion