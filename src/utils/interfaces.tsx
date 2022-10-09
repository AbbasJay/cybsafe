export interface IOther {
  dream_world: {
    front_default: string;
  };
  ["official-artwork"]: {
    front_default: string;
  };
}

export interface ISprites {
  front_shiny: string;
  back_default: string;
  other: IOther;
}

export interface IStats {
  stat: {
    name: string;
  };
  base_stat: string;
}

export interface IType {
  type: {
    name: string;
  };
}

export interface IAbilities {
  ability: {
    name: string;
  };
}

export interface IMoves {
  move: {
    name: string;
  };
}

export interface IData {
  results: [
    {
      name: string;
    }
  ];
}

export interface IPokemonData {
  name: string;
  url?: string;
  sprites: string;
  types: Array<any>;
  abilities: string;
  stats: string;
  moves: string;
}

export interface IAllPokemonData {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results: Array<IPokemonData>;
}

export interface IPokemonsData {
  data: IAllPokemonData;
}
