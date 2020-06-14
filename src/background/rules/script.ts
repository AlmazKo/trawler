export const script_rules: RegExp[] = [
  // /^https?:\/\/127.0.0.1/,
  // /^https?:\/\/192.1/,
  // /^https?:\/\/localhost/,
  /^https?:\/\/gumgum.com/,
  /^https?:\/\/3lift.com/,
  /^https?:\/\/lijit.com/,
  /^https?:\/\/an.yandex.ru/,
  /^https?:\/\/ymetrica.com/,
  /^https?:\/\/bs.yandex.ru/,
  /^https?:\/\/ads.adfox.ru/,
  /^https?:\/\/moevideo.biz/,
  /^https?:\/\/advombat.ru/,
  /^https?:\/\/yastatic.net\/pcode\/adfox\/loader.js/,
  /^https?:\/\/[a-z0-9_.-]+.adfox.ru/,
  /^https?:\/\/[a-z0-9_.-]+.pixfuture.net/,
  /^https?:\/\/dmp.vihub.ru/,
  /^https?:\/\/[a-z0-9_.-]+.anews.com/,
  /^https?:\/\/ads.betweendigital.com/,
  /^https?:\/\/www.googleadservices.com/,
  /^https?:\/\/[a-z0-9_.-]+adfox.yandex.ru/,
  /^https?:\/\/[a-z0-9_.-]+.adriver.ru/,
  /^https?:\/\/dsp-rambler.ru/,
  /^https?:\/\/ssp.rambler.ru/,
  /^https?:\/\/www.googletagmanager.com/,
  /^https?:\/\/www.googletagservices.com/,
  /^https?:\/\/[a-z0-9_.-]+.google-analytics.com/,
  /^https?:\/\/[a-z0-9_.-]+.googlesyndication.com/,
  /^https?:\/\/adservice.google.ru/,
  /^https?:\/\/syndication.twitter.com/,
  /^https?:\/\/hm.baidu.com/,
  /^https?:\/\/push4site.com/,
  /^https?:\/\/rum-static.pingdom.net/,
  /^https?:\/\/vk.com/,  // disable social networks
  /^https?:\/\/vk.com\/rtrg/,
  /^https?:\/\/vk.com\/share/,
  /^https?:\/\/counter.yadro.ru/,
  /^https?:\/\/connect.facebook.net/,
  /^https?:\/\/[a-z0-9_.-]+.doubleclick.net/,
  /^https?:\/\/mc.yandex.ru/,
  /^https?:\/\/ads.pubmatic.com/,
  /^https?:\/\/tag.digitaltarget.ru/,
  /^https?:\/\/content.adriver.ru/,
  /^https?:\/\/analytics.paddle.com/,
  /^https?:\/\/tt.onthe.io/,
  /^https?:\/\/cdn.onthe.io\/io.js/,
  /^https?:\/\/st.top100.ru/,
  /^https?:\/\/bam.nr-data.net/,
  /^https?:\/\/rtax.criteo.com/,
  /^https?:\/\/www.tns-counter.ru/,
  /^https?:\/\/awaps.yandex./,
  /^https?:\/\/js-agent.newrelic.com/,
  /^https?:\/\/beacon.krxd.net/,  // request pixel
  /^https?:\/\/[a-z0-9_.-]+.chartbeat.(net|com)/,
  /^https?:\/\/[a-z0-9_.-]+.plista.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]*smi2./, // marketing
  /^https?:\/\/[a-z0-9_.-]+.kadam./, // marketing
  /^https?:\/\/retagapp.com/, // marketing
  /^https?:\/\/stat.media\/sm.js/, // marketing
  /^https?:\/\/ad.mail.ru/, // marketing
  /^https?:\/\/relap.io/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.taboola.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.dynamicyield.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.adhigh.net/, // marketing
  /^[a-z]+:\/\/[a-z0-9_.-]+.traffic-media.co/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.scorecardresearch.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.advertur./, // marketing
  /^https?:\/\/[a-z0-9_.-]+.solution.weborama.fr/, // marketing
  /^https?:\/\/banner.hpmdnetwork./, // marketing
  /^https?:\/\/browser-updater.yandex.net/,  // spy
  /^https?:\/\/static.yandex.net\/browser-updater/,  // spy
  /^https?:\/\/mobile.yandex./,  // spy
  /^https?:\/\/[a-z0-9_.-]+.cedexis.com/,
  /^https?:\/\/[a-z0-9_.-]+.mradx.net/,  // unknown
  /^https?:\/\/([a-z0-9_.-]+.)?trbna.com/,  // unknown
  /^https?:\/\/[a-z0-9_.-]+.creativecdn.com/,  // unknown
  /^https?:\/\/hhcdn.ru\/nposter/,  // banners
  /^https?:\/\/hgbn.network/,  // banners
  /^https?:\/\/hgbn.rocks/,  // banners
  /^https?:\/\/top-[a-z0-9_.-]+.mail.ru/,
  /^https?:\/\/[a-z0-9_.-]+.criteo.net/,
  /^https?:\/\/tags.crwdcntrl.net/,
  /^https?:\/\/[a-z0-9_.-]+.crwdcntrl.net/,
  /^https?:\/\/[a-z0-9_.-]+.effectivemeasure.net/,
  /^https?:\/\/edigitalsurvey.com/,
  /^https?:\/\/dev.visualwebsiteoptimizer.com/,
  /^https?:\/\/[a-z0-9_.-]+.mdotlabs.com/,
  /^https?:\/\/[a-z0-9_.-]+.advertising.com/,
  /^https?:\/\/[a-z0-9_.-]+.tvsquared.com/,
  /^https?:\/\/[a-z0-9_.-]+.tiqcdn.com/,
  /^https?:\/\/[a-z0-9_.-]+.amazon-adsystem.com/,
  /^https?:\/\/www.google.[a-z]+\/ads/,
  /^https?:\/\/[a-z0-9_.-]+.contentabc.com/,
  // /^https?:\/\/securemetrics.apple.com/, // marketing
  /^https?:\/\/ads.exosrv.com/, // marketing
  /^https?:\/\/tsyndicate.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.tsyndicate.com/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.exoclick.com/, // marketing
  /^https?:\/\/delivery.trafficforce.com/, // marketing
  /^https?:\/\/delivery.impressionmonster.com/, // marketing
  /^https?:\/\/mediator.mail.ru/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.adglare.net/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.mobilebanner.ru/, // marketing
  /^https?:\/\/[a-z0-9_.-]+.pardot.com/, // marketing
  /^https?:\/\/hawk.so:[0-9]/, // error tracker (rule doesn't work)
  /^https?:\/\/[a-z0-9_.-]+.zdassets.com/, //zendesk
  /^https?:\/\/[a-z0-9_.-]+.zendesk.com/, //zendesk
  /^https?:\/\/palacesquare.rambler.ru/, //ad
  /^https?:\/\/ad.mail.ru/,
  /^https?:\/\/([a-z0-9_.-]+.)?.hybrid.ai/,
  /^https?:\/\/([a-z0-9_.-]+.)?.adform.net/,
  /^https?:\/\/([a-z0-9_.-]+.)?.pushwoosh.com/,
  /^https?:\/\/([a-z0-9_.-]+.)?.webim.ru/,
  /^https?:\/\/([a-z0-9_.-]+.)?.nanosemantics.ru/,
  /^https?:\/\/connect.ok.ru/, //id
  /^https?:\/\/id.rambler.ru/ //id
];
