'use strict'

const axios = require('axios').default;

const api = axios.create({
    url: 'https://www.sofascore.com',
    headers: {
        //date: 'Fri, 28 Aug 2020 05:00:54 GMT',
        'Referer': 'https://www.sofascore.com/pt/',
        // 'content-type': 'application/json',
        // 'route': 'sofa_web_event_list_footer_popular_events',
        // 'x-maxage': 10,
        // 'x-app': 'dara',
        // 'x-backend': 'dara',
        // 'x-varnish': '3714081626 3714080109',
        // 'via': '1.1 varnish',
        // 'vary': 'Accept-Encoding',
        // 'x-varnish': '769665359 770420986',
        // 'via': '1.1 varnish (Varnish/6.0)',
        // 'cache-control': 'public, max-age=2678400',
        // 'x-hitmiss': 'hit',
        // 'x-executiontime': 0,
        // 'cf-cache-status': 'EXPIRED',
        // 'cf-request-id': '04d509bb910000f68ff6376200000001',
        // 'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        // 'server': 'cloudflare',
        // 'cf-ray': '5c9b78a5ba7cf68f-GRU',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
})

class betScore {
    all(timeStamp) {
        return new Promise((resolve, reject) => {
            api.get('https://www.sofascore.com/list/footer/events/popular/json?_='+timeStamp).then((rest) => {
                return resolve(rest.data)
            }).catch((err) => {
                return reject('Error: ' + err)
            })
        })
    }

    event(eventId) {
        return new Promise((resolve, reject) => {
            api.get(`https://api.sofascore.com/api/v1/event/${eventId}/odds/1/all`).then((rest) => {
                return resolve(rest.data)
            }).catch((err) => {
                return reject('Error: ' + err)
            })
        })
    }
}

//var bets = new betScore()

// bets.event(8747962).then((data) => {
//     console.log(data)
// })
// bets.all(0).then((data) => {
//     console.log(data)
// })

