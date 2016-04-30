// #docregion
import {Component}     from 'angular2/core';
import {Routes, Router, ROUTER_DIRECTIVES} from 'angular2/alt_router';

import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:  [CrisisService]
})
@Routes([
  {path: '/:id', component: CrisisDetailComponent},
  {path: '',    component: CrisisListComponent} // , useAsDefault: true},
])
export class CrisisCenterComponent { }
// #enddocregion
