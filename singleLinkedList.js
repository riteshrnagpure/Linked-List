/*
 * singleLinkedList.js
 *
 *  Created on: 14-July-2019
 *  Author: Ritesh Nagpure
 */

// Node Class
class Node {
    // Constructor to initialize data
    constructor(data = 0) {
        this.data = data;
        this.next = null;
    }
};

// List Class
class List {
    // Constructor to initialize head and length of List
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Helper method to check whether List is empty or not 
    isListEmpty() {
        return this.head === null;
    }

    // Helper method to get total nodes present in List
    getNodeCount() {
        return this.length;
    }

    // Display List in forward direction
    // Used process.stdout.write to display list because console.log prints with new line.
    displayListForward() {
        if (!this.isListEmpty()) {
            console.log('No. of nodes in the List are: ', this.getNodeCount() , '\n');
            process.stdout.write('List is: Head -> ');
            for (let current = this.head; current != null; current = current.next) {
                process.stdout.write(`${current.data} -> `);
            }
            process.stdout.write(" null ");
        } else {
            console.log('List is empty !!');
        }
    }

    // Method to add Node at Last position
    addNodeAtLastPosition(data) {
        // 1. Create a Node
        const newNode = new Node(data);

        // 2. If list is empty
        if (this.isListEmpty()) {
            // attach newly created Node to Head
            this.head = newNode;
            this.length++;
        } else { // List is not empty
            let trav = this.head;
            while (trav.next !== null)
                trav = trav.next;
            // attach newly created Node at Last
            trav.next = newNode;
            this.length++;
        }
    }

    // Method to add Node at First position
    addNodeAtFirstPosition(data) {
        // 1. Crate a Node
        let newNode = new Node(data);

        // 2. If list is empty
        if (this.isListEmpty()) {
            // Attach newly created Node to Head
            this.head = newNode;
            this.length++;
        } else { // List is not empty
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    // Method to add Node at Specific position
    addNodeAtSpecificPosition(position, data) {
        if (position === 1) 
            addNodeAtFirstPosition(data);
        else if (position === this.getNodeCount() + 1)
            addNodeAtLastPosition(data);
        else {
            let newNode = new Node(data);
            // Traverse the list till (position - 1)th node
            let trav = this.head;
            let temp = 1;
            while (temp < position -1) {
                temp++;
                trav = trav.next;
            }
            newNode.next = trav.next;
            trav.next = newNode;
            this.length++;
        }
    }

    // Method to delete Node at Last position
    deleteNodeAtLastPosition() {
        // 1. Check list is not empty
        if (!this.isListEmpty()) {
            // 2. if List contains only one Node
            if (this.head.next === null) {
                // Delete the node and make head as null
                this.head = null;
                this.length = 0;
            } else {    // List constains more than one node
                let trav = this.head;
                while (trav.next.next !== null)
                    trav = trav.next;
                // delete the last node
                trav.next = null;
                this.length--;
            }
        } else {
            console.log('List is empty !!');
        }
    }

    // Method to delete Node at First position
    deleteNodeAtFirstPosition() {
        // 1. Check list is not empty
        if (!this.isListEmpty()) {
            // 2. if list contains only one node
            if (this.head.next === null) {
                this.head = null;
                this.length = 0;
            } else {    // List contains more than one nodes
                let temp = this.head;
                this.head = this.head.next;
                temp = null;
                this.length--;
            }
        } else {
            console.log('List is empty !!');
        }
    }

    // Method to delete Node at specific position
    deleteNodeAtSpecificPosition(position) {
        if (position === 1) 
            deleteNodeAtFirstPosition();
        else if (position === this.getNodeCount()) 
            deleteNodeAtLastPosition();
        else {
            // Traverse list till (position - 1)th node
            let i = 1;
            let trav = this.head;
            while (i < position - 1) {
                i++;
                trav = trav.next;
            }
            let temp = trav.next;
            trav.next = temp.next;
            temp = null;
            this.length--;
        }
    }

    // reverse linked list
    reverseList() {
        if (!this.isListEmpty()) {
            // Create temp variable
            let t1 = this.head;
            let t2 = t1.next;
            t1.next = null;
            while (t2 !== null) {
                let t3 = t2.next;
                t2.next = t1;

                t1 = t2;
                t2 = t3;
            }
            this.head = t1;
        } else {
            console.log('List is empty !!');
        }
    }
};

const list = new List();
list.addNodeAtFirstPosition(5);
list.addNodeAtLastPosition(20);
list.addNodeAtSpecificPosition(2, 10);
list.addNodeAtLastPosition(40);
list.displayListForward();

// Reverse linked list
list.reverseList();
list.displayListForward();

list.deleteNodeAtFirstPosition();
list.deleteNodeAtLastPosition();
list.displayListForward();

list.reverseList();
list.displayListForward();

/*
************OUTPUT***********************
No. of nodes in the List are:  4 

List is: Head -> 5 -> 10 -> 20 -> 40 ->  null 

No. of nodes in the List are:  4 

List is: Head -> 40 -> 20 -> 10 -> 5 ->  null 

No. of nodes in the List are:  2 

List is: Head -> 20 -> 10 ->  null 

No. of nodes in the List are:  2 

List is: Head -> 10 -> 20 ->  null
*/

