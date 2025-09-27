// superhero.model.ts
export interface Superhero {
  id: string;
  name: string;
  biography: {
    'full-name': string;
  };
  image: {
    url: string;
  };
}
