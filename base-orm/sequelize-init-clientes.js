// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + './.data/clientes.sqlite');

const clientes = sequelize.define("clientes", {

    IdCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ApellidoYNombre:  {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre y Apellido es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre y apellido debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este Nombre ya existe en la tabla!",
      },
    },
    DNI:{
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    timestamps: false,
    }
  );

  module.exports = {
    sequelize,
    clientes
  }