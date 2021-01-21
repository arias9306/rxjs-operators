const { interval } = require('rxjs');
const { bufferTime, take } = require('rxjs/operators');

console.log('### Create a new buffer every 1 seconds and emit it after 2 seconds');

interval(1000).pipe(
  take(6),
  bufferTime(2000, 1000)
).subscribe(console.log)
