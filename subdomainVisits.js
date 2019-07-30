/**
 * A website domain like "discuss.leetcode.com" consists of various subdomains. 
 * At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". 
 * When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
 * Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. 
 * An example of a count-paired domain might be "9001 discuss.leetcode.com".
 * We are given a list cpdomains of count-paired domains. 
 * We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let result = [];
    let domains = new Map();
    let subDomains = new Map();

    cpdomains.forEach(domain => {
        let arr = domain.split(" ");
        domains.set(arr[1], parseInt(arr[0]));
    });

    domains.forEach((count, domain) => {
        let arr = domain.split('.');

        while (arr.length > 0) {
            let existingVisits = subDomains.get(arr.join('.')) || 0;
            subDomains.set(arr.join('.'), existingVisits + count);
            arr.shift();
        }

    });

    subDomains.forEach((count, subDomain) => {
        result.push(`${count} ${subDomain}`);
    });

    return result;
};

// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
// console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
console.log(subdomainVisits([
    "9656 hoh.ca",
    "1311 sci.net",
    "1945 jre.us",
    "9323 kvk.com",
    "8682 whf.unn.com",
    "9895 xow.fsw.us",
    "6881 epf.gdw.net",
    "7566 gjf.network",
    "1216 kwd.network",
    "5262 iux.net",
    "3377 pjp.qzi.org",
    "9460 ato.co",
    "2735 ibf.co",
    "3953 jfz.team",
    "4543 bkn.ajl.net",
    "9699 gtu.us",
    "3923 wwo.zqy.org",
    "9495 wph.org",
    "8000 hpn.org",
    "7632 roc.hlr.com",
    "8531 xuf.jkx.ca",
    "9251 miu.kmz.team",
    "1050 uyf.gxz.org",
    "5726 xuf.network",
    "720 pgl.hlr.us",
    "4979 wqv.com",
    "2055 nkh.uyy.com",
    "1463 xhe.ca",
    "9761 fsw.team",
    "2750 arz.org",
    "8188 dfa.com",
    "5263 rbg.network",
    "5045 unn.network",
    "7261 ara.org",
    "8650 azh.jre.team",
    "9906 xpn.ajl.team",
    "7060 lmx.czb.org",
    "1495 epf.co",
    "7717 qhr.okv.ca",
    "866 sur.tjy.ca",
    "2550 zfr.epf.co",
    "1358 gbq.ca",
    "2470 gjf.ca",
    "7125 btv.com",
    "3809 kmx.network",
    "1551 shc.buf.ca",
    "6066 qeu.gqs.co",
    "5389 fhm.epf.org",
    "8131 qay.us",
    "4118 bva.rbg.co",
    "1947 ato.com",
    "8801 ara.us",
    "9171 hal.team",
    "2377 jqz.mkw.org",
    "2222 plj.ytn.co",
    "9096 ser.org",
    "1 zhy.net",
    "6385 tzz.fzx.co",
    "9553 iux.org",
    "9572 zqy.com",
    "7131 ojr.net",
    "2393 upo.ibf.co",
    "8236 nxm.ixi.com",
    "272 nei.hpn.org",
    "5036 qxw.kmx.ca",
    "8918 kmx.team",
    "7025 hkt.ca",
    "5981 tad.lfn.com",
    "6293 jia.net",
    "8327 vfo.hnl.us",
    "4169 lkl.cwn.com",
    "8107 hkt.network",
    "6632 hax.wip.net",
    "3672 hwu.com",
    "8459 vjx.uyy.network",
    "3012 gjf.net",
    "4036 ksc.ca",
    "7746 yls.org",
    "8694 asz.org",
    "4439 htq.com",
    "4582 xuf.org",
    "2205 wrw.srp.ca",
    "9479 iun.hlr.co",
    "6752 kov.ato.us",
    "7504 qzk.rbg.net",
    "9715 ajl.network",
    "4008 cke.fqv.com",
    "2612 tvj.kmz.org",
    "8966 zfz.org",
    "5407 qhk.bfo.net",
    "9019 hal.team",
    "3576 avm.ajl.ca",
    "4544 vec.amr.team",
    "9679 umx.dfa.ca",
    "2223 lux.zqk.team",
    "5004 syf.vbo.us",
    "1998 ltq.org",
    "1895 xvi.ajl.network",
    "9548 unn.us",
    "1558 okv.network"
]));