//your JS code here. If required.
const outputDiv = document.getElementById('output');

    // Function to create a promise that resolves with a random number between 1 and 10 or rejects with an error
    function createPromise() {
      return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          const error = new Error('Promise rejected with error');
          reject(error);
        } else {
          const randomValue = Math.floor(Math.random() * 10) + 1;
          resolve(randomValue);
        }
      });
    }

    // Array to store all promises
    const promises = [];

    // Create 5 promises
    for (let i = 0; i < 5; i++) {
      promises.push(createPromise());
    }

    // Wait for all promises to settle
    Promise.all(promises)
      .then(results => {
        results.forEach((result, index) => {
          const p = document.createElement('p');
          p.textContent = `Promise ${index + 1} resolved with value: ${result}`;
          outputDiv.appendChild(p);
        });
      })
      .catch(error => {
        promises.forEach((promise, index) => {
          if (promise === error.promise) {
            const p = document.createElement('p');
            p.textContent = `Promise ${index + 1} rejected with error`;
            outputDiv.appendChild(p);
          }
        });
      });