class RandomizedSet {
    constructor() {
        this.set = new Set(); // Use a Set to store unique values
    }

    insert(val) {
        if (!this.set.has(val)) {
            this.set.add(val); // Add value to the Set
            return true;
        }
        return false;
    }

    remove(val) {
        if (this.set.has(val)) {
            this.set.delete(val); // Remove value from the Set
            return true;
        }
        return false;
    }

    getRandom() {
        const items = Array.from(this.set); // Convert Set to an Array
        const randomIndex = Math.floor(Math.random() * items.length); // Generate random index
        return items[randomIndex]; // Return random element
    }
}


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */