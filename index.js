const jsonToCsv = require('./json-to-csv/index');

const actores = [{
  'nombre': 'Jack',
  'apellido': 'Nicholson',
  'ocupacion': 'Actor'
},
{
  'nombre': 'Kate',
  'apellido': 'Winslet',
  'ocupacion': 'Actriz'
},
{
  'nombre': 'Charlize',
  'apellido': 'Theron',
  'ocupacion': 'Actriz'
}]

for (const actor of actores) {
  const csv = jsonToCsv(actor);
  console.log(csv);
}

//refactoring