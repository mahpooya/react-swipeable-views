// @flow

const enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const chai = require('chai');

require('./dom')();
require('./consoleError')();
chai.use(require('chai-shallow-deep-equal'));

enzyme.configure({ adapter: new Adapter() });
