import { EntregasRepository } from '../repositories/EntregaepiRepository'
import { getCustomRepository } from 'typeorm'
import { FuncionariosRepository } from '../repositories/FuncionarioRepository'

interface IEntregasCreate {
    funcionario_id: string
    nome_epi: string
    data_entrega: Date
    quantidade_entregue: number
}

interface IEntregasShow{
    id: string
}

interface IEntregaUpdate {
    id: string
    funcionario_id: string
    nome_epi: string 
    data_entrega: Date
    quantidade_entregue: number
}


class EntregaService {
    async create({ funcionario_id, nome_epi, data_entrega, quantidade_entregue }: IEntregasCreate ){
        const entregaRepository = getCustomRepository(EntregasRepository)
        const funcionarioRepository = getCustomRepository(FuncionariosRepository)

        const findFuncionario = await funcionarioRepository.findOne({
            id: funcionario_id
        })
      
        if (!findFuncionario) {
            throw new Error('Nenhum responsável encontrado')
        }

        const entrega = await entregaRepository.create({
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        await entregaRepository.save(entrega)

        return entrega
    }

    async index() {
        const entregaRepository = getCustomRepository(EntregasRepository)

        const entrega = await entregaRepository.find({
            relations: ['funcionario']
        })
        return entrega;
    }

    async show({ id }: IEntregasShow) {
        const entregaRepository = getCustomRepository(EntregasRepository)
  
        const entrega = await entregaRepository.findOne({id}, {
            relations: ['funcionario']
        })

        if (!entrega) {
            throw new Error('Id nao existe!!')
        }
        return entrega;
    }

   async delete({ id }: IEntregasShow) {
    const entregaRepository = getCustomRepository(EntregasRepository)
 
    const entrega = await entregaRepository.findOne({ id })
 
    if (!entrega) {
        throw new Error('Id nao encontrado!!')
   }
     
    return await entregaRepository.delete ({id})
    }

    async update({id, funcionario_id, nome_epi, data_entrega, quantidade_entregue }: IEntregaUpdate) {
        const entregaRepository = getCustomRepository(EntregasRepository)
        const funcionarioRepository = getCustomRepository(FuncionariosRepository)
        
        let entrega = await entregaRepository.findOne({ id })

        if (!entrega) {
           throw new Error('Id nao existe!')
        }
        
        let funcionario = await funcionarioRepository.findOne({
            id: funcionario_id
        })

        if (!funcionario) {
            throw new Error('Id nao existe!')
        }

        entregaRepository.update({id}, {
            funcionario_id,
            nome_epi,
            data_entrega,
            quantidade_entregue 
        })
               
        let entregaepi = await entregaRepository.findOne({})
        return entregaepi
    }
}

export { EntregaService }

