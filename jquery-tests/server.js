const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())

const projects = []

app.get('/create-user/', (request, response) => {

    return response.json(projects)
})

app.post('/create-user/', (request, response) => {
    const { cpf, ano_nascimento, cidade, uf, sexo }  = request.body

    const project = { cpf, ano_nascimento, cidade, uf, sexo } 
    console.log(project)

    projects.push(project)

    return response.json(project)
})

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
})