/**
 * @param  {Object[]} data [description]
 * @param  {Element} node [description]
 *
 * @example
 *
 * const categories = [{
 *     title: "Одежда",
 *     left: 1,
 *     right: 22
 *   }, {
 *     title: "Мужская",
 *     left: 2,
 *     right: 9
 *   }, {
 *     title: "Женская",
 *     left: 10,
 *     right: 21
 *   }, {
 *     title: "Костюмы",
 *     left: 3,
 *     right: 8
 *   }, {
 *     title: "Платья",
 *     left: 11,
 *     right: 16
 *   }, {
 *     title: "Юбки",
 *     left: 17,
 *     right: 18
 *   }, {
 *     title: "Блузы",
 *     left: 19,
 *     right: 20
 *   }, {
 *     title: "Брюки",
 *     left: 4,
 *     right: 5
 *   }, {
 *     title: "Жакеты",
 *     left: 6,
 *     right: 7
 *   }, {
 *     title: "Вечерние",
 *     left: 12,
 *     right: 13
 *   }, {
 *     title: "Летние",
 *     left: 14,
 *     right: 15
 *   }];
 *
 * insertListFromNestedData(categories, document.querySelector('#list'));
 *
 */
module.export = function insertListFromNestedData(data, node) {
  const min = data.reduce((min, el) => {
    return el.left < min ? el.left : min;
  }, data[0].left);

  const max = data.reduce((max, el) => {
    return el.right > max ? el.right : max;
  }, data[0].right);

  const rootElements = findChildren({ left: min - 1, right: max + 1 }, data);

  const rootUl = rootElements.reduce((tree, el) => {
    return createTree(el, tree, data);
  }, document.createElement('ul'));

  node.appendChild(rootUl);
};

function findChildren({ left, right }, arr, container = []) {
  if (right - left <= 1) return container;

  const child = arr.find(el => el.left === left + 1);
  child && container.push(child);

  return child && child.right + 1 < right ?
    findChildren({ left: child.right, right }, arr, container) :
    container;
}

function createTree(note, ul, arr) {
  const li = document.createElement('li');
  li.innerText = note.title;
  ul.appendChild(li);

  const children = findChildren(note, arr);
  if (children.length) {
    const liUl = document.createElement('ul');
    children.forEach(el => createTree(el, liUl, arr));
    li.appendChild(liUl);
  }

  return ul;
}
