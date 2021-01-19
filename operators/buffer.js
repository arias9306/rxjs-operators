// buffer

const { interval } = require('rxjs');
const { buffer, take } = require('rxjs/operators');

console.log('### Emit the buffer after 1000ms ###');

interval(100)
  .pipe(buffer(interval(1000)), take(3))
  .subscribe((value) => console.log(value));
