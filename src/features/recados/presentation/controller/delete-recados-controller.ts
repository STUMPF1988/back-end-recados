import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { badRequest, ok, serverError } from "../../../../core/presentation/helpers/http-handler";
import { DeleteRecadosUseCase } from "../../domain/usecases/delete-recados-usecase";


export class DeleteRecadosController implements Controller {
    constructor(private deleteRecadosUseCase: DeleteRecadosUseCase) {}

    async execute(req: Request, res: Response) {
        try {
            const { uid } = req.params;

            if (!uid) {return badRequest (res, "ID não informado"); }

            await this.deleteRecadosUseCase.run({uid})

            return ok(res);
            
        } catch(error) {
            return serverError(res, error);
        }
    }
}