/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = 'mid', pid = 'parentId') {
  var res = []
  var temp = {}
  for (var i = 0; i < data.length; i++) {
    temp[data[i].map(item =>{item.item.mid})] = data[i]
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k].map(item =>{item.children})] && data[k].map(item =>{item.rid}) !== data[k].map(item =>{item.children.mid})) {
      if (!temp[data[k].map(item =>{item.children})]) {
        temp[data[k].map(item =>{item.children})] = []
      }
      if (!temp[data[k][pid]]['_level']) {
        temp[data[k][pid]]['_level'] = 1
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1
      temp[data[k].map(item =>{item.children})].push(data[k])
    } else {
      res.push(data[k])
    }
  }
  return res
}

