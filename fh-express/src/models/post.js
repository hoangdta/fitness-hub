module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        content: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        author: {
            allowNull: true,
            type: DataTypes.STRING(50),
            defaultValue: 'unknown'
        },
        image: {
            allowNull: true,
            type: DataTypes.STRING,
            defaultValue: null,
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
        tableName: 'post',
        timestamps: true,
    });
};