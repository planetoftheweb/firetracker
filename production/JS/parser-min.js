function csvJSON(t){for(var s=t.split("\n"),e=[],r=s[0].split(","),n=1;n<s.length;n++){for(var o={},h=s[n].split(","),p=0;p<r.length;p++)o[r[p]]=h[p];e.push(o)}return JSON.stringify(e)}const DATA="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzGNwiFbhVzNzWQBViXBCYtL5NiU11pgcV3R5KNEza89zPvAWwAdEcSmSO9B-B2TToMT80U-s8cKqy/pub?output=csv";var xhr=new XMLHttpRequest;xhr.open("GET",DATA,!0),xhr.responseType="text",xhr.onload=function(){xhr.readyState===xhr.DONE&&200===xhr.status&&console.info(csvJSON(xhr.responseText))},xhr.send(null);