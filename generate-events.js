const fs = require('fs');
const fsx = require('fs-extra');
const Handlebars = require('handlebars');

// Templates
const eventTemplate = Handlebars.compile(fs.readFileSync('./src/app/events/tpl/template.component.ts.tpl').toString());
const moduleTemplate = Handlebars.compile(fs.readFileSync('./src/app/events/tpl/events.module.ts.tpl').toString());
const serviceTemplate = Handlebars.compile(fs.readFileSync('./src/app/events/tpl/events.service.ts.tpl').toString());

// Data
const events = require('./src/app/events/events.json');

// Generate Event Components
fsx.removeSync('./src/app/events/out');
fsx.ensureDirSync('./src/app/events/out');
const components = events.map((event, index) => {
  const fileName = `event${index}.component`;
  const name = `Event${index}`;

  event.componentName = name;
  renderEvent(`${fileName}.ts`, Object.assign({}, event, { index }));

  return {
    name,
    fileName
  }
});

// Generate Events Module
fsx.removeSync('./src/app/events/events.module.ts');
renderModule('events.module.ts', {
  components
});

fsx.removeSync('./src/app/events/events.service.ts');
renderService('events.service.ts', {
  components
});


// Utility methods
function renderEvent(outputName, data) {
  renderTemplate(eventTemplate, outputName, data);
}
function renderModule(outputName, data) {
  const rendered = moduleTemplate(data);
  fs.writeFileSync(`./src/app/events/${outputName}`, rendered);
}
function renderService(outputName, data) {
  const rendered = serviceTemplate(data);
  fs.writeFileSync(`./src/app/events/${outputName}`, rendered);
}

function renderTemplate(tpl, outputName, data) {
  const rendered = tpl(data);
  fs.writeFileSync(`./src/app/events/out/${outputName}`, rendered);
}