#!/usr/bin/env node

import chalk from "chalk";
import { spawn } from "child_process";

const NODE_MODULES_BIN = "/node_modules/bin"

const execStart = Date.now();

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(chalk.red("Please provide a command to execute"));
  process.exit(1);
}

const options = {
  env: {
    ...process.env,
    PATH: `${process.env.PATH}:${process.cwd()}${NODE_MODULES_BIN}`
  },
  stdio: 'inherit'
};

console.log(chalk.green(`Executing: ${args[0]} ${args.slice(1).join(' ')}`));

const child = spawn(args[0], args.slice(1), options);

//Where there is an error in the "spawn execution"
child.on('error', (err) => {
    console.error(chalk.red(err));
});

//Following does not run when spawn.error is triggered
//It runs only when the cmd execution is successful and has "exited" - irrespective of cmd exit status
child.on('exit', (code) => {
    if (isCmdSuccess(code)) {
      const execEnd = Date.now();
      const execTime = (execEnd - execStart) / 1000;
      console.log(chalk.green(`Execution time: ${execTime} seconds`));
    }
});

//After the cmd execution has "closed" after "exiting"
child.on('close', (code) => {
    if (isCmdSuccess(code)) {
        console.log(chalk.green(`cmd execution exited with code ${code}`));
    } else {
        console.log(chalk.red(`cmd execution exited with code ${code}`));
    }
});

const isCmdSuccess = (code) => {
  return code === 0;
};