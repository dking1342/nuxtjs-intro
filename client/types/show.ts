interface Schedule {
  time: string;
  days: string[]
}

interface Rating {
  average: number;
}

interface NetworkCountry {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: NetworkCountry
  officialSite: string;
}

interface Externals {
  tvrage: number;
  thetvdb: number
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

interface LinksSub {
  href: string;
}

interface Links {
  self: LinksSub;
  previousepisode: LinksSub
  nextepisode: LinksSub
}



export interface ShowSubType {
  id: number;
  url: string;
  name: string
  type: string;
  language: string
  genres: string[];
  status: string
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string;
  schedule: Schedule;
  rating: Rating
  weight: number,
  network: Network;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface ShowType {
  score: number;
  show: ShowSubType;
}