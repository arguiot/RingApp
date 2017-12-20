/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function compare (now) {
    var i = 0;

    if (now.hours() <= 8 && now.minutes() <= 30) {
        i = 0;
    }
    else if (now.hours() == 9 && now.minutes() > 30) {
        i = 1;
    }
    else if (now.hours() <= 9 && now.minutes() <= 30) {
        i = 1;
    }
    else if (now.hours() == 10 && now.minutes() > 25) {
        i = 2;
    }
    else if (now.hours() <= 10 && now.minutes() <= 25) {
        i = 2;
    }
    else if (now.hours() == 11 && now.minutes() >  40) {
        i = 3;
    }
    else if (now.hours() <= 11 && now.minutes() <= 40) {
        i = 3;
    }
    else if (now.hours() == 12 && now.minutes() > 35) {
        i = 4;
    }
    else if (now.hours() <= 12 && now.minutes() <= 35) {
        i = 4;
    }
    else if (now.hours() == 13 && now.minutes() > 30) {
        i = 5;
    }
    else if (now.hours() <= 13 && now.minutes() <= 30) {
        i = 5;
    }
    else if (now.hours() == 14 && now.minutes() > 30) {
        i = 6;
    }
    else if (now.hours() <= 14 && now.minutes() <= 30) {
        i = 6;
    }
    else if (now.hours() == 15 && now.minutes() > 25) {
        i = 7;
    }
    else if (now.hours() <= 15 && now.minutes() <= 25) {
        i = 7;
    }
    else if (now.hours() == 16 && now.minutes() > 40) {
        i = 8;
    }
    else if (now.hours() <= 16 && now.minutes() <= 40) {
        i = 8;
    }
    else if (now.hours() == 17 && now.minutes() > 30) {
        i = 9;
    }
    else if (now.hours() <= 17 && now.minutes() <= 30) {
        i = 9;
    }
    else {
        i = 10;
    }
    return i;
}
var to;
var $ = new _DOM_DJS(window);
$.var(1000/30);
var nowDisplay;
var b = ["8:30", "9:30", "10:25", "11:40", "12:35", "13:30", "14:30", "15:25", "16:40", "17:30"];
setInterval(function () {
    var now = moment();

    var i = compare(now);
    if (i == 10) {
        to = "The bell has already ringed, and it will ring tomorrow at " + b[0];

    }
    else {
        var then = moment(b[i], "HH:mm");
        var contains = now.to(then, true);
        var hasNumber = /\d/;
        if (hasNumber.test(contains)){
            to =  "in about "+contains ;
        }
         else {
            to = contains;
         }
        toOr = moment.utc(then.diff(now)).add(30, "seconds").format("HH:mm:ss,SS");
    }
    nowDisplay = now.format("HH:mm:ss,SS");
}, 1000/30);

$.select(".night-btn")[0].addEventListener("click", function() {
    $.addClass($.select(".app"), "night")
});
$.select(".day")[0].addEventListener("click", function() {
    $.removeClass($.select(".app"), "night")
});
