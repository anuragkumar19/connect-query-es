// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.9.0
// @generated from file connectrpc/eliza/v1/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * SayRequest is a single-sentence request.
 *
 * @generated from message connectrpc.eliza.v1.SayRequest
 */
export const SayRequest = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.SayRequest",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * SayResponse is a single-sentence response.
 *
 * @generated from message connectrpc.eliza.v1.SayResponse
 */
export const SayResponse = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.SayResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConverseRequest is a single sentence request sent as part of a
 * back-and-forth conversation.
 *
 * @generated from message connectrpc.eliza.v1.ConverseRequest
 */
export const ConverseRequest = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.ConverseRequest",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConverseResponse is a single sentence response sent in answer to a
 * ConverseRequest.
 *
 * @generated from message connectrpc.eliza.v1.ConverseResponse
 */
export const ConverseResponse = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.ConverseResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * IntroduceRequest asks Eliza to introduce itself to the named user.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceRequest
 */
export const IntroduceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.IntroduceRequest",
  () => [{ no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ }],
);

/**
 * IntroduceResponse is one sentence of Eliza's introductory monologue.
 *
 * @generated from message connectrpc.eliza.v1.IntroduceResponse
 */
export const IntroduceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "connectrpc.eliza.v1.IntroduceResponse",
  () => [
    { no: 1, name: "sentence", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
