module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        companyName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bonusList: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        subject: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
        amountOfMoney: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })

    Company.associate = function (models) {
        Company.belongsTo(models.User)
    }

    return Company
}