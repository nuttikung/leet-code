// Memoization for optimizer
// const Memo = {};
// Making a Bank to use Map
const BankMap = new Map();

// Memo[4] = false;
// Memo['4'].hasAccount = false
// console.log(Memo);

/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
	// Create Map to use as a wallet
	balance.forEach((element, index) => BankMap.set(index, element));
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
	// COMMENT: Due to account number is higher than own account
	if (
		account1 > BankMap.size ||
		account2 > BankMap.size ||
		account1 === account2
	) {
		return false;
	}

	if (BigInt(money) > BigInt(BankMap.get(account1 - 1))) {
		return false;
	}
	BankMap.set(account1 - 1, BigInt(BankMap.get(account1 - 1)) - BigInt(money));
	BankMap.set(account2 - 1, BigInt(BankMap.get(account2 - 1)) + BigInt(money));
	return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
	if (account > BankMap.size) {
		return false;
	}
	BankMap.set(account - 1, BigInt(BankMap.get(account - 1)) + BigInt(money));
	return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
	// COMMENT: Due to account number is higher than own account
	if (account > BankMap.size) {
		return false;
	}
	// COMMENT: Money cannot withdraw since total is less than request
	if (BigInt(money) > BigInt(BankMap.get(account - 1))) {
		return false;
	}
	BankMap.set(account - 1, BigInt(BankMap.get(account - 1)) - BigInt(money));
	return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// TODO: Optimize due to time exceed
let start = Date.now();
// const bank = new Bank([10, 100, 20, 50, 30]);
// console.log("Create Bank as : ", BankMap);
// console.log(bank.withdraw(3, 10));
// console.log(
// 	"After withdraw account no: ",
// 	3,
// 	" amount: ",
// 	10,
// 	" balance : ",
// 	BankMap,
// );
// console.log(bank.transfer(5, 1, 20));
// console.log("Bank balance : ", BankMap);
// console.log(bank.deposit(5, 20));
// console.log("Bank balance : ", BankMap);
// console.log(bank.transfer(3, 4, 15));
// console.log("Bank balance : ", BankMap);
// console.log(bank.withdraw(10, 50));
// console.log("Bank balance : ", BankMap);
// Test 1:
// console.log(sequentialDigits(1, 100));
// Test 2:
// console.log(isPalindrome("race a ca"));
// Test 3:
// console.log(isPalindrome(" "));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
