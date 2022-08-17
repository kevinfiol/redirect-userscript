// ==UserScript==
// @name        redirector
// @run-at document-start
// @match       https://*.imgur.com/*
// @match       https://*.twitter.com/*
// @match       https://*.medium.com/*
// @match       https://*.youtube.com/*
// @exclude     https://*.youtube.com/feed/channels
// @grant       none
// @version     1.0
// @author      kevinfiol
// @description 7/30/2022, 5:34:35 PM
// ==/UserScript==

let site = window.location.hostname.split('.').at(-2);
let path = window.location.pathname;
let query = window.location.search;

// don't redirect if redirect=false is set as a queryparam
if (query.indexOf('redirect=false') > -1) return;

// add redirects here
// omit TLDs from original hostnames as shown below
// don't forget to add a @match clause to your `==UserScript==` block above
let redirects = {
  'imgur': 'i.bcow.xyz',
  'twitter': 'notabird.site',
  'medium': 'scribe.rip',
  'youtube': 'yewtu.be'
};

let redirect = redirects[site];
if (redirect) window.location = `https://${redirect}${path}${query}`;
