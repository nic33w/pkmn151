/**
 * @generated SignedSource<<bacfcdb16cda382acff054e706c161f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonStats",
  "selections": [
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
  "type": "pokemon_v2_pokemon",
  "abstractKey": null
};

node.hash = "53d07fa79267496465413d0439ff7ca2";

module.exports = node;
