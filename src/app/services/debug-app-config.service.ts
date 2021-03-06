/*
 * Copyright 2005-2018 Alfresco Software, Ltd. All rights reserved.
 *
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */

import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService, StorageService } from '@alfresco/adf-core';

@Injectable()
export class DebugAppConfigService extends AppConfigService {

    constructor(private storage: StorageService, http: HttpClient) {
        super(http);
    }

    /** @override */
    get<T>(key: string, defaultValue?: T): T {
        if (key === 'ecmHost' || key === 'bpmHost') {
            return <T>(<any>this.storage.getItem(key) || super.get<T>(key));
        }
        return super.get<T>(key, defaultValue);
    }

}
