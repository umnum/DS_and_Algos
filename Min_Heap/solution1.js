// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
		const p = Math.floor((array.length - 2) / 2);
		for (let i = p; i >= 0; i--) {
			this.siftDown(array,i,array.length-1);
		}
		return array;
  }

  siftDown(array,i, last) {
    // Write your code here.
		let leftChild = i * 2 + 1;
		while (leftChild <= last) {
			const rightChild = i * 2 + 2 <= last ? i * 2 + 2 : -1;
		}
		if (2*i + 1 < array.length && array[i] > array[2*i+1]) {
			this.swap(array, i, 2*i + 1)
			this.siftDown(array, 2*i + 1)
		}
		else if (2*i + 2 < array.length && array[i] > array[2*i + 2]) {
			this.swap(array, i, 2*i + 2)
			this.siftDown(array, 2*i + 2)
		}
  }

  siftUp(array, i) {
    // Write your code here.
		let p = Math.floor((i-1)/2);
		while (i > 0 && array[i] < array[p]) {
			this.swap(array, p, i)
			i = p;
			p = Math.floor((i-1)/2);
		}
  }

  peek() {
    // Write your code here.
		return this.heap[0];
  }

  remove() {
    // Write your code here.
		this.swap(this.heap, 0, this.heap.length - 1)
		const val = this.heap.pop();
		this.siftDown(0, this.heap);
  }

  insert(value) {
    // Write your code here.
		console.log(this.heap)
		this.heap.push(value)
		console.log(this.heap)
		this.siftUp(this.heap, this.heap.length - 1)
		console.log(this.heap)
  }
	
	swap(array,a,b) {
		array[a] ^= array[b];
		array[b] ^= array[a];
		array[a] ^= array[b];
	}
}
