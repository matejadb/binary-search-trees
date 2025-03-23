class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export class Tree {
	constructor(array) {
		this.array = array;
		this.root = this.buildTree(array);
	}

	buildTree(array) {
		return this.sortArray(array);
	}

	sortArray(array) {
		if (array.length === 0) return array;

		array = array.sort(function (a, b) {
			return a * 1 - b * 1;
		});

		let ret = [array[0]];
		for (let i = 0; i < array.length; i++) {
			if (array[i - 1] !== array[i]) {
				ret.push(array[i]);
			}
		}

		return ret;
	}

	prettyPrint(node, prefix = '', isLeft = true) {
		if (node === null) {
			return;
		}
		if (node.right !== null) {
			prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
		}
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
		if (node.left !== null) {
			prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
		}
	}
}
