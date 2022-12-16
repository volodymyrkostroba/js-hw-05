// Интернет банкинг

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    
    balance: 0,
    transactions: [],
  
  
    createTransaction(amount, type) {
        let obj = {amount:amount,type:type};
        return obj
    },
  
  
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount,Transaction.DEPOSIT));


    },
  
  
    withdraw(amount) {
        if(this.balance < amount){
            console.log('недостаточно средств');
            return
        }
        this.balance -= amount;
        this.transactions.push(this.createTransaction(amount,Transaction.WITHDRAW));
    },
  
 
    getBalance() {
        return this.balance;
    },
  
  
    getTransactionTotal(type) {
        let total = 0;

        for (const transaction of this.transactions) {
            if(transaction.type === type){
                total += transaction.amount;
            }
        }

        return total;
    },
  };



  console.log(account.getBalance());
  
  account.deposit(30);
  console.log(account);
  account.withdraw(20);
  account.withdraw(5);
  account.deposit(20);
  account.deposit(10);
  console.log(account);
  console.log(account.getBalance());
  
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));

  account.withdraw(27);
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
  console.log(account.getBalance());

  console.log(account);
