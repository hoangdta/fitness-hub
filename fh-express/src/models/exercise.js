module.exports = (sequelize, DataTypes) => {
    return sequelize.define('exercise', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
        gif: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        detail: {
            allowNull: false,
            type: DataTypes.TEXT,
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
        tableName: 'exercise',
        timestamps: true,
    });
};