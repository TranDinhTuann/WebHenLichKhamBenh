const { render } = require("ejs")

let getHomePage = (req, res) => {
    // return res.send('Hello world from controller')
    return res.render('homePage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}