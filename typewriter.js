const sentence = "hello there from lighthouse labs \n";
const delay = 50
let delaySum = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + delay)
  delaySum += delay;
} 