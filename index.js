import { text, html, match, isParagraph } from 'commonmark-helpers';
import trimTag from 'trim-html-tag';

const isDesc = (exclude, node) =>
  isParagraph(node) && !text(node).match(exclude);

const result = node => ({
  text: text(node),
  html: trimTag('p', html(node)),
  node
});

export default (exclude, input) =>
  result(match(input, node => isDesc(exclude, node)));
