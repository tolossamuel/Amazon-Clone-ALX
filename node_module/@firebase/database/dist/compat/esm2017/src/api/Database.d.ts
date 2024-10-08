/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FirebaseApp } from '@firebase/app-types';
import { FirebaseService } from '@firebase/app-types/private';
import { Compat } from '@firebase/util';
import { FirebaseDatabase as ExpDatabase } from "@firebase/database";
import { Reference } from './Reference';
/**
 * Class representing a firebase database.
 */
export declare class Database implements FirebaseService, Compat<ExpDatabase> {
    readonly _delegate: ExpDatabase;
    readonly app: FirebaseApp;
    static readonly ServerValue: {
        TIMESTAMP: object;
        increment: (delta: number) => object;
    };
    /**
     * The constructor should not be called by users of our public API.
     */
    constructor(_delegate: ExpDatabase, app: FirebaseApp);
    INTERNAL: {
        delete: () => Promise<void>;
    };
    /**
     * Modify this instance to communicate with the Realtime Database emulator.
     *
     * <p>Note: This method must be called before performing any other operation.
     *
     * @param host - the emulator host (ex: localhost)
     * @param port - the emulator port (ex: 8080)
     */
    useEmulator(host: string, port: number): void;
    /**
     * Returns a reference to the root or to the path specified in the provided
     * argument.
     *
     * @param path - The relative string path or an existing Reference to a database
     * location.
     * @throws If a Reference is provided, throws if it does not belong to the
     * same project.
     * @returns Firebase reference.
     */
    ref(path?: string): Reference;
    ref(path?: Reference): Reference;
    /**
     * Returns a reference to the root or the path specified in url.
     * We throw a exception if the url is not in the same domain as the
     * current repo.
     * @returns Firebase reference.
     */
    refFromURL(url: string): Reference;
    goOffline(): void;
    goOnline(): void;
}
