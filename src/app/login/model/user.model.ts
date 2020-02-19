export class User {

    private name: string;
    private email: string;
    private password: string;
    private preferences: Array<string> = [];

    constructor(obj) {
      this.email = obj.email;
      this.name = obj.name;
      this.password = obj.password;
      this.preferences= [];
    }

}
