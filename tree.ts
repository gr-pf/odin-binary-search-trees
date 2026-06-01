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

  includes(value: number) {
    let current = this.root;

    while (current) {
      if (current.data === value) {
        return true;
      } else if (current.data > value) {
        current = current.left;
      } else if (current.data < value) {
        current = current.right;
      }
    }
    return false;
  }

  insert(value: number) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let prev: Node | null;
    let current: Node | null = this.root;

    while (current) {
      if (current.data === value) {
        return;
      } else if (current.data > value) {
        prev = current;
        current = current.left;
        if (!current) {
          prev.left = new Node(value);
        }
      } else if (current.data < value) {
        prev = current;
        current = current.right;
        if (!current) {
          prev.right = new Node(value);
        }
      }
    }
  }
}
