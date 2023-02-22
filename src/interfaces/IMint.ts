type trait = {
  trait_type: string;
  value: string | number;
};

export interface IMetadata {
  name: string;
  description: number;
  attributes: trait[];
  image: string;
}

export type IResponseData = {
  metadata: IMetadata;
  token_url: string;
  token_id: number;
};
