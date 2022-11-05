import React, {useState} from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import PokemonList from './PokemonList';
import PokemonThree from './PokemonThree';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query AppQuery {
    pokemons: pokemon_v2_pokemon(order_by: {id: asc}, limit: 151, where: {is_default: {_eq: true}}) {
      _id: id
      ...PokemonListItem
      ...PokemonThree
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {});

function App(props) {
  const [currentId, setCurrentId] = useState(1)
  const [pokemonHasChanged, setPokemonHasChanged] = useState(false)
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <div>Discover Pokemon</div>
        <span>
          <PokemonThree currentId={currentId} pokemon={data.pokemons.find(elem=>elem._id===currentId)} pokemonHasChanged={pokemonHasChanged} setPokemonHasChanged={setPokemonHasChanged} />
        </span>
        <span className='ListContainer' width='40%'>         
          <PokemonList setCurrentId={setCurrentId} pokemons={data.pokemons} setPokemonHasChanged={setPokemonHasChanged} />
        </span>
      </header>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;