// import { UseCase } from "../../../../../core/domain/contracts/usecase";
// import { NotFoundError } from "../../../../../core/domain/errors/not-found-error";
// import { CacheRepository } from "../../../../../core/infra/repositories/cache-repository";
// import { RecadosRepository } from "../../../infra/repositories/recados-repository";
// import { IRecados } from "../../model/recados";
// import { FindRecadoByIdParams } from "./models/find-recado-by-id-params";

// export class FindRecadoByIdUseCase implements UseCase {
//     constructor(
//         private repository: RecadosRepository,
//         private cacheRepository: CacheRepository
//     ) {}
//     async run(data: FindRecadoByIdParams) {
//         try {
//             const cacheRecado = await this.cacheRepository.get(
//                 `recado:${data.id}`
//             );
//             if (cacheRecado) {
//                 return {
//                     ...cacheRecado,
//                     cache: true,
//                 };
//             }

//             let recado: IRecados | undefined = await this.repository.find(
//                 data.id
//             );

//             if (!recado) throw new NotFoundError("Recado");

//             return recado;
//         } catch (error: any) {
//             throw new Error(error.toString());
//         }
//     }
// }