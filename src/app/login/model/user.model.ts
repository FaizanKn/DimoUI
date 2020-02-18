export class User {

    private name: string;
    private email: string;
    private password: string;
    private preferences: Array<string> = [];

    constructor(obj) {
      this.email = obj.email;
      this.name = obj.name;
      this.password = obj.password;
      this.preferences= this.setPreferenceLIst(obj);
    }


    public setPreferenceLIst(obj) {
    const language =   obj.languagePreference.map((item) => {
          return item.code;
      });

    const production =  obj.production.map((item) => {
        return item.code;
    });

    const genre =  obj.genre.map((item) => {
        return item.code;
    });
    return [].concat(language, production, genre);
    }

}
