import { Component, OnInit } from '@angular/core';
import { Octokit, App } from 'octokit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-actions-list',
  templateUrl: './github-actions-list.component.html',
  styleUrls: ['./github-actions-list.component.scss']
})
export class GithubActionsListComponent implements OnInit {

  workflow: any;
  workflowRuns: any;

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

    const {
      data: { workflows },
    } = await octokit.rest.actions.listRepoWorkflows({
      owner: 'konradst',
      repo: 'octokit-playground'
    });

    console.log('workflows', workflows);

    const {
      data: { workflow_runs },
    } = await octokit.rest.actions.listWorkflowRuns({
      owner: 'konradst',
      repo: 'octokit-playground',
      workflow_id: workflows[0].id
    });

    console.log('workflow runs', workflow_runs);

    this.workflow = workflows[0];
    this.workflowRuns = workflow_runs;
  }
}
