import mergeWith from 'lodash/mergeWith';

export type Config = {
  mergeArray?: boolean;
  mergeObject?: boolean;
};

type MergePartial<T, U> = T extends object ? U & RecursivePartial<T> : U;

type RecursivePartial<T> = {
  [P in keyof T]?: MergePartial<T[P], Partial<T[P]>>;
};

export class MockFactory<T> {
  constructor(public source: T) {}

  public build<N = T>(
    newSource?: MergePartial<T, N>,
    config: Config = {
      mergeArray: true,
      mergeObject: true
    }
  ): N {
    return mergeWith({ ...this.source }, newSource, (value: any, srcValue: any) => {
      if (Array.isArray(value) && !config.mergeArray) {
        return srcValue;
      }
      if (typeof value === 'object' && !config.mergeObject) {
        return srcValue;
      }
    }) as N;
  }
}
