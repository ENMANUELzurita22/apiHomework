import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoPageRoutingModule } from './info-routing.module';
import { InfoPage } from './info.page';
import { share } from 'rxjs';

@NgModule({
  imports: [
    SharedModule,
    InfoPageRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
