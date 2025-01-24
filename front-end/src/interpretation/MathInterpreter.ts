import katex from 'katex';
import 'katex/dist/katex.min.css';
import type { Block } from '../objects/Block.ts';

function interpretMath(math: String): String {
    // Replace inline math
    math = math.replace(/\$(.+?)\$/g, (match, p1) => {
        return katex.renderToString(p1, { throwOnError: false });
    });

    // Replace math blocks
    math = math.replace(/\$\$\n([\s\S]+?)\n\$\$/g, (match, p1) => {
        return `<div class="math-block">${katex.renderToString(p1, { displayMode: true, throwOnError: false })}</div>`;
    });

    return math;
}

export function mathInterpreter(block: Block): String {
    return interpretMath(block.rawContent);
}