module.exports = (sequelize, DataTypes) => {
    return sequelize.define('program', {
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
        tableName: 'program',
        timestamps: true,
    });
};