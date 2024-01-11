// const { render } = require("ejs")
// import db from '..models/index'; '' bị sai
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getDemoPage = (req, res) => {
    return res.render('test/demo.ejs');
}

let getHomePage = async (req, res) => {
    // return res.send('Hello world from controller')
    try {
        let data = await db.User.findAll(); // user, users, User thử vài cái này
        // console.log('-----------------');
        // console.log(data);
        // console.log('-----------------');
        // vì file này tự chạy đến url/views rồi
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    // console.log(req.body);
    let message = await CRUDService.createNewUser(req.body); // lấy dữ liệu người dùng nhập
    console.log(message);
    return res.send('post curd');
}
module.exports = {
    getDemoPage: getDemoPage,
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}