import { text, html, match, isParagraph } from 'commonmark-helpers';
import trimTag from 'trim-html-tag';

const isDesc = (exclude, node) =>
  isParagraph(node) && !text(node).match(exclude);

export default (exclude, input) => {
  const node = match(input, node => isDesc(exclude, node));
  if (!node) return;
  return  {
    text: text(node),
    html: trimTag(html(node)),
    node
  };
};
