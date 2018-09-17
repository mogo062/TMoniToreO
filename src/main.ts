import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

import { ConfigService } from './app/services/config.service';  /* service without DI */

ConfigService.set('base', 'http://172.16.10.132:4200');
ConfigService.set('baseWs', 'http://172.16.10.132:8080/TMoniToreO');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
