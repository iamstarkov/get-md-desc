import { equal } from 'assert';
import getDesc from './index';

const input = `
# title

Published yesterday

Or in 21 december 2012

True *description*
`.trim();

it('should getDesc text', () =>
  equal(getDesc(/Published|december/, input).text, 'True description'));

it('should getDesc html', () =>
  equal(getDesc(/Published|december/, input).html, 'True <em>description</em>'));

it('should getDesc undefined', () =>
  equal(getDesc(/Published|december/, ''), undefined));
