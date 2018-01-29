const tracery = require('tracery-grammar');
const fs = require('fs');
const path = require('path');

const grammarFolder = './characters';

function testGrammar(def) {
    const grammar = tracery.createGrammar(def);
    grammar.addModifiers(tracery.baseEngModifiers);
    for (var i = 0; i < 20; i++) {
        const phrase = grammar.flatten('#origin#');
        console.log(phrase + " [" + phrase.length + "]")
    }
}

fs.readdir(grammarFolder, (err, files) => {
    files.forEach((file) => {
        const grammarDef = fs.readFileSync(path.join(grammarFolder, file), { encoding: 'utf8' });
        console.log("[" + file + "]\n")
        testGrammar(JSON.parse(grammarDef));
    });
});

