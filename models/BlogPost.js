// WHEN I click on an existing blog post
// THEN I am presented with the :
// post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

const sequelize = require ('../configure/connection');
const {Model, DataTypes} = require('sequelize');

class BlogPost extends Model {}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    }
}); 

module.exports = BlogPost;


