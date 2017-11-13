import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import {AdminRoutingModule} from "./admin-routing";
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatSnackBar,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminService} from "./admin.service";
import { WriteComponent } from './news/write/write.component';
import {ViewComponent} from './news/view/view.component';
import {FormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";
import { ModifyComponent } from './news/modify/modify.component';
import {ViewDialogComponent} from "./news/view/view.dialog.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    FlexLayoutModule,
    CKEditorModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [AdminComponent, NewsComponent, HomeComponent, WriteComponent, ViewComponent, ModifyComponent, ViewDialogComponent],
  providers: [AdminService],
  entryComponents: [ViewDialogComponent]
})
export class AdminModule { }
