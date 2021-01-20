const Sequelize = require('sequelize')

function Categories (sequelize) {
    sequelize.define('categories', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
    });
}

module.exports = Categories