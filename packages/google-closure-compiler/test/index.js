/*
 * Copyright 2016 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Tests for google-closure-compiler
 * @author Teppei Sato (teppeis@gmail.com)
 */

'use strict';

var assert = require('assert');
var sut = require('../');
require('mocha');

describe('google-closure-compiler', function() {
  describe('compiler', function() {
    it('should be a function', function() {
      assert.equal(typeof sut.compiler, 'function');
    });
    it('.COMPILER_PATH should be string', function() {
      assert.equal(typeof sut.compiler.COMPILER_PATH, 'string');
    });
    it('.CONTRIB_PATH should be string', function() {
      assert.equal(typeof sut.compiler.CONTRIB_PATH, 'string');
    });
  });
  it('gulp should be a function', function() {
    assert.equal(typeof sut.gulp, 'function');
  });
  it('grunt should be a function', function() {
    assert.equal(typeof sut.grunt, 'function');
  });
});
