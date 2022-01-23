import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { badRequest, ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { RecadosRepository } from "../../infra/repositories/recados-repository";

export class CreateRecadosController implements Controller {
    constructor(private repository: RecadosRepository) {}

    async execute(req: Request, res: Response) {
        try {
            const { descricao, detalhamento } = req.body;

            if(!descricao) {
                return badRequest(res, "descricao not provided");
            }


            await this.repository.create({
                 descricao, detalhamento
            });

            return ok(res);
            
        } catch(error) {
            return serverError(res, String(error));
        }
    }
}
