import { equal } from 'assert';
import getMdDesc from './index';

it('should getMdDesc', () => {
  equal(getMdDesc('unicorns'), 'unicorns');
});
