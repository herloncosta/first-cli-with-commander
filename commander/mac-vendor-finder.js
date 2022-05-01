const { program } = require("commander");
const axios = require("axios");

function getVendor(mac) {
    const request = axios.get(`https://api.macvendors.com/${mac}`);
    request.then((data) => console.log(`Vendor: ${data.data}`));
}

program
    .name("mac-vendor-finder")
    .version("1.0.0")
    .description("Search mac vendor.")
    .option("-m, --mac", "mac address | format=<FC:A1:3E:2A:1C:33>")
    .action(() => {
        const options = program.opts();
        try {
            const mac = program.args[0].split(":").join("-");
            getVendor(mac);
        } catch (err) {
            console.error(err.name, err.type, "no mac inserted");
        }
    });

program.parse();

// mac example: 00:1B:C9:4B:E3:57
// api: https://api.macvendors.com/
