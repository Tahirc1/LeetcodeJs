var fullJustify = function(words, maxWidth) {
    let [line,spaces,addSpace,minSpaces] = [0,0,0,""]
    for (let res = [[]], i = 0, letters = 0; i <= words.length; letters += words[i++].length) {
        let row = res[res.length - 1];
        let len = row.length
        if (i == words.length || len && letters + len + words[i].length > maxWidth) {
            if (len == 1 || i == words.length) {
                res[res.length - 1] = row.join(' ') + ' '.repeat(maxWidth - letters - len + 1);
                if (i === words.length) return res;
            } else {
                line = row[0];
                spaces = maxWidth - letters;
                minSpaces = ' '.repeat(Math.floor(spaces / (len- 1)));
                addSpace = spaces % (len - 1);
                for (let w = 1; w < len; w++) {
                    line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
                }
                res[res.length - 1] = line;
            }
            res.push([]);
            letters = 0;
        }
        res[res.length - 1].push(words[i]);
    }
};