const { Model, DataTypes } = require ('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../configure/connection')

class User extends Model {}
