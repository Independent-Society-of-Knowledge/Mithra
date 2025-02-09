import type {Block} from "../objects/Block.ts";

function interpretMarkdown(markdown: String): String {
    // Replace headers
    markdown = markdown.replace(/^# (.*$)/gim, '<div class="header1">$1</div>');
    markdown = markdown.replace(/^## (.*$)/gim, '<div class="header2">$1</div>');
    markdown = markdown.replace(/^### (.*$)/gim, '<div class="header3">$1</div>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<div class="header4">$1</div>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<div class="header5">$1</div>');
    markdown = markdown.replace(/^#### (.*$)/gim, '<div class="header6">$1</div>');

    // Replace bold text
    markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<div class="bold">$1</div>');

    // Replace italic text
    markdown = markdown.replace(/\*(.*)\*/gim, '<div class="italic">$1</div>');

    // Replace unordered list items
    markdown = markdown.replace(/^- (.*$)/gim, '<div class="list-item">$1</div>');

    // Replace ordered list items
    markdown = markdown.replace(/^\d+\. (.*$)/gim, '<div class="ordered-list-item">$1</div>');

    // Replace blockquotes
    markdown = markdown.replace(/^\> (.*$)/gim, '<div class="blockquote">$1</div>');

    // Replace code blocks with specified language
    markdown = markdown.replace(/```(\w+)\n([\s\S]*?)```/gim, '<div class="code-block language-$1"><pre><code>$2</code></pre></div>');

    // Replace inline code
    markdown = markdown.replace(/`([^`]+)`/gim, '<div class="inline-code">$1</div>');

    // Replace new lines with <br> tags
    markdown = markdown.replace(/\n/gim, '<br>');

    return markdown.trim();
}

export function markdownInterpreter(block: Block): String{
    return interpretMarkdown(block.rawContent);
}