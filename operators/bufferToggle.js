const { interval } = require('rxjs');
const { bufferToggle, take, tap } = require('rxjs/operators');

// Define open and close signals

const opening = interval(400).pipe(tap(() => console.log('open')));
const closing = () => interval(300).pipe(tap(() => console.log('close')));

interval(100)
  .pipe(
    tap((value) => console.log(value)),
    bufferToggle(opening, closing),
    take(3)
  )
  .subscribe(console.log);
