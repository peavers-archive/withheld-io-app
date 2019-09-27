import { Component, Inject, OnInit } from '@angular/core';
import { ChallengeService } from '../../../../core/services/challenge.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';
import { Author, Challenge, CodeFile, Comment, Feedback } from '../../../../core/domain/modules';
import { CodeFileService } from '../../../../core/services/code-file.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialogComponent } from '../../../../shared/component/feedback-dialog/feedback-dialog.component';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  challenge: Challenge;

  tableOfContent;

  user;

  constructor(
    private activatedRoute: ActivatedRoute,
    private challengeService: ChallengeService,
    private codeFileService: CodeFileService,
    private clipboardService: ClipboardService,
    private pageScrollService: PageScrollService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      this.challenge = data['data']['challenge'];
      this.tableOfContent = data['data']['toc'];
    });

    this.user = this.authService.getUser();
  }

  deleteChallenge(challenge: Challenge) {
    this.challengeService.delete(challenge);
  }

  copyToClip(url: string) {
    this.clipboardService.copyFromContent(url);

    this.snackBar.open(`Copied ${url}`, null, {
      duration: 5 * 1000
    });
  }

  feedback() {
    let author: Author = {
      avatarUrl: this.user.photoURL,
      name: this.user.displayName,
      email: this.user.email
    };

    let feedback: Feedback = {
      author: author
    };

    const dialogRef = this.dialog.open(FeedbackDialogComponent, {
      width: '60vw',
      data: [feedback, this.challenge, this.user]
    });

    dialogRef.afterClosed().subscribe((response: boolean) => {

    });
  }

  uniqueCommentAuthor(codeFile: CodeFile): Array<Author> {
    let authors = [];

    if (codeFile.codeLines === undefined) {
      return;
    }

    for (const codeLine of codeFile.codeLines) {
      if (codeLine.comments.length == 0) {
        continue;
      }

      codeLine.comments.forEach((comment: Comment) => {
        authors.push(comment.author);
      });
    }

    return authors.filter((e, i) => authors.findIndex(a => a.email === e.email) === i);
  }


}
