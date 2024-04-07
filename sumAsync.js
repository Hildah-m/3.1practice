function sumAsync(num1, num2, callback) {
    const result = num1 + num2;
    const delay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 and 5 seconds
  
    setTimeout(() => {
      callback(result);
    }, delay);
  }
  sumAsync(5, 7, (result) => {
    console.log(result);
  });