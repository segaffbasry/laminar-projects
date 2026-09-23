/**
 * PostHog (EU) bootstrap for the private prospect demo.
 *
 * Rendered as a plain inline <script> in the document <head> from layout.tsx.
 * This is the only file that carries the project key; NEXT_PUBLIC_POSTHOG_KEY
 * overrides it when set (locally via .env.local, on Vercel via project env).
 *
 * Deliberately headless — no badge, banner or cookie prompt.
 */

const KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_xs8gTJxVhhYC39XqJ4GYgAs5Q77XYCupcJNPhd4FYqRa";
const HOST = "https://eu.i.posthog.com";

export const posthogSnippet = `
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init(${JSON.stringify(KEY)}, {
  api_host: ${JSON.stringify(HOST)},
  defaults: "2026-05-30",
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true,
  disable_session_recording: false
});

posthog.register({ site: window.location.hostname });

(function () {
  try {
    var q = new URLSearchParams(window.location.search);
    var utm = {};
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
      var v = q.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) posthog.register(utm);
  } catch (e) {}
})();

/* scroll_depth — fires once each at 25 / 50 / 75 / 100 */
(function () {
  var marks = [25, 50, 75, 100];
  var sent = {};
  function onScroll() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    var percent = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (percent >= m && !sent[m]) {
        sent[m] = 1;
        posthog.capture("scroll_depth", { percent: m, site: window.location.hostname });
      }
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);
})();
`;
