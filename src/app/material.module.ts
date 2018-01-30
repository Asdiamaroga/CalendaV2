import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { MatNativeDateModule } from'@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, 
            MatInputModule, MatSidenavModule, MatDividerModule, 
            MatTableModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, 
            MatInputModule, MatSidenavModule, MatDividerModule, 
            MatTableModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule],
})
export class MyOwnCustomMaterialModule { }