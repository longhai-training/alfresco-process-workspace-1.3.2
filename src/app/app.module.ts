/*
 * Copyright 2005-2018 Alfresco Software, Ltd. All rights reserved.
 *
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts';

import { AppConfigService, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
import { AdfModule } from './adf.module';

import { environment } from '../environments/environment';

import { AppRootComponent } from './app-root.component';
import { routing } from './app.routes';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    AppsContainerComponent,
    AppsComponent,
    AppContainerComponent,
    BreadCrumbsActionsComponent,
    BreadCrumbsComponent,
    BreadCrumbsEntryComponent,
    CreateProcessComponent,
    CreateTaskComponent,
    DashboardComponent,
    DashboardSettingsComponent,
    HeaderComponent,
    LoginComponent,
    ProcessAttachmentComponent,
    ProcessDetailsComponent,
    ProcessDetailsContainerComponent,
    ProcessListPaginatorComponent,
    ProcessListContainerComponent,
    ProcessSidebarComponent,
    ProcessStatisticsComponent,
    ProcessToolbarComponent,
    SideMenuComponent,
    TaskAttachmentComponent,
    TaskDetailsContainerComponent,
    TaskFromComponent,
    TaskFormDialogComponent,
    TaskListContainerComponent,
    TaskSidebarComponent,
    TaskToolbarComponent,
    TaskListPaginatorComponent,
    UserProfileMenuComponent,
    SettingComponent,
    ProvidersComponent,
    DialogConfirmationComponent,
    BlobPreviewComponent
} from './components';

import { ApplicationContentStateService,
    PreviewService,
    MediaQueryService,
    UnauthorisedErrorHandler } from './services';

import { FullNamePipe } from './pipes';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        AdfModule,
        ChartsModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppRootComponent,
        AppsContainerComponent,
        AppContainerComponent,
        AppsComponent,
        BreadCrumbsActionsComponent,
        BreadCrumbsComponent,
        BreadCrumbsEntryComponent,
        CreateProcessComponent,
        CreateTaskComponent,
        DashboardComponent,
        DashboardSettingsComponent,
        HeaderComponent,
        LoginComponent,
        ProcessAttachmentComponent,
        ProcessDetailsComponent,
        ProcessDetailsContainerComponent,
        ProcessListPaginatorComponent,
        ProcessListContainerComponent,
        ProcessSidebarComponent,
        ProcessStatisticsComponent,
        ProcessToolbarComponent,
        SideMenuComponent,
        TaskAttachmentComponent,
        TaskDetailsContainerComponent,
        TaskFromComponent,
        TaskListContainerComponent,
        TaskSidebarComponent,
        TaskToolbarComponent,
        TaskListPaginatorComponent,
        UserProfileMenuComponent,
        SettingComponent,
        ProvidersComponent,
        DialogConfirmationComponent,
        BlobPreviewComponent,
        TaskFormDialogComponent,
        FullNamePipe
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: AppConfigService, useClass: environment.appConfigServiceType },
        {
            provide: TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'app',
                source: 'resources'
            }
        },
        MediaQueryService,
        PreviewService,
        ApplicationContentStateService,
        { provide: ErrorHandler, useClass: UnauthorisedErrorHandler }
    ],
    exports: [
        DialogConfirmationComponent,
        TaskFormDialogComponent
    ],
    entryComponents: [
        DialogConfirmationComponent,
        TaskFormDialogComponent
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule { }
