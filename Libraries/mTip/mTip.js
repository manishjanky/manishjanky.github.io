/*!
* mTip JavaScript Custom Tooltip Plugin v 0.0.1
* Author: Manish Kumar
* Email: manishjanky@gmail.com
* https://manishjanky.github.io/#/mtip
*
* Copyright (c) 2017 Manish Kumar
* Released under the MIT license
* https://opensource.org/licenses/MIT
*
* Date: 2017-02-23
*/

var mTip = function (config) {
    //remove all the tooltip if any exists in the documnet
    document.onclick = function () {
    var toolTips = document.getElementsByClassName('mtip');
    while (toolTips[0]) {
        toolTips[0].parentNode.removeChild(toolTips[0]);
    }
    }
    var backgroundColor = "rgb(158, 226, 235)", color = "grey", delay = 250, trigger = "hover", position = "bottom", opacity = 1, selector = "[data-mtip]";
    //get the config object
    if (typeof config !== "undefined") {
        selector = config.selector ? config.selector : selector;
        backgroundColor = config.bColor ? config.bColor : backgroundColor;
        color = config.color ? config.color : color;
        delay = config.delay ? config.delay : delay;
        trigger = config.trigger ? config.trigger : trigger;
        position = config.position ? config.position : position;
        opacity = config.opacity ? config.opacity : opacity;
    }
    
        var toolTipElements = document.querySelectorAll(selector);
  
    
    for (var el = 0; el < toolTipElements.length; el++) {
        var thisElement = toolTipElements[el];
        //override if the user has provided the title attribute also remove it as it will cause problems
        thisElement.removeAttribute("title");
        var tooltip = document.createElement("div");
        tooltip.classList.add("mtip");
        tooltip.style.background = backgroundColor;
        tooltip.style.width = "150px";
        tooltip.style.height = "auto";
        tooltip.style.lineHeight = "normal";
        tooltip.style.padding = "5px";
        tooltip.style.color = color;
        tooltip.style.position = "absolute";
        tooltip.style.opacity = opacity;
        tooltip.style.borderRadius = "5px";
        tooltip.style.minWidth = "150px";
        tooltip.style.Width = "150px";
        tooltip.style.textAlign = "center";
        tooltip.style.fontSize = "15px";
        tooltip.style.zIndex = 9999;
        tooltip.style.wordWrap = "break-word";
        tooltip.style.whiteSpace = "normal";
        tooltip.style.border = "none";
        tooltip.style.visibility = "hidden";
        tooltip.style.textTransform = "none";
        
        var positionToolTip = function (elem, event, tooltip) {
            //take a config parameter vertical or horizontal based on which the tooltip will be placed sideways or at top/bottom
            //function handles positioning the tooltip at the right position
            tooltipText = elem.getAttribute("data-mtip");
            if (typeof tooltipText === 'undefined' || tooltipText == null || tooltipText == "") {
                //return if the user has used null for empty value in data-mtip attribute
                elem.removeChild(tooltip);
                return false;
            }
            if (elem.style.position == "" || elem.style.position == null || typeof elem.style.position === "undefined") {
                document.styleSheets[0].addRule(".mTipParent"," position:relative;overflow:visible !important;");
                elem.classList.add("mTipParent");
            }
            tooltip.innerText = tooltipText;
            if (tooltip.parentElement == null) {
                elem.appendChild(tooltip);
            }
            var rect = elem.getBoundingClientRect();
            //tooltip.style.marginTop = "5px";
            //set the mouse location here
            var tBox = tooltip.getBoundingClientRect();
            var clientX = event.clientX;
            var clientY = event.clientY;
            if (position == "top") {
                //position the tooltip to top of the cursor
                tooltip.style.left = event.clientX + window.pageXOffset - rect.left - tBox.width / 2 + "px";//(rect.left) + "px";
                //if (tBox.bottom >= (window.innerHeight || html.clientHeight)) {
                tooltip.style.top = event.clientY - rect.top - tBox.height - 20 + "px";//window.pageYOffset + rect.top + 5 + "px";
                document.styleSheets[0].addRule('.mtip:before', "content:'';display:inline-block;border:10px solid transparent; border-left-color: " + backgroundColor +
                    ";-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-o-transform: rotate(90deg);-ms-transform: rotate(90deg);-o-transform: rotate(90deg);position:absolute;left:" + ((tBox.width / 2) - 10) + "px;top:" + tBox.height + "px;");
            } else if (position == "bottom") {
                //position the tooltip to bottom of the cursor
                tooltip.style.left = event.clientX - rect.left - tBox.width / 2 + "px";//(rect.left) + "px";
                tooltip.style.top = event.clientY - rect.top + 30 + "px";//window.pageYOffset + rect.top + 5 + "px";
                document.styleSheets[0].addRule('.mtip:before', "content:'';display:inline-block;border:10px solid transparent; border-left-color: " + backgroundColor +
                    ";-webkit-transform: rotate(-90deg);-moz-transform: rotate(-90deg);-o-transform: rotate(-90deg);-ms-transform: rotate(-90deg);-o-transform: rotate(-90deg);position:absolute;left:" + ((tBox.width / 2) - 10) + "px;top:-20px");
            } else if (position == "right") {
                //position the tooltip to right of the cursor
                tooltip.style.left = event.clientX - rect.left + 20 + "px";//(rect.left) + "px";
                tooltip.style.top = event.clientY - rect.top + "px";//window.pageYOffset + rect.top + 5 + "px";
                document.styleSheets[0].addRule('.mtip:before', "content:'';display:inline-block;border:10px solid transparent; border-left-color: " + backgroundColor +
                    ";-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);-o-transform: rotate(180deg);-ms-transform: rotate(180deg);-o-transform: rotate(180deg);position:absolute;left:" + -20 + "px;top:" + ((tBox.height / 2) - 10) + "px");
            } else {
                //position the tooltip to left of the cursor
                tooltip.style.left = event.clientX - rect.left - 15 - tBox.width + "px";//(rect.left) + "px";
                tooltip.style.top = event.clientY - rect.top + "px";//window.pageYOffset + rect.top + 5 + "px";
                document.styleSheets[0].addRule('.mtip:before', "content:'';display:inline-block;border:10px solid transparent; border-left-color: " + backgroundColor +
                    ";-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-o-transform: rotate(360deg);-ms-transform: rotate(360deg);-o-transform: rotate(360deg);position:absolute;left:" + (tBox.width) + "px;top:" + ((tBox.height / 2) - 10) + "px");
            }
            console.log(delay);
            setTimeout(function () {
                //turn on visibility of the tooltip
                tooltip.style.visibility = "visible";
            }, delay);
        }

        if (trigger == "hover") {
            thisElement.onmouseenter = function (event) {
                //position the tooltip w.r.t body/documnet so that it can be positioned properly

                //there might some tooltips triggered on click and are still visible remove them.
                var tips = document.getElementsByClassName('mtip');
                while(tips[0]){
                    tips[0].parentNode.removeChild(tips[0]);
                }

                event.target.appendChild(tooltip);
                positionToolTip(this, event, tooltip);
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true
                }
                return false;
                //event.preventDefault();
            }
            thisElement.onmousemove = function (event) {
                //position the tooltip w.r.t body/documnet so that it can be positioned properly
                positionToolTip(this, event, tooltip);
                if (event.stopPropagation) {
                    event.stopPropagation()
                } else {
                    event.cancelBubble = true
                }
                return false;
                //event.preventDefault();
            }
            thisElement.onmouseleave = function (event) {
                //on mouse out remove the tooltip from the body

                if (typeof tooltip !== 'undefined' || tooltip != null) {
                    //tooltip.remove();
                    tooltip.style.visibility = "hidden";
                    try {
                        //May fail in IE
                        tooltip.parentNode.classList.remove("mTipParent");
                        tooltip.style.visibility = "hidden";
                        tooltip.remove();
                        
                    } catch (ex) {
                        if (tooltip.parentNode) {
                            tooltip.parentNode.classList.remove("mTipParent");
                            tooltip.style.visibility = "hidden";
                            tooltip.parentNode.removeChild(tooltip);
                            
                        }
                    }
                }
                if (event.stopPropagation) {
                    event.stopPropagation()
                } else {
                    event.cancelBubble = true
                }
                return false;
            }
            for (var child in thisElement.children) {
                //stop the propagation i.e bubling of the events to parent elements
                thisElement.children[child].onmouseenter = function (e) {
                    //remove the tooltip and stop bubbling
                    
                    if (e.stopPropagation) {
                        e.stopPropagation()
                    } else {
                        e.cancelBubble = true
                    }
                    return false;
                }
                thisElement.children[child].onmousemove = function (e) {
                    if (e.stopPropagation) {
                        e.stopPropagation()
                    } else {
                        e.cancelBubble = true
                    }
                    return false;
                }
            }
        } else if (trigger == "click") {
            thisElement.onclick = function (event) {

                tooltip.onclick = function (e) {
                    //stop hiding the tooltip when the user clicks on the tooltip itself
                    e.stopPropagation();
                }
                if (document.getElementsByClassName('mtip').length == 0) {
                    event.target.appendChild(tooltip);
                    positionToolTip(event.target, event, tooltip, delay);
                    event.stopPropagation();
                } else {
                    try {
                        //this may fail in IE 8 or below
                        if (typeof tooltip !== 'undefined' || tooltip != null) {
                            
                            if (event.target.contains(tooltip) && tooltip.parentNode == event.target) {
                                tooltip.parentNode.classList.remove("mTipParent");
                                tooltip.style.visibility = "hidden";
                                tooltip.remove();
                                
                            } else {
                                tooltip.parentNode.classList.remove("mTipParent");
                                tooltip.style.visibility = "hidden";
                                tooltip.remove();
                                event.target.appendChild(tooltip);
                                positionToolTip(event.target, event, tooltip);
                                event.stopPropagation();
                            }

                        }
                    } catch (ex) {
                        //handle for IE 8
                        if (event.target.contains(tooltip) && tooltip.parentNode == event.target) {
                            if (tooltip.parentNode) {
                                tooltip.parentNode.classList.remove("mTipParent");
                                tooltip.style.visibility = "hidden";
                                tooltip.parentNode.removeChild(tooltip);
                                
                            }
                        } else {
                            if (tooltip.parentNode) {
                                tooltip.parentNode.classList.remove("mTipParent");
                                tooltip.style.visibility = "hidden";
                                tooltip.parentNode.removeChild(tooltip);
                            }
                            event.target.appendChild(tooltip);
                            positionToolTip(event.target, event, tooltip);
                            event.stopPropagation();
                        }

                        //console.log("Removing tooltip")
                    }
                }
                if (event.stopPropagation) {
                    event.stopPropagation()
                } else {
                    event.cancelBubble = true
                }
            }
        }

    }
}
