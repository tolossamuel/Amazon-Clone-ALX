import { getModularInstance, getUA, isMobileCordova, isReactNative, isElectron, isIE, isUWP, isBrowserExtension } from '@firebase/util';
import { Logger, LogLevel } from '@firebase/logger';
import { XhrIo, EventType, ErrorCode, createWebChannelTransport, getStatEventTarget, WebChannel, Event, Stat } from '@firebase/webchannel-wrapper';

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
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class g {
    constructor(t, e) {
        this.previousValue = t, e && (e.sequenceNumberHandler = t => this.t(t), this.i = t => e.writeSequenceNumber(t));
    }
    t(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }
    next() {
        const t = ++this.previousValue;
        return this.i && this.i(t), t;
    }
}

g.o = -1;

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
const p = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
};

/** An error returned by a Firestore operation. */ class E extends Error {
    /** @hideconstructor */
    constructor(
    /**
     * The backend error code associated with this error.
     */
    t, 
    /**
     * A custom error description.
     */
    e) {
        super(e), this.code = t, this.message = e, 
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
 */
const T = new Logger("@firebase/firestore");

// Helper methods are needed because variables can't be exported as read/write
function I() {
    return T.logLevel;
}

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
 */ function A(t, ...e) {
    if (T.logLevel <= LogLevel.DEBUG) {
        const n = e.map(v);
        T.debug(`Firestore (8.4.0): ${t}`, ...n);
    }
}

function R(t, ...e) {
    if (T.logLevel <= LogLevel.ERROR) {
        const n = e.map(v);
        T.error(`Firestore (8.4.0): ${t}`, ...n);
    }
}

function b(t, ...e) {
    if (T.logLevel <= LogLevel.WARN) {
        const n = e.map(v);
        T.warn(`Firestore (8.4.0): ${t}`, ...n);
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function v(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
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
    var e;
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
 */ function P(t = "Unexpected state") {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const e = "FIRESTORE (8.4.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw R(e), new Error(e);
}

/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */ function V(t, e) {
    t || P();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function S(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
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
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function D(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    const e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (let e = 0; e < t; e++) n[e] = Math.floor(256 * Math.random());
    return n;
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
 */ class C {
    static u() {
        // Alphanumeric characters
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length;
        // The largest byte value that is a multiple of `char.length`.
                let n = "";
        for (;n.length < 20; ) {
            const s = D(40);
            for (let i = 0; i < s.length; ++i) 
            // Only accept values that are [0, maxMultiple), this ensures they can
            // be evenly mapped to indices of `chars` via a modulo operation.
            n.length < 20 && s[i] < e && (n += t.charAt(s[i] % t.length));
        }
        return n;
    }
}

function N(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function x(t, e, n) {
    return t.length === e.length && t.every(((t, s) => n(t, e[s])));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function F(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
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
class k {
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
    e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new E(p.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new E(p.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new E(p.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new E(p.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    static now() {
        return k.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */    static fromDate(t) {
        return k.fromMillis(t.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */    static fromMillis(t) {
        const e = Math.floor(t / 1e3), n = Math.floor(1e6 * (t - 1e3 * e));
        return new k(e, n);
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
        return this.seconds === t.seconds ? N(this.nanoseconds, t.nanoseconds) : N(this.seconds, t.seconds);
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
 */ class O {
    constructor(t) {
        this.timestamp = t;
    }
    static fromTimestamp(t) {
        return new O(t);
    }
    static min() {
        return new O(new k(0, 0));
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
 */ function $(t) {
    let e = 0;
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function M(t, e) {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function L(t) {
    for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
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
 * Path represents an ordered sequence of string segments.
 */
class B {
    constructor(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && P(), void 0 === n ? n = t.length - e : n > t.length - e && P(), 
        this.segments = t, this.offset = e, this.len = n;
    }
    get length() {
        return this.len;
    }
    isEqual(t) {
        return 0 === B.comparator(this, t);
    }
    child(t) {
        const e = this.segments.slice(this.offset, this.limit());
        return t instanceof B ? t.forEach((t => {
            e.push(t);
        })) : e.push(t), this.construct(e);
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
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length) return !1;
        for (let e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, e) {
        const n = Math.min(t.length, e.length);
        for (let s = 0; s < n; s++) {
            const n = t.get(s), i = e.get(s);
            if (n < i) return -1;
            if (n > i) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
}

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */ class q extends B {
    construct(t, e, n) {
        return new q(t, e, n);
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
        const e = [];
        for (const n of t) {
            if (n.indexOf("//") >= 0) throw new E(p.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
            // Strip leading and traling slashed.
                        e.push(...n.split("/").filter((t => t.length > 0)));
        }
        return new q(e);
    }
    static emptyPath() {
        return new q([]);
    }
}

const U = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

/** A dot-separated path for navigating sub-objects within a document. */ class Q extends B {
    construct(t, e, n) {
        return new Q(t, e, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */    static isValidIdentifier(t) {
        return U.test(t);
    }
    canonicalString() {
        return this.toArray().map((t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), 
        Q.isValidIdentifier(t) || (t = "`" + t + "`"), t))).join(".");
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
        return new Q([ "__name__" ]);
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
        const e = [];
        let n = "", s = 0;
        const i = () => {
            if (0 === n.length) throw new E(p.INVALID_ARGUMENT, `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n), n = "";
        };
        let r = !1;
        for (;s < t.length; ) {
            const e = t[s];
            if ("\\" === e) {
                if (s + 1 === t.length) throw new E(p.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                const e = t[s + 1];
                if ("\\" !== e && "." !== e && "`" !== e) throw new E(p.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                n += e, s += 2;
            } else "`" === e ? (r = !r, s++) : "." !== e || r ? (n += e, s++) : (i(), s++);
        }
        if (i(), r) throw new E(p.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new Q(e);
    }
    static emptyPath() {
        return new Q([]);
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
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class K {
    constructor(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(Q.comparator);
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */    covers(t) {
        for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
        return !1;
    }
    isEqual(t) {
        return x(this.fields, t.fields, ((t, e) => t.isEqual(e)));
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
/** Converts a Base64 encoded string to a binary string. */
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
class j {
    constructor(t) {
        this.binaryString = t;
    }
    static fromBase64String(t) {
        const e = atob(t);
        return new j(e);
    }
    static fromUint8Array(t) {
        const e = 
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            let e = "";
            for (let n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }
        /**
 * Helper function to convert a binary string to an Uint8Array.
 */ (t);
        return new j(e);
    }
    toBase64() {
        return t = this.binaryString, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */
        var t;
        /** True if and only if the Base64 conversion functions are available. */    }
    toUint8Array() {
        return function(t) {
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
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
        return N(this.binaryString, t.binaryString);
    }
    isEqual(t) {
        return this.binaryString === t.binaryString;
    }
}

j.EMPTY_BYTE_STRING = new j("");

const W = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */ function G(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (V(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        let e = 0;
        const n = W.exec(t);
        if (V(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            let t = n[1];
            t = (t + "000000000").substr(0, 9), e = Number(t);
        }
        // Parse the date to get the seconds.
                const s = new Date(t);
        return {
            seconds: Math.floor(s.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: z(t.seconds),
        nanos: z(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function z(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function H(t) {
    return "string" == typeof t ? j.fromBase64String(t) : j.fromUint8Array(t);
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
 */ function J(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */
function Y(t) {
    const e = t.mapValue.fields.__previous_value__;
    return J(e) ? Y(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function X(t) {
    const e = G(t.mapValue.fields.__local_write_time__.timestampValue);
    return new k(e.seconds, e.nanos);
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
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */
function Z(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function tt(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function et(t) {
    return "number" == typeof t && Number.isInteger(t) && !tt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
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
 */ class nt {
    constructor(t) {
        this.path = t;
    }
    static fromPath(t) {
        return new nt(q.fromString(t));
    }
    static fromName(t) {
        return new nt(q.fromString(t).popFirst(5));
    }
    /** Returns true if the document is in the specified collectionId. */    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }
    isEqual(t) {
        return null !== t && 0 === q.comparator(this.path, t.path);
    }
    toString() {
        return this.path.toString();
    }
    static comparator(t, e) {
        return q.comparator(t.path, e.path);
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
        return new nt(new q(t.slice()));
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
/** Extracts the backend's type order for the provided value. */ function st(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? J(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : P();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function it(t, e) {
    const n = st(t);
    if (n !== st(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return X(t).isEqual(X(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            const n = G(t.timestampValue), s = G(e.timestampValue);
            return n.seconds === s.seconds && n.nanos === s.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return H(t.bytesValue).isEqual(H(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return z(t.geoPointValue.latitude) === z(e.geoPointValue.latitude) && z(t.geoPointValue.longitude) === z(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return z(t.integerValue) === z(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                const n = z(t.doubleValue), s = z(e.doubleValue);
                return n === s ? tt(n) === tt(s) : isNaN(n) && isNaN(s);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return x(t.arrayValue.values || [], e.arrayValue.values || [], it);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.mapValue.fields || {}, s = e.mapValue.fields || {};
            if ($(n) !== $(s)) return !1;
            for (const t in n) if (n.hasOwnProperty(t) && (void 0 === s[t] || !it(n[t], s[t]))) return !1;
            return !0;
        }
        /** Returns true if the ArrayValue contains the specified element. */ (t, e);

      default:
        return P();
    }
}

function rt(t, e) {
    return void 0 !== (t.values || []).find((t => it(t, e)));
}

function ot(t, e) {
    const n = st(t), s = st(e);
    if (n !== s) return N(n, s);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return N(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            const n = z(t.integerValue || t.doubleValue), s = z(e.integerValue || e.doubleValue);
            return n < s ? -1 : n > s ? 1 : n === s ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(s) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return ct(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return ct(X(t), X(e));

      case 5 /* StringValue */ :
        return N(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            const n = H(t), s = H(e);
            return n.compareTo(s);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            const n = t.split("/"), s = e.split("/");
            for (let t = 0; t < n.length && t < s.length; t++) {
                const e = N(n[t], s[t]);
                if (0 !== e) return e;
            }
            return N(n.length, s.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            const n = N(z(t.latitude), z(e.latitude));
            if (0 !== n) return n;
            return N(z(t.longitude), z(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            const n = t.values || [], s = e.values || [];
            for (let t = 0; t < n.length && t < s.length; ++t) {
                const e = ot(n[t], s[t]);
                if (e) return e;
            }
            return N(n.length, s.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            const n = t.fields || {}, s = Object.keys(n), i = e.fields || {}, r = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
            s.sort(), r.sort();
            for (let t = 0; t < s.length && t < r.length; ++t) {
                const e = N(s[t], r[t]);
                if (0 !== e) return e;
                const o = ot(n[s[t]], i[r[t]]);
                if (0 !== o) return o;
            }
            return N(s.length, r.length);
        }
        /**
 * Generates the canonical ID for the provided field value (as used in Target
 * serialization).
 */ (t.mapValue, e.mapValue);

      default:
        throw P();
    }
}

function ct(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return N(t, e);
    const n = G(t), s = G(e), i = N(n.seconds, s.seconds);
    return 0 !== i ? i : N(n.nanos, s.nanos);
}

function ut(t) {
    return at(t);
}

function at(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        const e = G(t);
        return `time(${e.seconds},${e.nanos})`;
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? H(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    nt.fromName(n).toString()) : "geoPointValue" in t ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})` : "arrayValue" in t ? function(t) {
        let e = "[", n = !0;
        for (const s of t.values || []) n ? n = !1 : e += ",", e += at(s);
        return e + "]";
    }
    /** Returns a reference value for the provided database and key. */ (t.arrayValue) : "mapValue" in t ? function(t) {
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        const e = Object.keys(t.fields || {}).sort();
        let n = "{", s = !0;
        for (const i of e) s ? s = !1 : n += ",", n += `${i}:${at(t.fields[i])}`;
        return n + "}";
    }(t.mapValue) : P();
    var e, n;
}

function ht(t, e) {
    return {
        referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`
    };
}

/** Returns true if `value` is an IntegerValue . */ function lt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */
function ft(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function dt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function wt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function _t(t) {
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
 */ class mt {
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
        return new mt({
            mapValue: {}
        });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */    field(t) {
        return mt.extractNestedValue(this.buildProto(), t);
    }
    /** Returns the full protobuf representation. */    toProto() {
        return this.field(Q.emptyPath());
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */    set(t, e) {
        this.setOverlay(t, e);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */    setAll(t) {
        t.forEach(((t, e) => {
            t ? this.set(e, t) : this.delete(e);
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
        return it(this.buildProto(), t.buildProto());
    }
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */    setOverlay(t, e) {
        let n = this.overlayMap;
        for (let e = 0; e < t.length - 1; ++e) {
            const s = t.get(e);
            let i = n.get(s);
            i instanceof Map ? 
            // Re-use a previously created map
            n = i : i && 10 /* ObjectValue */ === st(i) ? (
            // Convert the existing Protobuf MapValue into a map
            i = new Map(Object.entries(i.mapValue.fields || {})), n.set(s, i), n = i) : (
            // Create an empty map to represent the current nesting level
            i = new Map, n.set(s, i), n = i);
        }
        n.set(t.lastSegment(), e);
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
     */    applyOverlay(t, e) {
        let n = !1;
        const s = mt.extractNestedValue(this.partialValue, t), i = _t(s) ? // If there is already data at the current path, base our
        Object.assign({}, s.mapValue.fields) : {};
        return e.forEach(((e, s) => {
            if (e instanceof Map) {
                const r = this.applyOverlay(t.child(s), e);
                null != r && (i[s] = r, n = !0);
            } else null !== e ? (i[s] = e, n = !0) : i.hasOwnProperty(s) && (delete i[s], n = !0);
        })), n ? {
            mapValue: {
                fields: i
            }
        } : null;
    }
    /**
     * Builds the Protobuf that backs this ObjectValue.
     *
     * This method applies any outstanding modifications and memoizes the result.
     * Further invocations are based on this memoized result.
     */    buildProto() {
        const t = this.applyOverlay(Q.emptyPath(), this.overlayMap);
        return null != t && (this.partialValue = t, this.overlayMap.clear()), this.partialValue;
    }
    static extractNestedValue(t, e) {
        if (e.isEmpty()) return t;
        {
            let n = t;
            for (let t = 0; t < e.length - 1; ++t) {
                if (!n.mapValue.fields) return null;
                if (n = n.mapValue.fields[e.get(t)], !_t(n)) return null;
            }
            return n = (n.mapValue.fields || {})[e.lastSegment()], n || null;
        }
    }
    clone() {
        return new mt(this.buildProto());
    }
}

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */ function yt(t) {
    const e = [];
    return M(t.fields || {}, ((t, n) => {
        const s = new Q([ t ]);
        if (_t(n)) {
            const t = yt(n.mapValue).fields;
            if (0 === t.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(s); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (const n of t) e.push(s.child(n));
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(s);
    })), new K(e);
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
 */ class gt {
    constructor(t, e, n, s, i) {
        this.key = t, this.documentType = e, this.version = n, this.data = s, this.documentState = i;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */    static newInvalidDocument(t) {
        return new gt(t, 0 /* INVALID */ , O.min(), mt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */    static newFoundDocument(t, e, n) {
        return new gt(t, 1 /* FOUND_DOCUMENT */ , e, n, 0 /* SYNCED */);
    }
    /** Creates a new document that is known to not exist at the given version. */    static newNoDocument(t, e) {
        return new gt(t, 2 /* NO_DOCUMENT */ , e, mt.empty(), 0 /* SYNCED */);
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */    static newUnknownDocument(t, e) {
        return new gt(t, 3 /* UNKNOWN_DOCUMENT */ , e, mt.empty(), 2 /* HAS_COMMITTED_MUTATIONS */);
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */    convertToFoundDocument(t, e) {
        return this.version = t, this.documentType = 1 /* FOUND_DOCUMENT */ , this.data = e, 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */    convertToNoDocument(t) {
        return this.version = t, this.documentType = 2 /* NO_DOCUMENT */ , this.data = mt.empty(), 
        this.documentState = 0 /* SYNCED */ , this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */    convertToUnknownDocument(t) {
        return this.version = t, this.documentType = 3 /* UNKNOWN_DOCUMENT */ , this.data = mt.empty(), 
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
        return t instanceof gt && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data);
    }
    clone() {
        return new gt(this.key, this.documentType, this.version, this.data.clone(), this.documentState);
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.toProto())}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
}

/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */
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
class pt {
    constructor(t, e = null, n = [], s = [], i = null, r = null, o = null) {
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = s, this.limit = i, 
        this.startAt = r, this.endAt = o, this.h = null;
    }
}

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function Et(t, e = null, n = [], s = [], i = null, r = null, o = null) {
    return new pt(t, e, n, s, i, r, o);
}

function Tt(t) {
    const e = S(t);
    if (null === e.h) {
        let t = e.path.canonicalString();
        null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup), t += "|f:", t += e.filters.map((t => vt(t))).join(","), 
        t += "|ob:", t += e.orderBy.map((t => function(t) {
            // TODO(b/29183165): Make this collision robust.
            return t.field.canonicalString() + t.dir;
        }(t))).join(","), Z(e.limit) || (t += "|l:", t += e.limit), e.startAt && (t += "|lb:", 
        t += Ot(e.startAt)), e.endAt && (t += "|ub:", t += Ot(e.endAt)), e.h = t;
    }
    return e.h;
}

function It(t) {
    let e = t.path.canonicalString();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
    t.filters.length > 0 && (e += `, filters: [${t.filters.map((t => {
        return `${(e = t).field.canonicalString()} ${e.op} ${ut(e.value)}`;
        /** Returns a debug description for `filter`. */
        var e;
        /** Filter that matches on key fields (i.e. '__name__'). */    })).join(", ")}]`), 
    Z(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += `, orderBy: [${t.orderBy.map((t => function(t) {
        return `${t.field.canonicalString()} (${t.dir})`;
    }(t))).join(", ")}]`), t.startAt && (e += ", startAt: " + Ot(t.startAt)), t.endAt && (e += ", endAt: " + Ot(t.endAt)), 
    `Target(${e})`;
}

function At(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (let n = 0; n < t.orderBy.length; n++) if (!Mt(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (let i = 0; i < t.filters.length; i++) if (n = t.filters[i], s = e.filters[i], 
    n.op !== s.op || !n.field.isEqual(s.field) || !it(n.value, s.value)) return !1;
    var n, s;
    return t.collectionGroup === e.collectionGroup && (!!t.path.isEqual(e.path) && (!!Bt(t.startAt, e.startAt) && Bt(t.endAt, e.endAt)));
}

function Rt(t) {
    return nt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

class bt extends class {} {
    constructor(t, e, n) {
        super(), this.field = t, this.op = e, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    static create(t, e, n) {
        return t.isKeyField() ? "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.l(t, e, n) : new Pt(t, e, n) : "array-contains" /* ARRAY_CONTAINS */ === e ? new Ct(t, n) : "in" /* IN */ === e ? new Nt(t, n) : "not-in" /* NOT_IN */ === e ? new xt(t, n) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Ft(t, n) : new bt(t, e, n);
    }
    static l(t, e, n) {
        return "in" /* IN */ === e ? new Vt(t, n) : new St(t, n);
    }
    matches(t) {
        const e = t.data.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.m(ot(e, this.value)) : null !== e && st(this.value) === st(e) && this.m(ot(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }
    m(t) {
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
            return P();
        }
    }
    g() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }
}

function vt(t) {
    // TODO(b/29183165): Technically, this won't be unique if two values have
    // the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString() + t.op.toString() + ut(t.value);
}

class Pt extends bt {
    constructor(t, e, n) {
        super(t, e, n), this.key = nt.fromName(n.referenceValue);
    }
    matches(t) {
        const e = nt.comparator(t.key, this.key);
        return this.m(e);
    }
}

/** Filter that matches on key fields within an array. */ class Vt extends bt {
    constructor(t, e) {
        super(t, "in" /* IN */ , e), this.keys = Dt("in" /* IN */ , e);
    }
    matches(t) {
        return this.keys.some((e => e.isEqual(t.key)));
    }
}

/** Filter that matches on key fields not present within an array. */ class St extends bt {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e), this.keys = Dt("not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        return !this.keys.some((e => e.isEqual(t.key)));
    }
}

function Dt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((t => nt.fromName(t.referenceValue)));
}

/** A Filter that implements the array-contains operator. */ class Ct extends bt {
    constructor(t, e) {
        super(t, "array-contains" /* ARRAY_CONTAINS */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return ft(e) && rt(e.arrayValue, this.value);
    }
}

/** A Filter that implements the IN operator. */ class Nt extends bt {
    constructor(t, e) {
        super(t, "in" /* IN */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return null !== e && rt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the not-in operator. */ class xt extends bt {
    constructor(t, e) {
        super(t, "not-in" /* NOT_IN */ , e);
    }
    matches(t) {
        if (rt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        const e = t.data.field(this.field);
        return null !== e && !rt(this.value.arrayValue, e);
    }
}

/** A Filter that implements the array-contains-any operator. */ class Ft extends bt {
    constructor(t, e) {
        super(t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , e);
    }
    matches(t) {
        const e = t.data.field(this.field);
        return !(!ft(e) || !e.arrayValue.values) && e.arrayValue.values.some((t => rt(this.value.arrayValue, t)));
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
 */ class kt {
    constructor(t, e) {
        this.position = t, this.before = e;
    }
}

function Ot(t) {
    // TODO(b/29183165): Make this collision robust.
    return `${t.before ? "b" : "a"}:${t.position.map((t => ut(t))).join(",")}`;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ class $t {
    constructor(t, e = "asc" /* ASCENDING */) {
        this.field = t, this.dir = e;
    }
}

function Mt(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function Lt(t, e, n) {
    let s = 0;
    for (let i = 0; i < t.position.length; i++) {
        const r = e[i], o = t.position[i];
        if (r.field.isKeyField()) s = nt.comparator(nt.fromName(o.referenceValue), n.key); else {
            s = ot(o, n.data.field(r.field));
        }
        if ("desc" /* DESCENDING */ === r.dir && (s *= -1), 0 !== s) break;
    }
    return t.before ? s <= 0 : s < 0;
}

function Bt(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (let n = 0; n < t.position.length; n++) {
        if (!it(t.position[n], e.position[n])) return !1;
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
 */ class qt {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(t, e = null, n = [], s = [], i = null, r = "F" /* First */ , o = null, c = null) {
        this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = s, 
        this.limit = i, this.limitType = r, this.startAt = o, this.endAt = c, this.p = null, 
        // The corresponding `Target` of this `Query` instance.
        this.T = null, this.startAt, this.endAt;
    }
}

/** Creates a new Query instance with the options provided. */ function Ut(t, e, n, s, i, r, o, c) {
    return new qt(t, e, n, s, i, r, o, c);
}

/** Creates a new Query for a query that matches all documents at `path` */ function Qt(t) {
    return new qt(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Kt(t) {
    return !Z(t.limit) && "F" /* First */ === t.limitType;
}

function jt(t) {
    return !Z(t.limit) && "L" /* Last */ === t.limitType;
}

function Wt(t) {
    return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function Gt(t) {
    for (const e of t.filters) if (e.g()) return e.field;
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
function zt(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Ht(t) {
    const e = S(t);
    if (null === e.p) {
        e.p = [];
        const t = Gt(e), n = Wt(e);
        if (null !== t && null === n) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        t.isKeyField() || e.p.push(new $t(t)), e.p.push(new $t(Q.keyField(), "asc" /* ASCENDING */)); else {
            let t = !1;
            for (const n of e.explicitOrderBy) e.p.push(n), n.field.isKeyField() && (t = !0);
            if (!t) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                const t = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc" /* ASCENDING */;
                e.p.push(new $t(Q.keyField(), t));
            }
        }
    }
    return e.p;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function Jt(t) {
    const e = S(t);
    if (!e.T) if ("F" /* First */ === e.limitType) e.T = Et(e.path, e.collectionGroup, Ht(e), e.filters, e.limit, e.startAt, e.endAt); else {
        // Flip the orderBy directions since we want the last results
        const t = [];
        for (const n of Ht(e)) {
            const e = "desc" /* DESCENDING */ === n.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            t.push(new $t(n.field, e));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                const n = e.endAt ? new kt(e.endAt.position, !e.endAt.before) : null, s = e.startAt ? new kt(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
        e.T = Et(e.path, e.collectionGroup, t, e.filters, e.limit, n, s);
    }
    return e.T;
}

function Yt(t, e, n) {
    return new qt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function Xt(t, e) {
    return At(Jt(t), Jt(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Zt(t) {
    return `${Tt(Jt(t))}|lt:${t.limitType}`;
}

function te(t) {
    return `Query(target=${It(Jt(t))}; limitType=${t.limitType})`;
}

/** Returns whether `doc` matches the constraints of `query`. */ function ee(t, e) {
    return e.isFoundDocument() && function(t, e) {
        const n = e.key.path;
        return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : nt.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
    }
    /**
 * A document must have a value for every ordering clause in order to show up
 * in the results.
 */ (t, e) && function(t, e) {
        for (const n of t.explicitOrderBy) 
        // order by key always matches
        if (!n.field.isKeyField() && null === e.data.field(n.field)) return !1;
        return !0;
    }(t, e) && function(t, e) {
        for (const n of t.filters) if (!n.matches(e)) return !1;
        return !0;
    }
    /** Makes sure a document is within the bounds, if provided. */ (t, e) && function(t, e) {
        if (t.startAt && !Lt(t.startAt, Ht(t), e)) return !1;
        if (t.endAt && Lt(t.endAt, Ht(t), e)) return !1;
        return !0;
    }
    /**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */ (t, e);
}

function ne(t) {
    return (e, n) => {
        let s = !1;
        for (const i of Ht(t)) {
            const t = se(i, e, n);
            if (0 !== t) return t;
            s = s || i.field.isKeyField();
        }
        return 0;
    };
}

function se(t, e, n) {
    const s = t.field.isKeyField() ? nt.comparator(e.key, n.key) : function(t, e, n) {
        const s = e.data.field(t), i = n.data.field(t);
        return null !== s && null !== i ? ot(s, i) : P();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return s;

      case "desc" /* DESCENDING */ :
        return -1 * s;

      default:
        return P();
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
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ie(t, e) {
    if (t.I) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: tt(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function re(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function oe(t, e) {
    return et(e) ? re(e) : ie(t, e);
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
/** Used to represent a field transform on a mutation. */ class ce {
    constructor() {
        // Make sure that the structural type of `TransformOperation` is unique.
        // See https://github.com/microsoft/TypeScript/issues/5451
        this._ = void 0;
    }
}

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function ue(t, e, n) {
    return t instanceof le ? function(t, e) {
        const n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof fe ? de(t, e) : t instanceof we ? _e(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        const n = he(t, e), s = ye(n) + ye(t.A);
        return lt(n) && lt(t.A) ? re(s) : ie(t.R, s);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function ae(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof fe ? de(t, e) : t instanceof we ? _e(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function he(t, e) {
    return t instanceof me ? lt(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */ (n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */
class le extends ce {}

/** Transforms an array value via a union operation. */ class fe extends ce {
    constructor(t) {
        super(), this.elements = t;
    }
}

function de(t, e) {
    const n = ge(e);
    for (const e of t.elements) n.some((t => it(t, e))) || n.push(e);
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ class we extends ce {
    constructor(t) {
        super(), this.elements = t;
    }
}

function _e(t, e) {
    let n = ge(e);
    for (const e of t.elements) n = n.filter((t => !it(t, e)));
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ class me extends ce {
    constructor(t, e) {
        super(), this.R = t, this.A = e;
    }
}

function ye(t) {
    return z(t.integerValue || t.doubleValue);
}

function ge(t) {
    return ft(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
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
/** A field path and the TransformOperation to perform upon it. */ class pe {
    constructor(t, e) {
        this.field = t, this.transform = e;
    }
}

function Ee(t, e) {
    return t.field.isEqual(e.field) && function(t, e) {
        return t instanceof fe && e instanceof fe || t instanceof we && e instanceof we ? x(t.elements, e.elements, it) : t instanceof me && e instanceof me ? it(t.A, e.A) : t instanceof le && e instanceof le;
    }(t.transform, e.transform);
}

/** The result of successfully applying a mutation to the backend. */
class Te {
    constructor(
    /**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
    t, 
    /**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */
    e) {
        this.version = t, this.transformResults = e;
    }
}

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */ class Ie {
    constructor(t, e) {
        this.updateTime = t, this.exists = e;
    }
    /** Creates a new empty Precondition. */    static none() {
        return new Ie;
    }
    /** Creates a new Precondition with an exists flag. */    static exists(t) {
        return new Ie(void 0, t);
    }
    /** Creates a new Precondition based on a version a document exists at. */    static updateTime(t) {
        return new Ie(t);
    }
    /** Returns whether this Precondition is empty. */    get isNone() {
        return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }
}

/** Returns true if the preconditions is valid for the given document. */ function Ae(t, e) {
    return void 0 !== t.updateTime ? e.isFoundDocument() && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e.isFoundDocument();
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
 */ class Re {}

/**
 * Applies this mutation to the given document for the purposes of computing a
 * new remote document. If the input document doesn't match the expected state
 * (e.g. it is invalid or outdated), the document type may transition to
 * unknown.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 */ function be(t, e, n) {
    t instanceof De ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        const s = t.value.clone(), i = xe(t.fieldTransforms, e, n.transformResults);
        s.setAll(i), e.convertToFoundDocument(n.version, s).setHasCommittedMutations();
    }(t, e, n) : t instanceof Ce ? function(t, e, n) {
        if (!Ae(t.precondition, e)) 
        // Since the mutation was not rejected, we know that the precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and convert to an UnknownDocument with a
        // known updateTime.
        return void e.convertToUnknownDocument(n.version);
        const s = xe(t.fieldTransforms, e, n.transformResults), i = e.data;
        i.setAll(Ne(t)), i.setAll(s), e.convertToFoundDocument(n.version, i).setHasCommittedMutations();
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        e.convertToNoDocument(n.version).setHasCommittedMutations();
    }(0, e, n);
}

/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 */ function ve(t, e, n) {
    t instanceof De ? function(t, e, n) {
        if (!Ae(t.precondition, e)) 
        // The mutation failed to apply (e.g. a document ID created with add()
        // caused a name collision).
        return;
        const s = t.value.clone(), i = Fe(t.fieldTransforms, n, e);
        s.setAll(i), e.convertToFoundDocument(Se(e), s).setHasLocalMutations();
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
 */ (t, e, n) : t instanceof Ce ? function(t, e, n) {
        if (!Ae(t.precondition, e)) return;
        const s = Fe(t.fieldTransforms, n, e), i = e.data;
        i.setAll(Ne(t)), i.setAll(s), e.convertToFoundDocument(Se(e), i).setHasLocalMutations();
    }
    /**
 * Returns a FieldPath/Value map with the content of the PatchMutation.
 */ (t, e, n) : function(t, e) {
        Ae(t.precondition, e) && 
        // We don't call `setHasLocalMutations()` since we want to be backwards
        // compatible with the existing SDK behavior.
        e.convertToNoDocument(O.min());
    }
    /**
 * A mutation that verifies the existence of the document at the given key with
 * the provided precondition.
 *
 * The `verify` operation is only used in Transactions, and this class serves
 * primarily to facilitate serialization into protos.
 */ (t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function Pe(t, e) {
    let n = null;
    for (const s of t.fieldTransforms) {
        const t = e.data.field(s.field), i = he(s.transform, t || null);
        null != i && (null == n && (n = mt.empty()), n.set(s.field, i));
    }
    return n || null;
}

function Ve(t, e) {
    return t.type === e.type && (!!t.key.isEqual(e.key) && (!!t.precondition.isEqual(e.precondition) && (!!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && x(t, e, ((t, e) => Ee(t, e)));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Se(t) {
    return t.isFoundDocument() ? t.version : O.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ class De extends Re {
    constructor(t, e, n, s = []) {
        super(), this.key = t, this.value = e, this.precondition = n, this.fieldTransforms = s, 
        this.type = 0 /* Set */;
    }
}

class Ce extends Re {
    constructor(t, e, n, s, i = []) {
        super(), this.key = t, this.data = e, this.fieldMask = n, this.precondition = s, 
        this.fieldTransforms = i, this.type = 1 /* Patch */;
    }
}

function Ne(t) {
    const e = new Map;
    return t.fieldMask.fields.forEach((n => {
        if (!n.isEmpty()) {
            const s = t.data.field(n);
            e.set(n, s);
        }
    })), e;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */ function xe(t, e, n) {
    const s = new Map;
    V(t.length === n.length);
    for (let i = 0; i < n.length; i++) {
        const r = t[i], o = r.transform, c = e.data.field(r.field);
        s.set(r.field, ae(o, c, n[i]));
    }
    return s;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */ function Fe(t, e, n) {
    const s = new Map;
    for (const i of t) {
        const t = i.transform, r = n.data.field(i.field);
        s.set(i.field, ue(t, r, e));
    }
    return s;
}

/** A mutation that deletes the document at the given key. */ class ke extends Re {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 2 /* Delete */ , this.fieldTransforms = [];
    }
}

class Oe extends Re {
    constructor(t, e) {
        super(), this.key = t, this.precondition = e, this.type = 3 /* Verify */ , this.fieldTransforms = [];
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
 */ class $e {
    // TODO(b/33078163): just use simplest form of existence filter for now
    constructor(t) {
        this.count = t;
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
 * Error Codes describing the different ways GRPC can fail. These are copied
 * directly from GRPC's sources here:
 *
 * https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
 *
 * Important! The names of these identifiers matter because the string forms
 * are used for reverse lookups from the webchannel stream. Do NOT change the
 * names of these identifiers or change this into a const enum.
 */ var Me, Le;

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function Be(t) {
    switch (t) {
      case p.OK:
        return P();

      case p.CANCELLED:
      case p.UNKNOWN:
      case p.DEADLINE_EXCEEDED:
      case p.RESOURCE_EXHAUSTED:
      case p.INTERNAL:
      case p.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case p.UNAUTHENTICATED:
        return !1;

      case p.INVALID_ARGUMENT:
      case p.NOT_FOUND:
      case p.ALREADY_EXISTS:
      case p.PERMISSION_DENIED:
      case p.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case p.ABORTED:
      case p.OUT_OF_RANGE:
      case p.UNIMPLEMENTED:
      case p.DATA_LOSS:
        return !0;

      default:
        return P();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */
function qe(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return R("GRPC error has no .code"), p.UNKNOWN;
    switch (t) {
      case Me.OK:
        return p.OK;

      case Me.CANCELLED:
        return p.CANCELLED;

      case Me.UNKNOWN:
        return p.UNKNOWN;

      case Me.DEADLINE_EXCEEDED:
        return p.DEADLINE_EXCEEDED;

      case Me.RESOURCE_EXHAUSTED:
        return p.RESOURCE_EXHAUSTED;

      case Me.INTERNAL:
        return p.INTERNAL;

      case Me.UNAVAILABLE:
        return p.UNAVAILABLE;

      case Me.UNAUTHENTICATED:
        return p.UNAUTHENTICATED;

      case Me.INVALID_ARGUMENT:
        return p.INVALID_ARGUMENT;

      case Me.NOT_FOUND:
        return p.NOT_FOUND;

      case Me.ALREADY_EXISTS:
        return p.ALREADY_EXISTS;

      case Me.PERMISSION_DENIED:
        return p.PERMISSION_DENIED;

      case Me.FAILED_PRECONDITION:
        return p.FAILED_PRECONDITION;

      case Me.ABORTED:
        return p.ABORTED;

      case Me.OUT_OF_RANGE:
        return p.OUT_OF_RANGE;

      case Me.UNIMPLEMENTED:
        return p.UNIMPLEMENTED;

      case Me.DATA_LOSS:
        return p.DATA_LOSS;

      default:
        return P();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Le = Me || (Me = {}))[Le.OK = 0] = "OK", Le[Le.CANCELLED = 1] = "CANCELLED", 
Le[Le.UNKNOWN = 2] = "UNKNOWN", Le[Le.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Le[Le.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Le[Le.NOT_FOUND = 5] = "NOT_FOUND", 
Le[Le.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Le[Le.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Le[Le.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Le[Le.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Le[Le.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Le[Le.ABORTED = 10] = "ABORTED", 
Le[Le.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Le[Le.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Le[Le.INTERNAL = 13] = "INTERNAL", Le[Le.UNAVAILABLE = 14] = "UNAVAILABLE", Le[Le.DATA_LOSS = 15] = "DATA_LOSS";

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
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class Ue {
    constructor(t, e) {
        this.comparator = t, this.root = e || Ke.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    insert(t, e) {
        return new Ue(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, Ke.BLACK, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(t) {
        return new Ue(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Ke.BLACK, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(t) {
        let e = this.root;
        for (;!e.isEmpty(); ) {
            const n = this.comparator(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(t) {
        // Number of nodes that were pruned when descending right
        let e = 0, n = this.root;
        for (;!n.isEmpty(); ) {
            const s = this.comparator(t, n.key);
            if (0 === s) return e + n.left.size;
            s < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }
    isEmpty() {
        return this.root.isEmpty();
    }
    // Returns the total number of nodes in the map.
    get size() {
        return this.root.size;
    }
    // Returns the minimum key in the map.
    minKey() {
        return this.root.minKey();
    }
    // Returns the maximum key in the map.
    maxKey() {
        return this.root.maxKey();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.root.inorderTraversal(t);
    }
    forEach(t) {
        this.inorderTraversal(((e, n) => (t(e, n), !1)));
    }
    toString() {
        const t = [];
        return this.inorderTraversal(((e, n) => (t.push(`${e}:${n}`), !1))), `{${t.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.root.reverseTraversal(t);
    }
    // Returns an iterator over the SortedMap.
    getIterator() {
        return new Qe(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(t) {
        return new Qe(this.root, t, this.comparator, !1);
    }
    getReverseIterator() {
        return new Qe(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(t) {
        return new Qe(this.root, t, this.comparator, !0);
    }
}

 // end SortedMap
// An iterator over an LLRBNode.
class Qe {
    constructor(t, e, n, s) {
        this.isReverse = s, this.nodeStack = [];
        let i = 1;
        for (;!t.isEmpty(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        s && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.nodeStack.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
            this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
        }
    }
    getNext() {
        let t = this.nodeStack.pop();
        const e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse) for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), t = t.right; else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), 
        t = t.left;
        return e;
    }
    hasNext() {
        return this.nodeStack.length > 0;
    }
    peek() {
        if (0 === this.nodeStack.length) return null;
        const t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }
}

 // end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class Ke {
    constructor(t, e, n, s, i) {
        this.key = t, this.value = e, this.color = null != n ? n : Ke.RED, this.left = null != s ? s : Ke.EMPTY, 
        this.right = null != i ? i : Ke.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(t, e, n, s, i) {
        return new Ke(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != s ? s : this.left, null != i ? i : this.right);
    }
    isEmpty() {
        return !1;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
    }
    // Returns the minimum node in the tree.
    min() {
        return this.left.isEmpty() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    minKey() {
        return this.min().key;
    }
    // Returns the maximum key in the tree.
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    // Returns new tree, with the key/value added.
    insert(t, e, n) {
        let s = this;
        const i = n(t, s.key);
        return s = i < 0 ? s.copy(null, null, null, s.left.insert(t, e, n), null) : 0 === i ? s.copy(null, e, null, null, null) : s.copy(null, null, null, null, s.right.insert(t, e, n)), 
        s.fixUp();
    }
    removeMin() {
        if (this.left.isEmpty()) return Ke.EMPTY;
        let t = this;
        return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), t = t.copy(null, null, null, t.left.removeMin(), null), 
        t.fixUp();
    }
    // Returns new tree, with the specified item removed.
    remove(t, e) {
        let n, s = this;
        if (e(t, s.key) < 0) s.left.isEmpty() || s.left.isRed() || s.left.left.isRed() || (s = s.moveRedLeft()), 
        s = s.copy(null, null, null, s.left.remove(t, e), null); else {
            if (s.left.isRed() && (s = s.rotateRight()), s.right.isEmpty() || s.right.isRed() || s.right.left.isRed() || (s = s.moveRedRight()), 
            0 === e(t, s.key)) {
                if (s.right.isEmpty()) return Ke.EMPTY;
                n = s.right.min(), s = s.copy(n.key, n.value, null, null, s.right.removeMin());
            }
            s = s.copy(null, null, null, null, s.right.remove(t, e));
        }
        return s.fixUp();
    }
    isRed() {
        return this.color;
    }
    // Returns new tree after performing any needed rotations.
    fixUp() {
        let t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), 
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
    }
    moveRedLeft() {
        let t = this.colorFlip();
        return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), 
        t = t.rotateLeft(), t = t.colorFlip()), t;
    }
    moveRedRight() {
        let t = this.colorFlip();
        return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t;
    }
    rotateLeft() {
        const t = this.copy(null, null, Ke.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
        const t = this.copy(null, null, Ke.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
        const t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }
    // For testing.
    checkMaxDepth() {
        const t = this.check();
        return Math.pow(2, t) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    check() {
        if (this.isRed() && this.left.isRed()) throw P();
        if (this.right.isRed()) throw P();
        const t = this.left.check();
        if (t !== this.right.check()) throw P();
        return t + (this.isRed() ? 0 : 1);
    }
}

 // end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Ke.EMPTY = null, Ke.RED = !0, Ke.BLACK = !1;

// end LLRBEmptyNode
Ke.EMPTY = new 
// Represents an empty node (a leaf node in the Red-Black Tree).
class {
    constructor() {
        this.size = 0;
    }
    get key() {
        throw P();
    }
    get value() {
        throw P();
    }
    get color() {
        throw P();
    }
    get left() {
        throw P();
    }
    get right() {
        throw P();
    }
    // Returns a copy of the current node.
    copy(t, e, n, s, i) {
        return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    insert(t, e, n) {
        return new Ke(t, e);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(t, e) {
        return this;
    }
    isEmpty() {
        return !0;
    }
    inorderTraversal(t) {
        return !1;
    }
    reverseTraversal(t) {
        return !1;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    isRed() {
        return !1;
    }
    // For testing.
    checkMaxDepth() {
        return !0;
    }
    check() {
        return 0;
    }
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
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
class je {
    constructor(t) {
        this.comparator = t, this.data = new Ue(this.comparator);
    }
    has(t) {
        return null !== this.data.get(t);
    }
    first() {
        return this.data.minKey();
    }
    last() {
        return this.data.maxKey();
    }
    get size() {
        return this.data.size;
    }
    indexOf(t) {
        return this.data.indexOf(t);
    }
    /** Iterates elements in order defined by "comparator" */    forEach(t) {
        this.data.inorderTraversal(((e, n) => (t(e), !1)));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */    forEachInRange(t, e) {
        const n = this.data.getIteratorFrom(t[0]);
        for (;n.hasNext(); ) {
            const s = n.getNext();
            if (this.comparator(s.key, t[1]) >= 0) return;
            e(s.key);
        }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */    forEachWhile(t, e) {
        let n;
        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); ) {
            if (!t(n.getNext().key)) return;
        }
    }
    /** Finds the least element greater than or equal to `elem`. */    firstAfterOrEqual(t) {
        const e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null;
    }
    getIterator() {
        return new We(this.data.getIterator());
    }
    getIteratorFrom(t) {
        return new We(this.data.getIteratorFrom(t));
    }
    /** Inserts or updates an element */    add(t) {
        return this.copy(this.data.remove(t).insert(t, !0));
    }
    /** Deletes an element */    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    isEmpty() {
        return this.data.isEmpty();
    }
    unionWith(t) {
        let e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((t => {
            e = e.add(t);
        })), e;
    }
    isEqual(t) {
        if (!(t instanceof je)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.data.getIterator(), n = t.data.getIterator();
        for (;e.hasNext(); ) {
            const t = e.getNext().key, s = n.getNext().key;
            if (0 !== this.comparator(t, s)) return !1;
        }
        return !0;
    }
    toArray() {
        const t = [];
        return this.forEach((e => {
            t.push(e);
        })), t;
    }
    toString() {
        const t = [];
        return this.forEach((e => t.push(e))), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
        const e = new je(this.comparator);
        return e.data = t, e;
    }
}

class We {
    constructor(t) {
        this.iter = t;
    }
    getNext() {
        return this.iter.getNext().key;
    }
    hasNext() {
        return this.iter.hasNext();
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
 */ const Ge = new Ue(nt.comparator);

function ze() {
    return Ge;
}

const He = new Ue(nt.comparator);

function Je() {
    return He;
}

const Ye = new Ue(nt.comparator);

function Xe() {
    return Ye;
}

const Ze = new je(nt.comparator);

function tn(...t) {
    let e = Ze;
    for (const n of t) e = e.add(n);
    return e;
}

const en = new je(N);

function nn() {
    return en;
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
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class sn {
    constructor(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    s, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = s, 
        this.resolvedLimboDocuments = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
    static createSynthesizedRemoteEventForCurrentChange(t, e) {
        const n = new Map;
        return n.set(t, rn.createSynthesizedTargetChangeForCurrentChange(t, e)), new sn(O.min(), n, nn(), ze(), tn());
    }
}

/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */ class rn {
    constructor(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    s, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = s, 
        this.removedDocuments = i;
    }
    /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */    static createSynthesizedTargetChangeForCurrentChange(t, e) {
        return new rn(j.EMPTY_BYTE_STRING, e, tn(), tn(), tn());
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
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class on {
    constructor(
    /** The new document applies to all of these targets. */
    t, 
    /** The new document is removed from all of these targets. */
    e, 
    /** The key of the document for this change. */
    n, 
    /**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
    s) {
        this.v = t, this.removedTargetIds = e, this.key = n, this.P = s;
    }
}

class cn {
    constructor(t, e) {
        this.targetId = t, this.V = e;
    }
}

class un {
    constructor(
    /** What kind of change occurred to the watch target. */
    t, 
    /** The target IDs that were added/removed/set. */
    e, 
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
    n = j.EMPTY_BYTE_STRING
    /** An RPC error indicating why the watch failed. */ , s = null) {
        this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = s;
    }
}

/** Tracks the internal state of a Watch target. */ class an {
    constructor() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.S = 0, 
        /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
        this.D = fn(), 
        /** See public getters for explanations of these fields. */
        this.C = j.EMPTY_BYTE_STRING, this.N = !1, 
        /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
        this.F = !0;
    }
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */    get current() {
        return this.N;
    }
    /** The last resume token sent to us for this target. */    get resumeToken() {
        return this.C;
    }
    /** Whether this target has pending target adds or target removes. */    get k() {
        return 0 !== this.S;
    }
    /** Whether we have modified any state that should trigger a snapshot. */    get O() {
        return this.F;
    }
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */    $(t) {
        t.approximateByteSize() > 0 && (this.F = !0, this.C = t);
    }
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */    M() {
        let t = tn(), e = tn(), n = tn();
        return this.D.forEach(((s, i) => {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(s);
                break;

              case 2 /* Modified */ :
                e = e.add(s);
                break;

              case 1 /* Removed */ :
                n = n.add(s);
                break;

              default:
                P();
            }
        })), new rn(this.C, this.N, t, e, n);
    }
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */    L() {
        this.F = !1, this.D = fn();
    }
    B(t, e) {
        this.F = !0, this.D = this.D.insert(t, e);
    }
    q(t) {
        this.F = !0, this.D = this.D.remove(t);
    }
    U() {
        this.S += 1;
    }
    K() {
        this.S -= 1;
    }
    j() {
        this.F = !0, this.N = !0;
    }
}

/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */
class hn {
    constructor(t) {
        this.W = t, 
        /** The internal state of all tracked targets. */
        this.G = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.H = ze(), 
        /** A mapping of document keys to their set of target IDs. */
        this.J = ln(), 
        /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
        this.Y = new je(N);
    }
    /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */    X(t) {
        for (const e of t.v) t.P && t.P.isFoundDocument() ? this.Z(e, t.P) : this.tt(e, t.key, t.P);
        for (const e of t.removedTargetIds) this.tt(e, t.key, t.P);
    }
    /** Processes and adds the WatchTargetChange to the current set of changes. */    et(t) {
        this.forEachTarget(t, (e => {
            const n = this.nt(e);
            switch (t.state) {
              case 0 /* NoChange */ :
                this.st(e) && n.$(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.K(), n.k || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                n.L(), n.$(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                n.K(), n.k || this.removeTarget(e);
                break;

              case 3 /* Current */ :
                this.st(e) && (n.j(), n.$(t.resumeToken));
                break;

              case 4 /* Reset */ :
                this.st(e) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                this.it(e), n.$(t.resumeToken));
                break;

              default:
                P();
            }
        }));
    }
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */    forEachTarget(t, e) {
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.G.forEach(((t, n) => {
            this.st(n) && e(n);
        }));
    }
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */    rt(t) {
        const e = t.targetId, n = t.V.count, s = this.ot(e);
        if (s) {
            const t = s.target;
            if (Rt(t)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                const n = new nt(t.path);
                this.tt(e, n, gt.newNoDocument(n, O.min()));
            } else V(1 === n); else {
                this.ct(e) !== n && (
                // Existence filter mismatch: We reset the mapping and raise a new
                // snapshot with `isFromCache:true`.
                this.it(e), this.Y = this.Y.add(e));
            }
        }
    }
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */    ut(t) {
        const e = new Map;
        this.G.forEach(((n, s) => {
            const i = this.ot(s);
            if (i) {
                if (n.current && Rt(i.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    const e = new nt(i.target.path);
                    null !== this.H.get(e) || this.at(s, e) || this.tt(s, e, gt.newNoDocument(e, t));
                }
                n.O && (e.set(s, n.M()), n.L());
            }
        }));
        let n = tn();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.J.forEach(((t, e) => {
            let s = !0;
            e.forEachWhile((t => {
                const e = this.ot(t);
                return !e || 2 /* LimboResolution */ === e.purpose || (s = !1, !1);
            })), s && (n = n.add(t));
        }));
        const s = new sn(t, e, this.Y, this.H, n);
        return this.H = ze(), this.J = ln(), this.Y = new je(N), s;
    }
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    Z(t, e) {
        if (!this.st(t)) return;
        const n = this.at(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
        this.nt(t).B(e.key, n), this.H = this.H.insert(e.key, e), this.J = this.J.insert(e.key, this.ht(e.key).add(t));
    }
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    tt(t, e, n) {
        if (!this.st(t)) return;
        const s = this.nt(t);
        this.at(t, e) ? s.B(e, 1 /* Removed */) : 
        // The document may have entered and left the target before we raised a
        // snapshot, so we can just ignore the change.
        s.q(e), this.J = this.J.insert(e, this.ht(e).delete(t)), n && (this.H = this.H.insert(e, n));
    }
    removeTarget(t) {
        this.G.delete(t);
    }
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */    ct(t) {
        const e = this.nt(t).M();
        return this.W.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
    }
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */    U(t) {
        this.nt(t).U();
    }
    nt(t) {
        let e = this.G.get(t);
        return e || (e = new an, this.G.set(t, e)), e;
    }
    ht(t) {
        let e = this.J.get(t);
        return e || (e = new je(N), this.J = this.J.insert(t, e)), e;
    }
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */    st(t) {
        const e = null !== this.ot(t);
        return e || A("WatchChangeAggregator", "Detected inactive target", t), e;
    }
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */    ot(t) {
        const e = this.G.get(t);
        return e && e.k ? null : this.W.lt(t);
    }
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */    it(t) {
        this.G.set(t, new an);
        this.W.getRemoteKeysForTarget(t).forEach((e => {
            this.tt(t, e, /*updatedDocument=*/ null);
        }));
    }
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */    at(t, e) {
        return this.W.getRemoteKeysForTarget(t).has(e);
    }
}

function ln() {
    return new Ue(nt.comparator);
}

function fn() {
    return new Ue(nt.comparator);
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
 */ const dn = (() => {
    const t = {
        asc: "ASCENDING",
        desc: "DESCENDING"
    };
    return t;
})(), wn = (() => {
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
class _n {
    constructor(t, e) {
        this.databaseId = t, this.I = e;
    }
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function mn(t, e) {
    if (t.I) {
        return `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`;
    }
    return {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */
function yn(t, e) {
    return t.I ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function gn(t, e) {
    return mn(t, e.toTimestamp());
}

function pn(t) {
    return V(!!t), O.fromTimestamp(function(t) {
        const e = G(t);
        return new k(e.seconds, e.nanos);
    }(t));
}

function En(t, e) {
    return function(t) {
        return new q([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).canonicalString();
}

function Tn(t) {
    const e = q.fromString(t);
    return V(Hn(e)), e;
}

function In(t, e) {
    return En(t.databaseId, e.path);
}

function An(t, e) {
    const n = Tn(e);
    if (n.get(1) !== t.databaseId.projectId) throw new E(p.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
    if (n.get(3) !== t.databaseId.database) throw new E(p.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
    return new nt(Pn(n));
}

function Rn(t, e) {
    return En(t.databaseId, e);
}

function bn(t) {
    const e = Tn(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? q.emptyPath() : Pn(e);
}

function vn(t) {
    return new q([ "projects", t.databaseId.projectId, "databases", t.databaseId.database ]).canonicalString();
}

function Pn(t) {
    return V(t.length > 4 && "documents" === t.get(4)), t.popFirst(5);
}

/** Creates a Document proto from key and fields (but no create/update time) */ function Vn(t, e, n) {
    return {
        name: In(t, e),
        fields: n.toProto().mapValue.fields
    };
}

function Sn(t, e, n) {
    const s = An(t, e.name), i = pn(e.updateTime), r = new mt({
        mapValue: {
            fields: e.fields
        }
    }), o = gt.newFoundDocument(s, i, r);
    return n && o.setHasCommittedMutations(), n ? o.setHasCommittedMutations() : o;
}

function Dn(t, e) {
    return "found" in e ? function(t, e) {
        V(!!e.found), e.found.name, e.found.updateTime;
        const n = An(t, e.found.name), s = pn(e.found.updateTime), i = new mt({
            mapValue: {
                fields: e.found.fields
            }
        });
        return gt.newFoundDocument(n, s, i);
    }(t, e) : "missing" in e ? function(t, e) {
        V(!!e.missing), V(!!e.readTime);
        const n = An(t, e.missing), s = pn(e.readTime);
        return gt.newNoDocument(n, s);
    }(t, e) : P();
}

function Cn(t, e) {
    let n;
    if ("targetChange" in e) {
        e.targetChange;
        // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset
        const s = function(t) {
            return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : P();
        }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], r = function(t, e) {
            return t.I ? (V(void 0 === e || "string" == typeof e), j.fromBase64String(e || "")) : (V(void 0 === e || e instanceof Uint8Array), 
            j.fromUint8Array(e || new Uint8Array));
        }(t, e.targetChange.resumeToken), o = e.targetChange.cause, c = o && function(t) {
            const e = void 0 === t.code ? p.UNKNOWN : qe(t.code);
            return new E(e, t.message || "");
        }
        /**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */ (o);
        n = new un(s, i, r, c || null);
    } else if ("documentChange" in e) {
        e.documentChange;
        const s = e.documentChange;
        s.document, s.document.name, s.document.updateTime;
        const i = An(t, s.document.name), r = pn(s.document.updateTime), o = new mt({
            mapValue: {
                fields: s.document.fields
            }
        }), c = gt.newFoundDocument(i, r, o), u = s.targetIds || [], a = s.removedTargetIds || [];
        n = new on(u, a, c.key, c);
    } else if ("documentDelete" in e) {
        e.documentDelete;
        const s = e.documentDelete;
        s.document;
        const i = An(t, s.document), r = s.readTime ? pn(s.readTime) : O.min(), o = gt.newNoDocument(i, r), c = s.removedTargetIds || [];
        n = new on([], c, o.key, o);
    } else if ("documentRemove" in e) {
        e.documentRemove;
        const s = e.documentRemove;
        s.document;
        const i = An(t, s.document), r = s.removedTargetIds || [];
        n = new on([], r, i, null);
    } else {
        if (!("filter" in e)) return P();
        {
            e.filter;
            const t = e.filter;
            t.targetId;
            const s = t.count || 0, i = new $e(s), r = t.targetId;
            n = new cn(r, i);
        }
    }
    return n;
}

function Nn(t, e) {
    let n;
    if (e instanceof De) n = {
        update: Vn(t, e.key, e.value)
    }; else if (e instanceof ke) n = {
        delete: In(t, e.key)
    }; else if (e instanceof Ce) n = {
        update: Vn(t, e.key, e.data),
        updateMask: zn(e.fieldMask)
    }; else {
        if (!(e instanceof Oe)) return P();
        n = {
            verify: In(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((t => function(t, e) {
        const n = e.transform;
        if (n instanceof le) return {
            fieldPath: e.field.canonicalString(),
            setToServerValue: "REQUEST_TIME"
        };
        if (n instanceof fe) return {
            fieldPath: e.field.canonicalString(),
            appendMissingElements: {
                values: n.elements
            }
        };
        if (n instanceof we) return {
            fieldPath: e.field.canonicalString(),
            removeAllFromArray: {
                values: n.elements
            }
        };
        if (n instanceof me) return {
            fieldPath: e.field.canonicalString(),
            increment: n.A
        };
        throw P();
    }(0, t)))), e.precondition.isNone || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: gn(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : P();
    }(t, e.precondition)), n;
}

function xn(t, e) {
    const n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Ie.updateTime(pn(t.updateTime)) : void 0 !== t.exists ? Ie.exists(t.exists) : Ie.none();
    }(e.currentDocument) : Ie.none(), s = e.updateTransforms ? e.updateTransforms.map((e => function(t, e) {
        let n = null;
        if ("setToServerValue" in e) V("REQUEST_TIME" === e.setToServerValue), n = new le; else if ("appendMissingElements" in e) {
            const t = e.appendMissingElements.values || [];
            n = new fe(t);
        } else if ("removeAllFromArray" in e) {
            const t = e.removeAllFromArray.values || [];
            n = new we(t);
        } else "increment" in e ? n = new me(t, e.increment) : P();
        const s = Q.fromServerFormat(e.fieldPath);
        return new pe(s, n);
    }(t, e))) : [];
    if (e.update) {
        e.update.name;
        const i = An(t, e.update.name), r = new mt({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            const t = function(t) {
                const e = t.fieldPaths || [];
                return new K(e.map((t => Q.fromServerFormat(t))));
            }(e.updateMask);
            return new Ce(i, r, t, n, s);
        }
        return new De(i, r, n, s);
    }
    if (e.delete) {
        const s = An(t, e.delete);
        return new ke(s, n);
    }
    if (e.verify) {
        const s = An(t, e.verify);
        return new Oe(s, n);
    }
    return P();
}

function Fn(t, e) {
    return t && t.length > 0 ? (V(void 0 !== e), t.map((t => function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        let n = t.updateTime ? pn(t.updateTime) : pn(e);
        return n.isEqual(O.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = pn(e)), new Te(n, t.transformResults || []);
    }(t, e)))) : [];
}

function kn(t, e) {
    return {
        documents: [ Rn(t, e.path) ]
    };
}

function On(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    const n = {
        structuredQuery: {}
    }, s = e.path;
    null !== e.collectionGroup ? (n.parent = Rn(t, s), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Rn(t, s.popLast()), n.structuredQuery.from = [ {
        collectionId: s.lastSegment()
    } ]);
    const i = function(t) {
        if (0 === t.length) return;
        const e = t.map((t => 
        // visible for testing
        function(t) {
            if ("==" /* EQUAL */ === t.op) {
                if (wt(t.value)) return {
                    unaryFilter: {
                        field: Kn(t.field),
                        op: "IS_NAN"
                    }
                };
                if (dt(t.value)) return {
                    unaryFilter: {
                        field: Kn(t.field),
                        op: "IS_NULL"
                    }
                };
            } else if ("!=" /* NOT_EQUAL */ === t.op) {
                if (wt(t.value)) return {
                    unaryFilter: {
                        field: Kn(t.field),
                        op: "IS_NOT_NAN"
                    }
                };
                if (dt(t.value)) return {
                    unaryFilter: {
                        field: Kn(t.field),
                        op: "IS_NOT_NULL"
                    }
                };
            }
            return {
                fieldFilter: {
                    field: Kn(t.field),
                    op: Qn(t.op),
                    value: t.value
                }
            };
        }(t)));
        if (1 === e.length) return e[0];
        return {
            compositeFilter: {
                op: "AND",
                filters: e
            }
        };
    }(e.filters);
    i && (n.structuredQuery.where = i);
    const r = function(t) {
        if (0 === t.length) return;
        return t.map((t => 
        // visible for testing
        function(t) {
            return {
                field: Kn(t.field),
                direction: Un(t.dir)
            };
        }(t)));
    }(e.orderBy);
    r && (n.structuredQuery.orderBy = r);
    const o = function(t, e) {
        return t.I || Z(e) ? e : {
            value: e
        };
    }
    /**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 */ (t, e.limit);
    return null !== o && (n.structuredQuery.limit = o), e.startAt && (n.structuredQuery.startAt = Bn(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Bn(e.endAt)), n;
}

function $n(t) {
    let e = bn(t.parent);
    const n = t.structuredQuery, s = n.from ? n.from.length : 0;
    let i = null;
    if (s > 0) {
        V(1 === s);
        const t = n.from[0];
        t.allDescendants ? i = t.collectionId : e = e.child(t.collectionId);
    }
    let r = [];
    n.where && (r = Ln(n.where));
    let o = [];
    n.orderBy && (o = n.orderBy.map((t => function(t) {
        return new $t(jn(t.field), 
        // visible for testing
        function(t) {
            switch (t) {
              case "ASCENDING":
                return "asc" /* ASCENDING */;

              case "DESCENDING":
                return "desc" /* DESCENDING */;

              default:
                return;
            }
        }
        // visible for testing
        (t.direction));
    }(t))));
    let c = null;
    n.limit && (c = function(t) {
        let e;
        return e = "object" == typeof t ? t.value : t, Z(e) ? null : e;
    }(n.limit));
    let u = null;
    n.startAt && (u = qn(n.startAt));
    let a = null;
    return n.endAt && (a = qn(n.endAt)), Ut(e, i, o, r, c, "F" /* First */ , u, a);
}

function Mn(t, e) {
    const n = function(t, e) {
        switch (e) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return P();
        }
    }(0, e.purpose);
    return null == n ? null : {
        "goog-listen-tags": n
    };
}

function Ln(t) {
    return t ? void 0 !== t.unaryFilter ? [ Gn(t) ] : void 0 !== t.fieldFilter ? [ Wn(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((t => Ln(t))).reduce(((t, e) => t.concat(e))) : P() : [];
}

function Bn(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function qn(t) {
    const e = !!t.before, n = t.values || [];
    return new kt(n, e);
}

// visible for testing
function Un(t) {
    return dn[t];
}

function Qn(t) {
    return wn[t];
}

function Kn(t) {
    return {
        fieldPath: t.canonicalString()
    };
}

function jn(t) {
    return Q.fromServerFormat(t.fieldPath);
}

function Wn(t) {
    return bt.create(jn(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return P();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function Gn(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        const e = jn(t.unaryFilter.field);
        return bt.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        const n = jn(t.unaryFilter.field);
        return bt.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        const s = jn(t.unaryFilter.field);
        return bt.create(s, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        const i = jn(t.unaryFilter.field);
        return bt.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return P();
    }
}

function zn(t) {
    const e = [];
    return t.fields.forEach((t => e.push(t.canonicalString()))), {
        fieldPaths: e
    };
}

function Hn(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
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
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function Jn(t) {
    let e = "";
    for (let n = 0; n < t.length; n++) e.length > 0 && (e = Xn(e)), e = Yn(t.get(n), e);
    return Xn(e);
}

/** Encodes a single segment of a resource path into the given result */ function Yn(t, e) {
    let n = e;
    const s = t.length;
    for (let e = 0; e < s; e++) {
        const s = t.charAt(e);
        switch (s) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += s;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Xn(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function Zn(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    const e = t.length;
    if (V(e >= 2), 2 === e) return V("" === t.charAt(0) && "" === t.charAt(1)), q.emptyPath();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        const n = e - 2, s = [];
    let i = "";
    for (let r = 0; r < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        const e = t.indexOf("", r);
        (e < 0 || e > n) && P();
        switch (t.charAt(e + 1)) {
          case "":
            const n = t.substring(r, e);
            let o;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            o = n : (i += n, o = i, i = ""), s.push(o);
            break;

          case "":
            i += t.substring(r, e), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(r, e + 1);
            break;

          default:
            P();
        }
        r = e + 2;
    }
    return new q(s);
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
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */
class ts {
    constructor(t, e) {
        this.seconds = t, this.nanoseconds = e;
    }
}

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */ class es {
    constructor(t, 
    /** Whether to allow shared access from multiple tabs. */
    e, n) {
        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
    }
}

/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ es.store = "owner", 
/**
 * The key string used for the single object that exists in the
 * DbPrimaryClient store.
 */
es.key = "owner";

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
class ns {
    constructor(
    /**
     * The normalized user ID to which this queue belongs.
     */
    t, 
    /**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    e, 
    /**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
    n) {
        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
    }
}

/** Name of the IndexedDb object store.  */ ns.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
ns.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
class ss {
    constructor(
    /**
     * The normalized user ID to which this batch belongs.
     */
    t, 
    /**
     * An identifier for this batch, allocated using an auto-generated key.
     */
    e, 
    /**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
    n, 
    /**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
    s, 
    /**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
    i) {
        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = s, 
        this.mutations = i;
    }
}

/** Name of the IndexedDb object store.  */ ss.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
ss.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
ss.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
ss.userMutationsKeyPath = [ "userId", "batchId" ];

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
class is {
    constructor() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    static prefixForUser(t) {
        return [ t ];
    }
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */    static prefixForPath(t, e) {
        return [ t, Jn(e) ];
    }
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */    static key(t, e, n) {
        return [ t, Jn(e), n ];
    }
}

is.store = "documentMutations", 
/**
 * Because we store all the useful information for this store in the key,
 * there is no useful information to store as the value. The raw (unencoded)
 * path cannot be stored because IndexedDb doesn't store prototype
 * information.
 */
is.PLACEHOLDER = new is;

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
class rs {
    constructor(t, e) {
        this.path = t, this.readTime = e;
    }
}

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ class os {
    constructor(t, e) {
        this.path = t, this.version = e;
    }
}

/**
 * An object to be stored in the 'remoteDocuments' store in IndexedDb.
 * It represents either:
 *
 * - A complete document.
 * - A "no document" representing a document that is known not to exist (at
 * some version).
 * - An "unknown document" representing a document that is known to exist (at
 * some version) but whose contents are unknown.
 *
 * Note: This is the persisted equivalent of a MaybeDocument and could perhaps
 * be made more general if necessary.
 */ class cs {
    // TODO: We are currently storing full document keys almost three times
    // (once as part of the primary key, once - partly - as `parentPath` and once
    // inside the encoded documents). During our next migration, we should
    // rewrite the primary key as parentPath + document ID which would allow us
    // to drop one value.
    constructor(
    /**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
    t, 
    /**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
    e, 
    /**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
    n, 
    /**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
    s, 
    /**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
    i, 
    /**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
    r) {
        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = s, 
        this.readTime = i, this.parentPath = r;
    }
}

cs.store = "remoteDocuments", 
/**
 * An index that provides access to all entries sorted by read time (which
 * corresponds to the last modification time of each row).
 *
 * This index is used to provide a changelog for Multi-Tab.
 */
cs.readTimeIndex = "readTimeIndex", cs.readTimeIndexPath = "readTime", 
/**
 * An index that provides access to documents in a collection sorted by read
 * time.
 *
 * This index is used to allow the RemoteDocumentCache to fetch newly changed
 * documents in a collection.
 */
cs.collectionReadTimeIndex = "collectionReadTimeIndex", cs.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
class us {
    /**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
    constructor(t) {
        this.byteSize = t;
    }
}

us.store = "remoteDocumentGlobal", us.key = "remoteDocumentGlobalKey";

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
class as {
    constructor(
    /**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
    t, 
    /**
     * The canonical string representing this query. This is not unique.
     */
    e, 
    /**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
    n, 
    /**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
    s, 
    /**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
    i, 
    /**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
    r, 
    /**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
    o) {
        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = s, 
        this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = r, this.query = o;
    }
}

as.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
as.keyPath = "targetId", 
/** The name of the queryTargets index. */
as.queryTargetsIndexName = "queryTargetsIndex", 
/**
 * The index of all canonicalIds to the targets that they match. This is not
 * a unique mapping because canonicalId does not promise a unique name for all
 * possible queries, so we append the targetId to make the mapping unique.
 */
as.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
class hs {
    constructor(
    /**
     * The targetId identifying a target or 0 for a sentinel row.
     */
    t, 
    /**
     * The path to the document, as encoded in the key.
     */
    e, 
    /**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
    n) {
        this.targetId = t, this.path = e, this.sequenceNumber = n;
    }
}

/** Name of the IndexedDb object store.  */ hs.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
hs.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
hs.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
hs.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
class ls {
    constructor(
    /**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
    t, 
    /**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
    e, 
    /**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
    n, 
    /**
     * The number of targets persisted.
     */
    s) {
        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
        this.targetCount = s;
    }
}

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ ls.key = "targetGlobalKey", ls.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
class fs {
    constructor(
    /**
     * The collectionId (e.g. 'messages')
     */
    t, 
    /**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
    e) {
        this.collectionId = t, this.parent = e;
    }
}

/** Name of the IndexedDb object store. */ fs.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
fs.keyPath = [ "collectionId", "parent" ];

/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */
class ds {
    constructor(
    // Note: Previous schema versions included a field
    // "lastProcessedDocumentChangeId". Don't use anymore.
    /** The auto-generated client id assigned at client startup. */
    t, 
    /** The last time this state was updated. */
    e, 
    /** Whether the client's network connection is enabled. */
    n, 
    /** Whether this client is running in a foreground tab. */
    s) {
        this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = s;
    }
}

/** Name of the IndexedDb object store. */ ds.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
ds.keyPath = "clientId";

/**
 * A object representing a bundle loaded by the SDK.
 */
class ws {
    constructor(
    /** The ID of the loaded bundle. */
    t, 
    /** The create time of the loaded bundle. */
    e, 
    /** The schema version of the loaded bundle. */
    n) {
        this.bundleId = t, this.createTime = e, this.version = n;
    }
}

/** Name of the IndexedDb object store. */ ws.store = "bundles", ws.keyPath = "bundleId";

/**
 * A object representing a named query loaded by the SDK via a bundle.
 */
class _s {
    constructor(
    /** The name of the query. */
    t, 
    /** The read time of the results saved in the bundle from the named query. */
    e, 
    /** The query saved in the bundle. */
    n) {
        this.name = t, this.readTime = e, this.bundledQuery = n;
    }
}

/** Name of the IndexedDb object store. */ _s.store = "namedQueries", _s.keyPath = "name";

// Visible for testing
const ms = [ ...[ ...[ ...[ ...[ ns.store, ss.store, is.store, cs.store, as.store, es.store, ls.store, hs.store ], ds.store ], us.store ], fs.store ], ws.store, _s.store ], ys = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
class gs {
    constructor() {
        this.onCommittedListeners = [];
    }
    addOnCommittedListener(t) {
        this.onCommittedListeners.push(t);
    }
    raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach((t => t()));
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
 */ class ps {
    constructor() {
        this.promise = new Promise(((t, e) => {
            this.resolve = t, this.reject = e;
        }));
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
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class Es {
    constructor(t) {
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
        this.nextCallback = null, this.catchCallback = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.isDone = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.callbackAttached = !1, t((t => {
            this.isDone = !0, this.result = t, this.nextCallback && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            this.nextCallback(t);
        }), (t => {
            this.isDone = !0, this.error = t, this.catchCallback && this.catchCallback(t);
        }));
    }
    catch(t) {
        return this.next(void 0, t);
    }
    next(t, e) {
        return this.callbackAttached && P(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new Es(((n, s) => {
            this.nextCallback = e => {
                this.wrapSuccess(t, e).next(n, s);
            }, this.catchCallback = t => {
                this.wrapFailure(e, t).next(n, s);
            };
        }));
    }
    toPromise() {
        return new Promise(((t, e) => {
            this.next(t, e);
        }));
    }
    wrapUserFunction(t) {
        try {
            const e = t();
            return e instanceof Es ? e : Es.resolve(e);
        } catch (t) {
            return Es.reject(t);
        }
    }
    wrapSuccess(t, e) {
        return t ? this.wrapUserFunction((() => t(e))) : Es.resolve(e);
    }
    wrapFailure(t, e) {
        return t ? this.wrapUserFunction((() => t(e))) : Es.reject(e);
    }
    static resolve(t) {
        return new Es(((e, n) => {
            e(t);
        }));
    }
    static reject(t) {
        return new Es(((e, n) => {
            n(t);
        }));
    }
    static waitFor(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t) {
        return new Es(((e, n) => {
            let s = 0, i = 0, r = !1;
            t.forEach((t => {
                ++s, t.next((() => {
                    ++i, r && i === s && e();
                }), (t => n(t)));
            })), r = !0, i === s && e();
        }));
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */    static or(t) {
        let e = Es.resolve(!1);
        for (const n of t) e = e.next((t => t ? Es.resolve(t) : n()));
        return e;
    }
    static forEach(t, e) {
        const n = [];
        return t.forEach(((t, s) => {
            n.push(e.call(this, t, s));
        })), this.waitFor(n);
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
// References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */
class Ts {
    constructor(t, e) {
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
        this.ft = new ps, this.transaction.oncomplete = () => {
            this.ft.resolve();
        }, this.transaction.onabort = () => {
            e.error ? this.ft.reject(new Rs(t, e.error)) : this.ft.resolve();
        }, this.transaction.onerror = e => {
            const n = Ss(e.target.error);
            this.ft.reject(new Rs(t, n));
        };
    }
    static open(t, e, n, s) {
        try {
            return new Ts(e, t.transaction(s, n));
        } catch (t) {
            throw new Rs(e, t);
        }
    }
    get dt() {
        return this.ft.promise;
    }
    abort(t) {
        t && this.ft.reject(t), this.aborted || (A("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */    store(t) {
        const e = this.transaction.objectStore(t);
        return new vs(e);
    }
}

/**
 * Provides a wrapper around IndexedDb with a simplified interface that uses
 * Promise-like return values to chain operations. Real promises cannot be used
 * since .then() continuations are executed asynchronously (e.g. via
 * .setImmediate), which would cause IndexedDB to end the transaction.
 * See PersistencePromise for more details.
 */ class Is {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    constructor(e, n, s) {
        this.name = e, this.version = n, this.wt = s;
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === Is._t(getUA()) && R("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    static delete(t) {
        return A("SimpleDb", "Removing database:", t), Ps(window.indexedDB.deleteDatabase(t)).toPromise();
    }
    /** Returns true if IndexedDB is available in the current environment. */    static yt() {
        if ("undefined" == typeof indexedDB) return !1;
        if (Is.gt()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                const e = getUA(), n = Is._t(e), s = 0 < n && n < 10, i = Is.Et(e), r = 0 < i && i < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || s || r);
    }
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */    static gt() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Tt);
    }
    /** Helper to get a typed SimpleDbStore from a transaction. */    static It(t, e) {
        return t.store(e);
    }
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    static _t(t) {
        const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    static Et(t) {
        const e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */    async At(t) {
        return this.db || (A("SimpleDb", "Opening database:", this.name), this.db = await new Promise(((e, n) => {
            // TODO(mikelehen): Investigate browser compatibility.
            // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
            // suggests IE9 and older WebKit browsers handle upgrade
            // differently. They expect setVersion, as described here:
            // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
            const s = indexedDB.open(this.name, this.version);
            s.onsuccess = t => {
                const n = t.target.result;
                e(n);
            }, s.onblocked = () => {
                n(new Rs(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
            }, s.onerror = e => {
                const s = e.target.error;
                "VersionError" === s.name ? n(new E(p.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : n(new Rs(t, s));
            }, s.onupgradeneeded = t => {
                A("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', t.oldVersion);
                const e = t.target.result;
                this.wt.Rt(e, s.transaction, t.oldVersion, this.version).next((() => {
                    A("SimpleDb", "Database upgrade to version " + this.version + " complete");
                }));
            };
        }))), this.bt && (this.db.onversionchange = t => this.bt(t)), this.db;
    }
    vt(t) {
        this.bt = t, this.db && (this.db.onversionchange = e => t(e));
    }
    async runTransaction(t, e, n, s) {
        const i = "readonly" === e;
        let r = 0;
        for (;;) {
            ++r;
            try {
                this.db = await this.At(t);
                const e = Ts.open(this.db, t, i ? "readonly" : "readwrite", n), r = s(e).catch((t => (
                // Abort the transaction if there was an error.
                e.abort(t), Es.reject(t)))).toPromise();
                // As noted above, errors are propagated by aborting the transaction. So
                // we swallow any error here to avoid the browser logging it as unhandled.
                return r.catch((() => {})), 
                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                // fire), but still return the original transactionFnResult back to the
                // caller.
                await e.dt, r;
            } catch (t) {
                // TODO(schmidt-sebastian): We could probably be smarter about this and
                // not retry exceptions that are likely unrecoverable (such as quota
                // exceeded errors).
                // Note: We cannot use an instanceof check for FirestoreException, since the
                // exception is wrapped in a generic error by our async/await handling.
                const e = "FirebaseError" !== t.name && r < 3;
                if (A("SimpleDb", "Transaction failed with error:", t.message, "Retrying:", e), 
                this.close(), !e) return Promise.reject(t);
            }
        }
    }
    close() {
        this.db && this.db.close(), this.db = void 0;
    }
}

/**
 * A controller for iterating over a key range or index. It allows an iterate
 * callback to delete the currently-referenced object, or jump to a new key
 * within the key range or index.
 */ class As {
    constructor(t) {
        this.Pt = t, this.Vt = !1, this.St = null;
    }
    get isDone() {
        return this.Vt;
    }
    get Dt() {
        return this.St;
    }
    set cursor(t) {
        this.Pt = t;
    }
    /**
     * This function can be called to stop iteration at any point.
     */    done() {
        this.Vt = !0;
    }
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */    Ct(t) {
        this.St = t;
    }
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */    delete() {
        return Ps(this.Pt.delete());
    }
}

/** An error that wraps exceptions that thrown during IndexedDB execution. */ class Rs extends E {
    constructor(t, e) {
        super(p.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`), this.name = "IndexedDbTransactionError";
    }
}

/** Verifies whether `e` is an IndexedDbTransactionError. */ function bs(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ class vs {
    constructor(t) {
        this.store = t;
    }
    put(t, e) {
        let n;
        return void 0 !== e ? (A("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (A("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), Ps(n);
    }
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */    add(t) {
        A("SimpleDb", "ADD", this.store.name, t, t);
        return Ps(this.store.add(t));
    }
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */    get(t) {
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Ps(this.store.get(t)).next((e => (
        // Normalize nonexistence to null.
        void 0 === e && (e = null), A("SimpleDb", "GET", this.store.name, t, e), e)));
    }
    delete(t) {
        A("SimpleDb", "DELETE", this.store.name, t);
        return Ps(this.store.delete(t));
    }
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */    count() {
        A("SimpleDb", "COUNT", this.store.name);
        return Ps(this.store.count());
    }
    Nt(t, e) {
        const n = this.cursor(this.options(t, e)), s = [];
        return this.xt(n, ((t, e) => {
            s.push(e);
        })).next((() => s));
    }
    Ft(t, e) {
        A("SimpleDb", "DELETE ALL", this.store.name);
        const n = this.options(t, e);
        n.kt = !1;
        const s = this.cursor(n);
        return this.xt(s, ((t, e, n) => n.delete()));
    }
    Ot(t, e) {
        let n;
        e ? n = t : (n = {}, e = t);
        const s = this.cursor(n);
        return this.xt(s, e);
    }
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */    $t(t) {
        const e = this.cursor({});
        return new Es(((n, s) => {
            e.onerror = t => {
                const e = Ss(t.target.error);
                s(e);
            }, e.onsuccess = e => {
                const s = e.target.result;
                s ? t(s.primaryKey, s.value).next((t => {
                    t ? s.continue() : n();
                })) : n();
            };
        }));
    }
    xt(t, e) {
        const n = [];
        return new Es(((s, i) => {
            t.onerror = t => {
                i(t.target.error);
            }, t.onsuccess = t => {
                const i = t.target.result;
                if (!i) return void s();
                const r = new As(i), o = e(i.primaryKey, i.value, r);
                if (o instanceof Es) {
                    const t = o.catch((t => (r.done(), Es.reject(t))));
                    n.push(t);
                }
                r.isDone ? s() : null === r.Dt ? i.continue() : i.continue(r.Dt);
            };
        })).next((() => Es.waitFor(n)));
    }
    options(t, e) {
        let n;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }
    cursor(t) {
        let e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            const n = this.store.index(t.index);
            return t.kt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }
}

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function Ps(t) {
    return new Es(((e, n) => {
        t.onsuccess = t => {
            const n = t.target.result;
            e(n);
        }, t.onerror = t => {
            const e = Ss(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
let Vs = !1;

function Ss(e) {
    const n = Is._t(getUA());
    if (n >= 12.2 && n < 13) {
        const t = "An internal error was encountered in the Indexed Database server";
        if (e.message.indexOf(t) >= 0) {
            // Wrap error in a more descriptive one.
            const e = new E("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
            return Vs || (Vs = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((() => {
                throw e;
            }), 0)), e;
        }
    }
    return e;
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
 */ class Ds extends gs {
    constructor(t, e) {
        super(), this.Mt = t, this.currentSequenceNumber = e;
    }
}

function Cs(t, e) {
    const n = S(t);
    return Is.It(n.Mt, e);
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
 * A batch of mutations that will be sent as one unit to the backend.
 */ class Ns {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(t, e, n, s) {
        this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = s;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */    applyToRemoteDocument(t, e) {
        const n = e.mutationResults;
        for (let e = 0; e < this.mutations.length; e++) {
            const s = this.mutations[e];
            if (s.key.isEqual(t.key)) {
                be(s, t, n[e]);
            }
        }
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     */    applyToLocalView(t) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (const e of this.baseMutations) e.key.isEqual(t.key) && ve(e, t, this.localWriteTime);
        // Second, apply all user-provided mutations.
                for (const e of this.mutations) e.key.isEqual(t.key) && ve(e, t, this.localWriteTime);
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */    applyToLocalDocumentSet(t) {
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
        this.mutations.forEach((e => {
            const n = t.get(e.key), s = n;
            // TODO(mutabledocuments): This method should take a MutableDocumentMap
            // and we should remove this cast.
                        this.applyToLocalView(s), n.isValidDocument() || s.convertToNoDocument(O.min());
        }));
    }
    keys() {
        return this.mutations.reduce(((t, e) => t.add(e.key)), tn());
    }
    isEqual(t) {
        return this.batchId === t.batchId && x(this.mutations, t.mutations, ((t, e) => Ve(t, e))) && x(this.baseMutations, t.baseMutations, ((t, e) => Ve(t, e)));
    }
}

/** The result of applying a mutation batch to the backend. */ class xs {
    constructor(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    s) {
        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = s;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */    static from(t, e, n) {
        V(t.mutations.length === n.length);
        let s = Xe();
        const i = t.mutations;
        for (let t = 0; t < i.length; t++) s = s.insert(i[t].key, n[t].version);
        return new xs(t, e, n, s);
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
 * An immutable set of metadata that the local store tracks for each target.
 */ class Fs {
    constructor(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    s, 
    /** The latest snapshot version seen for this target. */
    i = O.min()
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , r = O.min()
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , o = j.EMPTY_BYTE_STRING) {
        this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = s, this.snapshotVersion = i, 
        this.lastLimboFreeSnapshotVersion = r, this.resumeToken = o;
    }
    /** Creates a new target data instance with an updated sequence number. */    withSequenceNumber(t) {
        return new Fs(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */    withResumeToken(t, e) {
        return new Fs(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t);
    }
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */    withLastLimboFreeSnapshotVersion(t) {
        return new Fs(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken);
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
/** Serializer for values stored in the LocalStore. */ class ks {
    constructor(t) {
        this.Lt = t;
    }
}

/** Decodes a remote document from storage locally to a Document. */ function Os(t, e) {
    if (e.document) return Sn(t.Lt, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        const t = nt.fromSegments(e.noDocument.path), n = qs(e.noDocument.readTime), s = gt.newNoDocument(t, n);
        return e.hasCommittedMutations ? s.setHasCommittedMutations() : s;
    }
    if (e.unknownDocument) {
        const t = nt.fromSegments(e.unknownDocument.path), n = qs(e.unknownDocument.version);
        return gt.newUnknownDocument(t, n);
    }
    return P();
}

/** Encodes a document for storage locally. */ function $s(t, e, n) {
    const s = Ms(n), i = e.key.path.popLast().toArray();
    if (e.isFoundDocument()) {
        const n = function(t, e) {
            return {
                name: In(t, e.key),
                fields: e.data.toProto().mapValue.fields,
                updateTime: mn(t, e.version.toTimestamp())
            };
        }(t.Lt, e), r = e.hasCommittedMutations;
        return new cs(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, n, r, s, i);
    }
    if (e.isNoDocument()) {
        const t = e.key.path.toArray(), n = Bs(e.version), r = e.hasCommittedMutations;
        return new cs(
        /* unknownDocument= */ null, new rs(t, n), 
        /* document= */ null, r, s, i);
    }
    if (e.isUnknownDocument()) {
        const t = e.key.path.toArray(), n = Bs(e.version);
        return new cs(new os(t, n), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, s, i);
    }
    return P();
}

function Ms(t) {
    const e = t.toTimestamp();
    return [ e.seconds, e.nanoseconds ];
}

function Ls(t) {
    const e = new k(t[0], t[1]);
    return O.fromTimestamp(e);
}

function Bs(t) {
    const e = t.toTimestamp();
    return new ts(e.seconds, e.nanoseconds);
}

function qs(t) {
    const e = new k(t.seconds, t.nanoseconds);
    return O.fromTimestamp(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */
function Us(t, e) {
    const n = (e.baseMutations || []).map((e => xn(t.Lt, e)));
    // Squash old transform mutations into existing patch or set mutations.
    // The replacement of representing `transforms` with `update_transforms`
    // on the SDK means that old `transform` mutations stored in IndexedDB need
    // to be updated to `update_transforms`.
    // TODO(b/174608374): Remove this code once we perform a schema migration.
        for (let t = 0; t < e.mutations.length - 1; ++t) {
        const n = e.mutations[t];
        if (t + 1 < e.mutations.length && void 0 !== e.mutations[t + 1].transform) {
            const s = e.mutations[t + 1];
            n.updateTransforms = s.transform.fieldTransforms, e.mutations.splice(t + 1, 1), 
            ++t;
        }
    }
    const s = e.mutations.map((e => xn(t.Lt, e))), i = k.fromMillis(e.localWriteTimeMs);
    return new Ns(e.batchId, i, n, s);
}

/** Decodes a DbTarget into TargetData */ function Qs(t) {
    const e = qs(t.readTime), n = void 0 !== t.lastLimboFreeSnapshotVersion ? qs(t.lastLimboFreeSnapshotVersion) : O.min();
    let s;
    var i;
    return void 0 !== t.query.documents ? (V(1 === (i = t.query).documents.length), 
    s = Jt(Qt(bn(i.documents[0])))) : s = function(t) {
        return Jt($n(t));
    }(t.query), new Fs(s, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, e, n, j.fromBase64String(t.resumeToken));
}

/** Encodes TargetData into a DbTarget for storage locally. */ function Ks(t, e) {
    const n = Bs(e.snapshotVersion), s = Bs(e.lastLimboFreeSnapshotVersion);
    let i;
    i = Rt(e.target) ? kn(t.Lt, e.target) : On(t.Lt, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
        const r = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new as(e.targetId, Tt(e.target), n, r, e.sequenceNumber, s, i);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */
function js(t) {
    const e = $n({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? Yt(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
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
class Ws {
    getBundleMetadata(t, e) {
        return Gs(t).get(e).next((t => {
            if (t) return {
                id: (e = t).bundleId,
                createTime: qs(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a BundleMetadata object. */
            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }
    saveBundleMetadata(t, e) {
        return Gs(t).put({
            bundleId: (n = e).id,
            createTime: Bs(pn(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }
    getNamedQuery(t, e) {
        return zs(t).get(e).next((t => {
            if (t) return {
                name: (e = t).name,
                query: js(e.bundledQuery),
                readTime: qs(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }
    saveNamedQuery(t, e) {
        return zs(t).put(function(t) {
            return {
                name: t.name,
                readTime: Bs(pn(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function Gs(t) {
    return Cs(t, ws.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function zs(t) {
    return Cs(t, _s.store);
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
 * An in-memory implementation of IndexManager.
 */ class Hs {
    constructor() {
        this.Bt = new Js;
    }
    addToCollectionParentIndex(t, e) {
        return this.Bt.add(e), Es.resolve();
    }
    getCollectionParents(t, e) {
        return Es.resolve(this.Bt.getEntries(e));
    }
}

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */ class Js {
    constructor() {
        this.index = {};
    }
    // Returns false if the entry already existed.
    add(t) {
        const e = t.lastSegment(), n = t.popLast(), s = this.index[e] || new je(q.comparator), i = !s.has(n);
        return this.index[e] = s.add(n), i;
    }
    has(t) {
        const e = t.lastSegment(), n = t.popLast(), s = this.index[e];
        return s && s.has(n);
    }
    getEntries(t) {
        return (this.index[t] || new je(q.comparator)).toArray();
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
/**
 * A persisted implementation of IndexManager.
 */ class Ys {
    constructor() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.qt = new Js;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    addToCollectionParentIndex(t, e) {
        if (!this.qt.has(e)) {
            const n = e.lastSegment(), s = e.popLast();
            t.addOnCommittedListener((() => {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                this.qt.add(e);
            }));
            const i = {
                collectionId: n,
                parent: Jn(s)
            };
            return Xs(t).put(i);
        }
        return Es.resolve();
    }
    getCollectionParents(t, e) {
        const n = [], s = IDBKeyRange.bound([ e, "" ], [ F(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Xs(t).Nt(s).next((t => {
            for (const s of t) {
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                if (s.collectionId !== e) break;
                n.push(Zn(s.parent));
            }
            return n;
        }));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */ function Xs(t) {
    return Cs(t, fs.store);
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
 */ const Zs = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
};

class ti {
    constructor(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
    }
    static withCacheSize(t) {
        return new ti(t, ti.DEFAULT_COLLECTION_PERCENTILE, ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
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
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function ei(t, e, n) {
    const s = t.store(ss.store), i = t.store(is.store), r = [], o = IDBKeyRange.only(n.batchId);
    let c = 0;
    const u = s.Ot({
        range: o
    }, ((t, e, n) => (c++, n.delete())));
    r.push(u.next((() => {
        V(1 === c);
    })));
    const a = [];
    for (const t of n.mutations) {
        const s = is.key(e, t.key.path, n.batchId);
        r.push(i.delete(s)), a.push(t.key);
    }
    return Es.waitFor(r).next((() => a));
}

/**
 * Returns an approximate size for the given document.
 */ function ni(t) {
    if (!t) return 0;
    let e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw P();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
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
/** A mutation queue for a specific user, backed by IndexedDB. */ ti.DEFAULT_COLLECTION_PERCENTILE = 10, 
ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, ti.DEFAULT = new ti(41943040, ti.DEFAULT_COLLECTION_PERCENTILE, ti.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), 
ti.DISABLED = new ti(-1, 0, 0);

class si {
    constructor(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, s) {
        this.userId = t, this.R = e, this.Ut = n, this.referenceDelegate = s, 
        /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
        // PORTING NOTE: Multi-tab only.
        this.Qt = {};
    }
    /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */    static Kt(t, e, n, s) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        V("" !== t.uid);
        const i = t.isAuthenticated() ? t.uid : "";
        return new si(i, e, n, s);
    }
    checkEmpty(t) {
        let e = !0;
        const n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ri(t).Ot({
            index: ss.userMutationsIndex,
            range: n
        }, ((t, n, s) => {
            e = !1, s.done();
        })).next((() => e));
    }
    addMutationBatch(t, e, n, s) {
        const i = oi(t), r = ri(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return r.add({}).next((o => {
            V("number" == typeof o);
            const c = new Ns(o, e, n, s), u = function(t, e, n) {
                const s = n.baseMutations.map((e => Nn(t.Lt, e))), i = n.mutations.map((e => Nn(t.Lt, e)));
                return new ss(e, n.batchId, n.localWriteTime.toMillis(), s, i);
            }(this.R, this.userId, c), a = [];
            let h = new je(((t, e) => N(t.canonicalString(), e.canonicalString())));
            for (const t of s) {
                const e = is.key(this.userId, t.key.path, o);
                h = h.add(t.key.path.popLast()), a.push(r.put(u)), a.push(i.put(e, is.PLACEHOLDER));
            }
            return h.forEach((e => {
                a.push(this.Ut.addToCollectionParentIndex(t, e));
            })), t.addOnCommittedListener((() => {
                this.Qt[o] = c.keys();
            })), Es.waitFor(a).next((() => c));
        }));
    }
    lookupMutationBatch(t, e) {
        return ri(t).get(e).next((t => t ? (V(t.userId === this.userId), Us(this.R, t)) : null));
    }
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    jt(t, e) {
        return this.Qt[e] ? Es.resolve(this.Qt[e]) : this.lookupMutationBatch(t, e).next((t => {
            if (t) {
                const n = t.keys();
                return this.Qt[e] = n, n;
            }
            return null;
        }));
    }
    getNextMutationBatchAfterBatchId(t, e) {
        const n = e + 1, s = IDBKeyRange.lowerBound([ this.userId, n ]);
        let i = null;
        return ri(t).Ot({
            index: ss.userMutationsIndex,
            range: s
        }, ((t, e, s) => {
            e.userId === this.userId && (V(e.batchId >= n), i = Us(this.R, e)), s.done();
        })).next((() => i));
    }
    getHighestUnacknowledgedBatchId(t) {
        const e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]);
        let n = -1;
        return ri(t).Ot({
            index: ss.userMutationsIndex,
            range: e,
            reverse: !0
        }, ((t, e, s) => {
            n = e.batchId, s.done();
        })).next((() => n));
    }
    getAllMutationBatches(t) {
        const e = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return ri(t).Nt(ss.userMutationsIndex, e).next((t => t.map((t => Us(this.R, t)))));
    }
    getAllMutationBatchesAffectingDocumentKey(t, e) {
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
        const n = is.prefixForPath(this.userId, e.path), s = IDBKeyRange.lowerBound(n), i = [];
        return oi(t).Ot({
            range: s
        }, ((n, s, r) => {
            const [o, c, u] = n, a = Zn(c);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (o === this.userId && e.path.isEqual(a)) 
            // Look up the mutation batch in the store.
            return ri(t).get(u).next((t => {
                if (!t) throw P();
                V(t.userId === this.userId), i.push(Us(this.R, t));
            }));
            r.done();
        })).next((() => i));
    }
    getAllMutationBatchesAffectingDocumentKeys(t, e) {
        let n = new je(N);
        const s = [];
        return e.forEach((e => {
            const i = is.prefixForPath(this.userId, e.path), r = IDBKeyRange.lowerBound(i), o = oi(t).Ot({
                range: r
            }, ((t, s, i) => {
                const [r, o, c] = t, u = Zn(o);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                r === this.userId && e.path.isEqual(u) ? n = n.add(c) : i.done();
            }));
            s.push(o);
        })), Es.waitFor(s).next((() => this.Wt(t, n)));
    }
    getAllMutationBatchesAffectingQuery(t, e) {
        const n = e.path, s = n.length + 1, i = is.prefixForPath(this.userId, n), r = IDBKeyRange.lowerBound(i);
        // Collect up unique batchIDs encountered during a scan of the index. Use a
        // SortedSet to accumulate batch IDs so they can be traversed in order in a
        // scan of the main table.
        let o = new je(N);
        return oi(t).Ot({
            range: r
        }, ((t, e, i) => {
            const [r, c, u] = t, a = Zn(c);
            r === this.userId && n.isPrefixOf(a) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            a.length === s && (o = o.add(u)) : i.done();
        })).next((() => this.Wt(t, o)));
    }
    Wt(t, e) {
        const n = [], s = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((e => {
            s.push(ri(t).get(e).next((t => {
                if (null === t) throw P();
                V(t.userId === this.userId), n.push(Us(this.R, t));
            })));
        })), Es.waitFor(s).next((() => n));
    }
    removeMutationBatch(t, e) {
        return ei(t.Mt, this.userId, e).next((n => (t.addOnCommittedListener((() => {
            this.Gt(e.batchId);
        })), Es.forEach(n, (e => this.referenceDelegate.markPotentiallyOrphaned(t, e))))));
    }
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    Gt(t) {
        delete this.Qt[t];
    }
    performConsistencyCheck(t) {
        return this.checkEmpty(t).next((e => {
            if (!e) return Es.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        const n = IDBKeyRange.lowerBound(is.prefixForUser(this.userId)), s = [];
            return oi(t).Ot({
                range: n
            }, ((t, e, n) => {
                if (t[0] === this.userId) {
                    const e = Zn(t[1]);
                    s.push(e);
                } else n.done();
            })).next((() => {
                V(0 === s.length);
            }));
        }));
    }
    containsKey(t, e) {
        return ii(t, this.userId, e);
    }
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    zt(t) {
        return ci(t).get(this.userId).next((t => t || new ns(this.userId, -1, 
        /*lastStreamToken=*/ "")));
    }
}

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function ii(t, e, n) {
    const s = is.prefixForPath(e, n.path), i = s[1], r = IDBKeyRange.lowerBound(s);
    let o = !1;
    return oi(t).Ot({
        range: r,
        kt: !0
    }, ((t, n, s) => {
        const [r, c, /*batchID*/ u] = t;
        r === e && c === i && (o = !0), s.done();
    })).next((() => o));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */
function ri(t) {
    return Cs(t, ss.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function oi(t) {
    return Cs(t, is.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function ci(t) {
    return Cs(t, ns.store);
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
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */
class ui {
    constructor(t) {
        this.Ht = t;
    }
    next() {
        return this.Ht += 2, this.Ht;
    }
    static Jt() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new ui(0);
    }
    static Yt() {
        // Sync engine assigns target IDs for limbo document detection.
        return new ui(-1);
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
 */ class ai {
    constructor(t, e) {
        this.referenceDelegate = t, this.R = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
    allocateTargetId(t) {
        return this.Xt(t).next((e => {
            const n = new ui(e.highestTargetId);
            return e.highestTargetId = n.next(), this.Zt(t, e).next((() => e.highestTargetId));
        }));
    }
    getLastRemoteSnapshotVersion(t) {
        return this.Xt(t).next((t => O.fromTimestamp(new k(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))));
    }
    getHighestSequenceNumber(t) {
        return this.Xt(t).next((t => t.highestListenSequenceNumber));
    }
    setTargetsMetadata(t, e, n) {
        return this.Xt(t).next((s => (s.highestListenSequenceNumber = e, n && (s.lastRemoteSnapshotVersion = n.toTimestamp()), 
        e > s.highestListenSequenceNumber && (s.highestListenSequenceNumber = e), this.Zt(t, s))));
    }
    addTargetData(t, e) {
        return this.te(t, e).next((() => this.Xt(t).next((n => (n.targetCount += 1, this.ee(e, n), 
        this.Zt(t, n))))));
    }
    updateTargetData(t, e) {
        return this.te(t, e);
    }
    removeTargetData(t, e) {
        return this.removeMatchingKeysForTargetId(t, e.targetId).next((() => hi(t).delete(e.targetId))).next((() => this.Xt(t))).next((e => (V(e.targetCount > 0), 
        e.targetCount -= 1, this.Zt(t, e))));
    }
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */    removeTargets(t, e, n) {
        let s = 0;
        const i = [];
        return hi(t).Ot(((r, o) => {
            const c = Qs(o);
            c.sequenceNumber <= e && null === n.get(c.targetId) && (s++, i.push(this.removeTargetData(t, c)));
        })).next((() => Es.waitFor(i))).next((() => s));
    }
    /**
     * Call provided function with each `TargetData` that we have cached.
     */    forEachTarget(t, e) {
        return hi(t).Ot(((t, n) => {
            const s = Qs(n);
            e(s);
        }));
    }
    Xt(t) {
        return li(t).get(ls.key).next((t => (V(null !== t), t)));
    }
    Zt(t, e) {
        return li(t).put(ls.key, e);
    }
    te(t, e) {
        return hi(t).put(Ks(this.R, e));
    }
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */    ee(t, e) {
        let n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }
    getTargetCount(t) {
        return this.Xt(t).next((t => t.targetCount));
    }
    getTargetData(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        const n = Tt(e), s = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]);
        let i = null;
        return hi(t).Ot({
            range: s,
            index: as.queryTargetsIndexName
        }, ((t, n, s) => {
            const r = Qs(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        At(e, r.target) && (i = r, s.done());
        })).next((() => i));
    }
    addMatchingKeys(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = [], i = fi(t);
        return e.forEach((e => {
            const r = Jn(e.path);
            s.push(i.put(new hs(n, r))), s.push(this.referenceDelegate.addReference(t, n, e));
        })), Es.waitFor(s);
    }
    removeMatchingKeys(t, e, n) {
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
        const s = fi(t);
        return Es.forEach(e, (e => {
            const i = Jn(e.path);
            return Es.waitFor([ s.delete([ n, i ]), this.referenceDelegate.removeReference(t, n, e) ]);
        }));
    }
    removeMatchingKeysForTargetId(t, e) {
        const n = fi(t), s = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(s);
    }
    getMatchingKeysForTargetId(t, e) {
        const n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), s = fi(t);
        let i = tn();
        return s.Ot({
            range: n,
            kt: !0
        }, ((t, e, n) => {
            const s = Zn(t[1]), r = new nt(s);
            i = i.add(r);
        })).next((() => i));
    }
    containsKey(t, e) {
        const n = Jn(e.path), s = IDBKeyRange.bound([ n ], [ F(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        let i = 0;
        return fi(t).Ot({
            index: hs.documentTargetsIndex,
            kt: !0,
            range: s
        }, (([t, e], n, s) => {
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
            0 !== t && (i++, s.done());
        })).next((() => i > 0));
    }
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    lt(t, e) {
        return hi(t).get(e).next((t => t ? Qs(t) : null));
    }
}

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */ function hi(t) {
    return Cs(t, as.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function li(t) {
    return Cs(t, ls.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function fi(t) {
    return Cs(t, hs.store);
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
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function di(t) {
    if (t.code !== p.FAILED_PRECONDITION || t.message !== ys) throw t;
    A("LocalStore", "Unexpectedly lost primary lease");
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
 */ function wi([t, e], [n, s]) {
    const i = N(t, n);
    return 0 === i ? N(e, s) : i;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ class _i {
    constructor(t) {
        this.ne = t, this.buffer = new je(wi), this.se = 0;
    }
    ie() {
        return ++this.se;
    }
    re(t) {
        const e = [ t, this.ie() ];
        if (this.buffer.size < this.ne) this.buffer = this.buffer.add(e); else {
            const t = this.buffer.last();
            wi(e, t) < 0 && (this.buffer = this.buffer.delete(t).add(e));
        }
    }
    get maxValue() {
        // Guaranteed to be non-empty. If we decide we are not collecting any
        // sequence numbers, nthSequenceNumber below short-circuits. If we have
        // decided that we are collecting n sequence numbers, it's because n is some
        // percentage of the existing sequence numbers. That means we should never
        // be in a situation where we are collecting sequence numbers but don't
        // actually have any.
        return this.buffer.last()[0];
    }
}

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ class mi {
    constructor(t, e) {
        this.garbageCollector = t, this.asyncQueue = e, this.oe = !1, this.ce = null;
    }
    start(t) {
        -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ue(t);
    }
    stop() {
        this.ce && (this.ce.cancel(), this.ce = null);
    }
    get started() {
        return null !== this.ce;
    }
    ue(t) {
        const e = this.oe ? 3e5 : 6e4;
        A("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`), this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection" /* LruGarbageCollection */ , e, (async () => {
            this.ce = null, this.oe = !0;
            try {
                await t.collectGarbage(this.garbageCollector);
            } catch (t) {
                bs(t) ? A("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t) : await di(t);
            }
            await this.ue(t);
        }));
    }
}

/** Implements the steps for LRU garbage collection. */ class yi {
    constructor(t, e) {
        this.ae = t, this.params = e;
    }
    calculateTargetCount(t, e) {
        return this.ae.he(t).next((t => Math.floor(e / 100 * t)));
    }
    nthSequenceNumber(t, e) {
        if (0 === e) return Es.resolve(g.o);
        const n = new _i(e);
        return this.ae.forEachTarget(t, (t => n.re(t.sequenceNumber))).next((() => this.ae.le(t, (t => n.re(t))))).next((() => n.maxValue));
    }
    removeTargets(t, e, n) {
        return this.ae.removeTargets(t, e, n);
    }
    removeOrphanedDocuments(t, e) {
        return this.ae.removeOrphanedDocuments(t, e);
    }
    collect(t, e) {
        return -1 === this.params.cacheSizeCollectionThreshold ? (A("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        Es.resolve(Zs)) : this.getCacheSize(t).next((n => n < this.params.cacheSizeCollectionThreshold ? (A("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), 
        Zs) : this.fe(t, e)));
    }
    getCacheSize(t) {
        return this.ae.getCacheSize(t);
    }
    fe(t, e) {
        let n, s, i, r, o, c, u;
        const h = Date.now();
        return this.calculateTargetCount(t, this.params.percentileToCollect).next((e => (
        // Cap at the configured max
        e > this.params.maximumSequenceNumbersToCollect ? (A("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`), 
        s = this.params.maximumSequenceNumbersToCollect) : s = e, r = Date.now(), this.nthSequenceNumber(t, s)))).next((s => (n = s, 
        o = Date.now(), this.removeTargets(t, n, e)))).next((e => (i = e, c = Date.now(), 
        this.removeOrphanedDocuments(t, n)))).next((t => {
            if (u = Date.now(), I() <= LogLevel.DEBUG) {
                A("LruGarbageCollector", `LRU Garbage Collection\n\tCounted targets in ${r - h}ms\n\tDetermined least recently used ${s} in ` + (o - r) + "ms\n" + `\tRemoved ${i} targets in ` + (c - o) + "ms\n" + `\tRemoved ${t} documents in ` + (u - c) + "ms\n" + `Total Duration: ${u - h}ms`);
            }
            return Es.resolve({
                didRun: !0,
                sequenceNumbersCollected: s,
                targetsRemoved: i,
                documentsRemoved: t
            });
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
/** Provides LRU functionality for IndexedDB persistence. */
class gi {
    constructor(t, e) {
        this.db = t, this.garbageCollector = function(t, e) {
            return new yi(t, e);
        }(this, e);
    }
    he(t) {
        const e = this.de(t);
        return this.db.getTargetCache().getTargetCount(t).next((t => e.next((e => t + e))));
    }
    de(t) {
        let e = 0;
        return this.le(t, (t => {
            e++;
        })).next((() => e));
    }
    forEachTarget(t, e) {
        return this.db.getTargetCache().forEachTarget(t, e);
    }
    le(t, e) {
        return this.we(t, ((t, n) => e(n)));
    }
    addReference(t, e, n) {
        return pi(t, n);
    }
    removeReference(t, e, n) {
        return pi(t, n);
    }
    removeTargets(t, e, n) {
        return this.db.getTargetCache().removeTargets(t, e, n);
    }
    markPotentiallyOrphaned(t, e) {
        return pi(t, e);
    }
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */    _e(t, e) {
        return function(t, e) {
            let n = !1;
            return ci(t).$t((s => ii(t, s, e).next((t => (t && (n = !0), Es.resolve(!t)))))).next((() => n));
        }(t, e);
    }
    removeOrphanedDocuments(t, e) {
        const n = this.db.getRemoteDocumentCache().newChangeBuffer(), s = [];
        let i = 0;
        return this.we(t, ((r, o) => {
            if (o <= e) {
                const e = this._e(t, r).next((e => {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return i++, n.getEntry(t, r).next((() => (n.removeEntry(r), fi(t).delete([ 0, Jn(r.path) ]))));
                }));
                s.push(e);
            }
        })).next((() => Es.waitFor(s))).next((() => n.apply(t))).next((() => i));
    }
    removeTarget(t, e) {
        const n = e.withSequenceNumber(t.currentSequenceNumber);
        return this.db.getTargetCache().updateTargetData(t, n);
    }
    updateLimboDocument(t, e) {
        return pi(t, e);
    }
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */    we(t, e) {
        const n = fi(t);
        let s, i = g.o;
        return n.Ot({
            index: hs.documentTargetsIndex
        }, (([t, n], {path: r, sequenceNumber: o}) => {
            0 === t ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== g.o && e(new nt(Zn(s)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = o, s = r) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = g.o;
        })).next((() => {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== g.o && e(new nt(Zn(s)), i);
        }));
    }
    getCacheSize(t) {
        return this.db.getRemoteDocumentCache().getSize(t);
    }
}

function pi(t, e) {
    return fi(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new hs(0, Jn(t.path), e);
    }(e, t.currentSequenceNumber));
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
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class Ei {
    constructor(t, e) {
        this.mapKeyFn = t, this.equalsFn = e, 
        /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
        this.inner = {};
    }
    /** Get a value for this key, or undefined if it does not exist. */    get(t) {
        const e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 !== n) for (const [e, s] of n) if (this.equalsFn(e, t)) return s;
    }
    has(t) {
        return void 0 !== this.get(t);
    }
    /** Put this key and value in the map. */    set(t, e) {
        const n = this.mapKeyFn(t), s = this.inner[n];
        if (void 0 !== s) {
            for (let n = 0; n < s.length; n++) if (this.equalsFn(s[n][0], t)) return void (s[n] = [ t, e ]);
            s.push([ t, e ]);
        } else this.inner[n] = [ [ t, e ] ];
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */    delete(t) {
        const e = this.mapKeyFn(t), n = this.inner[e];
        if (void 0 === n) return !1;
        for (let s = 0; s < n.length; s++) if (this.equalsFn(n[s][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(s, 1), 
        !0;
        return !1;
    }
    forEach(t) {
        M(this.inner, ((e, n) => {
            for (const [e, s] of n) t(e, s);
        }));
    }
    isEmpty() {
        return L(this.inner);
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
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class Ti {
    constructor() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.changes = new Ei((t => t.toString()), ((t, e) => t.isEqual(e))), this.changesApplied = !1;
    }
    getReadTime(t) {
        const e = this.changes.get(t);
        return e ? e.readTime : O.min();
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    addEntry(t, e) {
        this.assertNotApplied(), this.changes.set(t.key, {
            document: t,
            readTime: e
        });
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */    removeEntry(t, e = null) {
        this.assertNotApplied(), this.changes.set(t, {
            document: gt.newInvalidDocument(t),
            readTime: e
        });
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */    getEntry(t, e) {
        this.assertNotApplied();
        const n = this.changes.get(e);
        return void 0 !== n ? Es.resolve(n.document) : this.getFromCache(t, e);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */    getEntries(t, e) {
        return this.getAllFromCache(t, e);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */    apply(t) {
        return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
    }
    /** Helper to assert this.changes is not null  */    assertNotApplied() {}
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
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class Ii {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    constructor(t, e) {
        this.R = t, this.Ut = e;
    }
    /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    addEntry(t, e, n) {
        return bi(t).put(vi(e), n);
    }
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */    removeEntry(t, e) {
        const n = bi(t), s = vi(e);
        return n.delete(s);
    }
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */    updateMetadata(t, e) {
        return this.getMetadata(t).next((n => (n.byteSize += e, this.me(t, n))));
    }
    getEntry(t, e) {
        return bi(t).get(vi(e)).next((t => this.ye(e, t)));
    }
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document entry and its size.
     */    ge(t, e) {
        return bi(t).get(vi(e)).next((t => ({
            document: this.ye(e, t),
            size: ni(t)
        })));
    }
    getEntries(t, e) {
        let n = ze();
        return this.pe(t, e, ((t, e) => {
            const s = this.ye(t, e);
            n = n.insert(t, s);
        })).next((() => n));
    }
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of documents indexed by key and a map of sizes indexed by
     *     key (zero if the document does not exist).
     */    Ee(t, e) {
        let n = ze(), s = new Ue(nt.comparator);
        return this.pe(t, e, ((t, e) => {
            const i = this.ye(t, e);
            n = n.insert(t, i), s = s.insert(t, ni(e));
        })).next((() => ({
            documents: n,
            Te: s
        })));
    }
    pe(t, e, n) {
        if (e.isEmpty()) return Es.resolve();
        const s = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()), i = e.getIterator();
        let r = i.getNext();
        return bi(t).Ot({
            range: s
        }, ((t, e, s) => {
            const o = nt.fromSegments(t);
            // Go through keys not found in cache.
                        for (;r && nt.comparator(r, o) < 0; ) n(r, null), r = i.getNext();
            r && r.isEqual(o) && (
            // Key found in cache.
            n(r, e), r = i.hasNext() ? i.getNext() : null), 
            // Skip to the next key (if there is one).
            r ? s.Ct(r.path.toArray()) : s.done();
        })).next((() => {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;r; ) n(r, null), r = i.hasNext() ? i.getNext() : null;
        }));
    }
    getDocumentsMatchingQuery(t, e, n) {
        let s = ze();
        const i = e.path.length + 1, r = {};
        if (n.isEqual(O.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            const t = e.path.toArray();
            r.range = IDBKeyRange.lowerBound(t);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            const t = e.path.toArray(), s = Ms(n);
            r.range = IDBKeyRange.lowerBound([ t, s ], 
            /* open= */ !0), r.index = cs.collectionReadTimeIndex;
        }
        return bi(t).Ot(r, ((t, n, r) => {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length !== i) return;
            const o = Os(this.R, n);
            e.path.isPrefixOf(o.key.path) ? ee(e, o) && (s = s.insert(o.key, o)) : r.done();
        })).next((() => s));
    }
    newChangeBuffer(t) {
        return new Ai(this, !!t && t.trackRemovals);
    }
    getSize(t) {
        return this.getMetadata(t).next((t => t.byteSize));
    }
    getMetadata(t) {
        return Ri(t).get(us.key).next((t => (V(!!t), t)));
    }
    me(t, e) {
        return Ri(t).put(us.key, e);
    }
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */    ye(t, e) {
        if (e) {
            const t = Os(this.R, e);
            // Whether the document is a sentinel removal and should only be used in the
            // `getNewDocumentChanges()`
                        if (!(t.isNoDocument() && t.version.isEqual(O.min()))) return t;
        }
        return gt.newInvalidDocument(t);
    }
}

/**
 * Creates a new IndexedDbRemoteDocumentCache.
 *
 * @param serializer - The document serializer.
 * @param indexManager - The query indexes that need to be maintained.
 */
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */
class Ai extends Ti {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    constructor(t, e) {
        super(), this.Ie = t, this.trackRemovals = e, 
        // A map of document sizes prior to applying the changes in this buffer.
        this.Ae = new Ei((t => t.toString()), ((t, e) => t.isEqual(e)));
    }
    applyChanges(t) {
        const e = [];
        let n = 0, s = new je(((t, e) => N(t.canonicalString(), e.canonicalString())));
        return this.changes.forEach(((i, r) => {
            const o = this.Ae.get(i);
            if (r.document.isValidDocument()) {
                const c = $s(this.Ie.R, r.document, this.getReadTime(i));
                s = s.add(i.path.popLast());
                const u = ni(c);
                n += u - o, e.push(this.Ie.addEntry(t, i, c));
            } else if (n -= o, this.trackRemovals) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                const n = $s(this.Ie.R, gt.newNoDocument(i, O.min()), this.getReadTime(i));
                e.push(this.Ie.addEntry(t, i, n));
            } else e.push(this.Ie.removeEntry(t, i));
        })), s.forEach((n => {
            e.push(this.Ie.Ut.addToCollectionParentIndex(t, n));
        })), e.push(this.Ie.updateMetadata(t, n)), Es.waitFor(e);
    }
    getFromCache(t, e) {
        // Record the size of everything we load from the cache so we can compute a delta later.
        return this.Ie.ge(t, e).next((t => (this.Ae.set(e, t.size), t.document)));
    }
    getAllFromCache(t, e) {
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
        return this.Ie.Ee(t, e).next((({documents: t, Te: e}) => (
        // Note: `getAllFromCache` returns two maps instead of a single map from
        // keys to `DocumentSizeEntry`s. This is to allow returning the
        // `MutableDocumentMap` directly, without a conversion.
        e.forEach(((t, e) => {
            this.Ae.set(t, e);
        })), t)));
    }
}

function Ri(t) {
    return Cs(t, us.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function bi(t) {
    return Cs(t, cs.store);
}

function vi(t) {
    return t.path.toArray();
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
/** Performs database creation and schema upgrades. */ class Pi {
    constructor(t) {
        this.R = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    Rt(t, e, n, s) {
        V(n < s && n >= 0 && s <= 11);
        const i = new Ts("createOrUpgrade", e);
        n < 1 && s >= 1 && (function(t) {
            t.createObjectStore(es.store);
        }(t), function(t) {
            t.createObjectStore(ns.store, {
                keyPath: ns.keyPath
            });
            t.createObjectStore(ss.store, {
                keyPath: ss.keyPath,
                autoIncrement: !0
            }).createIndex(ss.userMutationsIndex, ss.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(is.store);
        }
        /**
 * Upgrade function to migrate the 'mutations' store from V1 to V3. Loads
 * and rewrites all data.
 */ (t), Vi(t), function(t) {
            t.createObjectStore(cs.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
                let r = Es.resolve();
        return n < 3 && s >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (!function(t) {
            t.deleteObjectStore(hs.store), t.deleteObjectStore(as.store), t.deleteObjectStore(ls.store);
        }(t), Vi(t)), r = r.next((() => 
        /**
 * Creates the target global singleton row.
 *
 * @param txn - The version upgrade transaction for indexeddb
 */
        function(t) {
            const e = t.store(ls.store), n = new ls(
            /*highestTargetId=*/ 0, 
            /*lastListenSequenceNumber=*/ 0, O.min().toTimestamp(), 
            /*targetCount=*/ 0);
            return e.put(ls.key, n);
        }
        /**
 * Creates indices on the RemoteDocuments store used for both multi-tab
 * and Index-Free queries.
 */ (i)))), n < 4 && s >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        r = r.next((() => function(t, e) {
            return e.store(ss.store).Nt().next((n => {
                t.deleteObjectStore(ss.store);
                t.createObjectStore(ss.store, {
                    keyPath: ss.keyPath,
                    autoIncrement: !0
                }).createIndex(ss.userMutationsIndex, ss.userMutationsKeyPath, {
                    unique: !0
                });
                const s = e.store(ss.store), i = n.map((t => s.put(t)));
                return Es.waitFor(i);
            }));
        }(t, i)))), r = r.next((() => {
            !function(t) {
                t.createObjectStore(ds.store, {
                    keyPath: ds.keyPath
                });
            }(t);
        }))), n < 5 && s >= 5 && (r = r.next((() => this.Re(i)))), n < 6 && s >= 6 && (r = r.next((() => (function(t) {
            t.createObjectStore(us.store);
        }(t), this.be(i))))), n < 7 && s >= 7 && (r = r.next((() => this.ve(i)))), n < 8 && s >= 8 && (r = r.next((() => this.Pe(t, i)))), 
        n < 9 && s >= 9 && (r = r.next((() => {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                const e = t.objectStore(cs.store);
                e.createIndex(cs.readTimeIndex, cs.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(cs.collectionReadTimeIndex, cs.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && s >= 10 && (r = r.next((() => this.Ve(i)))), n < 11 && s >= 11 && (r = r.next((() => {
            !function(t) {
                t.createObjectStore(ws.store, {
                    keyPath: ws.keyPath
                });
            }(t), function(t) {
                t.createObjectStore(_s.store, {
                    keyPath: _s.keyPath
                });
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
 */ (t);
        }))), r;
    }
    be(t) {
        let e = 0;
        return t.store(cs.store).Ot(((t, n) => {
            e += ni(n);
        })).next((() => {
            const n = new us(e);
            return t.store(us.store).put(us.key, n);
        }));
    }
    Re(t) {
        const e = t.store(ns.store), n = t.store(ss.store);
        return e.Nt().next((e => Es.forEach(e, (e => {
            const s = IDBKeyRange.bound([ e.userId, -1 ], [ e.userId, e.lastAcknowledgedBatchId ]);
            return n.Nt(ss.userMutationsIndex, s).next((n => Es.forEach(n, (n => {
                V(n.userId === e.userId);
                const s = Us(this.R, n);
                return ei(t, e.userId, s).next((() => {}));
            }))));
        }))));
    }
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */    ve(t) {
        const e = t.store(hs.store), n = t.store(cs.store);
        return t.store(ls.store).get(ls.key).next((t => {
            const s = [];
            return n.Ot(((n, i) => {
                const r = new q(n), o = function(t) {
                    return [ 0, Jn(t) ];
                }(r);
                s.push(e.get(o).next((n => n ? Es.resolve() : (n => e.put(new hs(0, Jn(n), t.highestListenSequenceNumber)))(r))));
            })).next((() => Es.waitFor(s)));
        }));
    }
    Pe(t, e) {
        // Create the index.
        t.createObjectStore(fs.store, {
            keyPath: fs.keyPath
        });
        const n = e.store(fs.store), s = new Js, i = t => {
            if (s.add(t)) {
                const e = t.lastSegment(), s = t.popLast();
                return n.put({
                    collectionId: e,
                    parent: Jn(s)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
                // Index existing remote documents.
        return e.store(cs.store).Ot({
            kt: !0
        }, ((t, e) => {
            const n = new q(t);
            return i(n.popLast());
        })).next((() => e.store(is.store).Ot({
            kt: !0
        }, (([t, e, n], s) => {
            const r = Zn(e);
            return i(r.popLast());
        }))));
    }
    Ve(t) {
        const e = t.store(as.store);
        return e.Ot(((t, n) => {
            const s = Qs(n), i = Ks(this.R, s);
            return e.put(i);
        }));
    }
}

function Vi(t) {
    t.createObjectStore(hs.store, {
        keyPath: hs.keyPath
    }).createIndex(hs.documentTargetsIndex, hs.documentTargetsKeyPath, {
        unique: !0
    });
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(as.store, {
        keyPath: as.keyPath
    }).createIndex(as.queryTargetsIndexName, as.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(ls.store);
}

const Si = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
class Di {
    constructor(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    t, e, n, s, i, r, o, c, u, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    a) {
        if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, 
        this.Se = i, this.window = r, this.document = o, this.De = u, this.Ce = a, this.Ne = null, 
        this.xe = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Fe = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.ke = null, 
        /** The client metadata refresh task. */
        this.Oe = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.$e = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Me = t => Promise.resolve(), !Di.yt()) throw new E(p.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.referenceDelegate = new gi(this, s), this.Le = e + "main", this.R = new ks(c), 
        this.Be = new Is(this.Le, 11, new Pi(this.R)), this.qe = new ai(this.referenceDelegate, this.R), 
        this.Ut = new Ys, this.Ue = function(t, e) {
            return new Ii(t, e);
        }
        /**
 * Returns the set of documents that have changed since the specified read
 * time.
 */
        // PORTING NOTE: This is only used for multi-tab synchronization.
        (this.R, this.Ut), this.Qe = new Ws, this.window && this.window.localStorage ? this.Ke = this.window.localStorage : (this.Ke = null, 
        !1 === a && R("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    start() {
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
        return this.je().then((() => {
            if (!this.isPrimary && !this.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new E(p.FAILED_PRECONDITION, Si);
            return this.We(), this.Ge(), this.ze(), this.runTransaction("getHighestListenSequenceNumber", "readonly", (t => this.qe.getHighestSequenceNumber(t)));
        })).then((t => {
            this.Ne = new g(t, this.De);
        })).then((() => {
            this.xe = !0;
        })).catch((t => (this.Be && this.Be.close(), Promise.reject(t))));
    }
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    He(t) {
        return this.Me = async e => {
            if (this.started) return t(e);
        }, t(this.isPrimary);
    }
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    setDatabaseDeletedListener(t) {
        this.Be.vt((async e => {
            // Check if an attempt is made to delete IndexedDB.
            null === e.newVersion && await t();
        }));
    }
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    setNetworkEnabled(t) {
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Se.enqueueAndForget((async () => {
            this.started && await this.je();
        })));
    }
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */    je() {
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (t => Ni(t).put(new ds(this.clientId, Date.now(), this.networkEnabled, this.inForeground)).next((() => {
            if (this.isPrimary) return this.Je(t).next((t => {
                t || (this.isPrimary = !1, this.Se.enqueueRetryable((() => this.Me(!1))));
            }));
        })).next((() => this.Ye(t))).next((e => this.isPrimary && !e ? this.Xe(t).next((() => !1)) : !!e && this.Ze(t).next((() => !0)))))).catch((t => {
            if (bs(t)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return A("IndexedDbPersistence", "Failed to extend owner lease: ", t), this.isPrimary;
            if (!this.allowTabSynchronization) throw t;
            return A("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), 
            /* isPrimary= */ !1;
        })).then((t => {
            this.isPrimary !== t && this.Se.enqueueRetryable((() => this.Me(t))), this.isPrimary = t;
        }));
    }
    Je(t) {
        return Ci(t).get(es.key).next((t => Es.resolve(this.tn(t))));
    }
    en(t) {
        return Ni(t).delete(this.clientId);
    }
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */    async nn() {
        if (this.isPrimary && !this.sn(this.$e, 18e5)) {
            this.$e = Date.now();
            const t = await this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (t => {
                const e = Cs(t, ds.store);
                return e.Nt().next((t => {
                    const n = this.rn(t, 18e5), s = t.filter((t => -1 === n.indexOf(t)));
                    // Delete metadata for clients that are no longer considered active.
                    return Es.forEach(s, (t => e.delete(t.clientId))).next((() => s));
                }));
            })).catch((() => []));
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
                        if (this.Ke) for (const e of t) this.Ke.removeItem(this.on(e.clientId));
        }
    }
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */    ze() {
        this.Oe = this.Se.enqueueAfterDelay("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (() => this.je().then((() => this.nn())).then((() => this.ze()))));
    }
    /** Checks whether `client` is the local client. */    tn(t) {
        return !!t && t.ownerId === this.clientId;
    }
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */    Ye(t) {
        if (this.Ce) return Es.resolve(!0);
        return Ci(t).get(es.key).next((e => {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== e && this.sn(e.leaseTimestampMs, 5e3) && !this.cn(e.ownerId)) {
                if (this.tn(e) && this.networkEnabled) return !0;
                if (!this.tn(e)) {
                    if (!e.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new E(p.FAILED_PRECONDITION, Si);
                    return !1;
                }
            }
            return !(!this.networkEnabled || !this.inForeground) || Ni(t).Nt().next((t => void 0 === this.rn(t, 5e3).find((t => {
                if (this.clientId !== t.clientId) {
                    const e = !this.networkEnabled && t.networkEnabled, n = !this.inForeground && t.inForeground, s = this.networkEnabled === t.networkEnabled;
                    if (e || n && s) return !0;
                }
                return !1;
            }))));
        })).next((t => (this.isPrimary !== t && A("IndexedDbPersistence", `Client ${t ? "is" : "is not"} eligible for a primary lease.`), 
        t)));
    }
    async shutdown() {
        // The shutdown() operations are idempotent and can be called even when
        // start() aborted (e.g. because it couldn't acquire the persistence lease).
        this.xe = !1, this.un(), this.Oe && (this.Oe.cancel(), this.Oe = null), this.an(), 
        this.hn(), 
        // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
        // has obtained the primary lease.
        await this.Be.runTransaction("shutdown", "readwrite", [ es.store, ds.store ], (t => {
            const e = new Ds(t, g.o);
            return this.Xe(e).next((() => this.en(e)));
        })), this.Be.close(), 
        // Remove the entry marking the client as zombied from LocalStorage since
        // we successfully deleted its metadata from IndexedDb.
        this.ln();
    }
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */    rn(t, e) {
        return t.filter((t => this.sn(t.updateTimeMs, e) && !this.cn(t.clientId)));
    }
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */    fn() {
        return this.runTransaction("getActiveClients", "readonly", (t => Ni(t).Nt().next((t => this.rn(t, 18e5).map((t => t.clientId))))));
    }
    get started() {
        return this.xe;
    }
    getMutationQueue(t) {
        return si.Kt(t, this.R, this.Ut, this.referenceDelegate);
    }
    getTargetCache() {
        return this.qe;
    }
    getRemoteDocumentCache() {
        return this.Ue;
    }
    getIndexManager() {
        return this.Ut;
    }
    getBundleCache() {
        return this.Qe;
    }
    runTransaction(t, e, n) {
        A("IndexedDbPersistence", "Starting transaction:", t);
        const s = "readonly" === e ? "readonly" : "readwrite";
        let i;
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
                return this.Be.runTransaction(t, s, ms, (s => (i = new Ds(s, this.Ne ? this.Ne.next() : g.o), 
        "readwrite-primary" === e ? this.Je(i).next((t => !!t || this.Ye(i))).next((e => {
            if (!e) throw R(`Failed to obtain primary lease for action '${t}'.`), this.isPrimary = !1, 
            this.Se.enqueueRetryable((() => this.Me(!1))), new E(p.FAILED_PRECONDITION, ys);
            return n(i);
        })).next((t => this.Ze(i).next((() => t)))) : this.dn(i).next((() => n(i)))))).then((t => (i.raiseOnCommittedEvent(), 
        t)));
    }
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    dn(t) {
        return Ci(t).get(es.key).next((t => {
            if (null !== t && this.sn(t.leaseTimestampMs, 5e3) && !this.cn(t.ownerId) && !this.tn(t) && !(this.Ce || this.allowTabSynchronization && t.allowTabSynchronization)) throw new E(p.FAILED_PRECONDITION, Si);
        }));
    }
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */    Ze(t) {
        const e = new es(this.clientId, this.allowTabSynchronization, Date.now());
        return Ci(t).put(es.key, e);
    }
    static yt() {
        return Is.yt();
    }
    /** Checks the primary lease and removes it if we are the current primary. */    Xe(t) {
        const e = Ci(t);
        return e.get(es.key).next((t => this.tn(t) ? (A("IndexedDbPersistence", "Releasing primary lease."), 
        e.delete(es.key)) : Es.resolve()));
    }
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */    sn(t, e) {
        const n = Date.now();
        return !(t < n - e) && (!(t > n) || (R(`Detected an update time that is in the future: ${t} > ${n}`), 
        !1));
    }
    We() {
        null !== this.document && "function" == typeof this.document.addEventListener && (this.ke = () => {
            this.Se.enqueueAndForget((() => (this.inForeground = "visible" === this.document.visibilityState, 
            this.je())));
        }, this.document.addEventListener("visibilitychange", this.ke), this.inForeground = "visible" === this.document.visibilityState);
    }
    an() {
        this.ke && (this.document.removeEventListener("visibilitychange", this.ke), this.ke = null);
    }
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */    Ge() {
        var t;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Fe = () => {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            this.un(), this.Se.enqueueAndForget((() => this.shutdown()));
        }, this.window.addEventListener("unload", this.Fe));
    }
    hn() {
        this.Fe && (this.window.removeEventListener("unload", this.Fe), this.Fe = null);
    }
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */    cn(t) {
        var e;
        try {
            const n = null !== (null === (e = this.Ke) || void 0 === e ? void 0 : e.getItem(this.on(t)));
            return A("IndexedDbPersistence", `Client '${t}' ${n ? "is" : "is not"} zombied in LocalStorage`), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return R("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */    un() {
        if (this.Ke) try {
            this.Ke.setItem(this.on(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            R("Failed to set zombie client id.", t);
        }
    }
    /** Removes the zombied client entry if it exists. */    ln() {
        if (this.Ke) try {
            this.Ke.removeItem(this.on(this.clientId));
        } catch (t) {
            // Ignore
        }
    }
    on(t) {
        return `firestore_zombie_${this.persistenceKey}_${t}`;
    }
}

/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */ function Ci(t) {
    return Cs(t, es.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function Ni(t) {
    return Cs(t, ds.store);
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function xi(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    let n = t.projectId;
    return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/";
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
class Fi {
    constructor(t, e) {
        this.progress = t, this.wn = e;
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
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class ki {
    constructor(t, e, n) {
        this.Ue = t, this._n = e, this.Ut = n;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */    mn(t, e) {
        return this._n.getAllMutationBatchesAffectingDocumentKey(t, e).next((n => this.yn(t, e, n)));
    }
    /** Internal version of `getDocument` that allows reusing batches. */    yn(t, e, n) {
        return this.Ue.getEntry(t, e).next((t => {
            for (const e of n) e.applyToLocalView(t);
            return t;
        }));
    }
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    gn(t, e) {
        t.forEach(((t, n) => {
            for (const t of e) t.applyToLocalView(n);
        }));
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */    pn(t, e) {
        return this.Ue.getEntries(t, e).next((e => this.En(t, e).next((() => e))));
    }
    /**
     * Applies the local view the given `baseDocs` without retrieving documents
     * from the local store.
     */    En(t, e) {
        return this._n.getAllMutationBatchesAffectingDocumentKeys(t, e).next((t => this.gn(e, t)));
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */    getDocumentsMatchingQuery(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return nt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Tn(t, e.path) : zt(e) ? this.In(t, e, n) : this.An(t, e, n);
    }
    Tn(t, e) {
        // Just do a simple document lookup.
        return this.mn(t, new nt(e)).next((t => {
            let e = Je();
            return t.isFoundDocument() && (e = e.insert(t.key, t)), e;
        }));
    }
    In(t, e, n) {
        const s = e.collectionGroup;
        let i = Je();
        return this.Ut.getCollectionParents(t, s).next((r => Es.forEach(r, (r => {
            const o = function(t, e) {
                return new qt(e, 
                /*collectionGroup=*/ null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
            }
            /**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */ (e, r.child(s));
            return this.An(t, o, n).next((t => {
                t.forEach(((t, e) => {
                    i = i.insert(t, e);
                }));
            }));
        })).next((() => i))));
    }
    An(t, e, n) {
        // Query the remote documents and overlay mutations.
        let s, i;
        return this.Ue.getDocumentsMatchingQuery(t, e, n).next((n => (s = n, this._n.getAllMutationBatchesAffectingQuery(t, e)))).next((e => (i = e, 
        this.Rn(t, i, s).next((t => {
            s = t;
            for (const t of i) for (const e of t.mutations) {
                const n = e.key;
                let i = s.get(n);
                null == i && (
                // Create invalid document to apply mutations on top of
                i = gt.newInvalidDocument(n), s = s.insert(n, i)), ve(e, i, t.localWriteTime), i.isFoundDocument() || (s = s.remove(n));
            }
        }))))).next((() => (
        // Finally, filter out any documents that don't actually match
        // the query.
        s.forEach(((t, n) => {
            ee(e, n) || (s = s.remove(t));
        })), s)));
    }
    Rn(t, e, n) {
        let s = tn();
        for (const t of e) for (const e of t.mutations) e instanceof Ce && null === n.get(e.key) && (s = s.add(e.key));
        let i = n;
        return this.Ue.getEntries(t, s).next((t => (t.forEach(((t, e) => {
            e.isFoundDocument() && (i = i.insert(t, e));
        })), i)));
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
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class Oi {
    constructor(t, e, n, s) {
        this.targetId = t, this.fromCache = e, this.bn = n, this.vn = s;
    }
    static Pn(t, e) {
        let n = tn(), s = tn();
        for (const t of e.docChanges) switch (t.type) {
          case 0 /* Added */ :
            n = n.add(t.doc.key);
            break;

          case 1 /* Removed */ :
            s = s.add(t.doc.key);
 // do nothing
                }
        return new Oi(t, e.fromCache, n, s);
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
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. Query execution is optimized by only reading the documents that
 * previously matched a query plus any documents that were edited after the
 * query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class $i {
    /** Sets the document view to query against. */
    Vn(t) {
        this.Sn = t;
    }
    /** Returns all local documents matching the specified query. */    getDocumentsMatchingQuery(t, e, n, s) {
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
        return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
        }(e) || n.isEqual(O.min()) ? this.Dn(t, e) : this.Sn.pn(t, s).next((i => {
            const r = this.Cn(e, i);
            return (Kt(e) || jt(e)) && this.Nn(e.limitType, r, s, n) ? this.Dn(t, e) : (I() <= LogLevel.DEBUG && A("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), te(e)), 
            this.Sn.getDocumentsMatchingQuery(t, e, n).next((t => (
            // We merge `previousResults` into `updateResults`, since
            // `updateResults` is already a DocumentMap. If a document is
            // contained in both lists, then its contents are the same.
            r.forEach((e => {
                t = t.insert(e.key, e);
            })), t))));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }
    /** Applies the query filter and sorting to the provided documents.  */    Cn(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        let n = new je(ne(t));
        return e.forEach(((e, s) => {
            ee(t, s) && (n = n.add(s));
        })), n;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */    Nn(t, e, n, s) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                const i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
    }
    Dn(t, e) {
        return I() <= LogLevel.DEBUG && A("QueryEngine", "Using full collection scan to execute query:", te(e)), 
        this.Sn.getDocumentsMatchingQuery(t, e, O.min());
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
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */
class Mi {
    constructor(
    /** Manages our in-memory or durable persistence. */
    t, e, n, s) {
        this.persistence = t, this.xn = e, this.R = s, 
        /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
        this.Fn = new Ue(N), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.kn = new Ei((t => Tt(t)), At), 
        /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
        this.On = O.min(), this._n = t.getMutationQueue(n), this.$n = t.getRemoteDocumentCache(), 
        this.qe = t.getTargetCache(), this.Mn = new ki(this.$n, this._n, this.persistence.getIndexManager()), 
        this.Qe = t.getBundleCache(), this.xn.Vn(this.Mn);
    }
    collectGarbage(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (e => t.collect(e, this.Fn)));
    }
}

function Li(
/** Manages our in-memory or durable persistence. */
t, e, n, s) {
    return new Mi(t, e, n, s);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function Bi(t, e) {
    const n = S(t);
    let s = n._n, i = n.Mn;
    const r = await n.persistence.runTransaction("Handle user change", "readonly", (t => {
        // Swap out the mutation queue, grabbing the pending mutation batches
        // before and after.
        let r;
        return n._n.getAllMutationBatches(t).next((o => (r = o, s = n.persistence.getMutationQueue(e), 
        // Recreate our LocalDocumentsView using the new
        // MutationQueue.
        i = new ki(n.$n, s, n.persistence.getIndexManager()), s.getAllMutationBatches(t)))).next((e => {
            const n = [], s = [];
            // Union the old/new changed keys.
            let o = tn();
            for (const t of r) {
                n.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            for (const t of e) {
                s.push(t.batchId);
                for (const e of t.mutations) o = o.add(e.key);
            }
            // Return the set of all (potentially) changed documents and the list
            // of mutation batch IDs that were affected by change.
                        return i.pn(t, o).next((t => ({
                Ln: t,
                removedBatchIds: n,
                addedBatchIds: s
            })));
        }));
    }));
    return n._n = s, n.Mn = i, n.xn.Vn(n.Mn), r;
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */
function qi(t, e) {
    const n = S(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (t => {
        const s = e.batch.keys(), i = n.$n.newChangeBuffer({
            trackRemovals: !0
        });
        return function(t, e, n, s) {
            const i = n.batch, r = i.keys();
            let o = Es.resolve();
            return r.forEach((t => {
                o = o.next((() => s.getEntry(e, t))).next((e => {
                    const r = n.docVersions.get(t);
                    V(null !== r), e.version.compareTo(r) < 0 && (i.applyToRemoteDocument(e, n), e.isValidDocument() && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    s.addEntry(e, n.commitVersion));
                }));
            })), o.next((() => t._n.removeMutationBatch(e, i)));
        }
        /** Returns the local view of the documents affected by a mutation batch. */
        // PORTING NOTE: Multi-Tab only.
        (n, t, e, i).next((() => i.apply(t))).next((() => n._n.performConsistencyCheck(t))).next((() => n.Mn.pn(t, s)));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */
function Ui(t) {
    const e = S(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (t => e.qe.getLastRemoteSnapshotVersion(t)));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function Qi(t, e) {
    const n = S(t), s = e.snapshotVersion;
    let i = n.Fn;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (t => {
        const r = n.$n.newChangeBuffer({
            trackRemovals: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Fn;
        const o = [];
        e.targetChanges.forEach(((e, r) => {
            const c = i.get(r);
            if (!c) return;
            // Only update the remote keys if the target is still active. This
            // ensures that we can persist the updated target data along with
            // the updated assignment.
                        o.push(n.qe.removeMatchingKeys(t, e.removedDocuments, r).next((() => n.qe.addMatchingKeys(t, e.addedDocuments, r))));
            const u = e.resumeToken;
            // Update the resume token if the change includes one.
                        if (u.approximateByteSize() > 0) {
                const a = c.withResumeToken(u, s).withSequenceNumber(t.currentSequenceNumber);
                i = i.insert(r, a), 
                // Update the target data if there are target changes (or if
                // sufficient time has passed since the last update).
                /**
 * Returns true if the newTargetData should be persisted during an update of
 * an active target. TargetData should always be persisted when a target is
 * being released and should not call this function.
 *
 * While the target is active, TargetData updates can be omitted when nothing
 * about the target has changed except metadata like the resume token or
 * snapshot version. Occasionally it's worth the extra write to prevent these
 * values from getting too stale after a crash, but this doesn't have to be
 * too frequent.
 */
                function(t, e, n) {
                    // Always persist target data if we don't already have a resume token.
                    if (V(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize()) return !0;
                    // Don't allow resume token changes to be buffered indefinitely. This
                    // allows us to be reasonably up-to-date after a crash and avoids needing
                    // to loop over all active queries on shutdown. Especially in the browser
                    // we may not get time to do anything interesting while the current tab is
                    // closing.
                                        if (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8) return !0;
                    // Otherwise if the only thing that has changed about a target is its resume
                    // token it's not worth persisting. Note that the RemoteStore keeps an
                    // in-memory view of the currently active targets which includes the current
                    // resume token, so stream failure or user changes will still use an
                    // up-to-date resume token regardless of what we do here.
                                        return n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
                }
                /**
 * Notifies local store of the changed views to locally pin documents.
 */ (c, a, e) && o.push(n.qe.updateTargetData(t, a));
            }
        }));
        let c = ze();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
        if (e.documentUpdates.forEach(((s, i) => {
            e.resolvedLimboDocuments.has(s) && o.push(n.persistence.referenceDelegate.updateLimboDocument(t, s));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        o.push(Ki(t, r, e.documentUpdates, s, void 0).next((t => {
            c = t;
        }))), !s.isEqual(O.min())) {
            const e = n.qe.getLastRemoteSnapshotVersion(t).next((e => n.qe.setTargetsMetadata(t, t.currentSequenceNumber, s)));
            o.push(e);
        }
        return Es.waitFor(o).next((() => r.apply(t))).next((() => n.Mn.En(t, c))).next((() => c));
    })).then((t => (n.Fn = i, t)));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function Ki(t, e, n, s, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    let r = tn();
    return n.forEach((t => r = r.add(t))), e.getEntries(t, r).next((t => {
        let r = ze();
        return n.forEach(((n, o) => {
            const c = t.get(n), u = (null == i ? void 0 : i.get(n)) || s;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
            o.isNoDocument() && o.version.isEqual(O.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e.removeEntry(n, u), r = r.insert(n, o)) : !c.isValidDocument() || o.version.compareTo(c.version) > 0 || 0 === o.version.compareTo(c.version) && c.hasPendingWrites ? (e.addEntry(o, u), 
            r = r.insert(n, o)) : A("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", c.version, " Watch version:", o.version);
        })), r;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */
function ji(t, e) {
    const n = S(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (t => (void 0 === e && (e = -1), 
    n._n.getNextMutationBatchAfterBatchId(t, e))));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */
function Wi(t, e) {
    const n = S(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (t => {
        let s;
        return n.qe.getTargetData(t, e).next((i => i ? (
        // This target has been listened to previously, so reuse the
        // previous targetID.
        // TODO(mcg): freshen last accessed date?
        s = i, Es.resolve(s)) : n.qe.allocateTargetId(t).next((i => (s = new Fs(e, i, 0 /* Listen */ , t.currentSequenceNumber), 
        n.qe.addTargetData(t, s).next((() => s)))))));
    })).then((t => {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        const s = n.Fn.get(t.targetId);
        return (null === s || t.snapshotVersion.compareTo(s.snapshotVersion) > 0) && (n.Fn = n.Fn.insert(t.targetId, t), 
        n.kn.set(e, t.targetId)), t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function Gi(t, e, n) {
    const s = S(t), i = s.Fn.get(e), r = n ? "readwrite" : "readwrite-primary";
    try {
        n || await s.persistence.runTransaction("Release target", r, (t => s.persistence.referenceDelegate.removeTarget(t, i)));
    } catch (t) {
        if (!bs(t)) throw t;
        // All `releaseTarget` does is record the final metadata state for the
        // target, but we've been recording this periodically during target
        // activity. If we lose this write this could cause a very slight
        // difference in the order of target deletion during GC, but we
        // don't define exact LRU semantics so this is acceptable.
        A("LocalStore", `Failed to update sequence numbers for target ${e}: ${t}`);
    }
    s.Fn = s.Fn.remove(e), s.kn.delete(i.target);
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function zi(t, e, n) {
    const s = S(t);
    let i = O.min(), r = tn();
    return s.persistence.runTransaction("Execute query", "readonly", (t => function(t, e, n) {
        const s = S(t), i = s.kn.get(n);
        return void 0 !== i ? Es.resolve(s.Fn.get(i)) : s.qe.getTargetData(e, n);
    }(s, t, Jt(e)).next((e => {
        if (e) return i = e.lastLimboFreeSnapshotVersion, s.qe.getMatchingKeysForTargetId(t, e.targetId).next((t => {
            r = t;
        }));
    })).next((() => s.xn.getDocumentsMatchingQuery(t, e, n ? i : O.min(), n ? r : tn()))).next((t => ({
        documents: t,
        Bn: r
    })))));
}

// PORTING NOTE: Multi-Tab only.
function Hi(t, e) {
    const n = S(t), s = S(n.qe), i = n.Fn.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (t => s.lt(t, e).next((t => t ? t.target : null))));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function Ji(t) {
    const e = S(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (t => function(t, e, n) {
        const s = S(t);
        let i = ze(), r = Ms(n);
        const o = bi(e), c = IDBKeyRange.lowerBound(r, !0);
        return o.Ot({
            index: cs.readTimeIndex,
            range: c
        }, ((t, e) => {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            const n = Os(s.R, e);
            i = i.insert(n.key, n), r = e.readTime;
        })).next((() => ({
            wn: i,
            readTime: Ls(r)
        })));
    }
    /**
 * Returns the read time of the most recently read document in the cache, or
 * SnapshotVersion.min() if not available.
 */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    (e.$n, t, e.On))).then((({wn: t, readTime: n}) => (e.On = n, t)));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
async function Yi(t) {
    const e = S(t);
    return e.persistence.runTransaction("Synchronize last document change read time", "readonly", (t => function(t) {
        const e = bi(t);
        // If there are no existing entries, we return SnapshotVersion.min().
                let n = O.min();
        return e.Ot({
            index: cs.readTimeIndex,
            reverse: !0
        }, ((t, e, s) => {
            e.readTime && (n = Ls(e.readTime)), s.done();
        })).next((() => n));
    }(t))).then((t => {
        e.On = t;
    }));
}

/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */
/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */
async function Xi(t, e, n, s) {
    const i = S(t);
    let r = tn(), o = ze(), c = Xe();
    for (const t of n) {
        const n = e.qn(t.metadata.name);
        t.document && (r = r.add(n)), o = o.insert(n, e.Un(t)), c = c.insert(n, e.Qn(t.metadata.readTime));
    }
    const u = i.$n.newChangeBuffer({
        trackRemovals: !0
    }), a = await Wi(i, function(t) {
        // It is OK that the path used for the query is not valid, because this will
        // not be read and queried.
        return Jt(Qt(q.fromString(`__bundle__/docs/${t}`)));
    }(s));
    // Allocates a target to hold all document keys from the bundle, such that
    // they will not get garbage collected right away.
        return i.persistence.runTransaction("Apply bundle documents", "readwrite", (t => Ki(t, u, o, O.min(), c).next((e => (u.apply(t), 
    e))).next((e => i.qe.removeMatchingKeysForTargetId(t, a.targetId).next((() => i.qe.addMatchingKeys(t, r, a.targetId))).next((() => i.Mn.En(t, e))).next((() => e))))));
}

/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */
/**
 * Saves the given `NamedQuery` to local persistence.
 */
async function Zi(t, e, n = tn()) {
    // Allocate a target for the named query such that it can be resumed
    // from associated read time if users use it to listen.
    // NOTE: this also means if no corresponding target exists, the new target
    // will remain active and will not get collected, unless users happen to
    // unlisten the query somehow.
    const s = await Wi(t, Jt(js(e.bundledQuery))), i = S(t);
    return i.persistence.runTransaction("Save named query", "readwrite", (t => {
        const r = pn(e.readTime);
        // Simply save the query itself if it is older than what the SDK already
        // has.
                if (s.snapshotVersion.compareTo(r) >= 0) return i.Qe.saveNamedQuery(t, e);
        // Update existing target data because the query from the bundle is newer.
                const o = s.withResumeToken(j.EMPTY_BYTE_STRING, r);
        return i.Fn = i.Fn.insert(o.targetId, o), i.qe.updateTargetData(t, o).next((() => i.qe.removeMatchingKeysForTargetId(t, s.targetId))).next((() => i.qe.addMatchingKeys(t, n, s.targetId))).next((() => i.Qe.saveNamedQuery(t, e)));
    }));
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
 */ class tr {
    constructor(t) {
        this.R = t, this.Kn = new Map, this.jn = new Map;
    }
    getBundleMetadata(t, e) {
        return Es.resolve(this.Kn.get(e));
    }
    saveBundleMetadata(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.Kn.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: pn(n.createTime)
        }), Es.resolve();
    }
    getNamedQuery(t, e) {
        return Es.resolve(this.jn.get(e));
    }
    saveNamedQuery(t, e) {
        return this.jn.set(e.name, function(t) {
            return {
                name: t.name,
                query: js(t.bundledQuery),
                readTime: pn(t.readTime)
            };
        }(e)), Es.resolve();
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
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class er {
    constructor() {
        // A set of outstanding references to a document sorted by key.
        this.Wn = new je(nr.Gn), 
        // A set of outstanding references to a document sorted by target id.
        this.zn = new je(nr.Hn);
    }
    /** Returns true if the reference set contains no references. */    isEmpty() {
        return this.Wn.isEmpty();
    }
    /** Adds a reference to the given document key for the given ID. */    addReference(t, e) {
        const n = new nr(t, e);
        this.Wn = this.Wn.add(n), this.zn = this.zn.add(n);
    }
    /** Add references to the given document keys for the given ID. */    Jn(t, e) {
        t.forEach((t => this.addReference(t, e)));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */    removeReference(t, e) {
        this.Yn(new nr(t, e));
    }
    Xn(t, e) {
        t.forEach((t => this.removeReference(t, e)));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */    Zn(t) {
        const e = new nt(new q([])), n = new nr(e, t), s = new nr(e, t + 1), i = [];
        return this.zn.forEachInRange([ n, s ], (t => {
            this.Yn(t), i.push(t.key);
        })), i;
    }
    ts() {
        this.Wn.forEach((t => this.Yn(t)));
    }
    Yn(t) {
        this.Wn = this.Wn.delete(t), this.zn = this.zn.delete(t);
    }
    es(t) {
        const e = new nt(new q([])), n = new nr(e, t), s = new nr(e, t + 1);
        let i = tn();
        return this.zn.forEachInRange([ n, s ], (t => {
            i = i.add(t.key);
        })), i;
    }
    containsKey(t) {
        const e = new nr(t, 0), n = this.Wn.firstAfterOrEqual(e);
        return null !== n && t.isEqual(n.key);
    }
}

class nr {
    constructor(t, e) {
        this.key = t, this.ns = e;
    }
    /** Compare by key then by ID */    static Gn(t, e) {
        return nt.comparator(t.key, e.key) || N(t.ns, e.ns);
    }
    /** Compare by ID then by key */    static Hn(t, e) {
        return N(t.ns, e.ns) || nt.comparator(t.key, e.key);
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
 */ class sr {
    constructor(t, e) {
        this.Ut = t, this.referenceDelegate = e, 
        /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
        this._n = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.ss = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.rs = new je(nr.Gn);
    }
    checkEmpty(t) {
        return Es.resolve(0 === this._n.length);
    }
    addMutationBatch(t, e, n, s) {
        const i = this.ss;
        if (this.ss++, this._n.length > 0) {
            this._n[this._n.length - 1];
        }
        const r = new Ns(i, e, n, s);
        this._n.push(r);
        // Track references by document key and index collection parents.
        for (const e of s) this.rs = this.rs.add(new nr(e.key, i)), this.Ut.addToCollectionParentIndex(t, e.key.path.popLast());
        return Es.resolve(r);
    }
    lookupMutationBatch(t, e) {
        return Es.resolve(this.os(e));
    }
    getNextMutationBatchAfterBatchId(t, e) {
        const n = e + 1, s = this.cs(n), i = s < 0 ? 0 : s;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Es.resolve(this._n.length > i ? this._n[i] : null);
    }
    getHighestUnacknowledgedBatchId() {
        return Es.resolve(0 === this._n.length ? -1 : this.ss - 1);
    }
    getAllMutationBatches(t) {
        return Es.resolve(this._n.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(t, e) {
        const n = new nr(e, 0), s = new nr(e, Number.POSITIVE_INFINITY), i = [];
        return this.rs.forEachInRange([ n, s ], (t => {
            const e = this.os(t.ns);
            i.push(e);
        })), Es.resolve(i);
    }
    getAllMutationBatchesAffectingDocumentKeys(t, e) {
        let n = new je(N);
        return e.forEach((t => {
            const e = new nr(t, 0), s = new nr(t, Number.POSITIVE_INFINITY);
            this.rs.forEachInRange([ e, s ], (t => {
                n = n.add(t.ns);
            }));
        })), Es.resolve(this.us(n));
    }
    getAllMutationBatchesAffectingQuery(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        const n = e.path, s = n.length + 1;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
        let i = n;
        nt.isDocumentKey(i) || (i = i.child(""));
        const r = new nr(new nt(i), 0);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                let o = new je(N);
        return this.rs.forEachWhile((t => {
            const e = t.key.path;
            return !!n.isPrefixOf(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === s && (o = o.add(t.ns)), !0);
        }), r), Es.resolve(this.us(o));
    }
    us(t) {
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
        const e = [];
        return t.forEach((t => {
            const n = this.os(t);
            null !== n && e.push(n);
        })), e;
    }
    removeMutationBatch(t, e) {
        V(0 === this.hs(e.batchId, "removed")), this._n.shift();
        let n = this.rs;
        return Es.forEach(e.mutations, (s => {
            const i = new nr(s.key, e.batchId);
            return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(t, s.key);
        })).next((() => {
            this.rs = n;
        }));
    }
    Gt(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }
    containsKey(t, e) {
        const n = new nr(e, 0), s = this.rs.firstAfterOrEqual(n);
        return Es.resolve(e.isEqual(s && s.key));
    }
    performConsistencyCheck(t) {
        return this._n.length, Es.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */    hs(t, e) {
        return this.cs(t);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */    cs(t) {
        if (0 === this._n.length) 
        // As an index this is past the end of the queue
        return 0;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
                return t - this._n[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */    os(t) {
        const e = this.cs(t);
        if (e < 0 || e >= this._n.length) return null;
        return this._n[e];
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
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */
class ir {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(t, e) {
        this.Ut = t, this.ls = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new Ue(nt.comparator), 
        /** Size of all cached documents. */
        this.size = 0;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    addEntry(t, e, n) {
        const s = e.key, i = this.docs.get(s), r = i ? i.size : 0, o = this.ls(e);
        return this.docs = this.docs.insert(s, {
            document: e.clone(),
            size: o,
            readTime: n
        }), this.size += o - r, this.Ut.addToCollectionParentIndex(t, s.path.popLast());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */    removeEntry(t) {
        const e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }
    getEntry(t, e) {
        const n = this.docs.get(e);
        return Es.resolve(n ? n.document.clone() : gt.newInvalidDocument(e));
    }
    getEntries(t, e) {
        let n = ze();
        return e.forEach((t => {
            const e = this.docs.get(t);
            n = n.insert(t, e ? e.document.clone() : gt.newInvalidDocument(t));
        })), Es.resolve(n);
    }
    getDocumentsMatchingQuery(t, e, n) {
        let s = ze();
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
                const i = new nt(e.path.child("")), r = this.docs.getIteratorFrom(i);
        for (;r.hasNext(); ) {
            const {key: t, value: {document: i, readTime: o}} = r.getNext();
            if (!e.path.isPrefixOf(t.path)) break;
            o.compareTo(n) <= 0 || ee(e, i) && (s = s.insert(i.key, i.clone()));
        }
        return Es.resolve(s);
    }
    fs(t, e) {
        return Es.forEach(this.docs, (t => e(t)));
    }
    newChangeBuffer(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new rr(this);
    }
    getSize(t) {
        return Es.resolve(this.size);
    }
}

/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param indexManager - A class that manages collection group indices.
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
class rr extends Ti {
    constructor(t) {
        super(), this.Ie = t;
    }
    applyChanges(t) {
        const e = [];
        return this.changes.forEach(((n, s) => {
            s.document.isValidDocument() ? e.push(this.Ie.addEntry(t, s.document, this.getReadTime(n))) : this.Ie.removeEntry(n);
        })), Es.waitFor(e);
    }
    getFromCache(t, e) {
        return this.Ie.getEntry(t, e);
    }
    getAllFromCache(t, e) {
        return this.Ie.getEntries(t, e);
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
 */ class or {
    constructor(t) {
        this.persistence = t, 
        /**
         * Maps a target to the data about that target
         */
        this.ds = new Ei((t => Tt(t)), At), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = O.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ws = 0, 
        /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
        this._s = new er, this.targetCount = 0, this.ys = ui.Jt();
    }
    forEachTarget(t, e) {
        return this.ds.forEach(((t, n) => e(n))), Es.resolve();
    }
    getLastRemoteSnapshotVersion(t) {
        return Es.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(t) {
        return Es.resolve(this.ws);
    }
    allocateTargetId(t) {
        return this.highestTargetId = this.ys.next(), Es.resolve(this.highestTargetId);
    }
    setTargetsMetadata(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ws && (this.ws = e), 
        Es.resolve();
    }
    te(t) {
        this.ds.set(t.target, t);
        const e = t.targetId;
        e > this.highestTargetId && (this.ys = new ui(e), this.highestTargetId = e), t.sequenceNumber > this.ws && (this.ws = t.sequenceNumber);
    }
    addTargetData(t, e) {
        return this.te(e), this.targetCount += 1, Es.resolve();
    }
    updateTargetData(t, e) {
        return this.te(e), Es.resolve();
    }
    removeTargetData(t, e) {
        return this.ds.delete(e.target), this._s.Zn(e.targetId), this.targetCount -= 1, 
        Es.resolve();
    }
    removeTargets(t, e, n) {
        let s = 0;
        const i = [];
        return this.ds.forEach(((r, o) => {
            o.sequenceNumber <= e && null === n.get(o.targetId) && (this.ds.delete(r), i.push(this.removeMatchingKeysForTargetId(t, o.targetId)), 
            s++);
        })), Es.waitFor(i).next((() => s));
    }
    getTargetCount(t) {
        return Es.resolve(this.targetCount);
    }
    getTargetData(t, e) {
        const n = this.ds.get(e) || null;
        return Es.resolve(n);
    }
    addMatchingKeys(t, e, n) {
        return this._s.Jn(e, n), Es.resolve();
    }
    removeMatchingKeys(t, e, n) {
        this._s.Xn(e, n);
        const s = this.persistence.referenceDelegate, i = [];
        return s && e.forEach((e => {
            i.push(s.markPotentiallyOrphaned(t, e));
        })), Es.waitFor(i);
    }
    removeMatchingKeysForTargetId(t, e) {
        return this._s.Zn(e), Es.resolve();
    }
    getMatchingKeysForTargetId(t, e) {
        const n = this._s.es(e);
        return Es.resolve(n);
    }
    containsKey(t, e) {
        return Es.resolve(this._s.containsKey(e));
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
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
class cr {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(t, e) {
        this.gs = {}, this.Ne = new g(0), this.xe = !1, this.xe = !0, this.referenceDelegate = t(this), 
        this.qe = new or(this);
        this.Ut = new Hs, this.Ue = function(t, e) {
            return new ir(t, e);
        }(this.Ut, (t => this.referenceDelegate.ps(t))), this.R = new ks(e), this.Qe = new tr(this.R);
    }
    start() {
        return Promise.resolve();
    }
    shutdown() {
        // No durable state to ensure is closed on shutdown.
        return this.xe = !1, Promise.resolve();
    }
    get started() {
        return this.xe;
    }
    setDatabaseDeletedListener() {
        // No op.
    }
    setNetworkEnabled() {
        // No op.
    }
    getIndexManager() {
        return this.Ut;
    }
    getMutationQueue(t) {
        let e = this.gs[t.toKey()];
        return e || (e = new sr(this.Ut, this.referenceDelegate), this.gs[t.toKey()] = e), 
        e;
    }
    getTargetCache() {
        return this.qe;
    }
    getRemoteDocumentCache() {
        return this.Ue;
    }
    getBundleCache() {
        return this.Qe;
    }
    runTransaction(t, e, n) {
        A("MemoryPersistence", "Starting transaction:", t);
        const s = new ur(this.Ne.next());
        return this.referenceDelegate.Es(), n(s).next((t => this.referenceDelegate.Ts(s).next((() => t)))).toPromise().then((t => (s.raiseOnCommittedEvent(), 
        t)));
    }
    Is(t, e) {
        return Es.or(Object.values(this.gs).map((n => () => n.containsKey(t, e))));
    }
}

/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */ class ur extends gs {
    constructor(t) {
        super(), this.currentSequenceNumber = t;
    }
}

class ar {
    constructor(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.As = new er, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.Rs = null;
    }
    static bs(t) {
        return new ar(t);
    }
    get vs() {
        if (this.Rs) return this.Rs;
        throw P();
    }
    addReference(t, e, n) {
        return this.As.addReference(n, e), this.vs.delete(n.toString()), Es.resolve();
    }
    removeReference(t, e, n) {
        return this.As.removeReference(n, e), this.vs.add(n.toString()), Es.resolve();
    }
    markPotentiallyOrphaned(t, e) {
        return this.vs.add(e.toString()), Es.resolve();
    }
    removeTarget(t, e) {
        this.As.Zn(e.targetId).forEach((t => this.vs.add(t.toString())));
        const n = this.persistence.getTargetCache();
        return n.getMatchingKeysForTargetId(t, e.targetId).next((t => {
            t.forEach((t => this.vs.add(t.toString())));
        })).next((() => n.removeTargetData(t, e)));
    }
    Es() {
        this.Rs = new Set;
    }
    Ts(t) {
        // Remove newly orphaned documents.
        const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return Es.forEach(this.vs, (n => {
            const s = nt.fromPath(n);
            return this.Ps(t, s).next((t => {
                t || e.removeEntry(s);
            }));
        })).next((() => (this.Rs = null, e.apply(t))));
    }
    updateLimboDocument(t, e) {
        return this.Ps(t, e).next((t => {
            t ? this.vs.delete(e.toString()) : this.vs.add(e.toString());
        }));
    }
    ps(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }
    Ps(t, e) {
        return Es.or([ () => Es.resolve(this.As.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Is(t, e) ]);
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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class hr {
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

/** A user with a null UID. */ hr.UNAUTHENTICATED = new hr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
hr.GOOGLE_CREDENTIALS = new hr("google-credentials-uid"), hr.FIRST_PARTY = new hr("first-party-uid");

/** Assembles the key for a client state in WebStorage */
function lr(t, e) {
    return `firestore_clients_${t}_${e}`;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>

// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */
function fr(t, e, n) {
    let s = `firestore_mutations_${t}_${n}`;
    return e.isAuthenticated() && (s += `_${e.uid}`), s;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */
function dr(t, e) {
    return `firestore_targets_${t}_${e}`;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
class wr {
    constructor(t, e, n, s) {
        this.user = t, this.batchId = e, this.state = n, this.error = s;
    }
    /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Vs(t, e, n) {
        const s = JSON.parse(n);
        let i, r = "object" == typeof s && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(s.state) && (void 0 === s.error || "object" == typeof s.error);
        return r && s.error && (r = "string" == typeof s.error.message && "string" == typeof s.error.code, 
        r && (i = new E(s.error.code, s.error.message))), r ? new wr(t, e, s.state, i) : (R("SharedClientState", `Failed to parse mutation state for ID '${e}': ${n}`), 
        null);
    }
    Ss() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
class _r {
    constructor(t, e, n) {
        this.targetId = t, this.state = e, this.error = n;
    }
    /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Vs(t, e) {
        const n = JSON.parse(e);
        let s, i = "object" == typeof n && -1 !== [ "not-current", "current", "rejected" ].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error);
        return i && n.error && (i = "string" == typeof n.error.message && "string" == typeof n.error.code, 
        i && (s = new E(n.error.code, n.error.message))), i ? new _r(t, n.state, s) : (R("SharedClientState", `Failed to parse target state for ID '${t}': ${e}`), 
        null);
    }
    Ss() {
        const t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }
}

/**
 * This class represents the immutable ClientState for a client read from
 * WebStorage, containing the list of active query targets.
 */ class mr {
    constructor(t, e) {
        this.clientId = t, this.activeTargetIds = e;
    }
    /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Vs(t, e) {
        const n = JSON.parse(e);
        let s = "object" == typeof n && n.activeTargetIds instanceof Array, i = nn();
        for (let t = 0; s && t < n.activeTargetIds.length; ++t) s = et(n.activeTargetIds[t]), 
        i = i.add(n.activeTargetIds[t]);
        return s ? new mr(t, i) : (R("SharedClientState", `Failed to parse client data for instance '${t}': ${e}`), 
        null);
    }
}

/**
 * This class represents the online state for all clients participating in
 * multi-tab. The online state is only written to by the primary client, and
 * used in secondary clients to update their query views.
 */ class yr {
    constructor(t, e) {
        this.clientId = t, this.onlineState = e;
    }
    /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */    static Vs(t) {
        const e = JSON.parse(t);
        return "object" == typeof e && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(e.onlineState) && "string" == typeof e.clientId ? new yr(e.clientId, e.onlineState) : (R("SharedClientState", `Failed to parse online state: ${t}`), 
        null);
    }
}

/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */
// Visible for testing.
class gr {
    constructor() {
        this.activeTargetIds = nn();
    }
    Ds(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }
    Cs(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */    Ss() {
        const t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }
}

/**
 * `WebStorageSharedClientState` uses WebStorage (window.localStorage) as the
 * backing store for the SharedClientState. It keeps track of all active
 * clients and supports modifications of the local client's data.
 */ class pr {
    constructor(t, e, n, s, i) {
        this.window = t, this.Se = e, this.persistenceKey = n, this.Ns = s, this.syncEngine = null, 
        this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.xs = this.Fs.bind(this), 
        this.ks = new Ue(N), this.started = !1, 
        /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
        this.Os = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.$s = lr(this.persistenceKey, this.Ns), 
        this.Ms = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return `firestore_sequence_number_${t}`;
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
 */ (this.persistenceKey), this.ks = this.ks.insert(this.Ns, new gr), this.Ls = new RegExp(`^firestore_clients_${r}_([^_]*)$`), 
        this.Bs = new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`), this.qs = new RegExp(`^firestore_targets_${r}_(\\d+)$`), 
        this.Us = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return `firestore_online_state_${t}`;
        }
        // The WebStorage prefix that plays as a event to indicate the remote documents
        // might have changed due to some secondary tabs loading a bundle.
        // format of the key is:
        //     firestore_bundle_loaded_<persistenceKey>
        (this.persistenceKey), this.Qs = function(t) {
            return `firestore_bundle_loaded_${t}`;
        }
        // The WebStorage key prefix for the key that stores the last sequence number allocated. The key
        // looks like 'firestore_sequence_number_<persistence_prefix>'.
        (this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.xs);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    static yt(t) {
        return !(!t || !t.localStorage);
    }
    async start() {
        // Retrieve the list of existing clients to backfill the data in
        // SharedClientState.
        const t = await this.syncEngine.fn();
        for (const e of t) {
            if (e === this.Ns) continue;
            const t = this.getItem(lr(this.persistenceKey, e));
            if (t) {
                const n = mr.Vs(e, t);
                n && (this.ks = this.ks.insert(n.clientId, n));
            }
        }
        this.Ks();
        // Check if there is an existing online state and call the callback handler
        // if applicable.
        const e = this.storage.getItem(this.Us);
        if (e) {
            const t = this.js(e);
            t && this.Ws(t);
        }
        for (const t of this.Os) this.Fs(t);
        this.Os = [], 
        // Register a window unload hook to remove the client metadata entry from
        // WebStorage even if `shutdown()` was not called.
        this.window.addEventListener("unload", (() => this.shutdown())), this.started = !0;
    }
    writeSequenceNumber(t) {
        this.setItem(this.Ms, JSON.stringify(t));
    }
    getAllActiveQueryTargets() {
        return this.Gs(this.ks);
    }
    isActiveQueryTarget(t) {
        let e = !1;
        return this.ks.forEach(((n, s) => {
            s.activeTargetIds.has(t) && (e = !0);
        })), e;
    }
    addPendingMutation(t) {
        this.zs(t, "pending");
    }
    updateMutationState(t, e, n) {
        this.zs(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.Hs(t);
    }
    addLocalQueryTarget(t) {
        let e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.isActiveQueryTarget(t)) {
            const n = this.storage.getItem(dr(this.persistenceKey, t));
            if (n) {
                const s = _r.Vs(t, n);
                s && (e = s.state);
            }
        }
        return this.Js.Ds(t), this.Ks(), e;
    }
    removeLocalQueryTarget(t) {
        this.Js.Cs(t), this.Ks();
    }
    isLocalQueryTarget(t) {
        return this.Js.activeTargetIds.has(t);
    }
    clearQueryState(t) {
        this.removeItem(dr(this.persistenceKey, t));
    }
    updateQueryState(t, e, n) {
        this.Ys(t, e, n);
    }
    handleUserChange(t, e, n) {
        e.forEach((t => {
            this.Hs(t);
        })), this.currentUser = t, n.forEach((t => {
            this.addPendingMutation(t);
        }));
    }
    setOnlineState(t) {
        this.Xs(t);
    }
    notifyBundleLoaded() {
        this.Zs();
    }
    shutdown() {
        this.started && (this.window.removeEventListener("storage", this.xs), this.removeItem(this.$s), 
        this.started = !1);
    }
    getItem(t) {
        const e = this.storage.getItem(t);
        return A("SharedClientState", "READ", t, e), e;
    }
    setItem(t, e) {
        A("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }
    removeItem(t) {
        A("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }
    Fs(t) {
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
        const e = t;
        if (e.storageArea === this.storage) {
            if (A("SharedClientState", "EVENT", e.key, e.newValue), e.key === this.$s) return void R("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Se.enqueueRetryable((async () => {
                if (this.started) {
                    if (null !== e.key) if (this.Ls.test(e.key)) {
                        if (null == e.newValue) {
                            const t = this.ti(e.key);
                            return this.ei(t, null);
                        }
                        {
                            const t = this.ni(e.key, e.newValue);
                            if (t) return this.ei(t.clientId, t);
                        }
                    } else if (this.Bs.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.si(e.key, e.newValue);
                            if (t) return this.ii(t);
                        }
                    } else if (this.qs.test(e.key)) {
                        if (null !== e.newValue) {
                            const t = this.ri(e.key, e.newValue);
                            if (t) return this.oi(t);
                        }
                    } else if (e.key === this.Us) {
                        if (null !== e.newValue) {
                            const t = this.js(e.newValue);
                            if (t) return this.Ws(t);
                        }
                    } else if (e.key === this.Ms) {
                        const t = function(t) {
                            let e = g.o;
                            if (null != t) try {
                                const n = JSON.parse(t);
                                V("number" == typeof n), e = n;
                            } catch (t) {
                                R("SharedClientState", "Failed to read sequence number from WebStorage", t);
                            }
                            return e;
                        }
                        /**
 * `MemorySharedClientState` is a simple implementation of SharedClientState for
 * clients using memory persistence. The state in this class remains fully
 * isolated and no synchronization is performed.
 */ (e.newValue);
                        t !== g.o && this.sequenceNumberHandler(t);
                    } else if (e.key === this.Qs) return this.syncEngine.ci();
                } else this.Os.push(e);
            }));
        }
    }
    get Js() {
        return this.ks.get(this.Ns);
    }
    Ks() {
        this.setItem(this.$s, this.Js.Ss());
    }
    zs(t, e, n) {
        const s = new wr(this.currentUser, t, e, n), i = fr(this.persistenceKey, this.currentUser, t);
        this.setItem(i, s.Ss());
    }
    Hs(t) {
        const e = fr(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }
    Xs(t) {
        const e = {
            clientId: this.Ns,
            onlineState: t
        };
        this.storage.setItem(this.Us, JSON.stringify(e));
    }
    Ys(t, e, n) {
        const s = dr(this.persistenceKey, t), i = new _r(t, e, n);
        this.setItem(s, i.Ss());
    }
    Zs() {
        this.setItem(this.Qs, "value-not-used");
    }
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */    ti(t) {
        const e = this.Ls.exec(t);
        return e ? e[1] : null;
    }
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */    ni(t, e) {
        const n = this.ti(t);
        return mr.Vs(n, e);
    }
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    si(t, e) {
        const n = this.Bs.exec(t), s = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return wr.Vs(new hr(i), s, e);
    }
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    ri(t, e) {
        const n = this.qs.exec(t), s = Number(n[1]);
        return _r.Vs(s, e);
    }
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */    js(t) {
        return yr.Vs(t);
    }
    async ii(t) {
        if (t.user.uid === this.currentUser.uid) return this.syncEngine.ui(t.batchId, t.state, t.error);
        A("SharedClientState", `Ignoring mutation for non-active user ${t.user.uid}`);
    }
    oi(t) {
        return this.syncEngine.ai(t.targetId, t.state, t.error);
    }
    ei(t, e) {
        const n = e ? this.ks.insert(t, e) : this.ks.remove(t), s = this.Gs(this.ks), i = this.Gs(n), r = [], o = [];
        return i.forEach((t => {
            s.has(t) || r.push(t);
        })), s.forEach((t => {
            i.has(t) || o.push(t);
        })), this.syncEngine.hi(r, o).then((() => {
            this.ks = n;
        }));
    }
    Ws(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.ks.get(t.clientId) && this.onlineStateHandler(t.onlineState);
    }
    Gs(t) {
        let e = nn();
        return t.forEach(((t, n) => {
            e = e.unionWith(n.activeTargetIds);
        })), e;
    }
}

class Er {
    constructor() {
        this.li = new gr, this.fi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    addPendingMutation(t) {
        // No op.
    }
    updateMutationState(t, e, n) {
        // No op.
    }
    addLocalQueryTarget(t) {
        return this.li.Ds(t), this.fi[t] || "not-current";
    }
    updateQueryState(t, e, n) {
        this.fi[t] = e;
    }
    removeLocalQueryTarget(t) {
        this.li.Cs(t);
    }
    isLocalQueryTarget(t) {
        return this.li.activeTargetIds.has(t);
    }
    clearQueryState(t) {
        delete this.fi[t];
    }
    getAllActiveQueryTargets() {
        return this.li.activeTargetIds;
    }
    isActiveQueryTarget(t) {
        return this.li.activeTargetIds.has(t);
    }
    start() {
        return this.li = new gr, Promise.resolve();
    }
    handleUserChange(t, e, n) {
        // No op.
    }
    setOnlineState(t) {
        // No op.
    }
    shutdown() {}
    writeSequenceNumber(t) {}
    notifyBundleLoaded() {
        // No op.
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
 */ class Tr {
    di(t) {
        // No-op.
    }
    shutdown() {
        // No-op.
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
// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */
/**
 * Browser implementation of ConnectivityMonitor.
 */
class Ir {
    constructor() {
        this.wi = () => this._i(), this.mi = () => this.yi(), this.gi = [], this.pi();
    }
    di(t) {
        this.gi.push(t);
    }
    shutdown() {
        window.removeEventListener("online", this.wi), window.removeEventListener("offline", this.mi);
    }
    pi() {
        window.addEventListener("online", this.wi), window.addEventListener("offline", this.mi);
    }
    _i() {
        A("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (const t of this.gi) t(0 /* AVAILABLE */);
    }
    yi() {
        A("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (const t of this.gi) t(1 /* UNAVAILABLE */);
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static yt() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
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
 */ const Ar = {
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
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */
class Rr {
    constructor(t) {
        this.Ei = t.Ei, this.Ti = t.Ti;
    }
    Ii(t) {
        this.Ai = t;
    }
    Ri(t) {
        this.bi = t;
    }
    onMessage(t) {
        this.vi = t;
    }
    close() {
        this.Ti();
    }
    send(t) {
        this.Ei(t);
    }
    Pi() {
        this.Ai();
    }
    Vi(t) {
        this.bi(t);
    }
    Si(t) {
        this.vi(t);
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
 */ class br extends 
/**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class {
    constructor(t) {
        this.databaseInfo = t, this.databaseId = t.databaseId;
        const e = t.ssl ? "https" : "http";
        this.Di = e + "://" + t.host, this.Ci = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
    }
    Ni(t, e, n, s) {
        const i = this.xi(t, e);
        A("RestConnection", "Sending: ", i, n);
        const r = {};
        return this.Fi(r, s), this.ki(t, i, r, n).then((t => (A("RestConnection", "Received: ", t), 
        t)), (e => {
            throw b("RestConnection", `${t} failed with error: `, e, "url: ", i, "request:", n), 
            e;
        }));
    }
    Oi(t, e, n, s) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ni(t, e, n, s);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    Fi(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.4.0", t["X-Firebase-GMPID"] = this.databaseInfo.appId, 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (const n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
    }
    xi(t, e) {
        const n = Ar[t];
        return `${this.Di}/v1/${e}:${n}`;
    }
} {
    constructor(t) {
        super(t), this.forceLongPolling = t.forceLongPolling, this.autoDetectLongPolling = t.autoDetectLongPolling;
    }
    ki(t, e, n, s) {
        return new Promise(((i, r) => {
            const o = new XhrIo;
            o.listenOnce(EventType.COMPLETE, (() => {
                try {
                    switch (o.getLastErrorCode()) {
                      case ErrorCode.NO_ERROR:
                        const e = o.getResponseJson();
                        A("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case ErrorCode.TIMEOUT:
                        A("Connection", 'RPC "' + t + '" timed out'), r(new E(p.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case ErrorCode.HTTP_ERROR:
                        const n = o.getStatus();
                        if (A("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", o.getResponseText()), 
                        n > 0) {
                            const t = o.getResponseJson().error;
                            if (t && t.status && t.message) {
                                const e = function(t) {
                                    const e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(p).indexOf(e) >= 0 ? e : p.UNKNOWN;
                                }(t.status);
                                r(new E(e, t.message));
                            } else r(new E(p.UNKNOWN, "Server responded with status " + o.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        r(new E(p.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        P();
                    }
                } finally {
                    A("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            const c = JSON.stringify(s);
            o.send(e, "POST", c, n, 15);
        }));
    }
    $i(t, c) {
        const u = [ this.Di, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], a = createWebChannelTransport(), h = getStatEventTarget(), l = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
        };
        this.Fi(l.initMessageHeaders, c), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (l.httpHeadersOverwriteParam = "$httpHeaders");
        const f = u.join("");
        A("Connection", "Creating WebChannel: " + f, l);
        const g = a.createWebChannel(f, l);
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                let T = !1, I = !1;
        // A flag to determine whether the stream was closed (by us or through an
        // error/close event) to avoid delivering multiple close events or sending
        // on a closed stream
                const R = new Rr({
            Ei: t => {
                I ? A("Connection", "Not sending because WebChannel is closed:", t) : (T || (A("Connection", "Opening WebChannel transport."), 
                g.open(), T = !0), A("Connection", "WebChannel sending:", t), g.send(t));
            },
            Ti: () => g.close()
        }), v = (t, e, n) => {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (t => {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((() => {
                        throw t;
                    }), 0);
                }
            }));
        };
        // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
                return v(g, WebChannel.EventType.OPEN, (() => {
            I || A("Connection", "WebChannel transport opened.");
        })), v(g, WebChannel.EventType.CLOSE, (() => {
            I || (I = !0, A("Connection", "WebChannel transport closed"), R.Vi());
        })), v(g, WebChannel.EventType.ERROR, (t => {
            I || (I = !0, b("Connection", "WebChannel transport errored:", t), R.Vi(new E(p.UNAVAILABLE, "The operation could not be completed")));
        })), v(g, WebChannel.EventType.MESSAGE, (t => {
            var e;
            if (!I) {
                const n = t.data[0];
                V(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                const s = n, i = s.error || (null === (e = s[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    A("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    const t = i.status;
                    let e = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const e = Me[t];
                        if (void 0 !== e) return qe(e);
                    }(t), n = i.message;
                    void 0 === e && (e = p.INTERNAL, n = "Unknown error status: " + t + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    I = !0, R.Vi(new E(e, n)), g.close();
                } else A("Connection", "WebChannel received:", n), R.Si(n);
            }
        })), v(h, Event.STAT_EVENT, (t => {
            t.stat === Stat.PROXY ? A("Connection", "Detected buffering proxy") : t.stat === Stat.NOPROXY && A("Connection", "Detected no buffering proxy");
        })), setTimeout((() => {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            R.Pi();
        }), 0), R;
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
/** Initializes the WebChannelConnection for the browser. */
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
/** The Platform's 'window' implementation or null if not available. */
function vr() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Pr() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
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
 */ function Vr(t) {
    return new _n(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
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
class Sr {
    constructor(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n = 1e3
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , s = 1.5
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i = 6e4) {
        this.Se = t, this.timerId = e, this.Mi = n, this.Li = s, this.Bi = i, this.qi = 0, 
        this.Ui = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.Qi = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    reset() {
        this.qi = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */    Ki() {
        this.qi = this.Bi;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */    ji(t) {
        // Cancel any pending backoff operation.
        this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        const e = Math.floor(this.qi + this.Wi()), n = Math.max(0, Date.now() - this.Qi), s = Math.max(0, e - n);
        // Guard against lastAttemptTime being in the future due to a clock change.
                s > 0 && A("ExponentialBackoff", `Backing off for ${s} ms (base delay: ${this.qi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`), 
        this.Ui = this.Se.enqueueAfterDelay(this.timerId, s, (() => (this.Qi = Date.now(), 
        t()))), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.qi *= this.Li, this.qi < this.Mi && (this.qi = this.Mi), this.qi > this.Bi && (this.qi = this.Bi);
    }
    Gi() {
        null !== this.Ui && (this.Ui.skipDelay(), this.Ui = null);
    }
    cancel() {
        null !== this.Ui && (this.Ui.cancel(), this.Ui = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */    Wi() {
        return (Math.random() - .5) * this.qi;
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
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */
class Dr {
    constructor(t, e, n, s, i, r) {
        this.Se = t, this.zi = n, this.Hi = s, this.Ji = i, this.listener = r, this.state = 0 /* Initial */ , 
        /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
        this.Yi = 0, this.Xi = null, this.stream = null, this.Zi = new Sr(t, e);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */    tr() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */    er() {
        return 2 /* Open */ === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */    start() {
        3 /* Error */ !== this.state ? this.auth() : this.nr();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */    async stop() {
        this.tr() && await this.close(0 /* Initial */);
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */    sr() {
        this.state = 0 /* Initial */ , this.Zi.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */    ir() {
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
        this.er() && null === this.Xi && (this.Xi = this.Se.enqueueAfterDelay(this.zi, 6e4, (() => this.rr())));
    }
    /** Sends a message to the underlying stream. */    cr(t) {
        this.ur(), this.stream.send(t);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */    async rr() {
        if (this.er()) 
        // When timing out an idle stream there's no reason to force the stream into backoff when
        // it restarts so set the stream state to Initial instead of Error.
        return this.close(0 /* Initial */);
    }
    /** Marks the stream as active again. */    ur() {
        this.Xi && (this.Xi.cancel(), this.Xi = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */    async close(t, e) {
        // Cancel any outstanding timers (they're guaranteed not to execute).
        this.ur(), this.Zi.cancel(), 
        // Invalidates any stream-related callbacks (e.g. from auth or the
        // underlying stream), guaranteeing they won't execute.
        this.Yi++, 3 /* Error */ !== t ? 
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.Zi.reset() : e && e.code === p.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        R(e.toString()), R("Using maximum backoff delay to prevent overloading the backend."), 
        this.Zi.Ki()) : e && e.code === p.UNAUTHENTICATED && 
        // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
        // just expired.
        this.Ji.invalidateToken(), 
        // Clean up the underlying stream because we are no longer interested in events.
        null !== this.stream && (this.ar(), this.stream.close(), this.stream = null), 
        // This state must be assigned before calling onClose() to allow the callback to
        // inhibit backoff or otherwise manipulate the state in its non-started state.
        this.state = t, 
        // Notify the listener that the stream closed.
        await this.listener.Ri(e);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */    ar() {}
    auth() {
        this.state = 1 /* Starting */;
        const t = this.hr(this.Yi), e = this.Yi;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ji.getToken().then((t => {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            this.Yi === e && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            this.lr(t);
        }), (e => {
            t((() => {
                const t = new E(p.UNKNOWN, "Fetching auth token failed: " + e.message);
                return this.dr(t);
            }));
        }));
    }
    lr(t) {
        const e = this.hr(this.Yi);
        this.stream = this.wr(t), this.stream.Ii((() => {
            e((() => (this.state = 2 /* Open */ , this.listener.Ii())));
        })), this.stream.Ri((t => {
            e((() => this.dr(t)));
        })), this.stream.onMessage((t => {
            e((() => this.onMessage(t)));
        }));
    }
    nr() {
        this.state = 4 /* Backoff */ , this.Zi.ji((async () => {
            this.state = 0 /* Initial */ , this.start();
        }));
    }
    // Visible for tests
    dr(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return A("PersistentStream", `close with error: ${t}`), this.stream = null, this.close(3 /* Error */ , t);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */    hr(t) {
        return e => {
            this.Se.enqueueAndForget((() => this.Yi === t ? e() : (A("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
            Promise.resolve())));
        };
    }
}

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */ class Cr extends Dr {
    constructor(t, e, n, s, i) {
        super(t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , e, n, i), 
        this.R = s;
    }
    wr(t) {
        return this.Hi.$i("Listen", t);
    }
    onMessage(t) {
        // A successful response means the stream is healthy
        this.Zi.reset();
        const e = Cn(this.R, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return O.min();
            const e = t.targetChange;
            return e.targetIds && e.targetIds.length ? O.min() : e.readTime ? pn(e.readTime) : O.min();
        }(t);
        return this.listener._r(e, n);
    }
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */    mr(t) {
        const e = {};
        e.database = vn(this.R), e.addTarget = function(t, e) {
            let n;
            const s = e.target;
            return n = Rt(s) ? {
                documents: kn(t, s)
            } : {
                query: On(t, s)
            }, n.targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = yn(t, e.resumeToken) : e.snapshotVersion.compareTo(O.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = mn(t, e.snapshotVersion.toTimestamp())), n;
        }(this.R, t);
        const n = Mn(this.R, t);
        n && (e.labels = n), this.cr(e);
    }
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */    yr(t) {
        const e = {};
        e.database = vn(this.R), e.removeTarget = t, this.cr(e);
    }
}

/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */ class Nr extends Dr {
    constructor(t, e, n, s, i) {
        super(t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , e, n, i), 
        this.R = s, this.gr = !1;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */    get pr() {
        return this.gr;
    }
    // Override of PersistentStream.start
    start() {
        this.gr = !1, this.lastStreamToken = void 0, super.start();
    }
    ar() {
        this.gr && this.Er([]);
    }
    wr(t) {
        return this.Hi.$i("Write", t);
    }
    onMessage(t) {
        if (
        // Always capture the last stream token.
        V(!!t.streamToken), this.lastStreamToken = t.streamToken, this.gr) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Zi.reset();
            const e = Fn(t.writeResults, t.commitTime), n = pn(t.commitTime);
            return this.listener.Tr(n, e);
        }
        // The first response is always the handshake response
        return V(!t.writeResults || 0 === t.writeResults.length), this.gr = !0, this.listener.Ir();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */    Ar() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        const t = {};
        t.database = vn(this.R), this.cr(t);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */    Er(t) {
        const e = {
            streamToken: this.lastStreamToken,
            writes: t.map((t => Nn(this.R, t)))
        };
        this.cr(e);
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
class xr extends class {} {
    constructor(t, e, n) {
        super(), this.credentials = t, this.Hi = e, this.R = n, this.Rr = !1;
    }
    br() {
        if (this.Rr) throw new E(p.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Gets an auth token and invokes the provided RPC. */    Ni(t, e, n) {
        return this.br(), this.credentials.getToken().then((s => this.Hi.Ni(t, e, n, s))).catch((t => {
            throw t.code === p.UNAUTHENTICATED && this.credentials.invalidateToken(), t;
        }));
    }
    /** Gets an auth token and invokes the provided RPC with streamed results. */    Oi(t, e, n) {
        return this.br(), this.credentials.getToken().then((s => this.Hi.Oi(t, e, n, s))).catch((t => {
            throw t.code === p.UNAUTHENTICATED && this.credentials.invalidateToken(), t;
        }));
    }
    terminate() {
        this.Rr = !1;
    }
}

// TODO(firestorexp): Make sure there is only one Datastore instance per
// firestore-exp client.
/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */
class Fr {
    constructor(t, e) {
        this.asyncQueue = t, this.onlineStateHandler = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
        this.vr = 0, 
        /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
        this.Pr = null, 
        /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
        this.Vr = !0;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */    Sr() {
        0 === this.vr && (this.Dr("Unknown" /* Unknown */), this.Pr = this.asyncQueue.enqueueAfterDelay("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (() => (this.Pr = null, 
        this.Cr("Backend didn't respond within 10 seconds."), this.Dr("Offline" /* Offline */), 
        Promise.resolve()))));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */    Nr(t) {
        "Online" /* Online */ === this.state ? this.Dr("Unknown" /* Unknown */) : (this.vr++, 
        this.vr >= 1 && (this.Fr(), this.Cr(`Connection failed 1 times. Most recent error: ${t.toString()}`), 
        this.Dr("Offline" /* Offline */)));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */    set(t) {
        this.Fr(), this.vr = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Vr = !1), this.Dr(t);
    }
    Dr(t) {
        t !== this.state && (this.state = t, this.onlineStateHandler(t));
    }
    Cr(t) {
        const e = `Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this.Vr ? (R(e), this.Vr = !1) : A("OnlineStateTracker", e);
    }
    Fr() {
        null !== this.Pr && (this.Pr.cancel(), this.Pr = null);
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
 */ class kr {
    constructor(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    e, n, s, i) {
        this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {}, 
        /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
        this.kr = [], 
        /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
        this.Or = new Map, 
        /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
        this.$r = new Set, 
        /**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */
        this.Mr = [], this.Lr = i, this.Lr.di((t => {
            n.enqueueAndForget((async () => {
                // Porting Note: Unlike iOS, `restartNetwork()` is called even when the
                // network becomes unreachable as we don't have any other way to tear
                // down our streams.
                Kr(this) && (A("RemoteStore", "Restarting streams for network reachability change."), 
                await async function(t) {
                    const e = S(t);
                    e.$r.add(4 /* ConnectivityChange */), await $r(e), e.Br.set("Unknown" /* Unknown */), 
                    e.$r.delete(4 /* ConnectivityChange */), await Or(e);
                }(this));
            }));
        })), this.Br = new Fr(n, s);
    }
}

async function Or(t) {
    if (Kr(t)) for (const e of t.Mr) await e(/* enabled= */ !0);
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ async function $r(t) {
    for (const e of t.Mr) await e(/* enabled= */ !1);
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */
function Mr(t, e) {
    const n = S(t);
    n.Or.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Or.set(e.targetId, e), Qr(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Ur(n) : co(n).er() && Br(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function Lr(t, e) {
    const n = S(t), s = co(n);
    n.Or.delete(e), s.er() && qr(n, e), 0 === n.Or.size && (s.er() ? s.ir() : Kr(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Br.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Br(t, e) {
    t.qr.U(e.targetId), co(t).mr(e);
}

/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */ function qr(t, e) {
    t.qr.U(e), co(t).yr(e);
}

function Ur(t) {
    t.qr = new hn({
        getRemoteKeysForTarget: e => t.remoteSyncer.getRemoteKeysForTarget(e),
        lt: e => t.Or.get(e) || null
    }), co(t).start(), t.Br.Sr();
}

/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */ function Qr(t) {
    return Kr(t) && !co(t).tr() && t.Or.size > 0;
}

function Kr(t) {
    return 0 === S(t).$r.size;
}

function jr(t) {
    t.qr = void 0;
}

async function Wr(t) {
    t.Or.forEach(((e, n) => {
        Br(t, e);
    }));
}

async function Gr(t, e) {
    jr(t), 
    // If we still need the watch stream, retry the connection.
    Qr(t) ? (t.Br.Nr(e), Ur(t)) : 
    // No need to restart watch stream because there are no active targets.
    // The online state is set to unknown because there is no active attempt
    // at establishing a connection
    t.Br.set("Unknown" /* Unknown */);
}

async function zr(t, e, n) {
    if (
    // Mark the client as online since we got a message from the server
    t.Br.set("Online" /* Online */), e instanceof un && 2 /* Removed */ === e.state && e.cause) 
    // There was an error on a target, don't wait for a consistent snapshot
    // to raise events
    try {
        await 
        /** Handles an error on a target */
        async function(t, e) {
            const n = e.cause;
            for (const s of e.targetIds) 
            // A watched target might have been removed already.
            t.Or.has(s) && (await t.remoteSyncer.rejectListen(s, n), t.Or.delete(s), t.qr.removeTarget(s));
        }
        /**
 * Attempts to fill our write pipeline with writes from the LocalStore.
 *
 * Called internally to bootstrap or refill the write pipeline and by
 * SyncEngine whenever there are new mutations to process.
 *
 * Starts the write stream if necessary.
 */ (t, e);
    } catch (n) {
        A("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), n), 
        await Hr(t, n);
    } else if (e instanceof on ? t.qr.X(e) : e instanceof cn ? t.qr.rt(e) : t.qr.et(e), 
    !n.isEqual(O.min())) try {
        const e = await Ui(t.localStore);
        n.compareTo(e) >= 0 && 
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().
        await 
        /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */
        function(t, e) {
            const n = t.qr.ut(e);
            // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.
                        return n.targetChanges.forEach(((n, s) => {
                if (n.resumeToken.approximateByteSize() > 0) {
                    const i = t.Or.get(s);
                    // A watched target might have been removed already.
                                        i && t.Or.set(s, i.withResumeToken(n.resumeToken, e));
                }
            })), 
            // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            n.targetMismatches.forEach((e => {
                const n = t.Or.get(e);
                if (!n) 
                // A watched target might have been removed already.
                return;
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                                t.Or.set(e, n.withResumeToken(j.EMPTY_BYTE_STRING, n.snapshotVersion)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                qr(t, e);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                const s = new Fs(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                Br(t, s);
            })), t.remoteSyncer.applyRemoteEvent(n);
        }(t, n);
    } catch (e) {
        A("RemoteStore", "Failed to raise snapshot:", e), await Hr(t, e);
    }
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ async function Hr(t, e, n) {
    if (!bs(e)) throw e;
    t.$r.add(1 /* IndexedDbFailed */), 
    // Disable network and raise offline snapshots
    await $r(t), t.Br.set("Offline" /* Offline */), n || (
    // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    n = () => Ui(t.localStore)), 
    // Probe IndexedDB periodically and re-enable network
    t.asyncQueue.enqueueRetryable((async () => {
        A("RemoteStore", "Retrying IndexedDB access"), await n(), t.$r.delete(1 /* IndexedDbFailed */), 
        await Or(t);
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function Jr(t, e) {
    return e().catch((n => Hr(t, n, e)));
}

async function Yr(t) {
    const e = S(t), n = uo(e);
    let s = e.kr.length > 0 ? e.kr[e.kr.length - 1].batchId : -1;
    for (;Xr(e); ) try {
        const t = await ji(e.localStore, s);
        if (null === t) {
            0 === e.kr.length && n.ir();
            break;
        }
        s = t.batchId, Zr(e, t);
    } catch (t) {
        await Hr(e, t);
    }
    to(e) && eo(e);
}

/**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */ function Xr(t) {
    return Kr(t) && t.kr.length < 10;
}

/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ function Zr(t, e) {
    t.kr.push(e);
    const n = uo(t);
    n.er() && n.pr && n.Er(e.mutations);
}

function to(t) {
    return Kr(t) && !uo(t).tr() && t.kr.length > 0;
}

function eo(t) {
    uo(t).start();
}

async function no(t) {
    uo(t).Ar();
}

async function so(t) {
    const e = uo(t);
    // Send the write pipeline now that the stream is established.
        for (const n of t.kr) e.Er(n.mutations);
}

async function io(t, e, n) {
    const s = t.kr.shift(), i = xs.from(s, e, n);
    await Jr(t, (() => t.remoteSyncer.applySuccessfulWrite(i))), 
    // It's possible that with the completion of this mutation another
    // slot has freed up.
    await Yr(t);
}

async function ro(t, e) {
    // If the write stream closed after the write handshake completes, a write
    // operation failed and we fail the pending operation.
    e && uo(t).pr && 
    // This error affects the actual write.
    await async function(t, e) {
        // Only handle permanent errors here. If it's transient, just let the retry
        // logic kick in.
        if (n = e.code, Be(n) && n !== p.ABORTED) {
            // This was a permanent error, the request itself was the problem
            // so it's not going to succeed if we resend it.
            const n = t.kr.shift();
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
                        uo(t).sr(), await Jr(t, (() => t.remoteSyncer.rejectFailedWrite(n.batchId, e))), 
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            await Yr(t);
        }
        var n;
    }(t, e), 
    // The write stream might have been started by refilling the write
    // pipeline for failed writes
    to(t) && eo(t);
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */
async function oo(t, e) {
    const n = S(t);
    e ? (n.$r.delete(2 /* IsSecondary */), await Or(n)) : e || (n.$r.add(2 /* IsSecondary */), 
    await $r(n), n.Br.set("Unknown" /* Unknown */));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function co(t) {
    return t.Ur || (
    // Create stream (but note that it is not started yet).
    t.Ur = function(t, e, n) {
        const s = S(t);
        return s.br(), new Cr(e, s.Hi, s.credentials, s.R, n);
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
 */ (t.datastore, t.asyncQueue, {
        Ii: Wr.bind(null, t),
        Ri: Gr.bind(null, t),
        _r: zr.bind(null, t)
    }), t.Mr.push((async e => {
        e ? (t.Ur.sr(), Qr(t) ? Ur(t) : t.Br.set("Unknown" /* Unknown */)) : (await t.Ur.stop(), 
        jr(t));
    }))), t.Ur;
}

/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function uo(t) {
    return t.Qr || (
    // Create stream (but note that it is not started yet).
    t.Qr = function(t, e, n) {
        const s = S(t);
        return s.br(), new Nr(e, s.Hi, s.credentials, s.R, n);
    }(t.datastore, t.asyncQueue, {
        Ii: no.bind(null, t),
        Ri: ro.bind(null, t),
        Ir: so.bind(null, t),
        Tr: io.bind(null, t)
    }), t.Mr.push((async e => {
        e ? (t.Qr.sr(), 
        // This will start the write stream if necessary.
        await Yr(t)) : (await t.Qr.stop(), t.kr.length > 0 && (A("RemoteStore", `Stopping write stream with ${t.kr.length} pending writes`), 
        t.kr = []));
    }))), t.Qr;
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
 */
class ao {
    constructor(t, e, n, s, i) {
        this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = s, this.removalCallback = i, 
        this.deferred = new ps, this.then = this.deferred.promise.then.bind(this.deferred.promise), 
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
     */    static createAndSchedule(t, e, n, s, i) {
        const r = Date.now() + n, o = new ao(t, e, r, s, i);
        return o.start(n), o;
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
        null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new E(p.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
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
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function ho(t, e) {
    if (R("AsyncQueue", `${e}: ${t}`), bs(t)) return new E(p.UNAVAILABLE, `${e}: ${t}`);
    throw t;
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
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class lo {
    /** The default ordering is by key if the comparator is omitted */
    constructor(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.comparator = t ? (e, n) => t(e, n) || nt.comparator(e.key, n.key) : (t, e) => nt.comparator(t.key, e.key), 
        this.keyedMap = Je(), this.sortedSet = new Ue(this.comparator);
    }
    /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */    static emptySet(t) {
        return new lo(t.comparator);
    }
    has(t) {
        return null != this.keyedMap.get(t);
    }
    get(t) {
        return this.keyedMap.get(t);
    }
    first() {
        return this.sortedSet.minKey();
    }
    last() {
        return this.sortedSet.maxKey();
    }
    isEmpty() {
        return this.sortedSet.isEmpty();
    }
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */    indexOf(t) {
        const e = this.keyedMap.get(t);
        return e ? this.sortedSet.indexOf(e) : -1;
    }
    get size() {
        return this.sortedSet.size;
    }
    /** Iterates documents in order defined by "comparator" */    forEach(t) {
        this.sortedSet.inorderTraversal(((e, n) => (t(e), !1)));
    }
    /** Inserts or updates a document with the same key */    add(t) {
        // First remove the element if we have it.
        const e = this.delete(t.key);
        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
    }
    /** Deletes a document with a given key */    delete(t) {
        const e = this.get(t);
        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
    }
    isEqual(t) {
        if (!(t instanceof lo)) return !1;
        if (this.size !== t.size) return !1;
        const e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator();
        for (;e.hasNext(); ) {
            const t = e.getNext().key, s = n.getNext().key;
            if (!t.isEqual(s)) return !1;
        }
        return !0;
    }
    toString() {
        const t = [];
        return this.forEach((e => {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }
    copy(t, e) {
        const n = new lo;
        return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n;
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
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class fo {
    constructor() {
        this.Kr = new Ue(nt.comparator);
    }
    track(t) {
        const e = t.doc.key, n = this.Kr.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Kr = this.Kr.insert(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Kr = this.Kr.insert(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Kr = this.Kr.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Kr = this.Kr.insert(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        P() : this.Kr = this.Kr.insert(e, t);
    }
    jr() {
        const t = [];
        return this.Kr.inorderTraversal(((e, n) => {
            t.push(n);
        })), t;
    }
}

class wo {
    constructor(t, e, n, s, i, r, o, c) {
        this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = s, this.mutatedKeys = i, 
        this.fromCache = r, this.syncStateChanged = o, this.excludesMetadataChanges = c;
    }
    /** Returns a view snapshot as if all documents in the snapshot were added. */    static fromInitialDocuments(t, e, n, s) {
        const i = [];
        return e.forEach((t => {
            i.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new wo(t, e, lo.emptySet(e), i, n, s, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }
    get hasPendingWrites() {
        return !this.mutatedKeys.isEmpty();
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && Xt(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
        const e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (let t = 0; t < e.length; t++) if (e[t].type !== n[t].type || !e[t].doc.isEqual(n[t].doc)) return !1;
        return !0;
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
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class _o {
    constructor() {
        this.Wr = void 0, this.listeners = [];
    }
}

class mo {
    constructor() {
        this.queries = new Ei((t => Zt(t)), Xt), this.onlineState = "Unknown" /* Unknown */ , 
        this.Gr = new Set;
    }
}

async function yo(t, e) {
    const n = S(t), s = e.query;
    let i = !1, r = n.queries.get(s);
    if (r || (i = !0, r = new _o), i) try {
        r.Wr = await n.onListen(s);
    } catch (t) {
        const n = ho(t, `Initialization of query '${te(e.query)}' failed`);
        return void e.onError(n);
    }
    n.queries.set(s, r), r.listeners.push(e);
    // Run global snapshot listeners if a consistent snapshot has been emitted.
    e.zr(n.onlineState);
    if (r.Wr) {
        e.Hr(r.Wr) && To(n);
    }
}

async function go(t, e) {
    const n = S(t), s = e.query;
    let i = !1;
    const r = n.queries.get(s);
    if (r) {
        const t = r.listeners.indexOf(e);
        t >= 0 && (r.listeners.splice(t, 1), i = 0 === r.listeners.length);
    }
    if (i) return n.queries.delete(s), n.onUnlisten(s);
}

function po(t, e) {
    const n = S(t);
    let s = !1;
    for (const t of e) {
        const e = t.query, i = n.queries.get(e);
        if (i) {
            for (const e of i.listeners) e.Hr(t) && (s = !0);
            i.Wr = t;
        }
    }
    s && To(n);
}

function Eo(t, e, n) {
    const s = S(t), i = s.queries.get(e);
    if (i) for (const t of i.listeners) t.onError(n);
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        s.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function To(t) {
    t.Gr.forEach((t => {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ class Io {
    constructor(t, e, n) {
        this.query = t, this.Jr = e, 
        /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
        this.Yr = !1, this.Xr = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {};
    }
    /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */    Hr(t) {
        if (!this.options.includeMetadataChanges) {
            // Remove the metadata only changes.
            const e = [];
            for (const n of t.docChanges) 3 /* Metadata */ !== n.type && e.push(n);
            t = new wo(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, 
            /* excludesMetadataChanges= */ !0);
        }
        let e = !1;
        return this.Yr ? this.Zr(t) && (this.Jr.next(t), e = !0) : this.eo(t, this.onlineState) && (this.no(t), 
        e = !0), this.Xr = t, e;
    }
    onError(t) {
        this.Jr.error(t);
    }
    /** Returns whether a snapshot was raised. */    zr(t) {
        this.onlineState = t;
        let e = !1;
        return this.Xr && !this.Yr && this.eo(this.Xr, t) && (this.no(this.Xr), e = !0), 
        e;
    }
    eo(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                const n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return (!this.options.so || !n) && (!t.docs.isEmpty() || "Offline" /* Offline */ === e);
        // Raise data from cache if we have any documents or we are offline
        }
    Zr(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        const e = this.Xr && this.Xr.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }
    no(t) {
        t = wo.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.Yr = !0, 
        this.Jr.next(t);
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
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class Ao {
    constructor(t, 
    // How many bytes this element takes to store in the bundle.
    e) {
        this.payload = t, this.byteLength = e;
    }
    io() {
        return "metadata" in this.payload;
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
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class Ro {
    constructor(t) {
        this.R = t;
    }
    qn(t) {
        return An(this.R, t);
    }
    /**
     * Converts a BundleDocument to a MutableDocument.
     */    Un(t) {
        return t.metadata.exists ? Sn(this.R, t.document, !1) : gt.newNoDocument(this.qn(t.metadata.name), this.Qn(t.metadata.readTime));
    }
    Qn(t) {
        return pn(t);
    }
}

/**
 * A class to process the elements from a bundle, load them into local
 * storage and provide progress update while loading.
 */ class bo {
    constructor(t, e, n) {
        this.ro = t, this.localStore = e, this.R = n, 
        /** Batched queries to be saved into storage */
        this.queries = [], 
        /** Batched documents to be saved into storage */
        this.documents = [], this.progress = vo(t);
    }
    /**
     * Adds an element from the bundle to the loader.
     *
     * Returns a new progress if adding the element leads to a new progress,
     * otherwise returns null.
     */    oo(t) {
        this.progress.bytesLoaded += t.byteLength;
        let e = this.progress.documentsLoaded;
        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
            metadata: t.payload.documentMetadata
        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, 
        ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, 
        Object.assign({}, this.progress)) : null;
    }
    co(t) {
        const e = new Map, n = new Ro(this.R);
        for (const s of t) if (s.metadata.queries) {
            const t = n.qn(s.metadata.name);
            for (const n of s.metadata.queries) {
                const s = (e.get(n) || tn()).add(t);
                e.set(n, s);
            }
        }
        return e;
    }
    /**
     * Update the progress to 'Success' and return the updated progress.
     */    async complete() {
        const t = await Xi(this.localStore, new Ro(this.R), this.documents, this.ro.id), e = this.co(this.documents);
        for (const t of this.queries) await Zi(this.localStore, t, e.get(t.name));
        return this.progress.taskState = "Success", new Fi(Object.assign({}, this.progress), t);
    }
}

/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */ function vo(t) {
    return {
        taskState: "Running",
        documentsLoaded: 0,
        bytesLoaded: 0,
        totalDocuments: t.totalDocuments,
        totalBytes: t.totalBytes
    };
}

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
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
class Po {
    constructor(t) {
        this.key = t;
    }
}

class Vo {
    constructor(t) {
        this.key = t;
    }
}

/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */ class So {
    constructor(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.uo = e, this.ao = null, 
        /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
        this.current = !1, 
        /** Documents in the view but not in the remote target */
        this.ho = tn(), 
        /** Document Keys that have local changes */
        this.mutatedKeys = tn(), this.lo = ne(t), this.fo = new lo(this.lo);
    }
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */    get wo() {
        return this.uo;
    }
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */    _o(t, e) {
        const n = e ? e.mo : new fo, s = e ? e.fo : this.fo;
        let i = e ? e.mutatedKeys : this.mutatedKeys, r = s, o = !1;
        // Track the last doc in a (full) limit. This is necessary, because some
        // update (a delete, or an update moving a doc past the old limit) might
        // mean there is some other document in the local cache that either should
        // come (1) between the old last limit doc and the new last document, in the
        // case of updates, or (2) after the new last document, in the case of
        // deletes. So we keep this doc at the old limit to compare the updates to.
        // Note that this should never get used in a refill (when previousChanges is
        // set), because there will only be adds -- no deletes or updates.
        const c = Kt(this.query) && s.size === this.query.limit ? s.last() : null, u = jt(this.query) && s.size === this.query.limit ? s.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.inorderTraversal(((t, e) => {
            const a = s.get(t), h = ee(this.query, e) ? e : null, l = !!a && this.mutatedKeys.has(a.key), f = !!h && (h.hasLocalMutations || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            this.mutatedKeys.has(h.key) && h.hasCommittedMutations);
            let d = !1;
            // Calculate change
                        if (a && h) {
                a.data.isEqual(h.data) ? l !== f && (n.track({
                    type: 3 /* Metadata */ ,
                    doc: h
                }), d = !0) : this.yo(a, h) || (n.track({
                    type: 2 /* Modified */ ,
                    doc: h
                }), d = !0, (c && this.lo(h, c) > 0 || u && this.lo(h, u) < 0) && (
                // This doc moved from inside the limit to outside the limit.
                // That means there may be some other doc in the local cache
                // that should be included instead.
                o = !0));
            } else !a && h ? (n.track({
                type: 0 /* Added */ ,
                doc: h
            }), d = !0) : a && !h && (n.track({
                type: 1 /* Removed */ ,
                doc: a
            }), d = !0, (c || u) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            o = !0));
            d && (h ? (r = r.add(h), i = f ? i.add(t) : i.delete(t)) : (r = r.delete(t), i = i.delete(t)));
        })), Kt(this.query) || jt(this.query)) for (;r.size > this.query.limit; ) {
            const t = Kt(this.query) ? r.last() : r.first();
            r = r.delete(t.key), i = i.delete(t.key), n.track({
                type: 1 /* Removed */ ,
                doc: t
            });
        }
        return {
            fo: r,
            mo: n,
            Nn: o,
            mutatedKeys: i
        };
    }
    yo(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
    }
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    applyChanges(t, e, n) {
        const s = this.fo;
        this.fo = t.fo, this.mutatedKeys = t.mutatedKeys;
        // Sort changes based on type and query comparator
        const i = t.mo.jr();
        i.sort(((t, e) => function(t, e) {
            const n = t => {
                switch (t) {
                  case 0 /* Added */ :
                    return 1;

                  case 2 /* Modified */ :
                  case 3 /* Metadata */ :
                    // A metadata change is converted to a modified change at the public
                    // api layer.  Since we sort by document key and then change type,
                    // metadata and modified changes must be sorted equivalently.
                    return 2;

                  case 1 /* Removed */ :
                    return 0;

                  default:
                    return P();
                }
            };
            return n(t) - n(e);
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
 */ (t.type, e.type) || this.lo(t.doc, e.doc))), this.po(n);
        const r = e ? this.Eo() : [], o = 0 === this.ho.size && this.current ? 1 /* Synced */ : 0 /* Local */ , c = o !== this.ao;
        if (this.ao = o, 0 !== i.length || c) {
            return {
                snapshot: new wo(this.query, t.fo, s, i, t.mutatedKeys, 0 /* Local */ === o, c, 
                /* excludesMetadataChanges= */ !1),
                To: r
            };
        }
        // no changes
        return {
            To: r
        };
    }
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */    zr(t) {
        return this.current && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.current = !1, this.applyChanges({
            fo: this.fo,
            mo: new fo,
            mutatedKeys: this.mutatedKeys,
            Nn: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            To: []
        };
    }
    /**
     * Returns whether the doc for the given key should be in limbo.
     */    Io(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.uo.has(t) && (
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.fo.has(t) && !this.fo.get(t).hasLocalMutations);
    }
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */    po(t) {
        t && (t.addedDocuments.forEach((t => this.uo = this.uo.add(t))), t.modifiedDocuments.forEach((t => {})), 
        t.removedDocuments.forEach((t => this.uo = this.uo.delete(t))), this.current = t.current);
    }
    Eo() {
        // We can only determine limbo documents when we're in-sync with the server.
        if (!this.current) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                const t = this.ho;
        this.ho = tn(), this.fo.forEach((t => {
            this.Io(t.key) && (this.ho = this.ho.add(t.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        const e = [];
        return t.forEach((t => {
            this.ho.has(t) || e.push(new Vo(t));
        })), this.ho.forEach((n => {
            t.has(n) || e.push(new Po(n));
        })), e;
    }
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    Ao(t) {
        this.uo = t.Bn, this.ho = tn();
        const e = this._o(t.documents);
        return this.applyChanges(e, /*updateLimboDocuments=*/ !0);
    }
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    Ro() {
        return wo.fromInitialDocuments(this.query, this.fo, this.mutatedKeys, 0 /* Local */ === this.ao);
    }
}

/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */
class Do {
    constructor(
    /**
     * The query itself.
     */
    t, 
    /**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
    e, 
    /**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
    n) {
        this.query = t, this.targetId = e, this.view = n;
    }
}

/** Tracks a limbo resolution. */ class Co {
    constructor(t) {
        this.key = t, 
        /**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */
        this.bo = !1;
    }
}

/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class No {
    constructor(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    s, i, r) {
        this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = s, 
        this.currentUser = i, this.maxConcurrentLimboResolutions = r, this.vo = {}, this.Po = new Ei((t => Zt(t)), Xt), 
        this.Vo = new Map, 
        /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */
        this.So = new Set, 
        /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
        this.Do = new Ue(nt.comparator), 
        /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
        this.Co = new Map, this.No = new er, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.xo = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Fo = new Map, this.ko = ui.Yt(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Oo = void 0;
    }
    get isPrimaryClient() {
        return !0 === this.Oo;
    }
}

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
async function xo(t, e) {
    const n = uc(t);
    let s, i;
    const r = n.Po.get(e);
    if (r) 
    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
    // already exists when EventManager calls us for the first time. This
    // happens when the primary tab is already listening to this query on
    // behalf of another tab and the user of the primary also starts listening
    // to the query. EventManager will not have an assigned target ID in this
    // case and calls `listen` to obtain this ID.
    s = r.targetId, n.sharedClientState.addLocalQueryTarget(s), i = r.view.Ro(); else {
        const t = await Wi(n.localStore, Jt(e)), r = n.sharedClientState.addLocalQueryTarget(t.targetId);
        s = t.targetId, i = await Fo(n, e, s, "current" === r), n.isPrimaryClient && Mr(n.remoteStore, t);
    }
    return i;
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ async function Fo(t, e, n, s) {
    // PORTING NOTE: On Web only, we inject the code that registers new Limbo
    // targets based on view changes. This allows us to only depend on Limbo
    // changes when user code includes queries.
    t.$o = (e, n, s) => async function(t, e, n, s) {
        let i = e.view._o(n);
        i.Nn && (
        // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        i = await zi(t.localStore, e.query, 
        /* usePreviousResults= */ !1).then((({documents: t}) => e.view._o(t, i))));
        const r = s && s.targetChanges.get(e.targetId), o = e.view.applyChanges(i, 
        /* updateLimboDocuments= */ t.isPrimaryClient, r);
        return Go(t, e.targetId, o.To), o.snapshot;
    }(t, e, n, s);
    const i = await zi(t.localStore, e, 
    /* usePreviousResults= */ !0), r = new So(e, i.Bn), o = r._o(i.documents), c = rn.createSynthesizedTargetChangeForCurrentChange(n, s && "Offline" /* Offline */ !== t.onlineState), u = r.applyChanges(o, 
    /* updateLimboDocuments= */ t.isPrimaryClient, c);
    Go(t, n, u.To);
    const a = new Do(e, n, r);
    return t.Po.set(e, a), t.Vo.has(n) ? t.Vo.get(n).push(e) : t.Vo.set(n, [ e ]), u.snapshot;
}

/** Stops listening to the query. */ async function ko(t, e) {
    const n = S(t), s = n.Po.get(e), i = n.Vo.get(s.targetId);
    if (i.length > 1) return n.Vo.set(s.targetId, i.filter((t => !Xt(t, e)))), void n.Po.delete(e);
    // No other queries are mapped to the target, clean up the query and the target.
        if (n.isPrimaryClient) {
        // We need to remove the local query target first to allow us to verify
        // whether any other client is still interested in this target.
        n.sharedClientState.removeLocalQueryTarget(s.targetId);
        n.sharedClientState.isActiveQueryTarget(s.targetId) || await Gi(n.localStore, s.targetId, 
        /*keepPersistedTargetData=*/ !1).then((() => {
            n.sharedClientState.clearQueryState(s.targetId), Lr(n.remoteStore, s.targetId), 
            jo(n, s.targetId);
        })).catch(di);
    } else jo(n, s.targetId), await Gi(n.localStore, s.targetId, 
    /*keepPersistedTargetData=*/ !0);
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ async function Oo(t, e, n) {
    const s = ac(t);
    try {
        const t = await function(t, e) {
            const n = S(t), s = k.now(), i = e.reduce(((t, e) => t.add(e.key)), tn());
            let r;
            return n.persistence.runTransaction("Locally write mutations", "readwrite", (t => n.Mn.pn(t, i).next((i => {
                r = i;
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                const o = [];
                for (const t of e) {
                    const e = Pe(t, r.get(t.key));
                    null != e && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    o.push(new Ce(t.key, e, yt(e.toProto().mapValue), Ie.exists(!0)));
                }
                return n._n.addMutationBatch(t, s, o, e);
            })))).then((t => (t.applyToLocalDocumentSet(r), {
                batchId: t.batchId,
                changes: r
            })));
        }(s.localStore, e);
        s.sharedClientState.addPendingMutation(t.batchId), function(t, e, n) {
            let s = t.xo[t.currentUser.toKey()];
            s || (s = new Ue(N));
            s = s.insert(e, n), t.xo[t.currentUser.toKey()] = s;
        }
        /**
 * Resolves or rejects the user callback for the given batch and then discards
 * it.
 */ (s, t.batchId, n), await Jo(s, t.changes), await Yr(s.remoteStore);
    } catch (t) {
        // If we can't persist the mutation, we reject the user callback and
        // don't send the mutation. The user can then retry the write.
        const e = ho(t, "Failed to persist write");
        n.reject(e);
    }
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ async function $o(t, e) {
    const n = S(t);
    try {
        const t = await Qi(n.localStore, e);
        // Update `receivedDocument` as appropriate for any limbo targets.
                e.targetChanges.forEach(((t, e) => {
            const s = n.Co.get(e);
            s && (
            // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            V(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), 
            t.addedDocuments.size > 0 ? s.bo = !0 : t.modifiedDocuments.size > 0 ? V(s.bo) : t.removedDocuments.size > 0 && (V(s.bo), 
            s.bo = !1));
        })), await Jo(n, t, e);
    } catch (t) {
        await di(t);
    }
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Mo(t, e, n) {
    const s = S(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (s.isPrimaryClient && 0 /* RemoteStore */ === n || !s.isPrimaryClient && 1 /* SharedClientState */ === n) {
        const t = [];
        s.Po.forEach(((n, s) => {
            const i = s.view.zr(e);
            i.snapshot && t.push(i.snapshot);
        })), function(t, e) {
            const n = S(t);
            n.onlineState = e;
            let s = !1;
            n.queries.forEach(((t, n) => {
                for (const t of n.listeners) 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                t.zr(e) && (s = !0);
            })), s && To(n);
        }(s.eventManager, e), t.length && s.vo._r(t), s.onlineState = e, s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ async function Lo(t, e, n) {
    const s = S(t);
    // PORTING NOTE: Multi-tab only.
        s.sharedClientState.updateQueryState(e, "rejected", n);
    const i = s.Co.get(e), r = i && i.key;
    if (r) {
        // TODO(klimt): We really only should do the following on permission
        // denied errors, but we don't have the cause code here.
        // It's a limbo doc. Create a synthetic event saying it was deleted.
        // This is kind of a hack. Ideally, we would have a method in the local
        // store to purge a document. However, it would be tricky to keep all of
        // the local store's invariants with another method.
        let t = new Ue(nt.comparator);
        t = t.insert(r, gt.newNoDocument(r, O.min()));
        const n = tn().add(r), i = new sn(O.min(), 
        /* targetChanges= */ new Map, 
        /* targetMismatches= */ new je(N), t, n);
        await $o(s, i), 
        // Since this query failed, we won't want to manually unlisten to it.
        // We only remove it from bookkeeping after we successfully applied the
        // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
        // this query when the RemoteStore restarts the Watch stream, which should
        // re-trigger the target failure.
        s.Do = s.Do.remove(r), s.Co.delete(e), Ho(s);
    } else await Gi(s.localStore, e, 
    /* keepPersistedTargetData */ !1).then((() => jo(s, e, n))).catch(di);
}

async function Bo(t, e) {
    const n = S(t), s = e.batch.batchId;
    try {
        const t = await qi(n.localStore, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught
        // up), so we raise user callbacks first so that they consistently happen
        // before listen events.
                Ko(n, s, /*error=*/ null), Qo(n, s), n.sharedClientState.updateMutationState(s, "acknowledged"), 
        await Jo(n, t);
    } catch (t) {
        await di(t);
    }
}

async function qo(t, e, n) {
    const s = S(t);
    try {
        const t = await function(t, e) {
            const n = S(t);
            return n.persistence.runTransaction("Reject batch", "readwrite-primary", (t => {
                let s;
                return n._n.lookupMutationBatch(t, e).next((e => (V(null !== e), s = e.keys(), n._n.removeMutationBatch(t, e)))).next((() => n._n.performConsistencyCheck(t))).next((() => n.Mn.pn(t, s)));
            }));
        }
        /**
 * Returns the largest (latest) batch id in mutation queue that is pending
 * server response.
 *
 * Returns `BATCHID_UNKNOWN` if the queue is empty.
 */ (s.localStore, e);
        // The local store may or may not be able to apply the write result and
        // raise events immediately (depending on whether the watcher is caught up),
        // so we raise user callbacks first so that they consistently happen before
        // listen events.
                Ko(s, e, n), Qo(s, e), s.sharedClientState.updateMutationState(e, "rejected", n), 
        await Jo(s, t);
    } catch (n) {
        await di(n);
    }
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ async function Uo(t, e) {
    const n = S(t);
    Kr(n.remoteStore) || A("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");
    try {
        const t = await function(t) {
            const e = S(t);
            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (t => e._n.getHighestUnacknowledgedBatchId(t)));
        }(n.localStore);
        if (-1 === t) 
        // Trigger the callback right away if there is no pending writes at the moment.
        return void e.resolve();
        const s = n.Fo.get(t) || [];
        s.push(e), n.Fo.set(t, s);
    } catch (t) {
        const n = ho(t, "Initialization of waitForPendingWrites() operation failed");
        e.reject(n);
    }
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function Qo(t, e) {
    (t.Fo.get(e) || []).forEach((t => {
        t.resolve();
    })), t.Fo.delete(e);
}

/** Reject all outstanding callbacks waiting for pending writes to complete. */ function Ko(t, e, n) {
    const s = S(t);
    let i = s.xo[s.currentUser.toKey()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
        if (i) {
        const t = i.get(e);
        t && (n ? t.reject(n) : t.resolve(), i = i.remove(e)), s.xo[s.currentUser.toKey()] = i;
    }
}

function jo(t, e, n = null) {
    t.sharedClientState.removeLocalQueryTarget(e);
    for (const s of t.Vo.get(e)) t.Po.delete(s), n && t.vo.Mo(s, n);
    if (t.Vo.delete(e), t.isPrimaryClient) {
        t.No.Zn(e).forEach((e => {
            t.No.containsKey(e) || 
            // We removed the last reference for this key
            Wo(t, e);
        }));
    }
}

function Wo(t, e) {
    t.So.delete(e.path.canonicalString());
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    const n = t.Do.get(e);
    null !== n && (Lr(t.remoteStore, n), t.Do = t.Do.remove(e), t.Co.delete(n), Ho(t));
}

function Go(t, e, n) {
    for (const s of n) if (s instanceof Po) t.No.addReference(s.key, e), zo(t, s); else if (s instanceof Vo) {
        A("SyncEngine", "Document no longer in limbo: " + s.key), t.No.removeReference(s.key, e);
        t.No.containsKey(s.key) || 
        // We removed the last reference for this key
        Wo(t, s.key);
    } else P();
}

function zo(t, e) {
    const n = e.key, s = n.path.canonicalString();
    t.Do.get(n) || t.So.has(s) || (A("SyncEngine", "New document in limbo: " + n), t.So.add(s), 
    Ho(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Ho(t) {
    for (;t.So.size > 0 && t.Do.size < t.maxConcurrentLimboResolutions; ) {
        const e = t.So.values().next().value;
        t.So.delete(e);
        const n = new nt(q.fromString(e)), s = t.ko.next();
        t.Co.set(s, new Co(n)), t.Do = t.Do.insert(n, s), Mr(t.remoteStore, new Fs(Jt(Qt(n.path)), s, 2 /* LimboResolution */ , g.o));
    }
}

async function Jo(t, e, n) {
    const s = S(t), i = [], r = [], o = [];
    s.Po.isEmpty() || (s.Po.forEach(((t, c) => {
        o.push(s.$o(c, e, n).then((t => {
            if (t) {
                s.isPrimaryClient && s.sharedClientState.updateQueryState(c.targetId, t.fromCache ? "not-current" : "current"), 
                i.push(t);
                const e = Oi.Pn(c.targetId, t);
                r.push(e);
            }
        })));
    })), await Promise.all(o), s.vo._r(i), await async function(t, e) {
        const n = S(t);
        try {
            await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (t => Es.forEach(e, (e => Es.forEach(e.bn, (s => n.persistence.referenceDelegate.addReference(t, e.targetId, s))).next((() => Es.forEach(e.vn, (s => n.persistence.referenceDelegate.removeReference(t, e.targetId, s)))))))));
        } catch (t) {
            if (!bs(t)) throw t;
            // If `notifyLocalViewChanges` fails, we did not advance the sequence
            // number for the documents that were included in this transaction.
            // This might trigger them to be deleted earlier than they otherwise
            // would have, but it should not invalidate the integrity of the data.
            A("LocalStore", "Failed to update sequence numbers: " + t);
        }
        for (const t of e) {
            const e = t.targetId;
            if (!t.fromCache) {
                const t = n.Fn.get(e), s = t.snapshotVersion, i = t.withLastLimboFreeSnapshotVersion(s);
                // Advance the last limbo free snapshot version
                                n.Fn = n.Fn.insert(e, i);
            }
        }
    }(s.localStore, r));
}

async function Yo(t, e) {
    const n = S(t);
    if (!n.currentUser.isEqual(e)) {
        A("SyncEngine", "User change. New user:", e.toKey());
        const t = await Bi(n.localStore, e);
        n.currentUser = e, 
        // Fails tasks waiting for pending writes requested by previous user.
        function(t, e) {
            t.Fo.forEach((t => {
                t.forEach((t => {
                    t.reject(new E(p.CANCELLED, e));
                }));
            })), t.Fo.clear();
        }(n, "'waitForPendingWrites' promise is rejected due to a user change."), 
        // TODO(b/114226417): Consider calling this only in the primary tab.
        n.sharedClientState.handleUserChange(e, t.removedBatchIds, t.addedBatchIds), await Jo(n, t.Ln);
    }
}

function Xo(t, e) {
    const n = S(t), s = n.Co.get(e);
    if (s && s.bo) return tn().add(s.key);
    {
        let t = tn();
        const s = n.Vo.get(e);
        if (!s) return t;
        for (const e of s) {
            const s = n.Po.get(e);
            t = t.unionWith(s.view.wo);
        }
        return t;
    }
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ async function Zo(t, e) {
    const n = S(t), s = await zi(n.localStore, e.query, 
    /* usePreviousResults= */ !0), i = e.view.Ao(s);
    return n.isPrimaryClient && Go(n, e.targetId, i.To), i;
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
async function tc(t) {
    const e = S(t);
    return Ji(e.localStore).then((t => Jo(e, t)));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
async function ec(t, e, n, s) {
    const i = S(t), r = await function(t, e) {
        const n = S(t), s = S(n._n);
        return n.persistence.runTransaction("Lookup mutation documents", "readonly", (t => s.jt(t, e).next((e => e ? n.Mn.pn(t, e) : Es.resolve(null)))));
    }
    // PORTING NOTE: Multi-Tab only.
    (i.localStore, e);
    null !== r ? ("pending" === n ? 
    // If we are the primary client, we need to send this write to the
    // backend. Secondary clients will ignore these writes since their remote
    // connection is disabled.
    await Yr(i.remoteStore) : "acknowledged" === n || "rejected" === n ? (
    // NOTE: Both these methods are no-ops for batches that originated from
    // other clients.
    Ko(i, e, s || null), Qo(i, e), function(t, e) {
        S(S(t)._n).Gt(e);
    }
    // PORTING NOTE: Multi-Tab only.
    (i.localStore, e)) : P(), await Jo(i, r)) : 
    // A throttled tab may not have seen the mutation before it was completed
    // and removed from the mutation queue, in which case we won't have cached
    // the affected documents. In this case we can safely ignore the update
    // since that means we didn't apply the mutation locally at all (if we
    // had, we would have cached the affected documents), and so we will just
    // see any resulting document changes via normal remote document updates
    // as applicable.
    A("SyncEngine", "Cannot apply mutation batch with id: " + e);
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
async function nc(t, e) {
    const n = S(t);
    if (uc(n), ac(n), !0 === e && !0 !== n.Oo) {
        // Secondary tabs only maintain Views for their local listeners and the
        // Views internal state may not be 100% populated (in particular
        // secondary tabs don't track syncedDocuments, the set of documents the
        // server considers to be in the target). So when a secondary becomes
        // primary, we need to need to make sure that all views for all targets
        // match the state on disk.
        const t = n.sharedClientState.getAllActiveQueryTargets(), e = await sc(n, t.toArray());
        n.Oo = !0, await oo(n.remoteStore, !0);
        for (const t of e) Mr(n.remoteStore, t);
    } else if (!1 === e && !1 !== n.Oo) {
        const t = [];
        let e = Promise.resolve();
        n.Vo.forEach(((s, i) => {
            n.sharedClientState.isLocalQueryTarget(i) ? t.push(i) : e = e.then((() => (jo(n, i), 
            Gi(n.localStore, i, 
            /*keepPersistedTargetData=*/ !0)))), Lr(n.remoteStore, i);
        })), await e, await sc(n, t), 
        // PORTING NOTE: Multi-Tab only.
        function(t) {
            const e = S(t);
            e.Co.forEach(((t, n) => {
                Lr(e.remoteStore, n);
            })), e.No.ts(), e.Co = new Map, e.Do = new Ue(nt.comparator);
        }
        /**
 * Reconcile the query views of the provided query targets with the state from
 * persistence. Raises snapshots for any changes that affect the local
 * client and returns the updated state of all target's query data.
 *
 * @param syncEngine - The sync engine implementation
 * @param targets - the list of targets with views that need to be recomputed
 * @param transitionToPrimary - `true` iff the tab transitions from a secondary
 * tab to a primary tab
 */
        // PORTING NOTE: Multi-Tab only.
        (n), n.Oo = !1, await oo(n.remoteStore, !1);
    }
}

async function sc(t, e, n) {
    const s = S(t), i = [], r = [];
    for (const t of e) {
        let e;
        const n = s.Vo.get(t);
        if (n && 0 !== n.length) {
            // For queries that have a local View, we fetch their current state
            // from LocalStore (as the resume token and the snapshot version
            // might have changed) and reconcile their views with the persisted
            // state (the list of syncedDocuments may have gotten out of sync).
            e = await Wi(s.localStore, Jt(n[0]));
            for (const t of n) {
                const e = s.Po.get(t), n = await Zo(s, e);
                n.snapshot && r.push(n.snapshot);
            }
        } else {
            // For queries that never executed on this client, we need to
            // allocate the target in LocalStore and initialize a new View.
            const n = await Hi(s.localStore, t);
            e = await Wi(s.localStore, n), await Fo(s, ic(n), t, 
            /*current=*/ !1);
        }
        i.push(e);
    }
    return s.vo._r(r), i;
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function ic(t) {
    return Ut(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function rc(t) {
    const e = S(t);
    return S(S(e.localStore).persistence).fn();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
async function oc(t, e, n, s) {
    const i = S(t);
    if (i.Oo) 
    // If we receive a target state notification via WebStorage, we are
    // either already secondary or another tab has taken the primary lease.
    A("SyncEngine", "Ignoring unexpected query state notification."); else if (i.Vo.has(e)) switch (n) {
      case "current":
      case "not-current":
        {
            const t = await Ji(i.localStore), s = sn.createSynthesizedRemoteEventForCurrentChange(e, "current" === n);
            await Jo(i, t, s);
            break;
        }

      case "rejected":
        await Gi(i.localStore, e, 
        /* keepPersistedTargetData */ !0), jo(i, e, s);
        break;

      default:
        P();
    }
}

/** Adds or removes Watch targets for queries from different tabs. */ async function cc(t, e, n) {
    const s = uc(t);
    if (s.Oo) {
        for (const t of e) {
            if (s.Vo.has(t)) {
                // A target might have been added in a previous attempt
                A("SyncEngine", "Adding an already active target " + t);
                continue;
            }
            const e = await Hi(s.localStore, t), n = await Wi(s.localStore, e);
            await Fo(s, ic(e), n.targetId, 
            /*current=*/ !1), Mr(s.remoteStore, n);
        }
        for (const t of n) 
        // Check that the target is still active since the target might have been
        // removed if it has been rejected by the backend.
        s.Vo.has(t) && 
        // Release queries that are still active.
        await Gi(s.localStore, t, 
        /* keepPersistedTargetData */ !1).then((() => {
            Lr(s.remoteStore, t), jo(s, t);
        })).catch(di);
    }
}

function uc(t) {
    const e = S(t);
    return e.remoteStore.remoteSyncer.applyRemoteEvent = $o.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Xo.bind(null, e), 
    e.remoteStore.remoteSyncer.rejectListen = Lo.bind(null, e), e.vo._r = po.bind(null, e.eventManager), 
    e.vo.Mo = Eo.bind(null, e.eventManager), e;
}

function ac(t) {
    const e = S(t);
    return e.remoteStore.remoteSyncer.applySuccessfulWrite = Bo.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = qo.bind(null, e), 
    e;
}

/**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */ function hc(t, e, n) {
    const s = S(t);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (async function(t, e, n) {
        try {
            const s = await e.getMetadata();
            if (await function(t, e) {
                const n = S(t), s = pn(e.createTime);
                return n.persistence.runTransaction("hasNewerBundle", "readonly", (t => n.Qe.getBundleMetadata(t, e.id))).then((t => !!t && t.createTime.compareTo(s) >= 0));
            }
            /**
 * Saves the given `BundleMetadata` to local persistence.
 */ (t.localStore, s)) return await e.close(), void n._completeWith(function(t) {
                return {
                    taskState: "Success",
                    documentsLoaded: t.totalDocuments,
                    bytesLoaded: t.totalBytes,
                    totalDocuments: t.totalDocuments,
                    totalBytes: t.totalBytes
                };
            }(s));
            n._updateProgress(vo(s));
            const i = new bo(s, t.localStore, e.R);
            let r = await e.Lo();
            for (;r; ) {
                const t = await i.oo(r);
                t && n._updateProgress(t), r = await e.Lo();
            }
            const o = await i.complete();
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
                        await Jo(t, o.wn, 
            /* remoteEvent */ void 0), 
            // Save metadata, so loading the same bundle will skip.
            await function(t, e) {
                const n = S(t);
                return n.persistence.runTransaction("Save bundle", "readwrite", (t => n.Qe.saveBundleMetadata(t, e)));
            }
            /**
 * Returns a promise of a `NamedQuery` associated with given query name. Promise
 * resolves to undefined if no persisted data can be found.
 */ (t.localStore, s), n._completeWith(o.progress);
        } catch (t) {
            b("SyncEngine", `Loading bundle failed with ${t}`), n._failWith(t);
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
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */)(s, e, n).then((() => {
        s.sharedClientState.notifyBundleLoaded();
    }));
}

class lc {
    constructor() {
        this.synchronizeTabs = !1;
    }
    async initialize(t) {
        this.R = Vr(t.databaseInfo.databaseId), this.sharedClientState = this.Bo(t), this.persistence = this.qo(t), 
        await this.persistence.start(), this.gcScheduler = this.Uo(t), this.localStore = this.Qo(t);
    }
    Uo(t) {
        return null;
    }
    Qo(t) {
        return Li(this.persistence, new $i, t.initialUser, this.R);
    }
    qo(t) {
        return new cr(ar.bs, this.R);
    }
    Bo(t) {
        return new Er;
    }
    async terminate() {
        this.gcScheduler && this.gcScheduler.stop(), await this.sharedClientState.shutdown(), 
        await this.persistence.shutdown();
    }
}

/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */ class fc extends lc {
    constructor(t, e, n) {
        super(), this.Ko = t, this.cacheSizeBytes = e, this.forceOwnership = n, this.synchronizeTabs = !1;
    }
    async initialize(t) {
        await super.initialize(t), await Yi(this.localStore), await this.Ko.initialize(this, t), 
        // Enqueue writes from a previous session
        await ac(this.Ko.syncEngine), await Yr(this.Ko.remoteStore);
    }
    Qo(t) {
        return Li(this.persistence, new $i, t.initialUser, this.R);
    }
    Uo(t) {
        const e = this.persistence.referenceDelegate.garbageCollector;
        return new mi(e, t.asyncQueue);
    }
    qo(t) {
        const e = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey), n = void 0 !== this.cacheSizeBytes ? ti.withCacheSize(this.cacheSizeBytes) : ti.DEFAULT;
        return new Di(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, vr(), Pr(), this.R, this.sharedClientState, !!this.forceOwnership);
    }
    Bo(t) {
        return new Er;
    }
}

/**
 * Provides all components needed for Firestore with multi-tab IndexedDB
 * persistence.
 *
 * In the legacy client, this provider is used to provide both multi-tab and
 * non-multi-tab persistence since we cannot tell at build time whether
 * `synchronizeTabs` will be enabled.
 */ class dc extends fc {
    constructor(t, e) {
        super(t, e, /* forceOwnership= */ !1), this.Ko = t, this.cacheSizeBytes = e, this.synchronizeTabs = !0;
    }
    async initialize(t) {
        await super.initialize(t);
        const e = this.Ko.syncEngine;
        this.sharedClientState instanceof pr && (this.sharedClientState.syncEngine = {
            ui: ec.bind(null, e),
            ai: oc.bind(null, e),
            hi: cc.bind(null, e),
            fn: rc.bind(null, e),
            ci: tc.bind(null, e)
        }, await this.sharedClientState.start()), 
        // NOTE: This will immediately call the listener, so we make sure to
        // set it after localStore / remoteStore are started.
        await this.persistence.He((async t => {
            await nc(this.Ko.syncEngine, t), this.gcScheduler && (t && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : t || this.gcScheduler.stop());
        }));
    }
    Bo(t) {
        const e = vr();
        if (!pr.yt(e)) throw new E(p.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        const n = xi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
        return new pr(e, t.asyncQueue, n, t.clientId, t.initialUser);
    }
}

/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */ class wc {
    async initialize(t, e) {
        this.localStore || (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, 
        this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), 
        this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e, 
        /* startAsPrimary=*/ !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = t => Mo(this.syncEngine, t, 1 /* SharedClientState */), 
        this.remoteStore.remoteSyncer.handleCredentialChange = Yo.bind(null, this.syncEngine), 
        await oo(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(t) {
        return new mo;
    }
    createDatastore(t) {
        const e = Vr(t.databaseInfo.databaseId), n = (s = t.databaseInfo, new br(s));
        var s;
        /** Return the Platform-specific connectivity monitor. */        return function(t, e, n) {
            return new xr(t, e, n);
        }(t.credentials, n, e);
    }
    createRemoteStore(t) {
        return e = this.localStore, n = this.datastore, s = t.asyncQueue, i = t => Mo(this.syncEngine, t, 0 /* RemoteStore */), 
        r = Ir.yt() ? new Ir : new Tr, new kr(e, n, s, i, r);
        var e, n, s, i, r;
        /** Re-enables the network. Idempotent. */    }
    createSyncEngine(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        s, i, r, o) {
            const c = new No(t, e, n, s, i, r);
            return o && (c.Oo = !0), c;
        }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
    }
    terminate() {
        return async function(t) {
            const e = S(t);
            A("RemoteStore", "RemoteStore shutting down."), e.$r.add(5 /* Shutdown */), await $r(e), 
            e.Lr.shutdown(), 
            // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
            // triggering spurious listener events with cached data, etc.
            e.Br.set("Unknown" /* Unknown */);
        }(this.remoteStore);
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
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */
/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */
function _c(t, e = 10240) {
    let n = 0;
    return {
        async read() {
            if (n < t.byteLength) {
                const s = {
                    value: t.slice(n, n + e),
                    done: !1
                };
                return n += e, s;
            }
            return {
                done: !0
            };
        },
        async cancel() {},
        releaseLock() {},
        closed: Promise.reject("unimplemented")
    };
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
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
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
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */
class mc {
    constructor(t) {
        this.observer = t, 
        /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
        this.muted = !1;
    }
    next(t) {
        this.observer.next && this.jo(this.observer.next, t);
    }
    error(t) {
        this.observer.error ? this.jo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }
    Wo() {
        this.muted = !0;
    }
    jo(t, e) {
        this.muted || setTimeout((() => {
            this.muted || t(e);
        }), 0);
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
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */ class yc {
    constructor(
    /** The reader to read from underlying binary bundle data source. */
    t, e) {
        this.Go = t, this.R = e, 
        /** Cached bundle metadata. */
        this.metadata = new ps, 
        /**
         * Internal buffer to hold bundle content, accumulating incomplete element
         * content.
         */
        this.buffer = new Uint8Array, this.zo = new TextDecoder("utf-8"), 
        // Read the metadata (which is the first element).
        this.Ho().then((t => {
            t && t.io() ? this.metadata.resolve(t.payload.metadata) : this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null == t ? void 0 : t.payload)}`));
        }), (t => this.metadata.reject(t)));
    }
    close() {
        return this.Go.cancel();
    }
    async getMetadata() {
        return this.metadata.promise;
    }
    async Lo() {
        // Makes sure metadata is read before proceeding.
        return await this.getMetadata(), this.Ho();
    }
    /**
     * Reads from the head of internal buffer, and pulling more data from
     * underlying stream if a complete element cannot be found, until an
     * element(including the prefixed length and the JSON string) is found.
     *
     * Once a complete element is read, it is dropped from internal buffer.
     *
     * Returns either the bundled element, or null if we have reached the end of
     * the stream.
     */    async Ho() {
        const t = await this.Jo();
        if (null === t) return null;
        const e = this.zo.decode(t), n = Number(e);
        isNaN(n) && this.Yo(`length string (${e}) is not valid number`);
        const s = await this.Xo(n);
        return new Ao(JSON.parse(s), t.length + n);
    }
    /** First index of '{' from the underlying buffer. */    Zo() {
        return this.buffer.findIndex((t => t === "{".charCodeAt(0)));
    }
    /**
     * Reads from the beginning of the internal buffer, until the first '{', and
     * return the content.
     *
     * If reached end of the stream, returns a null.
     */    async Jo() {
        for (;this.Zo() < 0; ) {
            if (await this.tc()) break;
        }
        // Broke out of the loop because underlying stream is closed, and there
        // happens to be no more data to process.
                if (0 === this.buffer.length) return null;
        const t = this.Zo();
        // Broke out of the loop because underlying stream is closed, but still
        // cannot find an open bracket.
                t < 0 && this.Yo("Reached the end of bundle when a length string is expected.");
        const e = this.buffer.slice(0, t);
        // Update the internal buffer to drop the read length.
                return this.buffer = this.buffer.slice(t), e;
    }
    /**
     * Reads from a specified position from the internal buffer, for a specified
     * number of bytes, pulling more data from the underlying stream if needed.
     *
     * Returns a string decoded from the read bytes.
     */    async Xo(t) {
        for (;this.buffer.length < t; ) {
            await this.tc() && this.Yo("Reached the end of bundle when more is expected.");
        }
        const e = this.zo.decode(this.buffer.slice(0, t));
        // Update the internal buffer to drop the read json string.
                return this.buffer = this.buffer.slice(t), e;
    }
    Yo(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        throw this.Go.cancel(), new Error(`Invalid bundle format: ${t}`);
    }
    /**
     * Pulls more data from underlying stream to internal buffer.
     * Returns a boolean indicating whether the stream is finished.
     */    async tc() {
        const t = await this.Go.read();
        if (!t.done) {
            const e = new Uint8Array(this.buffer.length + t.value.length);
            e.set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e;
        }
        return t.done;
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
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */
class gc {
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
        if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new E(p.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
        const e = await async function(t, e) {
            const n = S(t), s = vn(n.R) + "/documents", i = {
                documents: e.map((t => In(n.R, t)))
            }, r = await n.Oi("BatchGetDocuments", s, i), o = new Map;
            r.forEach((t => {
                const e = Dn(n.R, t);
                o.set(e.key.toString(), e);
            }));
            const c = [];
            return e.forEach((t => {
                const e = o.get(t.toString());
                V(!!e), c.push(e);
            })), c;
        }(this.datastore, t);
        return e.forEach((t => this.recordVersion(t))), e;
    }
    set(t, e) {
        this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    update(t, e) {
        try {
            this.write(e.toMutation(t, this.preconditionForUpdate(t)));
        } catch (t) {
            this.lastWriteError = t;
        }
        this.writtenDocs.add(t.toString());
    }
    delete(t) {
        this.write(new ke(t, this.precondition(t))), this.writtenDocs.add(t.toString());
    }
    async commit() {
        if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
        const t = this.readVersions;
        // For each mutation, note that the doc was written.
                this.mutations.forEach((e => {
            t.delete(e.key.toString());
        })), 
        // For each document that was read but not written to, we want to perform
        // a `verify` operation.
        t.forEach(((t, e) => {
            const n = nt.fromPath(e);
            this.mutations.push(new Oe(n, this.precondition(n)));
        })), await async function(t, e) {
            const n = S(t), s = vn(n.R) + "/documents", i = {
                writes: e.map((t => Nn(n.R, t)))
            };
            await n.Ni("Commit", s, i);
        }(this.datastore, this.mutations), this.committed = !0;
    }
    recordVersion(t) {
        let e;
        if (t.isFoundDocument()) e = t.version; else {
            if (!t.isNoDocument()) throw P();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
            e = O.min();
        }
        const n = this.readVersions.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new E(p.ABORTED, "Document version changed between two reads.");
        } else this.readVersions.set(t.key.toString(), e);
    }
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */    precondition(t) {
        const e = this.readVersions.get(t.toString());
        return !this.writtenDocs.has(t.toString()) && e ? Ie.updateTime(e) : Ie.none();
    }
    /**
     * Returns the precondition for a document if the operation is an update.
     */    preconditionForUpdate(t) {
        const e = this.readVersions.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.writtenDocs.has(t.toString()) && e) {
            if (e.isEqual(O.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new E(p.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Ie.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
        return Ie.exists(!0);
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
class pc {
    constructor(t, e, n, s) {
        this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = s, 
        this.ec = 5, this.Zi = new Sr(this.asyncQueue, "transaction_retry" /* TransactionRetry */);
    }
    /** Runs the transaction and sets the result on deferred. */    run() {
        this.nc();
    }
    nc() {
        this.Zi.ji((async () => {
            const t = new gc(this.datastore), e = this.sc(t);
            e && e.then((e => {
                this.asyncQueue.enqueueAndForget((() => t.commit().then((() => {
                    this.deferred.resolve(e);
                })).catch((t => {
                    this.ic(t);
                }))));
            })).catch((t => {
                this.ic(t);
            }));
        }));
    }
    sc(t) {
        try {
            const e = this.updateFunction(t);
            return !Z(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.deferred.reject(t), null;
        }
    }
    ic(t) {
        this.ec > 0 && this.rc(t) ? (this.ec -= 1, this.asyncQueue.enqueueAndForget((() => (this.nc(), 
        Promise.resolve())))) : this.deferred.reject(t);
    }
    rc(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            const e = t.code;
            return "aborted" === e || "failed-precondition" === e || !Be(e);
        }
        return !1;
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
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */
class Ec {
    constructor(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = hr.UNAUTHENTICATED, 
        this.clientId = C.u(), this.credentialListener = () => {}, this.receivedInitialUser = new ps, 
        this.credentials.setChangeListener((t => {
            A("FirestoreClient", "Received user=", t.uid), this.user = t, this.credentialListener(t), 
            this.receivedInitialUser.resolve();
        }));
    }
    async getConfiguration() {
        return await this.receivedInitialUser.promise, {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            credentials: this.credentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        };
    }
    setCredentialChangeListener(t) {
        this.credentialListener = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.receivedInitialUser.promise.then((() => this.credentialListener(this.user)));
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */    verifyNotTerminated() {
        if (this.asyncQueue.isShuttingDown) throw new E(p.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        const t = new ps;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async () => {
            try {
                this.onlineComponents && await this.onlineComponents.terminate(), this.offlineComponents && await this.offlineComponents.terminate(), 
                // `removeChangeListener` must be called after shutting down the
                // RemoteStore as it will prevent the RemoteStore from retrieving
                // auth tokens.
                this.credentials.removeChangeListener(), t.resolve();
            } catch (e) {
                const n = ho(e, "Failed to shutdown persistence");
                t.reject(n);
            }
        })), t.promise;
    }
}

async function Tc(t, e) {
    t.asyncQueue.verifyOperationInProgress(), A("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = await t.getConfiguration();
    await e.initialize(n);
    let s = n.initialUser;
    t.setCredentialChangeListener((n => {
        s.isEqual(n) || (s = n, t.asyncQueue.enqueueRetryable((async () => {
            await Bi(e.localStore, n);
        })));
    })), 
    // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    e.persistence.setDatabaseDeletedListener((() => t.terminate())), t.offlineComponents = e;
}

async function Ic(t, e) {
    t.asyncQueue.verifyOperationInProgress();
    const n = await Ac(t);
    A("FirestoreClient", "Initializing OnlineComponentProvider");
    const s = await t.getConfiguration();
    await e.initialize(n, s), 
    // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    t.setCredentialChangeListener((n => t.asyncQueue.enqueueRetryable((() => async function(t, e) {
        const n = S(t);
        n.asyncQueue.verifyOperationInProgress(), A("RemoteStore", "RemoteStore received new credentials");
        const s = Kr(n);
        // Tear down and re-create our network streams. This will ensure we get a
        // fresh auth token for the new user and re-fill the write pipeline with
        // new mutations from the LocalStore (since mutations are per-user).
                n.$r.add(3 /* CredentialChange */), await $r(n), s && 
        // Don't set the network status to Unknown if we are offline.
        n.Br.set("Unknown" /* Unknown */), await n.remoteSyncer.handleCredentialChange(e), 
        n.$r.delete(3 /* CredentialChange */), await Or(n);
    }(e.remoteStore, n))))), t.onlineComponents = e;
}

async function Ac(t) {
    return t.offlineComponents || (A("FirestoreClient", "Using default OfflineComponentProvider"), 
    await Tc(t, new lc)), t.offlineComponents;
}

async function Rc(t) {
    return t.onlineComponents || (A("FirestoreClient", "Using default OnlineComponentProvider"), 
    await Ic(t, new wc)), t.onlineComponents;
}

function bc(t) {
    return Ac(t).then((t => t.persistence));
}

function vc(t) {
    return Ac(t).then((t => t.localStore));
}

function Pc(t) {
    return Rc(t).then((t => t.remoteStore));
}

function Vc(t) {
    return Rc(t).then((t => t.syncEngine));
}

async function Sc(t) {
    const e = await Rc(t), n = e.eventManager;
    return n.onListen = xo.bind(null, e.syncEngine), n.onUnlisten = ko.bind(null, e.syncEngine), 
    n;
}

/** Enables the network connection and re-enqueues all pending operations. */ function Dc(t) {
    return t.asyncQueue.enqueue((async () => {
        const e = await bc(t), n = await Pc(t);
        return e.setNetworkEnabled(!0), function(t) {
            const e = S(t);
            return e.$r.delete(0 /* UserDisabled */), Or(e);
        }(n);
    }));
}

/** Disables the network connection. Pending operations will not complete. */ function Cc(t) {
    return t.asyncQueue.enqueue((async () => {
        const e = await bc(t), n = await Pc(t);
        return e.setNetworkEnabled(!1), async function(t) {
            const e = S(t);
            e.$r.add(0 /* UserDisabled */), await $r(e), 
            // Set the OnlineState to Offline so get()s return from cache, etc.
            e.Br.set("Offline" /* Offline */);
        }(n);
    }));
}

/**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ function Nc(t, e) {
    const n = new ps;
    return t.asyncQueue.enqueueAndForget((async () => async function(t, e, n) {
        try {
            const s = await function(t, e) {
                const n = S(t);
                return n.persistence.runTransaction("read document", "readonly", (t => n.Mn.mn(t, e)));
            }(t, e);
            s.isFoundDocument() ? n.resolve(s) : s.isNoDocument() ? n.resolve(null) : n.reject(new E(p.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"));
        } catch (t) {
            const s = ho(t, `Failed to get document '${e} from cache`);
            n.reject(s);
        }
    }
    /**
 * Retrieves a latency-compensated document from the backend via a
 * SnapshotListener.
 */ (await vc(t), e, n))), n.promise;
}

function xc(t, e, n = {}) {
    const s = new ps;
    return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
        const r = new mc({
            next: r => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.enqueueAndForget((() => go(t, o)));
                const c = r.docs.has(n);
                !c && r.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                i.reject(new E(p.UNAVAILABLE, "Failed to get document because the client is offline.")) : c && r.fromCache && s && "server" === s.source ? i.reject(new E(p.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(r);
            },
            error: t => i.reject(t)
        }), o = new Io(Qt(n.path), r, {
            includeMetadataChanges: !0,
            so: !0
        });
        return yo(t, o);
    }(await Sc(t), t.asyncQueue, e, n, s))), s.promise;
}

function Fc(t, e) {
    const n = new ps;
    return t.asyncQueue.enqueueAndForget((async () => async function(t, e, n) {
        try {
            const s = await zi(t, e, 
            /* usePreviousResults= */ !0), i = new So(e, s.Bn), r = i._o(s.documents), o = i.applyChanges(r, 
            /* updateLimboDocuments= */ !1);
            n.resolve(o.snapshot);
        } catch (t) {
            const s = ho(t, `Failed to execute query '${e} against cache`);
            n.reject(s);
        }
    }
    /**
 * Retrieves a latency-compensated query snapshot from the backend via a
 * SnapshotListener.
 */ (await vc(t), e, n))), n.promise;
}

function kc(t, e, n = {}) {
    const s = new ps;
    return t.asyncQueue.enqueueAndForget((async () => function(t, e, n, s, i) {
        const r = new mc({
            next: n => {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                e.enqueueAndForget((() => go(t, o))), n.fromCache && "server" === s.source ? i.reject(new E(p.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
            },
            error: t => i.reject(t)
        }), o = new Io(n, r, {
            includeMetadataChanges: !0,
            so: !0
        });
        return yo(t, o);
    }(await Sc(t), t.asyncQueue, e, n, s))), s.promise;
}

function Oc(t, e) {
    const n = new mc(e);
    return t.asyncQueue.enqueueAndForget((async () => function(t, e) {
        S(t).Gr.add(e), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        e.next();
    }(await Sc(t), n))), () => {
        n.Wo(), t.asyncQueue.enqueueAndForget((async () => function(t, e) {
            S(t).Gr.delete(e);
        }(await Sc(t), n)));
    };
}

/**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */ function $c(t, e) {
    const n = new ps;
    return t.asyncQueue.enqueueAndForget((async () => {
        const s = await function(t) {
            return Rc(t).then((t => t.datastore));
        }(t);
        new pc(t.asyncQueue, s, e, n).run();
    })), n.promise;
}

function Mc(t, e, n, s) {
    const i = function(t, e) {
        let n;
        n = "string" == typeof t ? (new TextEncoder).encode(t) : t;
        return function(t, e) {
            return new yc(t, e);
        }(function(t, e) {
            if (t instanceof Uint8Array) return _c(t, e);
            if (t instanceof ArrayBuffer) return _c(new Uint8Array(t), e);
            if (t instanceof ReadableStream) return t.getReader();
            throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
        }(n), e);
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
 */ (n, Vr(e));
    t.asyncQueue.enqueueAndForget((async () => {
        hc(await Vc(t), i, s);
    }));
}

function Lc(t, e) {
    return t.asyncQueue.enqueue((async () => function(t, e) {
        const n = S(t);
        return n.persistence.runTransaction("Get named query", "readonly", (t => n.Qe.getNamedQuery(t, e)));
    }(await vc(t), e)));
}

class Bc {
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
    constructor(t, e, n, s, i, r, o) {
        this.databaseId = t, this.appId = e, this.persistenceKey = n, this.host = s, this.ssl = i, 
        this.forceLongPolling = r, this.autoDetectLongPolling = o;
    }
}

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
class qc {
    constructor(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    get isDefaultDatabase() {
        return "(default)" === this.database;
    }
    isEqual(t) {
        return t instanceof qc && t.projectId === this.projectId && t.database === this.database;
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
 */ const Uc = new Map;

/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
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
class Qc {
    constructor(t, e) {
        this.user = e, this.type = "OAuth", this.authHeaders = {}, 
        // Set the headers using Object Literal notation to avoid minification
        this.authHeaders.Authorization = `Bearer ${t}`;
    }
}

/** A CredentialsProvider that always yields an empty token. */ class Kc {
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
        t(hr.UNAUTHENTICATED);
    }
    removeChangeListener() {
        this.changeListener = null;
    }
}

class jc {
    constructor(t) {
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */
        this.oc = null, 
        /** Tracks the current User. */
        this.currentUser = hr.UNAUTHENTICATED, this.receivedInitialUser = !1, 
        /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
        this.cc = 0, 
        /** The listener registered with setChangeListener(). */
        this.changeListener = null, this.forceRefresh = !1, this.oc = () => {
            this.cc++, this.currentUser = this.uc(), this.receivedInitialUser = !0, this.changeListener && this.changeListener(this.currentUser);
        }, this.cc = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.oc) : (
        // if auth is not available, invoke tokenListener once with null token
        this.oc(null), t.get().then((t => {
            this.auth = t, this.oc && 
            // tokenListener can be removed by removeChangeListener()
            this.auth.addAuthTokenListener(this.oc);
        }), (() => {})));
    }
    getToken() {
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
        const t = this.cc, e = this.forceRefresh;
        return this.forceRefresh = !1, this.auth ? this.auth.getToken(e).then((e => 
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.cc !== t ? (A("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
        this.getToken()) : e ? (V("string" == typeof e.accessToken), new Qc(e.accessToken, this.currentUser)) : null)) : Promise.resolve(null);
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
        this.auth && this.auth.removeAuthTokenListener(this.oc), this.oc = null, this.changeListener = null;
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    uc() {
        const t = this.auth && this.auth.getUid();
        return V(null === t || "string" == typeof t), new hr(t);
    }
}

/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */ class Wc {
    constructor(t, e, n) {
        this.ac = t, this.hc = e, this.lc = n, this.type = "FirstParty", this.user = hr.FIRST_PARTY;
    }
    get authHeaders() {
        const t = {
            "X-Goog-AuthUser": this.hc
        }, e = this.ac.auth.getAuthHeaderValueForFirstParty([]);
        // Use array notation to prevent minification
                return e && (t.Authorization = e), this.lc && (t["X-Goog-Iam-Authorization-Token"] = this.lc), 
        t;
    }
}

/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */ class Gc {
    constructor(t, e, n) {
        this.ac = t, this.hc = e, this.lc = n;
    }
    getToken() {
        return Promise.resolve(new Wc(this.ac, this.hc, this.lc));
    }
    setChangeListener(t) {
        // Fire with initial uid.
        t(hr.FIRST_PARTY);
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
function zc(t, e, n) {
    if (!n) throw new E(p.INVALID_ARGUMENT, `Function ${t}() cannot be called with an empty ${e}.`);
}

function Hc(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new E(p.INVALID_ARGUMENT, `Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Jc(t, e, n, s) {
    if (!0 === e && !0 === s) throw new E(p.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function Yc(t) {
    if (!nt.isDocumentKey(t)) throw new E(p.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`);
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function Xc(t) {
    if (nt.isDocumentKey(t)) throw new E(p.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`);
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */
function Zc(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = `${t.substring(0, 20)}...`), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        {
            const e = 
            /** Hacky method to try to get the constructor name for an object. */
            function(t) {
                if (t.constructor) {
                    const e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                    if (e && e.length > 1) return e[1];
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
            return e ? `a custom ${e} object` : "an object";
        }
    }
    return "function" == typeof t ? "a function" : P();
}

function tu(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t._delegate), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new E(p.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            const n = Zc(t);
            throw new E(p.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${n}`);
        }
    }
    return t;
}

function eu(t, e) {
    if (e <= 0) throw new E(p.INVALID_ARGUMENT, `Function ${t}() requires a positive number, but it was: ${e}.`);
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
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */
class nu {
    constructor(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new E(p.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = true;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new E(p.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Jc("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
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
 */ class su {
    /** @hideconstructor */
    constructor(t, e) {
        this._persistenceKey = "(lite)", this._settings = new nu({}), this._settingsFrozen = !1, 
        t instanceof qc ? (this._databaseId = t, this._credentials = new Kc) : (this._app = t, 
        this._databaseId = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new E(p.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new qc(t.options.projectId);
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
 */ (t), this._credentials = new jc(e));
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */    get app() {
        if (!this._app) throw new E(p.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app;
    }
    get _initialized() {
        return this._settingsFrozen;
    }
    get _terminated() {
        return void 0 !== this._terminateTask;
    }
    _setSettings(t) {
        if (this._settingsFrozen) throw new E(p.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new nu(t), void 0 !== t.credentials && (this._credentials = function(t) {
            if (!t) return new Kc;
            switch (t.type) {
              case "gapi":
                const e = t.client;
                // Make sure this really is a Gapi client.
                                return V(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Gc(e, t.sessionIndex || "0", t.iamToken || null);

              case "provider":
                return t.client;

              default:
                throw new E(p.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
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
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return function(t) {
            const e = Uc.get(t);
            e && (A("ComponentProvider", "Removing Datastore"), Uc.delete(t), e.terminate());
        }(this), Promise.resolve();
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
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */
class iu {
    /** @hideconstructor */
    constructor(t, e, n) {
        this._converter = e, this._key = n, 
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
        return new ou(this.firestore, this._converter, this._key.path.popLast());
    }
    withConverter(t) {
        return new iu(this.firestore, t, this._key);
    }
}

/**
 * A `Query` refers to a Query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */ class ru {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(t, e, n) {
        this._converter = e, this._query = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t;
    }
    withConverter(t) {
        return new ru(this.firestore, t, this._query);
    }
}

/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link query}).
 */ class ou extends ru {
    /** @hideconstructor */
    constructor(t, e, n) {
        super(t, e, Qt(n)), this._path = n, 
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
        return t.isEmpty() ? null : new iu(this.firestore, 
        /* converter= */ null, new nt(t));
    }
    withConverter(t) {
        return new ou(this.firestore, t, this._path);
    }
}

function cu(t, e, ...n) {
    if (t = getModularInstance(t), zc("collection", "path", e), t instanceof su) {
        const s = q.fromString(e, ...n);
        return Xc(s), new ou(t, /* converter= */ null, s);
    }
    {
        if (!(t instanceof iu || t instanceof ou)) throw new E(p.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = q.fromString(t.path, ...n).child(q.fromString(e));
        return Xc(s), new ou(t.firestore, 
        /* converter= */ null, s);
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
 */ function uu(t, e) {
    if (t = tu(t, su), zc("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new E(p.INVALID_ARGUMENT, `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);
    return new ru(t, 
    /* converter= */ null, 
    /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
    function(t) {
        return new qt(q.emptyPath(), t);
    }(e));
}

function au(t, e, ...n) {
    if (t = getModularInstance(t), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = C.u()), zc("doc", "path", e), t instanceof su) {
        const s = q.fromString(e, ...n);
        return Yc(s), new iu(t, 
        /* converter= */ null, new nt(s));
    }
    {
        if (!(t instanceof iu || t instanceof ou)) throw new E(p.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        const s = t._path.child(q.fromString(e, ...n));
        return Yc(s), new iu(t.firestore, t instanceof ou ? t._converter : null, new nt(s));
    }
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function hu(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), (t instanceof iu || t instanceof ou) && (e instanceof iu || e instanceof ou) && (t.firestore === e.firestore && t.path === e.path && t._converter === e._converter);
}

/**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function lu(t, e) {
    return t = getModularInstance(t), e = getModularInstance(e), t instanceof ru && e instanceof ru && (t.firestore === e.firestore && Xt(t._query, e._query) && t._converter === e._converter);
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
 */ class fu {
    constructor() {
        // The last promise in the queue.
        this.fc = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.dc = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.wc = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this._c = [], 
        // visible for testing
        this.mc = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.yc = !1, 
        // List of TimerIds to fast-forward delays for.
        this.gc = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Zi = new Sr(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Ec = () => {
            const t = Pr();
            t && A("AsyncQueue", "Visibility state changed to " + t.visibilityState), this.Zi.Gi();
        };
        const t = Pr();
        t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.Ec);
    }
    get isShuttingDown() {
        return this.wc;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */    enqueueAndForget(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.Tc(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ic(t);
    }
    enterRestrictedMode() {
        if (!this.wc) {
            this.wc = !0;
            const t = Pr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ec);
        }
    }
    enqueue(t) {
        return this.Tc(), this.wc ? new Promise((t => {})) : this.Ic(t);
    }
    enqueueRetryable(t) {
        this.enqueueAndForget((() => (this.dc.push(t), this.Ac())));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */    async Ac() {
        if (0 !== this.dc.length) {
            try {
                await this.dc[0](), this.dc.shift(), this.Zi.reset();
            } catch (t) {
                if (!bs(t)) throw t;
 // Failure will be handled by AsyncQueue
                                A("AsyncQueue", "Operation failed with retryable error: " + t);
            }
            this.dc.length > 0 && 
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
            this.Zi.ji((() => this.Ac()));
        }
    }
    Ic(t) {
        const e = this.fc.then((() => (this.yc = !0, t().catch((t => {
            this.mc = t, this.yc = !1;
            // Re-throw the error so that this.tail becomes a rejected Promise and
            // all further attempts to chain (via .then) will just short-circuit
            // and return the rejected Promise.
            throw R("INTERNAL UNHANDLED ERROR: ", 
            /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
            function(t) {
                let e = t.message || "";
                t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack);
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
 */ (t)), t;
        })).then((t => (this.yc = !1, t))))));
        return this.fc = e, e;
    }
    enqueueAfterDelay(t, e, n) {
        this.Tc(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.gc.indexOf(t) > -1 && (e = 0);
        const s = ao.createAndSchedule(this, t, e, n, (t => this.Rc(t)));
        return this._c.push(s), s;
    }
    Tc() {
        this.mc && P();
    }
    verifyOperationInProgress() {}
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */    async bc() {
        // Operations in the queue prior to draining may have enqueued additional
        // operations. Keep draining the queue until the tail is no longer advanced,
        // which indicates that no more new operations were enqueued and that all
        // operations were executed.
        let t;
        do {
            t = this.fc, await t;
        } while (t !== this.fc);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */    vc(t) {
        for (const e of this._c) if (e.timerId === t) return !0;
        return !1;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */    Pc(t) {
        // Note that draining may generate more delayed ops, so we do that first.
        return this.bc().then((() => {
            // Run ops in the same order they'd run if they ran naturally.
            this._c.sort(((t, e) => t.targetTimeMs - e.targetTimeMs));
            for (const e of this._c) if (e.skipDelay(), "all" /* All */ !== t && e.timerId === t) break;
            return this.bc();
        }));
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */    Vc(t) {
        this.gc.push(t);
    }
    /** Called once a DelayedOperation is run or canceled. */    Rc(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        const e = this._c.indexOf(t);
        this._c.splice(e, 1);
    }
}

function du(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        const n = t;
        for (const t of e) if (t in n && "function" == typeof n[t]) return !0;
        return !1;
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
 * Represents the task of loading a Firestore bundle. It provides progress of bundle
 * loading, as well as task completion and error events.
 *
 * The API is compatible with `Promise<LoadBundleTaskProgress>`.
 */ (t, [ "next", "error", "complete" ]);
}

class wu {
    constructor() {
        this._progressObserver = {}, this._taskCompletionResolver = new ps, this._lastProgress = {
            taskState: "Running",
            totalBytes: 0,
            totalDocuments: 0,
            bytesLoaded: 0,
            documentsLoaded: 0
        };
    }
    /**
     * Registers functions to listen to bundle loading progress events.
     * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
     *   each time a Firestore document is loaded from the bundle.
     * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
     *   error, and there should be no more updates after this.
     * @param complete - Called when the loading task is complete.
     */    onProgress(t, e, n) {
        this._progressObserver = {
            next: t,
            error: e,
            complete: n
        };
    }
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
     *
     * @param onRejected - Called when an error occurs during bundle loading.
     */    catch(t) {
        return this._taskCompletionResolver.promise.catch(t);
    }
    /**
     * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
     *
     * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
     *   The update will always have its `taskState` set to `"Success"`.
     * @param onRejected - Called when an error occurs during bundle loading.
     */    then(t, e) {
        return this._taskCompletionResolver.promise.then(t, e);
    }
    /**
     * Notifies all observers that bundle loading has completed, with a provided
     * `LoadBundleTaskProgress` object.
     *
     * @private
     */    _completeWith(t) {
        this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), 
        this._taskCompletionResolver.resolve(t);
    }
    /**
     * Notifies all observers that bundle loading has failed, with a provided
     * `Error` as the reason.
     *
     * @private
     */    _failWith(t) {
        this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), 
        this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
    }
    /**
     * Notifies a progress update of loading a bundle.
     * @param progress - The new progress.
     *
     * @private
     */    _updateProgress(t) {
        this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
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
/** DOMException error code constants. */ const _u = -1;

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */
class mu extends su {
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), this._queue = new fu, this._persistenceKey = "name" in t ? t.name : "[DEFAULT]";
    }
    _terminate() {
        return this._firestoreClient || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        gu(this), this._firestoreClient.terminate();
    }
}

/**
 * @internal
 */ function yu(t) {
    return t._firestoreClient || gu(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}

function gu(t) {
    var e;
    const n = t._freezeSettings(), s = function(t, e, n, s) {
        return new Bc(t, e, n, s.host, s.ssl, s.experimentalForceLongPolling, s.experimentalAutoDetectLongPolling);
    }(t._databaseId, (null === (e = t._app) || void 0 === e ? void 0 : e.options.appId) || "", t._persistenceKey, n);
    t._firestoreClient = new Ec(t._credentials, t._queue, s);
}

/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */
/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */
function pu(t, e, n) {
    const s = new ps;
    return t.asyncQueue.enqueue((async () => {
        try {
            await Tc(t, n), await Ic(t, e), s.resolve();
        } catch (t) {
            if (!
            /**
 * Decides whether the provided error allows us to gracefully disable
 * persistence (as opposed to crashing the client).
 */
            function(t) {
                if ("FirebaseError" === t.name) return t.code === p.FAILED_PRECONDITION || t.code === p.UNIMPLEMENTED;
                if ("undefined" != typeof DOMException && t instanceof DOMException) 
                // There are a few known circumstances where we can open IndexedDb but
                // trying to read/write will fail (e.g. quota exceeded). For
                // well-understood cases, we attempt to detect these and then gracefully
                // fall back to memory persistence.
                // NOTE: Rather than continue to add to this list, we could decide to
                // always fall back, with the risk that we might accidentally hide errors
                // representing actual SDK bugs.
                // When the browser is out of quota we could get either quota exceeded
                // or an aborted error depending on whether the error happened during
                // schema migration.
                return 22 === t.code || 20 === t.code || 
                // Firefox Private Browsing mode disables IndexedDb and returns
                // INVALID_STATE for any usage.
                11 === t.code;
                return !0;
            }
            /**
 * Clears the persistent storage. This includes pending writes and cached
 * documents.
 *
 * Must be called while the `Firestore` instance is not started (after the app is
 * terminated or when the app is first initialized). On startup, this function
 * must be called before other functions (other than {@link
 * initializeFirestore} or {@link getFirestore})). If the `Firestore`
 * instance is still running, the promise will be rejected with the error code
 * of `failed-precondition`.
 *
 * Note: `clearIndexedDbPersistence()` is primarily intended to help write
 * reliable tests that use Cloud Firestore. It uses an efficient mechanism for
 * dropping existing data but does not attempt to securely overwrite or
 * otherwise make cached data unrecoverable. For applications that are sensitive
 * to the disclosure of cached data in between user sessions, we strongly
 * recommend not enabling persistence at all.
 *
 * @param firestore - The `Firestore` instance to clear persistence for.
 * @returns A promise that is resolved when the persistent storage is
 * cleared. Otherwise, the promise is rejected with an error.
 */ (t)) throw t;
            console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), 
            s.reject(t);
        }
    })).then((() => s.promise));
}

function Eu(t) {
    if (t._initialized && !t._terminated) throw new E(p.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
    const e = new ps;
    return t._queue.enqueueAndForgetEvenWhileRestricted((async () => {
        try {
            await async function(t) {
                if (!Is.yt()) return Promise.resolve();
                const e = t + "main";
                await Is.delete(e);
            }(xi(t._databaseId, t._persistenceKey)), e.resolve();
        } catch (t) {
            e.reject(t);
        }
    })), e.promise;
}

/**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */ function Tu(t) {
    return function(t) {
        const e = new ps;
        return t.asyncQueue.enqueueAndForget((async () => Uo(await Vc(t), e))), e.promise;
    }(yu(t = tu(t, mu)));
}

/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */ function Iu(t) {
    if (t._initialized || t._terminated) throw new E(p.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
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
 */ class Au {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        for (let e = 0; e < t.length; ++e) if (0 === t[e].length) throw new E(p.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new Q(t);
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
 */ class Ru {
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
            return new Ru(j.fromBase64String(t));
        } catch (t) {
            throw new E(p.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + t);
        }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */    static fromUint8Array(t) {
        return new Ru(j.fromUint8Array(t));
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
 */ class bu {
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
 */ class vu {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new E(p.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new E(p.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t, this._long = e;
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
        return N(this._lat, t._lat) || N(this._long, t._long);
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
 */ const Pu = /^__.*__$/;

/** The result of parsing document data (e.g. for a setData call). */ class Vu {
    constructor(t, e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return null !== this.fieldMask ? new Ce(t, this.data, this.fieldMask, e, this.fieldTransforms) : new De(t, this.data, e, this.fieldTransforms);
    }
}

/** The result of parsing "update" data (i.e. for an updateData call). */ class Su {
    constructor(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.fieldMask = e, this.fieldTransforms = n;
    }
    toMutation(t, e) {
        return new Ce(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }
}

function Du(t) {
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
        throw P();
    }
}

/** A "context" object passed around while parsing user data. */ class Cu {
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
    constructor(t, e, n, s, i, r) {
        this.settings = t, this.databaseId = e, this.R = n, this.ignoreUndefinedProperties = s, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Sc(), this.fieldTransforms = i || [], this.fieldMask = r || [];
    }
    get path() {
        return this.settings.path;
    }
    get Dc() {
        return this.settings.Dc;
    }
    /** Returns a new context with the specified settings overwritten. */    Cc(t) {
        return new Cu(Object.assign(Object.assign({}, this.settings), t), this.databaseId, this.R, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    Nc(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.Cc({
            path: n,
            xc: !1
        });
        return s.Fc(t), s;
    }
    kc(t) {
        var e;
        const n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), s = this.Cc({
            path: n,
            xc: !1
        });
        return s.Sc(), s;
    }
    Oc(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Cc({
            path: void 0,
            xc: !0
        });
    }
    $c(t) {
        return Yu(t, this.settings.methodName, this.settings.Mc || !1, this.path, this.settings.Lc);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */    contains(t) {
        return void 0 !== this.fieldMask.find((e => t.isPrefixOf(e))) || void 0 !== this.fieldTransforms.find((e => t.isPrefixOf(e.field)));
    }
    Sc() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (let t = 0; t < this.path.length; t++) this.Fc(this.path.get(t));
    }
    Fc(t) {
        if (0 === t.length) throw this.$c("Document fields must not be empty");
        if (Du(this.Dc) && Pu.test(t)) throw this.$c('Document fields cannot begin and end with "__"');
    }
}

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ class Nu {
    constructor(t, e, n) {
        this.databaseId = t, this.ignoreUndefinedProperties = e, this.R = n || Vr(t);
    }
    /** Creates a new top-level parse context. */    Bc(t, e, n, s = !1) {
        return new Cu({
            Dc: t,
            methodName: e,
            Lc: n,
            path: Q.emptyPath(),
            xc: !1,
            Mc: s
        }, this.databaseId, this.R, this.ignoreUndefinedProperties);
    }
}

function xu(t) {
    const e = t._freezeSettings(), n = Vr(t._databaseId);
    return new Nu(t._databaseId, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function Fu(t, e, n, s, i, r = {}) {
    const o = t.Bc(r.merge || r.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Gu("Data must be an object, but it was:", o, s);
    const c = ju(s, o);
    let u, a;
    if (r.merge) u = new K(o.fieldMask), a = o.fieldTransforms; else if (r.mergeFields) {
        const t = [];
        for (const s of r.mergeFields) {
            const i = zu(e, s, n);
            if (!o.contains(i)) throw new E(p.INVALID_ARGUMENT, `Field '${i}' is specified in your field mask but missing from your input data.`);
            Xu(t, i) || t.push(i);
        }
        u = new K(t), a = o.fieldTransforms.filter((t => u.covers(t.field)));
    } else u = null, a = o.fieldTransforms;
    return new Vu(new mt(c), u, a);
}

class ku extends bu {
    _toFieldTransform(t) {
        if (2 /* MergeSet */ !== t.Dc) throw 1 /* Update */ === t.Dc ? t.$c(`${this._methodName}() can only appear at the top level of your update data`) : t.$c(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
        return t.fieldMask.push(t.path), null;
    }
    isEqual(t) {
        return t instanceof ku;
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
 */ function Ou(t, e, n) {
    return new Cu({
        Dc: 3 /* Argument */ ,
        Lc: e.settings.Lc,
        methodName: t._methodName,
        xc: n
    }, e.databaseId, e.R, e.ignoreUndefinedProperties);
}

class $u extends bu {
    _toFieldTransform(t) {
        return new pe(t.path, new le);
    }
    isEqual(t) {
        return t instanceof $u;
    }
}

class Mu extends bu {
    constructor(t, e) {
        super(t), this.qc = e;
    }
    _toFieldTransform(t) {
        const e = Ou(this, t, 
        /*array=*/ !0), n = this.qc.map((t => Ku(t, e))), s = new fe(n);
        return new pe(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Lu extends bu {
    constructor(t, e) {
        super(t), this.qc = e;
    }
    _toFieldTransform(t) {
        const e = Ou(this, t, 
        /*array=*/ !0), n = this.qc.map((t => Ku(t, e))), s = new we(n);
        return new pe(t.path, s);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

class Bu extends bu {
    constructor(t, e) {
        super(t), this.Uc = e;
    }
    _toFieldTransform(t) {
        const e = new me(t.R, oe(t.R, this.Uc));
        return new pe(t.path, e);
    }
    isEqual(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }
}

/** Parse update data from an update() call. */ function qu(t, e, n, s) {
    const i = t.Bc(1 /* Update */ , e, n);
    Gu("Data must be an object, but it was:", i, s);
    const r = [], o = mt.empty();
    M(s, ((t, s) => {
        const u = Ju(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                s = getModularInstance(s);
        const a = i.kc(u);
        if (s instanceof ku) 
        // Add it to the field mask, but don't add anything to updateData.
        r.push(u); else {
            const t = Ku(s, a);
            null != t && (r.push(u), o.set(u, t));
        }
    }));
    const u = new K(r);
    return new Su(o, u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function Uu(t, e, n, s, i, r) {
    const o = t.Bc(1 /* Update */ , e, n), u = [ zu(e, s, n) ], a = [ i ];
    if (r.length % 2 != 0) throw new E(p.INVALID_ARGUMENT, `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);
    for (let t = 0; t < r.length; t += 2) u.push(zu(e, r[t])), a.push(r[t + 1]);
    const h = [], l = mt.empty();
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (let t = u.length - 1; t >= 0; --t) if (!Xu(h, u[t])) {
        const e = u[t];
        let n = a[t];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                n = getModularInstance(n);
        const s = o.kc(e);
        if (n instanceof ku) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(e); else {
            const t = Ku(n, s);
            null != t && (h.push(e), l.set(e, t));
        }
    }
    const f = new K(h);
    return new Su(l, f, o.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function Qu(t, e, n, s = !1) {
    return Ku(n, t.Bc(s ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Ku(t, e) {
    if (Wu(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t = getModularInstance(t))) return Gu("Unsupported field value:", e, t), ju(t, e);
    if (t instanceof bu) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Du(e.Dc)) throw e.$c(`${t._methodName}() can only be used with update() and set()`);
        if (!e.path) throw e.$c(`${t._methodName}() is not currently supported inside arrays`);
        const n = t._toFieldTransform(e);
        n && e.fieldTransforms.push(n);
    }
    /**
 * Helper to parse a scalar value (i.e. not an Object, Array, or FieldValue)
 *
 * @returns The parsed value
 */ (t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.fieldMask.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.xc && 4 /* ArrayArgument */ !== e.Dc) throw e.$c("Nested arrays are not supported");
        return function(t, e) {
            const n = [];
            let s = 0;
            for (const i of t) {
                let t = Ku(i, e.Oc(s));
                null == t && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                t = {
                    nullValue: "NULL_VALUE"
                }), n.push(t), s++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === (t = getModularInstance(t))) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return oe(e.R, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            const n = k.fromDate(t);
            return {
                timestampValue: mn(e.R, n)
            };
        }
        if (t instanceof k) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            const n = new k(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: mn(e.R, n)
            };
        }
        if (t instanceof vu) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Ru) return {
            bytesValue: yn(e.R, t._byteString)
        };
        if (t instanceof iu) {
            const n = e.databaseId, s = t.firestore._databaseId;
            if (!s.isEqual(n)) throw e.$c(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);
            return {
                referenceValue: En(t.firestore._databaseId || e.databaseId, t._key.path)
            };
        }
        throw e.$c(`Unsupported field value: ${Zc(t)}`);
    }
    /**
 * Checks whether an object looks like a JSON object that should be converted
 * into a struct. Normal class/prototype instances are considered to look like
 * JSON objects since they should be converted to a struct value. Arrays, Dates,
 * GeoPoints, etc. are not considered to look like JSON objects since they map
 * to specific FieldValue types other than ObjectValue.
 */ (t, e);
}

function ju(t, e) {
    const n = {};
    return L(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.fieldMask.push(e.path) : M(t, ((t, s) => {
        const i = Ku(s, e.Nc(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Wu(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof k || t instanceof vu || t instanceof Ru || t instanceof iu || t instanceof bu);
}

function Gu(t, e, n) {
    if (!Wu(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        const s = Zc(n);
        throw "an object" === s ? e.$c(t + " a custom object") : e.$c(t + " " + s);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function zu(t, e, n) {
    if ((
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e = getModularInstance(e)) instanceof Au) return e._internalPath;
    if ("string" == typeof e) return Ju(t, e);
    throw Yu("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ const Hu = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function Ju(t, e, n) {
    if (e.search(Hu) >= 0) throw Yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`, t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return new Au(...e.split("."))._internalPath;
    } catch (s) {
        throw Yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function Yu(t, e, n, s, i) {
    const r = s && !s.isEmpty(), o = void 0 !== i;
    let c = `Function ${e}() called with invalid data`;
    n && (c += " (via `toFirestore()`)"), c += ". ";
    let u = "";
    return (r || o) && (u += " (found", r && (u += ` in field ${s}`), o && (u += ` in document ${i}`), 
    u += ")"), new E(p.INVALID_ARGUMENT, c + t + u);
}

/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */ function Xu(t, e) {
    return t.some((t => t.isEqual(e)));
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
 */ class Zu {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    constructor(t, e, n, s, i) {
        this._firestore = t, this._userDataWriter = e, this._key = n, this._document = s, 
        this._converter = i;
    }
    /** Property of the `DocumentSnapshot` that provides the document's ID. */    get id() {
        return this._key.path.lastSegment();
    }
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */    get ref() {
        return new iu(this._firestore, this._converter, this._key);
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
                const t = new ta(this._firestore, this._userDataWriter, this._key, this._document, 
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
            const e = this._document.data.field(ea("DocumentSnapshot.get", t));
            if (null !== e) return this._userDataWriter.convertValue(e);
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
 */ class ta extends Zu {
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
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function ea(t, e) {
    return "string" == typeof e ? Ju(t, e) : e instanceof Au ? e._internalPath : e._delegate._internalPath;
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
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class na {
    /** @hideconstructor */
    constructor(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */    isEqual(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }
}

/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class sa extends Zu {
    /** @hideconstructor protected */
    constructor(t, e, n, s, i, r) {
        super(t, e, n, s, r), this._firestore = t, this._firestoreImpl = t, this.metadata = i;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    exists() {
        return super.exists();
    }
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */    data(t = {}) {
        if (this._document) {
            if (this._converter) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                const e = new ia(this._firestore, this._userDataWriter, this._key, this._document, this.metadata, 
                /* converter= */ null);
                return this._converter.fromFirestore(e, t);
            }
            return this._userDataWriter.convertValue(this._document.data.toProto(), t.serverTimestamps);
        }
    }
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(t, e = {}) {
        if (this._document) {
            const n = this._document.data.field(ea("DocumentSnapshot.get", t));
            if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
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
 */ class ia extends sa {
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */
    data(t = {}) {
        return super.data(t);
    }
}

/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */ class ra {
    /** @hideconstructor */
    constructor(t, e, n, s) {
        this._firestore = t, this._userDataWriter = e, this._snapshot = s, this.metadata = new na(s.hasPendingWrites, s.fromCache), 
        this.query = n;
    }
    /** An array of all the documents in the `QuerySnapshot`. */    get docs() {
        const t = [];
        return this.forEach((e => t.push(e))), t;
    }
    /** The number of documents in the `QuerySnapshot`. */    get size() {
        return this._snapshot.docs.size;
    }
    /** True if there are no documents in the `QuerySnapshot`. */    get empty() {
        return 0 === this.size;
    }
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */    forEach(t, e) {
        this._snapshot.docs.forEach((n => {
            t.call(e, new ia(this._firestore, this._userDataWriter, n.key, n, new na(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query._converter));
        }));
    }
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */    docChanges(t = {}) {
        const e = !!t.includeMetadataChanges;
        if (e && this._snapshot.excludesMetadataChanges) throw new E(p.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t._snapshot.oldDocs.isEmpty()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                let e, n = 0;
                return t._snapshot.docChanges.map((s => {
                    const i = new ia(t._firestore, t._userDataWriter, s.doc.key, s.doc, new na(t._snapshot.mutatedKeys.has(s.doc.key), t._snapshot.fromCache), t.query._converter);
                    return e = s.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            {
                // A DocumentSet that is updated incrementally as changes are applied to use
                // to lookup the index of a document.
                let n = t._snapshot.oldDocs;
                return t._snapshot.docChanges.filter((t => e || 3 /* Metadata */ !== t.type)).map((e => {
                    const s = new ia(t._firestore, t._userDataWriter, e.doc.key, e.doc, new na(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter);
                    let i = -1, r = -1;
                    return 0 /* Added */ !== e.type && (i = n.indexOf(e.doc.key), n = n.delete(e.doc.key)), 
                    1 /* Removed */ !== e.type && (n = n.add(e.doc), r = n.indexOf(e.doc.key)), {
                        type: oa(e.type),
                        doc: s,
                        oldIndex: i,
                        newIndex: r
                    };
                }));
            }
        }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
    }
}

function oa(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return P();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function ca(t, e) {
    return t instanceof sa && e instanceof sa ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof ra && e instanceof ra && (t._firestore === e._firestore && lu(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot));
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
 */ function ua(t) {
    if (jt(t) && 0 === t.explicitOrderBy.length) throw new E(p.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link (startAt:1)}, {@link (startAfter:1)}, {@link
 * endBefore:1}, {@link (endAt:1)}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class aa {}

/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function ha(t, ...e) {
    for (const n of e) t = n._apply(t);
    return t;
}

class la extends aa {
    constructor(t, e, n) {
        super(), this.Qc = t, this.Kc = e, this.jc = n, this.type = "where";
    }
    _apply(t) {
        const e = xu(t.firestore), n = function(t, e, n, s, i, r, o) {
            let c;
            if (i.isKeyField()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === r || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === r) throw new E(p.INVALID_ARGUMENT, `Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);
                if ("in" /* IN */ === r || "not-in" /* NOT_IN */ === r) {
                    ga(o, r);
                    const e = [];
                    for (const n of o) e.push(ya(s, t, n));
                    c = {
                        arrayValue: {
                            values: e
                        }
                    };
                } else c = ya(s, t, o);
            } else "in" /* IN */ !== r && "not-in" /* NOT_IN */ !== r && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== r || ga(o, r), 
            c = Qu(n, e, o, 
            /* allowArrays= */ "in" /* IN */ === r || "not-in" /* NOT_IN */ === r);
            const u = bt.create(i, r, c);
            return function(t, e) {
                if (e.g()) {
                    const n = Gt(t);
                    if (null !== n && !n.isEqual(e.field)) throw new E(p.INVALID_ARGUMENT, `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);
                    const s = Wt(t);
                    null !== s && pa(t, e.field, s);
                }
                const n = function(t, e) {
                    for (const n of t.filters) if (e.indexOf(n.op) >= 0) return n.op;
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
                }(e.op));
                if (null !== n) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw n === e.op ? new E(p.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new E(p.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
            }(t, u), u;
        }(t._query, "where", e, t.firestore._databaseId, this.Qc, this.Kc, this.jc);
        return new ru(t.firestore, t._converter, function(t, e) {
            const n = t.filters.concat([ e ]);
            return new qt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, n));
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
 */ class fa extends aa {
    constructor(t, e) {
        super(), this.Qc = t, this.Wc = e, this.type = "orderBy";
    }
    _apply(t) {
        const e = function(t, e, n) {
            if (null !== t.startAt) throw new E(p.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new E(p.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            const s = new $t(e, n);
            return function(t, e) {
                if (null === Wt(t)) {
                    // This is the first order by. It must match any inequality.
                    const n = Gt(t);
                    null !== n && pa(t, n, e.field);
                }
            }(t, s), s;
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
 */ (t._query, this.Qc, this.Wc);
        return new ru(t.firestore, t._converter, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            const n = t.explicitOrderBy.concat([ e ]);
            return new qt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t._query, e));
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
 */ class da extends aa {
    constructor(t, e, n) {
        super(), this.type = t, this.Gc = e, this.zc = n;
    }
    _apply(t) {
        return new ru(t.firestore, t._converter, Yt(t._query, this.Gc, this.zc));
    }
}

/**
 * Creates a `QueryConstraint` that only returns the first matching documents.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ class wa extends aa {
    constructor(t, e, n) {
        super(), this.type = t, this.Hc = e, this.Jc = n;
    }
    _apply(t) {
        const e = ma(t, this.type, this.Hc, this.Jc);
        return new ru(t.firestore, t._converter, function(t, e) {
            return new qt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t._query, e));
    }
}

class _a extends aa {
    constructor(t, e, n) {
        super(), this.type = t, this.Hc = e, this.Jc = n;
    }
    _apply(t) {
        const e = ma(t, this.type, this.Hc, this.Jc);
        return new ru(t.firestore, t._converter, function(t, e) {
            return new qt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t._query, e));
    }
}

/** Helper function to create a bound from a document or fields */
function ma(t, e, n, s) {
    if (n[0] = getModularInstance(n[0]), n[0] instanceof Zu) return function(t, e, n, s, i) {
        if (!s) throw new E(p.NOT_FOUND, `Can't use a DocumentSnapshot that doesn't exist for ${n}().`);
        const r = [];
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
                for (const n of Ht(t)) if (n.field.isKeyField()) r.push(ht(e, s.key)); else {
            const t = s.data.field(n.field);
            if (J(t)) throw new E(p.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + n.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
            if (null === t) {
                const t = n.field.canonicalString();
                throw new E(p.INVALID_ARGUMENT, `Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`);
            }
            r.push(t);
        }
        return new kt(r, i);
    }
    /**
 * Converts a list of field values to a Bound for the given query.
 */ (t._query, t.firestore._databaseId, e, n[0]._document, s);
    {
        const i = xu(t.firestore);
        return function(t, e, n, s, i, r) {
            // Use explicit order by's because it has to match the query the user made
            const o = t.explicitOrderBy;
            if (i.length > o.length) throw new E(p.INVALID_ARGUMENT, `Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);
            const c = [];
            for (let r = 0; r < i.length; r++) {
                const u = i[r];
                if (o[r].field.isKeyField()) {
                    if ("string" != typeof u) throw new E(p.INVALID_ARGUMENT, `Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof u}`);
                    if (!zt(t) && -1 !== u.indexOf("/")) throw new E(p.INVALID_ARGUMENT, `Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${s}() must be a plain document ID, but '${u}' contains a slash.`);
                    const n = t.path.child(q.fromString(u));
                    if (!nt.isDocumentKey(n)) throw new E(p.INVALID_ARGUMENT, `Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${s}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);
                    const i = new nt(n);
                    c.push(ht(e, i));
                } else {
                    const t = Qu(n, s, u);
                    c.push(t);
                }
            }
            return new kt(c, r);
        }
        /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */ (t._query, t.firestore._databaseId, i, e, n, s);
    }
}

function ya(t, e, n) {
    if ("string" == typeof (n = getModularInstance(n))) {
        if ("" === n) throw new E(p.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!zt(e) && -1 !== n.indexOf("/")) throw new E(p.INVALID_ARGUMENT, `Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
        const s = e.path.child(q.fromString(n));
        if (!nt.isDocumentKey(s)) throw new E(p.INVALID_ARGUMENT, `Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);
        return ht(t, new nt(s));
    }
    if (n instanceof iu) return ht(t, n._key);
    throw new E(p.INVALID_ARGUMENT, `Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zc(n)}.`);
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function ga(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new E(p.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
    if (t.length > 10) throw new E(p.INVALID_ARGUMENT, `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`);
}

function pa(t, e, n) {
    if (!n.isEqual(e)) throw new E(p.INVALID_ARGUMENT, `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`);
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
 */ class Ea {
    convertValue(t, e = "none") {
        switch (st(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return z(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.convertTimestamp(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.convertServerTimestamp(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.convertBytes(H(t.bytesValue));

          case 7 /* RefValue */ :
            return this.convertReference(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.convertGeoPoint(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.convertArray(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.convertObject(t.mapValue, e);

          default:
            throw P();
        }
    }
    convertObject(t, e) {
        const n = {};
        return M(t.fields || {}, ((t, s) => {
            n[t] = this.convertValue(s, e);
        })), n;
    }
    convertGeoPoint(t) {
        return new vu(z(t.latitude), z(t.longitude));
    }
    convertArray(t, e) {
        return (t.values || []).map((t => this.convertValue(t, e)));
    }
    convertServerTimestamp(t, e) {
        switch (e) {
          case "previous":
            const n = Y(t);
            return null == n ? null : this.convertValue(n, e);

          case "estimate":
            return this.convertTimestamp(X(t));

          default:
            return null;
        }
    }
    convertTimestamp(t) {
        const e = G(t);
        return new k(e.seconds, e.nanos);
    }
    convertDocumentKey(t, e) {
        const n = q.fromString(t);
        V(Hn(n));
        const s = new qc(n.get(1), n.get(3)), i = new nt(n.popFirst(5));
        return s.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        R(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`), 
        i;
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
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Ta(t, e, n) {
    let s;
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return s = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, 
    s;
}

class Ia extends Ea {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new Ru(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new iu(this.firestore, /* converter= */ null, e);
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
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch.commit} is
 * called.
 */ class Aa {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, 
        this._dataReader = xu(t);
    }
    set(t, e, n) {
        this._verifyNotCommitted();
        const s = Ra(t, this._firestore), i = Ta(s._converter, e, n), r = Fu(this._dataReader, "WriteBatch.set", s._key, i, null !== s._converter, n);
        return this._mutations.push(r.toMutation(s._key, Ie.none())), this;
    }
    update(t, e, n, ...s) {
        this._verifyNotCommitted();
        const i = Ra(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return r = "string" == typeof (e = getModularInstance(e)) || e instanceof Au ? Uu(this._dataReader, "WriteBatch.update", i._key, e, n, s) : qu(this._dataReader, "WriteBatch.update", i._key, e), 
        this._mutations.push(r.toMutation(i._key, Ie.exists(!0))), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */    delete(t) {
        this._verifyNotCommitted();
        const e = Ra(t, this._firestore);
        return this._mutations = this._mutations.concat(new ke(e._key, Ie.none())), this;
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
        if (this._committed) throw new E(p.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }
}

function Ra(t, e) {
    if ((t = getModularInstance(t)).firestore !== e) throw new E(p.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
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
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ class ba extends Ea {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new Ru(t);
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new iu(this.firestore, /* converter= */ null, e);
    }
}

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function va(t, e, n, ...s) {
    t = tu(t, iu);
    const i = tu(t.firestore, mu), r = xu(i);
    let o;
    o = "string" == typeof (
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    e = getModularInstance(e)) || e instanceof Au ? Uu(r, "updateDoc", t._key, e, n, s) : qu(r, "updateDoc", t._key, e);
    return Va(i, [ o.toMutation(t._key, Ie.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function Pa(t, ...e) {
    var n, s, i;
    t = getModularInstance(t);
    let r = {
        includeMetadataChanges: !1
    }, o = 0;
    "object" != typeof e[o] || du(e[o]) || (r = e[o], o++);
    const u = {
        includeMetadataChanges: r.includeMetadataChanges
    };
    if (du(e[o])) {
        const t = e[o];
        e[o] = null === (n = t.next) || void 0 === n ? void 0 : n.bind(t), e[o + 1] = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t), 
        e[o + 2] = null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t);
    }
    let a, h, l;
    if (t instanceof iu) h = tu(t.firestore, mu), l = Qt(t._key.path), a = {
        next: n => {
            e[o] && e[o](Sa(h, t, n));
        },
        error: e[o + 1],
        complete: e[o + 2]
    }; else {
        const n = tu(t, ru);
        h = tu(n.firestore, mu), l = n._query;
        const s = new ba(h);
        a = {
            next: t => {
                e[o] && e[o](new ra(h, s, n, t));
            },
            error: e[o + 1],
            complete: e[o + 2]
        }, ua(t._query);
    }
    return function(t, e, n, s) {
        const i = new mc(s), r = new Io(e, i, n);
        return t.asyncQueue.enqueueAndForget((async () => yo(await Sc(t), r))), () => {
            i.Wo(), t.asyncQueue.enqueueAndForget((async () => go(await Sc(t), r)));
        };
    }(yu(h), l, u, a);
}

/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */
function Va(t, e) {
    return function(t, e) {
        const n = new ps;
        return t.asyncQueue.enqueueAndForget((async () => Oo(await Vc(t), e, n))), n.promise;
    }(yu(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function Sa(t, e, n) {
    const s = n.docs.get(e._key), i = new ba(t);
    return new sa(t, i, e._key, s, new na(n.hasPendingWrites, n.fromCache), e._converter);
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
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ class Da extends class {
    /** @hideconstructor */
    constructor(t, e) {
        this._firestore = t, this._transaction = e, this._dataReader = xu(t);
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = Ra(t, this._firestore), n = new Ia(this._firestore);
        return this._transaction.lookup([ e._key ]).then((t => {
            if (!t || 1 !== t.length) return P();
            const s = t[0];
            if (s.isFoundDocument()) return new Zu(this._firestore, n, s.key, s, e._converter);
            if (s.isNoDocument()) return new Zu(this._firestore, n, e._key, null, e._converter);
            throw P();
        }));
    }
    set(t, e, n) {
        const s = Ra(t, this._firestore), i = Ta(s._converter, e, n), r = Fu(this._dataReader, "Transaction.set", s._key, i, null !== s._converter, n);
        return this._transaction.set(s._key, r), this;
    }
    update(t, e, n, ...s) {
        const i = Ra(t, this._firestore);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                let r;
        return r = "string" == typeof (e = getModularInstance(e)) || e instanceof Au ? Uu(this._dataReader, "Transaction.update", i._key, e, n, s) : qu(this._dataReader, "Transaction.update", i._key, e), 
        this._transaction.update(i._key, r), this;
    }
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */    delete(t) {
        const e = Ra(t, this._firestore);
        return this._transaction.delete(e._key), this;
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
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    constructor(t, e) {
        super(t, e), this._firestore = t;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    get(t) {
        const e = Ra(t, this._firestore), n = new ba(this._firestore);
        return super.get(t).then((t => new sa(this._firestore, n, e._key, t._document, new na(
        /* hasPendingWrites= */ !1, 
        /* fromCache= */ !1), e._converter)));
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
/** Helper function to assert Uint8Array is available at runtime. */
function Ca() {
    if ("undefined" == typeof Uint8Array) throw new E(p.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Na() {
    if ("undefined" == typeof atob) throw new E(p.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ class xa {
    constructor(t) {
        this._delegate = t;
    }
    static fromBase64String(t) {
        return Na(), new xa(Ru.fromBase64String(t));
    }
    static fromUint8Array(t) {
        return Ca(), new xa(Ru.fromUint8Array(t));
    }
    toBase64() {
        return Na(), this._delegate.toBase64();
    }
    toUint8Array() {
        return Ca(), this._delegate.toUint8Array();
    }
    isEqual(t) {
        return this._delegate.isEqual(t._delegate);
    }
    toString() {
        return "Blob(base64: " + this.toBase64() + ")";
    }
}

/**
 * The persistence provider included with the full Firestore SDK.
 */ class Oa {
    enableIndexedDbPersistence(t, e) {
        return function(t, e) {
            Iu(t = tu(t, mu));
            const n = yu(t), s = t._freezeSettings(), i = new wc;
            return pu(n, i, new fc(i, s.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
        }
        /**
 * Attempts to enable multi-tab persistent storage, if possible. If enabled
 * across all tabs, all operations share access to local persistence, including
 * shared execution of queries and latency-compensated local document updates
 * across all connected instances.
 *
 * If this fails, `enableMultiTabIndexedDbPersistence()` will reject the promise
 * it returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab and
 *     multi-tab is not enabled.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @returns A promise that represents successfully enabling persistent
 * storage.
 */ (t._delegate, {
            forceOwnership: e
        });
    }
    enableMultiTabIndexedDbPersistence(t) {
        return function(t) {
            Iu(t = tu(t, mu));
            const e = yu(t), n = t._freezeSettings(), s = new wc;
            return pu(e, s, new dc(s, n.cacheSizeBytes));
        }(t._delegate);
    }
    clearIndexedDbPersistence(t) {
        return Eu(t._delegate);
    }
}

/**
 * Compat class for Firestore. Exposes Firestore Legacy API, but delegates
 * to the functional API of firestore-exp.
 */ class $a {
    constructor(t, e, n) {
        this._delegate = e, this.Yc = n, this.INTERNAL = {
            delete: () => this.terminate()
        }, t instanceof qc || (this.Xc = t);
    }
    get _databaseId() {
        return this._delegate._databaseId;
    }
    settings(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this._delegate._getSettings()), t)).merge, 
        this._delegate._setSettings(t);
    }
    useEmulator(t, e) {
        !function(t, e, n) {
            const s = (t = tu(t, su))._getSettings();
            "firestore.googleapis.com" !== s.host && s.host !== e && b("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
            t._setSettings(Object.assign(Object.assign({}, s), {
                host: `${e}:${n}`,
                ssl: !1
            }));
        }(this._delegate, t, e);
    }
    enableNetwork() {
        return Dc(yu(tu(this._delegate, mu)));
    }
    disableNetwork() {
        return Cc(yu(tu(this._delegate, mu)));
    }
    enablePersistence(t) {
        let e = !1, n = !1;
        return t && (e = !!t.synchronizeTabs, n = !!t.experimentalForceOwningTab, Jc("synchronizeTabs", e, "experimentalForceOwningTab", n)), 
        e ? this.Yc.enableMultiTabIndexedDbPersistence(this) : this.Yc.enableIndexedDbPersistence(this, n);
    }
    clearPersistence() {
        return this.Yc.clearIndexedDbPersistence(this);
    }
    terminate() {
        return this.Xc && (this.Xc._removeServiceInstance("firestore"), this.Xc._removeServiceInstance("firestore-exp")), 
        this._delegate._delete();
    }
    waitForPendingWrites() {
        return Tu(this._delegate);
    }
    onSnapshotsInSync(t) {
        return function(t, e) {
            return Oc(yu(t = tu(t, mu)), du(e) ? e : {
                next: e
            });
        }(this._delegate, t);
    }
    get app() {
        if (!this.Xc) throw new E(p.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this.Xc;
    }
    collection(t) {
        try {
            return new Xa(this, cu(this._delegate, t));
        } catch (t) {
            throw Ka(t, "collection()", "Firestore.collection()");
        }
    }
    doc(t) {
        try {
            return new Qa(this, au(this._delegate, t));
        } catch (t) {
            throw Ka(t, "doc()", "Firestore.doc()");
        }
    }
    collectionGroup(t) {
        try {
            return new Ha(this, uu(this._delegate, t));
        } catch (t) {
            throw Ka(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }
    runTransaction(t) {
        return function(t, e) {
            return $c(yu(t), (n => e(new Da(t, n))));
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
 */ (this._delegate, (e => t(new Ba(this, e))));
    }
    batch() {
        return yu(this._delegate), new qa(new Aa(this._delegate, (t => Va(this._delegate, t))));
    }
    loadBundle(t) {
        throw new E(p.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
    }
    namedQuery(t) {
        throw new E(p.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
    }
}

class Ma extends Ea {
    constructor(t) {
        super(), this.firestore = t;
    }
    convertBytes(t) {
        return new xa(new Ru(t));
    }
    convertReference(t) {
        const e = this.convertDocumentKey(t, this.firestore._databaseId);
        return Qa.Zc(e, this.firestore, /* converter= */ null);
    }
}

function La(t) {
    var e;
    e = t, T.setLogLevel(e);
}

/**
 * A reference to a transaction.
 */ class Ba {
    constructor(t, e) {
        this._firestore = t, this._delegate = e, this._userDataWriter = new Ma(t);
    }
    get(t) {
        const e = Za(t);
        return this._delegate.get(e).then((t => new Ga(this._firestore, new sa(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, e._converter))));
    }
    set(t, e, n) {
        const s = Za(t);
        return n ? (Hc("Transaction.set", n), this._delegate.set(s, e, n)) : this._delegate.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = Za(t);
        return 2 === arguments.length ? this._delegate.update(i, e) : this._delegate.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = Za(t);
        return this._delegate.delete(e), this;
    }
}

class qa {
    constructor(t) {
        this._delegate = t;
    }
    set(t, e, n) {
        const s = Za(t);
        return n ? (Hc("WriteBatch.set", n), this._delegate.set(s, e, n)) : this._delegate.set(s, e), 
        this;
    }
    update(t, e, n, ...s) {
        const i = Za(t);
        return 2 === arguments.length ? this._delegate.update(i, e) : this._delegate.update(i, e, n, ...s), 
        this;
    }
    delete(t) {
        const e = Za(t);
        return this._delegate.delete(e), this;
    }
    commit() {
        return this._delegate.commit();
    }
}

/**
 * Wraps a `PublicFirestoreDataConverter` translating the types from the
 * experimental SDK into corresponding types from the Classic SDK before passing
 * them to the wrapped converter.
 */ class Ua {
    constructor(t, e, n) {
        this._firestore = t, this._userDataWriter = e, this._delegate = n;
    }
    fromFirestore(t, e) {
        const n = new ia(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, 
        /* converter= */ null);
        return this._delegate.fromFirestore(new za(this._firestore, n), null != e ? e : {});
    }
    toFirestore(t, e) {
        return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t);
    }
    // Use the same instance of `FirestoreDataConverter` for the given instances
    // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
    // compare equal for two objects created with the same converter instance.
    static tu(t, e) {
        const n = Ua.eu;
        let s = n.get(t);
        s || (s = new WeakMap, n.set(t, s));
        let i = s.get(e);
        return i || (i = new Ua(t, new Ma(t), e), s.set(e, i)), i;
    }
}

Ua.eu = new WeakMap;

/**
 * A reference to a particular document in a collection in the database.
 */
class Qa {
    constructor(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new Ma(t);
    }
    static nu(t, e, n) {
        if (t.length % 2 != 0) throw new E(p.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);
        return new Qa(e, new iu(e._delegate, n, new nt(t)));
    }
    static Zc(t, e, n) {
        return new Qa(e, new iu(e._delegate, n, t));
    }
    get id() {
        return this._delegate.id;
    }
    get parent() {
        return new Xa(this.firestore, this._delegate.parent);
    }
    get path() {
        return this._delegate.path;
    }
    collection(t) {
        try {
            return new Xa(this.firestore, cu(this._delegate, t));
        } catch (t) {
            throw Ka(t, "collection()", "DocumentReference.collection()");
        }
    }
    isEqual(t) {
        return (t = getModularInstance(t)) instanceof iu && hu(this._delegate, t);
    }
    set(t, e) {
        e = Hc("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = tu(t, iu);
                const s = tu(t.firestore, mu), i = Ta(t._converter, e, n);
                return Va(s, [ Fu(xu(s), "setDoc", t._key, i, null !== t._converter, n).toMutation(t._key, Ie.none()) ]);
            }(this._delegate, t, e);
        } catch (t) {
            throw Ka(t, "setDoc()", "DocumentReference.set()");
        }
    }
    update(t, e, ...n) {
        try {
            return 1 === arguments.length ? va(this._delegate, t) : va(this._delegate, t, e, ...n);
        } catch (t) {
            throw Ka(t, "updateDoc()", "DocumentReference.update()");
        }
    }
    delete() {
        return Va(tu((t = this._delegate).firestore, mu), [ new ke(t._key, Ie.none()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }
    onSnapshot(...t) {
        const e = ja(t), n = Wa(t, (t => new Ga(this.firestore, new sa(this.firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, this._delegate._converter))));
        return Pa(this._delegate, e, n);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = tu(t, iu);
            const e = tu(t.firestore, mu), n = yu(e), s = new ba(e);
            return Nc(n, t._key).then((n => new sa(e, s, t._key, n, new na(null !== n && n.hasLocalMutations, 
            /* fromCache= */ !0), t._converter)));
        }
        /**
 * Reads the document referred to by this `DocumentReference` from the server.
 * Returns an error if the network is not available.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ (this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = tu(t, iu);
            const e = tu(t.firestore, mu);
            return xc(yu(e), t._key, {
                source: "server"
            }).then((n => Sa(e, t, n)));
        }
        /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this._delegate) : function(t) {
            t = tu(t, iu);
            const e = tu(t.firestore, mu);
            return xc(yu(e), t._key).then((n => Sa(e, t, n)));
        }(this._delegate), e.then((t => new Ga(this.firestore, new sa(this.firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata, this._delegate._converter))));
    }
    withConverter(t) {
        return new Qa(this.firestore, t ? this._delegate.withConverter(Ua.tu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function Ka(t, e, n) {
    return t.message = t.message.replace(e, n), t;
}

/**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */ function ja(t) {
    for (const e of t) if ("object" == typeof e && !du(e)) return e;
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function Wa(t, e) {
    var n, s;
    let i;
    return i = du(t[0]) ? t[0] : du(t[1]) ? t[1] : "function" == typeof t[0] ? {
        next: t[0],
        error: t[1],
        complete: t[2]
    } : {
        next: t[1],
        error: t[2],
        complete: t[3]
    }, {
        next: t => {
            i.next && i.next(e(t));
        },
        error: null === (n = i.error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (s = i.complete) || void 0 === s ? void 0 : s.bind(i)
    };
}

class Ga {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get ref() {
        return new Qa(this._firestore, this._delegate.ref);
    }
    get id() {
        return this._delegate.id;
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get exists() {
        return this._delegate.exists();
    }
    data(t) {
        return this._delegate.data(t);
    }
    get(t, e) {
        return this._delegate.get(t, e);
    }
    isEqual(t) {
        return ca(this._delegate, t._delegate);
    }
}

class za extends Ga {
    data(t) {
        return this._delegate.data(t);
    }
}

class Ha {
    constructor(t, e) {
        this.firestore = t, this._delegate = e, this._userDataWriter = new Ma(t);
    }
    where(t, e, n) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new Ha(this.firestore, ha(this._delegate, function(t, e, n) {
                const s = e, i = ea("where", t);
                return new la(i, s, n);
            }(t, e, n)));
        } catch (t) {
            throw Ka(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    orderBy(t, e) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new Ha(this.firestore, ha(this._delegate, function(t, e = "asc") {
                const n = e, s = ea("orderBy", t);
                return new fa(s, n);
            }(t, e)));
        } catch (t) {
            throw Ka(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }
    limit(t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(t) {
                return eu("limit", t), new da("limit", t, "F" /* First */);
            }
            /**
 * Creates a `QueryConstraint` that only returns the last matching documents.
 *
 * You must specify at least one `orderBy` clause for `limitToLast` queries,
 * otherwise an exception will be thrown during execution.
 *
 * @param limit - The maximum number of items to return.
 * @returns The created `Query`.
 */ (t)));
        } catch (t) {
            throw Ka(t, "limit()", "Query.limit()");
        }
    }
    limitToLast(t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(t) {
                return eu("limitToLast", t), new da("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw Ka(t, "limitToLast()", "Query.limitToLast()");
        }
    }
    startAt(...t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(...t) {
                return new wa("startAt", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw Ka(t, "startAt()", "Query.startAt()");
        }
    }
    startAfter(...t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(...t) {
                return new wa("startAfter", t, 
                /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw Ka(t, "startAfter()", "Query.startAfter()");
        }
    }
    endBefore(...t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(...t) {
                return new _a("endBefore", t, /*before=*/ !0);
            }(...t)));
        } catch (t) {
            throw Ka(t, "endBefore()", "Query.endBefore()");
        }
    }
    endAt(...t) {
        try {
            return new Ha(this.firestore, ha(this._delegate, function(...t) {
                return new _a("endAt", t, /*before=*/ !1);
            }(...t)));
        } catch (t) {
            throw Ka(t, "endAt()", "Query.endAt()");
        }
    }
    isEqual(t) {
        return lu(this._delegate, t._delegate);
    }
    get(t) {
        let e;
        return e = "cache" === (null == t ? void 0 : t.source) ? 
        /**
 * Executes the query and returns the results as a `QuerySnapshot` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */
        function(t) {
            t = tu(t, ru);
            const e = tu(t.firestore, mu), n = yu(e), s = new ba(e);
            return Fc(n, t._query).then((n => new ra(e, s, t, n)));
        }
        /**
 * Executes the query and returns the results as a `QuerySnapshot` from the
 * server. Returns an error if the network is not available.
 *
 * @returns A Promise that will be resolved with the results of the query.
 */ (this._delegate) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = tu(t, ru);
            const e = tu(t.firestore, mu), n = yu(e), s = new ba(e);
            return kc(n, t._query, {
                source: "server"
            }).then((n => new ra(e, s, t, n)));
        }(this._delegate) : function(t) {
            t = tu(t, ru);
            const e = tu(t.firestore, mu), n = yu(e), s = new ba(e);
            return ua(t._query), kc(n, t._query).then((n => new ra(e, s, t, n)));
        }(this._delegate), e.then((t => new Ya(this.firestore, new ra(this.firestore._delegate, this._userDataWriter, this._delegate, t._snapshot))));
    }
    onSnapshot(...t) {
        const e = ja(t), n = Wa(t, (t => new Ya(this.firestore, new ra(this.firestore._delegate, this._userDataWriter, this._delegate, t._snapshot))));
        return Pa(this._delegate, e, n);
    }
    withConverter(t) {
        return new Ha(this.firestore, t ? this._delegate.withConverter(Ua.tu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

class Ja {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get type() {
        return this._delegate.type;
    }
    get doc() {
        return new za(this._firestore, this._delegate.doc);
    }
    get oldIndex() {
        return this._delegate.oldIndex;
    }
    get newIndex() {
        return this._delegate.newIndex;
    }
}

class Ya {
    constructor(t, e) {
        this._firestore = t, this._delegate = e;
    }
    get query() {
        return new Ha(this._firestore, this._delegate.query);
    }
    get metadata() {
        return this._delegate.metadata;
    }
    get size() {
        return this._delegate.size;
    }
    get empty() {
        return this._delegate.empty;
    }
    get docs() {
        return this._delegate.docs.map((t => new za(this._firestore, t)));
    }
    docChanges(t) {
        return this._delegate.docChanges(t).map((t => new Ja(this._firestore, t)));
    }
    forEach(t, e) {
        this._delegate.forEach((n => {
            t.call(e, new za(this._firestore, n));
        }));
    }
    isEqual(t) {
        return ca(this._delegate, t._delegate);
    }
}

class Xa extends Ha {
    constructor(t, e) {
        super(t, e), this.firestore = t, this._delegate = e;
    }
    get id() {
        return this._delegate.id;
    }
    get path() {
        return this._delegate.path;
    }
    get parent() {
        const t = this._delegate.parent;
        return t ? new Qa(this.firestore, t) : null;
    }
    doc(t) {
        try {
            return new Qa(this.firestore, void 0 === t ? au(this._delegate) : au(this._delegate, t));
        } catch (t) {
            throw Ka(t, "doc()", "CollectionReference.doc()");
        }
    }
    add(t) {
        return function(t, e) {
            const n = tu(t.firestore, mu), s = au(t), i = Ta(t._converter, e);
            return Va(n, [ Fu(xu(t.firestore), "addDoc", s._key, i, null !== t._converter, {}).toMutation(s._key, Ie.exists(!1)) ]).then((() => s));
        }(this._delegate, t).then((t => new Qa(this.firestore, t)));
    }
    isEqual(t) {
        return hu(this._delegate, t._delegate);
    }
    withConverter(t) {
        return new Xa(this.firestore, t ? this._delegate.withConverter(Ua.tu(this.firestore, t)) : this._delegate.withConverter(null));
    }
}

function Za(t) {
    return tu(t, iu);
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
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ class th {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...t) {
        this._delegate = new Au(...t);
    }
    static documentId() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new th(Q.keyField().canonicalString());
    }
    isEqual(t) {
        return (t = getModularInstance(t)) instanceof Au && this._delegate._internalPath.isEqual(t._internalPath);
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
 */ class eh {
    constructor(t) {
        this._delegate = t;
    }
    static serverTimestamp() {
        const t = new $u("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new eh(t);
    }
    static delete() {
        const t = new ku("deleteField");
        return t._methodName = "FieldValue.delete", new eh(t);
    }
    static arrayUnion(...t) {
        const e = 
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
 */
        function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new Mu("arrayUnion", t);
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
 */ (...t);
        return e._methodName = "FieldValue.arrayUnion", new eh(e);
    }
    static arrayRemove(...t) {
        const e = function(...t) {
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
            return new Lu("arrayRemove", t);
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
 */ (...t);
        return e._methodName = "FieldValue.arrayRemove", new eh(e);
    }
    static increment(t) {
        const e = function(t) {
            return new Bu("increment", t);
        }(t);
        return e._methodName = "FieldValue.increment", new eh(e);
    }
    isEqual(t) {
        return this._delegate.isEqual(t._delegate);
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
 */ function nh(t) {
    /**
 * Loads a Firestore bundle into the local cache.
 *
 * @param firestore - The `Firestore` instance to load bundles for for.
 * @param bundleData - An object representing the bundle to be loaded. Valid objects are
 *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
 *
 * @returns
 *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
 *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
 */
    return function(t, e) {
        const n = yu(t = tu(t, mu)), s = new wu;
        return Mc(n, t._databaseId, e, s), s;
    }
    /**
 * Reads a Firestore `Query` from local cache, identified by the given name.
 *
 * The named queries are packaged  into bundles on the server side (along
 * with resulting documents), and loaded to local cache using `loadBundle`. Once in local
 * cache, use this method to extract a `Query` by name.
 */ (this._delegate, t);
}

function sh(t) {
    return (e = this._delegate, n = t, Lc(yu(e = tu(e, mu)), n).then((t => t ? new ru(e, null, t.query) : null))).then((t => t ? new Ha(this, t) : null));
    var e, n;
}

export { $a as $, Ba as B, Ga as G, Ha as H, La as L, Oa as O, Qa as Q, Xa as X, Ya as Y, _u as _, eh as e, k, mu as m, nh as n, qa as q, sh as s, th as t, vu as v, xa as x, za as z };
//# sourceMappingURL=prebuilt-ac190846.js.map
