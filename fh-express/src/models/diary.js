module.exports = (sequelize, DataTypes) => {
    return sequelize.define('diary', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sets: {
            allowNull: true,
            type: DataTypes.INTEGER(10),
            default: 0,
        },
        reps: {
            allowNull: true,
            type: DataTypes.INTEGER(10),
            default: 0,
        },
        duration: {
            allowNull: true,
            type: DataTypes.STRING(25),
            default: null,
        },
        note: {
            allowNull: true,
            type: DataTypes.STRING(50),
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
        tableName: 'diary',
        timestamps: true,
    });
};