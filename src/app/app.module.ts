import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { DateComponent } from './components/date/date.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './services/logger';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SelectCurrencyComponent } from './components/select/select-currency.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DateComponent,
    CalculatorComponent,
    SelectCurrencyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
