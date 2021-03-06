import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { CreateRecadosUseCase } from "../../domain/usecases/create-recados-usecase";


export class CreateRecadosController implements Controller {
    constructor(private createRecadosUseCase: CreateRecadosUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const { descricao, detalhamento } = req.body;


            await this.createRecadosUseCase.run({
                 descricao, detalhamento
            });

            return ok(res, "Recado cadastrado com sucesso!");
            
        } catch(error) {
            return serverError(res, error);
        }
    }
}
