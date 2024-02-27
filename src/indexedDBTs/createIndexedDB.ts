// // 创建数据库  表
// // 数据库名  版本
const openDB = async (name: string, version = 1): Promise<IDBDatabase> => {
    // 检查当前环境是否支持 IndexedDB API，如果支持，
    // 就可以使用 indexedDB 对象来进行 IndexedDB 相关的操作，
    // 比如打开数据库、创建对象仓库等。
    return new Promise((resolve, reject) => {
      const indexedDB = window.indexedDB
      if (!indexedDB) {
        reject('你的浏览器不支持 IndexedDB')
      }
      // 打开数据库，若没有则会创建
      const request = indexedDB.open(name, version)
      // 数据库打开成功回调
      request.onsuccess = function (event) {
        const db = (event.target as IDBRequest).result // 数据库对象
        console.log('数据库打开成功')
        resolve(db)
      }
      // 数据库打开失败回调
      request.onerror = function (event) {
        console.log('数据库打开报错')
        reject('数据库打开失败')
      }
      // 数据库有更新时候的回调
      request.onupgradeneeded = function (event) {
        // 数据库创建或升级的时候会触发
        console.log('数据库创建')
        const db = (event.target as IDBOpenDBRequest).result // 数据库对象
        // 创建存储库
        const objectStore = db.createObjectStore('user', {
          keyPath: 'time' // 主键
          // autoIncrement: true // 实现自增
        })
        // 创建索引，在后面查询数据的时候可以根据索引查
        objectStore.createIndex('time', 'time', { unique: true }) //unique唯一约束
        objectStore.createIndex('name', 'name', { unique: false })
        objectStore.createIndex('age', 'age', { unique: false })
      }
    })
}
export default openDB