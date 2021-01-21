import Sequelize from 'sequelize';

function Categories (sequelize) {
    sequelize.define('Categories', {
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

export default Categories