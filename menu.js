// Per aggiungere prodotti: inserire {name:'Nome',price:7} nella categoria desiderata.
// Per i vini usare {name:'Nome',wine:true,detail:'Descrizione',prices:[{label:'Calice',amount:6},{label:'Bottiglia 75 cl',amount:25}]}.
const MENU=[
{title:'Classics Never Dies',items:[{name:'Negroni',price:7},{name:'Americano',price:7},{name:'Boulevardier',price:7},{name:'Negroni Sbagliato',price:7},{name:'Spritz Aperol / Campari',price:7},{name:'Spritz St. Germain',price:8},{name:'Manhattan',price:8},{name:'Cocktail Martini',price:7},{name:'Old Fashioned',price:7},{name:'Sazerac',price:7},{name:'Martinez',price:8},{name:'Pornstar Martini',price:7}]},
{title:'Gin & Tonic',items:[{name:'N°3',price:9},{name:'Plymouth',price:9},{name:'Mare',price:9},{name:'Nordés',price:9},{name:'Tanqueray N°10',price:9},{name:'Roku',price:9},{name:'Hendrick’s',price:9},{name:'Malfy',price:9},{name:'Bulldog',price:9},{name:'Etsu',price:9},{name:'Posides',price:9},{name:'Brookman’s',price:12},{name:'Monkey',price:14},{name:'Copperhead',price:14}]},
{title:'Birre',items:[{name:'Mahou San Miguel · 0,2 L',price:3},{name:'Mahou San Miguel · 0,4 L',price:5}]},
{title:'Vini e Bollicine',groups:[
{name:'Bollicine',items:[
{name:'Carte d’Or Brut',wine:true,detail:'Drappier · Francia · 75% Pinot Nero, 15% Chardonnay, 10% Pinot Meunier · Champagne A.O.C.',prices:[{label:'Bottiglia 75 cl',amount:70}]},
{name:'Franciacorta Brut',wine:true,detail:'Bosio Franciacorta · Lombardia · 90% Chardonnay, 10% Pinot Nero · Franciacorta D.O.C.G., metodo classico',prices:[{label:'Bottiglia 75 cl',amount:45}]},
{name:'Cuvée Kryslin',wine:true,detail:'Domaine Hamelin · Francia · 15% Pinot Nero, 85% Chardonnay · Crémant de Bourgogne A.O.C., metodo classico',prices:[{label:'Calice',amount:8},{label:'Bottiglia 75 cl',amount:35}]},
{name:'Prosecco Brut',wine:true,detail:'Sutto Wine · Veneto · 100% Glera · Valdobbiadene Prosecco Superiore D.O.C.G., metodo Martinotti',prices:[{label:'Calice',amount:6},{label:'Bottiglia 75 cl',amount:25}]}]},
{name:'Bianchi',items:[
{name:'W’Heart! Bianco',wine:true,detail:'Cantine Barsento · Puglia · 100% Verdeca · Puglia I.G.T.',prices:[{label:'Calice',amount:6},{label:'Bottiglia 75 cl',amount:25}]},
{name:'Pecorino Bio',wine:true,detail:'Agricosimo · Abruzzo · 100% Pecorino · Abruzzo D.O.C.',prices:[{label:'Calice',amount:5},{label:'Bottiglia 75 cl',amount:20}]},
{name:'Gewürztraminer',wine:true,detail:'Aichholz · Trentino-Alto Adige · 100% Gewürztraminer · Alto Adige D.O.C.',prices:[{label:'Bottiglia 75 cl',amount:30}]}]},
{name:'Rosati',items:[
{name:'Cerasuolo d’Abruzzo Bio',wine:true,detail:'Agricosimo · Abruzzo · 100% Montepulciano · Cerasuolo d’Abruzzo D.O.C.',prices:[{label:'Calice',amount:5},{label:'Bottiglia 75 cl',amount:20}]},
{name:'W’Heart! Rosato',wine:true,detail:'Cantine Barsento · Puglia · 100% Primitivo · Puglia I.G.T.',prices:[{label:'Calice',amount:6},{label:'Bottiglia 75 cl',amount:25}]},
{name:'Cuvée Domaine',wine:true,detail:'Domaine La Rouillère · Francia · Grenache, Mourvèdre, Vermentino, Cinsault, Syrah, Cabernet Sauvignon, Sémillon · Côtes de Provence A.O.C.',prices:[{label:'Calice',amount:7},{label:'Bottiglia 75 cl',amount:30}]}]}]},
{title:'Amari',items:[{name:'Cynar',price:3.5},{name:'Montenegro',price:3.5},{name:'Ratafià',price:3.5},{name:'Limoncello',price:3.5},{name:'Genziana',price:3.5},{name:'Braulio',price:3.5},{name:'Fernet Branca',price:3.5},{name:'Branca Menta',price:3.5},{name:'Baileys',price:3.5},{name:'Disaronno',price:3.5},{name:'Jefferson',price:5}]}
];
