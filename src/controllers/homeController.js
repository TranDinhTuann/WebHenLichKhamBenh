// const { render } = require("ejs")
// import db from '..models/index';
import db from "../models";

let getHomePage = async (req, res) => {
    // return res.send('Hello world from controller')
    try {
        let data = await db.User.findAll(); // user, users, User thử vài cái này
        // console.log('-----------------');
        // console.log(data);
        // console.log('-----------------');
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
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