import { Component, OnInit } from '@angular/core';
import { Octokit, App } from 'octokit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-actions-list',
  templateUrl: './github-actions-list.component.html',
  styleUrls: ['./github-actions-list.component.scss']
})
export class GithubActionsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getOctokitData();
  }

  private async getOctokitData() {
    // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
    const octokit = new Octokit({ auth: environment.GitHubToken });

    // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
  }
}
