import { Repository, EntityRepository } from 'typeorm'
import { Entrega } from '../entities/Entregaepi'

@EntityRepository(Entrega)
class EntregasRepository extends Repository<Entrega> { 
}

export { EntregasRepository }