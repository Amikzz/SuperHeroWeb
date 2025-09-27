export interface Superhero {
  id: string;
  name: string;
  biography?: {
    'full-name'?: string;
    'alter-egos'?: string;
    aliases?: string[];
    'place-of-birth'?: string;
    'first-appearance'?: string;
    publisher?: string;
    alignment?: string;
  };
  appearance?: {
    gender?: string;
    race?: string;
    height?: string[];
    weight?: string[];
    'eye-color'?: string;
    'hair-color'?: string;
  };
  work?: {
    occupation?: string;
    base?: string;
  };
  connections?: {
    'group-affiliation'?: string;
    relatives?: string;
  };
}
