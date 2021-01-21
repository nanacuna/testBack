insert into products (name, brand, description, categories, price, stock, image_Route)
	values ('arroz', 'marolio', 'para comer', 'comestible', 100, 5, null)

insert into categories (name)
values ('comestible')

insert into products_categories (category_id, product_id)
values(1,1)