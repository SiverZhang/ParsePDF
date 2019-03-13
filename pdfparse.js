const fs = require('fs');
const readline = require('readline');

const inputfile = 'FeiNiao.content.txt';
const outputfile = 'output.txt';

const fileStream = fs.createReadStream(inputfile, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputfile);

let sl = 157;
let el = 1559;

lineNo = 0;
output = '';

async function processLineByLine() {
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        this.lineNo += 1;
        if (this.lineNo >= sl) {
            if (line.substring(0, 3) === '---') {
                continue;
            }
            if (+ line.substring(0, 3) >= 1 & + line.substring(0, 3) <= 325) {
                this.output += '\n';
                console.log(`linedata ${this.output}`);
                writeStream.write(this.output);
                this.output = '';
                continue;
            }
            data = line.replace(/\s+/g, ' ');
            this.output += data + ' ';
            if (line.substr(-1, 1) === '.' | line.substr(-2, 2) === '."'){
                this.output += '|';
            }
        }
        if (this.lineNo > el) {
            return
        }
    }
}

processLineByLine();