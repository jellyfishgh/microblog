const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname, '../public/javascripts/geo.json'), (err, data) => {
    if (err) throw err;
    const provinces = JSON.parse(data);
    provinces.map((province) => {
        if (province.type === 0) {
            if (province.sub[0].name === '请选择') {
                province.sub.shift();
            }
            if (province.sub[province.sub.length - 1].name === '其他') {
                province.sub.pop();
            }
        } else if (province.type === 1) {
            if (province.sub[0].name === '请选择') {
                province.sub.shift();
            }
            if (province.sub[province.sub.length - 1].name === '其他') {
                province.sub.pop();
            }
            province.sub.map((city) => {
                if (city.name === '其他') {
                    province.sub.pop();
                }
                if (city.type === 0) {
                    if (city.sub.length > 0) {
                        if (city.sub[0].name === '请选择') {
                            city.sub.shift();
                        }
                        if (city.sub[city.sub.length - 1].name === '其他') {
                            city.sub.pop();
                        }
                    }
                }
            });
        }
    });
    fs.writeFile(path.join(__dirname, '../public/javascripts/fixedgeo.json'), JSON.stringify(provinces, null, '    '), (err) => {
        if (err) throw err;
        console.log('file saved.');
    });
});
