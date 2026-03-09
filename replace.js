const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/Saforaai/g, 'Avon Angels Home Care');
    content = content.replace(/SaforaAI/g, 'Avon Angels Home Care');
    content = content.replace(/saforaai/gi, 'Avon Angels Home Care');
    content = content.replace(/Avon Angels Home Care\.care/g, 'avonangels.care');

    if (original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Modified', file);
    }
});
console.log('Done replacing text');
