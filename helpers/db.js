import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato ('
                    +'id INTEGER PRIMARY KEY,'
                    +'nomeContato TEXT NOT NULL,' 
                    +'numeroContato TEXT NOT NULL,'
                    +'imagemURI TEXT NOT NULL)',
                [],
                () => { resolve() },
                (_, error) => { reject(error) }
            );
        });
    });
    return promise;
}

export const inserirContato = (nomeContato, numeroContato, imagemURI) => {
     

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato(nomeContato, numeroContato, imagemURI) VALUES(?, ?, ?)',
                [nomeContato, numeroContato, imagemURI],
                (_, resultado) => { resolve(resultado) },
                (_, error) => { reject(error) }
                );
                // console.warn(nomeContato)
                // console.warn(numeroContato);
                // console.warn(imagemURI);
        })

    });
    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx) =>{
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, error) => { reject(error) }
            )
        })
    })
}

export const deletarContato = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM tb_contato WHERE id = ?',
                [id],
                (_, resultado) => { resolve(resultado) },
                (_, error) => { reject(error) }
            );
        });
    });
}