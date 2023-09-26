import CasoDeUso from "../../shared/CasoDeUso";

type Entrada ={
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements CasoDeUso<Entrada, void>{
    executar(entrada: Entrada): Promise<void> {
        throw new Error("Method not implemented.");
    }

}