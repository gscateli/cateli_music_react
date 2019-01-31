const ENV = require('dotenv');
ENV.config();

exports.getUserId = function (){
    console.log(process.env.USER_ID);
    return process.env.USER_ID;
}

exports.getAccessToken = function (){
    console.log(process.env.ACCESS_TOKEN);
    return process.env.ACCESS_TOKEN;
}