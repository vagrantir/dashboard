adb = {}
var src = ''
var blockData = JSON.stringify({
    data: {
        teasers: [
            {
                id: 't' + Math.random().toString(32).substr(2),
                title: 'Hello',
                desc: 'Hello world!',
                link: 'Hello world!',
                price: 'Hello world!',
                class: "teaser-brand",
                image: {
                    src: 'https://st5.recreativ.ru/tizers/200/887/tiz-533_10478059.jpg',
                    // src: 'https://dummyimage.com/300x200/555/fff',
                    class: "",
                    style: "",
                },
                brand: {
                    src: 'https://recreativ.ru/img/brand_533.png',
                    // src: 'https://dummyimage.com/300x200/555/fff',
                    class: "",
                    style: "",
                },
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                img: 'https://dummyimage.com/300x100/555/fff',
                image: {
                    src: 'https://dummyimage.com/300x200/555/fff',
                    class: "",
                    style: "",
                },
                title: 'Hello',
                desc: 'Hello world!',
            },
        ]
    },
    template: {
        styles: `<style>
            .root {
                margin: 0 !important;
                padding: 0 !important;
                position: relative !important;
                overflow: hidden !important;
                width: 100% !important;
            }
        
            .root table {
                width: 100% !important;
                border-spacing: 1px !important;
                table-layout: auto !important;
                background-color: #f9f9f9 !important;
                -webkit-hyphens: auto !important;
                -moz-hyphens: auto !important;
                -ms-hyphens: auto !important;
                hyphens: auto !important;
                word-break: break-word !important;
            }
        
            .root .teaser {
                padding: 6px !important;
                width: 100% !important;
            }
        
            .root .teaser__link {
                text-align: center !important;
            }
        
            .root .teaser__title {
                font: 15px Tahoma !important;
                color: #000000 !important;
                text-decoration: none !important;
                font-weight: bold !important;
                float: none !important;
                margin: 0 !important;
                padding: 0 !important;
                cursor: pointer !important;
            }

            .root .teaser--brand {
                padding: 0 !important;
                border: 1px solid #df6f78 !important;
                background: #fdf8e5 !important;
                vertical-align: top;
                overflow: hidden;
            }
        
            .root .teaser--brand .teaser__link {
                display: block !important;
                background: #fdf8e5 !important;
            }
        
            .root .teaser--brand .teaser__title {
                padding: 1px 0 !important;
                font-weight: bold !important;
                text-decoration: none !important;
                color: #c80010 !important;
            }
        
            .root .teaser--brand .brand-image-box {
                padding: 0 !important;
                border: 1px solid #91ce6a !important;
                position: relative !important;
            }
        
            .root .teaser--brand .brand-img {
                display: block !important;
                border: 0 !important;
            }
        
            .root .teaser--brand .brand-logo {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                border: 0 !important;
                background: transparent !important;
                padding: 0 !important;
                margin: 0 !important;
            }
        
            .root .teaser--brand .brand-desc {
                font-weight: normal !important;
                text-decoration: none !important;
                color: #000000 !important;
            }
        
            .root .teaser--brand .brand-link {
                font-weight: normal !important;
                text-decoration: none !important;
                color: #00911a !important;
            }
        
            .root .teaser--brand .brand-price {
                font-weight: bold !important;
                text-decoration: none !important;
                color: #df6f78 !important;
            }
        
            .root a.bage {
                width: 61px !important;
                height: 18px !important;
                padding: 0px !important;
                display: block !important;
                background: left top url(//recreativ.ru/img/logo.png) no-repeat !important;
                position: absolute !important;
                top: 0 !important;
                right: -23px;
                overflow: hidden !important;
            }
        
            .root a.btn-hide {
                width: 18px !important;
                height: 18px !important;
                padding: 0px !important;
                display: block !important;
                background: left top url('//recreativ.ru/img/x.png') no-repeat !important;
                position: absolute !important;
                top: 0 !important;
                right: 0px !important;
                overflow: hidden !important;
            }
        </style>`,
        template: `<div class="root animated" :id="me.id" :class="me.class">
                        <table :class="me.tableClass" :style="me.tableStyle">
                            <tbody>
                                <teasers>
                                    <tr>
                                        <td class="teaser" :id="item.id" :class="item.class" :style="item.style">
                                            <a href="#" class="teaser__link">
                                                <div>
                                                    <img class="teaser__img" :src="item.image.src" :class="item.image.class" :style="item.image.style"/>                                            
                                                    <img class="teaser__brand-logo" rc-if="item.brand" :src="item.brand.src" :class="item.brand.class" :style="item.brand.style"/>                                            
                                                </div>
                                                <div class="teaser__title">
                                                    {{item.title}}
                                                </div>
                                                <div class="teaser__desc">
                                                    {{item.desc}}
                                                </div>
                                                <div class="teaser__link">
                                                    {{item.link}}
                                                </div>
                                                <div class="teaser__price">
                                                    {{item.price}}
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                </teasers>
                            </tbody>
                        </table>
                        <a class="bage" href="//recreativ.ru" style="" onmouseout="this.setAttribute('data-r','-23px');setTimeout((function(){this.style.right=this.getAttribute('data-r');}).bind(this),1000)" title="Рекламная сеть Recreativ - с нами Вас заметят!" target="_blank"></a>
                        <a class="btn-hide" href="#" title="скрыть рекламу"></a>
                  </div>`,
    }
})
var BaseElement = function ({data, template}) {
    let e = this // self
    this.me = data // data root for template
    this.t = template || '' // stored template
    this.shadow = null // shadow DOM object where template DOM will be stored
    let animationCss = '@charset "UTF-8"; \
    .animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{0%,20%,53%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.pulse{animation-name:pulse}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada{animation-name:tada}@keyframes wobble{0%{transform:none}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:none}}.wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{0%{transform:perspective(400px) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}to{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform-origin:center;transform:rotate(-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{0%{transform-origin:right bottom;transform:rotate(45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;transform:rotate(45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{0%{transform-origin:right bottom;transform:rotate(-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{0%{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate(200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate(90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}'
    this.DOMparser = new window.DOMParser()
    this.doc = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null)
    this.body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    this.doc.documentElement.appendChild(this.body);

    function strToXml(s) {
        return e.DOMparser.parseFromString(s, 'text/xml')
    }

    function isArray(o) {
        return o instanceof Array
    }

    function templateToDom(template, styles) {

        function prepare(t) {
            return t.trim()
                .replace(/\n|$/gm, '') // remove new line
                .replace(/(?:\>(\s*)\<(?!(\/span)|(\/p)))/g, '><') // remove spaces between ><
                .replace(/(?:\>(\s*)\{)/g, '>{') // remove spaces between }<
                .replace(/(?:\}(\s*)\<)/g, '}<') // remove spaces between }<
                .replace(/\s\:([\w\-]*)\s*\=\s*/g, ' rc-data-$1=') //replace :$1 => rc-data-$1
                .replace(/\s\@([\w\-]*)\s*\=\s*/g, ' rc-on-$1=') //replace @$1 => rc-on-$1
                .replace(/\{\{/g, '<evaluate>') // remove {{ to <evaluate>
                .replace(/\}\}/g, '</evaluate>') // remove }} to </evaluate>
        }

        template = prepare(template)

        let templateDom = strToXml(template)
        let stylesCss = strToXml(styles).firstChild.textContent || ''
        let templatesStyle = templateDom.createElement('style')
        templatesStyle.innerHTML = animationCss +'\n'+ stylesCss
        templateDom.firstChild.insertBefore(templatesStyle, templateDom.firstChild.firstElementChild)

        let errors = templateDom.querySelectorAll('parsererror')
        for (error of errors) {
            error.remove()
        }
        return templateDom
    }

    this.testThis = () => {
        console.log('This is:\n', this)
    }

    function renderToDom(el) {
        let me = this.me
        let rootNode = null
        let isGlobalRoot = false
        let _tagName = el.tagName
        let _nodeName = el.nodeName
        let _attributes = el.attributes
        let _children = el.children

        // console.group('> getDocument', _nodeName, _tagName)

        function evaluate(scope, textToEval) {
            with (scope) {
                try {
                    return eval('(' + textToEval + ')') || ''
                } catch (e) {
                    console.log('eval failed', e, textToEval)
                }
                return ''
            }
        }
        function conditionCheck(scope, attributes) {
            if (attributes && attributes['rc-if']){
                return !!evaluate(scope, attributes['rc-if'].value)
            }
            return true
        }

        function parseChildren(children, parent) {
            // console.groupCollapsed('parseChildren', parent.tagName, this)

            try {
                for (let childNode of children) {
                    let newChildNode = null
                    if (childNode.tagName === 'evaluate') {
                        newChildNode = this.doc.createTextNode(evaluate(this, childNode.textContent))
                    } else {
                        newChildNode = renderToDom.call(this, childNode)
                    }
                    parent.appendChild(newChildNode)
                }
            } catch (err) {
                console.log(err, this, parent)
            }
            // console.groupEnd()
        }
        if (!conditionCheck(this, _attributes)){
            return this.doc.createTextNode('')
        }

        if (_nodeName === "#document") {
            rootNode = this.body
            isGlobalRoot = true
        }

        let _each = me && me.hasOwnProperty(_tagName)   // me has collection with same name as current tag of template
            ? me[_tagName] : (                          // return data from me
                !!this.item && this.item[_tagName]      // otherwise check item for the same
                    ? this.item[_tagName]               // return collection from item
                    : null                              // otherwise null
            )

        if (_each && isArray(_each)) {
            try {// collection of data is Array
                rootNode = this.doc.createDocumentFragment()                   // because current template node is somethig like <teasers> and is not an HTML tag
                let scope = {DOMparser: this.DOMparser, doc: this.doc, me}    // prepare scope for recusrsion call
                for (let item of _each) {
                    scope.item = item
                    parseChildren.call(scope, _children, rootNode)
                }
            } catch (err) {
                console.log(err)
            }
        } else {
            rootNode = rootNode || this.doc.createElement(_tagName) // it is not #document node
            if (['script', 'style'].indexOf(_tagName) === -1) {
                if (_attributes) {
                    for (let i = _attributes.length - 1; i >= 0; i--) {
                        let templateAttrName = _attributes[i].name
                        let templateAttrValue = _attributes[i].value
                        let nodeAttrValue = rootNode.getAttribute(templateAttrName)
                        let newAttrValue = ''

                        if (templateAttrName && templateAttrName.match(/rc-on-/)) {
                            continue
                        }

                        if (templateAttrName && templateAttrName.match(/rc-data-/)) {
                            templateAttrName = templateAttrName.replace(/rc-data-/, '')
                            newAttrValue = evaluate(this, templateAttrValue)
                            if (!!newAttrValue && newAttrValue.prototype === Object) {
                                let attrObject = newAttrValue
                                for (let prop in attrObject) {
                                    newAttrValue += !!attrObject[prop] ? prop : ''
                                }
                            }
                        } else {
                            newAttrValue = templateAttrValue
                        }

                        if (typeof(nodeAttrValue) === 'string') {
                            nodeAttrValue += ' ' + newAttrValue
                        } else {
                            nodeAttrValue = newAttrValue
                        }

                        if (!!templateAttrName && !!nodeAttrValue) {
                            rootNode.setAttribute(templateAttrName, nodeAttrValue)
                        }
                    }
                }
                parseChildren.call(this, _children, rootNode)
            } else {
                rootNode.innerHTML = el.innerHTML
            }

        }
        // console.groupEnd()
        return rootNode
    }

    this.domBlock = function () {
        return renderToDom.call(this, e.shadow)
    }

    this.shadow = templateToDom.call(this, this.t.template, this.t.styles)
}
window.cr_el = document.createElement
document.createElement = function () {
    console.log(arguments, this)
    return window.cr_el.apply(this, arguments)
}
document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e)
})
setTimeout(() => {
    adb.el = new BaseElement(JSON.parse(blockData))
    adb.viewport = document.querySelector('.blockViewport')
    adb.el.domBlock()
    adb.viewport.appendChild(adb.el.body.firstChild)
    console.log('Block loaded')
}, 300)
