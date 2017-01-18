import chalk from 'chalk';

printMessage('*** Javascript Development Environment ***');
printMessage('*** Author: Benjamin Wasilewski <benwasilewski@gmail.com> ***'); // eslint-disable-line no-console
printMessage('*** starting app in dev mode ***'); // eslint-disable-line no-console

function printMessage(msg) {
  console.log(chalk.green(msg));   // eslint-disable-line no-console
}
