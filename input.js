// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //an event listener for stdin. The listener will use a function called handleUserInput that runs when you receive input from your keyboard
  return stdin;
};

//what happens when "data:" is received from stdin... in other words, what happens when a particular key is pressed on the keyboard input.
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput // export for play use
};