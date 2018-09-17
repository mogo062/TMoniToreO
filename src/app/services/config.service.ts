export class ConfigService {
     private _base : string = 'http://127.0.0.1:8080';
     private _baseWs : string = 'http://127.0.0.1:8080';

     static set(property, value) : void{
       this['_'+property] = value;
     }

     static get(property) : string{
       return this['_'+property];
     }
}
