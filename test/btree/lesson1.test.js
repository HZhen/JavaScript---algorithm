import Tree from '../../code/btree/lesson1'

test('Tree:1', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  expect(Tree.isSymmetry(root)).toBe(true)
})
