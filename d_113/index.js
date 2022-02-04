class Storage {
    options = {
        defaultValue: 'default',
        storageType: localStorage
    }

    constructor(name, options = this.options) {
        this.name = name;
        this.defaultValue = options.defaultValue;
        this.storageType = options.storageType;
    }

    set() {
        this.storageType.setItem(this.name, this.defaultValue);
    }

    get() {
        return this.storageType.getItem(this.name);
    }

    clear() {
        this.storageType.removeItem(this.name);
    }

    isEmpty() {
        if (this.storageType.getItem(this.name) === null || this.storageType.getItem(this.name) === null) {
            return true;
        }
    }
}



const test = new Storage('test', { defaultValue: 'test', storageType: sessionStorage });

