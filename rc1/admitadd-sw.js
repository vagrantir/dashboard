$(document).ready(function () {
    !function (event) {
        if ("content" in event.createElement("template"))
            return !1;
        for (var template, templateChilds, templateChildsCount, c, tempaltes = event.getElementsByTagName("template"), templatesCount = tempaltes.length, templateIndex = 0; templatesCount > templateIndex; ++templateIndex) {
            for ( template = tempaltes[templateIndex],
                      templateChilds = template.childNodes,
                      templateChildsCount = templateChilds.length,
                      c = event.createDocumentFragment(); templateChilds[0];)
                c.appendChild(templateChilds[0]);
            template.content = c
        }
    }(document)
});