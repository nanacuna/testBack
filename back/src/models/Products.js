import Sequelize from 'sequelize';

const Products = (sequelize) => {
    sequelize.define('products',
        {
            product_id : {
                type : Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            brand: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            price: {
                type: Sequelize.DECIMAL(20, 2), 
                allowNull: false
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true
                }
            },
            image_route: {
                type: Sequelize.STRING
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
    )
}

export default Products