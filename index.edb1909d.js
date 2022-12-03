fetch("https://restcountries.com/v3.1/name/Ukraine").then((function(o){return o.json()})).then((function(o){console.log("All information:",o[0]),console.log("The capital is ",o[0].capital),console.log("Population is ",o[0].population,"peoples"),console.log("Country language is",o[0].languages)}));
//# sourceMappingURL=index.edb1909d.js.map
