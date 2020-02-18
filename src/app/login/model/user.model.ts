export class User {

    private name: string;
    private email: string;
    private password: string;
    private prefernces: Array<string> = [];

    constructor(obj) {
      this.email = obj.email;
      this.name = obj.name;
      this.password = obj.password;
      this.prefernces = this.setPreferenceLIst(obj);
    }


    public setPreferenceLIst(obj) {
    const language =   obj.languagePreference.map((item) => {
          return item.id;
      });

    const production =  obj.production.map((item) => {
        return item.id;
    });

    const genre =  obj.genre.map((item) => {
        return item.id;
    });
    return [].concat(language, production, genre);
    }

}
