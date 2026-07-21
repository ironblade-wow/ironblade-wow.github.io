import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { merge, startWith, switchMap, catchError, map, of as observableOf } from 'rxjs';
import { HttpDatabase } from '../../classes/http-database';
import { CredentialsService } from '../../services/credentials-service';

@Component({
  selector: 'app-realms-table',
  imports: [
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './realms-table.html',
  styleUrl: './realms-table.scss',
})
export class RealmsTable {
  private readonly credentialsService = inject(CredentialsService);
  private readonly httpClient = inject(HttpClient);
  private readonly ref = inject(ChangeDetectorRef);

  displayedColumns: string[] = ['slug', 'type'];
  displayedRealms: DisplayedRealm[] = [];
  exampleDatabase: HttpDatabase | null = null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatTable) table!: MatTable<Realm>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.exampleDatabase = new HttpDatabase(
      this.credentialsService,
      this.httpClient,
    );

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getData<Page>(
            '/search/connected-realm',
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          return data.results;
        }),
      )
      .subscribe((pageResults) => {
        console.log(pageResults);

        this.displayedRealms = [];
        pageResults.forEach((pageResult) => {
          const realms = pageResult.data.realms;
          realms.forEach((realm: Realm) =>
            this.displayedRealms.push({
              slug: realm.slug,
              type: realm.type.type,
            }),
          );
        });
        console.log(this.displayedRealms);

        // Only refresh the result length if there is new data. In case of rate
        // limit errors, we do not want to reset the paginator to zero, as that
        // would prevent users from re-triggering requests.
        this.resultsLength = this.displayedRealms.length;

        this.ref.detectChanges();
      });
  }
}

export interface Page {
  page: number;
  maxPageSize: number;
  results: PageResults[];
}

export interface PageResults {
  data: {
    id: number;
    has_queue: boolean;
    population: {
      name: {
        de_DE: string;
        en_GB: string;
        en_US: string;
        es_ES: string;
        es_MX: string;
        fr_FR: string;
        it_IT: string;
        ko_KR: string;
        pt_BR: string;
        ru_RU: string;
        zh_CN: string;
        zh_TW: string;
      };
      type: string;
    };
    realms: Realm[];
    status: {
      name: {
        de_DE: string;
        en_GB: string;
        en_US: string;
        es_ES: string;
        es_MX: string;
        fr_FR: string;
        it_IT: string;
        ko_KR: string;
        pt_BR: string;
        ru_RU: string;
        zh_CN: string;
        zh_TW: string;
      };
      type: string;
    };
  };
  key: { href: string };
}

export interface Realm {
  slug: string;
  type: {
    name: {
      de_DE: string;
      en_GB: string;
      en_US: string;
      es_ES: string;
      es_MX: string;
      fr_FR: string;
      it_IT: string;
      ko_KR: string;
      pt_BR: string;
      ru_RU: string;
      zh_CN: string;
      zh_TW: string;
    };
    type: string;
  };
}

export interface DisplayedRealm {
  slug: string;
  type: string;
}