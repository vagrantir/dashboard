adb = {}
var src =''
var blockData = JSON.stringify({
    data:{
        teasers:[
            {
                id: 't'+Math.random().toString(32).substr(2),
                img: 'dot.png',
                title: 'Hello',
                description: 'Hello world!'
            },
        ]
    },
    template:{
        styles:'',
        template:`<div :id="me.id" :class="me.class">
                    {{ me.teasers }}
                    {{ ${src} }}
                        <table>
                            <tbody>
                                <teasers>
                                    <tr>
                                        <td :id="teaser.id">
                                            <img :src="teaser.src" />
                                            {{teaser.title}}
                                        </td>
                                    </tr>
                                </teasers>
                            </tbody>
                        </table>
                  </div>`,
    }
})
var BaseElement = function({data, template}){
    let e = this
    this.me = data
    this.t = template || ''
    this.domEl = null

    function parser(tpl){
        let _this      = this

        function prepare(t){
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
        let Parser = new window.DOMParser()
        let domEl = Parser.parseFromString(tpl, 'text/xml')

        let errors = domEl.querySelectorAll('parsererror')
        for (error of errors){
            error.remove()
        }
//         var b = document.querySelector('.blockViewport')
//         b.appendChild(domEl.firstChild)

        return domEl
    }
    function proceedEl(el){
        if (el.attributes){
            for (let attr of el.attributes){
                if (attr && attr.name.match(/rc-data-/)){
                    let n = attr.name.replace(/rc-data-/, '')
                    with(e) {
                        try {
                            el.setAttribute(n, eval(attr.value))
                        } catch (err) {

                        }
                    }
                    el.removeAttribute(attr.name)
                }
            }
        }
        for (let cel of el.children){
            proceedEl(cel)
        }
    }

    e.domBlock = function(){
        return proceedEl.call(e, e.domEl)
    }.bind()

    e.domEl = parser.call(e, e.t.template)
}

adb.el = new BaseElement(JSON.parse(blockData))
