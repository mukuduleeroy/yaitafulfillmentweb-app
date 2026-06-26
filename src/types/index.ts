export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export type PipelineStep = {
  step: string;
  title: string;
  detail: string;
};

export type Spotlight = {
  title: string;
  image: string;
  alt: string;
  detail: string;
};

export type Integration = {
  name: string;
  detail: string;
  logos: Array<{
    name: string;
    src: string;
    width: number;
    height: number;
  }>;
};
