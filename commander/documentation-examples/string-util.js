const { Command } = require("commander");
const program = new Command();

program
    .name("string-util")
    .description("CLI to some Javascript string utilities")
    .version("0.8.0");

program
    .command("split")
    .description("Split a string into substrings and display as an array.")
    .argument("<string>", "string to split")
    .option("--first", "display just the first substring")
    .option("-s, --separator <char>", "separator character", ",")
    .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    });

program.parse();

// terminal
// input: node string-util split herlon --separator ''
// output: [ 'h', 'e', 'r', 'l', 'o', 'n' ]
