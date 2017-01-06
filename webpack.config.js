module.exports = {
    entry:{
        bundle : __dirname + '/public/js/main.js' 
    },
    output:{
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    }
};