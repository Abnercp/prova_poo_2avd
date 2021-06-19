import { Request, Response } from 'express'
import { FuncionarioService } from '../services/FuncionarioService'

class FuncionarioController {
    async create(req: Request, res: Response) {
        const { nome, cpf, funcao } = req.body
        const funcionarioServices = new FuncionarioService()

        try { 
            const funcionario = await funcionarioServices.create({nome, cpf, funcao})
            return res.json(funcionario)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(req: Request, res: Response) {
        const funcionarioServices = new FuncionarioService()
      
        try { 
        const funcionario = await funcionarioServices.index()
        return res.json(funcionario)
    } catch (err) {
         return res
            .status(400)
            .json({ message: err.message })
       }
    }
}

export { FuncionarioController }