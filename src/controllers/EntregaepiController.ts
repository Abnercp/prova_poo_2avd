import { Request, Response } from 'express'
import { EntregaService } from '../services/EntregaepiService'

class EntregaController {
    async create(req: Request, res: Response) {
        const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } = req.body
        const entregaServices = new EntregaService()

        try {
            const entrega = await entregaServices.create({funcionario_id, nome_epi, data_entrega, quantidade_entregue})
            return res.json(entrega)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(req: Request, res: Response) {
        const entregaServices = new EntregaService()
      
        try { 
        const entrega = await entregaServices.index()
        return res.json(entrega)
    } catch (err) {
         return res
            .status(400)
            .json({ message: err.message })
       }
    }

    async show(req: Request, res: Response) {
        const entregaServices = new EntregaService()
        const { id } = req.params
     
         try { 
            const entrega = await entregaServices.show({ id })
                return res.json(entrega)
            } catch (err) {
                return res
                    .status(400)
                    .json({ message: err.message })
            }
    }

    async delete(req: Request, res: Response) {
        const entregaServices = new EntregaService()
        const { id } = req.params
      
        try { 
            const entrega = await entregaServices.delete({ id })
                return res.json({ message: 'Id deletado com sucesso!!'})
      
       } catch (err) {
            return res
               .status(400)
               .json({ message: err.message })
            }
    }

    async update(req: Request, res: Response) {
        const entregaServices = new EntregaService()
        const { id } = req.params
        const { funcionario_id, nome_epi, data_entrega, quantidade_entregue } = req.body
     
        try { 
           const entrega = await entregaServices.update({id,
               funcionario_id,
               nome_epi,
               data_entrega,
               quantidade_entregue 
            })
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message })
        }
    }
}

export { EntregaController }