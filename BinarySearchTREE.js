// Binary Search Tree

// In computer science, binary search trees (BST), sometimes called ordered or sorted binary trees,
//  are a particular type of container: data structures that store "items" (such as numbers, names etc.) in memory.
//   They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items,
//    or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).

// Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle
// of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from
// root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the
// comparison, to continue searching in the left or right subtrees. On average, this means that each comparison
// allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time
// proportional to the logarithm of the number of items stored in the tree. This is much better than the linear
// time required to find items by key in an (unsorted) array, but slower than the corresponding operations on 
// hash tables.


// Complexities
// Time Complexity
// Access 	     Search 	Insertion 	Deletion
// O(log(n)) 	O(log(n)) 	O(log(n)) 	O(log(n))
// Space Complexity
//      O(n)

// References
//     Wikipedia
//     Inserting to BST on YouTube
//     BST Interactive Visualisations

function createArrayOfObjects(sizeOfData){
    const data=[]
    let count=0
    while(count<sizeOfData){
        count++;
        data.push({id:count})
    }
    return data
}
module.exports =binaryTree()
function binaryTree(BST,data){
    const binaryTree={}
    const tree={...BST}
    binaryTree.add=add
    binaryTree.search=search
    function add(BST,data){
        insert(tree,data.id)
        function insert(root,value){
            if(!!root.value){
                if(root.value.id<value){
                    insert(root.right,value)
                }else{
                    insert(root.left,value)
                }
            }else{
                root.value=data,
                root.right={}
                root.left={}
            }
        }
    }
    function search(BST,data){
            return recursiveSearch(tree,data)
        function recursiveSearch(root,value){
            if(!root.value||root.value.id==value.id){return root.value}
            if(root.value.id>value.id){ return recursiveSearch(root.left,value)}
            return recursiveSearch(root.right,value)
        }
                
    }
    binaryTree.data=tree
    return binaryTree
}
const data=createArrayOfObjects(5)
const tree=binaryTree()
function setDataToTree(data){
    const rootIndex=parseInt(data.length/2)
    data.slice(0,rootIndex+1).reverse().forEach((item,index)=>tree.add(tree,item))
    data.slice(rootIndex+1,data.length).forEach((item,index)=>tree.add(tree,item))
}
setDataToTree(data)
// console.log(tree.data,'valor final')
console.log(tree.search(tree,{id:1}),'valor final')
// const jsondata=JSON.stringify(tree.data)
// console.log(jsondata)

