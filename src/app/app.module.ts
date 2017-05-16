import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { OptionsComponent } from './options/options.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NoteComponent } from './note/note.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiComponenteComponent,
    OptionsComponent,
    NotesContainerComponent,
    NoteComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
