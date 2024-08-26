import { _getProvider as t, getApp as n, _removeServiceInstance as e, _registerComponent as r, registerVersion as s } from "@firebase/app";

import { Component as i } from "@firebase/component";

import { Logger as o, LogLevel as u } from "@firebase/logger";

import { base64 as c, getModularInstance as a } from "@firebase/util";

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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
class h {
    constructor(t) {
        this.uid = t;
    }
    isAuthenticated() {
        return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(t) {
        return t.uid === this.uid;
    }
}

/** A user with a null UID. */ h.UNAUTHENTICATED = new h(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
h.GOOGLE_CREDENTIALS = new h("google-credentials-uid"), h.FIRST_PARTY = new h("first-party-uid");

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
const l = new o("@firebase/firestore");

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function f(t) {
    l.setLogLevel(t);
}

function d(t, ...n) {
    if (l.logLevel <= u.DEBUG) {
        const e = n.map(p);
        l.debug(`Firestore (8.4.0): ${t}`, ...e);
    }
}

function w(t, ...n) {
    if (l.logLevel <= u.ERROR) {
        const e = n.map(p);
        l.error(`Firestore (8.4.0): ${t}`, ...e);
    }
}

function m(t, ...n) {
    if (l.logLevel <= u.WARN) {
        const e = n.map(p);
        l.warn(`Firestore (8.4.0): ${t}`, ...e);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function p(t) {
    if ("string" == typeof t) return t;
    try {
        return n = t, JSON.stringify(n);
    } catch (n) {
        // Converting to JSON failed, just log the object directly
        return t;
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
    /** Formats an object as a JSON string, suitable for logging. */
    var n;
}

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
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function y(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const n = "FIRESTORE (8.4.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw w(n), new Error(n);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function _(t, n) {
    t || y();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function g(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
n) {
    return t;
}

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
 */ const v = "ok", b = "cancelled", E = "unknown", I = "invalid-argument", T = "deadline-exceeded", A = "not-found", P = "already-exists", R = "permission-denied", V = "unauthenticated", N = "resource-exhausted", D = "failed-precondition", $ = "aborted", F = "out-of-range", S = "unimplemented", x = "internal", q = "unavailable", O = "data-loss";

/** An error returned by a Firestore operation. */ class C extends Error {
    /** @hideconstructor */
    constructor(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    n) {
        super(n), this.code = t, this.message = n, 
        /** The custom name for all FirestoreErrors. */
        this.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
}

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
 */ class L {
    constructor(t, n) {
        this.user = n, this.type = "OAuth", this.authHeaders = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.authHeaders.Authorization = `Bearer ${t}`;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class U {
    constructor() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.changeListener = null;
    }
    getToken() {
        return Promise.resolve(null);
    }
    invalidateToken() {}
    setChangeListener(t) {
        this.changeListener = t, 
        // Fire with initial user.
        t(h.UNAUTHENTICATED);
    }
    removeChangeListener() {
        this.changeListener = null;
    }
}

class M {
    constructor(t) {
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.t = null, 
        /** Tracks the current User. */
        this.currentUser = h.UNAUTHENTICATED, this.receivedInitialUser = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.i = 0, 
        /** The listener registered with setChangeListener(). */
        this.changeListener = null, this.forceRefresh = !1, this.t = () => {
            this.i++, this.currentUser = this.o(), this.receivedInitialUser = !0, this.changeListener && this.changeListener(this.currentUser);
        }, this.i = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.t) : (
        // if auth is not available, invoke tokenListener once with null token
        this.t(null), t.get().then((t => {
            this.auth = t, this.t && 
            // tokenListener can be removed by removeChangeListener()
            this.auth.addAuthTokenListener(this.t);
        }), (() => {})));
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.i, n = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((n => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.i !== t ? (d("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : n ? (_("string" == typeof n.accessToken), new L(n.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
    }
    invalidateToken() {
        this.forceRefresh = !0;
    }
    setChangeListener(t) {
        this.changeListener = t, 
        // Fire the initial event
        this.receivedInitialUser && t(this.currentUser);
    }
    removeChangeListener() {
        this.auth && this.auth.removeAuthTokenListener(this.t), this.t = null, this.changeListener = null;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    o() {
        const t = this.auth && this.auth.getUid();
        return _(null === t || "string" == typeof t), new h(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class j {
    constructor(t, n, e) {
        this.u = t, this.h = n, this.l = e, this.type = "FirstParty", this.user = h.FIRST_PARTY;
    }
    get authHeaders() {
        const t = {
            "X-Goog-AuthUser": this.h
        }, n = this.u.auth.getAuthHeaderValueForFirstParty([]);
        // Use array notation to prevent minification
                return n && (t.Authorization = n), this.l && (t["X-Goog-Iam-Authorization-Token"] = this.l), 
        t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class k {
    constructor(t, n, e) {
        this.u = t, this.h = n, this.l = e;
    }
    getToken() {
        return Promise.resolve(new j(this.u, this.h, this.l));
    }
    setChangeListener(t) {
        // Fire with initial uid.
        t(h.FIRST_PARTY);
    }
    removeChangeListener() {}
    invalidateToken() {}
}

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */
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
class B {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
    constructor(t, n, e, r, s, i, o) {
        this.databaseId = t, this.appId = n, this.persistenceKey = e, this.host = r, this.ssl = s, 
        this.forceLongPolling = i, this.autoDetectLongPolling = o;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class Q {
    constructor(t, n) {
        this.projectId = t, this.database = n || "(default)";
    }
    get isDefaultDatabase() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof Q && t.projectId === this.projectId && t.database === this.database;
    }
}

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
 * Path represents an ordered sequence of string segments.
 */
class z {
    constructor(t, n, e) {
        void 0 === n ? n = 0 : n > t.length && y(), void 0 === e ? e = t.length - n : e > t.length - n && y(), 
        this.segments = t, this.offset = n, this.len = e;
    }
    get length() {
        return this.len;
    }
    isEqual(t) {
        return 0 === z.comparator(this, t);
    }
    child(t) {
        const n = this.segments.slice(this.offset, this.limit());
        return t instanceof z ? t.forEach((t => {
            n.push(t);
        })) : n.push(t), this.construct(n);
    }
    /** The index of one past the last segment of the path. */    limit() {
        return this.offset + this.length;
    }
    popFirst(t) {
        return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
        return this.segments[this.offset];
    }
    lastSegment() {
        return this.get(this.length - 1);
    }
    get(t) {
        return this.segments[this.offset + t];
    }
    isEmpty() {
        return 0 === this.length;
    }
    isPrefixOf(t) {
        if (t.length < this.length) return !1;
        for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let n = 0; n < this.length; n++) if (this.get(n) !== t.get(n)) return !1;
        return !0;
    }
    forEach(t) {
        for (let n = this.offset, e = this.limit(); n < e; n++) t(this.segments[n]);
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, n) {
        const e = Math.min(t.length, n.length);
        for (let r = 0; r < e; r++) {
            const e = t.get(r), s = n.get(r);
            if (e < s) return -1;
            if (e > s) return 1;
        }
        return t.length < n.length ? -1 : t.length > n.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class W extends z {
    construct(t, n, e) {
        return new W(t, n, e);
    }
    canonicalString() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.toArray().join("/");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */    static fromString(...t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        const n = [];
        for (const e of t) {
            if (e.indexOf("//") >= 0) throw new C(I, `Invalid segment (${e}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        n.push(...e.split("/").filter((t => t.length > 0)));
        }
        return new W(n);
    }
    static emptyPath() {
        return new W([]);
    }
}

const G = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class H extends z {
    construct(t, n, e) {
        return new H(t, n, e);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static isValidIdentifier(t) {
        return G.test(t);
    }
    canonicalString() {
        return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
        H.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
    }
    toString() {
        return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */    isKeyField() {
        return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */    static keyField() {
        return new H([ "__name__" ]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */    static fromServerFormat(t) {
        const n = [];
        let e = "", r = 0;
        const s = () => {
            if (0 === e.length) throw new C(I, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            n.push(e), e = "";
        };
        let i = !1;
        for (;r < t.length; ) {
            const n = t[r];
            if ("\\" === n) {
                if (r + 1 === t.length) throw new C(I, "Path has trailing escape character: " + t);
                const n = t[r + 1];
                if ("\\" !== n && "." !== n && "`" !== n) throw new C(I, "Path has invalid escape sequence: " + t);
                e += n, r += 2;
            } else "`" === n ? (i = !i, r++) : "." !== n || i ? (e += n, r++) : (s(), r++);
        }
        if (s(), i) throw new C(I, "Unterminated ` in path: " + t);
        return new H(n);
    }
    static emptyPath() {
        return new H([]);
    }
}

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
 */ class Y {
    constructor(t) {
        this.path = t;
    }
    static fromPath(t) {
        return new Y(W.fromString(t));
    }
    static fromName(t) {
        return new Y(W.fromString(t).popFirst(5));
    }
    /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === W.comparator(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static comparator(t, n) {
        return W.comparator(t.path, n.path);
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */    static fromSegments(t) {
        return new Y(new W(t.slice()));
    }
}

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
 */ function K(t, n, e) {
    if (!e) throw new C(I, `Function ${t}() cannot be called with an empty ${n}.`);
}

/**
 * Validates that two boolean options are not set at the same time.
 */
/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */
function J(t) {
    if (!Y.isDocumentKey(t)) throw new C(I, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function Z(t) {
    if (Y.isDocumentKey(t)) throw new C(I, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function X(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const n = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const n = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (n && n.length > 1) return n[1];
                }
                return null;
            }
            /**
 * Casts `obj` to `T`, optionally unwrapping Compat types to expose the
 * underlying instance. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */ (t);
            return n ? `a custom ${n} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : y();
}

function tt(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
n) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof n)) {
        if (n.name === t.constructor.name) throw new C(I, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const e = X(t);
            throw new C(I, `Expected type '${n.name}', but it was: ${e}`);
        }
    }
    return t;
}

function nt(t, n) {
    if (n <= 0) throw new C(I, `Function ${t}() requires a positive number, but it was: ${n}.`);
}

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
 * Returns whether a variable is either undefined or null.
 */ function et(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function rt(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */
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
const st = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
};

/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */
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
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */
var it, ot;

/**
 * Converts an HTTP Status Code to the equivalent error code.
 *
 * @param status - An HTTP Status Code, like 200, 404, 503, etc.
 * @returns The equivalent Code. Unknown status codes are mapped to
 *     Code.UNKNOWN.
 */
function ut(t) {
    if (void 0 === t) return w("RPC_ERROR", "HTTP error has no status"), E;
    // The canonical error codes for Google APIs [1] specify mapping onto HTTP
    // status codes but the mapping is not bijective. In each case of ambiguity
    // this function chooses a primary error.
    
    // [1]
    // https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto
        switch (t) {
      case 200:
        // OK
        return v;

      case 400:
        // Bad Request
        return D;

        // Other possibilities based on the forward mapping
        // return Code.INVALID_ARGUMENT;
        // return Code.OUT_OF_RANGE;
              case 401:
        // Unauthorized
        return V;

      case 403:
        // Forbidden
        return R;

      case 404:
        // Not Found
        return A;

      case 409:
        // Conflict
        return $;

        // Other possibilities:
        // return Code.ALREADY_EXISTS;
              case 416:
        // Range Not Satisfiable
        return F;

      case 429:
        // Too Many Requests
        return N;

      case 499:
        // Client Closed Request
        return b;

      case 500:
        // Internal Server Error
        return E;

        // Other possibilities:
        // return Code.INTERNAL;
        // return Code.DATA_LOSS;
              case 501:
        // Unimplemented
        return S;

      case 503:
        // Service Unavailable
        return q;

      case 504:
        // Gateway Timeout
        return T;

      default:
        return t >= 200 && t < 300 ? v : t >= 400 && t < 500 ? D : t >= 500 && t < 600 ? x : E;
    }
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
 * A Rest-based connection that relies on the native HTTP stack
 * (e.g. `fetch` or a polyfill).
 */ (ot = it || (it = {}))[ot.OK = 0] = "OK", ot[ot.CANCELLED = 1] = "CANCELLED", 
ot[ot.UNKNOWN = 2] = "UNKNOWN", ot[ot.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
ot[ot.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ot[ot.NOT_FOUND = 5] = "NOT_FOUND", 
ot[ot.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ot[ot.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
ot[ot.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ot[ot.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
ot[ot.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ot[ot.ABORTED = 10] = "ABORTED", 
ot[ot.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ot[ot.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
ot[ot.INTERNAL = 13] = "INTERNAL", ot[ot.UNAVAILABLE = 14] = "UNAVAILABLE", ot[ot.DATA_LOSS = 15] = "DATA_LOSS";

class ct extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        const n = t.ssl ? "https" : "http";
        this.m = n + "://" + t.host, this.p = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    g(t, n, e, r) {
        const s = this.v(t, n);
        d("RestConnection", "Sending: ", s, e);
        const i = {};
        return this.I(i, r), this.T(t, s, i, e).then((t => (d("RestConnection", "Received: ", t), 
        t)), (n => {
            throw m("RestConnection", `${t} failed with error: `, n, "url: ", s, "request:", e), 
            n;
        }));
    }
    A(t, n, e, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.g(t, n, e, r);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    I(t, n) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.4.0", t["X-Firebase-GMPID"] = this.databaseInfo.appId, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", n) for (const e in n.authHeaders) n.authHeaders.hasOwnProperty(e) && (t[e] = n.authHeaders[e]);
    }
    v(t, n) {
        const e = st[t];
        return `${this.m}/v1/${n}:${e}`;
    }
} {
    /**
     * @param databaseInfo - The connection info.
     * @param fetchImpl - `fetch` or a Polyfill that implements the fetch API.
     */
    constructor(t, n) {
        super(t), this.P = n;
    }
    R(t, n) {
        throw new Error("Not supported by FetchConnection");
    }
    async T(t, n, e, r) {
        const s = JSON.stringify(r);
        let i;
        try {
            i = await this.P(n, {
                method: "POST",
                headers: e,
                body: s
            });
        } catch (t) {
            throw new C(ut(t.status), "Request failed with error: " + t.statusText);
        }
        if (!i.ok) throw new C(ut(i.status), "Request failed with error: " + i.statusText);
        return i.json();
    }
}

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
 */ class at {
    constructor() {
        this.promise = new Promise(((t, n) => {
            this.resolve = t, this.reject = n;
        }));
    }
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
/** Initializes the HTTP connection for the REST API. */
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
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */
function ht(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const n = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), e = new Uint8Array(t);
    if (n && "function" == typeof n.getRandomValues) n.getRandomValues(e); else 
    // Falls back to Math.random
    for (let n = 0; n < t; n++) e[n] = Math.floor(256 * Math.random());
    return e;
}

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
 */ class lt {
    static V() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let e = "";
        for (;e.length < 20; ) {
            const r = ht(40);
            for (let s = 0; s < r.length; ++s) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            e.length < 20 && r[s] < n && (e += t.charAt(r[s] % t.length));
        }
        return e;
    }
}

function ft(t, n) {
    return t < n ? -1 : t > n ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function dt(t, n, e) {
    return t.length === n.length && t.every(((t, r) => e(t, n[r])));
}

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
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
class wt {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(
    /**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */
    t, 
    /**
     * The fractions of a second at nanosecond resolution.*
     */
    n) {
        if (this.seconds = t, this.nanoseconds = n, n < 0) throw new C(I, "Timestamp nanoseconds out of range: " + n);
        if (n >= 1e9) throw new C(I, "Timestamp nanoseconds out of range: " + n);
        if (t < -62135596800) throw new C(I, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new C(I, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return wt.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return wt.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const n = Math.floor(t / 1e3), e = Math.floor(1e6 * (t - 1e3 * n));
        return new wt(n, e);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */    toDate() {
        return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(t) {
        return this.seconds === t.seconds ? ft(this.nanoseconds, t.nanoseconds) : ft(this.seconds, t.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this Timestamp. */    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /** Returns a JSON-serializable representation of this Timestamp. */    toJSON() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }
    /**
     * Converts this object to a primitive string, which allows Timestamp objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */    valueOf() {
        // This method returns a string of the form <seconds>.<nanoseconds> where
        // <seconds> is translated to have a non-negative value and both <seconds>
        // and <nanoseconds> are left-padded with zeroes to be a consistent length.
        // Strings with this format then have a lexiographical ordering that matches
        // the expected ordering. The <seconds> translation is done to avoid having
        // a leading negative sign (i.e. a leading '-' character) in its string
        // representation, which would affect its lexiographical ordering.
        const t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid
        // 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
}

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
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class mt {
    constructor(t) {
        this.timestamp = t;
    }
    static fromTimestamp(t) {
        return new mt(t);
    }
    static min() {
        return new mt(new wt(0, 0));
    }
    compareTo(t) {
        return this.timestamp._compareTo(t.timestamp);
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */    toMicroseconds() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
        return this.timestamp;
    }
}

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
 */ function pt(t) {
    let n = 0;
    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && n++;
    return n;
}

function yt(t, n) {
    for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && n(e, t[e]);
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
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */
class _t {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(H.comparator);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    covers(t) {
        for (const n of this.fields) if (n.isPrefixOf(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return dt(this.fields, t.fields, ((t, n) => t.isEqual(n)));
    }
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
// WebSafe uses a different URL-encoding safe alphabet that doesn't match
// the encoding used on the backend.
/** Converts a Base64 encoded string to a binary string. */
function gt(t) {
    return String.fromCharCode.apply(null, 
    // We use `decodeStringToByteArray()` instead of `decodeString()` since
    // `decodeString()` returns Unicode strings, which doesn't match the values
    // returned by `atob()`'s Latin1 representation.
    c.decodeStringToByteArray(t, false));
}

/** Converts a binary string to a Base64 encoded string. */
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
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */
class vt {
    constructor(t) {
        this.binaryString = t;
    }
    static fromBase64String(t) {
        const n = gt(t);
        return new vt(n);
    }
    static fromUint8Array(t) {
        const n = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let n = "";
            for (let e = 0; e < t.length; ++e) n += String.fromCharCode(t[e]);
            return n;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new vt(n);
    }
    toBase64() {
        return function(t) {
            const n = [];
            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
            return c.encodeByteArray(n, !1);
        }(this.binaryString);
    }
    toUint8Array() {
        return function(t) {
            const n = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
            return n;
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
        // A RegExp matching ISO 8601 UTC timestamps with optional fraction.
        (this.binaryString);
    }
    approximateByteSize() {
        return 2 * this.binaryString.length;
    }
    compareTo(t) {
        return ft(this.binaryString, t.binaryString);
    }
    isEqual(t) {
        return this.binaryString === t.binaryString;
    }
}

vt.EMPTY_BYTE_STRING = new vt("");

const bt = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function Et(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (_(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let n = 0;
        const e = bt.exec(t);
        if (_(!!e), e[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = e[1];
            t = (t + "000000000").substr(0, 9), n = Number(t);
        }
        // Parse the date to get the seconds.
                const r = new Date(t);
        return {
            seconds: Math.floor(r.getTime() / 1e3),
            nanos: n
        };
    }
    return {
        seconds: It(t.seconds),
        nanos: It(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function It(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function Tt(t) {
    return "string" == typeof t ? vt.fromBase64String(t) : vt.fromUint8Array(t);
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
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function At(t) {
    var n, e;
    return "server_timestamp" === (null === (e = ((null === (n = null == t ? void 0 : t.mapValue) || void 0 === n ? void 0 : n.fields) || {}).__type__) || void 0 === e ? void 0 : e.stringValue);
}

/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function Pt(t) {
    const n = t.mapValue.fields.__previous_value__;
    return At(n) ? Pt(n) : n;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function Rt(t) {
    const n = Et(t.mapValue.fields.__local_write_time__.timestampValue);
    return new wt(n.seconds, n.nanos);
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
/** Extracts the backend's type order for the provided value. */ function Vt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? At(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : y();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Nt(t, n) {
    const e = Vt(t);
    if (e !== Vt(n)) return !1;
    switch (e) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === n.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Rt(t).isEqual(Rt(n));

      case 3 /* TimestampValue */ :
        return function(t, n) {
            if ("string" == typeof t.timestampValue && "string" == typeof n.timestampValue && t.timestampValue.length === n.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === n.timestampValue;
            const e = Et(t.timestampValue), r = Et(n.timestampValue);
            return e.seconds === r.seconds && e.nanos === r.nanos;
        }(t, n);

      case 5 /* StringValue */ :
        return t.stringValue === n.stringValue;

      case 6 /* BlobValue */ :
        return function(t, n) {
            return Tt(t.bytesValue).isEqual(Tt(n.bytesValue));
        }(t, n);

      case 7 /* RefValue */ :
        return t.referenceValue === n.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, n) {
            return It(t.geoPointValue.latitude) === It(n.geoPointValue.latitude) && It(t.geoPointValue.longitude) === It(n.geoPointValue.longitude);
        }(t, n);

      case 2 /* NumberValue */ :
        return function(t, n) {
            if ("integerValue" in t && "integerValue" in n) return It(t.integerValue) === It(n.integerValue);
            if ("doubleValue" in t && "doubleValue" in n) {
                const e = It(t.doubleValue), r = It(n.doubleValue);
                return e === r ? rt(e) === rt(r) : isNaN(e) && isNaN(r);
            }
            return !1;
        }(t, n);

      case 9 /* ArrayValue */ :
        return dt(t.arrayValue.values || [], n.arrayValue.values || [], Nt);

      case 10 /* ObjectValue */ :
        return function(t, n) {
            const e = t.mapValue.fields || {}, r = n.mapValue.fields || {};
            if (pt(e) !== pt(r)) return !1;
            for (const t in e) if (e.hasOwnProperty(t) && (void 0 === r[t] || !Nt(e[t], r[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, n);

      default:
        return y();
    }
}

function Dt(t, n) {
    return void 0 !== (t.values || []).find((t => Nt(t, n)));
}

function $t(t, n) {
    const e = Vt(t), r = Vt(n);
    if (e !== r) return ft(e, r);
    switch (e) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return ft(t.booleanValue, n.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, n) {
            const e = It(t.integerValue || t.doubleValue), r = It(n.integerValue || n.doubleValue);
            return e < r ? -1 : e > r ? 1 : e === r ? 0 : 
            // one or both are NaN.
            isNaN(e) ? isNaN(r) ? 0 : -1 : 1;
        }(t, n);

      case 3 /* TimestampValue */ :
        return Ft(t.timestampValue, n.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Ft(Rt(t), Rt(n));

      case 5 /* StringValue */ :
        return ft(t.stringValue, n.stringValue);

      case 6 /* BlobValue */ :
        return function(t, n) {
            const e = Tt(t), r = Tt(n);
            return e.compareTo(r);
        }(t.bytesValue, n.bytesValue);

      case 7 /* RefValue */ :
        return function(t, n) {
            const e = t.split("/"), r = n.split("/");
            for (let t = 0; t < e.length && t < r.length; t++) {
                const n = ft(e[t], r[t]);
                if (0 !== n) return n;
            }
            return ft(e.length, r.length);
        }(t.referenceValue, n.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, n) {
            const e = ft(It(t.latitude), It(n.latitude));
            if (0 !== e) return e;
            return ft(It(t.longitude), It(n.longitude));
        }(t.geoPointValue, n.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, n) {
            const e = t.values || [], r = n.values || [];
            for (let t = 0; t < e.length && t < r.length; ++t) {
                const n = $t(e[t], r[t]);
                if (n) return n;
            }
            return ft(e.length, r.length);
        }(t.arrayValue, n.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, n) {
            const e = t.fields || {}, r = Object.keys(e), s = n.fields || {}, i = Object.keys(s);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            r.sort(), i.sort();
            for (let t = 0; t < r.length && t < i.length; ++t) {
                const n = ft(r[t], i[t]);
                if (0 !== n) return n;
                const o = $t(e[r[t]], s[i[t]]);
                if (0 !== o) return o;
            }
            return ft(r.length, i.length);
        }
        /** Returns a reference value for the provided database and key. */ (t.mapValue, n.mapValue);

      default:
        throw y();
    }
}

function Ft(t, n) {
    if ("string" == typeof t && "string" == typeof n && t.length === n.length) return ft(t, n);
    const e = Et(t), r = Et(n), s = ft(e.seconds, r.seconds);
    return 0 !== s ? s : ft(e.nanos, r.nanos);
}

function St(t, n) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${n.path.canonicalString()}`
    };
}

/** Returns true if `value` is an ArrayValue. */ function xt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function qt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function Ot(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Ct(t) {
    return !!t && "mapValue" in t;
}

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
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class Lt {
    constructor(t) {
        /**
         * A nested map that contains the accumulated changes that haven't yet been
         * applied to `partialValue`. Values can either be `Value` protos, Map<String,
         * Object> values (to represent additional nesting) or `null` (to represent
         * field deletes).
         */
        this.overlayMap = new Map, this.partialValue = t;
    }
    static empty() {
        return new Lt({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */    field(t) {
        return Lt.extractNestedValue(this.buildProto(), t);
    }
    /** Returns the full protobuf representation. */    toProto() {
        return this.field(H.emptyPath());
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */    set(t, n) {
        this.setOverlay(t, n);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */    setAll(t) {
        t.forEach(((t, n) => {
            t ? this.set(n, t) : this.delete(n);
        }));
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */    delete(t) {
        this.setOverlay(t, null);
    }
    isEqual(t) {
        return Nt(this.buildProto(), t.buildProto());
    }
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */    setOverlay(t, n) {
        let e = this.overlayMap;
        for (let n = 0; n < t.length - 1; ++n) {
            const r = t.get(n);
            let s = e.get(r);
            s instanceof Map ? 
            // Re-use a previously created map
            e = s : s && 10 /* ObjectValue */ === Vt(s) ? (
            // Convert the existing Protobuf MapValue into a map
            s = new Map(Object.entries(s.mapValue.fields || {})), e.set(r, s), e = s) : (
            // Create an empty map to represent the current nesting level
            s = new Map, e.set(r, s), e = s);
        }
        e.set(t.lastSegment(), n);
    }
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */    applyOverlay(t, n) {
        let e = !1;
        const r = Lt.extractNestedValue(this.partialValue, t), s = Ct(r) ? // If there is already data at the current path, base our
        Object.assign({}, r.mapValue.fields) : {};
        return n.forEach(((n, r) => {
            if (n instanceof Map) {
                const i = this.applyOverlay(t.child(r), n);
                null != i && (s[r] = i, e = !0);
            } else null !== n ? (s[r] = n, e = !0) : s.hasOwnProperty(r) && (delete s[r], e = !0);
        })), e ? {
            mapValue: {
                fields: s
            }
        } : null;
    }
    /**
     * Builds the Protobuf that backs this ObjectValue.
     *
     * This method applies any outstanding modifications and memoizes the result.
     * Further invocations are based on this memoized result.
     */    buildProto() {
        const t = this.applyOverlay(H.emptyPath(), this.overlayMap);
        return null != t && (this.partialValue = t, this.overlayMap.clear()), this.partialValue;
    }
    static extractNestedValue(t, n) {
        if (n.isEmpty()) return t;
        {
            let e = t;
            for (let t = 0; t < n.length - 1; ++t) {
                if (!e.mapValue.fields) return null;
                if (e = e.mapValue.fields[n.get(t)], !Ct(e)) return null;
            }
            return e = (e.mapValue.fields || {})[n.lastSegment()], e || null;
        }
    }
    clone() {
        return new Lt(this.buildProto());
    }
}

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
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class Ut {
    constructor(t, n, e, r, s) {
        this.key = t, this.documentType = n, this.version = e, this.data = r, this.documentState = s;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */    static newInvalidDocument(t) {
        return new Ut(t, 0 /* INVALID */ , mt.min(), Lt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */    static newFoundDocument(t, n, e) {
        return new Ut(t, 1 /* FOUND_DOCUMENT */ , n, e, 0 /* SYNCED */);
    }
    /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, n) {
        return new Ut(t, 2 /* NO_DOCUMENT */ , n, Lt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */    static newUnknownDocument(t, n) {
        return new Ut(t, 3 /* UNKNOWN_DOCUMENT */ , n, Lt.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */    convertToFoundDocument(t, n) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = n, 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */    convertToNoDocument(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = Lt.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */    convertToUnknownDocument(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = Lt.empty(), 
        this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasCommittedMutations() {
        return this.documentState = 2 /* HAS_COMMITTED_MUTATIONS */ , this;
    }
    setHasLocalMutations() {
        return this.documentState = 1 /* HAS_LOCAL_MUTATIONS */ , this;
    }
    get hasLocalMutations() {
        return 1 /* HAS_LOCAL_MUTATIONS */ === this.documentState;
    }
    get hasCommittedMutations() {
        return 2 /* HAS_COMMITTED_MUTATIONS */ === this.documentState;
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
        return 0 /* INVALID */ !== this.documentType;
    }
    isFoundDocument() {
        return 1 /* FOUND_DOCUMENT */ === this.documentType;
    }
    isNoDocument() {
        return 2 /* NO_DOCUMENT */ === this.documentType;
    }
    isUnknownDocument() {
        return 3 /* UNKNOWN_DOCUMENT */ === this.documentType;
    }
    isEqual(t) {
        return t instanceof Ut && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
    }
    clone() {
        return new Ut(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
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
// Visible for testing
class Mt {
    constructor(t, n = null, e = [], r = [], s = null, i = null, o = null) {
        this.path = t, this.collectionGroup = n, this.orderBy = e, this.filters = r, this.limit = s, 
        this.startAt = i, this.endAt = o, this.N = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function jt(t, n = null, e = [], r = [], s = null, i = null, o = null) {
    return new Mt(t, n, e, r, s, i, o);
}

class kt extends class {} {
    constructor(t, n, e) {
        super(), this.field = t, this.op = n, this.value = e;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, n, e) {
        return t.isKeyField() ? "in" /* IN */ === n || "not-in" /* NOT_IN */ === n ? this.D(t, n, e) : new Bt(t, n, e) : "array-contains" /* ARRAY_CONTAINS */ === n ? new Gt(t, e) : "in" /* IN */ === n ? new Ht(t, e) : "not-in" /* NOT_IN */ === n ? new Yt(t, e) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === n ? new Kt(t, e) : new kt(t, n, e);
    }
    static D(t, n, e) {
        return "in" /* IN */ === n ? new Qt(t, e) : new zt(t, e);
    }
    matches(t) {
        const n = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== n && this.$($t(n, this.value)) : null !== n && Vt(this.value) === Vt(n) && this.$($t(n, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    $(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return y();
        }
    }
    F() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

/** Filter that matches on key fields (i.e. '__name__'). */
class Bt extends kt {
    constructor(t, n, e) {
        super(t, n, e), this.key = Y.fromName(e.referenceValue);
    }
    matches(t) {
        const n = Y.comparator(t.key, this.key);
        return this.$(n);
    }
}

/** Filter that matches on key fields within an array. */ class Qt extends kt {
    constructor(t, n) {
        super(t, "in" /* IN */ , n), this.keys = Wt("in" /* IN */ , n);
    }
    matches(t) {
        return this.keys.some((n => n.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class zt extends kt {
    constructor(t, n) {
        super(t, "not-in" /* NOT_IN */ , n), this.keys = Wt("not-in" /* NOT_IN */ , n);
    }
    matches(t) {
        return !this.keys.some((n => n.isEqual(t.key)));
    }
}

function Wt(t, n) {
    var e;
    return ((null === (e = n.arrayValue) || void 0 === e ? void 0 : e.values) || []).map((t => Y.fromName(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class Gt extends kt {
    constructor(t, n) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , n);
    }
    matches(t) {
        const n = t.data.field(this.field);
        return xt(n) && Dt(n.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class Ht extends kt {
    constructor(t, n) {
        super(t, "in" /* IN */ , n);
    }
    matches(t) {
        const n = t.data.field(this.field);
        return null !== n && Dt(this.value.arrayValue, n);
    }
}

/** A Filter that implements the not-in operator. */ class Yt extends kt {
    constructor(t, n) {
        super(t, "not-in" /* NOT_IN */ , n);
    }
    matches(t) {
        if (Dt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const n = t.data.field(this.field);
        return null !== n && !Dt(this.value.arrayValue, n);
    }
}

/** A Filter that implements the array-contains-any operator. */ class Kt extends kt {
    constructor(t, n) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n);
    }
    matches(t) {
        const n = t.data.field(this.field);
        return !(!xt(n) || !n.arrayValue.values) && n.arrayValue.values.some((t => Dt(this.value.arrayValue, t)));
    }
}

/**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */ class Jt {
    constructor(t, n) {
        this.position = t, this.before = n;
    }
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class Zt {
    constructor(t, n = "asc" /* ASCENDING */) {
        this.field = t, this.dir = n;
    }
}

function Xt(t, n) {
    return t.dir === n.dir && t.field.isEqual(n.field);
}

function tn(t, n) {
    if (null === t) return null === n;
    if (null === n) return !1;
    if (t.before !== n.before || t.position.length !== n.position.length) return !1;
    for (let e = 0; e < t.position.length; e++) {
        if (!Nt(t.position[e], n.position[e])) return !1;
    }
    return !0;
}

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
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class nn {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, n = null, e = [], r = [], s = null, i = "F" /* First */ , o = null, u = null) {
        this.path = t, this.collectionGroup = n, this.explicitOrderBy = e, this.filters = r, 
        this.limit = s, this.limitType = i, this.startAt = o, this.endAt = u, this.S = null, 
        // The corresponding `Target` of this `Query` instance.
        this.q = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query for a query that matches all documents at `path` */ function en(t) {
    return !et(t.limit) && "L" /* Last */ === t.limitType;
}

function rn(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function sn(t) {
    for (const n of t.filters) if (n.F()) return n.field;
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */
function on(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function un(t) {
    const n = g(t);
    if (null === n.S) {
        n.S = [];
        const t = sn(n), e = rn(n);
        if (null !== t && null === e) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.isKeyField() || n.S.push(new Zt(t)), n.S.push(new Zt(H.keyField(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const e of n.explicitOrderBy) n.S.push(e), e.field.isKeyField() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = n.explicitOrderBy.length > 0 ? n.explicitOrderBy[n.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                n.S.push(new Zt(H.keyField(), t));
            }
        }
    }
    return n.S;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function cn(t) {
    const n = g(t);
    if (!n.q) if ("F" /* First */ === n.limitType) n.q = jt(n.path, n.collectionGroup, un(n), n.filters, n.limit, n.startAt, n.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const e of un(n)) {
            const n = "desc" /* DESCENDING */ === e.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new Zt(e.field, n));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const e = n.endAt ? new Jt(n.endAt.position, !n.endAt.before) : null, r = n.startAt ? new Jt(n.startAt.position, !n.startAt.before) : null;
        // Now return as a LimitType.First query.
        n.q = jt(n.path, n.collectionGroup, t, n.filters, n.limit, e, r);
    }
    return n.q;
}

function an(t, n) {
    return function(t, n) {
        if (t.limit !== n.limit) return !1;
        if (t.orderBy.length !== n.orderBy.length) return !1;
        for (let e = 0; e < t.orderBy.length; e++) if (!Xt(t.orderBy[e], n.orderBy[e])) return !1;
        if (t.filters.length !== n.filters.length) return !1;
        for (let s = 0; s < t.filters.length; s++) if (e = t.filters[s], r = n.filters[s], 
        e.op !== r.op || !e.field.isEqual(r.field) || !Nt(e.value, r.value)) return !1;
        var e, r;
        return t.collectionGroup === n.collectionGroup && !!t.path.isEqual(n.path) && !!tn(t.startAt, n.startAt) && tn(t.endAt, n.endAt);
    }(cn(t), cn(n)) && t.limitType === n.limitType;
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
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */
function hn(t, n) {
    return function(t) {
        return "number" == typeof t && Number.isInteger(t) && !rt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
    }(n) ? 
    /**
 * Returns an IntegerValue for `value`.
 */
    function(t) {
        return {
            integerValue: "" + t
        };
    }(n) : function(t, n) {
        if (t.O) {
            if (isNaN(n)) return {
                doubleValue: "NaN"
            };
            if (n === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (n === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: rt(n) ? "-0" : n
        };
    }(t, n);
}

/**
 * @license
 * Copyright 2018 Google LLC
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
/** Used to represent a field transform on a mutation. */ class ln {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = void 0;
    }
}

/** Transforms a value into a server-generated timestamp. */ class fn extends ln {}

/** Transforms an array value via a union operation. */ class dn extends ln {
    constructor(t) {
        super(), this.elements = t;
    }
}

/** Transforms an array value via a remove operation. */ class wn extends ln {
    constructor(t) {
        super(), this.elements = t;
    }
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class mn extends ln {
    constructor(t, n) {
        super(), this.C = t, this.L = n;
    }
}

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
/** A field path and the TransformOperation to perform upon it. */ class pn {
    constructor(t, n) {
        this.field = t, this.transform = n;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class yn {
    constructor(t, n) {
        this.updateTime = t, this.exists = n;
    }
    /** Creates a new empty Precondition. */    static none() {
        return new yn;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new yn(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new yn(t);
    }
    /** Returns whether this Precondition is empty. */    get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `applySetMutationToRemoteDocument()` for an
 * example).
 */ class _n {}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class gn extends _n {
    constructor(t, n, e, r = []) {
        super(), this.key = t, this.value = n, this.precondition = e, this.fieldTransforms = r, 
        this.type = 0 /* Set */;
    }
}

/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 *  * When a field is in both the mask and the values, the corresponding field
 *    is updated.
 *  * When a field is in neither the mask nor the values, the corresponding
 *    field is unmodified.
 *  * When a field is in the mask but not in the values, the corresponding field
 *    is deleted.
 *  * When a field is not in the mask but is in the values, the values map is
 *    ignored.
 */ class vn extends _n {
    constructor(t, n, e, r, s = []) {
        super(), this.key = t, this.data = n, this.fieldMask = e, this.precondition = r, 
        this.fieldTransforms = s, this.type = 1 /* Patch */;
    }
}

/** A mutation that deletes the document at the given key. */ class bn extends _n {
    constructor(t, n) {
        super(), this.key = t, this.precondition = n, this.type = 2 /* Delete */ , this.fieldTransforms = [];
    }
}

/**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ class En extends _n {
    constructor(t, n) {
        super(), this.key = t, this.precondition = n, this.type = 3 /* Verify */ , this.fieldTransforms = [];
    }
}

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
 */ const In = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), Tn = (() => {
    const t = {
        "<": "LESS_THAN",
        "<=": "LESS_THAN_OR_EQUAL",
        ">": "GREATER_THAN",
        ">=": "GREATER_THAN_OR_EQUAL",
        "==": "EQUAL",
        "!=": "NOT_EQUAL",
        "array-contains": "ARRAY_CONTAINS",
        in: "IN",
        "not-in": "NOT_IN",
        "array-contains-any": "ARRAY_CONTAINS_ANY"
    };
    return t;
})();

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
class An {
    constructor(t, n) {
        this.databaseId = t, this.O = n;
    }
}

/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function Pn(t, n) {
    if (t.O) {
        return `${new Date(1e3 * n.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + n.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + n.seconds,
        nanos: n.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function Rn(t, n) {
    return t.O ? n.toBase64() : n.toUint8Array();
}

function Vn(t, n) {
    return Pn(t, n.toTimestamp());
}

function Nn(t) {
    return _(!!t), mt.fromTimestamp(function(t) {
        const n = Et(t);
        return new wt(n.seconds, n.nanos);
    }(t));
}

function Dn(t, n) {
    return function(t) {
        return new W([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(n).canonicalString();
}

function $n(t, n) {
    return Dn(t.databaseId, n.path);
}

function Fn(t, n) {
    const e = function(t) {
        const n = W.fromString(t);
        return _(Qn(n)), n;
    }(n);
    if (e.get(1) !== t.databaseId.projectId) throw new C(I, "Tried to deserialize key from different project: " + e.get(1) + " vs " + t.databaseId.projectId);
    if (e.get(3) !== t.databaseId.database) throw new C(I, "Tried to deserialize key from different database: " + e.get(3) + " vs " + t.databaseId.database);
    return new Y((_((r = e).length > 4 && "documents" === r.get(4)), r.popFirst(5)));
    var r;
    /** Creates a Document proto from key and fields (but no create/update time) */}

function Sn(t, n) {
    return Dn(t.databaseId, n);
}

function xn(t) {
    return new W([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function qn(t, n, e) {
    return {
        name: $n(t, n),
        fields: e.toProto().mapValue.fields
    };
}

function On(t, n) {
    return "found" in n ? function(t, n) {
        _(!!n.found), n.found.name, n.found.updateTime;
        const e = Fn(t, n.found.name), r = Nn(n.found.updateTime), s = new Lt({
            mapValue: {
                fields: n.found.fields
            }
        });
        return Ut.newFoundDocument(e, r, s);
    }(t, n) : "missing" in n ? function(t, n) {
        _(!!n.missing), _(!!n.readTime);
        const e = Fn(t, n.missing), r = Nn(n.readTime);
        return Ut.newNoDocument(e, r);
    }(t, n) : y();
}

function Cn(t, n) {
    let e;
    if (n instanceof gn) e = {
        update: qn(t, n.key, n.value)
    }; else if (n instanceof bn) e = {
        delete: $n(t, n.key)
    }; else if (n instanceof vn) e = {
        update: qn(t, n.key, n.data),
        updateMask: Bn(n.fieldMask)
    }; else {
        if (!(n instanceof En)) return y();
        e = {
            verify: $n(t, n.key)
        };
    }
    return n.fieldTransforms.length > 0 && (e.updateTransforms = n.fieldTransforms.map((t => function(t, n) {
        const e = n.transform;
        if (e instanceof fn) return {
            fieldPath: n.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof dn) return {
            fieldPath: n.field.canonicalString(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof wn) return {
            fieldPath: n.field.canonicalString(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof mn) return {
            fieldPath: n.field.canonicalString(),
            increment: e.L
        };
        throw y();
    }(0, t)))), n.precondition.isNone || (e.currentDocument = function(t, n) {
        return void 0 !== n.updateTime ? {
            updateTime: Vn(t, n.updateTime)
        } : void 0 !== n.exists ? {
            exists: n.exists
        } : y();
    }(t, n.precondition)), e;
}

function Ln(t, n) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const e = {
        structuredQuery: {}
    }, r = n.path;
    null !== n.collectionGroup ? (e.parent = Sn(t, r), e.structuredQuery.from = [ {
        collectionId: n.collectionGroup,
        allDescendants: !0
    } ]) : (e.parent = Sn(t, r.popLast()), e.structuredQuery.from = [ {
        collectionId: r.lastSegment()
    } ]);
    const s = function(t) {
        if (0 === t.length) return;
        const n = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (Ot(t.value)) return {
                    unaryFilter: {
                        field: kn(t.field),
                        op: "IS_NAN"
                    }
                };
                if (qt(t.value)) return {
                    unaryFilter: {
                        field: kn(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (Ot(t.value)) return {
                    unaryFilter: {
                        field: kn(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (qt(t.value)) return {
                    unaryFilter: {
                        field: kn(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: kn(t.field),
                    op: jn(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === n.length) return n[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: n
            }
        };
    }(n.filters);
    s && (e.structuredQuery.where = s);
    const i = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: kn(t.field),
                direction: Mn(t.dir)
            };
        }(t)));
    }(n.orderBy);
    i && (e.structuredQuery.orderBy = i);
    const o = function(t, n) {
        return t.O || et(n) ? n : {
            value: n
        };
    }(t, n.limit);
    return null !== o && (e.structuredQuery.limit = o), n.startAt && (e.structuredQuery.startAt = Un(n.startAt)), 
    n.endAt && (e.structuredQuery.endAt = Un(n.endAt)), e;
}

function Un(t) {
    return {
        before: t.before,
        values: t.position
    };
}

// visible for testing
function Mn(t) {
    return In[t];
}

// visible for testing
function jn(t) {
    return Tn[t];
}

function kn(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function Bn(t) {
    const n = [];
    return t.fields.forEach((t => n.push(t.canonicalString()))), {
        fieldPaths: n
    };
}

function Qn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
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
 */ function zn(t) {
    return new An(t, /* useProto3Json= */ !0);
}

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
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
class Wn {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    n, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    e = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , s = 6e4) {
        this.U = t, this.timerId = n, this.M = e, this.j = r, this.k = s, this.B = 0, this.W = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.G = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.B = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    H() {
        this.B = this.k;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    Y(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const n = Math.floor(this.B + this.K()), e = Math.max(0, Date.now() - this.G), r = Math.max(0, n - e);
        // Guard against lastAttemptTime being in the future due to a clock change.
                r > 0 && d("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.B} ms, delay with jitter: ${n} ms, last attempt: ${e} ms ago)`), 
        this.W = this.U.enqueueAfterDelay(this.timerId, r, (() => (this.G = Date.now(), 
        t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.B *= this.j, this.B < this.M && (this.B = this.M), this.B > this.k && (this.B = this.k);
    }
    J() {
        null !== this.W && (this.W.skipDelay(), this.W = null);
    }
    cancel() {
        null !== this.W && (this.W.cancel(), this.W = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    K() {
        return (Math.random() - .5) * this.B;
    }
}

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
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */
/**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */
class Gn extends class {} {
    constructor(t, n, e) {
        super(), this.credentials = t, this.Z = n, this.C = e, this.X = !1;
    }
    tt() {
        if (this.X) throw new C(D, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    g(t, n, e) {
        return this.tt(), this.credentials.getToken().then((r => this.Z.g(t, n, e, r))).catch((t => {
            throw t.code === V && this.credentials.invalidateToken(), t;
        }));
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    A(t, n, e) {
        return this.tt(), this.credentials.getToken().then((r => this.Z.A(t, n, e, r))).catch((t => {
            throw t.code === V && this.credentials.invalidateToken(), t;
        }));
    }
    terminate() {
        this.X = !1;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
async function Hn(t, n) {
    const e = g(t), r = xn(e.C) + "/documents", s = {
        writes: n.map((t => Cn(e.C, t)))
    };
    await e.g("Commit", r, s);
}

async function Yn(t, n) {
    const e = g(t), r = xn(e.C) + "/documents", s = {
        documents: n.map((t => $n(e.C, t)))
    }, i = await e.A("BatchGetDocuments", r, s), o = new Map;
    i.forEach((t => {
        const n = On(e.C, t);
        o.set(n.key.toString(), n);
    }));
    const u = [];
    return n.forEach((t => {
        const n = o.get(t.toString());
        _(!!n), u.push(n);
    })), u;
}

async function Kn(t, n) {
    const e = g(t), r = Ln(e.C, cn(n));
    return (await e.A("RunQuery", r.parent, {
        structuredQuery: r.structuredQuery
    })).filter((t => !!t.document)).map((t => function(t, n, e) {
        const r = Fn(t, n.name), s = Nn(n.updateTime), i = new Lt({
            mapValue: {
                fields: n.fields
            }
        }), o = Ut.newFoundDocument(r, s, i);
        return e && o.setHasCommittedMutations(), e ? o.setHasCommittedMutations() : o;
    }(e.C, t.document, void 0)));
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
 */ const Jn = new Map;

/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */
/**
 * Returns an initialized and started Datastore for the given Firestore
 * instance. Callers must invoke removeComponents() when the Firestore
 * instance is terminated.
 */
function Zn(t) {
    if (t._terminated) throw new C(D, "The client has already been terminated.");
    if (!Jn.has(t)) {
        d("ComponentProvider", "Initializing Datastore");
        const i = function(t) {
            return new ct(t, fetch.bind(null));
        }((n = t._databaseId, e = t.app.options.appId || "", r = t._persistenceKey, s = t._freezeSettings(), 
        new B(n, e, r, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling))), o = zn(t._databaseId), u = function(t, n, e) {
            return new Gn(t, n, e);
        }(t._credentials, i, o);
        Jn.set(t, u);
    }
    var n, e, r, s;
    /**
 * @license
 * Copyright 2018 Google LLC
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
 */    return Jn.get(t);
}

/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class Xn {
    constructor(t) {
        var n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new C(I, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (n = t.ssl) || void 0 === n || n;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new C(I, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        function(t, n, e, r) {
            if (!0 === n && !0 === r) throw new C(I, `${t} and ${e} cannot be used together.`);
        }("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }
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
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class te {
    /** @hideconstructor */
    constructor(t, n) {
        this._persistenceKey = "(lite)", this._settings = new Xn({}), this._settingsFrozen = !1, 
        t instanceof Q ? (this._databaseId = t, this._credentials = new U) : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new C(I, '"projectId" not provided in firebase.initializeApp.');
            return new Q(t.options.projectId);
        }
        /**
 * Initializes a new instance of Cloud Firestore with the provided settings.
 * Can only be called before any other functions, including
 * {@link getFirestore}. If the custom settings are empty, this function is
 * equivalent to calling {@link getFirestore}.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} with which the `Firestore` instance will
 * be associated.
 * @param settings - A settings object to configure the `Firestore` instance.
 * @returns A newly initialized Firestore instance.
 */ (t), this._credentials = new M(n));
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this._app) throw new C(D, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
    }
    get _initialized() {
        return this._settingsFrozen;
    }
    get _terminated() {
        return void 0 !== this._terminateTask;
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new C(D, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new Xn(t), void 0 !== t.credentials && (this._credentials = function(t) {
            if (!t) return new U;
            switch (t.type) {
              case "gapi":
                const n = t.client;
                // Make sure this really is a Gapi client.
                                return _(!("object" != typeof n || null === n || !n.auth || !n.auth.getAuthHeaderValueForFirstParty)), 
                new k(n, t.sessionIndex || "0", t.iamToken || null);

              case "provider":
                return t.client;

              default:
                throw new C(I, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }
    _getSettings() {
        return this._settings;
    }
    _freezeSettings() {
        return this._settingsFrozen = !0, this._settings;
    }
    _delete() {
        return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    /** Returns a JSON-serializable representation of this Firestore instance. */    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */    _terminate() {
        return function(t) {
            const n = Jn.get(t);
            n && (d("ComponentProvider", "Removing Datastore"), Jn.delete(t), n.terminate());
        }(this), Promise.resolve();
    }
}

function ne(n, e) {
    const r = t(n, "firestore/lite");
    if (r.isInitialized()) throw new C(D, "Firestore can only be initialized once per app.");
    return r.initialize({
        options: e
    });
}

/**
 * Returns the existing instance of Firestore that is associated with the
 * provided {@link @firebase/app#FirebaseApp}. If no instance exists, initializes a new
 * instance with default settings.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Firestore
 * instance is associated with.
 * @returns The `Firestore` instance of the provided app.
 */ function ee(e = n()) {
    return t(e, "firestore/lite").getImmediate();
}

/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The Firestore instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 */ function re(t, n, e) {
    const r = (t = tt(t, te))._getSettings();
    "firestore.googleapis.com" !== r.host && r.host !== n && m("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
    t._setSettings(Object.assign(Object.assign({}, r), {
        host: `${n}:${e}`,
        ssl: !1
    }));
}

/**
 * Terminates the provided Firestore instance.
 *
 * After calling `terminate()` only the `clearIndexedDbPersistence()` functions
 * may be used. Any other function will throw a `FirestoreError`. Termination
 * does not cancel any pending writes, and any promises that are awaiting a
 * response from the server will not be resolved.
 *
 * To restart after termination, create a new instance of FirebaseFirestore with
 * {@link getFirestore}.
 *
 * Note: Under normal circumstances, calling `terminate()` is not required. This
 * function is useful only when you want to force this instance to release all of
 * its resources or in combination with {@link clearIndexedDbPersistence} to
 * ensure that all local state is destroyed between test runs.
 *
 * @param firestore - The Firestore instance to terminate.
 * @returns A promise that is resolved when the instance has been successfully
 * terminated.
 */ function se(t) {
    return t = tt(t, te), e(t.app, "firestore/lite"), t._delete();
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
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */
class ie {
    /** @hideconstructor */
    constructor(t, n, e) {
        this._converter = n, this._key = e, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    get _path() {
        return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */    get path() {
        return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */    get parent() {
        return new ue(this.firestore, this._converter, this._key.path.popLast());
    }
    withConverter(t) {
        return new ie(this.firestore, t, this._key);
    }
}

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class oe {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, n, e) {
        this._converter = n, this._query = e, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    withConverter(t) {
        return new oe(this.firestore, t, this._query);
    }
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class ue extends oe {
    /** @hideconstructor */
    constructor(t, n, e) {
        super(t, n, new nn(e)), this._path = e, 
        /** The type of this Firestore reference. */
        this.type = "collection";
    }
    /** The collection's identifier. */    get id() {
        return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */    get path() {
        return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */    get parent() {
        const t = this._path.popLast();
        return t.isEmpty() ? null : new ie(this.firestore, 
        /* converter= */ null, new Y(t));
    }
    withConverter(t) {
        return new ue(this.firestore, t, this._path);
    }
}

function ce(t, n, ...e) {
    if (t = a(t), K("collection", "path", n), t instanceof te) {
        const r = W.fromString(n, ...e);
        return Z(r), new ue(t, /* converter= */ null, r);
    }
    {
        if (!(t instanceof ie || t instanceof ue)) throw new C(I, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = W.fromString(t.path, ...e).child(W.fromString(n));
        return Z(r), new ue(t.firestore, 
        /* converter= */ null, r);
    }
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function ae(t, n) {
    if (t = tt(t, te), K("collectionGroup", "collection id", n), n.indexOf("/") >= 0) throw new C(I, `Invalid collection ID '${n}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new oe(t, 
    /* converter= */ null, 
    /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
    function(t) {
        return new nn(W.emptyPath(), t);
    }(n));
}

function he(t, n, ...e) {
    if (t = a(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (n = lt.V()), K("doc", "path", n), t instanceof te) {
        const r = W.fromString(n, ...e);
        return J(r), new ie(t, 
        /* converter= */ null, new Y(r));
    }
    {
        if (!(t instanceof ie || t instanceof ue)) throw new C(I, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const r = t._path.child(W.fromString(n, ...e));
        return J(r), new ie(t.firestore, t instanceof ue ? t._converter : null, new Y(r));
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function le(t, n) {
    return t = a(t), n = a(n), (t instanceof ie || t instanceof ue) && (n instanceof ie || n instanceof ue) && (t.firestore === n.firestore && t.path === n.path && t._converter === n._converter);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function fe(t, n) {
    return t = a(t), n = a(n), t instanceof oe && n instanceof oe && (t.firestore === n.firestore && an(t._query, n._query) && t._converter === n._converter);
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
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class de {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let n = 0; n < t.length; ++n) if (0 === t[n].length) throw new C(I, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new H(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    isEqual(t) {
        return this._internalPath.isEqual(t._internalPath);
    }
}

/**
 * Returns a special sentinel `FieldPath` to refer to the ID of a document.
 * It can be used in queries to sort or filter by the document ID.
 */ function we() {
    return new de("__name__");
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
 * An immutable object representing an array of bytes.
 */ class me {
    /** @hideconstructor */
    constructor(t) {
        this._byteString = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    static fromBase64String(t) {
        try {
            return new me(vt.fromBase64String(t));
        } catch (t) {
            throw new C(I, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new me(vt.fromUint8Array(t));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */    toBase64() {
        return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */    toUint8Array() {
        return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */    toString() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */    isEqual(t) {
        return this._byteString.isEqual(t._byteString);
    }
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
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class pe {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(t) {
        this._methodName = t;
    }
}

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
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class ye {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, n) {
        if (!isFinite(t) || t < -90 || t > 90) throw new C(I, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(n) || n < -180 || n > 180) throw new C(I, "Longitude must be a number between -180 and 180, but was: " + n);
        this._lat = t, this._long = n;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */    get latitude() {
        return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */    get longitude() {
        return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */    isEqual(t) {
        return this._lat === t._lat && this._long === t._long;
    }
    /** Returns a JSON-serializable representation of this GeoPoint. */    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long
        };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */    _compareTo(t) {
        return ft(this._lat, t._lat) || ft(this._long, t._long);
    }
}

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
 */ const _e = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class ge {
    constructor(t, n, e) {
        this.data = t, this.fieldMask = n, this.fieldTransforms = e;
    }
    toMutation(t, n) {
        return null !== this.fieldMask ? new vn(t, this.data, this.fieldMask, n, this.fieldTransforms) : new gn(t, this.data, n, this.fieldTransforms);
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class ve {
    constructor(t, 
    // The fieldMask does not include document transforms.
    n, e) {
        this.data = t, this.fieldMask = n, this.fieldTransforms = e;
    }
    toMutation(t, n) {
        return new vn(t, this.data, this.fieldMask, n, this.fieldTransforms);
    }
}

function be(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw y();
    }
}

/** A "context" object passed around while parsing user data. */ class Ee {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(t, n, e, r, s, i) {
        this.settings = t, this.databaseId = n, this.C = e, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === s && this.nt(), this.fieldTransforms = s || [], this.fieldMask = i || [];
    }
    get path() {
        return this.settings.path;
    }
    get et() {
        return this.settings.et;
    }
    /** Returns a new context with the specified settings overwritten. */    rt(t) {
        return new Ee(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.C, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    st(t) {
        var n;
        const e = null === (n = this.path) || void 0 === n ? void 0 : n.child(t), r = this.rt({
            path: e,
            it: !1
        });
        return r.ot(t), r;
    }
    ut(t) {
        var n;
        const e = null === (n = this.path) || void 0 === n ? void 0 : n.child(t), r = this.rt({
            path: e,
            it: !1
        });
        return r.nt(), r;
    }
    ct(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.rt({
            path: void 0,
            it: !0
        });
    }
    at(t) {
        return ke(t, this.settings.methodName, this.settings.ht || !1, this.path, this.settings.lt);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.fieldMask.find((n => t.isPrefixOf(n))) || void 0 !== this.fieldTransforms.find((n => t.isPrefixOf(n.field)));
    }
    nt() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.ot(this.path.get(t));
    }
    ot(t) {
        if (0 === t.length) throw this.at("Document fields must not be empty");
        if (be(this.et) && _e.test(t)) throw this.at('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Ie {
    constructor(t, n, e) {
        this.databaseId = t, this.ignoreUndefinedProperties = n, this.C = e || zn(t);
    }
    /** Creates a new top-level parse context. */    ft(t, n, e, r = !1) {
        return new Ee({
            et: t,
            methodName: n,
            lt: e,
            path: H.emptyPath(),
            it: !1,
            ht: r
        }, this.databaseId, this.C, this.ignoreUndefinedProperties);
    }
}

function Te(t) {
    const n = t._freezeSettings(), e = zn(t._databaseId);
    return new Ie(t._databaseId, !!n.ignoreUndefinedProperties, e);
}

/** Parse document data from a set() call. */ function Ae(t, n, e, r, s, i = {}) {
    const o = t.ft(i.merge || i.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , n, e, s);
    Le("Data must be an object, but it was:", o, r);
    const u = Oe(r, o);
    let c, a;
    if (i.merge) c = new _t(o.fieldMask), a = o.fieldTransforms; else if (i.mergeFields) {
        const t = [];
        for (const r of i.mergeFields) {
            const s = Ue(n, r, e);
            if (!o.contains(s)) throw new C(I, `Field '${s}' is specified in your field mask but missing from your input data.`);
            Be(t, s) || t.push(s);
        }
        c = new _t(t), a = o.fieldTransforms.filter((t => c.covers(t.field)));
    } else c = null, a = o.fieldTransforms;
    return new ge(new Lt(u), c, a);
}

class Pe extends pe {
    _toFieldTransform(t) {
        if (2 /* MergeSet */ !== t.et) throw 1 /* Update */ === t.et ? t.at(`${this._methodName}() can only appear at the top level of your update data`) : t.at(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.fieldMask.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof Pe;
    }
}

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function Re(t, n, e) {
    return new Ee({
        et: 3 /* Argument */ ,
        lt: n.settings.lt,
        methodName: t._methodName,
        it: e
    }, n.databaseId, n.C, n.ignoreUndefinedProperties);
}

class Ve extends pe {
    _toFieldTransform(t) {
        return new pn(t.path, new fn);
    }
    isEqual(t) {
        return t instanceof Ve;
    }
}

class Ne extends pe {
    constructor(t, n) {
        super(t), this.dt = n;
    }
    _toFieldTransform(t) {
        const n = Re(this, t, 
        /*array=*/ !0), e = this.dt.map((t => qe(t, n))), r = new dn(e);
        return new pn(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class De extends pe {
    constructor(t, n) {
        super(t), this.dt = n;
    }
    _toFieldTransform(t) {
        const n = Re(this, t, 
        /*array=*/ !0), e = this.dt.map((t => qe(t, n))), r = new wn(e);
        return new pn(t.path, r);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class $e extends pe {
    constructor(t, n) {
        super(t), this.wt = n;
    }
    _toFieldTransform(t) {
        const n = new mn(t.C, hn(t.C, this.wt));
        return new pn(t.path, n);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** Parse update data from an update() call. */ function Fe(t, n, e, r) {
    const s = t.ft(1 /* Update */ , n, e);
    Le("Data must be an object, but it was:", s, r);
    const i = [], o = Lt.empty();
    yt(r, ((t, r) => {
        const u = je(n, t, e);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r = a(r);
        const c = s.ut(u);
        if (r instanceof Pe) 
        // Add it to the field mask, but don't add anything to updateData.
        i.push(u); else {
            const t = qe(r, c);
            null != t && (i.push(u), o.set(u, t));
        }
    }));
    const u = new _t(i);
    return new ve(o, u, s.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Se(t, n, e, r, s, i) {
    const o = t.ft(1 /* Update */ , n, e), u = [ Ue(n, r, e) ], c = [ s ];
    if (i.length % 2 != 0) throw new C(I, `Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < i.length; t += 2) u.push(Ue(n, i[t])), c.push(i[t + 1]);
    const h = [], l = Lt.empty();
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = u.length - 1; t >= 0; --t) if (!Be(h, u[t])) {
        const n = u[t];
        let e = c[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                e = a(e);
        const r = o.ut(n);
        if (e instanceof Pe) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(n); else {
            const t = qe(e, r);
            null != t && (h.push(n), l.set(n, t));
        }
    }
    const f = new _t(h);
    return new ve(l, f, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function xe(t, n, e, r = !1) {
    return qe(e, t.ft(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , n));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function qe(t, n) {
    if (Ce(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = a(t))) return Le("Unsupported field value:", n, t), Oe(t, n);
    if (t instanceof pe) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, n) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!be(n.et)) throw n.at(`${t._methodName}() can only be used with update() and set()`);
        if (!n.path) throw n.at(`${t._methodName}() is not currently supported inside arrays`);
        const e = t._toFieldTransform(n);
        e && n.fieldTransforms.push(e);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, n), null;
    if (void 0 === t && n.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    n.path && n.fieldMask.push(n.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (n.settings.it && 4 /* ArrayArgument */ !== n.et) throw n.at("Nested arrays are not supported");
        return function(t, n) {
            const e = [];
            let r = 0;
            for (const s of t) {
                let t = qe(s, n.ct(r));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), e.push(t), r++;
            }
            return {
                arrayValue: {
                    values: e
                }
            };
        }(t, n);
    }
    return function(t, n) {
        if (null === (t = a(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return hn(n.C, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const e = wt.fromDate(t);
            return {
                timestampValue: Pn(n.C, e)
            };
        }
        if (t instanceof wt) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const e = new wt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: Pn(n.C, e)
            };
        }
        if (t instanceof ye) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof me) return {
            bytesValue: Rn(n.C, t._byteString)
        };
        if (t instanceof ie) {
            const e = n.databaseId, r = t.firestore._databaseId;
            if (!r.isEqual(e)) throw n.at(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${e.projectId}/${e.database}`);
            return {
                referenceValue: Dn(t.firestore._databaseId || n.databaseId, t._key.path)
            };
        }
        throw n.at(`Unsupported field value: ${X(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, n);
}

function Oe(t, n) {
    const e = {};
    return !function(t) {
        for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n)) return !1;
        return !0;
    }(t) ? yt(t, ((t, r) => {
        const s = qe(r, n.st(t));
        null != s && (e[t] = s);
    })) : 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    n.path && n.path.length > 0 && n.fieldMask.push(n.path), {
        mapValue: {
            fields: e
        }
    };
}

function Ce(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof wt || t instanceof ye || t instanceof me || t instanceof ie || t instanceof pe);
}

function Le(t, n, e) {
    if (!Ce(e) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(e)) {
        const r = X(e);
        throw "an object" === r ? n.at(t + " a custom object") : n.at(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Ue(t, n, e) {
    if ((
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    n = a(n)) instanceof de) return n._internalPath;
    if ("string" == typeof n) return je(t, n);
    throw ke("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, e);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const Me = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function je(t, n, e) {
    if (n.search(Me) >= 0) throw ke(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, e);
    try {
        return new de(...n.split("."))._internalPath;
    } catch (r) {
        throw ke(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, e);
    }
}

function ke(t, n, e, r, s) {
    const i = r && !r.isEmpty(), o = void 0 !== s;
    let u = `Function ${n}() called with invalid data`;
    e && (u += " (via `toFirestore()`)"), u += ". ";
    let c = "";
    return (i || o) && (c += " (found", i && (c += ` in field ${r}`), o && (c += ` in document ${s}`), 
    c += ")"), new C(I, u + t + c);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function Be(t, n) {
    return t.some((t => t.isEqual(n)));
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
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class Qe {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, n, e, r, s) {
        this._firestore = t, this._userDataWriter = n, this._key = e, this._document = r, 
        this._converter = s;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new ie(this._firestore, this._converter, this._key);
    }
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */    exists() {
        return null !== this._document;
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */    data() {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const t = new ze(this._firestore, this._userDataWriter, this._key, this._document, 
                /* converter= */ null);
                return this._converter.fromFirestore(t);
            }
            return this._userDataWriter.convertValue(this._document.data.toProto());
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t) {
        if (this._document) {
            const n = this._document.data.field(He("DocumentSnapshot.get", t));
            if (null !== n) return this._userDataWriter.convertValue(n);
        }
    }
}

/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */ class ze extends Qe {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */
    data() {
        return super.data();
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class We {
    /** @hideconstructor */
    constructor(t, n) {
        this._docs = n, this.query = t;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        return [ ...this._docs ];
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this.docs.length;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.docs.length;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, n) {
        this._docs.forEach(t, n);
    }
}

/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function Ge(t, n) {
    return t = a(t), n = a(n), t instanceof Qe && n instanceof Qe ? t._firestore === n._firestore && t._key.isEqual(n._key) && (null === t._document ? null === n._document : t._document.isEqual(n._document)) && t._converter === n._converter : t instanceof We && n instanceof We && (fe(t.query, n.query) && dt(t.docs, n.docs, Ge));
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function He(t, n) {
    return "string" == typeof n ? je(t, n) : n instanceof de ? n._internalPath : n._delegate._internalPath;
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
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */
class Ye {}

/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function Ke(t, ...n) {
    for (const e of n) t = e._apply(t);
    return t;
}

class Je extends Ye {
    constructor(t, n, e) {
        super(), this.yt = t, this._t = n, this.gt = e, this.type = "where";
    }
    _apply(t) {
        const n = Te(t.firestore), e = function(t, n, e, r, s, i, o) {
            let u;
            if (s.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === i || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === i) throw new C(I, `Invalid Query. You can't perform '${i}' queries on FieldPath.documentId().`);
                if ("in" /* IN */ === i || "not-in" /* NOT_IN */ === i) {
                    fr(o, i);
                    const n = [];
                    for (const e of o) n.push(lr(r, t, e));
                    u = {
                        arrayValue: {
                            values: n
                        }
                    };
                } else u = lr(r, t, o);
            } else "in" /* IN */ !== i && "not-in" /* NOT_IN */ !== i && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== i || fr(o, i), 
            u = xe(e, n, o, 
            /* allowArrays= */ "in" /* IN */ === i || "not-in" /* NOT_IN */ === i);
            const c = kt.create(s, i, u);
            return function(t, n) {
                if (n.F()) {
                    const e = sn(t);
                    if (null !== e && !e.isEqual(n.field)) throw new C(I, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${e.toString()}' and '${n.field.toString()}'`);
                    const r = rn(t);
                    null !== r && dr(t, n.field, r);
                }
                const e = function(t, n) {
                    for (const e of t.filters) if (n.indexOf(e.op) >= 0) return e.op;
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(n.op));
                if (null !== e) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw e === n.op ? new C(I, `Invalid query. You cannot use more than one '${n.op.toString()}' filter.`) : new C(I, `Invalid query. You cannot use '${n.op.toString()}' filters with '${e.toString()}' filters.`);
            }(t, c), c;
        }(t._query, "where", n, t.firestore._databaseId, this.yt, this._t, this.gt);
        return new oe(t.firestore, t._converter, function(t, n) {
            const e = t.filters.concat([ n ]);
            return new nn(t.path, t.collectionGroup, t.explicitOrderBy.slice(), e, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
    }
}

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */ function Ze(t, n, e) {
    const r = n, s = He("where", t);
    return new Je(s, r, e);
}

class Xe extends Ye {
    constructor(t, n) {
        super(), this.yt = t, this.vt = n, this.type = "orderBy";
    }
    _apply(t) {
        const n = function(t, n, e) {
            if (null !== t.startAt) throw new C(I, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new C(I, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const r = new Zt(n, e);
            return function(t, n) {
                if (null === rn(t)) {
                    // This is the first order by. It must match any inequality.
                    const e = sn(t);
                    null !== e && dr(t, e, n.field);
                }
            }(t, r), r;
        }
        /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */ (t._query, this.yt, this.vt);
        return new oe(t.firestore, t._converter, function(t, n) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const e = t.explicitOrderBy.concat([ n ]);
            return new nn(t.path, t.collectionGroup, e, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
    }
}

/**
 * Creates a `QueryConstraint` that sorts the query result by the
 * specified field, optionally in descending order instead of ascending.
 *
 * @param fieldPath - The field to sort by.
 * @param directionStr - Optional direction to sort by ('asc' or 'desc'). If
 * not specified, order will be ascending.
 * @returns The created `Query`.
 */ function tr(t, n = "asc") {
    const e = n, r = He("orderBy", t);
    return new Xe(r, e);
}

class nr extends Ye {
    constructor(t, n, e) {
        super(), this.type = t, this.bt = n, this.Et = e;
    }
    _apply(t) {
        return new oe(t.firestore, t._converter, function(t, n, e) {
            return new nn(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), n, e, t.startAt, t.endAt);
        }(t._query, this.bt, this.Et));
    }
}

/**
 * Creates a `QueryConstraint` that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ function er(t) {
    return nt("limit", t), new nr("limit", t, "F" /* First */);
}

/**
 * Creates a `QueryConstraint` that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ function rr(t) {
    return nt("limitToLast", t), new nr("limitToLast", t, "L" /* Last */);
}

class sr extends Ye {
    constructor(t, n, e) {
        super(), this.type = t, this.It = n, this.Tt = e;
    }
    _apply(t) {
        const n = hr(t, this.type, this.It, this.Tt);
        return new oe(t.firestore, t._converter, function(t, n) {
            return new nn(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, n, t.endAt);
        }(t._query, n));
    }
}

function ir(...t) {
    return new sr("startAt", t, /*before=*/ !0);
}

function or(...t) {
    return new sr("startAfter", t, 
    /*before=*/ !1);
}

class ur extends Ye {
    constructor(t, n, e) {
        super(), this.type = t, this.It = n, this.Tt = e;
    }
    _apply(t) {
        const n = hr(t, this.type, this.It, this.Tt);
        return new oe(t.firestore, t._converter, function(t, n) {
            return new nn(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, n);
        }(t._query, n));
    }
}

function cr(...t) {
    return new ur("endBefore", t, /*before=*/ !0);
}

function ar(...t) {
    return new ur("endAt", t, /*before=*/ !1);
}

/** Helper function to create a bound from a document or fields */ function hr(t, n, e, r) {
    if (e[0] = a(e[0]), e[0] instanceof Qe) return function(t, n, e, r, s) {
        if (!r) throw new C(A, `Can't use a DocumentSnapshot that doesn't exist for ${e}().`);
        const i = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const e of un(t)) if (e.field.isKeyField()) i.push(St(n, r.key)); else {
            const t = r.data.field(e.field);
            if (At(t)) throw new C(I, 'Invalid query. You are trying to start or end a query using a document for which the field "' + e.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = e.field.canonicalString();
                throw new C(I, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            i.push(t);
        }
        return new Jt(i, s);
    }
    /**
 * Converts a list of field values to a Bound for the given query.
 */ (t._query, t.firestore._databaseId, n, e[0]._document, r);
    {
        const s = Te(t.firestore);
        return function(t, n, e, r, s, i) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.explicitOrderBy;
            if (s.length > o.length) throw new C(I, `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const u = [];
            for (let i = 0; i < s.length; i++) {
                const c = s[i];
                if (o[i].field.isKeyField()) {
                    if ("string" != typeof c) throw new C(I, `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);
                    if (!on(t) && -1 !== c.indexOf("/")) throw new C(I, `Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);
                    const e = t.path.child(W.fromString(c));
                    if (!Y.isDocumentKey(e)) throw new C(I, `Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${e}' is not because it contains an odd number of segments.`);
                    const s = new Y(e);
                    u.push(St(n, s));
                } else {
                    const t = xe(e, r, c);
                    u.push(t);
                }
            }
            return new Jt(u, i);
        }
        /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */ (t._query, t.firestore._databaseId, s, n, e, r);
    }
}

function lr(t, n, e) {
    if ("string" == typeof (e = a(e))) {
        if ("" === e) throw new C(I, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!on(n) && -1 !== e.indexOf("/")) throw new C(I, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);
        const r = n.path.child(W.fromString(e));
        if (!Y.isDocumentKey(r)) throw new C(I, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
        return St(t, new Y(r));
    }
    if (e instanceof ie) return St(t, e._key);
    throw new C(I, `Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${X(e)}.`);
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function fr(t, n) {
    if (!Array.isArray(t) || 0 === t.length) throw new C(I, `Invalid Query. A non-empty array is required for '${n.toString()}' filters.`);
    if (t.length > 10) throw new C(I, `Invalid Query. '${n.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function dr(t, n, e) {
    if (!e.isEqual(n)) throw new C(I, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${n.toString()}' and so you must also use '${n.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${e.toString()}' instead.`);
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
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */
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
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */
function wr(t, n, e) {
    let r;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return r = t ? e && (e.merge || e.mergeFields) ? t.toFirestore(n, e) : t.toFirestore(n) : n, 
    r;
}

class mr extends class {
    convertValue(t, n = "none") {
        switch (Vt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return It(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, n);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(Tt(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, n);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, n);

          default:
            throw y();
        }
    }
    convertObject(t, n) {
        const e = {};
        return yt(t.fields || {}, ((t, r) => {
            e[t] = this.convertValue(r, n);
        })), e;
    }
    convertGeoPoint(t) {
        return new ye(It(t.latitude), It(t.longitude));
    }
    convertArray(t, n) {
        return (t.values || []).map((t => this.convertValue(t, n)));
    }
    convertServerTimestamp(t, n) {
        switch (n) {
          case "previous":
            const e = Pt(t);
            return null == e ? null : this.convertValue(e, n);

          case "estimate":
            return this.convertTimestamp(Rt(t));

          default:
            return null;
        }
    }
    convertTimestamp(t) {
        const n = Et(t);
        return new wt(n.seconds, n.nanos);
    }
    convertDocumentKey(t, n) {
        const e = W.fromString(t);
        _(Qn(e));
        const r = new Q(e.get(1), e.get(3)), s = new Y(e.popFirst(5));
        return r.isEqual(n) || 
        // TODO(b/64130202): Somehow support foreign references.
        w(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`), 
        s;
    }
} {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new me(t);
    }
    convertReference(t) {
        const n = this.convertDocumentKey(t, this.firestore._databaseId);
        return new ie(this.firestore, /* converter= */ null, n);
    }
}

/**
 * Reads the document referred to by the specified document reference.
 *
 * All documents are directly fetched from the server, even if the document was
 * previously read or modified. Recent modifications are only reflected in the
 * retrieved `DocumentSnapshot` if they have already been applied by the
 * backend. If the client is offline, the read fails. If you like to use
 * caching or see local modifications, please use the full Firestore SDK.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the current
 * document contents.
 */ function pr(t) {
    const n = Zn((t = tt(t, ie)).firestore), e = new mr(t.firestore);
    return Yn(n, [ t._key ]).then((n => {
        _(1 === n.length);
        const r = n[0];
        return new Qe(t.firestore, e, t._key, r.isFoundDocument() ? r : null, t._converter);
    }));
}

/**
 * Executes the query and returns the results as a {@link QuerySnapshot}.
 *
 * All queries are executed directly by the server, even if the the query was
 * previously executed. Recent modifications are only reflected in the retrieved
 * results if they have already been applied by the backend. If the client is
 * offline, the operation fails. To see previously cached result and local
 * modifications, use the full Firestore SDK.
 *
 * @param query - The `Query` to execute.
 * @returns A Promise that will be resolved with the results of the query.
 */ function yr(t) {
    !function(t) {
        if (en(t) && 0 === t.explicitOrderBy.length) throw new C(S, "limitToLast() queries require specifying at least one orderBy() clause");
    }((t = tt(t, oe))._query);
    const n = Zn(t.firestore), e = new mr(t.firestore);
    return Kn(n, t._query).then((n => {
        const r = n.map((n => new ze(t.firestore, e, n.key, n, t._converter)));
        return en(t._query) && 
        // Limit to last queries reverse the orderBy constraint that was
        // specified by the user. As such, we need to reverse the order of the
        // results to return the documents in the expected order.
        r.reverse(), new We(t, r);
    }));
}

function _r(t, n, e) {
    const r = wr((t = tt(t, ie))._converter, n, e), s = Ae(Te(t.firestore), "setDoc", t._key, r, null !== t._converter, e);
    return Hn(Zn(t.firestore), [ s.toMutation(t._key, yn.none()) ]);
}

function gr(t, n, e, ...r) {
    const s = Te((t = tt(t, ie)).firestore);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
        let i;
    i = "string" == typeof (n = a(n)) || n instanceof de ? Se(s, "updateDoc", t._key, n, e, r) : Fe(s, "updateDoc", t._key, n);
    return Hn(Zn(t.firestore), [ i.toMutation(t._key, yn.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * The deletion will only be reflected in document reads that occur after the
 * returned Promise resolves. If the client is offline, the
 * delete fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend.
 */ function vr(t) {
    return Hn(Zn((t = tt(t, ie)).firestore), [ new bn(t._key, yn.none()) ]);
}

/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * The result of this write will only be reflected in document reads that occur
 * after the returned Promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend.
 */ function br(t, n) {
    const e = he(t = tt(t, ue)), r = wr(t._converter, n), s = Ae(Te(t.firestore), "addDoc", e._key, r, null !== e._converter, {});
    return Hn(Zn(t.firestore), [ s.toMutation(e._key, yn.exists(!1)) ]).then((() => e));
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
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ function Er() {
    return new Pe("deleteField");
}

/**
 * Returns a sentinel used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link @firebase/firestore/lite#(updateDoc:1)} to
 * include a server-generated timestamp in the written data.
 */ function Ir() {
    return new Ve("serverTimestamp");
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */ function Tr(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new Ne("arrayUnion", t);
}

/**
 * Returns a special value that can be used with {@link (setDoc:1)} or {@link
 * updateDoc:1} that tells the server to remove the given elements from any
 * array value that already exists on the server. All instances of each element
 * specified will be removed from the array. If the field being modified is not
 * already an array it will be overwritten with an empty array.
 *
 * @param elements - The elements to remove from the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function Ar(...t) {
    // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.
    return new De("arrayRemove", t);
}

/**
 * Returns a special value that can be used with {@link @firebase/firestore/lite#(setDoc:1)} or {@link
 * @firebase/firestore/lite#(updateDoc:1)} that tells the server to increment the field's current value by
 * the given value.
 *
 * If either the operand or the current field value uses floating point
 * precision, all arithmetic follows IEEE 754 semantics. If both values are
 * integers, values outside of JavaScript's safe number range
 * (`Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`) are also subject to
 * precision loss. Furthermore, once processed by the Firestore backend, all
 * integer operations are capped between -2^63 and 2^63-1.
 *
 * If the current field value is not of type `number`, or if the field does not
 * yet exist, the transformation sets the field to the given value.
 *
 * @param n - The value to increment by.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`
 */ function Pr(t) {
    return new $e("increment", t);
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
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class Rr {
    /** @hideconstructor */
    constructor(t, n) {
        this._firestore = t, this._commitHandler = n, this._mutations = [], this._committed = !1, 
        this._dataReader = Te(t);
    }
    set(t, n, e) {
        this._verifyNotCommitted();
        const r = Vr(t, this._firestore), s = wr(r._converter, n, e), i = Ae(this._dataReader, "WriteBatch.set", r._key, s, null !== r._converter, e);
        return this._mutations.push(i.toMutation(r._key, yn.none())), this;
    }
    update(t, n, e, ...r) {
        this._verifyNotCommitted();
        const s = Vr(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (n = a(n)) || n instanceof de ? Se(this._dataReader, "WriteBatch.update", s._key, n, e, r) : Fe(this._dataReader, "WriteBatch.update", s._key, n), 
        this._mutations.push(i.toMutation(s._key, yn.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this._verifyNotCommitted();
        const n = Vr(t, this._firestore);
        return this._mutations = this._mutations.concat(new bn(n._key, yn.none())), this;
    }
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */    commit() {
        return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
    }
    _verifyNotCommitted() {
        if (this._committed) throw new C(D, "A write batch can no longer be used after commit() has been called.");
    }
}

function Vr(t, n) {
    if ((t = a(t)).firestore !== n) throw new C(I, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * Creates a write batch, used for performing multiple writes as a single
 * atomic operation. The maximum number of writes allowed in a single WriteBatch
 * is 500.
 *
 * The result of these writes will only be reflected in document reads that
 * occur after the returned Promise resolves. If the client is offline, the
 * write fails. If you would like to see local modifications or buffer writes
 * until the client is online, use the full Firestore SDK.
 *
 * @returns A `WriteBatch` that can be used to atomically execute multiple
 * writes.
 */ function Nr(t) {
    const n = Zn(t = tt(t, te));
    return new Rr(t, (t => Hn(n, t)));
}

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
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class Dr {
    constructor(t) {
        this.datastore = t, 
        // The version of each document that was read during this transaction.
        this.readVersions = new Map, this.mutations = [], this.committed = !1, 
        /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
        this.lastWriteError = null, 
        /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
        this.writtenDocs = new Set;
    }
    async lookup(t) {
        if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new C(I, "Firestore transactions require all reads to be executed before all writes.");
        const n = await Yn(this.datastore, t);
        return n.forEach((t => this.recordVersion(t))), n;
    }
    set(t, n) {
        this.write(n.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    update(t, n) {
        try {
            this.write(n.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }
    delete(t) {
        this.write(new bn(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    async commit() {
        if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
        const t = this.readVersions;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((n => {
            t.delete(n.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, n) => {
            const e = Y.fromPath(n);
            this.mutations.push(new En(e, this.precondition(e)));
        })), await Hn(this.datastore, this.mutations), this.committed = !0;
    }
    recordVersion(t) {
        let n;
        if (t.isFoundDocument()) n = t.version; else {
            if (!t.isNoDocument()) throw y();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            n = mt.min();
        }
        const e = this.readVersions.get(t.key.toString());
        if (e) {
            if (!n.isEqual(e)) 
            // This transaction will fail no matter what.
            throw new C($, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), n);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    precondition(t) {
        const n = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && n ? yn.updateTime(n) : yn.none();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    preconditionForUpdate(t) {
        const n = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && n) {
            if (n.isEqual(mt.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new C(I, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return yn.updateTime(n);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return yn.exists(!0);
    }
    write(t) {
        this.ensureCommitNotCalled(), this.mutations.push(t);
    }
    ensureCommitNotCalled() {}
}

/**
 * @license
 * Copyright 2019 Google LLC
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
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */
class $r {
    constructor(t, n, e, r) {
        this.asyncQueue = t, this.datastore = n, this.updateFunction = e, this.deferred = r, 
        this.At = 5, this.Pt = new Wn(this.asyncQueue, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.Rt();
    }
    Rt() {
        this.Pt.Y((async () => {
            const t = new Dr(this.datastore), n = this.Vt(t);
            n && n.then((n => {
                this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                    this.deferred.resolve(n);
                })).catch((t => {
                    this.Nt(t);
                }))));
            })).catch((t => {
                this.Nt(t);
            }));
        }));
    }
    Vt(t) {
        try {
            const n = this.updateFunction(t);
            return !et(n) && n.catch && n.then ? n : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }
    Nt(t) {
        this.At > 0 && this.Dt(t) ? (this.At -= 1, this.asyncQueue.enqueueAndForget((() => (this.Rt(), 
        Promise.resolve())))) : this.deferred.reject(t);
    }
    Dt(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const n = t.code;
            return "aborted" === n || "failed-precondition" === n || !
            /**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
            function(t) {
                switch (t) {
                  case v:
                    return y();

                  case b:
                  case E:
                  case T:
                  case N:
                  case x:
                  case q:
 // Unauthenticated means something went wrong with our token and we need
                    // to retry with new credentials which will happen automatically.
                                      case V:
                    return !1;

                  case I:
                  case A:
                  case P:
                  case R:
                  case D:
 // Aborted might be retried in some scenarios, but that is dependant on
                    // the context and should handled individually by the calling code.
                    // See https://cloud.google.com/apis/design/errors.
                                      case $:
                  case F:
                  case S:
                  case O:
                    return !0;

                  default:
                    return y();
                }
            }(n);
        }
        return !1;
    }
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
/** The Platform's 'document' implementation or null if not available. */ function Fr() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

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
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class Sr {
    constructor(t, n, e, r, s) {
        this.asyncQueue = t, this.timerId = n, this.targetTimeMs = e, this.op = r, this.removalCallback = s, 
        this.deferred = new at, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.deferred.promise.catch((t => {}));
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */    static createAndSchedule(t, n, e, r, s) {
        const i = Date.now() + e, o = new Sr(t, n, i, r, s);
        return o.start(e), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */    start(t) {
        this.timerHandle = setTimeout((() => this.handleDelayElapsed()), t);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */    skipDelay() {
        return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */    cancel(t) {
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new C(b, "Operation cancelled" + (t ? ": " + t : ""))));
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget((() => null !== this.timerHandle ? (this.clearTimeout(), 
        this.op().then((t => this.deferred.resolve(t)))) : Promise.resolve()));
    }
    clearTimeout() {
        null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), 
        this.timerHandle = null);
    }
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
 */ class xr {
    constructor() {
        // The last promise in the queue.
        this.$t = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Ft = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.St = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.xt = [], 
        // visible for testing
        this.qt = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Ot = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Ct = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Pt = new Wn(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Lt = () => {
            const t = Fr();
            t && d("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.Pt.J();
        };
        const t = Fr();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Lt);
    }
    get isShuttingDown() {
        return this.St;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    enqueueAndForget(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.Ut(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Mt(t);
    }
    enterRestrictedMode() {
        if (!this.St) {
            this.St = !0;
            const t = Fr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Lt);
        }
    }
    enqueue(t) {
        return this.Ut(), this.St ? new Promise((t => {})) : this.Mt(t);
    }
    enqueueRetryable(t) {
        this.enqueueAndForget((() => (this.Ft.push(t), this.jt())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async jt() {
        if (0 !== this.Ft.length) {
            try {
                await this.Ft[0](), this.Ft.shift(), this.Pt.reset();
            } catch (t) {
                if (!
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
                /** Verifies whether `e` is an IndexedDbTransactionError. */
                function(t) {
                    // Use name equality, as instanceof checks on errors don't work with errors
                    // that wrap other errors.
                    return "IndexedDbTransactionError" === t.name;
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
 */ (t)) throw t;
 // Failure will be handled by AsyncQueue
                                d("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.Ft.length > 0 && 
            // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.Pt.Y((() => this.jt()));
        }
    }
    Mt(t) {
        const n = this.$t.then((() => (this.Ot = !0, t().catch((t => {
            this.qt = t, this.Ot = !1;
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw w("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let n = t.message || "";
                t.stack && (n = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
                return n;
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
            // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
            // legacy SDK.
            /**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ (t)), t;
        })).then((t => (this.Ot = !1, t))))));
        return this.$t = n, n;
    }
    enqueueAfterDelay(t, n, e) {
        this.Ut(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Ct.indexOf(t) > -1 && (n = 0);
        const r = Sr.createAndSchedule(this, t, n, e, (t => this.kt(t)));
        return this.xt.push(r), r;
    }
    Ut() {
        this.qt && y();
    }
    verifyOperationInProgress() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async Bt() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.$t, await t;
        } while (t !== this.$t);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    Qt(t) {
        for (const n of this.xt) if (n.timerId === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    zt(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.Bt().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this.xt.sort(((t, n) => t.targetTimeMs - n.targetTimeMs));
            for (const n of this.xt) if (n.skipDelay(), "all" /* All */ !== t && n.timerId === t) break;
            return this.Bt();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Wt(t) {
        this.Ct.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    kt(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const n = this.xt.indexOf(t);
        this.xt.splice(n, 1);
    }
}

class qr {
    /** @hideconstructor */
    constructor(t, n) {
        this._firestore = t, this._transaction = n, this._dataReader = Te(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const n = Vr(t, this._firestore), e = new mr(this._firestore);
        return this._transaction.lookup([ n._key ]).then((t => {
            if (!t || 1 !== t.length) return y();
            const r = t[0];
            if (r.isFoundDocument()) return new Qe(this._firestore, e, r.key, r, n._converter);
            if (r.isNoDocument()) return new Qe(this._firestore, e, n._key, null, n._converter);
            throw y();
        }));
    }
    set(t, n, e) {
        const r = Vr(t, this._firestore), s = wr(r._converter, n, e), i = Ae(this._dataReader, "Transaction.set", r._key, s, null !== r._converter, e);
        return this._transaction.set(r._key, i), this;
    }
    update(t, n, e, ...r) {
        const s = Vr(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let i;
        return i = "string" == typeof (n = a(n)) || n instanceof de ? Se(this._dataReader, "Transaction.update", s._key, n, e, r) : Fe(this._dataReader, "Transaction.update", s._key, n), 
        this._transaction.update(s._key, i), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const n = Vr(t, this._firestore);
        return this._transaction.delete(n._key), this;
    }
}

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */ function Or(t, n) {
    const e = Zn(t = tt(t, te)), r = new at;
    return new $r(new xr, e, (e => n(new qr(t, e))), r).run(), r.promise;
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
 */ r(new i("firestore/lite", ((t, {options: n}) => {
    const e = t.getProvider("app-exp").getImmediate(), r = new te(e, t.getProvider("auth-internal"));
    return n && r._setSettings(n), r;
}), "PUBLIC" /* PUBLIC */)), s("firestore-lite", "2.2.4", "node");

export { me as Bytes, ue as CollectionReference, ie as DocumentReference, Qe as DocumentSnapshot, de as FieldPath, pe as FieldValue, te as FirebaseFirestore, C as FirestoreError, ye as GeoPoint, oe as Query, Ye as QueryConstraint, ze as QueryDocumentSnapshot, We as QuerySnapshot, wt as Timestamp, qr as Transaction, Rr as WriteBatch, br as addDoc, Ar as arrayRemove, Tr as arrayUnion, ce as collection, ae as collectionGroup, vr as deleteDoc, Er as deleteField, he as doc, we as documentId, ar as endAt, cr as endBefore, pr as getDoc, yr as getDocs, ee as getFirestore, Pr as increment, ne as initializeFirestore, er as limit, rr as limitToLast, tr as orderBy, Ke as query, fe as queryEqual, le as refEqual, Or as runTransaction, Ir as serverTimestamp, _r as setDoc, f as setLogLevel, Ge as snapshotEqual, or as startAfter, ir as startAt, se as terminate, gr as updateDoc, re as useFirestoreEmulator, Ze as where, Nr as writeBatch };
//# sourceMappingURL=index.rn.esm2017.js.map
