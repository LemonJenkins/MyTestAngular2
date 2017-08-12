"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            {
                id: 1,
                title: 'Изучить JavaScript',
                completed: true
            },
            {
                id: 2,
                title: 'Изучить Angular2',
                completed: false
            },
            {
                id: 3,
                title: 'Послать все к черту',
                completed: true
            }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map