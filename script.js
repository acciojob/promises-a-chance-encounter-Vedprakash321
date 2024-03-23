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













// const outputDiv = document.getElementById('output');

 