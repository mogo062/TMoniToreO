export class User {
   username : string = '';
   password :  string ='';
   isConnected : boolean = false;
}

export class MenuLink {
  _link : string ='';
  _state : string = '';
  _text: string = '';
  _icon : string = '';
  constructor(link: string, state: string, text : string, icon : string){
    this._link = link;
    this._state = state;
    this._text = text;
    this._icon = icon;
  }

  get link(){
    return this._link;
  }

  get state(){
    return this._state;
  }

  get text(){
    return this._text;
  }

  get icon(){
    return this._icon;
  }
}
