import { Request, Response, Router } from "express";
import { RecadosRepository } from "../../infra/repositories/recados-repository";
import { CreateRecadosController } from "../controller/create-recados-controller";
import { ListRecadosController } from "../controller/list-recados-controller";
import { UpdateRecadosController } from "../controller/update-recados-controller";
import { DeleteRecadosController } from "../controller/delete-recados-controller";

export class RecadosRouter {
    static getRoutes() {
        const routes = Router();
        
        const recadosRepo = new RecadosRepository();
        const createRecadosController = new CreateRecadosController(recadosRepo);
        const listRecadosController = new ListRecadosController(recadosRepo);
        const updateRecadosController = new UpdateRecadosController(recadosRepo);
        const deleteRecadosController = new DeleteRecadosController(recadosRepo);

        routes.get('/', (req: Request, res: Response) => listRecadosController.execute(req, res));
        routes.post('/', (req: Request, res: Response) => createRecadosController.execute(req, res));
        routes.put('/:uid', (req: Request, res: Response) => updateRecadosController.execute(req, res));
        routes.delete('/:uid', (req: Request, res: Response) => deleteRecadosController.execute(req, res));

        return routes;
    }
}
