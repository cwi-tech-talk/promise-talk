'use strict'

var q = require ('q');

exports.doSomethingAsync = doSomethingAsync;
exports.doSomethingAsyncWithError = doSomethingAsyncWithError;
exports.getUsername = getUsername;
exports.getUser = getUser;
exports.getAge = getAge;

function doSomethingAsync() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.resolve('Operação com sucesso');
  }, 3000);

  return deferred.promise;
}

function doSomethingAsyncWithError() {
  var deferred = q.defer();

  console.log('Início da operação');
  
  setTimeout(() => {
    deferred.reject('Erro! Falha na operação');
  }, 3000);

  return deferred.promise;
}

function getUsername() {
  var deferred = q.defer();

  console.log('Início da operação getUsername');
  
  setTimeout(() => {
    deferred.resolve('carlos2004');
  }, 2000);

  return deferred.promise;
}

function getUser(username) {
  var deferred = q.defer();

  console.log('Início da operação getUser');
  
  setTimeout(() => {
    deferred.resolve({ name: 'Carlos', password: 1234 });
  }, 2000);

  return deferred.promise;
}

function getAge(user) {
  var deferred = q.defer();

  console.log('Início da operação getAge');
  
  setTimeout(() => {
    deferred.resolve('A idade é 12');
  }, 2000);

  return deferred.promise;
}
