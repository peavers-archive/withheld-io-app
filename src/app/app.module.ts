import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MaterialModule } from './shared/material.module';

import md from 'highlight.js/lib/languages/markdown';
import yaml from 'highlight.js/lib/languages/yaml';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './layout/login/login.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AngularEditorModule } from '@kolkov/angular-editor';

import 'brace';
import 'brace/mode/markdown';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';


export function hljsLanguages() {
  return [
    { name: 'java', func: java },
    { name: 'typescript', func: typescript },
    { name: 'javascript', func: javascript },
    { name: 'scss', func: scss },
    { name: 'xml', func: xml },
    { name: 'yml', func: yaml },
    { name: 'md', func: md }
  ];
}

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, SidebarComponent, NavbarComponent, LoginComponent],
  imports: [
    NgxPageScrollModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatProgressButtonsModule,
    AngularEditorModule,
    LMarkdownEditorModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
