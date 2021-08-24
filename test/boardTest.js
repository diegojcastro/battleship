const assert = require("chai").assert;
const board = require("../board");

describe("#board()", () => {
  it('should return an empty board with board.generate()', () => {
    const empty = Object.create(board).generate();
    const template = {
      a: ['-','-','-','-','-','-','-','-','-','-'],
      b: ['-','-','-','-','-','-','-','-','-','-'],
      c: ['-','-','-','-','-','-','-','-','-','-'],
      d: ['-','-','-','-','-','-','-','-','-','-'],
      e: ['-','-','-','-','-','-','-','-','-','-'],
      f: ['-','-','-','-','-','-','-','-','-','-'],
      g: ['-','-','-','-','-','-','-','-','-','-'],
      h: ['-','-','-','-','-','-','-','-','-','-'],
      i: ['-','-','-','-','-','-','-','-','-','-'],
      j: ['-','-','-','-','-','-','-','-','-','-']
    };
    assert.deepEqual(empty, template, "Board objects not equal.");
  });

  it('should mark the first element as hit with a1', () => {
    const source = Object.create(board);
    source.markMiss('a1');
    assert.deepEqual(source.a, ['m','-','-','-','-','-','-','-','-','-']);
  });

  it('should mark the last element as hit with a2', () => {
    const source = Object.create(board);
    source.markMiss('a2');
    assert.deepEqual(source.a ['-','m','-','-','-','-','-','-','-','-']);
  });


});