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

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file proto2.proto (package test, syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file proto2.proto.
 */
export const file_proto2: GenFile = /*@__PURE__*/
  fileDesc("Cgxwcm90bzIucHJvdG8SBHRlc3QiOgoNUHJvdG8yTWVzc2FnZRIUCgxzdHJpbmdfZmllbGQYASABKAkSEwoLaW50MzJfZmllbGQYAyABKAU");

/**
 * @generated from message test.Proto2Message
 */
export type Proto2Message = Message<"test.Proto2Message"> & {
  /**
   * @generated from field: optional string string_field = 1;
   */
  stringField: string;

  /**
   * @generated from field: optional int32 int32_field = 3;
   */
  int32Field: number;
};

/**
 * Describes the message test.Proto2Message.
 * Use `create(Proto2MessageSchema)` to create a new message.
 */
export const Proto2MessageSchema: GenMessage<Proto2Message> = /*@__PURE__*/
  messageDesc(file_proto2, 0);

