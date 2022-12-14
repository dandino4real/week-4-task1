import FileTree from './fileTree';

export function createFileTree(input) {

  const parent = input.filter((data) => data.parentId === undefined);

  const theRest = input

    .filter((data) => data.parentId !== undefined)

    .sort((a, b) => a.id - b.id);



  input = [...parent, ...theRest];

  const fileTree = new FileTree();

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}