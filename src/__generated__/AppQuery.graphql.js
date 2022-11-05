/**
 * @generated SignedSource<<a3b0d43a6168e45237646a4b778d5e94>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 151
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": {
      "id": "asc"
    }
  },
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "is_default": {
        "_eq": true
      }
    }
  }
],
v1 = {
  "alias": "_id",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": "pokemons",
        "args": (v0/*: any*/),
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonListItem"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonThree"
          }
        ],
        "storageKey": "pokemon_v2_pokemon(limit:151,order_by:{\"id\":\"asc\"},where:{\"is_default\":{\"_eq\":true}})"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": "pokemons",
        "args": (v0/*: any*/),
        "concreteType": "pokemon_v2_pokemon",
        "kind": "LinkedField",
        "name": "pokemon_v2_pokemon",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": "abilities",
            "args": null,
            "concreteType": "pokemon_v2_pokemonability",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonabilities",
            "plural": true,
            "selections": [
              {
                "alias": "ability",
                "args": null,
                "concreteType": "pokemon_v2_ability",
                "kind": "LinkedField",
                "name": "pokemon_v2_ability",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "types",
            "args": null,
            "concreteType": "pokemon_v2_pokemontype",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemontypes",
            "plural": true,
            "selections": [
              {
                "alias": "type",
                "args": null,
                "concreteType": "pokemon_v2_type",
                "kind": "LinkedField",
                "name": "pokemon_v2_type",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "stats",
            "args": null,
            "concreteType": "pokemon_v2_pokemonstat",
            "kind": "LinkedField",
            "name": "pokemon_v2_pokemonstats",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "base_stat",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "pokemon_v2_pokemon(limit:151,order_by:{\"id\":\"asc\"},where:{\"is_default\":{\"_eq\":true}})"
      }
    ]
  },
  "params": {
    "cacheID": "763209a43d4287c34fa91f9c93775bb0",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  pokemons: pokemon_v2_pokemon(order_by: {id: asc}, limit: 151, where: {is_default: {_eq: true}}) {\n    _id: id\n    ...PokemonListItem\n    ...PokemonThree\n  }\n}\n\nfragment PokemonListItem on pokemon_v2_pokemon {\n  name\n  _id: id\n  abilities: pokemon_v2_pokemonabilities {\n    ability: pokemon_v2_ability {\n      name\n    }\n  }\n  types: pokemon_v2_pokemontypes {\n    type: pokemon_v2_type {\n      name\n    }\n  }\n}\n\nfragment PokemonThree on pokemon_v2_pokemon {\n  stats: pokemon_v2_pokemonstats {\n    base_stat\n  }\n}\n"
  }
};
})();

node.hash = "9fff40e1ad7d0434e1278e6f72efa9ea";

module.exports = node;
