export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Banner = {
  __typename?: 'Banner';
  primaryText?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
};

export type Container = {
  __typename?: 'Container';
  containerType: ContainerType;
  elements: Array<Maybe<ContainerElement>>;
};

export type ContainerElement = Banner;

export enum ContainerType {
  Column = 'COLUMN',
  Row = 'ROW'
}

export type Query = {
  __typename?: 'Query';
  sampleScreen?: Maybe<SampleScreenView>;
};

export type SampleScreenView = {
  __typename?: 'SampleScreenView';
  elements: Array<ViewElement>;
};

export type ViewElement = Container;
