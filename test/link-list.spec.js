/* global describe, it, before */

import chai from 'chai';
import { DataStructures } from '../lib/Algorithms.js';

chai.expect();

const expect = chai.expect;

let lib;

/**
 * LinkList
 * @type {LinkList}
 */
describe('Given an instance of LinkList', () => {
  before(() => {
    const { LinkedList } = DataStructures;
    lib = new LinkedList([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);
  });
  /**
   * to Array
   */
  describe('when running LinkList.toArray()', () => {
    it('toArray() returns array of [10, 6, 14, 3, 22, 4, 3, 8, 11, 12].', () => {
      expect(lib.toArray()).to.be.an('array').to.include.members([10, 6, 14, 3, 22, 4, 3, 8, 11, 12]);
    });
  });
  /**
   * insert
   */
  describe('when running LinkList.insert(15)', () => {
    it('insert() returns node with value of 15 and toArray() returns array that includes 15.', () => {
      const node = lib.insert(15);
      expect(node.data).to.be.equal(15);
      expect(lib.toArray()).to.be.an('array').to.include(15);
    });
  });
  /**
   * insert with index
   */
  describe('when running LinkList.insert(9, 3)', () => {
    it('insert() returns node with value of 9, a next node having a value of 3 and toArray() returns array of [10, 6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15].', () => {
      const node = lib.insert(9, 3);
      expect(node.data).to.be.equal(9);
      expect(node.next.data).to.be.equal(3);
      expect(lib.toArray()).to.be.an('array').to.include.members([10, 6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15]);
    });
  });
  /**
   * shift
   */
  describe('when running LinkList.shift()', () => {
    it('shift() returns node with value of 10 and toArray() returns array of [6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15].', () => {
      const node = lib.shift();
      expect(node.data).to.be.equal(10);
      expect(lib.toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 4, 3, 8, 11, 12, 15]);
    });
  });
  /**
   * Pop
   */
  describe('when running LinkList.pop()', () => {
    it('pop() returns node with value of 15 and toArray() returns array of [6, 14, 9, 3, 22, 4, 3, 8, 11, 12].', () => {
      const node = lib.pop();
      expect(node.data).to.be.equal(15);
      expect(lib.toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 4, 3, 8, 11, 12]);
    });
  });
  /**
   * Delete
   */
  describe('when running LinkList.delete(5)', () => {
    it('delete(5) removes node at index 5 and toArray() returns array of [6, 14, 9, 3, 22, 3, 8, 11, 12].', () => {
      lib.delete(5);
      expect(lib.toArray()).to.be.an('array').to.include.members([6, 14, 9, 3, 22, 3, 8, 11, 12]);
    });
  });

  /**
   * Reverse
   */
  describe('when running LinkList.reverse()', () => {
    it('reverse() and toArray() returns array of [12, 11, 8, 3, 22, 3, 9, 14, 6].', () => {
      lib.reverse();
      expect(lib.toArray()).to.be.an('array').to.include.members([12, 11, 8, 3, 22, 3, 9, 14, 6]);
    });
  });
});
