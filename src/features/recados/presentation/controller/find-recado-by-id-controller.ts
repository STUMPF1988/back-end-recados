// import { ok } from "assert";
// import { Request, Response } from "express";
// import { Controller } from "../../../../core/presentation/contracts/controller";
// import { badRequest, serverError } from "../../../../core/presentation/helpers/http-handler";
// import { FindRecadoByIdUseCase } from "../../domain/usecases/find-recado-by-id/find-recado-by-id-usecase";

// export class FindRecadotByIdController implements Controller {
//     constructor(private findRecadoByIdUseCase: FindRecadoByIdUseCase) {}

//     async execute(req: Request, res: Response) {
//         try {
//             const id = req.params.id;

//             if (!id) {
//                 return badRequest(res, "ID não informado");
//             }

//             const recado = await this.findRecadoByIdUseCase.run({
//                 id,
//             });

//             return ok(res, recado);
//         } catch (error) {
//             return serverError(res, error);
//         }
//     }
// }
