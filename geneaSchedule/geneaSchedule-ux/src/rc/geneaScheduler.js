/**
 * A module defining `geneaSchedule`.
 * @module nmodule/geneaScheduler/rc/geneaScheduler
 */
define([
    'baja!',
    'bajaux/mixin/subscriberMixIn',
    'nmodule/schedule/rc/fe/Scheduler',
    'underscore',
    'jquery',
    'css!nmodule/geneaSchedule/rc/geneaSchedulerStyle'], function (
    baja,
    subscriberMixIn,
    Widget,
    _,$) {

    'use strict';

    /**
     *
     * @class
     * @extends module:bajaux/Widget
     * @alias module:nmodule/geneaScheduler/rc/geneaScheduler
     */
    return class geneaScheduler extends Widget {
        constructor() {
            super(...arguments);
            subscriberMixIn(this);
        }

        doInitialize(dom) {
            super.doInitialize(dom);
        }

    }
});