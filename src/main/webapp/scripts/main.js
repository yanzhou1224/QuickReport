'use strict';

(function($LAB, bootstrap) {
    bootstrap();

    $LAB.runQueue()
    .script([
    ]).wait(function() {
        angular.bootstrap(document, ['app']);
    });
})($LAB, bootstrap);
