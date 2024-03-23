//your JS code here. If required.
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPromise(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber(1, 10);
      if (Math.random() < 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Promise ${index} rejected with error`));
      }
    }, Math.random() * 1000); // introducing some random delay
  });
}

const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(createPromise(i + 1));
}

Promise.all(promises)
  .then(results => {
    const outputDiv = document.getElementById('output');
    results.forEach((result, index) => {
      const p = document.createElement('p');
      p.textContent = `Promise ${index + 1} resolved with ${result}`;
      outputDiv.appendChild(p);
    });
  })
  .catch(error => {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = error.message;
    outputDiv.appendChild(p);
  });