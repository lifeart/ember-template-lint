'use strict';

const generateRuleTests = require('../../helpers/rule-test-harness');
const { errorMessage } = require('./../../../lib/rules/require-context-role');

generateRuleTests({
  name: 'require-context-role',

  config: true,

  good: [
    '<div role="list"><div role="listitem">Item One</div><div role="listitem">Item Two</div></div>',
    '<div role="group"><div role="listitem">Item One</div><div role="listitem">Item Two</div></div>',
    '<div role="row"><div role="columnheader">Item One</div></div>',
    '<div role="row"><div role="gridcell">Item One</div></div>',
    '<div role="group"><div role="menuitem">Item One</div></div>',
    '<div role="menu"><div role="menuitem">Item One</div></div>',
    '<div role="menubar"><div role="menuitem">Item One</div></div>',
    '<div role="menu"><div role="menuitemcheckbox">Item One</div></div>',
    '<div role="menubar"><div role="menuitemcheckbox">Item One</div></div>',
    '<div role="group"><div role="menuitemradio">Item One</div></div>',
    '<div role="menu"><div role="menuitemradio">Item One</div></div>',
    '<div role="menubar"><div role="menuitemradio">Item One</div></div>',
    '<div role="listbox"><div role="option">Item One</div></div>',
    '<div role="grid"><div role="row">Item One</div></div>',
    '<div role="rowgroup"><div role="row">Item One</div></div>',
    '<div role="treegrid"><div role="row">Item One</div></div>',
    '<div aria-hidden="true" role="tablist"><div role="treeitem">Item One</div></div>',
    '<div role="grid"><div role="rowgroup">Item One</div></div>',
    '<div role="row"><div role="rowheader">Item One</div></div>',
    '<div role="tablist"><div role="tab">Item One</div></div>',
    '<div role="group"><div role="treeitem">Item One</div></div>',
    '<div role="tree"><div role="treeitem">Item One</div></div>',
    '<div role="list">{{#each someList as |item|}}{{list-item item=item}}{{/each}}</div>',
    '<div role="list">{{#each someList as |item|}}<ListItem @item={{item}} />{{/each}}</div>',
    '<div role="list">{{#if this.show}}{{#each someList as |item|}}<ListItem @item={{item}} />{{/each}}{{/if}}</div>',
  ],

  bad: [
    {
      template: '<div role="tablist"><div role="treeitem">Item One</div></div>',
      result: {
        message: errorMessage('treeitem'),
        source: '<div role="treeitem">Item One</div>',
        line: 1,
        column: 20,
      },
    },
    {
      template: '<div><div role="columnheader">Item One</div></div>',
      result: {
        message: errorMessage('columnheader'),
        source: '<div role="columnheader">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="gridcell">Item One</div></div>',
      result: {
        message: errorMessage('gridcell'),
        source: '<div role="gridcell">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="listitem">Item One</div></div>',
      result: {
        message: errorMessage('listitem'),
        source: '<div role="listitem">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="menuitem">Item One</div></div>',
      result: {
        message: errorMessage('menuitem'),
        source: '<div role="menuitem">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="menuitemcheckbox">Item One</div></div>',
      result: {
        message: errorMessage('menuitemcheckbox'),
        source: '<div role="menuitemcheckbox">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="menuitemradio">Item One</div></div>',
      result: {
        message: errorMessage('menuitemradio'),
        source: '<div role="menuitemradio">Item One</div>',
        line: 1,
        column: 5,
      },
    },

    {
      template: '<div><div role="option">Item One</div></div>',
      result: {
        message: errorMessage('option'),
        source: '<div role="option">Item One</div>',
        line: 1,
        column: 5,
      },
    },

    {
      template: '<div><div role="row">Item One</div></div>',
      result: {
        message: errorMessage('row'),
        source: '<div role="row">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="rowgroup">Item One</div></div>',
      result: {
        message: errorMessage('rowgroup'),
        source: '<div role="rowgroup">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="rowheader">Item One</div></div>',
      result: {
        message: errorMessage('rowheader'),
        source: '<div role="rowheader">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="tab">Item One</div></div>',
      result: {
        message: errorMessage('tab'),
        source: '<div role="tab">Item One</div>',
        line: 1,
        column: 5,
      },
    },
    {
      template: '<div><div role="treeitem">Item One</div></div>',
      result: {
        message: errorMessage('treeitem'),
        source: '<div role="treeitem">Item One</div>',
        line: 1,
        column: 5,
      },
    },
  ],
});