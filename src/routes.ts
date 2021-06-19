import { Router } from 'express'
import { FuncionarioController } from './controllers/FuncionarioController'
import { EntregaController } from './controllers/EntregaepiController'

const routes = Router();

const funcionarioController = new FuncionarioController()
const entregaController = new EntregaController()


routes.post('/funcionarios', funcionarioController.create)
routes.get('/funcionarios', funcionarioController.index)

routes.post('/entregaepi', entregaController.create)
routes.get('/entregaepi', entregaController.index)
routes.get('/entregaepi/:id' , entregaController.show)
routes.delete('/entregaepi/:id', entregaController.delete)
routes.put('/entregaepi/:id', entregaController.update)

export { routes }

