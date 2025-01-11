import {marked} from 'marked';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Function to render LaTeX
export function renderLatex(text) {
    return text.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
        return katex.renderToString(equation, { throwOnError: false, displayMode: true});
    }).replace(/\$(.+?)\$/g, (_, equation) => {
        return katex.renderToString(equation, { throwOnError: false });
    });
}

// Function to interpret Markdown to HTML with LaTeX support and unified class name
export function interpretBlock(input) {
    let latexRendered = renderLatex(input);

    let parsedContent = latexRendered
        // Headings: H1 to H6
        .replace(/^# (.+)$/gm, (_, content) => `<h1 class="heading1Block">${content}</h1>`)
        .replace(/^## (.+)$/gm, (_, content) => `<h2 class="heading2Block">${content}</h2>`)
        .replace(/^### (.+)$/gm, (_, content) => `<h3 class="heading3Block">${content}</h3>`)
        .replace(/^#### (.+)$/gm, (_, content) => `<h4 class="heading4Block">${content}</h4>`)
        .replace(/^##### (.+)$/gm, (_, content) => `<h5 class="heading5Block">${content}</h5>`)
        .replace(/^###### (.+)$/gm, (_, content) => `<h6 class="heading6Block">${content}</h6>`)

        // Bold: **bold**
        .replace(/\*\*([^*]+?)\*\*/g, (_, content) => `<b class="boldSegment">${content}</b>`)

        // Italic: *italic*
        .replace(/\*([^*]+?)\*/g, (_, content) => `<i class="italicSegment">${content}</i>`)

        // Code block: triple backticks ```code```
        .replace(/```([^`]+?)```/gs, (_, content) => `<pre class="codeBlock"><code>${content}</code></pre>`)

        // Inline code: `code`
        .replace(/`([^`]+?)`/g, (_, content) => `<code class="inlineCode">${content}</code>`)

        // Unordered lists: - item
        .replace(/^- (.+)$/gm, (_, content) => `<li class="unorderedListItem">${content}</li>`)
        .replace(/(<li class="unorderedListItem">.*<\/li>)/gms, '<ul class="unorderedList">$1</ul>')

        // Ordered lists: 1. item
        .replace(/^\d+\. (.+)$/gm, (_, content) => `<li class="orderedListItem">${content}</li>`)
        .replace(/(<li class="orderedListItem">.*<\/li>)/gms, '<ol class="orderedList">$1</ol>')

        // Blockquote: > quote
        .replace(/^> (.+)$/gm, (_, content) => `<blockquote class="quoteBlock">${content}</blockquote>`);

    // Wrap unmatched content in <p> tags
    return parsedContent
        .replace(/^(?!<.*>)(.+)$/gm, (_, content) => `<p class="paragraphBlock">${content.trim()}</p>`);
}
