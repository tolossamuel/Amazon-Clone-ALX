import e from "@firebase/app";

import "@firebase/util";

import "@firebase/logger";

import "@firebase/webchannel-wrapper";

import "tslib";

import { $ as r, m as t, O as a, v as s, k as o, x as i, B as n, q as p, Q as m, G as c, H as f, z as u, Y as l, X as b, t as g, e as h, L as v, _ as d } from "./prebuilt-ac190846-5fb4dac2.js";

import { Component as w } from "@firebase/component";

var I = {
    Firestore: r,
    GeoPoint: s,
    Timestamp: o,
    Blob: i,
    Transaction: n,
    WriteBatch: p,
    DocumentReference: m,
    DocumentSnapshot: c,
    Query: f,
    QueryDocumentSnapshot: u,
    QuerySnapshot: l,
    CollectionReference: b,
    FieldPath: g,
    FieldValue: h,
    setLogLevel: v,
    CACHE_SIZE_UNLIMITED: d
};

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
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function L(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new w("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, I)));
    }(e, (function(e, s) {
        return new r(e, new t(e, s), new a);
    })), e.registerVersion("@firebase/firestore", "2.2.4");
}

L(e);

export { L as registerFirestore };
//# sourceMappingURL=index.js.map
