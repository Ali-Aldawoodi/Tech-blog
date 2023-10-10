const handlebars = require('handlebars');

handlebars.registerHelper('navMenu', (logged_in) => {
    if (logged_in) {
        return '<li><a href="/dashboard"> Dashboard </a></li>';
    }else {
        return '<li><a href = "/login"> Login </a></li>';
    }
});

module.exports = handlebars