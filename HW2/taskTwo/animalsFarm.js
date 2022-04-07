const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readlinePromise = (question) =>
  new Promise((resolve) => {
    readline.question(question, (input) => {
      resolve(input);
    });
  });

let totalAge;
let animalId = 0;
const inputAnimal = async () => {
  const type = await readlinePromise("Enter type: ");
  const name = await readlinePromise("Enter name: ");
  const age = await readlinePromise("Enter age: ");
  animalId += 1;

  return {
    id: animalId,
    type,
    name,
    age: Number(age),
    children: [],
  };
};

const addNewChildByParentId = async () => {
  const answer = await readlinePromise("Do you want to add new child? (y/n)");
  const needNewChild = answer === "y";

  if (needNewChild) {
    const parentId = await readlinePromise("Input parent id: ");
    return parentId;
  }

  return -1;
};

function dfs(parents, parentId) {
  for (let parent of parents) {
    if (parent.id === parentId) {
      return parent;
    } else {
      const foundParent = dfs(parent.children, parentId);
      if (foundParent) {
        return foundParent;
      }
    }
  }
  return null;
}

function dfsAge(parents) {
  totalAge = 0;
  for (let parent of parents) {
    totalAge += parent.age;
    totalAge = dfsAge(parent.children, totalAge);
  }
  return totalAge;
}

async function main() {
  let totalAge = 0;

  const parentAnimals = [];

  const animalsAmount = await readlinePromise("Enter parent animals amount: ");
  for (let i = 0; i < animalsAmount; i++) {
    const newAnimal = await inputAnimal();
    totalAge += newAnimal.age;

    parentAnimals.push(newAnimal);
  }

  let parentId = -1;
  do {
    console.log(JSON.stringify(parentAnimals, null, 2));

    parentId = Number(await addNewChildByParentId());
    const parent = dfs(parentAnimals, parentId);
    if (parent) {
      const newChild = await inputAnimal();
      totalAge += newChild.age;
      parent.children.push(newChild);
    } else if (parentId !== -1) {
      console.log("Parent not found, try again...");
    }
  } while (parentId !== -1);

  console.log("Total age on go: ", totalAge);
  console.log("Total age on whole structure: ", dfsAge(parentAnimals, 0));
  readline.close();
}

main();
