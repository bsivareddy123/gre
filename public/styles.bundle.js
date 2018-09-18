webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n/*/--general css--/*/\nul {\n\tpadding: 0px !important;\n\tmargin: 0px !important;\n}\n\nul li {\n\tlist-style: none;\n}\n\n.text_white {\n\tcolor: #fff;\n}\n\n/*this css is added for tree view in customize test page*/\n.tree_v ul li {\n\tmargin-left: 20px;\n}\n\n@media ( max-width :810px) {\n\t.mobile-view-content {\n\t\theight: 1400px !important;\n\t}\n}\n/* css for test pages */\n.test_header_bg {\n\tbackground: #30a5ff;\n\tcolor: #FFF;\n}\n\n.logo_img {\n\twidth: 168px;\n\tfloat: left\n}\n\n/*---------------- boot strap toggle button for bookmark check box --------------*/\n\n/*-------full length test css-------*/\n.instr {\n\tbackground: #ECF0F1;\n\tpadding: 7px;\n}\n\n.mt-20 {\n\tmargin-top: 20px;\n}\n\n.mt-420 {\n\tmargin-top: 420px;\n}\n\n@media (max-width:1024px) {\t\n\t.mt-420 { margin-top:200px;\n\t}\n}\n.ml-20 {\n\tmargin-left: 20px;\n}\n\n.bl {\n\tborder-left: rgba(102, 102, 102, 0.6) 1px dashed;\n}\n\n#tc {\n\tmargin: 4px;\n\tfloat: left;\n}\n\n#tc label {\n\tfloat: left;\n\twidth: 170px;\n\t/* margin: 4px; */\n\tbackground-color: #EFEFEF;\n\t/* border-radius: 4px; */\n\tborder: 1px solid #D0D0D0;\n\toverflow: auto;\n\tmargin-bottom: 0px !important;\n}\n\n#tc label span {\n\ttext-align: center;\n\tfont-size: 16px;\n\tdisplay: block;\n}\n\n#tc label input {\n\tposition: absolute;\n\tdisplay: none;\n}\n\n#tc input:checked+span {\n\tbackground-color: #30a5ff;\n\tcolor: #FFF;\n}\n\n#tc .unchecked {\n\tbackground-color: transparent;\n\tcolor: #30a5ff;\n\tborder: #30a5ff 1px solid;\n}\n\n.report_box {\n\t/* \twidth:100%; height:90px;\n\t\t\tbox-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n\t\t    -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n  \t\t\t-moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n  \t\t\tborder-radius: 2px; */\n\twidth: 100%;\n\theight: 115px;\n\tbox-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n\t-webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n\t-moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);\n\tborder-radius: 2px;\n}\n\n.report_info {\n\t/*   padding: 8px 80px;\n\t\t\t  text-align: center;\n\t\t\t  border: #fff 4px solid; */\n\ttext-align: center;\n\tborder: #fff 4px solid;\n\tmargin-top: 1px;\n}\n\n.report_info .big_t {\n\tfont-weight: 600;\n\tfont-size: 32px;\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n\tvertical-align: middle;\n}\n\n/*-----------------------flag css--------------------*/\n.flag input[type=\"radio\"], .flag input[type=\"checkbox\"] {\n\tdisplay: none;\n}\n\n.flag input[type=\"radio\"]+span:before, .flag input[type=\"checkbox\"]+span:before\n\t{\n\tfont-family: 'FontAwesome';\n\tpadding-right: 3px;\n\tfont-size: 20px;\n}\n\n.flag input[type=\"radio\"]+span:before {\n\tcontent: \"\\F10C\"; /* circle-blank */\n}\n\n.flag input[type=\"radio\"]:checked+span:before {\n\tcontent: \"\\F111\"; /* circle */\n}\n\n.flag input[type=\"checkbox\"]+span:before {\n\tcontent: \"\\F11D\"; /* check-empty */\n}\n\n.flag input[type=\"checkbox\"]:checked+span:before {\n\tcontent: \"\\F024\"; /* check */\n}\n\n/*--------------------------End of flag css-----------------------------------------*/\n\n/*--------------------------radio button like button-----------------------------------------*/\n#radio_button {\n\tmargin: 0px;\n\tfloat: left;\n}\n\n#radio_button label {\n\tfloat: left;\n\twidth: 100px;\n\t/* margin: 4px; */\n\tbackground-color: #EFEFEF;\n\t/* border-radius: 4px; */\n\t/* border: 1px solid #D0D0D0; */\n\toverflow: auto;\n}\n\n#radio_button label span {\n\ttext-align: center;\n\tfont-size: 18px;\n\tpadding: 2px 0px;\n\tdisplay: block;\n\tcursor: pointer;\n}\n\n#radio_button label input {\n\tposition: absolute;\n\ttop: -20px;\n\tdisplay: none;\n}\n\n#radio_button input:checked+span:before {\n\tfont-family: FontAwesome;\n\tfont-style: normal;\n\tfont-weight: lighter;\n\tcontent: \"\\F00C\";\n\tfont-size: 17px;\n}\n\n/*#radio_button input:checked + span {\n    background-color:#6C7A89;\n    color:#F7F7F7;\n}*/\n#radio_button .high {\n\tbackground-color: #00a65a;\n\tcolor: #FFF;\n}\n\n#radio_button .high input:checked+span {\n\tbackground-color: #16A085 !important;\n\tcolor: #FFF;\n}\n\n#radio_button .medium {\n\tbackground-color: #f39c12;\n\tcolor: #FFF;\n}\n\n#radio_button .medium input:checked+span {\n\tbackground-color: #F7CA18 !important;\n\tcolor: #FFF;\n}\n\n#radio_button .low {\n\tbackground-color: #dd4b39;\n\tcolor: #FFF;\n}\n\n#radio_button .low input:checked+span {\n\tbackground-color: #CF000F !important;\n\tcolor: #FFF;\n}\n\n.bookmark {\n\tbackground-color: #dd4b39;\n\tcolor: #FFF;\n}\n\n/*--------------------------end of radio button like button-----------------------------------------*/\n.explination_area {\n\tbackground: #F2F1EF;\n\tpadding: 20px;\n}\n\n.mt-40 {\n\tmargin-top: 40px;\n}\n\n.pl_20 {\n\tpadding-left: 20px;\n}\n\n.bt_dotter {\n\tborder-top: #e1e2e3 1px dotted;\n\tpadding-top: 10px;\n}\n\n.dib {\n\tdisplay: inline-block;\n}\n\n.btn-outline {\n\tbackground-color: transparent;\n\tcolor: inherit;\n\ttransition: all .5s;\n}\n\n.btn-primary.btn-outline {\n\tcolor: #FFF;\n}\n\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:active {\n\tcolor: #30a5ff;\n\tbackground: #fff;\n}\n\n.test_dashboard {\n\tbackground: #34495E;\n\tpadding: 0px;\n\tbottom: 0px;\n\tposition: absolute;\n\tz-index: 999999;\n}\n\n.toggler {\n\tbackground: #34495E;\n\tpadding: 12px;\n\tcolor: #FFF;\n\tposition: absolute;\n\tleft: 60px;\n\twidth: 40px;\n\theight: 40px;\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tcursor: pointer;\n}\n\n/* css for custom scroll bar */\n.force-overflow {\n\tmin-height: 450px;\n}\n\n/*\n *  STYLE 5\n */\n#scroller::-webkit-scrollbar-track {\n\t/*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/\n\tbackground-color: #F5F5F5;\n}\n\n#scroller::-webkit-scrollbar {\n\twidth: 6px;\n\tbackground-color: #F5F5F5;\n}\n\n#scroller::-webkit-scrollbar-thumb {\n\tbackground-color: #0ae;\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 140%, color-stop(.5, rgba(255, 255, 255,\n\t\t.4)), color-stop(.5, transparent), to(transparent));\n}\n\n/* vertical hr css */\n.or-spacer {\n\tmargin-top: 100px;\n\tmargin-left: 100px;\n\twidth: 400px;\n\tposition: relative;\n}\n\n.or-spacer .mask {\n\toverflow: hidden;\n\theight: 20px;\n}\n\n.or-spacer .mask:after {\n\tcontent: '';\n\tdisplay: block;\n\tmargin: -25px auto 0;\n\twidth: 100%;\n\theight: 25px;\n\tborder-radius: 125px/12px;\n\tbox-shadow: 0 0 8px black;\n}\n\n.or-spacer span {\n\twidth: 50px;\n\theight: 50px;\n\tposition: absolute;\n\tbottom: 100%;\n\tmargin-bottom: -25px;\n\tleft: 50%;\n\tmargin-left: -25px;\n\tborder-radius: 100%;\n\tbox-shadow: 0 2px 4px #999;\n\tbackground: white;\n}\n\n.or-spacer span i {\n\tposition: absolute;\n\ttop: 4px;\n\tbottom: 4px;\n\tleft: 4px;\n\tright: 4px;\n\tborder-radius: 100%;\n\tborder: 1px dashed #aaa;\n\ttext-align: center;\n\tline-height: 40px;\n\tfont-style: normal;\n\tcolor: #999;\n}\n\n.or-spacer-vertical {\n\tdisplay: inline-block;\n\tmargin-top: 100px;\n\tmargin-left: 100px;\n\twidth: 100px;\n\tposition: relative;\n}\n\n.or-spacer-vertical .mask {\n\toverflow: hidden;\n\twidth: 20px;\n\theight: 200px;\n}\n\n.or-spacer-vertical.left .mask:after {\n\tcontent: '';\n\tdisplay: block;\n\tmargin-left: -20px;\n\twidth: 20px;\n\theight: 100%;\n\tborder-radius: 12px/125px;\n\tbox-shadow: 0 0 8px black;\n}\n\n.or-spacer-vertical.right .mask:before {\n\tcontent: '';\n\tdisplay: block;\n\tmargin-left: 20px;\n\twidth: 20px;\n\theight: 100%;\n\tborder-radius: 12px/125px;\n\tbox-shadow: 0 0 8px black;\n}\n\n/*--dashboard css--*/\n.dashboard_main_icons {\n\tfont-size: 72px;\n\ttext-align: center;\n}\n\n.math_text {\n\tcolor: #6e3ec2;\n}\n\n.math_bg {\n\tbackground: #6e3ec2;\n\tcolor: #FFF;\n}\n\n.verbal_text {\n\tcolor: #f4511e;\n}\n\n.verbal_bg {\n\tbackground: #f4511e;\n\tcolor: #FFF;\n}\n\n/*--- css for display inline block ---*/\n.dib {\n\tdisplay: inline-block;\n}\n\n.height_34 {\n\theight: 34px;\n}\n\n@media ( max-width :768px) {\n\t.test_dashboard {\n\t\tdisplay: none;\n\t}\n}\n\nhr.mh {\n\tmargin-bottom: 22px !important;\n}\n\n.highlight {\n\tbackground-color: #4A9EFC;\n}\n\n  .button{\n    position: relative;\n    bottom: 16px;\n    padding: 0px 38px;\n}\n  label {\n      display: inline-block;\n      max-width: 100%;\n      font-weight: 200 !important;\n      font-family: sans-serif;\n  }\n  \n  .slide {\n      display: none;\n  }\n  .active-slide {\n      display: block;\n  }\n  .slider-nav {\n      text-align: center;\n      margin-top: 20px;\n  }\n  .prev {\n      display: inline-block;\n      margin: 10px;\n  }\n  .next {\n      display: inline-block;\n      margin: 10px;\n  }\n  \n  input[type=checkbox], input[type=radio] {\n      /* margin: 4px 0 0; */\n      margin-top: 1px\\9;\n      line-height: normal;\n      /* border-radius: 78px; */\n      width: 40px !important;\n      height: 15px !important;\n  }\n  p {\n      margin: 0 0 10px;\n      text-align: justify;\n  \n  }\n  .container {\n      height: auto;\n      width: 100%;\n      padding: 0;\n  }\n  \n    .calc-card {\n      width: 280px;\n      padding: 0;\n    }\n    \n    .buttons {\n      margin: 0 auto;\n    }\n    \n    .row {\n      margin: 0px;\n    }\n    \n    .calc-button {\n      height: 37px !important;\n      font-size: 21px;\n      width: 54px;\n      background-color: lightpink;\n      border: 1px solid black;\n    }\n    \n    .calc-button-long {\n      width: 113px;\n    }\n    \n    .mdl-textfield {\n      width: 85% !important;\n      padding: 0px;\n    }\n    \n    .mdl-textfield input[type=\"text\"] {\n      text-align: right;\n      font-size: 3em;\n      padding: 0px;\n      width: 98%;\n    }\n    \n    .mdl-textfield input[type=\"text\"]:disabled {\n      color: #000;\n    }\n  \n    .row[_ngcontent-iru-22] {\n      margin: 6px !important;\n  }\n  .mdl-textfield[_ngcontent-rsf-22] input[type=\"text\"][_ngcontent-rsf-22]:disabled {\n      color: #000;\n      width: 98% !important;\n  }\n  .mdl-button--accent.mdl-button--accent {\n      background-color: rgb(255,64,129);\n      color: white;\n      border: 1px solid rgb(255,64,129);\n  \n  }\n  .mdl-button.mdl-button--colored {\n      background-color: rgb(63,81,181);\n      color: white;\n      border: 1px solid rgb(63,81,181);\n  }\n  \n\n\n\n@media ( max-width :991px) {\n\t.some-footer {\n\t\tpadding: 0 20px 15px;\n\t}\n}\n\n@media ( max-width : 800px) {\n\t.some-footer {\n\t\twidth: 84% !important;\n\t}\n}\n\n@media ( max-width : 1024px) {\n\t.some-footer {\n\t\twidth: 86% !important;\n\t}\n}\n\nul {\n\tpadding: 0px !important;\n\tmargin: 0px !important;\n}\n\n.dashboard_main_icons {\n\tfont-size: 72px;\n\ttext-align: center;\n}\n\n.math_text {\n\tcolor: #6e3ec2;\n}\n\n.math_bg {\n\tbackground: #6e3ec2;\n\tcolor: #FFF;\n}\n\n.verbal_text {\n\tcolor: #f4511e;\n}\n\n.verbal_bg {\n\tbackground: #f4511e;\n\tcolor: #FFF;\n}\n\n/*--- css for display inline block ---*/\n.dib {\n\tdisplay: inline-block;\n}\n\n.height_34 {\n\theight: 34px;\n}\n\n\nul {\n\tpadding: 0px !important;\n\tmargin: 0px !important;\n}\n\nul li {\n\tlist-style: none;\n}\n\n.logo_img {\n\twidth: 168px;\n}\n\n.text_white {\n\tcolor: #fff;\n}\n\n/*this css is added for tree view in customize test page*/\n.tree_v ul li {\n\tmargin-left: 20px;\n}\n\n/* css for test pages */\n.test_header_bg {\n\tbackground: #30a5ff;\n\tcolor: #FFF;\n}\n\n/*---------------- boot strap toggle button for bookmark check box --------------*/\n\n/*-----------------------flag css--------------------*/\n.flag input[type=\"radio\"], .flag input[type=\"checkbox\"] {\n\tdisplay: none;\n}\n\n.flag input[type=\"radio\"]+span:before, .flag input[type=\"checkbox\"]+span:before\n\t{\n\tfont-family: 'FontAwesome';\n\tpadding-right: 3px;\n\tfont-size: 20px;\n}\n\n.flag input[type=\"radio\"]+span:before {\n\tcontent: \"\\F10C\"; /* circle-blank */\n}\n\n.flag input[type=\"radio\"]:checked+span:before {\n\tcontent: \"\\F111\"; /* circle */\n}\n\n.flag input[type=\"checkbox\"]+span:before {\n\tcontent: \"\\F11D\"; /* check-empty */\n}\n\n.flag input[type=\"checkbox\"]:checked+span:before {\n\tcontent: \"\\F024\"; /* check */\n}\n\n/*--------------------------End of flag css-----------------------------------------*/\n\n/*--------------------------radio button like button-----------------------------------------*/\n#radio_button {\n\tmargin: 0px;\n\tfloat: left;\n}\n\n#radio_button label {\n\tfloat: left;\n\twidth: 100px;\n\t/* margin: 4px; */\n\tbackground-color: #EFEFEF;\n\t/* border-radius: 4px; */\n\t/* border: 1px solid #D0D0D0; */\n\toverflow: auto;\n}\n\n#radio_button label span {\n\ttext-align: center;\n\tfont-size: 18px;\n\tpadding: 2px 0px;\n\tdisplay: block;\n\tcursor: pointer;\n}\n\n#radio_button label input {\n\tposition: absolute;\n\ttop: -20px;\n\tdisplay: none;\n}\n\n#radio_button input:checked+span:before {\n\tfont-family: FontAwesome;\n\tfont-style: normal;\n\tfont-weight: lighter;\n\tcontent: \"\\F00C\";\n\tfont-size: 17px;\n}\n\n/*#radio_button input:checked + span {\n    background-color:#6C7A89;\n    color:#F7F7F7;\n}*/\n#radio_button .high {\n\tbackground-color: #00a65a;\n\tcolor: #FFF;\n}\n\n#radio_button .high input:checked+span {\n\tbackground-color: #16A085 !important;\n\tcolor: #FFF;\n}\n\n#radio_button .medium {\n\tbackground-color: #f39c12;\n\tcolor: #FFF;\n}\n\n#radio_button .medium input:checked+span {\n\tbackground-color: #F7CA18 !important;\n\tcolor: #FFF;\n}\n\n#radio_button .low {\n\tbackground-color: #dd4b39;\n\tcolor: #FFF;\n}\n\n#radio_button .low input:checked+span {\n\tbackground-color: #CF000F !important;\n\tcolor: #FFF;\n}\n\n.bookmark {\n\tbackground-color: #dd4b39;\n\tcolor: #FFF;\n}\n\n/*--------------------------end of radio button like button-----------------------------------------*/\n.explination_area {\n\tbackground: #F2F1EF;\n\tpadding: 20px;\n\theight: 150px;\n\toverflow-y: auto !important;\n}\n\n.mt-40 {\n\tmargin-top: 40px;\n}\n\n.pl_20 {\n\tpadding-left: 20px;\n}\n\n.bt_dotter {\n\tborder-top: #e1e2e3 1px dotted;\n\tpadding-top: 10px;\n}\n\n.dib {\n\tdisplay: inline-block;\n}\n\n.btn-outline {\n\tbackground-color: transparent;\n\tcolor: inherit;\n\ttransition: all .5s;\n}\n\n.btn-primary.btn-outline {\n\tcolor: #FFF;\n}\n\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:active {\n\tcolor: #30a5ff;\n\tbackground: #fff;\n}\n\n\n\n\n\n\n/*-custom css for ichecks-*/\n.i-checks input {\n\topacity: 0;\n}\n\n.i-checks input:checked+i {\n\tborder-color: rgba(23, 152, 119, 0.6);\n}\n\n.i-checks input:checked+i:before {\n\tposition: absolute;\n\tleft: 0px;\n\twidth: 100%;\n\ttop: 2px;\n\ttext-align: center;\n\tfont-family: \"FontAwesome\";\n\tfont-style: normal;\n\tfont-weight: normal;\n\tcolor: #30a5ff;\n}\n\n.i-checks input[type=\"radio\"]+i {\n\tborder-radius: 100%;\n}\n\n.i-checks input[type=\"checkbox\"]:checked+i:before {\n\tcontent: \"\\F00C\";\n}\n\n.i-checks input[type=\"radio\"]:checked+i:before {\n\tcontent: \"\\F111\";\n}\n\n.i-checks input[disabled]+i, fieldset[disabled] .i-checks input+i {\n\tborder-color: #30a5ff;\n}\n\n.i-checks input[disabled]+i:before, fieldset[disabled] .i-checks input+i:before\n\t{\n\tcolor: #1aae88;\n}\n\n.i-checks i {\n\twidth: 18px;\n\theight: 18px;\n\tline-height: 1;\n\tborder: 1px solid #30a5ff;\n\tbackground-color: #fff;\n\tmargin-left: 20px;\n\tmargin-top: 1px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-right: 8px;\n\tposition: relative;\n\tfont-size: 12px;\n}\n\n.ie8 .i-checks i {\n\tdisplay: none;\n}\n\n\n/*********Practice css***********/\n.pract.checkbox, .pract.radio {\n\tposition: relative;\n\tmargin-top: 12px;\n\t/* display: inline-block; */\n}\n\n.pract>label>p {\n\tdisplay: inline;\n}\n\n.options input[type=radio]:checked+label {\n\tbackground: #30A5FF;\n\tcolor: #FFF;\n\toutline: 0;\n}\n\n.options input[type=radio]+label, .options input[type=checkbox]+label {\n\tdisplay: inline-block;\n\tmargin: -1px;\n\tpadding: 6px 12px;\n\tmargin-bottom: 0% !important;\n\tfont-size: 14px;\n\tline-height: 20px;\n\tcolor: #666;\n\ttext-align: center;\n\tvertical-align: middle;\n\tcursor: pointer;\n\tbackground-color: none;\n\twidth: 100%;\n\tborder: #30a5ff 1px solid;\n}\n\n.text-blank-t-m {\n\tmargin-top: 30px;\n\tmargin-bottom: 10px;\n}\n\n.options input[type=radio], .options input[type=checkbox] {\n\tdisplay: none !important;\n}\n\n\n.node {\n\tcursor: pointer;\n  }\n  \n  .node circle {\n\tfill: #fff;\n\tstroke: steelblue;\n\tstroke-width: 1.5px;\n  }\n  \n  .node text {\n\tfont: 10px sans-serif;\n  }\n  \n  .link {\n\tfill: none;\n\tstroke: #ccc;\n\tstroke-width: 1.5px;\n  }\n  .dropdown-menu{\n    min-width: 216px !important;\n}\n\n.text-success {\n    color: #0b633a !important;\n  }\n  .dropdown-menu{\n    box-shadow:none;\n\tbackground: #2292E8;\n}\n.dropdown-menu>li>a{\n    color: floralwhite\n}\n.dropdown-menu>li>a>.fa,.dropdown-menu>li>a>.glyphicon,.dropdown-menu>li>a>.ion{\n    margin-right:10px\n}\n.dropdown-menu>li>a:hover{\n    background-color:#ED1C24;\n    color: white\n}\n.dropdown-menu>.divider{\n    background-color:#eee;\n    margin:0\n}\n.navbar-nav>.messages-menu>.dropdown-menu,.navbar-nav>.notifications-menu>.dropdown-menu,.navbar-nav>.tasks-menu>.dropdown-menu{\n    width:280px;\n    padding:0;\n    margin:0;\n    top:100%\n}\nul.dropdown-menu.user-menu{\n    width:20px!important\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li,.navbar-nav>.notifications-menu>.dropdown-menu>li,.navbar-nav>.tasks-menu>.dropdown-menu>li{\n    position:relative\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li.header,.navbar-nav>.notifications-menu>.dropdown-menu>li.header,.navbar-nav>.tasks-menu>.dropdown-menu>li.header{\n    background-color:#fff;\n    padding:7px 10px;\n    border-bottom:1px solid #f4f4f4;\n    color:#444;\n    font-size:14px;\n    text-align:center;\n    font-weight:700;\n    border-radius:4px 4px 0 0\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li.footer>a,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a{\n    font-size:12px;\n    background-color:#fff;\n    padding:7px 10px;\n    border-bottom:1px solid #eee;\n    color:#444!important;\n    text-align:center;\n    border-radius:0 0 4px 4px\n}\n@media (max-width:991px){\n    .navbar-nav>.messages-menu>.dropdown-menu>li.footer>a,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a{\n        background:#fff!important;\n        color:#444!important\n    }\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li.footer>a:hover,.navbar-nav>.notifications-menu>.dropdown-menu>li.footer>a:hover,.navbar-nav>.tasks-menu>.dropdown-menu>li.footer>a:hover{\n    text-decoration:none;\n    font-weight:400\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu{\n    max-height:200px;\n    margin:0;\n    padding:0;\n    list-style:none;\n    overflow-x:hidden\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a{\n    display:block;\n    white-space:nowrap;\n    border-bottom:1px solid #f4f4f4\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:hover,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a:hover,.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a:hover{\n    background:#f4f4f4;\n    text-decoration:none\n}\n.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a{\n    color:#444;\n    overflow:hidden;\n    text-overflow:ellipsis;\n    padding:10px\n}\n.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.fa,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.glyphicon,.navbar-nav>.notifications-menu>.dropdown-menu>li .menu>li>a>.ion{\n    width:20px\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a{\n    margin:0;\n    padding:10px\n}\nul.dropdown-menu.user-menu a{\n    padding:8px 10px;\n    cursor: pointer;\n    border-bottom: 1px solid whitesmoke;\n}\nul.dropdown-menu.user-menu a .fa{\n    margin-right:0\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>div>img{\n    margin:auto 10px auto auto;\n    width:40px;\n    height:40px\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>h4{\n    padding:0;\n    margin:0 0 0 45px;\n    color:#444;\n    font-size:15px;\n    position:relative\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>h4>small{\n    color:#999;\n    font-size:10px;\n    position:absolute;\n    top:0;\n    right:0\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a>p{\n    margin:0 0 0 45px;\n    font-size:12px;\n    color:#888\n}\n.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:after,.navbar-nav>.messages-menu>.dropdown-menu>li .menu>li>a:before{\n    content:\" \";\n    display:table\n}\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a{\n    padding:10px\n}\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a>h3{\n    font-size:14px;\n    padding:0;\n    margin:0 0 10px;\n    color:#666\n}\n.navbar-nav>.tasks-menu>.dropdown-menu>li .menu>li>a>.progress{\n    padding:0;\n    margin:0\n}\n.navbar-nav>.user-menu>.dropdown-menu{\n    border-top-right-radius:0;\n    border-top-left-radius:0;\n    padding:1px 0 0;\n    border-top-width:0;\n    width:280px\n}\n.navbar-nav>.user-menu>.dropdown-menu,.navbar-nav>.user-menu>.dropdown-menu>.user-body{\n    border-bottom-right-radius:4px;\n    border-bottom-left-radius:4px\n}\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header{\n    height:118px;\n    padding:10px;\n    text-align:center\n}\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>img{\n    z-index:5;\n    height:90px;\n    width:90px;\n    border:3px solid transparent;\n    border-color:rgba(255,255,255,.2)\n}\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p{\n    z-index:5;\n    color:#fff;\n    color:rgba(255,255,255,.8);\n    font-size:17px;\n    margin-top:10px\n}\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>p>small{\n    display:block;\n    font-size:12px\n}\n.navbar-nav>.user-menu>.dropdown-menu>.user-body:after,.navbar-nav>.user-menu>.dropdown-menu>.user-body:before,.navbar-nav>.user-menu>.dropdown-menu>.user-footer:after,.navbar-nav>.user-menu>.dropdown-menu>.user-footer:before{\n    display:table;\n    content:\" \"\n}\n.navbar-nav>.user-menu>.dropdown-menu>.user-body{\n    padding:15px;\n    border-bottom:1px solid #f4f4f4;\n    border-top:1px solid #ddd\n}\n.navbar-nav>.user-menu>.dropdown-menu>.user-body a{\n    color:#444!important\n}\n@media (max-width:991px){\n    .navbar-nav>.user-menu>.dropdown-menu>.user-body a{\n        background:#fff!important;\n        color:#444!important\n    }\n    .navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default:hover{\n        background-color:#f9f9f9\n    }\n}\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer{\n    background-color:#f9f9f9;\n    padding:10px\n}\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default{\n    color:white\n}\n.navbar-nav>.user-menu .user-image{\n    float:left;\n    width:25px;\n    height:25px;\n    border-radius:50%;\n    margin-right:10px;\n    margin-top:-2px\n}\n@media screen and (min-width:768px),screen\\9{\n    .user-menu .user-image{\n        display:none\n    }\n}\n@media (max-width:767px){\n    .navbar-nav>.user-menu .user-image{\n        float:none;\n        margin-right:0;\n        margin-top:-8px;\n        line-height:10px\n    }\n}\n.navbar-top-menu>.navbar-nav>li{\n    position:relative\n}\n.navbar-top-menu>.navbar-nav>li>.dropdown-menu{\n    position:absolute;\n    right:0;\n    left:auto\n}\n@media (max-width:991px){\n    .navbar-top-menu>.navbar-nav{\n        float:right\n    }\n    .navbar-top-menu>.navbar-nav>li{\n        position:static\n    }\n    .navbar-top-menu>.navbar-nav>li>.dropdown-menu{\n        position:absolute;\n        right:0;\n        left:auto;\n        border:1px solid #ddd;\n        background:#fff\n    }\n}\n\n.skin-toggler {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  left: -15px;\n  top: 0;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: center;\n  line-height: 50px;\n  color: white;\n}\n\n*:-ms-fullscreen\n*:-ms-fullscreen,\n*:-webkit-full-screen,\n*:-moz-full-screen {\n   overflow: auto !important;\n}\n\n*:fullscreen\n*:-ms-fullscreen,\n*:-webkit-full-screen,\n*:-moz-full-screen {\n   overflow: auto !important;\n}\n\n.blink1{\n    text-align: center;\n   \n}\n.blink1 span{\n    font-size: 12px;\n    font-family: cursive;\n    animation: blink 1s linear infinite;\n}\n@keyframes blink{\n0%{opacity: 0;}\n50%{opacity: .5;}\n100%{opacity: 1;}\n}\n\n\n.panel-title > a:before {\n    float: right !important;\n    font-family: FontAwesome; \n    padding-right: 5px;\n}\n.panel-title > a.collapsed:before {\n    float: right !important;\n    content:\"\\F056\";\n}\n.panel-title > a:hover, \n.panel-title > a:active, \n.panel-title > a:focus  {\n    text-decoration:none;\n}\n\n.skin-blue .sidebar a {\n    color: #ccc;\n    background: #1e282c !important;\n}\n.flash-message\n{\n    z-index: 10000;\n    position: absolute;\n    width: 96%;\n    top: 50px;\n    left: 52px;\n}\n\n.word {\n    bottom: 0;\n    color: #fff;\n    font-size: 2.5em;\n    height: 2.5em;\n    left: 0;\n    line-height: 2.5em;\n    margin: auto;\n    right: 0;\n    position: absolute;\n    text-shadow: 0 0 10px rgba(50, 255, 50, 0.5), 0 0 5px rgba(100, 255, 100, 0.5);\n    top: 0\n  }\n  \n\n  /* loader css */\n \n\n.message-box {\n    display: none;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 9999;\n}\n.message-box .mb-container {\n    left: 0px;\n    top: 35%;\n    background: rgba(0, 0, 0, 0.9);\n    padding: 20px;\n\twidth: 100%;\n\tposition: relative;\n}\n.message-box .mb-container .mb-middle {\n    width: 50%;\n    left: 25%;\n    position: relative;\n    color: #FFF;\n}\n.message-box .mb-container .mb-middle .mb-title {\n    width: 100%;\n    float: left;\n    padding: 10px 0px 0px;\n    font-size: 31px;\n    font-weight: 400;\n    line-height: 36px;\n}\n.message-box .mb-container {\n    font-size: 17px;\n    float: left;\n    margin-right: 10px;\n}\n.book h3 {\n\tposition: relative;\n    top: 48px;\n    font-size: 20px;\n}\n\n\n.points_table_scrollbar{\n\theight: 612px;\n\toverflow-y: scroll;\n}\n\n.points_table_scrollbar::-webkit-scrollbar-track{\n\tborder-radius: 10px;\n}\n\n.points_table_scrollbar::-webkit-scrollbar{\n\twidth: 9px;\n\tmin-width: 5px;\n\tbackground-color: #F5F5F5;\n}\n\n.points_table_scrollbar::-webkit-scrollbar-thumb{\n\tborder-radius: 10px;\n\tbackground-color: #00c0ef;\n\tbackground-image: -webkit-linear-gradient(90deg, transparent, #337ab7 50%, transparent, transparent)\n}\n\n.ctext{\n\twidth: 50% !important;\n    height: 50px;\n    border: 2px solid #00c0ef;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map