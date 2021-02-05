const {Sequelize} = require('sequelize');

const dbname = process.env.db_name;
const dbuser = process.env.db_username;
const dbpassword = process.env.db_password;
const host = process.env.db_host;

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: host,
    dialect: 'postgres',
    pool: {
        max: 5,
    }
});

const connectdb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

};

module.exports = {
    sequelize,
    connectdb
};