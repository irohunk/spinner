const spinnerTimeout = (str) => {
  let delay = 100;
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r     ' + str[i]);
    }, delay);
    delay += 200;
  }
}

spinnerTimeout('|/-\\\n');