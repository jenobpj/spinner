const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let time = 100;

for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(symbols[i]);
    }, time);
    time += 200;
  }
}