import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CalculatorModule } from './calculator/feature/calculator/calculator.module';
import { LoggerService } from './shared/utils/logger.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CalculatorModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
