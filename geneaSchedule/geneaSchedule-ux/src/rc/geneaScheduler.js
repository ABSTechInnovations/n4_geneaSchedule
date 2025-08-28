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
            //dom.html(`<div id="geneaSchedule"></div>`);
            dom.attr('id', 'geneaSchedule');
            super.doInitialize(dom);
            dom.parent().parent().css('background-color', 'yellow');

        }

        doDestroy(){
            const elem = $('#geneaSchedule');

            // Remove the ID
            elem.removeAttr('id');
            elem.parent().parent().css('background-color', '#ffffff')
        }


    }
});