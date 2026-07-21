import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'realms', loadComponent: () => import('./components/realms-table/realms-table').then(m => m.RealmsTable) },
];
