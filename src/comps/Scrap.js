var fs = require('fs')
const rp = require('request-promise');
const cherio = require('cheerio');



    const options= {
      url:`https://enjoy.sa/ar/`,
      json:true
    }


    rp(options)
    .then((data)=>{
      const $ = cherio.load(data)
      var jobs_r = []
      const result_ch = $('.card-image waves-effect waves-block waves-light')
      //console.log(result_ch.text())
      var name_out = result_ch.find('src')
      jobs_r.push(name_out)
      jobs_r.forEach(x=>(console.log(x)))



    })


////
