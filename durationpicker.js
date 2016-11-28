/*
 * angular-bootstrap-durationpicker
 * (c) 2016 Alex Neamtu
 * License: MIT
 */

var durationpickerTemplate = require('./templates/durationpicker.html');

class controller {
    constructor ($scope) {
        this.$scope = $scope;

        this.refresh();

        $scope.incrementHours = this.incrementHours.bind(this);
        $scope.decrementHours = this.decrementHours.bind(this);
        $scope.incrementMinutes = this.incrementMinutes.bind(this);
        $scope.decrementMinutes = this.decrementMinutes.bind(this);
        $scope.toggleBeforeAfter = this.toggleBeforeAfter.bind(this);
        $scope.noIncrementHours = this.noIncrementHours.bind(this);
        $scope.noDecrementHours = this.noDecrementHours.bind(this);
        $scope.noIncrementMinutes = this.noIncrementMinutes.bind(this);
        $scope.noDecrementMinutes = this.noDecrementMinutes.bind(this);
        $scope.noToggleBeforeAfter = this.noToggleBeforeAfter.bind(this);
        $scope.updateDuration = this.updateDuration.bind(this);
    }

    incrementHours () {
        if (!this.noIncrementHours()) {
            this.addMinutesToModel(this.$scope.hourStep * 60);
        }
    }

    decrementHours () {
        if (!this.noDecrementHours()) {
            this.addMinutesToModel(-this.$scope.hourStep * 60);
        }
    }

    incrementMinutes () {
        if (!this.noIncrementMinutes()) {
            this.addMinutesToModel(this.$scope.minuteStep);
        }
    }

    decrementMinutes () {
        if (!this.noDecrementMinutes()) {
            this.addMinutesToModel(-this.$scope.minuteStep);
        }
    };

    toggleBeforeAfter(){
        if (!this.noToggleBeforeAfter()) {
            this.$scope.model = -this.$scope.model;
            this.$scope.beforeAfter = this.$scope.model < 0 ? 'before' : 'after';
        }
    }

    noIncrementHours () {
        var increment = this.addMinutes(this.$scope.hourStep * 60);
        return increment > this.$scope.max;
    }

    noDecrementHours () {
        var decrement = this.addMinutes(-this.$scope.hourStep * 60);
        return decrement < this.$scope.min;
    }

    noIncrementMinutes () {
        var increment = this.addMinutes(this.$scope.minuteStep);
        return increment > this.$scope.max;
    }

    noDecrementMinutes () {
        var decrement = this.addMinutes(-this.$scope.minuteStep);
        return decrement < this.$scope.min;
    }


    noToggleBeforeAfter(){
        return (-this.$scope.model < this.$scope.min || -this.$scope.model > this.$scope.max);
    }

    addMinutesToModel(minutes) {
        this.$scope.model = this.addMinutes(minutes);
        this.refresh();
    }

    addMinutes (minutes) {
        return parseInt(this.$scope.model) + minutes * 60;
    }

    refresh () {
        this.$scope.hours = this.pad(parseInt(this.$scope.model / 3600) % 24 || 0);
        this.$scope.minutes = this.pad(parseInt(this.$scope.model / 60) % 60 || 0);
        this.$scope.beforeAfter = this.$scope.model < 0 ? 'before' : 'after';
        this.$scope.showBeforeAfter = this.$scope.model == 0 ? false : true;
    }

    pad (value) {
        return (angular.isDefined(value) && Math.abs(value).toString().length < 2) ? '0' + Math.abs(value) : Math.abs(value).toString();
    }

    updateDuration() {
        var hours = parseInt(parseInt(this.$scope.hours) / this.$scope.hourStep) * parseInt(this.$scope.hourStep);
        var minutes = parseInt(parseInt(this.$scope.minutes) / this.$scope.minuteStep) * parseInt(this.$scope.minuteStep);
        this.$scope.model =  hours * 60 * 60 + minutes * 60;
        if (this.$scope.model > this.$scope.max) {
            this.$scope.model = this.$scope.max;
        }
        if (this.$scope.model < this.$scope.min) {
            this.$scope.model = this.$scope.min;
        }
        this.refresh();
    }
}

controller.$inject = [ '$scope' ];

function durationpicker () {
    return {
        restrict: 'E',
        scope: {
            model: '=',
            hourStep: '@',
            minuteStep: '@',
            min: '@',
            max: '@',
            beforeAfterWhat: '@'
        },
        template: durationpickerTemplate,
        controller
    }

}

export default durationpicker;