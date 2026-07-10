class User {
    constructor(name) {
        // Invokes the Setter.
        this.name = name;
    };
    get name() {
        return this._name;
    };
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too Short.");
            return;
        };
        this._name = value;
    };
};
let user = new User("John");
console.log(user.name); // John.
user.name = "Himanshu"; // Name is too Short.
console.log(user.name);