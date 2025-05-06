document.addEventListener("DOMContentLoaded", function() {
    const headerTitle = document.querySelector('.md-header__button');
    if (headerTitle) {
        headerTitle.innerHTML = '';

        // Anchor wraps logo and text
        const link = document.createElement('a');
        link.href = 'https://ichatbio.org';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.gap = '10px'; // space between SVG and text
        link.style.textDecoration = 'none';

        // === SVG ===
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("xmlns", svgNS);
        svg.setAttribute("width", "32");
        svg.setAttribute("height", "32");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "url(#leaf-gradient)");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");

        const defs = document.createElementNS(svgNS, "defs");
        const linearGradient = document.createElementNS(svgNS, "linearGradient");
        linearGradient.setAttribute("id", "leaf-gradient");
        linearGradient.setAttribute("x1", "0%");
        linearGradient.setAttribute("y1", "0%");
        linearGradient.setAttribute("x2", "100%");
        linearGradient.setAttribute("y2", "100%");

        const stop1 = document.createElementNS(svgNS, "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "#93c5fd");

        const stop2 = document.createElementNS(svgNS, "stop");
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", "#22c55e");

        linearGradient.appendChild(stop1);
        linearGradient.appendChild(stop2);
        defs.appendChild(linearGradient);
        svg.appendChild(defs);

        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("d", "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z");

        const path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("d", "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12");

        path1.setAttribute("fill", "#272727");
        path2.setAttribute("fill", "#272727");

        svg.appendChild(path1);
        svg.appendChild(path2);

        // === Heading text ===
        const heading = document.createElement('h1');
        heading.textContent = 'iChatBio';
        heading.style.fontSize = '1.5rem'; // ~text-3xl
        heading.style.fontWeight = 'bold';
        heading.style.whiteSpace = 'nowrap';
        heading.style.background = 'linear-gradient(to bottom right, #93c5fd, #22c55e)';
        heading.style.webkitBackgroundClip = 'text';
        heading.style.webkitTextFillColor = 'transparent';
        heading.style.margin = 0;

        // === Assemble ===
        link.appendChild(svg);
        link.appendChild(heading);
        headerTitle.appendChild(link);
    }
});
