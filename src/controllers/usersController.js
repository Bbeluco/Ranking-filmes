import conn from "../database/dbConfig.js";

class UsersController {
    static listUsers = (req, res) => {
        const sql = 'SELECT * FROM users';
        conn.query(sql, (error, result) => {
            if(error) {
                res.status(503).send(error);
            } else {
                res.status(200).send(result);
            }
        })
    }

    static createUser = (req, res) => {
        const name = req.body.name.trim();

        const regexSanitizer = new RegExp(/^([A-Za-z])+$/g);

        if(!name || !regexSanitizer.test(name)) {
            res.status(400).send({message: "Send a valid user"})
        }
        
        const sql = `INSERT INTO users (name, movies) VALUES ('${name}', '')`
        conn.query(sql, (error, result) => {
            if(error) {
                res.status(503).send(error);
            } else {
                res.status(201).send({message: "User created", id: result['insertId']})
            }
        })
    }

    static deleteUser = (req, res) => {
        let id = req.params.id;
        try{
            id = Number(id);

            const sql = `DELETE FROM users WHERE id=${id}`

            conn.query(sql, (error, result) => {
                if(error) {
                    res.status(503).send(error);
                } else {
                    res.status(201).send({message: "User deleted"})
                }
            })
        } catch(error) {
            
        }
    }

    static appendMovie = (req, res) => {
        let id = req.params.id

        try {
            console.log(listSpecificUser(id))
            res.status(200).send({mensagem: listSpecificUser(id)});
        } catch(error) {
            res.status(400).send({message: "Send a valid user"})
        }
    }
}

function listSpecificUser(id) {
    try{
        const regexSanitizer = new RegExp(/\d{1,}/g);
        id = Number(id);

        let r = 123;

        if(regexSanitizer.test(id)) {
            const sql = `SELECT * FROM users WHERE id=${id}`
            conn.query(sql, (error, result) => {
                if(error) {
                    res.status(503).send(error);
                } else {
                    console.log("ESTOU AQU IDENTRO")
                    return result;
                }
            })
        }
        return r;
    } catch(error) {
        res.status(400).send({message: "Send a valid user"})
    }
}

export default UsersController;
