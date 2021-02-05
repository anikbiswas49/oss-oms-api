const {sequelize} = require("./../config/database");
const { QueryTypes } = require('sequelize');
class UserModel {
    constructor(id,phone_number,name,password) {
        this.id = id;
        this.phone_number = phone_number;
        this.name = name;
        this.password = password;
    }

    async save(){
        const query = "INSERT INTO tbl_user(phone_number,name,password) values(:phone_number,:name,:password)";
         return sequelize.query(query,{
            replacements:{phone_number:this.phone_number,name:this.name,password:this.password},
             type: QueryTypes.INSERT
        })


    }
}

module.exports = UserModel;