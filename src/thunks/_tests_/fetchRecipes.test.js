import { fetchRecipes } from '../fetchRecipes';
import { addRecipes, hasErrored, isLoading } from '../../actions';

describe('fetchRecipes', () => {
  let mockUrl;
  let mockDispatch;
  beforeEach(() => {
    mockUrl = 'https://api.edamam.com/search';
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the isLoading(true)', () => {
    const thunk = fetchRecipes(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });
  it('should dispatch hasErrored with a message if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'An error has occured'
      })
    );

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(
      hasErrored('An error has occured')
    );
  });
  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true
      })
    );

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch addRecipes if the response is ok', async () => {
    const mockRecipes = [
      { label: 'Sharp cheddar sandwich' },
      { label: 'Cheddar olives' },
      { label: 'Cheddar cheese puffs' }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            hits: mockRecipes
          })
      })
    );

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addRecipes(mockRecipes));
  });
});
