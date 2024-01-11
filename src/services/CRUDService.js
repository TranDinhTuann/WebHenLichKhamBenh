import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                // image: DataTypes.STRING, // vì mình không tạo input
                roleId: data.roleId,
                // positionId: DataTypes.STRING,
            });
            resolve('oke create a new user success!');
        } catch (error) {
            reject(error);
        }
    });
    // console.log('data from service');
    // console.log(data);
    // console.log(hashPasswordFromBcrypt);
};

// mã hóa dữ liệu
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
};
