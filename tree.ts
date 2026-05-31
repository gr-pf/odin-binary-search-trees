import { Node } from "./node";

export class Tree {
  root: Node | null;

  constructor(private arr: number[]) {
    this.root = this.#buildTree(arr);
  }

  #buildTree(arr: number[]): Node {
    // implémenter la logique complète

    const root = new Node(0);
    return root;
  }
}
