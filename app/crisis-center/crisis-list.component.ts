// #docplaster
// #docregion
import { Component } from 'angular2/core';
import { Crisis, CrisisService } from './crisis.service';
import { Router, OnActivate, RouteSegment, Tree, RouteTree } from 'angular2/alt_router';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnActivate {
  crises: Crisis[];

  private _selectedId: number;

  constructor(
    private _service: CrisisService,
    private _router: Router) { }

  isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }

  routerOnActivate(curr: RouteSegment, prev:any, currTree: RouteTree): void {
    this._selectedId = +currTree.parent(curr).getParam('id');
    this._service.getCrises().then(crises => this.crises = crises);
  }

  onSelect(crisis: Crisis) {
    this._router.navigate([`/crisis-center`, crisis.id]);
  }
}