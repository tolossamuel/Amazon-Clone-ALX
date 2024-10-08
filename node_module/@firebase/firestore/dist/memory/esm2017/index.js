import firebase from '@firebase/app';
import '@firebase/util';
import '@firebase/logger';
import '@firebase/webchannel-wrapper';
import { $ as $a, v as vu, k, x as xa, B as Ba, q as qa, Q as Qa, G as Ga, H as Ha, z as za, Y as Ya, X as Xa, t as th, e as eh, L as La, _ as _u, m as mu, a as ka } from './prebuilt-42052e85.js';
import { Component } from '@firebase/component';

const name = "@firebase/firestore";
const version = "2.2.4";

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
const firestoreNamespace = {
    Firestore: $a,
    GeoPoint: vu,
    Timestamp: k,
    Blob: xa,
    Transaction: Ba,
    WriteBatch: qa,
    DocumentReference: Qa,
    DocumentSnapshot: Ga,
    Query: Ha,
    QueryDocumentSnapshot: za,
    QuerySnapshot: Ya,
    CollectionReference: Xa,
    FieldPath: th,
    FieldValue: eh,
    setLogLevel: La,
    CACHE_SIZE_UNLIMITED: _u
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
function configureForFirebase(firebase, firestoreFactory) {
    firebase.INTERNAL.registerComponent(new Component('firestore', container => {
        const app = container.getProvider('app').getImmediate();
        return firestoreFactory(app, container.getProvider('auth-internal'));
    }, "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, firestoreNamespace)));
}

/**
 * @license
 * Copyright 2020 Google LLC
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
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function registerFirestore(instance) {
    configureForFirebase(instance, (app, auth) => new $a(app, new mu(app, auth), new ka()));
    instance.registerVersion(name, version);
}
registerFirestore(firebase);

export { registerFirestore };
//# sourceMappingURL=index.js.map
