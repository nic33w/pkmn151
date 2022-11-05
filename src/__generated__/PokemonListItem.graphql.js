/**
 * @generated SignedSource<<bc13a131ed0b4530f3722deed5f65a19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonListItem",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "_id",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
          "selections": (v1/*: any*/),
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
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};
})();

node.hash = "463ce8165367a8c97ad4c0ab05ee8ff2";

module.exports = node;
