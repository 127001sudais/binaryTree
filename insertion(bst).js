class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    // if the root is null then the node will be added to the root
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position in the tree and the node
      this._insertNode(this.root, newNode);
    }
  }

  //helper function for insert()
  _insertNode(node, newNode) {
    // If the data is less than the node's data move the left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null move left again
        this._insertNode(node.left, newNode);
      }
    } else {
      // if right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null move right again
        this._insertNode(node.right, newNode);
      }
    }
  }

  //helpr function for contain
  _search(node, data) {
    // if root node is empty
    if (!node) {
      return false;
    }
    if (node.data === data) {
      return true;
    }
    if (node.data < data) {
      return this._search(node.right, data);
    }
    if (node.data > data) {
      return this._search(node.left, data);
    }
  }

  contain(data) {
    return this._search(this.root, data);
  }

  //helper function
  _getHeight(node) {
    if (node === null) {
      return -1;
    } else {
      //compute the height of each subtree
      const leftHeight = this._getHeight(node.left);
      const rightHeight = this._getHeight(node.right);

      //   use the larger one and add 1 (for the current node)

      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  getTreeheight() {
    return this._getHeight(this.root);
  }

  //traversal of a binary tree

  //In-Order Traversal: left -> root -> right
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // Pre-order Traversal: root -> left -> right
  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Post-Order Traversal: left -> right -> root
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  // helper function (counting nodes)
  countNodes(node) {
    if (node === null) {
      return 0;
    } else {
      return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
  }

  getCount() {
    return this.countNodes(this.root);
  }

  // displaying data
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node !== null) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);

      console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);

      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

let bst = new BST();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(16);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

bst.printTree();

console.log(bst.contain(15));
console.log(bst.contain(30));
console.log(bst.getTreeheight());

// traversal
console.log("In-order traversal:");
bst.inOrder(bst.root);
console.log("Pre-order traversal:");
bst.preOrder(bst.root);
console.log("Post-order traversal:");
bst.postOrder(bst.root);

// counting number of nodes
console.log(`number of nodes present: ${bst.getCount()}`);
