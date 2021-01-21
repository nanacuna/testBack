import { Sequelize } from 'sequelize'

const Products_category = (sequelize) => {
    sequelize.define('products_category', {
        product_category_id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'category_id',
                foreignKeyConstraint: true
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'products',
                key: 'product_id',
                foreignKeyConstraint: true
            }
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
        timestamps: false
    })
}

export default Products_category