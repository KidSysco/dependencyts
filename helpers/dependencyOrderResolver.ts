import { DependencyPair } from '../types/dependencyPair';

export default {
  getItemOrderByDependency(dependencies: DependencyPair[]): string {
    try {
      // Handle null ref ex.
      if (!dependencies || dependencies.length === 0) {
        throw new ReferenceError(
          'dependencies param cannot be null or empty for dependencyOrderResolver.getItemOrderByDependency(dependencies).'
        );
      }

      // TS Type checking will catch this during compile time, not runtime.
      // Performance Note: This is an expensive check, not needed in TS or C#.
      /*
      if (
        !dependencies[0] ||
        !Array.isArray(dependencies[0]) ||
        dependencies[0].length !== 2
      ) {
        throw new TypeError(
          'dependencies param must be a 2D array for dependencyOrderResolver.getItemOrderByDependency(dependencies).'
        );
      }
      */

      // Create an empty graph.
      const graph: { [key: string]: string[] } = {};

      // Indegree stores the number of incoming edges for each item.
      const indegree: { [key: string]: number } = {};

      // Build the graph and calculate the indegree for each item.
      for (const [dependency, item] of dependencies) {
        // Initialize an empty array for the item if it doesn't exist in the graph.
        if (!graph[dependency]) {
          graph[dependency] = [];
        }
        if (!graph[item]) {
          graph[item] = [];
        }

        // Add the dependency as an outgoing edge from the item in the graph.
        graph[dependency].push(item);

        // Initialize the indegree for the item if it doesn't exist.
        if (!indegree[item]) {
          indegree[item] = 0;
        }

        // Increment the indegree for the item as it depends on the current dependency.
        indegree[item] += 1;
      }

      // Output array.
      const output: string[] = [];

      // Create a queue to perform topological sorting.
      const queue: string[] = [];

      // Find all items with an indegree of 0 (no dependencies) then add them to the queue.
      // Performance Note: Time complexity order of (n), where n is the number of dependencies.
      for (const item in graph) {
        if (!indegree[item]) {
          queue.push(item);
        }
      }

      // Do the topological sort!
      while (queue.length > 0) {
        /* 
        Sort the same level of dependencies alphabetically, (default sort).

        Performance Note: Node.js uses the Google V8 Engine which will use a quicksort algorithm for small arrays, and a merge sort algorithm for arrays with more items. 

        The time complexity for quicksort is O(n^2), but performs great for small arrays. The time complexity for merge sort is O(n*log(n)). Therefore, the time complexity for the array.sort() command in Node.js is commonly known as O(n*log(n)).
        */
        queue.sort();

        // Get the current level of items from the queue.
        const currentItems = [...queue];
        queue.length = 0; // Clear the queue

        // Add this level of items to the output.
        output.push(currentItems.join(', '));

        // Process each item in this level.
        for (const currentItem of currentItems) {
          // Decrement the indegree of neighbors, and add them to the queue if indegree becomes 0
          for (const neighbor of graph[currentItem]) {
            indegree[neighbor] -= 1;
            if (indegree[neighbor] === 0) {
              queue.push(neighbor);

              // Performance Note: Remove neighboring indegree to avoid unneeded iterations.
              delete indegree[neighbor];
            }
          }
        }
      }

      return output.join('\n');
    } catch (error) {
      throw error;
    }
  },
};
