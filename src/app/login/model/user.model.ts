export class User {
 
    private name: string;
    private email: string;
    private password: string;

    constructor(obj){
      this.email = obj.email;
      this.name = obj.name;
      this.password = obj.password;
    }

}