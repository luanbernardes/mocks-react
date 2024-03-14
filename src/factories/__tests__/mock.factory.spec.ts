import { MockFactory } from '../mock.factory';

type ExampleType1 = {
  id: string;
  items: string[];
};

type ExampleType2 = {
  data: {
    id: string;
    form: {
      email: string;
    };
    actions: number[];
  };
};

describe('MockFactory', () => {
  it('should method build() return a new instance of object successfully', () => {
    const instance = {
      id: '123',
      items: []
    };
    const result = new MockFactory<ExampleType1>(instance).build();

    expect(instance).not.toBe(result);
    expect(result).toEqual({
      id: '123',
      items: []
    });
  });

  it('should method build({...}) with params override a value of new object instance ', () => {
    const factory = new MockFactory<ExampleType1>({
      id: '123',
      items: ['456']
    });

    const keepOriginal = factory.build();
    const valueOverride = factory.build(
      {
        items: ['123']
      },
      { mergeArray: false }
    );

    expect(keepOriginal).toEqual({
      id: '123',
      items: ['456']
    });
    expect(valueOverride).toEqual({
      id: '123',
      items: ['123']
    });
  });

  it('should method build({...}) merge value of new object instance ', () => {
    const factory = new MockFactory<ExampleType2>({
      data: {
        id: '123',
        form: {
          email: 'email@email.com'
        },
        actions: [1, 2, 3]
      }
    });

    const mergedValues = factory.build(
      {
        data: {
          form: {
            email: 'override',
            name: 'new value'
          },
          actions: [1, 2, 3, 4, 5, 6]
        }
      },
      { mergeObject: true, mergeArray: true }
    );

    expect(mergedValues).toEqual({
      data: {
        id: '123',
        form: {
          email: 'override',
          name: 'new value'
        },
        actions: [1, 2, 3, 4, 5, 6]
      }
    });
  });
});
