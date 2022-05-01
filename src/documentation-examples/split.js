const { log } = console;
const { program } = require("commander");

program.option("--first").option("-s, --separator <char>");
program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

log(program.args[0].split(options.separator, limit));
// "a/b/c".split("/", 1)

// terminal
// input: node split -s / --first a/b/c
// output: ['a']
