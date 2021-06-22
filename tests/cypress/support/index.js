// Copyright (C) 2020-2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

require('./commands');
require('./commands_projects');
require('./commands_review_pipeline');
require('./commands_canvas3d');
require('./commands_filters_feature');
require('@cypress/code-coverage/support');
require('cypress-plugin-tab');

before(() => {
    if (Cypress.browser.family !== 'chromium') {
        cy.visit('/');
    }
    cy.closeModalUnsupportedPlatform();
});

const resizeObserverLoopErrRe = 'ResizeObserver loop limit exceeded;
Cypress.on('uncaught:exception', (err) => {
    // the exception is generated by cypress in some browsers
    if (err.message.includes(resizeObserverLoopErrRe)) {
        return false;
    }
});
