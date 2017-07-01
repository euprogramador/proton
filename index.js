const cheerio = require('cheerio')
const $ = cheerio.load(`

<input-control [control]="form.get('nome')">
    <label class="control-label">Nome:</label>
    <input type="text" [formControl]="form.get('nome')" />
</input-control>`,{xmlMode: true,decodeEntities: false})

$('input-control>label').text('na');


console.log($.html());