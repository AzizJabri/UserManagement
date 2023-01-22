const dotenv = require("dotenv");
dotenv.config(
    {
        path: `./.env.${process.env.NODE_ENV.trim()}`
    }
)



module.exports = {
    PORT: process.env.PORT || 3001,
    MONGO_URL: process.env.MONGO_URL || "" ,
    JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};