/**
 * Run this test using the following command: npm test.
 */

// Using babel to transpile ES6 to ES5 for testing with Jest.
import orderResolver from './dependencyOrderResolver';

describe('Error Handling Tests', () => {
  test('should throw a null reference exception for null dependencies', () => {
    const dependencies = null;
    expect(() => orderResolver.getItemOrderByDependency(dependencies)).toThrow(
      ReferenceError
    );
  });

  test('should throw a null reference exception for empty dependencies array', () => {
    const dependencies = [];
    expect(() => orderResolver.getItemOrderByDependency(dependencies)).toThrow(
      ReferenceError
    );
  });

  // TS Type checking will catch invalid types during compile time, not runtime.
});

describe('Clothing Tests', () => {
  test('should test the primary requirement of clothing dependencies', () => {
    var dependencies = [
      ['t-shirt', 'dress shirt'],
      ['dress shirt', 'pants'],
      ['dress shirt', 'suit jacket'],
      ['tie', 'suit jacket'],
      ['pants', 'suit jacket'],
      ['belt', 'suit jacket'],
      ['suit jacket', 'overcoat'],
      ['dress shirt', 'tie'],
      ['suit jacket', 'sun glasses'],
      ['sun glasses', 'overcoat'],
      ['left sock', 'pants'],
      ['pants', 'belt'],
      ['suit jacket', 'left shoe'],
      ['suit jacket', 'right shoe'],
      ['left shoe', 'overcoat'],
      ['right sock', 'pants'],
      ['right shoe', 'overcoat'],
      ['t-shirt', 'suit jacket'],
    ];

    const expectedOutput =
      'left sock, right sock, t-shirt\n' +
      'dress shirt\n' +
      'pants, tie\n' +
      'belt\n' +
      'suit jacket\n' +
      'left shoe, right shoe, sun glasses\n' +
      'overcoat';

    // Call the function and compare.
    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test('should test the Batman outfit dependencies!', () => {
    var dependencies = [
      ['mask', 'cape'],
      ['suit', 'outside underwear'],
      ['suit', 'belt'],
      ['sox', 'boots'],
      ['suit', 'boots'],
      ['suit', 'mask'],
    ];

    const expectedOutput = 'sox, suit\n' +
      'belt, boots, mask, outside underwear\n' +
      'cape';

    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('Cooking Tests', () => {
  test('should test dependencies for baking a cake', () => {
    const dependencies = [
      ['cake batter', 'bake'],
      ['milk', 'baking powder'],
      ['butter', 'milk'],
      ['frosting', 'decorate'],
      ['eggs', 'vanilla extract'],
      ['baking powder', 'baking soda'],
      ['baking soda', 'salt'],
      ['butter', 'chocolate chips'],
      ['sugar', 'butter'],
      ['vanilla extract', 'chocolate chips'],
      ['salt', 'chocolate chips'],
      ['flour', 'sugar'],
      ['chocolate chips', 'cake batter'],
      ['butter', 'eggs'],
      ['flour', 'chocolate chips'],
      ['bake', 'frosting'],
      ['cake batter', 'frosting'],
    ];

    const expectedOutput =
      'flour\n' +
      'sugar\n' +
      'butter\n' +
      'eggs, milk\n' +
      'baking powder, vanilla extract\n' +
      'baking soda\n' +
      'salt\n' +
      'chocolate chips\n' +
      'cake batter\n' +
      'bake\n' +
      'frosting\n' +
      'decorate';

    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });

  test('should test dependencies for baking a cake in a totally different order', () => {
    const dependencies = [
      ['butter', 'eggs'],
      ['butter', 'milk'],
      ['eggs', 'vanilla extract'],
      ['milk', 'baking powder'],
      ['baking powder', 'baking soda'],
      ['baking soda', 'salt'],
      ['butter', 'chocolate chips'],
      ['flour', 'chocolate chips'],
      ['vanilla extract', 'chocolate chips'],
      ['salt', 'chocolate chips'],
      ['chocolate chips', 'cake batter'],
      ['cake batter', 'bake'],
      ['bake', 'frosting'],
      ['cake batter', 'frosting'],
      ['frosting', 'decorate'],
      ['flour', 'sugar'],
      ['sugar', 'butter'],
    ];

    const expectedOutput = 'flour\n' +
      'sugar\n' +
      'butter\n' +
      'eggs, milk\n' +
      'baking powder, vanilla extract\n' +
      'baking soda\n' +
      'salt\n' +
      'chocolate chips\n' +
      'cake batter\n' +
      'bake\n' +
      'frosting\n' +
      'decorate';

    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

describe('Unlocking the Magical Treasure Chest Test', () => {
  test('should test dependencies for unlocking the magical treasure chest', () => {
    const dependencies = [
      ['ancient scroll', 'golden key'],
      ['crystal orb', 'enchanted ring'],
      ['silver key', 'map of the labyrinth'],
      ['golden compass', 'magnifying glass'],
      ['secret code book', 'dragon scale'],
      ['dragon scale', 'golden feather'],
      ['enchanted ring', 'golden feather'],
      ['magnifying glass', 'silver amulet'],
      ['golden feather', 'phoenix feather'],
      ['phoenix feather', 'fire crystal'],
      ['fire crystal', 'crystal key'],
      ['crystal key', 'unlock magical treasure chest'],
    ];

    const expectedOutput = 'ancient scroll, crystal orb, golden compass, secret code book, silver key\n' +
      'dragon scale, enchanted ring, golden key, magnifying glass, map of the labyrinth\n' +
      'golden feather, silver amulet\n' +
      'phoenix feather\n' +
      'fire crystal\n' +
      'crystal key\n' +
      'unlock magical treasure chest';

    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
