import { marked } from 'marked';
import katex from 'katex';
import hljs from 'highlight.js';
import 'katex/dist/katex.min.css';



export function renderLatex(text) {
    return text.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
        return katex.renderToString(equation, { throwOnError: false, displayMode: true });
    }).replace(/\$(.+?)\$/g, (_, equation) => {
        return katex.renderToString(equation, { throwOnError: false });
    });
}

export function interpretBlock(input) {

    let latexRendered = renderLatex(input);

    let parsedContent = latexRendered
        .replace(/^# (.+)$/gm, (_, content) => `<h1 class="heading1Block">${content}</h1>`)
        .replace(/^## (.+)$/gm, (_, content) => `<h2 class="heading2Block">${content}</h2>`)
        .replace(/^### (.+)$/gm, (_, content) => `<h3 class="heading3Block">${content}</h3>`)
        .replace(/^#### (.+)$/gm, (_, content) => `<h4 class="heading4Block">${content}</h4>`)
        .replace(/^##### (.+)$/gm, (_, content) => `<h5 class="heading5Block">${content}</h5>`)
        .replace(/^###### (.+)$/gm, (_, content) => `<h6 class="heading6Block">${content}</h6>`)
        .replace(/\*\*([^*]+?)\*\*/g, (_, content) => `<b class="boldSegment">${content}</b>`)
        .replace(/\*([^*]+?)\*/g, (_, content) => `<i class="italicSegment">${content}</i>`)
        .replace(/```([^`]+?)```/gs, (_, content) => {
            const highlightedCode = hljs.highlightAuto(content).value;
            return `<pre class="codeBlock"><code>${highlightedCode}</code></pre>`;
        })
        .replace(/`([^`]+?)`/g, (_, content) => `<code class="inlineCode">${content}</code>`)
        .replace(/^- (.+)$/gm, (_, content) => `<li class="unorderedListItem">${content}</li>`)
        .replace(/(<li class="unorderedListItem">.*<\/li>)/gms, '<ul class="unorderedList">$1</ul>')
        .replace(/^\d+\. (.+)$/gm, (_, content) => `<li class="orderedListItem">${content}</li>`)
        .replace(/(<li class="orderedListItem">.*<\/li>)/gms, '<ol class="orderedList">$1</ol>')
        .replace(/^> (.+)$/gm, (_, content) => `<blockquote class="quoteBlock">${content}</blockquote>`)
        .replace(/!\[.*?\]\((.+\.(jpg|jpeg|png|gif|bmp|svg))\)/g, (_, url) => `<img src="${url}" class="imageBlock" />`)
        .replace(/https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g, (_, videoId) => {
            return `<iframe class="youtubeEmbed" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        });

    return parsedContent
        .replace(/^(?!<.*>)(.+)$/gm, (_, content) => `<p class="paragraphBlock">${content.trim()}</p>`);
}