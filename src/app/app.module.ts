
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './Sections/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonsComponent } from './Sections/buttons/buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './Sections/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ButtonsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
