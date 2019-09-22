import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { CircleRoutingModule } from './project.routing';
import { MomentModule } from 'ngx-moment';
import { MaterialModule } from '../../shared/material.module';
import { DefaultComponent } from './pages/default/default.component';
import { ImportComponent } from './pages/import/import.component';
import { ReviewComponent } from './pages/review/review.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeLineComponent } from './components/code-line/code-line.component';
import { CodeFileComponent } from './components/code-file/code-file.component';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { CodeCommentComponent } from './components/code-comment/code-comment.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WysiwygEditorComponent } from './components/wysiwyg-editor/wysiwyg-editor.component';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    DefaultComponent,
    ImportComponent,
    ReviewComponent,
    CodeFileComponent,
    CodeLineComponent,
    CodeCommentComponent,
    ProjectHeaderComponent,
    WysiwygEditorComponent

  ],
  imports: [
    NgxMdModule.forRoot(),
    SharedModule,
    CircleRoutingModule,
    MomentModule,
    MaterialModule,
    HighlightModule,
    MatProgressButtonsModule,
    VirtualScrollerModule,
    NgxPageScrollModule,
    AngularEditorModule,
    LMarkdownEditorModule
  ],
  entryComponents: []
})
export class ProjectModule {
}
