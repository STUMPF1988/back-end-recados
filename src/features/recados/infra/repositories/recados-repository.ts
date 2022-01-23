import { Repository } from "typeorm";
import { DatabaseConnection } from "../../../../core/infra/database/connections/connection";
import { Recados } from "../../../../core/infra/database/entities/Recados";
import { IRecados } from "../../../../features/recados/domain/model/recados";

export class RecadosRepository {
    private repository: Repository<Recados>;

    constructor() {
        this.repository = DatabaseConnection.getConnection().manager.getRepository(Recados);
    }

    async create(recados: IRecados) {
        const recadosEntity = this.repository.create(recados);
        await this.repository.save(recadosEntity);
    }


    async list() {
        return await this.repository.find();
    }

    
    async update(uid: string, data:IRecados) {
        const recados = await this.repository.findOne(uid);


        if (!recados) {
            throw Error("Recado nao existe");
        }

        await this.repository.update(uid, {
            descricao: data.descricao ?? recados.descricao,
            detalhamento: data.detalhamento ?? recados.detalhamento,
        });
    }


    async delete(uid: string) {
        const recados = await this.repository.findOne(uid);


        if (!recados) {
            throw Error("Recado nao existe");
        }

        await this.repository.delete(uid);
        
    }
    
}
