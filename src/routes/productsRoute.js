import productsController from '../controllers/productsController'
import controller from '../controllers/productsController'

export default (app) => {
	app.post('/products/', controller.persist)
	app.patch('/products/:id', controller.persist)
	app.delete('/products/destroy/:id', controller.destroy)
	app.get('/products/', controller.get)
	app.get('/products-by-category/:id',productsController.getAll)
	app.get('/products/:id', controller.get)
}