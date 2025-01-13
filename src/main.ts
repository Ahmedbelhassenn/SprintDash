import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
