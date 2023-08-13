window.addEventListener('DOMContentLoaded', (event) => {
    const article = document.querySelector("article");
    const headings = article.querySelectorAll("h2, h3");
    const toc = document.querySelector(".toc");
    const totalHeadings = headings.length;
    let tocOl = document.createElement("ol");
    let tocFragment = new DocumentFragment();
    let mainLi = null;
    let subUl = null;
    let subLi = null;
    let isSibling = false;
    
    if (totalHeadings > 1) {
        for (let element of headings) {
            let anchor = document.createElement("a");
            let anchorText = element.innerText;
            anchor.innerText = anchorText;
            let elementId = anchorText.replaceAll(" ", "-").toLowerCase();
            anchor.href = "#" + elementId;
            element.id = elementId;
            let level = element.nodeName;
        
            if ("H3" === level) {
                if (mainLi) {
                    subLi = document.createElement("li");
                    subLi.appendChild(anchor);
        
                    if (isSibling === false) {
                        subUl = document.createElement("ul");
                    }
                    subUl.appendChild(subLi);
                    mainLi.appendChild(subUl);
        
                    isSibling = true;
                }
            } else {
                mainLi = document.createElement("li");
                mainLi.appendChild(anchor);
                tocFragment.appendChild(mainLi);
                isSibling = false;
                subUl = null;
            }
        }
        tocOl.append(tocFragment);
        toc.append(tocOl);
    } else {
        toc.classList.add('hidden');
    }

    const windowWidth = window.innerWidth;
    const leftSidebar = document.querySelector('.left-sidebar');
    if (windowWidth < 480) {
        toc.removeAttribute('open');
        leftSidebar.classList.add('hidden');
    } else {
        toc.setAttribute('open', true);
        leftSidebar.classList.remove('hidden');
    }
});