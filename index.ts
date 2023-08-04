import { DependencyPair } from './types/dependencyPair';
import orderResolver from './helpers/dependencyOrderResolver';

/**
 * Main function where the program starts.
 */
function main() {
  try {
    // Meeting the primary requirement here.
    // See tests for more examples.

    const dependencies: DependencyPair[] = [
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

    console.log(orderResolver.getItemOrderByDependency(dependencies));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

main();