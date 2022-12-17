class Storage {
    constructor(arr){
        this._items = arr;
    }

    get items(){
       return this._items;
    }

    addItem(item){
        this._items.push(item);
        
    }

    removeItem(item){
        if(this._items.includes(item)){
          this._items.splice(this._items.indexOf(item),1)
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

  console.log(storage.items);

  storage.addItem('Дроид');
  console.log(storage.items);

  storage.removeItem('Пролонгер');
  console.log(storage.items);