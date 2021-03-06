import { fetchRecipes } from '../fetchRecipes';
import { addRecipes, hasErrored, isLoading } from '../../actions';
import { cleanRecipeData, sendToLocalStorage } from '../../helper/helper'

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

  it.skip('should dispatch addRecipes if the response is ok', async () => {
    const mockUncleanRecipes = [
      {
        recipe: {
          uri:
            'http://www.edamam.com/ontologies/edamam.owl#recipe_5e2060e86df88c3ca51e83fe8ea7407b',
          label: 'Brie & Spinach Croissants',
          image:
            'https://www.edamam.com/web-img/1ad/1adb325f2db4c38149b79c8870820ff0.jpg',
          source: 'BBC Good Food',
          url: 'http://www.bbcgoodfood.com/recipes/4324/',
          shareAs:
            'http://www.edamam.com/recipe/brie-spinach-croissants-5e2060e86df88c3ca51e83fe8ea7407b/brie',
          yields: 2,
          dietLabels: ['Low-Carb'],
          healthLabels: [
            'Sugar-Conscious',
            'Vegetarian',
            'Peanut-Free',
            'Tree-Nut-Free',
            'Alcohol-Free'
          ],
          cautions: [],
          ingredientLines: [
            'butter',
            '½ garlic clove , crushed',
            '6 thick slices of brie',
            '100.0g young leaf spinach , washed',
            '2 croissants , slit open lengthways'
          ],
          ingredients: [
            {
              text: 'butter',
              weight: 4.45536
            },
            {
              text: '½ garlic clove , crushed',
              weight: 1.5
            },
            {
              text: '6 thick slices of brie',
              weight: 170.10000000000002
            },
            {
              text: '100.0g young leaf spinach , washed',
              weight: 100
            },
            {
              text: '2 croissants , slit open lengthways',
              weight: 56
            }
          ],
          calories: 852.6739312000001,
          totalWeight: 332.05536000000006,
          totalTime: 0,
          totalNutrients: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 852.6739312000001,
              unit: 'kcal'
            },
            FAT: {
              label: 'Fat',
              quantity: 62.854922496000015,
              unit: 'g'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 38.49641432480001,
              unit: 'g'
            },
            FATRN: {
              label: 'Trans',
              quantity: 0.14604670079999998,
              unit: 'g'
            },
            FAMS: {
              label: 'Monounsaturated',
              quantity: 17.6708392256,
              unit: 'g'
            },
            FAPU: {
              label: 'Polyunsaturated',
              quantity: 2.3219776048000003,
              unit: 'g'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 30.542023216,
              unit: 'g'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 3.6875,
              unit: 'g'
            },
            SUGAR: {
              label: 'Sugars',
              quantity: 7.508723216,
              unit: 'g'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 42.88102056,
              unit: 'g'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 217.19902400000004,
              unit: 'mg'
            },
            NA: {
              label: 'Sodium',
              quantity: 1411.1940896,
              unit: 'mg'
            },
            CA: {
              label: 'Calcium',
              quantity: 436.48828640000005,
              unit: 'mg'
            },
            MG: {
              label: 'Magnesium',
              quantity: 122.44410720000002,
              unit: 'mg'
            },
            K: {
              label: 'Potassium',
              quantity: 889.7162864000001,
              unit: 'mg'
            },
            FE: {
              label: 'Iron',
              quantity: 4.723691072,
              unit: 'mg'
            },
            ZN: {
              label: 'Zinc',
              quantity: 5.019789824000001,
              unit: 'mg'
            },
            P: {
              label: 'Phosphorus',
              quantity: 430.9522864000001,
              unit: 'mg'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 910.8086624000001,
              unit: 'µg'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 28.68,
              unit: 'mg'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 0.4175727680000001,
              unit: 'mg'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 1.2116448224000003,
              unit: 'mg'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 2.6080312512000003,
              unit: 'mg'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 0.6458736608000001,
              unit: 'mg'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 377.54366080000005,
              unit: 'µg'
            },
            FOLFD: {
              label: 'Folate (food)',
              quantity: 320.42366080000005,
              unit: 'µg'
            },
            FOLAC: {
              label: 'Folic acid',
              quantity: 33.6,
              unit: 'µg'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 2.903824112,
              unit: 'µg'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 0.9173304000000001,
              unit: 'µg'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 3.0132043520000003,
              unit: 'mg'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 488.15767519999997,
              unit: 'µg'
            }
          },
          totalDaily: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 42.633696560000004,
              unit: '%'
            },
            FAT: {
              label: 'Fat',
              quantity: 96.69988076307695,
              unit: '%'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 192.48207162400004,
              unit: '%'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 10.180674405333335,
              unit: '%'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 14.75,
              unit: '%'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 85.76204112,
              unit: '%'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 72.39967466666667,
              unit: '%'
            },
            NA: {
              label: 'Sodium',
              quantity: 58.79975373333333,
              unit: '%'
            },
            CA: {
              label: 'Calcium',
              quantity: 43.648828640000005,
              unit: '%'
            },
            MG: {
              label: 'Magnesium',
              quantity: 29.153358857142862,
              unit: '%'
            },
            K: {
              label: 'Potassium',
              quantity: 18.93013375319149,
              unit: '%'
            },
            FE: {
              label: 'Iron',
              quantity: 26.242728177777778,
              unit: '%'
            },
            ZN: {
              label: 'Zinc',
              quantity: 45.634452945454555,
              unit: '%'
            },
            P: {
              label: 'Phosphorus',
              quantity: 61.56461234285715,
              unit: '%'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 101.2009624888889,
              unit: '%'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 31.866666666666667,
              unit: '%'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 34.79773066666667,
              unit: '%'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 93.2034478769231,
              unit: '%'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 16.300195320000004,
              unit: '%'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 49.682589292307696,
              unit: '%'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 94.38591520000001,
              unit: '%'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 120.99267133333335,
              unit: '%'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 6.115536000000001,
              unit: '%'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 20.088029013333333,
              unit: '%'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 406.7980626666666,
              unit: '%'
            }
          },
          digest: [
            {
              label: 'Fat',
              tag: 'FAT',
              schemaOrgTag: 'fatContent',
              total: 62.854922496000015,
              hasRDI: true,
              daily: 96.69988076307695,
              unit: 'g',
              sub: [
                {
                  label: 'Saturated',
                  tag: 'FASAT',
                  schemaOrgTag: 'saturatedFatContent',
                  total: 38.49641432480001,
                  hasRDI: true,
                  daily: 192.48207162400004,
                  unit: 'g'
                },
                {
                  label: 'Trans',
                  tag: 'FATRN',
                  schemaOrgTag: 'transFatContent',
                  total: 0.14604670079999998,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Monounsaturated',
                  tag: 'FAMS',
                  schemaOrgTag: null,
                  total: 17.6708392256,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Polyunsaturated',
                  tag: 'FAPU',
                  schemaOrgTag: null,
                  total: 2.3219776048000003,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Carbs',
              tag: 'CHOCDF',
              schemaOrgTag: 'carbohydrateContent',
              total: 30.542023216,
              hasRDI: true,
              daily: 10.180674405333335,
              unit: 'g',
              sub: [
                {
                  label: 'Carbs (net)',
                  tag: 'CHOCDF.net',
                  schemaOrgTag: null,
                  total: 26.854523216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Fiber',
                  tag: 'FIBTG',
                  schemaOrgTag: 'fiberContent',
                  total: 3.6875,
                  hasRDI: true,
                  daily: 14.75,
                  unit: 'g'
                },
                {
                  label: 'Sugars',
                  tag: 'SUGAR',
                  schemaOrgTag: 'sugarContent',
                  total: 7.508723216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Sugars, added',
                  tag: 'SUGAR.added',
                  schemaOrgTag: null,
                  total: 0,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Protein',
              tag: 'PROCNT',
              schemaOrgTag: 'proteinContent',
              total: 42.88102056,
              hasRDI: true,
              daily: 85.76204112,
              unit: 'g'
            },
            {
              label: 'Cholesterol',
              tag: 'CHOLE',
              schemaOrgTag: 'cholesterolContent',
              total: 217.19902400000004,
              hasRDI: true,
              daily: 72.39967466666667,
              unit: 'mg'
            },
            {
              label: 'Sodium',
              tag: 'NA',
              schemaOrgTag: 'sodiumContent',
              total: 1411.1940896,
              hasRDI: true,
              daily: 58.79975373333333,
              unit: 'mg'
            },
            {
              label: 'Calcium',
              tag: 'CA',
              schemaOrgTag: null,
              total: 436.48828640000005,
              hasRDI: true,
              daily: 43.648828640000005,
              unit: 'mg'
            },
            {
              label: 'Magnesium',
              tag: 'MG',
              schemaOrgTag: null,
              total: 122.44410720000002,
              hasRDI: true,
              daily: 29.153358857142862,
              unit: 'mg'
            },
            {
              label: 'Potassium',
              tag: 'K',
              schemaOrgTag: null,
              total: 889.7162864000001,
              hasRDI: true,
              daily: 18.93013375319149,
              unit: 'mg'
            },
            {
              label: 'Iron',
              tag: 'FE',
              schemaOrgTag: null,
              total: 4.723691072,
              hasRDI: true,
              daily: 26.242728177777778,
              unit: 'mg'
            },
            {
              label: 'Zinc',
              tag: 'ZN',
              schemaOrgTag: null,
              total: 5.019789824000001,
              hasRDI: true,
              daily: 45.634452945454555,
              unit: 'mg'
            },
            {
              label: 'Phosphorus',
              tag: 'P',
              schemaOrgTag: null,
              total: 430.9522864000001,
              hasRDI: true,
              daily: 61.56461234285715,
              unit: 'mg'
            },
            {
              label: 'Vitamin A',
              tag: 'VITA_RAE',
              schemaOrgTag: null,
              total: 910.8086624000001,
              hasRDI: true,
              daily: 101.2009624888889,
              unit: 'µg'
            },
            {
              label: 'Vitamin C',
              tag: 'VITC',
              schemaOrgTag: null,
              total: 28.68,
              hasRDI: true,
              daily: 31.866666666666667,
              unit: 'mg'
            },
            {
              label: 'Thiamin (B1)',
              tag: 'THIA',
              schemaOrgTag: null,
              total: 0.4175727680000001,
              hasRDI: true,
              daily: 34.79773066666667,
              unit: 'mg'
            },
            {
              label: 'Riboflavin (B2)',
              tag: 'RIBF',
              schemaOrgTag: null,
              total: 1.2116448224000003,
              hasRDI: true,
              daily: 93.2034478769231,
              unit: 'mg'
            },
            {
              label: 'Niacin (B3)',
              tag: 'NIA',
              schemaOrgTag: null,
              total: 2.6080312512000003,
              hasRDI: true,
              daily: 16.300195320000004,
              unit: 'mg'
            },
            {
              label: 'Vitamin B6',
              tag: 'VITB6A',
              schemaOrgTag: null,
              total: 0.6458736608000001,
              hasRDI: true,
              daily: 49.682589292307696,
              unit: 'mg'
            },
            {
              label: 'Folate equivalent (total)',
              tag: 'FOLDFE',
              schemaOrgTag: null,
              total: 377.54366080000005,
              hasRDI: true,
              daily: 94.38591520000001,
              unit: 'µg'
            },
            {
              label: 'Folate (food)',
              tag: 'FOLFD',
              schemaOrgTag: null,
              total: 320.42366080000005,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Folic acid',
              tag: 'FOLAC',
              schemaOrgTag: null,
              total: 33.6,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Vitamin B12',
              tag: 'VITB12',
              schemaOrgTag: null,
              total: 2.903824112,
              hasRDI: true,
              daily: 120.99267133333335,
              unit: 'µg'
            },
            {
              label: 'Vitamin D',
              tag: 'VITD',
              schemaOrgTag: null,
              total: 0.9173304000000001,
              hasRDI: true,
              daily: 6.115536000000001,
              unit: 'µg'
            },
            {
              label: 'Vitamin E',
              tag: 'TOCPHA',
              schemaOrgTag: null,
              total: 3.0132043520000003,
              hasRDI: true,
              daily: 20.088029013333333,
              unit: 'mg'
            },
            {
              label: 'Vitamin K',
              tag: 'VITK1',
              schemaOrgTag: null,
              total: 488.15767519999997,
              hasRDI: true,
              daily: 406.7980626666666,
              unit: 'µg'
            }
          ]
        },
        bookmarked: false,
        bought: false
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            hits: mockUncleanRecipes
          })
      })
    );

    const mockCleanRecipes = [
      {
        calories: 852,
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        image:
          'https://www.edamam.com/web-img/1ad/1adb325f2db4c38149b79c8870820ff0.jpg',
        ingredientLines: [
          'butter',
          '½ garlic clove , crushed',
          '6 thick slices of brie',
          '100.0g young leaf spinach , washed',
          '2 croissants , slit open lengthways'
        ],
        label: 'Brie & Spinach Croissants',
        source: 'BBC Good Food',
        url: 'http://www.bbcgoodfood.com/recipes/4324/',
        yields: 2
      }
    ];

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addRecipes(mockCleanRecipes));
  });

  it('should call cleanRecipeData helper method if response is ok', async () => {

    const mockUncleanRecipes = [
      {
        recipe: {
          uri:
            'http://www.edamam.com/ontologies/edamam.owl#recipe_5e2060e86df88c3ca51e83fe8ea7407b',
          label: 'Brie & Spinach Croissants',
          image:
            'https://www.edamam.com/web-img/1ad/1adb325f2db4c38149b79c8870820ff0.jpg',
          source: 'BBC Good Food',
          url: 'http://www.bbcgoodfood.com/recipes/4324/',
          shareAs:
            'http://www.edamam.com/recipe/brie-spinach-croissants-5e2060e86df88c3ca51e83fe8ea7407b/brie',
          yields: 2,
          dietLabels: ['Low-Carb'],
          healthLabels: [
            'Sugar-Conscious',
            'Vegetarian',
            'Peanut-Free',
            'Tree-Nut-Free',
            'Alcohol-Free'
          ],
          cautions: [],
          ingredientLines: [
            'butter',
            '½ garlic clove , crushed',
            '6 thick slices of brie',
            '100.0g young leaf spinach , washed',
            '2 croissants , slit open lengthways'
          ],
          ingredients: [
            {
              text: 'butter',
              weight: 4.45536
            },
            {
              text: '½ garlic clove , crushed',
              weight: 1.5
            },
            {
              text: '6 thick slices of brie',
              weight: 170.10000000000002
            },
            {
              text: '100.0g young leaf spinach , washed',
              weight: 100
            },
            {
              text: '2 croissants , slit open lengthways',
              weight: 56
            }
          ],
          calories: 852.6739312000001,
          totalWeight: 332.05536000000006,
          totalTime: 0,
          totalNutrients: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 852.6739312000001,
              unit: 'kcal'
            },
            FAT: {
              label: 'Fat',
              quantity: 62.854922496000015,
              unit: 'g'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 38.49641432480001,
              unit: 'g'
            },
            FATRN: {
              label: 'Trans',
              quantity: 0.14604670079999998,
              unit: 'g'
            },
            FAMS: {
              label: 'Monounsaturated',
              quantity: 17.6708392256,
              unit: 'g'
            },
            FAPU: {
              label: 'Polyunsaturated',
              quantity: 2.3219776048000003,
              unit: 'g'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 30.542023216,
              unit: 'g'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 3.6875,
              unit: 'g'
            },
            SUGAR: {
              label: 'Sugars',
              quantity: 7.508723216,
              unit: 'g'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 42.88102056,
              unit: 'g'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 217.19902400000004,
              unit: 'mg'
            },
            NA: {
              label: 'Sodium',
              quantity: 1411.1940896,
              unit: 'mg'
            },
            CA: {
              label: 'Calcium',
              quantity: 436.48828640000005,
              unit: 'mg'
            },
            MG: {
              label: 'Magnesium',
              quantity: 122.44410720000002,
              unit: 'mg'
            },
            K: {
              label: 'Potassium',
              quantity: 889.7162864000001,
              unit: 'mg'
            },
            FE: {
              label: 'Iron',
              quantity: 4.723691072,
              unit: 'mg'
            },
            ZN: {
              label: 'Zinc',
              quantity: 5.019789824000001,
              unit: 'mg'
            },
            P: {
              label: 'Phosphorus',
              quantity: 430.9522864000001,
              unit: 'mg'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 910.8086624000001,
              unit: 'µg'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 28.68,
              unit: 'mg'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 0.4175727680000001,
              unit: 'mg'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 1.2116448224000003,
              unit: 'mg'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 2.6080312512000003,
              unit: 'mg'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 0.6458736608000001,
              unit: 'mg'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 377.54366080000005,
              unit: 'µg'
            },
            FOLFD: {
              label: 'Folate (food)',
              quantity: 320.42366080000005,
              unit: 'µg'
            },
            FOLAC: {
              label: 'Folic acid',
              quantity: 33.6,
              unit: 'µg'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 2.903824112,
              unit: 'µg'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 0.9173304000000001,
              unit: 'µg'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 3.0132043520000003,
              unit: 'mg'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 488.15767519999997,
              unit: 'µg'
            }
          },
          totalDaily: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 42.633696560000004,
              unit: '%'
            },
            FAT: {
              label: 'Fat',
              quantity: 96.69988076307695,
              unit: '%'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 192.48207162400004,
              unit: '%'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 10.180674405333335,
              unit: '%'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 14.75,
              unit: '%'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 85.76204112,
              unit: '%'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 72.39967466666667,
              unit: '%'
            },
            NA: {
              label: 'Sodium',
              quantity: 58.79975373333333,
              unit: '%'
            },
            CA: {
              label: 'Calcium',
              quantity: 43.648828640000005,
              unit: '%'
            },
            MG: {
              label: 'Magnesium',
              quantity: 29.153358857142862,
              unit: '%'
            },
            K: {
              label: 'Potassium',
              quantity: 18.93013375319149,
              unit: '%'
            },
            FE: {
              label: 'Iron',
              quantity: 26.242728177777778,
              unit: '%'
            },
            ZN: {
              label: 'Zinc',
              quantity: 45.634452945454555,
              unit: '%'
            },
            P: {
              label: 'Phosphorus',
              quantity: 61.56461234285715,
              unit: '%'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 101.2009624888889,
              unit: '%'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 31.866666666666667,
              unit: '%'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 34.79773066666667,
              unit: '%'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 93.2034478769231,
              unit: '%'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 16.300195320000004,
              unit: '%'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 49.682589292307696,
              unit: '%'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 94.38591520000001,
              unit: '%'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 120.99267133333335,
              unit: '%'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 6.115536000000001,
              unit: '%'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 20.088029013333333,
              unit: '%'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 406.7980626666666,
              unit: '%'
            }
          },
          digest: [
            {
              label: 'Fat',
              tag: 'FAT',
              schemaOrgTag: 'fatContent',
              total: 62.854922496000015,
              hasRDI: true,
              daily: 96.69988076307695,
              unit: 'g',
              sub: [
                {
                  label: 'Saturated',
                  tag: 'FASAT',
                  schemaOrgTag: 'saturatedFatContent',
                  total: 38.49641432480001,
                  hasRDI: true,
                  daily: 192.48207162400004,
                  unit: 'g'
                },
                {
                  label: 'Trans',
                  tag: 'FATRN',
                  schemaOrgTag: 'transFatContent',
                  total: 0.14604670079999998,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Monounsaturated',
                  tag: 'FAMS',
                  schemaOrgTag: null,
                  total: 17.6708392256,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Polyunsaturated',
                  tag: 'FAPU',
                  schemaOrgTag: null,
                  total: 2.3219776048000003,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Carbs',
              tag: 'CHOCDF',
              schemaOrgTag: 'carbohydrateContent',
              total: 30.542023216,
              hasRDI: true,
              daily: 10.180674405333335,
              unit: 'g',
              sub: [
                {
                  label: 'Carbs (net)',
                  tag: 'CHOCDF.net',
                  schemaOrgTag: null,
                  total: 26.854523216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Fiber',
                  tag: 'FIBTG',
                  schemaOrgTag: 'fiberContent',
                  total: 3.6875,
                  hasRDI: true,
                  daily: 14.75,
                  unit: 'g'
                },
                {
                  label: 'Sugars',
                  tag: 'SUGAR',
                  schemaOrgTag: 'sugarContent',
                  total: 7.508723216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Sugars, added',
                  tag: 'SUGAR.added',
                  schemaOrgTag: null,
                  total: 0,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Protein',
              tag: 'PROCNT',
              schemaOrgTag: 'proteinContent',
              total: 42.88102056,
              hasRDI: true,
              daily: 85.76204112,
              unit: 'g'
            },
            {
              label: 'Cholesterol',
              tag: 'CHOLE',
              schemaOrgTag: 'cholesterolContent',
              total: 217.19902400000004,
              hasRDI: true,
              daily: 72.39967466666667,
              unit: 'mg'
            },
            {
              label: 'Sodium',
              tag: 'NA',
              schemaOrgTag: 'sodiumContent',
              total: 1411.1940896,
              hasRDI: true,
              daily: 58.79975373333333,
              unit: 'mg'
            },
            {
              label: 'Calcium',
              tag: 'CA',
              schemaOrgTag: null,
              total: 436.48828640000005,
              hasRDI: true,
              daily: 43.648828640000005,
              unit: 'mg'
            },
            {
              label: 'Magnesium',
              tag: 'MG',
              schemaOrgTag: null,
              total: 122.44410720000002,
              hasRDI: true,
              daily: 29.153358857142862,
              unit: 'mg'
            },
            {
              label: 'Potassium',
              tag: 'K',
              schemaOrgTag: null,
              total: 889.7162864000001,
              hasRDI: true,
              daily: 18.93013375319149,
              unit: 'mg'
            },
            {
              label: 'Iron',
              tag: 'FE',
              schemaOrgTag: null,
              total: 4.723691072,
              hasRDI: true,
              daily: 26.242728177777778,
              unit: 'mg'
            },
            {
              label: 'Zinc',
              tag: 'ZN',
              schemaOrgTag: null,
              total: 5.019789824000001,
              hasRDI: true,
              daily: 45.634452945454555,
              unit: 'mg'
            },
            {
              label: 'Phosphorus',
              tag: 'P',
              schemaOrgTag: null,
              total: 430.9522864000001,
              hasRDI: true,
              daily: 61.56461234285715,
              unit: 'mg'
            },
            {
              label: 'Vitamin A',
              tag: 'VITA_RAE',
              schemaOrgTag: null,
              total: 910.8086624000001,
              hasRDI: true,
              daily: 101.2009624888889,
              unit: 'µg'
            },
            {
              label: 'Vitamin C',
              tag: 'VITC',
              schemaOrgTag: null,
              total: 28.68,
              hasRDI: true,
              daily: 31.866666666666667,
              unit: 'mg'
            },
            {
              label: 'Thiamin (B1)',
              tag: 'THIA',
              schemaOrgTag: null,
              total: 0.4175727680000001,
              hasRDI: true,
              daily: 34.79773066666667,
              unit: 'mg'
            },
            {
              label: 'Riboflavin (B2)',
              tag: 'RIBF',
              schemaOrgTag: null,
              total: 1.2116448224000003,
              hasRDI: true,
              daily: 93.2034478769231,
              unit: 'mg'
            },
            {
              label: 'Niacin (B3)',
              tag: 'NIA',
              schemaOrgTag: null,
              total: 2.6080312512000003,
              hasRDI: true,
              daily: 16.300195320000004,
              unit: 'mg'
            },
            {
              label: 'Vitamin B6',
              tag: 'VITB6A',
              schemaOrgTag: null,
              total: 0.6458736608000001,
              hasRDI: true,
              daily: 49.682589292307696,
              unit: 'mg'
            },
            {
              label: 'Folate equivalent (total)',
              tag: 'FOLDFE',
              schemaOrgTag: null,
              total: 377.54366080000005,
              hasRDI: true,
              daily: 94.38591520000001,
              unit: 'µg'
            },
            {
              label: 'Folate (food)',
              tag: 'FOLFD',
              schemaOrgTag: null,
              total: 320.42366080000005,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Folic acid',
              tag: 'FOLAC',
              schemaOrgTag: null,
              total: 33.6,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Vitamin B12',
              tag: 'VITB12',
              schemaOrgTag: null,
              total: 2.903824112,
              hasRDI: true,
              daily: 120.99267133333335,
              unit: 'µg'
            },
            {
              label: 'Vitamin D',
              tag: 'VITD',
              schemaOrgTag: null,
              total: 0.9173304000000001,
              hasRDI: true,
              daily: 6.115536000000001,
              unit: 'µg'
            },
            {
              label: 'Vitamin E',
              tag: 'TOCPHA',
              schemaOrgTag: null,
              total: 3.0132043520000003,
              hasRDI: true,
              daily: 20.088029013333333,
              unit: 'mg'
            },
            {
              label: 'Vitamin K',
              tag: 'VITK1',
              schemaOrgTag: null,
              total: 488.15767519999997,
              hasRDI: true,
              daily: 406.7980626666666,
              unit: 'µg'
            }
          ]
        },
        bookmarked: false,
        bought: false
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            hits: mockUncleanRecipes
          })
      })
    );

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);
    expect(cleanRecipeData).toHaveBeenCalledWith(mockUncleanRecipes);

  })

  it('should call sendToLocalStorage helper method if response is ok', async () => {
    const mockUncleanRecipes = [
      {
        recipe: {
          uri:
            'http://www.edamam.com/ontologies/edamam.owl#recipe_5e2060e86df88c3ca51e83fe8ea7407b',
          label: 'Brie & Spinach Croissants',
          image:
            'https://www.edamam.com/web-img/1ad/1adb325f2db4c38149b79c8870820ff0.jpg',
          source: 'BBC Good Food',
          url: 'http://www.bbcgoodfood.com/recipes/4324/',
          shareAs:
            'http://www.edamam.com/recipe/brie-spinach-croissants-5e2060e86df88c3ca51e83fe8ea7407b/brie',
          yields: 2,
          dietLabels: ['Low-Carb'],
          healthLabels: [
            'Sugar-Conscious',
            'Vegetarian',
            'Peanut-Free',
            'Tree-Nut-Free',
            'Alcohol-Free'
          ],
          cautions: [],
          ingredientLines: [
            'butter',
            '½ garlic clove , crushed',
            '6 thick slices of brie',
            '100.0g young leaf spinach , washed',
            '2 croissants , slit open lengthways'
          ],
          ingredients: [
            {
              text: 'butter',
              weight: 4.45536
            },
            {
              text: '½ garlic clove , crushed',
              weight: 1.5
            },
            {
              text: '6 thick slices of brie',
              weight: 170.10000000000002
            },
            {
              text: '100.0g young leaf spinach , washed',
              weight: 100
            },
            {
              text: '2 croissants , slit open lengthways',
              weight: 56
            }
          ],
          calories: 852.6739312000001,
          totalWeight: 332.05536000000006,
          totalTime: 0,
          totalNutrients: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 852.6739312000001,
              unit: 'kcal'
            },
            FAT: {
              label: 'Fat',
              quantity: 62.854922496000015,
              unit: 'g'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 38.49641432480001,
              unit: 'g'
            },
            FATRN: {
              label: 'Trans',
              quantity: 0.14604670079999998,
              unit: 'g'
            },
            FAMS: {
              label: 'Monounsaturated',
              quantity: 17.6708392256,
              unit: 'g'
            },
            FAPU: {
              label: 'Polyunsaturated',
              quantity: 2.3219776048000003,
              unit: 'g'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 30.542023216,
              unit: 'g'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 3.6875,
              unit: 'g'
            },
            SUGAR: {
              label: 'Sugars',
              quantity: 7.508723216,
              unit: 'g'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 42.88102056,
              unit: 'g'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 217.19902400000004,
              unit: 'mg'
            },
            NA: {
              label: 'Sodium',
              quantity: 1411.1940896,
              unit: 'mg'
            },
            CA: {
              label: 'Calcium',
              quantity: 436.48828640000005,
              unit: 'mg'
            },
            MG: {
              label: 'Magnesium',
              quantity: 122.44410720000002,
              unit: 'mg'
            },
            K: {
              label: 'Potassium',
              quantity: 889.7162864000001,
              unit: 'mg'
            },
            FE: {
              label: 'Iron',
              quantity: 4.723691072,
              unit: 'mg'
            },
            ZN: {
              label: 'Zinc',
              quantity: 5.019789824000001,
              unit: 'mg'
            },
            P: {
              label: 'Phosphorus',
              quantity: 430.9522864000001,
              unit: 'mg'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 910.8086624000001,
              unit: 'µg'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 28.68,
              unit: 'mg'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 0.4175727680000001,
              unit: 'mg'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 1.2116448224000003,
              unit: 'mg'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 2.6080312512000003,
              unit: 'mg'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 0.6458736608000001,
              unit: 'mg'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 377.54366080000005,
              unit: 'µg'
            },
            FOLFD: {
              label: 'Folate (food)',
              quantity: 320.42366080000005,
              unit: 'µg'
            },
            FOLAC: {
              label: 'Folic acid',
              quantity: 33.6,
              unit: 'µg'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 2.903824112,
              unit: 'µg'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 0.9173304000000001,
              unit: 'µg'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 3.0132043520000003,
              unit: 'mg'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 488.15767519999997,
              unit: 'µg'
            }
          },
          totalDaily: {
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 42.633696560000004,
              unit: '%'
            },
            FAT: {
              label: 'Fat',
              quantity: 96.69988076307695,
              unit: '%'
            },
            FASAT: {
              label: 'Saturated',
              quantity: 192.48207162400004,
              unit: '%'
            },
            CHOCDF: {
              label: 'Carbs',
              quantity: 10.180674405333335,
              unit: '%'
            },
            FIBTG: {
              label: 'Fiber',
              quantity: 14.75,
              unit: '%'
            },
            PROCNT: {
              label: 'Protein',
              quantity: 85.76204112,
              unit: '%'
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 72.39967466666667,
              unit: '%'
            },
            NA: {
              label: 'Sodium',
              quantity: 58.79975373333333,
              unit: '%'
            },
            CA: {
              label: 'Calcium',
              quantity: 43.648828640000005,
              unit: '%'
            },
            MG: {
              label: 'Magnesium',
              quantity: 29.153358857142862,
              unit: '%'
            },
            K: {
              label: 'Potassium',
              quantity: 18.93013375319149,
              unit: '%'
            },
            FE: {
              label: 'Iron',
              quantity: 26.242728177777778,
              unit: '%'
            },
            ZN: {
              label: 'Zinc',
              quantity: 45.634452945454555,
              unit: '%'
            },
            P: {
              label: 'Phosphorus',
              quantity: 61.56461234285715,
              unit: '%'
            },
            VITA_RAE: {
              label: 'Vitamin A',
              quantity: 101.2009624888889,
              unit: '%'
            },
            VITC: {
              label: 'Vitamin C',
              quantity: 31.866666666666667,
              unit: '%'
            },
            THIA: {
              label: 'Thiamin (B1)',
              quantity: 34.79773066666667,
              unit: '%'
            },
            RIBF: {
              label: 'Riboflavin (B2)',
              quantity: 93.2034478769231,
              unit: '%'
            },
            NIA: {
              label: 'Niacin (B3)',
              quantity: 16.300195320000004,
              unit: '%'
            },
            VITB6A: {
              label: 'Vitamin B6',
              quantity: 49.682589292307696,
              unit: '%'
            },
            FOLDFE: {
              label: 'Folate equivalent (total)',
              quantity: 94.38591520000001,
              unit: '%'
            },
            VITB12: {
              label: 'Vitamin B12',
              quantity: 120.99267133333335,
              unit: '%'
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 6.115536000000001,
              unit: '%'
            },
            TOCPHA: {
              label: 'Vitamin E',
              quantity: 20.088029013333333,
              unit: '%'
            },
            VITK1: {
              label: 'Vitamin K',
              quantity: 406.7980626666666,
              unit: '%'
            }
          },
          digest: [
            {
              label: 'Fat',
              tag: 'FAT',
              schemaOrgTag: 'fatContent',
              total: 62.854922496000015,
              hasRDI: true,
              daily: 96.69988076307695,
              unit: 'g',
              sub: [
                {
                  label: 'Saturated',
                  tag: 'FASAT',
                  schemaOrgTag: 'saturatedFatContent',
                  total: 38.49641432480001,
                  hasRDI: true,
                  daily: 192.48207162400004,
                  unit: 'g'
                },
                {
                  label: 'Trans',
                  tag: 'FATRN',
                  schemaOrgTag: 'transFatContent',
                  total: 0.14604670079999998,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Monounsaturated',
                  tag: 'FAMS',
                  schemaOrgTag: null,
                  total: 17.6708392256,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Polyunsaturated',
                  tag: 'FAPU',
                  schemaOrgTag: null,
                  total: 2.3219776048000003,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Carbs',
              tag: 'CHOCDF',
              schemaOrgTag: 'carbohydrateContent',
              total: 30.542023216,
              hasRDI: true,
              daily: 10.180674405333335,
              unit: 'g',
              sub: [
                {
                  label: 'Carbs (net)',
                  tag: 'CHOCDF.net',
                  schemaOrgTag: null,
                  total: 26.854523216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Fiber',
                  tag: 'FIBTG',
                  schemaOrgTag: 'fiberContent',
                  total: 3.6875,
                  hasRDI: true,
                  daily: 14.75,
                  unit: 'g'
                },
                {
                  label: 'Sugars',
                  tag: 'SUGAR',
                  schemaOrgTag: 'sugarContent',
                  total: 7.508723216,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                },
                {
                  label: 'Sugars, added',
                  tag: 'SUGAR.added',
                  schemaOrgTag: null,
                  total: 0,
                  hasRDI: false,
                  daily: 0,
                  unit: 'g'
                }
              ]
            },
            {
              label: 'Protein',
              tag: 'PROCNT',
              schemaOrgTag: 'proteinContent',
              total: 42.88102056,
              hasRDI: true,
              daily: 85.76204112,
              unit: 'g'
            },
            {
              label: 'Cholesterol',
              tag: 'CHOLE',
              schemaOrgTag: 'cholesterolContent',
              total: 217.19902400000004,
              hasRDI: true,
              daily: 72.39967466666667,
              unit: 'mg'
            },
            {
              label: 'Sodium',
              tag: 'NA',
              schemaOrgTag: 'sodiumContent',
              total: 1411.1940896,
              hasRDI: true,
              daily: 58.79975373333333,
              unit: 'mg'
            },
            {
              label: 'Calcium',
              tag: 'CA',
              schemaOrgTag: null,
              total: 436.48828640000005,
              hasRDI: true,
              daily: 43.648828640000005,
              unit: 'mg'
            },
            {
              label: 'Magnesium',
              tag: 'MG',
              schemaOrgTag: null,
              total: 122.44410720000002,
              hasRDI: true,
              daily: 29.153358857142862,
              unit: 'mg'
            },
            {
              label: 'Potassium',
              tag: 'K',
              schemaOrgTag: null,
              total: 889.7162864000001,
              hasRDI: true,
              daily: 18.93013375319149,
              unit: 'mg'
            },
            {
              label: 'Iron',
              tag: 'FE',
              schemaOrgTag: null,
              total: 4.723691072,
              hasRDI: true,
              daily: 26.242728177777778,
              unit: 'mg'
            },
            {
              label: 'Zinc',
              tag: 'ZN',
              schemaOrgTag: null,
              total: 5.019789824000001,
              hasRDI: true,
              daily: 45.634452945454555,
              unit: 'mg'
            },
            {
              label: 'Phosphorus',
              tag: 'P',
              schemaOrgTag: null,
              total: 430.9522864000001,
              hasRDI: true,
              daily: 61.56461234285715,
              unit: 'mg'
            },
            {
              label: 'Vitamin A',
              tag: 'VITA_RAE',
              schemaOrgTag: null,
              total: 910.8086624000001,
              hasRDI: true,
              daily: 101.2009624888889,
              unit: 'µg'
            },
            {
              label: 'Vitamin C',
              tag: 'VITC',
              schemaOrgTag: null,
              total: 28.68,
              hasRDI: true,
              daily: 31.866666666666667,
              unit: 'mg'
            },
            {
              label: 'Thiamin (B1)',
              tag: 'THIA',
              schemaOrgTag: null,
              total: 0.4175727680000001,
              hasRDI: true,
              daily: 34.79773066666667,
              unit: 'mg'
            },
            {
              label: 'Riboflavin (B2)',
              tag: 'RIBF',
              schemaOrgTag: null,
              total: 1.2116448224000003,
              hasRDI: true,
              daily: 93.2034478769231,
              unit: 'mg'
            },
            {
              label: 'Niacin (B3)',
              tag: 'NIA',
              schemaOrgTag: null,
              total: 2.6080312512000003,
              hasRDI: true,
              daily: 16.300195320000004,
              unit: 'mg'
            },
            {
              label: 'Vitamin B6',
              tag: 'VITB6A',
              schemaOrgTag: null,
              total: 0.6458736608000001,
              hasRDI: true,
              daily: 49.682589292307696,
              unit: 'mg'
            },
            {
              label: 'Folate equivalent (total)',
              tag: 'FOLDFE',
              schemaOrgTag: null,
              total: 377.54366080000005,
              hasRDI: true,
              daily: 94.38591520000001,
              unit: 'µg'
            },
            {
              label: 'Folate (food)',
              tag: 'FOLFD',
              schemaOrgTag: null,
              total: 320.42366080000005,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Folic acid',
              tag: 'FOLAC',
              schemaOrgTag: null,
              total: 33.6,
              hasRDI: false,
              daily: 0,
              unit: 'µg'
            },
            {
              label: 'Vitamin B12',
              tag: 'VITB12',
              schemaOrgTag: null,
              total: 2.903824112,
              hasRDI: true,
              daily: 120.99267133333335,
              unit: 'µg'
            },
            {
              label: 'Vitamin D',
              tag: 'VITD',
              schemaOrgTag: null,
              total: 0.9173304000000001,
              hasRDI: true,
              daily: 6.115536000000001,
              unit: 'µg'
            },
            {
              label: 'Vitamin E',
              tag: 'TOCPHA',
              schemaOrgTag: null,
              total: 3.0132043520000003,
              hasRDI: true,
              daily: 20.088029013333333,
              unit: 'mg'
            },
            {
              label: 'Vitamin K',
              tag: 'VITK1',
              schemaOrgTag: null,
              total: 488.15767519999997,
              hasRDI: true,
              daily: 406.7980626666666,
              unit: 'µg'
            }
          ]
        },
        bookmarked: false,
        bought: false
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            hits: mockUncleanRecipes
          })
      })
    );

    const mockCleanRecipes = [
      {
        calories: 852,
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Vegetarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Alcohol-Free'
        ],
        image:
          'https://www.edamam.com/web-img/1ad/1adb325f2db4c38149b79c8870820ff0.jpg',
        ingredientLines: [
          'butter',
          '½ garlic clove , crushed',
          '6 thick slices of brie',
          '100.0g young leaf spinach , washed',
          '2 croissants , slit open lengthways'
        ],
        label: 'Brie & Spinach Croissants',
        source: 'BBC Good Food',
        url: 'http://www.bbcgoodfood.com/recipes/4324/',
        yields: 2
      }
    ];

    const thunk = fetchRecipes(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(sendToLocalStorage(mockCleanRecipes));
  })
});
