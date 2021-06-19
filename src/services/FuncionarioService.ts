import { FuncionariosRepository } from '../repositories/FuncionarioRepository'
import { getCustomRepository } from 'typeorm'

interface IFuncionariosCreate {
    nome:string
    cpf: string
    funcao: string
}

class FuncionarioService {
    async create({ nome, cpf, funcao }: IFuncionariosCreate ){
        const funcionarioRepository = getCustomRepository(FuncionariosRepository)

        const funcionario = funcionarioRepository.create({
            nome,
            cpf,
            funcao
        })

        await funcionarioRepository.save(funcionario)

        return funcionario
    }

    async index() {
        const funcionarioRepository = getCustomRepository(FuncionariosRepository)

        const funcionario = await funcionarioRepository.find()
    
        return funcionario;
    }

}

export { FuncionarioService }