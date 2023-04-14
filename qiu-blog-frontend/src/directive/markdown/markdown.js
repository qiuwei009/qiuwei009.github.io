/**
 * v-Markdown Markdown
 */
import {marked} from 'marked'
import hljs from "highlight.js";

function parsMarkdown(el, binding) {
    const {value} = binding;
    el.innerHTML= marked(value);
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
}


export default {
    mounted(el, binding) {
        parsMarkdown(el, binding);
    },
    updated(el, binding) {
        // parsMarkdown(el, binding);
    }
};
