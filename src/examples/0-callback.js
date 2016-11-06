'use strict';

step1(1, function(value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                console.log(value4);
            });
        });
    });
});

function step1(value, callback) {
  callback(value + 1);
}

function step2(value, callback) {
  callback(value + 1);
}

function step3(value, callback) {
  callback(value + 1);
}

function step4(value, callback) {
  callback(value + 1);
}
