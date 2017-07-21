adb = {}
var src = ''
var blockData = JSON.stringify({
    data: {
        teasers: [
            {
                id: 't' + Math.random().toString(32).substr(2),
                img: 'dot.png',
                title: 'Hello',
                description: 'Hello world!',
                buttons: [
                    {
                        caption: "Buy",
                        href: "about:blank",
                        target: "_blank",
                    },
                    {
                        caption: "10 000 uah",
                        href: "about:blank",
                        target: "_blank",
                    },
                ]
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                img: 'dot.png',
                title: 'Hello',
                description: 'Hello world!',
                buttons: [
                    {
                        caption: "Buy",
                        href: "about:blank",
                        target: "_blank",
                    },
                    {
                        caption: "10 000 uah",
                        href: "about:blank",
                        target: "_blank",
                    },
                ]
            },
        ]
    },
    template: {
        styles: '',
        template: `<div :id="me.id" :class="me.class">
                        <table>
                            <tbody>
                                <teasers>
                                    <tr>
                                        <td :id="item.id">
                                            <img :src="item.src" />                                            
                                        </td>
                                        <buttons>
                                            <h6>{{item.title}}</h6>
                                            <span>{{ item.caption }}</span>
                                            <a :href="item.href" :target="item.target"></a>
                                        </buttons>
                                    </tr>
                                </teasers>
                            </tbody>
                        </table>
                  </div>`,
    }
})
var BaseElement = function ({data, template}) {
    let e = this
    this.me = data
    this.t = template || ''
    this.domEl = null
    this.parser = new window.DOMParser()
    this.root = this.parser.parseFromString('<root></root>', 'text/xml')

    function isArray(o) {
        return o instanceof Array
    }

    function parser(tpl) {
        let _this = this
        let me = this.me

        function prepare(t) {
            return t.trim()
                .replace(/\n|$/gm, '') // remove new line
                .replace(/\s\:([\w\-]*)\s*\=\s*/g, ' rc-data-$1=') //replace : to rc-data-
                .replace(/\s\@([\w\-]*)\s*\=\s*/g, ' rc-on-$1=') //replace @ to rc-on-
                .replace(/(?:\>(\s*)\<)/g, '><') // remove spaces between ><
                .replace(/(?:\>(\s*)\{)/g, '>{') // remove spaces between }<
                .replace(/(?:\}(\s*)\<)/g, '}<') // remove spaces between }<
                .replace(/\{\{/g, '<evaluate>') // remove {{ to <evaluate>
                .replace(/\}\}/g, '</evaluate>') // remove }} to </evaluate>
        }

        tpl = prepare(tpl)
        let domEl = this.parser.parseFromString(tpl, 'text/xml')

        let errors = domEl.querySelectorAll('parsererror')
        for (error of errors) {
            error.remove()
        }
//         var b = document.querySelector('.blockViewport')
//         b.appendChild(domEl.firstChild)

        return domEl
    }

    this.testThis = () => {
        console.log('This is:\n', this)
    }

    function getDocument(el) {
        let me = this.me
        let newNode = null
        let isRoot = false
        let _tagName = el.tagName
        let _attributes = el.attributes
        let _children = el.children
        let _nodeName = el.nodeName

        console.group('getDocument', _nodeName, _tagName)

        function parseChildren(children, parent){
            console.groupCollapsed('parseChildren', parent.tagName, this)
            try{
                for (let childNode of children) {
                    let newChildNode = null
                    if (childNode.tagName === 'evaluate'){
                        with(this){
                            var r = eval(childNode.textContent) || ''
                            newChildNode = this.root.createTextNode(r)
                        }
                    } else {
                        newChildNode = getDocument.call(this, childNode)
                    }
                    parent.appendChild(newChildNode)
                }
            } catch(err){
                console.log(err, this, parent)
            }
            console.groupEnd()
        }

        if (_nodeName === "#document"){
            newNode = this.root.firstChild
            isRoot = true
        }
        let _each = me && me.hasOwnProperty(_tagName)
            ? me[_tagName] : (
                !!this.item && this.item[_tagName] ? this.item[_tagName] : null
            )
        if (_each) {
            try {
                if (isArray(_each)) {
                    newNode = this.root.createDocumentFragment()
                    let scope = {parser: this.parser, root: this.root, me}
                    for (let item of _each) {
                        scope.item = item
                        parseChildren.call(scope, _children, newNode)
                        // with (this) {
                        //     eval('debugger; console.log(item, parent)')
                        // }
                        // newNode.appendChild(_el)
                    }
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            newNode = newNode || this.root.createElement(_tagName)
            if (_attributes) {
                for (let i = _attributes.length - 1; i >= 0; i--) {
                    let attr = _attributes[i]
                    if (attr && attr.name.match(/rc-data-/)) {
                        attr.name = attr.name.replace(/rc-data-/, '')
                        with (this) {
                            try {
                                newNode.setAttribute(attr.name, eval(attr.value) || "")
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    }
                }
            }
            parseChildren.call(this, _children, newNode)
        }
        console.groupEnd()
        return newNode
    }

    this.domBlock = function () {
        return getDocument.call(this, e.domEl)
    }

    this.domEl = parser.call(this, this.t.template)
}

adb.el = new BaseElement(JSON.parse(blockData))
adb.viewport = document.querySelector('.blockViewport')
adb.el.domBlock()