import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { RecadosRepository } from "../../infra/repositories/recados-repository";

export class DeleteRecadosController implements Controller {
    constructor(private repository: RecadosRepository) {}

    async execute(req: Request, res: Response) {
        try {
            const { uid } = req.params;

            await this.repository.delete(uid)

            return ok(res);
            
        } catch(error) {
            return serverError(res, String(error));
        }
    }
}