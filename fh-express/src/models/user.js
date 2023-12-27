module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        userName: {
            allowNull: false,
            type: DataTypes.STRING(50),
          },
        sex: {
            allowNull: true,
            type: DataTypes.STRING(10),
            defaultValue: null, 
          },
        age: {
          allowNull: true,
          type: DataTypes.INTEGER,
          defaultValue: null, 
        },
        password: {
          allowNull: false,
          type: DataTypes.STRING(50),
        },
        role: {
          allowNull: false,
          type: DataTypes.STRING(10),
        },
        createAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updateAt: {
          allowNull: true,
          type: DataTypes.DATE,
          defaultValue: null, 
        },
    }, {
        tableName: 'user',
        timestamps: true,
    });
};