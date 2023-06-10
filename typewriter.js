const typewriter = function(sentence) {
  let delay = 50;

  for (let i = 0; i < sentence.length; i++) {

    setTimeout(() => {
      if (i === sentence.length - 1) {
        process.stdout.write(`${sentence[i]}\n`);
      } else {
        process.stdout.write(sentence[i]);
      }
    }, delay);
  
    delay += 50;
  }
};


const sentence = "hello there from lighthouse labs";
typewriter(sentence);