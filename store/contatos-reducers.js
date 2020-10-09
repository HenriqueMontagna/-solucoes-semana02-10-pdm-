import { ADD_CONTATO, LISTA_CONTATOS } from "./contatos-actions";
import ContatoModelo from '../modelo/ContatoModelo'

const estadoInicial = {
    contatos: []
}

export default (estado = estadoInicial, action) => {

    switch (action.type) {
        case ADD_CONTATO:
            const contato = new ContatoModelo(
                action.dadosContato.id.toString(),
                action.dadosContato.nomeContato,
                action.dadosContato.numeroContato,
                action.dadosContato.imagemURI)
            return {
                contatos: estado.contatos.concat(contato)
            }
        case LISTA_CONTATOS:
            return {
                contatos: action.contatos.map(contato => new ContatoModelo(contato.id.toString(), contato.nomeContato, contato.numeroContato))
            }

        default:
            return estado;
    }
}