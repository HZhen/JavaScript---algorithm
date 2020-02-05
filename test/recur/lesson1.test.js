import recur from '../../code/recur/lesson1.js'

test('recur', () => {
  expect(recur('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})
