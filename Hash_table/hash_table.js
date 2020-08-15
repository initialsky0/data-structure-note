class HashTable {
   constructor(size){
     this.data = new Array(size);
   //   this.key = new Set();
   }
   
   // _is meant to be private
   _hash(key) {
     let hash = 0;
     for (let i =0; i < key.length; i++){
         hash = (hash + key.charCodeAt(i) * i) % this.data.length
     }
     return hash;
   }

   // set(key, value) {
   //    let i = this.key.size;
   //    const key_hash = this._hash(key);
   //    if(!this.key.has(key_hash)) {
   //       this.key.add(key_hash);
   //    } else {
   //       i =  [...this.key].indexOf(key_hash);
   //    }
   //    this.data[i] = [key_hash, value];
   // }

   // get(key) {
   //    const key_hash = this._hash(key);
   //    if(this.key.has(key_hash)) {
   //       const i = [...this.key].indexOf(key_hash);
   //       return this.data[i][1];
   //    } else {return undefined; }
   // }

   set(key, value) {
      const key_hash = this._hash(key);
      if(!this.data[key_hash]){
         this.data[key_hash] = new Array([key, value]);
         return this.data;
      } else {
         for(const data of this.data[key_hash]) {
            if(data[0] === key) {
               data[1] = value;
               return this.data;
            }
         }
         this.data[key_hash].push([key, value]);
         return this.data;
      }
   }

   get(key) {
      const key_hash = this._hash(key);
      const matchData = this.data[key_hash];
      if(matchData.length){
         for(const data of matchData) {
            if(data[0] === key) { return data[1]; }
         }
      } else { return undefined; }
   }

   keys() {
      const keysArray = [];
      for(const item of this.data) {
         // Check if data contains item
         if(item) {
            if(item.length === 1) {
               // if there is no collision
               keysArray.push(item[0][0]);
            } else {
               // if there is collision 
               for(const subItem of item) {
                  keysArray.push(subItem[0])
               }
            }
         }
      }
      return keysArray;
   }
 }
 
 const myHashTable = new HashTable(3);
 myHashTable.set('grapes', 10000);
 console.log(myHashTable.get('grapes'));
 myHashTable.set('apples', 9);
 console.log(myHashTable.get('apples'));
 myHashTable.set('grapes', 80);
 console.log(myHashTable.get('grapes'));
 myHashTable.set('oranges', 20);
 console.log(myHashTable.get('oranges'));
 console.log(myHashTable.keys());
 