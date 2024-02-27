import addIndexedDB from './addIndexedDB'
import createIndexedDB from './createIndexedDB'

const addDataBtn = document.getElementById('add-data-btn');

addDataBtn?.addEventListener('click', async() => {
    let db: IDBDatabase
  let data
    try {
    //   获取数据库
    db = await createIndexedDB('my-data', 1)
    data = [
      {
        time: new Date().getTime(),
        name: '小小怪',
        age: 25
      },
      {
        time: new Date().getTime() + 1,
        name: '大大怪',
        age: 45
      }
      ]
    //   插入数据
    addIndexedDB(db, 'user', data)
  } catch (error) {
    console.log('插入失败')
  }
});

// node_modules
// src----------------目录indexedDBTs--------------addIndexedDB.ts
// .gitignore        |                            |         
// package           |                            |-createIndexedDB.ts
// pnpm - lock       index.html                   |
// tsconfig                                       |-addIndexedDB.ts
// webpack.config                                 |                  
                
