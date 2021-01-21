import Sequelize from 'sequelize';

function Categories (sequelize) {
    sequelize.define('categories',
        {
            category_id : {
                type : Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date()
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: new Date()
            }
        },
        {
            timestamps: false,
        }
    );
}

export default Categories