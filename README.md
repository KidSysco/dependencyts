# Item Dependency and Ordering in TypeScript

This is a TypeScript program that will read a list of items and their dependencies to output a list of items in the order that they can be safely processed.

## Installation

To install this program, you will need to have node.js installed on your system. You can download node.js from [here](https://nodejs.org/en/download/).

You will also need to install TypeScript. You can install TypeScript by running the following command from the command line after you have node.js installed:

```
npm install -g typescript
```

Once you have node.js installed, you can clone this repository to your local system. Then you can transpile the program by running the following command from the root of the repository:

```
tsc
```

You can execute the program by running the following command from the root of the repository:

```
npm start
```

You must install Jest in order to run the tests. You can install Jest by running the following command from the root of the repository:

```
npm install
```

## Testing

This program uses the [Jest](https://jestjs.io/) testing framework. To run the tests, you can run the following command from the root of the repository:

```
npm test
```

## Requirements

The exact requirements given to me are as follows:

```
create a javascript function that solves the following dependency problem:

A person needs to figure out which order his/her clothes need to be put on.

The person creates a file that contains the dependencies.

This input is a declared array of dependencies with the [0] index being the dependency and the [1] index being the item.

A simple input would be:

var input = new string[,]
{
  //dependency    //item
  { "t-shirt", "dress shirt" },
  { "dress shirt", "pants" },
  { "dress shirt", "suit jacket" },
  { "tie", "suit jacket" },
  { "pants", "suit jacket" },
  { "belt", "suit jacket" },
  { "suit jacket", "overcoat" },
  { "dress shirt", "tie" },
  { "suit jacket", "sun glasses" },
  { "sun glasses", "overcoat" },
  { "left sock", "pants" },
  { "pants", "belt" },
  { "suit jacket", "left shoe" },
  { "suit jacket", "right shoe" },
  { "left shoe", "overcoat" },
  { "right sock", "pants" },
  { "right shoe", "overcoat" },
  { "t-shirt", "suit jacket" }
};


In this example, it shows that they must put on their left sock before their pants. Also, they must put on their pants before their belt.

From this data, write a program that provides the order that each object needs to be put on.

The output should be a line-delimited list of objects. If there are multiple objects that can be done at the same time, list each object on the same line, alphabetically sorted, comma separated.

Therefore, the output for this sample file would be:

 left sock,right sock, t-shirt

dress shirt

pants, tie

belt

suit jacket

left shoe, right shoe, sun glasses

overcoat
```
