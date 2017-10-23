'use strict';

const Container = require('flux/utils').Container;
const FormApp = require('./FormApp');
const fluxContainerConverter = require('./FluxContainerConverter');

// Container
const FormAppContainer = Container.create(fluxContainerConverter.convert(FormApp));

module.exports = FormAppContainer;

