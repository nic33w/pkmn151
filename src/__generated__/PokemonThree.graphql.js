/**
 * @generated SignedSource<<de100e8e5fa1b05ac888a11c615b9f11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonThree",
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

node.hash = "f24497c39eb9de2e54c37e1ce8fc0d2a";

module.exports = node;
