/// <reference types="node" />
import BN from 'bn.js';
import { PrefixedHexString, TransformableToArray, TransformableToBuffer } from './types';
/**
 * Returns a buffer filled with 0s.
 * @param bytes the number of bytes the buffer should be
 */
export declare const zeros: (bytes: number) => Buffer;
/**
 * Left Pads a `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
export declare const setLengthLeft: (msg: Buffer, length: number) => Buffer;
/**
 * Right Pads a `Buffer` with trailing zeros till it has `length` bytes.
 * it truncates the end if it exceeds.
 * @param msg the value to pad (Buffer)
 * @param length the number of bytes the output should be
 * @return (Buffer)
 */
export declare const setLengthRight: (msg: Buffer, length: number) => Buffer;
/**
 * Trims leading zeros from a `Buffer`.
 * @param a (Buffer)
 * @return (Buffer)
 */
export declare const unpadBuffer: (a: Buffer) => Buffer;
/**
 * Trims leading zeros from an `Array` (of numbers).
 * @param a (number[])
 * @return (number[])
 */
export declare const unpadArray: (a: number[]) => number[];
/**
 * Trims leading zeros from a hex-prefixed `String`.
 * @param a (String)
 * @return (String)
 */
export declare const unpadHexString: (a: string) => string;
export declare type ToBufferInputTypes = PrefixedHexString | number | BN | Buffer | Uint8Array | number[] | TransformableToArray | TransformableToBuffer | null | undefined;
/**
 * Attempts to turn a value into a `Buffer`.
 * Inputs supported: `Buffer`, `String` (hex-prefixed), `Number`, null/undefined, `BN` and other objects
 * with a `toArray()` or `toBuffer()` method.
 * @param v the value
 */
export declare const toBuffer: (v: ToBufferInputTypes) => Buffer;
/**
 * Converts a `Buffer` to a `Number`.
 * @param buf `Buffer` object to convert
 * @throws If the input number exceeds 53 bits.
 */
export declare const bufferToInt: (buf: Buffer) => number;
/**
 * Converts a `Buffer` into a `0x`-prefixed hex `String`.
 * @param buf `Buffer` object to convert
 */
export declare const bufferToHex: (buf: Buffer) => string;
/**
 * Interprets a `Buffer` as a signed integer and returns a `BN`. Assumes 256-bit numbers.
 * @param num Signed integer value
 */
export declare const fromSigned: (num: Buffer) => BN;
/**
 * Converts a `BN` to an unsigned integer and returns it as a `Buffer`. Assumes 256-bit numbers.
 * @param num
 */
export declare const toUnsigned: (num: BN) => Buffer;
/**
 * Adds "0x" to a given `String` if it does not already start with "0x".
 */
export declare const addHexPrefix: (str: string) => string;
/**
 * Converts a `Buffer` or `Array` to JSON.
 * @param ba (Buffer|Array)
 * @return (Array|String|null)
 */
export declare const baToJSON: (ba: any) => any;
