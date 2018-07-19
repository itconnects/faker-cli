#!/usr/bin/env node
var program = require('commander');

var pkg      = require('../package.json');
var generate = require('../');
var fields   = require('../').fields;

var log    = console.log;
var option = {};
var _currentOption;

program
  .version(pkg.version)
  .description('A cli wrapper for fakerjs')
  .usage('[option]')
  .option('-a, --address  [option]', 'Street address')
  .option('-c, --company  [option]', 'Company info')
  .option('-d, --date     [option]', 'Date options')
  .option('-f  --finance  [option]', 'Finance field')
  .option('-i  --internet [option]', 'Internet goodies')
  .option('-l  --lorem    [option]', 'Lorem ipsum goodness')
  .option('-n  --names    [option]', 'Person name(s)')
  .option('-s  --system   [option]', 'System Info')
  .option('-C  --commerce [option]', 'Commerce related info ')
  .option('-p  --phone    [option]', 'Phone number options')
  .option('-r  --random   [option]', 'Randomness')
  .option('-L, --locale   [option]', 'Set locale, defaults to en', 'en')
  .option('-x, --hacker   [option]', 'Hackers stuff')
  .option('-H, --helpers  [option]', 'Detailed contextual data')
  .option('-I, --image    [option]', 'Image data')
  .option('-D, --database [option]', 'Database stuff')
  .option('--locales', 'List available locales');

program.on('--help', function(){
  log('  faker-cli <cmd> help    List options available for <cmd>');
  log('');
  log('  Examples');
  log('');
  log('\t$ faker-cli --helpers userCard');
  log('\t$ faker-cli --random uuid');
  log('\t$ faker-cli --locale de -H userCard');
  log('');
});

program.parse(process.argv);

generate = generate(program.locale);

print(main());

// This is an abuse of IF Statement
function main(){
  if(program.locales){
    option.type = program.locales;

    return processOption('locales');
  }

  if(!program.rawArgs[3]){
    return program.help();
  }


  if(program.names){
    option.type = program.names;

    return processOption('name');
  }

  if(program.commerce){
    option.type = program.commerce;

    return processOption('commerce');
  }

  if(program.system){
    option.type = program.system;

    return processOption('system');
  }

  if(program.address){
    option.type = program.address;

    return processOption('address');
  }

  if(program.phone){
    option.type = program.phone;

    return processOption('phone');
  }

  if(program.internet){
    option.type = program.internet;

    return processOption('internet');
  }

  if(program.company){
    option.type = program.company;

    return processOption('company');
  }

  if(program.image){
    option.type = program.image;

    return processOption('image');
  }

  if(program.lorem){
    option.type = program.lorem;

    return processOption('lorem');
  }

  if(program.helpers){
    option.type = program.helpers;

    return processOption('helpers');
  }

  if(program.date){
    option.type = program.date;

    return processOption('date');
  }

  if(program.random){
    option.type = program.random;

    return processOption('random');
  }

  if(program.finance){
    option.type = program.finance;

    return processOption('finance');
  }

  if(program.hacker){
    option.type = program.hacker;

    return processOption('hacker');
  }


  if(program.definitions){
    option.type = program.definitions;

    return processOption('definitions');
  }

  if(program.database){
    option.type = program.database;

    return processOption('database');
  }

}

function processOption(type){
  var data;

  _currentOption = type;

  option.type === 'help' ?
    printHelp(type) : (data = generate[type](option));

  return data;
}


function printHelp(which){

  log('     Available options for ' + which + ':');

  fields(which).forEach(function(field){
    log('\t' + field);
  });

  log('\n');
  process.exit(1);
}

function print(data){
  data ? log(JSON.stringify(data)) :
        printHelp(_currentOption);
}
