module.exports = {
  rules : [
    {
      pattern :/\/api\/getclassfynan.php/,
      respondwith:'./getclassfynan.json'
    },
    {
      pattern :/\/api\/det.php$/,
      respondwith:'./det.json'
    },
    {
      pattern: /\/api\/det.php\?type\=more$/,
      respondwith: './det-more.json'
    },
    {
      pattern: /\/api\/det.php\?type\=new$/,
      respondwith: './det-new.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=1$/,
      respondwith: './classfy1.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=2$/,
      respondwith: './classfy2.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=3$/,
      respondwith: './classfy3.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=4$/,
      respondwith: './classfy4.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=5$/,
      respondwith: './classfy5.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=6$/,
      respondwith: './classfy6.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=7$/,
      respondwith: './classfy7.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=8$/,
      respondwith: './classfy8.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=9$/,
      respondwith: './classfy9.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=10$/,
      respondwith: './classfy10.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=11$/,
      respondwith: './classfy11.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=12$/,
      respondwith: './classfy12.json'
    },
    {
      pattern: /\/api\/classfy.php\?id=13$/,
      respondwith: './classfy13.json'
    }
  ]
}
