describe('durationpicker', function () {
    var $compile,
        $rootScope;

    beforeEach(module('durationpicker'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should work as an element', function () {
        var e = angular.element('<durationpicker model="offset" hour-step="1" minute-step="5" min="-43200" max="43200" before-after-what="midnight"></durationpicker>');
        $compile(e)($rootScope);
        expect(e.html()).toBe('<table ng-model="model" class="ng-pristine ng-untouched ng-valid"> <tbody> <tr class="text-center"> <td> <a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="0"> <span class="glyphicon glyphicon-chevron-up"></span> </a> </td> <td>&nbsp;</td> <td> <a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="0"> <span class="glyphicon glyphicon-chevron-up"></span> </a> </td> </tr> <tr> <td class="form-group" ng-class="{\'has-error\': invalidHours}"> <input style="width:50px" type="text" ng-model="hours" ng-change="updateDuration()" class="form-control text-center ng-pristine ng-untouched ng-valid" maxlength="3" tabindex="0"> </td> <td>:</td> <td class="form-group" ng-class="{\'has-error\': invalidMinutes}"> <input style="width:50px" type="text" ng-model="minutes" ng-change="updateDuration()" class="form-control text-center ng-pristine ng-untouched ng-valid" maxlength="2" tabindex="0"> </td> <td class="uib-time am-pm"> <button ng-show="showBeforeAfter" type="button" ng-class="{disabled: noToggleBeforeAfter()}" class="btn btn-default text-center ng-binding" ng-click="toggleBeforeAfter()" ng-disabled="noToggleBeforeAfter()" tabindex="0">{{beforeAfter}} {{beforeAfterWhat}} </button> </td> </tr> <tr class="text-center"> <td> <a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="0"> <span class="glyphicon glyphicon-chevron-down"></span> </a> </td> <td>&nbsp;</td> <td> <a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="0"><span class="glyphicon glyphicon-chevron-down"></span> </a> </td> </tr> </tbody> </table>');
    });
});
