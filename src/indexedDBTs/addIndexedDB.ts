// indexedDB插入数据操作
// // 插入数据
// // 数据库对象   表名   数据
const addData = (db: IDBDatabase, storeName: string, data: any) => {
    const transaction = db.transaction([storeName], 'readwrite')
    const objectStore = transaction.objectStore(storeName)
  
    for (let item of data) {
      objectStore.add(item)
    }
    transaction.oncomplete = function () {
      console.log('数据写入成功')
    }
  
    transaction.onerror = function (event) {
      console.log('数据写入失败')
    }
}
  
export default addData