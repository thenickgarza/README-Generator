const fs = require('fs');


const writeFile = readme => {
    return new Promise ((resolve, reject) => {
        fs.writeFile ('README.md', readme, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;