import { Node } from "./node";

export class Tree {
  static prettyPrint(node: Node | null, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }

  root: Node | null;

  constructor(arr: number[]) {
    const sortedArr = Array.from(new Set(arr)).toSorted((a, b) => a - b);
    this.root = this.#buildTree(sortedArr, 0, sortedArr.length - 1);
  }

  #buildTree(arr: number[], start: number, end: number) {
    if (start > end) {
      return null;
    }

    const middle = Math.floor((start + end) / 2);
    const root = new Node(arr[middle]!);

    root.left = this.#buildTree(arr, start, middle - 1);
    root.right = this.#buildTree(arr, middle + 1, end);

    return root;
  }
}
