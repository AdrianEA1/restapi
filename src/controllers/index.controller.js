const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'user_api',
    password: '12345',
    database: 'firstapi',
    port: '5432'    
});

const getUsers = async (req,res) => {
    const response = await pool.query(`SELECT * FROM users`)
    res.status(200).json(response.rows)
}

const getUserById = async (req, res) =>{
    const id = req.params.id
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    res.json(response.rows)
    // res.send('User ID' + req.params.id)
}

const creaUser = async (req,res) =>{
    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({
        message: 'Usuario añadido satisfactoriamente',
        body: {
            user: {name, email}
        }
    })  
}

const updaUser = async (req, res) => {
    const id = req.params.id
    const {name, email} = req.body
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 ', [name, email, id])
    console.log(response)
    res.json('Usuario actualizado correctamente')
}

const deleUser = async (req, res) => {
    const id = req.params.id
    const response = await pool.query("DELETE FROM users WHERE id=$1", [id])
    console.log(response)
    res.json({message:`Se ha eliminado el usuario [${id}] con exito`}) 
} 

module.exports = {
    getUsers,
    creaUser,
    getUserById,
    deleUser,
    updaUser
}