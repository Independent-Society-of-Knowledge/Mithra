import { markdownInterpreter } from './MarkdownInterpreter';
import { mathInterpreter } from './MathInterpreter';
import type { Block } from '../objects/Block';
import type { RenderedBlockContent } from '../objects/RenderedBlockContent';

export function blockRawContentInterpreter(block: Block): RenderedBlockContent {
    const markdownContent = markdownInterpreter(block);
    const mathContent = mathInterpreter({ ...block, rawContent: markdownContent });

    return {
        type: block.type,
        id: block.id,
        renderedContent: mathContent,
    };
}