const { listarPokemons, detalharPokemon } = require('utils-playground')

const listaDePokemons = async (req, res) => {
    const { pagina } = req.query
    const listaPokemons = await listarPokemons(pagina ?? 1)
    return res.json(listaPokemons.results)
}

const obterPokemon = async (req, res) => {
    const { idOuNome } = req.params
    const detalheDoPokemon = await detalharPokemon(idOuNome)
    const { id, nome, height, weight, base_experience, forms, abilities, species } = detalheDoPokemon
    return res.json({ id, nome, height, weight, base_experience, forms, abilities, species })
}

module.exports = {
    listaDePokemons,
    obterPokemon
}