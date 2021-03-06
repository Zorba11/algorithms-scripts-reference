class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class ThentiaTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            //left
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //right
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }


    insertWithEdges(edges) {
            const newNode = new Node(1);
            this.root = newNode;

            let currentNode = this.root;

            // if (value === currentNode.value) {
            //     //left
            //     if (!currentNode.left) {
            //         currentNode.left = newNode;
            //         return this;
            //       }
            //       currentNode = currentNode.left;
            // }

            edges.forEach((edge) => {
                if (currentNode.value === edge[0]) {
                   currentNode = new Node(edge[1]);
                   newNode.left = currentNode;
                   return this;
                } else if (currentNode.value === edge[1]) {
                    currentNode = new Node(edge[0]);
                    newNode.right = currentNode;
                    return this;
                } else if (currentNode.right === edge[0]) {
                    currentNode = 2;

                }
            })

            // console.log(currentNode)
    }

  }
  
  const tree = new ThentiaTree();

  const edges = [[4,5], [5,3], [1,5], [2,1]];
  tree.insertWithEdges(edges);
//   tree.insert(9)
//   tree.insert(4)
//   tree.insert(6)
//   tree.insert(20)
//   tree.insert(170)
//   tree.insert(15)
//   tree.insert(1)

//   console.log(tree.root);
  console.log(JSON.stringify(traverse(tree.root)))

  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  