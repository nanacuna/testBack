import products from './Products.js'
import categories from './Categories.js'
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
            reference: {
                model: categories,
                key: 'category_id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            reference: {
                model: products,
                key: 'product_id'
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
        timestamps: false,
    })
}

products.belongsToMany(categories, { through: Products_category });
categories.belongsToMany(products, { through: Products_category });

export default Products_category