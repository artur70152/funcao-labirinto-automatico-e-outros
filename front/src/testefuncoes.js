import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {



  const listaJSON = [
    {
      "objeto": 0,
      "função": "Object",
      "oQueFaz": "Representa um objeto genérico no JavaScript, permitindo criar novas instâncias de objetos.",
      "exemplo": "const obj = new Object();",
      "descricaoDoExemplo": "Cria uma nova instância de um objeto genérico."
    },
    {
      "objeto": 1,
      "função": "Array",
      "oQueFaz": "Representa uma lista de elementos ordenados.",
      "exemplo": "const arr = [1, 2, 3];",
      "descricaoDoExemplo": "Cria uma nova instância de um array com os elementos 1, 2 e 3."
    },
    {
      "objeto": 2,
      "função": "String",
      "oQueFaz": "Representa uma sequência de caracteres.",
      "exemplo": "const str = 'Hello, World!';",
      "descricaoDoExemplo": "Cria uma nova instância de uma string com o valor 'Hello, World!'."
    },
    {
      "objeto": 3,
      "função": "Number",
      "oQueFaz": "Representa um valor numérico.",
      "exemplo": "const num = 42;",
      "descricaoDoExemplo": "Cria uma nova instância de um número com o valor 42."
    },
    {
      "objeto": 4,
      "função": "Math",
      "oQueFaz": "Fornece funções matemáticas e constantes.",
      "exemplo": "const sqrt = Math.sqrt(16);",
      "descricaoDoExemplo": "Calcula a raiz quadrada do número 16."
    },
    {
      "objeto": 5,
      "função": "Date",
      "oQueFaz": "Representa uma data e hora.",
      "exemplo": "const now = new Date();",
      "descricaoDoExemplo": "Cria uma nova instância da data e hora atual."
    },
    {
      "objeto": 6,
      "função": "RegExp",
      "oQueFaz": "Representa uma expressão regular para correspondência de padrões.",
      "exemplo": "const regex = /abc/;",
      "descricaoDoExemplo": "Cria uma nova instância de uma expressão regular que corresponde ao padrão 'abc'."
    },
    {
      "objeto": 7,
      "função": "JSON",
      "oQueFaz": "Fornece métodos para trabalhar com JSON (JavaScript Object Notation).",
      "exemplo": "const json = JSON.stringify({ name: 'John', age: 30 });",
      "descricaoDoExemplo": "Converte um objeto JavaScript em uma string JSON."
    },
    {
      "objeto": 8,
      "função": "Promise",
      "oQueFaz": "Representa a conclusão (ou falha) eventual de uma operação assíncrona e seu valor resultante.",
      "exemplo": "const promise = new Promise((resolve, reject) => { /* código assíncrono */ });",
      "descricaoDoExemplo": "Cria uma nova instância de uma promessa que representa uma operação assíncrona."
    },
    {
      "objeto": 9,
      "função": "Map",
      "oQueFaz": "Representa uma coleção de pares chave-valor.",
      "exemplo": "const map = new Map();",
      "descricaoDoExemplo": "Cria uma nova instância de um mapa vazio."
    },
    {
      "objeto": 10,
      "função": "Set",
      "oQueFaz": "Representa uma coleção de valores únicos.",
      "exemplo": "const set = new Set();",
      "descricaoDoExemplo": "Cria uma nova instância de um conjunto vazio."
    },
    {
      "objeto": 11,
      "função": "WeakMap",
      "oQueFaz": "Representa uma coleção de pares chave-valor com chaves fracas.",
      "exemplo": "const weakMap = new WeakMap();",
      "descricaoDoExemplo": "Cria uma nova instância de um mapa com chaves fracas."
    },
    {
      "objeto": 12,
      "função": "WeakSet",
      "oQueFaz": "Representa uma coleção de valores únicos com valores fracos.",
      "exemplo": "const weakSet = new WeakSet();",
      "descricaoDoExemplo": "Cria uma nova instância de um conjunto com valores fracos."
    },
    {
      "objeto": 13,
      "função": "Function",
      "oQueFaz": "Representa uma função em JavaScript.",
      "exemplo": "function myFunction() { /* código da função */ }",
      "descricaoDoExemplo": "Declara uma nova função chamada 'myFunction'."
    },
    {
      "objeto": 14,
      "função": "Error",
      "oQueFaz": "Representa um erro em tempo de execução.",
      "exemplo": "throw new Error('Ocorreu um erro.');",
      "descricaoDoExemplo": "Lança um novo erro com a mensagem 'Ocorreu um erro.'."
    },
    {
      "objeto": 15,
      "função": "Symbol",
      "oQueFaz": "Representa um valor único e imutável que pode ser usado como chave de propriedade de objeto.",
      "exemplo": "const sym = Symbol('descricao');",
      "descricaoDoExemplo": "Cria um novo símbolo com a descrição 'descricao'."
    },
    {
      "objeto": 16,
      "função": "BigInt",
      "oQueFaz": "Representa um número inteiro maior que 2^53-1.",
      "exemplo": "const bigInt = BigInt(9007199254740991);",
      "descricaoDoExemplo": "Cria um novo valor BigInt com o número 9007199254740991."
    },
    {
      "objeto": 17,
      "função": "Proxy",
      "oQueFaz": "Permite criar um objeto que controla o acesso a outro objeto.",
      "exemplo": "const proxy = new Proxy(target, handler);",
      "descricaoDoExemplo": "Cria um novo proxy que envolve o objeto 'target' e usa o 'handler' para interceptar as operações."
    },
    {
      "objeto": 18,
      "função": "Reflect",
      "oQueFaz": "Fornece métodos para interceptar operações de objetos.",
      "exemplo": "const obj = { nome: 'Exemplo' }; Reflect.get(obj, 'nome');",
      "descricaoDoExemplo": "Obtém o valor da propriedade 'nome' do objeto 'obj' usando o método 'Reflect.get'."
    },
    {
      "objeto": 19,
      "função": "Promise",
      "oQueFaz": "Representa um valor que pode estar disponível agora, no futuro ou nunca.",
      "exemplo": "const promise = new Promise((resolve, reject) => { /* código assíncrono */ });",
      "descricaoDoExemplo": "Cria uma nova promessa que executa código assíncrono e chama a função 'resolve' ou 'reject' dependendo do resultado."
    },
    {
      "objeto": 20,
      "função": "Generator",
      "oQueFaz": "Uma função especial que pode ser pausada e retomada.",
      "exemplo": "function* generator() { /* código do gerador */ }",
      "descricaoDoExemplo": "Declara uma nova função geradora chamada 'generator'."
    },
    {
      "objeto": 21,
      "função": "AsyncFunction",
      "oQueFaz": "Representa uma função assíncrona.",
      "exemplo": "async function myAsyncFunction() { /* código assíncrono */ }",
      "descricaoDoExemplo": "Declara uma nova função assíncrona chamada 'myAsyncFunction'."
    },
    {
      "objeto": 22,
      "função": "GeneratorFunction",
      "oQueFaz": "Representa uma função geradora.",
      "exemplo": "function* myGeneratorFunction() { /* código do gerador */ }",
      "descricaoDoExemplo": "Declara uma nova função geradora chamada 'myGeneratorFunction'."
    },
    {
      "objeto": 23,
      "função": "AsyncGeneratorFunction",
      "oQueFaz": "Representa uma função geradora assíncrona.",
      "exemplo": "async function* myAsyncGeneratorFunction() { /* código assíncrono do gerador */ }",
      "descricaoDoExemplo": "Declara uma nova função geradora assíncrona chamada 'myAsyncGeneratorFunction'."
    },
    {
      "objeto": 24,
      "função": "ArrayBuffer",
      "oQueFaz": "Representa um buffer de memória genérico.",
      "exemplo": "const buffer = new ArrayBuffer(16);",
      "descricaoDoExemplo": "Cria um novo buffer de memória com tamanho de 16 bytes."
    },
    {
      "objeto": 25,
      "função": "SharedArrayBuffer",
      "oQueFaz": "Representa um buffer de memória compartilhado entre workers.",
      "exemplo": "const sharedBuffer = new SharedArrayBuffer(16);",
      "descricaoDoExemplo": "Cria um novo buffer de memória compartilhado com tamanho de 16 bytes."
    },
    {
      "objeto": 26,
      "função": "DataView",
      "oQueFaz": "Permite a leitura e escrita de dados em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new DataView(buffer);",
      "descricaoDoExemplo": "Cria um novo DataView que manipula o buffer de memória."
    },
    {
      "objeto": 27,
      "função": "Atomics",
      "oQueFaz": "Fornece operações atômicas para buffers de memória compartilhada.",
      "exemplo": "const buffer = new SharedArrayBuffer(16);\nAtomics.add(buffer, 0, 10);",
      "descricaoDoExemplo": "Adiciona 10 ao valor na posição 0 do buffer de memória compartilhada usando a função 'Atomics.add'."
    },
    {
      "objeto": 28,
      "função": "JSON",
      "oQueFaz": "Fornece métodos para trabalhar com notação JSON.",
      "exemplo": "const json = JSON.stringify({ nome: 'Exemplo' });",
      "descricaoDoExemplo": "Converte o objeto JavaScript em uma string JSON usando o método 'JSON.stringify'."
    },
    {
      "objeto": 29,
      "função": "Math",
      "oQueFaz": "Fornece funções matemáticas e constantes.",
      "exemplo": "const raizQuadrada = Math.sqrt(25);",
      "descricaoDoExemplo": "Calcula a raiz quadrada de 25 usando o método 'Math.sqrt'."
    },
    {
      "objeto": 30,
      "função": "Date",
      "oQueFaz": "Representa uma data e hora.",
      "exemplo": "const dataAtual = new Date();",
      "descricaoDoExemplo": "Cria uma nova instância da data atual."
    },
    {
      "objeto": 31,
      "função": "RegExp",
      "oQueFaz": "Representa uma expressão regular para correspondência de padrões em strings.",
      "exemplo": "const regex = /ab+c/;",
      "descricaoDoExemplo": "Cria uma nova expressão regular para encontrar o padrão 'ab+c'."
    },
    {
      "objeto": 32,
      "função": "MapIterator",
      "oQueFaz": "Representa um iterador para os pares chave-valor de um objeto Map.",
      "exemplo": "const map = new Map();\nmap.set('chave1', 'valor1');\nconst iterator = map.entries();",
      "descricaoDoExemplo": "Obtém um iterador para os pares chave-valor do mapa usando o método 'entries'."
    },
    {
      "objeto": 33,
      "função": "SetIterator",
      "oQueFaz": "Representa um iterador para os valores de um objeto Set.",
      "exemplo": "const set = new Set();\nset.add('valor1');\nconst iterator = set.values();",
      "descricaoDoExemplo": "Obtém um iterador para os valores do conjunto usando o método 'values'."
    },
    {
      "objeto": 34,
      "função": "StringIterator",
      "oQueFaz": "Representa um iterador para os caracteres de uma string.",
      "exemplo": "const str = 'Exemplo';\nconst iterator = str[Symbol.iterator]();",
      "descricaoDoExemplo": "Obtém um iterador para os caracteres da string usando o método 'Symbol.iterator'."
    },
    {
      "objeto": 35,
      "função": "GeneratorFunctionIterator",
      "oQueFaz": "Representa um iterador para os valores retornados por uma função geradora.",
      "exemplo": "function* generator() { yield 1; yield 2; }\nconst iterator = generator();",
      "descricaoDoExemplo": "Obtém um iterador para os valores retornados pela função geradora 'generator'."
    },
    {
      "objeto": 36,
      "função": "AsyncFunctionIterator",
      "oQueFaz": "Representa um iterador para os valores retornados por uma função assíncrona.",
      "exemplo": "async function myAsyncFunction() { return 'valor'; }\nconst iterator = myAsyncFunction();",
      "descricaoDoExemplo": "Obtém um iterador para os valores retornados pela função assíncrona 'myAsyncFunction'."
    },
    {
      "objeto": 37,
      "função": "AsyncGeneratorFunctionIterator",
      "oQueFaz": "Representa um iterador para os valores retornados por uma função geradora assíncrona.",
      "exemplo": "async function* generator() { yield 1; yield 2; }\nconst iterator = generator();",
      "descricaoDoExemplo": "Obtém um iterador para os valores retornados pela função geradora assíncrona 'generator'."
    },
    {
      "objeto": 38,
      "função": "ArrayBufferView",
      "oQueFaz": "Representa uma visualização de um buffer de memória genérico.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Uint8Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Uint8Array para o buffer de memória."
    },
    {
      "objeto": 39,
      "função": "Int8Array",
      "oQueFaz": "Representa uma visualização de inteiros de 8 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Int8Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Int8Array para o buffer de memória."
    },
    {
      "objeto": 40,
      "função": "Uint8Array",
      "oQueFaz": "Representa uma visualização de inteiros sem sinal de 8 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Uint8Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Uint8Array para o buffer de memória."
    },
    {
      "objeto": 41,
      "função": "Uint8ClampedArray",
      "oQueFaz": "Representa uma visualização de inteiros sem sinal de 8 bits (clamped) em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Uint8ClampedArray(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Uint8ClampedArray para o buffer de memória."
    },
    {
      "objeto": 42,
      "função": "Int16Array",
      "oQueFaz": "Representa uma visualização de inteiros de 16 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Int16Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Int16Array para o buffer de memória."
    },
    {
      "objeto": 43,
      "função": "Uint16Array",
      "oQueFaz": "Representa uma visualização de inteiros sem sinal de 16 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Uint16Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Uint16Array para o buffer de memória."
    },
    {
      "objeto": 44,
      "função": "Int32Array",
      "oQueFaz": "Representa uma visualização de inteiros de 32 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Int32Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Int32Array para o buffer de memória."
    },
    {
      "objeto": 45,
      "função": "Uint32Array",
      "oQueFaz": "Representa uma visualização de inteiros sem sinal de 32 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Uint32Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Uint32Array para o buffer de memória."
    },
    {
      "objeto": 46,
      "função": "Float32Array",
      "oQueFaz": "Representa uma visualização de números de ponto flutuante de 32 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Float32Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Float32Array para o buffer de memória."
    },
    {
      "objeto": 47,
      "função": "Float64Array",
      "oQueFaz": "Representa uma visualização de números de ponto flutuante de 64 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new Float64Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização Float64Array para o buffer de memória."
    },
    {
      "objeto": 48,
      "função": "BigInt64Array",
      "oQueFaz": "Representa uma visualização de inteiros de 64 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new BigInt64Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização BigInt64Array para o buffer de memória."
    },
    {
      "objeto": 49,
      "função": "BigUint64Array",
      "oQueFaz": "Representa uma visualização de inteiros sem sinal de 64 bits em um buffer de memória.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new BigUint64Array(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização BigUint64Array para o buffer de memória."
    },
    {
      "objeto": 50,
      "função": "Map",
      "oQueFaz": "Representa uma coleção de pares chave-valor.",
      "exemplo": "const map = new Map();",
      "descricaoDoExemplo": "Cria uma nova instância do objeto Map."
    },
    {
      "objeto": 51,
      "função": "Set",
      "oQueFaz": "Representa uma coleção de valores únicos.",
      "exemplo": "const set = new Set();",
      "descricaoDoExemplo": "Cria uma nova instância do objeto Set."
    },
    {
      "objeto": 52,
      "função": "WeakMap",
      "oQueFaz": "Representa uma coleção de pares chave-valor com chaves fracamente referenciadas.",
      "exemplo": "const weakMap = new WeakMap();",
      "descricaoDoExemplo": "Cria uma nova instância do objeto WeakMap."
    },
    {
      "objeto": 53,
      "função": "WeakSet",
      "oQueFaz": "Representa uma coleção de valores únicos com valores fracamente referenciados.",
      "exemplo": "const weakSet = new WeakSet();",
      "descricaoDoExemplo": "Cria uma nova instância do objeto WeakSet."
    },
    {
      "objeto": 54,
      "função": "Proxy",
      "oQueFaz": "Permite a criação de objetos com comportamento personalizado de interceptação de operações.",
      "exemplo": "const proxy = new Proxy(target, handler);",
      "descricaoDoExemplo": "Cria um novo objeto proxy que envolve o objeto 'target' com as funções definidas no 'handler' para interceptar operações."
    },
    {
      "objeto": 55,
      "função": "Reflect",
      "oQueFaz": "Fornece métodos para interceptar operações de objetos.",
      "exemplo": "const obj = { nome: 'Exemplo' }; Reflect.get(obj, 'nome');",
      "descricaoDoExemplo": "Obtém o valor da propriedade 'nome' do objeto 'obj' usando o método 'Reflect.get'."
    },
    {
      "objeto": 56,
      "função": "Promise",
      "oQueFaz": "Representa um valor que pode estar disponível agora, no futuro ou nunca.",
      "exemplo": "const promise = new Promise((resolve, reject) => { /* código assíncrono */ });",
      "descricaoDoExemplo": "Cria uma nova promessa que executa código assíncrono e chama a função 'resolve' ou 'reject' dependendo do resultado."
    },
    {
      "objeto": 57,
      "função": "Generator",
      "oQueFaz": "Uma função especial que pode ser pausada e retomada.",
      "exemplo": "function* generator() { /* código do gerador */ }",
      "descricaoDoExemplo": "Declara uma nova função geradora chamada 'generator'."
    },
    {
      "objeto": 58,
      "função": "AsyncFunction",
      "oQueFaz": "Representa uma função assíncrona.",
      "exemplo": "async function myAsyncFunction() { /* código assíncrono */ }",
      "descricaoDoExemplo": "Declara uma nova função assíncrona chamada 'myAsyncFunction'."
    },
    {
      "objeto": 59,
      "função": "AsyncGeneratorFunction",
      "oQueFaz": "Representa uma função geradora assíncrona.",
      "exemplo": "async function* generator() { /* código do gerador assíncrono */ }",
      "descricaoDoExemplo": "Declara uma nova função geradora assíncrona chamada 'generator'."
    },
    {
      "objeto": 60,
      "função": "Atomics",
      "oQueFaz": "Fornece operações atômicas para buffers de memória compartilhada.",
      "exemplo": "const buffer = new SharedArrayBuffer(16);\nAtomics.add(buffer, 0, 10);",
      "descricaoDoExemplo": "Adiciona 10 ao valor na posição 0 do buffer de memória compartilhada usando a função 'Atomics.add'."
    },
    {
      "objeto": 61,
      "função": "SharedArrayBuffer",
      "oQueFaz": "Representa um buffer de memória compartilhada.",
      "exemplo": "const buffer = new SharedArrayBuffer(16);",
      "descricaoDoExemplo": "Cria um novo buffer de memória compartilhada com um tamanho de 16 bytes."
    },
    {
      "objeto": 62,
      "função": "DataView",
      "oQueFaz": "Fornece uma interface para a leitura e escrita de dados em um buffer de memória genérico.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new DataView(buffer);",
      "descricaoDoExemplo": "Cria uma nova visualização DataView para o buffer de memória."
    },
    {
      "objeto": 63,
      "função": "Intl",
      "oQueFaz": "Fornece suporte para internacionalização (i18n) de texto, números, datas e horas.",
      "exemplo": "const numberFormat = new Intl.NumberFormat('pt-BR');\nconst formattedNumber = numberFormat.format(12345.67);",
      "descricaoDoExemplo": "Cria uma nova instância de NumberFormat para formatar o número 12345.67 de acordo com a localidade 'pt-BR'."
    },
    {
      "objeto": 64,
      "função": "WebAssembly",
      "oQueFaz": "Fornece recursos para trabalhar com a linguagem de programação WebAssembly.",
      "exemplo": "const importObject = { imports: { alert: value => console.log(value) } };\nWebAssembly.instantiateStreaming(fetch('module.wasm'), importObject);",
      "descricaoDoExemplo": "Carrega e instancia um módulo WebAssembly a partir de um arquivo 'module.wasm' e um objeto de importação 'importObject'."
    },
    {
      "objeto": 65,
      "função": "BigInt",
      "oQueFaz": "Representa números inteiros arbitrariamente grandes.",
      "exemplo": "const bigNumber = BigInt('123456789012345678901234567890');",
      "descricaoDoExemplo": "Cria uma nova instância de BigInt com o valor '123456789012345678901234567890'."
    },
    {
      "objeto": 66,
      "função": "ProxyHandler",
      "oQueFaz": "Uma coleção de manipuladores de armadilhas (traps) que definem o comportamento personalizado de um objeto proxy.",
      "exemplo": "const handler = { get: function(target, prop) { return 'Propriedade: ' + prop; } };",
      "descricaoDoExemplo": "Cria um novo manipulador de proxy com um trap 'get' que retorna uma mensagem personalizada para cada propriedade acessada."
    },
    {
      "objeto": 67,
      "função": "GeneratorFunction",
      "oQueFaz": "Representa uma função construtora para objetos Generator.",
      "exemplo": "function* generator() { /* código do gerador */ }\nconst generatorFunction = Object.getPrototypeOf(generator).constructor;",
      "descricaoDoExemplo": "Obtém a função construtora para objetos Generator a partir de uma função geradora 'generator'."
    },
    {
      "objeto": 68,
      "função": "AsyncGeneratorFunction",
      "oQueFaz": "Representa uma função construtora para objetos Generator assíncronos.",
      "exemplo": "async function* generator() { /* código do gerador assíncrono */ }\nconst asyncGeneratorFunction = Object.getPrototypeOf(generator).constructor;",
      "descricaoDoExemplo": "Obtém a função construtora para objetos Generator assíncronos a partir de uma função geradora assíncrona 'generator'."
    },
    {
      "objeto": 69,
      "função": "GeneratorObject",
      "oQueFaz": "Representa uma instância de um objeto Generator.",
      "exemplo": "function* generator() { /* código do gerador */ }\nconst generatorObject = generator();",
      "descricaoDoExemplo": "Cria uma nova instância de um objeto Generator a partir da função geradora 'generator'."
    },
    {
      "objeto": 70,
      "função": "AsyncGeneratorObject",
      "oQueFaz": "Representa uma instância de um objeto Generator assíncrono.",
      "exemplo": "async function* generator() { /* código do gerador assíncrono */ }\nconst asyncGeneratorObject = generator();",
      "descricaoDoExemplo": "Cria uma nova instância de um objeto Generator assíncrono a partir da função geradora assíncrona 'generator'."
    },
    {
      "objeto": 71,
      "função": "PromisePrototype",
      "oQueFaz": "O protótipo para objetos Promise.",
      "exemplo": "const promise = new Promise(() => {});\nconst promisePrototype = Object.getPrototypeOf(promise);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos Promise a partir de uma instância de Promise 'promise'."
    },
    {
      "objeto": 72,
      "função": "AsyncFunctionPrototype",
      "oQueFaz": "O protótipo para objetos AsyncFunction.",
      "exemplo": "async function myAsyncFunction() { /* código assíncrono */ }\nconst asyncFunctionPrototype = Object.getPrototypeOf(myAsyncFunction);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos AsyncFunction a partir de uma função assíncrona 'myAsyncFunction'."
    },
    {
      "objeto": 73,
      "função": "AsyncGeneratorFunctionPrototype",
      "oQueFaz": "O protótipo para objetos AsyncGeneratorFunction.",
      "exemplo": "async function* generator() { /* código do gerador assíncrono */ }\nconst asyncGeneratorFunctionPrototype = Object.getPrototypeOf(generator);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos AsyncGeneratorFunction a partir de uma função geradora assíncrona 'generator'."
    },
    {
      "objeto": 74,
      "função": "AsyncGeneratorPrototype",
      "oQueFaz": "O protótipo para objetos AsyncGenerator.",
      "exemplo": "async function* generator() { /* código do gerador assíncrono */ }\nconst asyncGeneratorObject = generator();\nconst asyncGeneratorPrototype = Object.getPrototypeOf(asyncGeneratorObject);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos AsyncGenerator a partir de uma instância de um objeto Generator assíncrono 'asyncGeneratorObject'."
    },
    {
      "objeto": 75,
      "função": "AtomicsPrototype",
      "oQueFaz": "O protótipo para objetos Atomics.",
      "exemplo": "const buffer = new SharedArrayBuffer(16);\nconst atomicsPrototype = Object.getPrototypeOf(Atomics);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos Atomics a partir do próprio objeto Atomics."
    },
    {
      "objeto": 76,
      "função": "SharedArrayBufferPrototype",
      "oQueFaz": "O protótipo para objetos SharedArrayBuffer.",
      "exemplo": "const buffer = new SharedArrayBuffer(16);\nconst sharedArrayBufferPrototype = Object.getPrototypeOf(buffer);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos SharedArrayBuffer a partir de uma instância de SharedArrayBuffer 'buffer'."
    },
    {
      "objeto": 77,
      "função": "DataViewPrototype",
      "oQueFaz": "O protótipo para objetos DataView.",
      "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new DataView(buffer);\nconst dataViewPrototype = Object.getPrototypeOf(view);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos DataView a partir de uma instância de DataView 'view'."
    },
    {
      "objeto": 78,
      "função": "IntlPrototype",
      "oQueFaz": "O protótipo para objetos Intl.",
      "exemplo": "const numberFormat = new Intl.NumberFormat('pt-BR');\nconst intlPrototype = Object.getPrototypeOf(numberFormat);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos Intl a partir de uma instância de NumberFormat 'numberFormat'."
    },
    {
      "objeto": 79,
      "função": "WebAssemblyPrototype",
      "oQueFaz": "O protótipo para objetos WebAssembly.",
      "exemplo": "const module = new WebAssembly.Module();\nconst webAssemblyPrototype = Object.getPrototypeOf(WebAssembly);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos WebAssembly a partir do próprio objeto WebAssembly."
    },
    {
      "objeto": 80,
      "função": "BigIntPrototype",
      "oQueFaz": "O protótipo para objetos BigInt.",
      "exemplo": "const bigNumber = BigInt('123456789012345678901234567890');\nconst bigIntPrototype = Object.getPrototypeOf(bigNumber);",
      "descricaoDoExemplo": "Obtém o protótipo para objetos BigInt a partir de uma instância de BigInt 'bigNumber'."
    },
    {
      "objeto": 81,
      "função": "ProxyRevocable",
      "oQueFaz": "Cria um objeto Proxy revogável.",
      "exemplo": "const { proxy, revoke } = Proxy.revocable(target, handler);",
      "descricaoDoExemplo": "Cria um novo objeto Proxy revogável que envolve o objeto 'target' com as funções definidas no 'handler' para interceptar operações, e retorna o objeto proxy e uma função de revogação."
    },
    {
      "objeto": 82,
      "função": "ReflectApply",
      "oQueFaz": "Chama uma função com um dado objeto this e argumentos.",
      "exemplo": "const result = Reflect.apply(func, thisArg, args);",
      "descricaoDoExemplo": "Chama a função 'func' com o objeto 'thisArg' como contexto e os argumentos fornecidos em 'args', e retorna o resultado da chamada."
    },
    {
      "objeto": 83,
      "função": "ReflectConstruct",
      "oQueFaz": "Cria uma nova instância de um objeto usando um construtor e argumentos.",
      "exemplo": "const instance = Reflect.construct(constructor, args);",
      "descricaoDoExemplo": "Cria uma nova instância do objeto usando o construtor 'constructor' e os argumentos fornecidos em 'args', e retorna a instância criada."
    },
    {
      "objeto": 84,
      "função": "ReflectDefineProperty",
      "oQueFaz": "Define uma propriedade em um objeto.",
      "exemplo": "const success = Reflect.defineProperty(target, propertyKey, attributes);",
      "descricaoDoExemplo": "Define uma propriedade com a chave 'propertyKey' e os atributos fornecidos em 'attributes' no objeto 'target', e retorna um booleano indicando o sucesso da operação."
    },
    {
      "objeto": 85,
      "função": "ReflectDeleteProperty",
      "oQueFaz": "Remove uma propriedade de um objeto.",
      "exemplo": "const success = Reflect.deleteProperty(target, propertyKey);",
      "descricaoDoExemplo": "Remove a propriedade com a chave 'propertyKey' do objeto 'target', e retorna um booleano indicando o sucesso da operação."
    },
    {
      "objeto": 86,
      "função": "ReflectGet",
      "oQueFaz": "Obtém o valor de uma propriedade de um objeto.",
      "exemplo": "const value = Reflect.get(target, propertyKey, receiver);",
      "descricaoDoExemplo": "Obtém o valor da propriedade com a chave 'propertyKey' do objeto 'target', e retorna o valor obtido."
    },
    {
      "objeto": 87,
      "função": "ReflectGetOwnPropertyDescriptor",
      "oQueFaz": "Retorna os atributos de uma propriedade de um objeto.",
      "exemplo": "const descriptor = Reflect.getOwnPropertyDescriptor(target, propertyKey);",
      "descricaoDoExemplo": "Obtém os atributos da propriedade com a chave 'propertyKey' do objeto 'target', e retorna um objeto de descrição de propriedade."
    },
    {
      "objeto": 88,
      "função": "ReflectGetPrototypeOf",
      "oQueFaz": "Retorna o protótipo de um objeto.",
      "exemplo": "const prototype = Reflect.getPrototypeOf(obj);",
      "descricaoDoExemplo": "Obtém o protótipo do objeto 'obj', e retorna o protótipo obtido."
    },
    {
      "objeto": 89,
      "função": "ReflectHas",
      "oQueFaz": "Verifica se um objeto possui uma determinada propriedade.",
      "exemplo": "const hasProperty = Reflect.has(target, propertyKey);",
      "descricaoDoExemplo": "Verifica se o objeto 'target' possui a propriedade com a chave 'propertyKey', e retorna um booleano indicando o resultado."
    },
    {
      "objeto": 90,
      "função": "ReflectIsExtensible",
      "oQueFaz": "Verifica se um objeto é extensível.",
      "exemplo": "const isExtensible = Reflect.isExtensible(obj);",
      "descricaoDoExemplo": "Verifica se o objeto 'obj' é extensível, e retorna um booleano indicando o resultado."
    },
    {
      "objeto": 91,
      "função": "ReflectOwnKeys",
      "oQueFaz": "Retorna as chaves de propriedade próprias de um objeto.",
      "exemplo": "const keys = Reflect.ownKeys(obj);",
      "descricaoDoExemplo": "Obtém todas as chaves de propriedade próprias do objeto 'obj', e retorna um array contendo as chaves obtidas."
    },
    {
      "objeto": 92,
      "função": "ReflectPreventExtensions",
      "oQueFaz": "Torna um objeto não extensível.",
      "exemplo": "const success = Reflect.preventExtensions(obj);",
      "descricaoDoExemplo": "Torna o objeto 'obj' não extensível, e retorna um booleano indicando o sucesso da operação."
    },
    {
      "objeto": 93,
      "função": "ReflectSet",
      "oQueFaz": "Define o valor de uma propriedade em um objeto.",
      "exemplo": "const success = Reflect.set(target, propertyKey, value, receiver);",
      "descricaoDoExemplo": "Define o valor da propriedade com a chave 'propertyKey' no objeto 'target' como 'value', e retorna um booleano indicando o sucesso da operação."
    },
    {
      "objeto": 94,
      "função": "ReflectSetPrototypeOf",
      "oQueFaz": "Define o protótipo de um objeto.",
      "exemplo": "const success = Reflect.setPrototypeOf(obj, prototype);",
      "descricaoDoExemplo": "Define o protótipo do objeto 'obj' como 'prototype', e retorna um booleano indicando o sucesso da operação."
    },
    {
      "objeto": 95,
      "função": "JSON",
      "oQueFaz": "Fornece métodos para trabalhar com JSON (JavaScript Object Notation).",
      "exemplo": "const obj = { name: 'John', age: 30 };\nconst jsonString = JSON.stringify(obj);",
      "descricaoDoExemplo": "Converte o objeto 'obj' em uma string JSON usando o método 'JSON.stringify'."
    },
    {
      "objeto": 96,
      "função": "EvalError.prototype",
      "oQueFaz": "Representa o protótipo para os objetos de erro EvalError.",
      "exemplo": "Não há um exemplo específico para EvalError.prototype.",
      "descricaoDoExemplo": "N/A"
      }
      ,
      {
      "objeto": 97,
      "função": "ReferenceError.prototype",
      "oQueFaz": "Representa o protótipo para os objetos de erro ReferenceError.",
      "exemplo": "Não há um exemplo específico para ReferenceError.prototype.",
      "descricaoDoExemplo": "N/A"
      }
      ,
      {
      "objeto": 98,
      "função": "console.assert",
      "oQueFaz": "Exibe uma mensagem de erro no console se a afirmação fornecida for falsa. Se for verdadeira, nada acontece.",
      "exemplo": "console.assert(2 + 2 === 5, '2 + 2 não é igual a 5!');",
      "descricaoDoExemplo": "Exibe a mensagem de erro no console, pois a afirmação '2 + 2 === 5' é falsa."
      }
      ,
      {
      "objeto": 99,
      "função": "console.clear",
      "oQueFaz": "Limpa o console do navegador ou do ambiente Node.js.",
      "exemplo": "console.clear();",
      "descricaoDoExemplo": "Limpa o console, removendo todas as mensagens e registros anteriores."
      }
      ,
      {
      "objeto": 100,
      "função": "console.count",
      "oQueFaz": "Registra o número de vezes que uma determinada expressão é avaliada.",
      "exemplo": "for (let i = 0; i < 5; i++) {\n console.count('Loop');\n}",
      "descricaoDoExemplo": "Registra o número de vezes que o loop é executado e exibe o contador correspondente no console."
      }
      ,
      {
      "objeto": 101,
      "função": "console.debug",
      "oQueFaz": "Exibe uma mensagem de depuração no console.",
      "exemplo": "console.debug('Mensagem de depuração.');",
      "descricaoDoExemplo": "Exibe a mensagem de depuração no console, geralmente usada para registrar informações detalhadas durante o processo de depuração."
      }
      ,
      {
      "objeto": 102,
      "função": "console.dir",
      "oQueFaz": "Exibe uma representação interativa de um objeto JavaScript no console.",
      "exemplo": "const obj = { name: 'John', age: 30 };\nconsole.dir(obj);",
      "descricaoDoExemplo": "Exibe uma representação interativa do objeto 'obj' no console, mostrando suas propriedades e valores."
      }
      ,
      {
      "objeto": 103,
      "função": "console.dirxml",
      "oQueFaz": "Exibe uma representação XML de um elemento HTML no console.",
      "exemplo": "const element = document.getElementById('myElement');\nconsole.dirxml(element);",
      "descricaoDoExemplo": "Exibe a representação XML do elemento HTML com o id 'myElement' no console."
      },
      {
        "objeto": 104,
        "função": "console.error",
        "oQueFaz": "Exibe uma mensagem de erro no console.",
        "exemplo": "console.error('Ocorreu um erro.');",
        "descricaoDoExemplo": "Exibe a mensagem de erro no console, geralmente usada para relatar erros durante a execução do programa."
        }
        ,
        {
        "objeto": 105,
        "função": "console.group",
        "oQueFaz": "Cria um novo grupo no console.",
        "exemplo": "console.group('Grupo 1');\nconsole.log('Mensagem 1');\nconsole.log('Mensagem 2');\nconsole.groupEnd();",
        "descricaoDoExemplo": "Cria um grupo chamado 'Grupo 1' no console e exibe duas mensagens dentro do grupo. O grupo é finalizado com o console.groupEnd()."
        }
        ,
        {
        "objeto": 106,
        "função": "console.groupCollapsed",
        "oQueFaz": "Cria um novo grupo no console, mas o grupo é inicialmente colapsado (oculto).",
        "exemplo": "console.groupCollapsed('Grupo 1');\nconsole.log('Mensagem 1');\nconsole.log('Mensagem 2');\nconsole.groupEnd();",
        "descricaoDoExemplo": "Cria um grupo chamado 'Grupo 1' no console, mas o grupo é inicialmente colapsado. As mensagens dentro do grupo não são exibidas até que o grupo seja expandido ou aberto."
        }
        ,
        {
        "objeto": 107,
        "função": "console.groupEnd",
        "oQueFaz": "Finaliza o grupo atual no console.",
        "exemplo": "console.group('Grupo 1');\nconsole.log('Mensagem 1');\nconsole.log('Mensagem 2');\nconsole.groupEnd();",
        "descricaoDoExemplo": "Cria um grupo chamado 'Grupo 1' no console, exibe duas mensagens dentro do grupo e finaliza o grupo com o console.groupEnd()."
        }
        ,
        {
        "objeto": 108,
        "função": "console.info",
        "oQueFaz": "Exibe uma mensagem informativa no console.",
        "exemplo": "console.info('Isso é uma mensagem informativa.');",
        "descricaoDoExemplo": "Exibe a mensagem informativa no console, geralmente usada para fornecer informações úteis ou dicas para o usuário."
        }
        ,
        {
        "objeto": 109,
        "função": "console.log",
        "oQueFaz": "Exibe uma mensagem no console.",
        "exemplo": "console.log('Isso é uma mensagem.');",
        "descricaoDoExemplo": "Exibe a mensagem no console, geralmente usada para exibir informações de depuração ou mensagens gerais."
        }
        ,
        {
        "objeto": 110,
        "função": "console.table",
        "oQueFaz": "Exibe dados tabulares como uma tabela no console.",
        "exemplo": "const data = [\n { name: 'John', age: 30 },\n { name: 'Jane', age: 25 }\n];\nconsole.table(data);",
        "descricaoDoExemplo": "Exibe os dados em forma de tabela no console, facilitando a visualização e análise de dados estruturados."
        },
        {
          "objeto": 111,
          "função": "console.time",
          "oQueFaz": "Inicia um temporizador no console.",
          "exemplo": "console.time('Tempo decorrido');\n// Código a ser medido\nconsole.timeEnd('Tempo decorrido');",
          "descricaoDoExemplo": "Inicia um temporizador chamado 'Tempo decorrido' no console, permite medir o tempo de execução de um bloco de código e exibe o tempo decorrido no console."
          }
          ,
          {
          "objeto": 112,
          "função": "console.timeEnd",
          "oQueFaz": "Finaliza um temporizador no console e exibe o tempo decorrido.",
          "exemplo": "console.time('Tempo decorrido');\n// Código a ser medido\nconsole.timeEnd('Tempo decorrido');",
          "descricaoDoExemplo": "Finaliza o temporizador chamado 'Tempo decorrido' no console e exibe o tempo decorrido desde o início do temporizador."
          }
          ,
          {
          "objeto": 113,
          "função": "console.trace",
          "oQueFaz": "Exibe uma trace do call stack no console.",
          "exemplo": "function funcao1() {\n function funcao2() {\n console.trace();\n }\n funcao2();\n}\nfuncao1();",
          "descricaoDoExemplo": "Exibe uma trace do call stack no console, mostrando a sequência de chamadas de função que levaram à chamada atual."
          }
          ,
          {
          "objeto": 114,
          "função": "console.warn",
          "oQueFaz": "Exibe uma mensagem de aviso no console.",
          "exemplo": "console.warn('Isso é um aviso.');",
          "descricaoDoExemplo": "Exibe a mensagem de aviso no console, geralmente usada para destacar potenciais problemas ou comportamentos indesejados."
          }
          ,
          {
          "objeto": 115,
          "função": "Date",
          "oQueFaz": "Representa uma data e hora.",
          "exemplo": "const dataAtual = new Date();",
          "descricaoDoExemplo": "Cria um objeto Date que representa a data e hora atuais."
          }
          ,
          {
          "objeto": 116,
          "função": "JSON",
          "oQueFaz": "Fornece métodos para trabalhar com JSON (JavaScript Object Notation).",
          "exemplo": "const objeto = { nome: 'John', idade: 30 };\nconst jsonString = JSON.stringify(objeto);",
          "descricaoDoExemplo": "O método JSON.stringify converte um objeto JavaScript em uma string JSON, permitindo o armazenamento ou transmissão dos dados. JSON.parse faz o oposto, convertendo uma string JSON em um objeto JavaScript."
          }
          ,
          {
          "objeto": 117,
          "função": "Math",
          "oQueFaz": "Fornece funções matemáticas e constantes.",
          "exemplo": "const raizQuadrada = Math.sqrt(16);",
          "descricaoDoExemplo": "Acesse funções matemáticas como Math.sqrt para calcular a raiz quadrada de um número."
          }
          ,
          {
          "objeto": 118,
          "função": "Number",
          "oQueFaz": "Fornece métodos para trabalhar com números.",
          "exemplo": "const valor = Number('42');",
          "descricaoDoExemplo": "O construtor Number pode ser usado para converter um valor em um objeto do tipo número. O objeto Number também possui métodos úteis para trabalhar com números, como Number.toFixed para formatar um número com um número fixo de casas decimais."
          }
          ,
          {
          "objeto": 119,
          "função": "Object",
          "oQueFaz": "Fornece métodos para trabalhar com objetos.",
          "exemplo": "const objeto = { nome: 'John', idade: 30 };\nconst chaves = Object.keys(objeto);",
          "descricaoDoExemplo": "O método Object.keys retorna um array contendo as chaves de um objeto. O objeto Object também possui outros métodos úteis para manipulação de objetos, como Object.assign para copiar as propriedades de um objeto para outro."
          }
          ,
          {
          "objeto": 120,
          "função": "Promise",
          "oQueFaz": "Representa um valor que pode estar disponível no futuro.",
          "exemplo": "const promise = new Promise((resolve, reject) => {\n setTimeout(() => {\n resolve('Sucesso!');\n }, 2000);\n});",
          "descricaoDoExemplo": "Cria uma nova promise que representa um valor que pode estar disponível no futuro. A promise pode ser resolvida (com sucesso) usando a função resolve ou rejeitada (com erro) usando a função reject."
          }
          ,
          {
          "objeto": 121,
          "função": "RegExp",
          "oQueFaz": "Representa uma expressão regular para correspondência de padrões em strings.",
          "exemplo": "const regex = /[a-z]+/gi;\nconst resultado = 'Hello World'.match(regex);",
          "descricaoDoExemplo": "Cria um objeto RegExp que representa uma expressão regular. A expressão regular pode ser usada com métodos como match para encontrar correspondências de padrões em strings."
          }
          ,
          {
          "objeto": 122,
          "função": "String",
          "oQueFaz": "Fornece métodos para trabalhar com strings.",
          "exemplo": "const mensagem = 'Hello, world!';\nconst tamanho = mensagem.length;",
          "descricaoDoExemplo": "O objeto String possui métodos úteis para trabalhar com strings, como length para obter o tamanho da string e métodos como slice, substring ou replace para manipular o conteúdo da string."
          }
          ,
          {
          "objeto": 123,
          "função": "Symbol",
          "oQueFaz": "Representa um identificador único.",
          "exemplo": "const chave = Symbol('chave');",
          "descricaoDoExemplo": "Cria um novo símbolo com o identificador 'chave'. Símbolos são valores únicos e podem ser usados como chaves de propriedades de objetos para evitar conflitos."
          }
          ,
          {
          "objeto": 124,
          "função": "TypeError",
          "oQueFaz": "Representa um erro quando um valor não é do tipo esperado.",
          "exemplo": "throw new TypeError('Valor inválido.');",
          "descricaoDoExemplo": "Lança um erro do tipo TypeError com a mensagem 'Valor inválido.'. O TypeError é usado quando um valor não é do tipo esperado."
          }
          ,
          {
          "objeto": 125,
          "função": "URIError",
          "oQueFaz": "Representa um erro quando uma função URI (Uniform Resource Identifier) é usado de forma incorreta.",
          "exemplo": "throw new URIError('URI inválida.');",
          "descricaoDoExemplo": "Lança um erro do tipo URIError com a mensagem 'URI inválida.'. O URIError é usado quando uma função URI é usado de forma incorreta."
          },
          {
            "objeto": 126,
            "função": "WeakMap",
            "oQueFaz": "Representa uma coleção de pares chave/valor em que as chaves são fracamente referenciadas.",
            "exemplo": "const weakMap = new WeakMap();\nconst chave = {};\nweakMap.set(chave, 'valor');",
            "descricaoDoExemplo": "Cria uma nova instância de WeakMap, que é uma coleção de pares chave/valor em que as chaves são fracamente referenciadas. Isso significa que se a única referência à chave for do WeakMap, ela poderá ser removida da memória pelo coletor de lixo."
            }
            ,
            {
            "objeto": 127,
            "função": "WeakSet",
            "oQueFaz": "Representa uma coleção de objetos em que os objetos são fracamente referenciados.",
            "exemplo": "const weakSet = new WeakSet();\nconst objeto = {};\nweakSet.add(objeto);",
            "descricaoDoExemplo": "Cria uma nova instância de WeakSet, que é uma coleção de objetos em que os objetos são fracamente referenciados. Isso significa que se a única referência ao objeto for do WeakSet, ele poderá ser removido da memória pelo coletor de lixo."
            }
            ,
            {
            "objeto": 128,
            "função": "ArrayBuffer",
            "oQueFaz": "Representa um buffer de memória genérico.",
            "exemplo": "const buffer = new ArrayBuffer(16);",
            "descricaoDoExemplo": "Cria um novo ArrayBuffer com um tamanho fixo de 16 bytes. Um ArrayBuffer representa um buffer de memória genérico, que pode ser usado para armazenar dados binários de maneira eficiente."
            }
            ,
            {
            "objeto": 129,
            "função": "DataView",
            "oQueFaz": "Fornece métodos para ler e escrever dados em um ArrayBuffer.",
            "exemplo": "const buffer = new ArrayBuffer(16);\nconst view = new DataView(buffer);\nview.setInt32(0, 42);",
            "descricaoDoExemplo": "Cria uma nova instância de DataView associada a um ArrayBuffer. O DataView fornece métodos para ler e escrever dados em um ArrayBuffer, permitindo acesso mais flexível aos dados binários."
            }
            ,
            {
            "objeto": 130,
            "função": "Float32Array",
            "oQueFaz": "Representa uma matriz numérica de 32 bits em ponto flutuante.",
            "exemplo": "const array = new Float32Array(3);\narray[0] = 1.5;",
            "descricaoDoExemplo": "Cria uma nova instância de Float32Array com um comprimento de 3 elementos. O Float32Array representa uma matriz numérica de 32 bits em ponto flutuante, permitindo armazenar e manipular dados numéricos de ponto flutuante de forma eficiente."
            }
            ,
            {
            "objeto": 131,
            "função": "Float64Array",
            "oQueFaz": "Representa uma matriz numérica de 64 bits em ponto flutuante.",
            "exemplo": "const array = new Float64Array(3);\narray[0] = 1.5;",
            "descricaoDoExemplo": "Cria uma nova instância de Float64Array com um comprimento de 3 elementos. O Float64Array representa uma matriz numérica de 64 bits em ponto flutuante, permitindo armazenar e manipular dados numéricos de ponto flutuante de forma eficiente."
            }
            ,
            {
            "objeto": 132,
            "função": "Int8Array",
            "oQueFaz": "Representa uma matriz numérica de 8 bits com sinal.",
            "exemplo": "const array = new Int8Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Int8Array com um comprimento de 3 elementos. O Int8Array representa uma matriz numérica de 8 bits com sinal, permitindo armazenar e manipular dados numéricos com valores entre -128 e 127 de forma eficiente."
            }
            ,
            {
            "objeto": 133,
            "função": "Int16Array",
            "oQueFaz": "Representa uma matriz numérica de 16 bits com sinal.",
            "exemplo": "const array = new Int16Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Int16Array com um comprimento de 3 elementos. O Int16Array representa uma matriz numérica de 16 bits com sinal, permitindo armazenar e manipular dados numéricos com valores entre -32,768 e 32,767 de forma eficiente."
            }
            ,
            {
            "objeto": 134,
            "função": "Int32Array",
            "oQueFaz": "Representa uma matriz numérica de 32 bits com sinal.",
            "exemplo": "const array = new Int32Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Int32Array com um comprimento de 3 elementos. O Int32Array representa uma matriz numérica de 32 bits com sinal, permitindo armazenar e manipular dados numéricos com valores entre -2,147,483,648 e 2,147,483,647 de forma eficiente."
            }
            ,
            {
            "objeto": 135,
            "função": "Uint8Array",
            "oQueFaz": "Representa uma matriz numérica de 8 bits sem sinal.",
            "exemplo": "const array = new Uint8Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Uint8Array com um comprimento de 3 elementos. O Uint8Array representa uma matriz numérica de 8 bits sem sinal, permitindo armazenar e manipular dados numéricos com valores entre 0 e 255 de forma eficiente."
            }
            ,
            {
            "objeto": 136,
            "função": "Uint16Array",
            "oQueFaz": "Representa uma matriz numérica de 16 bits sem sinal.",
            "exemplo": "const array = new Uint16Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Uint16Array com um comprimento de 3 elementos. O Uint16Array representa uma matriz numérica de 16 bits sem sinal, permitindo armazenar e manipular dados numéricos com valores entre 0 e 65,535 de forma eficiente."
            }
            ,
            {
            "objeto": 137,
            "função": "Uint32Array",
            "oQueFaz": "Representa uma matriz numérica de 32 bits sem sinal.",
            "exemplo": "const array = new Uint32Array(3);\narray[0] = 42;",
            "descricaoDoExemplo": "Cria uma nova instância de Uint32Array com um comprimento de 3 elementos. O Uint32Array representa uma matriz numérica de 32 bits sem sinal, permitindo armazenar e manipular dados numéricos com valores entre 0 e 4,294,967,295 de forma eficiente."
            }
            ,
            {
            "objeto": 138,
            "função": "BigInt64Array",
            "oQueFaz": "Representa uma matriz numérica de 64 bits com sinal (BigInt).",
            "exemplo": "const array = new BigInt64Array(3);\narray[0] = 42n;",
            "descricaoDoExemplo": "Cria uma nova instância de BigInt64Array com um comprimento de 3 elementos. O BigInt64Array representa uma matriz numérica de 64 bits com sinal usando BigInt, permitindo armazenar e manipular dados numéricos com valores entre -(2^63) e (2^63)-1 de forma eficiente."
            }
            ,
            {
            "objeto": 139,
            "função": "BigUint64Array",
            "oQueFaz": "Representa uma matriz numérica de 64 bits sem sinal (BigInt).",
            "exemplo": "const array = new BigUint64Array(3);\narray[0] = 42n;",
            "descricaoDoExemplo": "Cria uma nova instância de BigUint64Array com um comprimento de 3 elementos. O BigUint64Array representa uma matriz numérica de 64 bits sem sinal usando BigInt, permitindo armazenar e manipular dados numéricos com valores entre 0 e (2^64)-1 de forma eficiente."
            }
            ,
            {
            "objeto": 140,
            "função": "Atomics",
            "oQueFaz": "Fornece operações atômicas para arrays tipados compartilhados.",
            "exemplo": "const buffer = new SharedArrayBuffer(16);\nAtomics.add(buffer, 0, 5);",
            "descricaoDoExemplo": "Cria um novo SharedArrayBuffer com um tamanho fixo de 16 bytes. O objeto Atomics fornece operações atômicas para realizar operações seguras em arrays tipados compartilhados, garantindo que as operações sejam executadas de forma atômica, sem interferência de outras threads."
            },
            {
              "objeto": 141,
              "função": "Proxy",
              "oQueFaz": "Permite criar um objeto proxy que intercepta operações básicas em outro objeto alvo.",
              "exemplo": "const target = { nome: 'João' };\nconst handler = {\n get: function(obj, prop) {\n console.log(Acessando a propriedade ${prop});\n return obj[prop];\n }\n};\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nome);",
              "descricaoDoExemplo": "Cria um objeto proxy que intercepta a operação de obtenção (get) de propriedades do objeto alvo. Quando uma propriedade é acessada, uma mensagem é exibida no console antes de retornar o valor da propriedade do objeto alvo."
              }
              ,
              {
              "objeto": 142,
              "função": "Reflect",
              "oQueFaz": "Fornece métodos estáticos que permitem que você trabalhe com metaprogramação em JavaScript.",
              "exemplo": "const obj = { nome: 'Maria' };\nReflect.defineProperty(obj, 'idade', { value: 25 });\nconsole.log(obj.idade);",
              "descricaoDoExemplo": "Usando o método estático Reflect.defineProperty, uma nova propriedade 'idade' é adicionada ao objeto 'obj' com o valor 25. Em seguida, o valor da propriedade 'idade' é exibido no console."
              }
              ,
              {
              "objeto": 143,
              "função": "Promise",
              "oQueFaz": "Representa a conclusão (ou falha) eventual de uma operação assíncrona e seu valor resultante.",
              "exemplo": "const promise = new Promise((resolve, reject) => {\n setTimeout(() => {\n resolve('Operação concluída com sucesso!');\n }, 2000);\n});\npromise.then((result) => {\n console.log(result);\n});",
              "descricaoDoExemplo": "Cria uma nova Promise que representa uma operação assíncrona que será concluída com sucesso após 2 segundos. Em seguida, é definido um manipulador (callback) usando o método then, que será executado quando a Promise for resolvida com sucesso. O valor resultante da Promise é exibido no console."
              }
              ,
              {
              "objeto": 144,
              "função": "AsyncFunction",
              "oQueFaz": "Representa uma função assíncrona.",
              "exemplo": "const minhaFuncaoAssincrona = async () => {\n console.log('Executando função assíncrona');\n return 42;\n};",
              "descricaoDoExemplo": "Cria uma função assíncrona chamada 'minhaFuncaoAssincrona' que exibe uma mensagem no console e retorna o valor 42. As funções assíncronas permitem escrever código assíncrono de forma mais concisa e legível, utilizando a palavra-chave 'async' e a sintaxe 'await' para aguardar a resolução de Promises."
              }
              ,
              {
              "objeto": 145,
              "função": "GeneratorFunction",
              "oQueFaz": "Representa uma função geradora.",
              "exemplo": "function* meuGerador() {\n yield 1;\n yield 2;\n yield 3;\n}",
              "descricaoDoExemplo": "Define uma função geradora chamada 'meuGerador' que utiliza a sintaxe de função com asterisco (*). A função geradora retorna um objeto iterável que pode ser percorrido sequencialmente usando a palavra-chave 'yield', retornando um valor a cada iteração."
              },
              {
                "objeto": 146,
                "função": "Map",
                "oQueFaz": "Armazena pares de chave-valor e permite a recuperação eficiente dos valores com base na chave.",
                "exemplo": "const mapa = new Map();\nmapa.set('chave1', 'valor1');\nmapa.set('chave2', 'valor2');\nconsole.log(mapa.get('chave1'));",
                "descricaoDoExemplo": "Cria um novo Mapa e adiciona os pares de chave-valor 'chave1: valor1' e 'chave2: valor2'. Em seguida, recupera o valor associado à chave 'chave1' usando o método get e o exibe no console."
                }
                ,
                {
                "objeto": 147,
                "função": "Set",
                "oQueFaz": "Armazena valores únicos de qualquer tipo, permitindo a verificação eficiente de existência de um valor específico.",
                "exemplo": "const conjunto = new Set();\nconjunto.add(1);\nconjunto.add(2);\nconjunto.add(3);\nconsole.log(conjunto.has(2));",
                "descricaoDoExemplo": "Cria um novo Conjunto e adiciona os valores 1, 2 e 3. Em seguida, verifica se o Conjunto contém o valor 2 usando o método has e exibe o resultado no console."
                }
                ,
                {
                "objeto": 148,
                "função": "WeakMap",
                "oQueFaz": "Armazena pares de chave-valor de forma fraca, permitindo que as chaves sejam coletadas pelo coletor de lixo se não forem mais referenciadas.",
                "exemplo": "const mapaFraco = new WeakMap();\nconst objetoChave = {};\nmapaFraco.set(objetoChave, 'valor');\nconsole.log(mapaFraco.get(objetoChave));",
                "descricaoDoExemplo": "Cria um novo WeakMap e adiciona o par de chave-valor 'objetoChave: valor'. Em seguida, recupera o valor associado à chave 'objetoChave' usando o método get e o exibe no console. Se a única referência ao objetoChave for através do WeakMap, o objetoChave pode ser coletado pelo coletor de lixo."
                }
                ,
                {
                "objeto": 149,
                "função": "WeakSet",
                "oQueFaz": "Armazena objetos de forma fraca, permitindo que os objetos sejam coletados pelo coletor de lixo se não forem mais referenciados.",
                "exemplo": "const conjuntoFraco = new WeakSet();\nconst objeto = {};\nconjuntoFraco.add(objeto);\nconsole.log(conjuntoFraco.has(objeto));",
                "descricaoDoExemplo": "Cria um novo WeakSet e adiciona o objeto ao conjunto. Em seguida, verifica se o conjunto contém o objeto usando o método has e exibe o resultado no console. Se a única referência ao objeto for através do WeakSet, o objeto pode ser coletado pelo coletor de lixo."
                }
                ,
                {
                "objeto": 150,
                "função": "Intl",
                "oQueFaz": "Fornece recursos para internacionalização (i18n) e formatação de texto em diferentes idiomas.",
                "exemplo": "const numero = 12345.6789;\nconst formatoBR = new Intl.NumberFormat('pt-BR');\nconst formatoUS = new Intl.NumberFormat('en-US');\nconsole.log(formatoBR.format(numero));\nconsole.log(formatoUS.format(numero));",
                "descricaoDoExemplo": "Cria dois objetos Intl.NumberFormat, um para o formato de número brasileiro e outro para o formato de número americano. Em seguida, formata o número 12345.6789 de acordo com os formatos e exibe os resultados no console."
                },
                {
                  "objeto": 151,
                  "função": "Proxy",
                  "oQueFaz": "Permite personalizar o comportamento fundamental das operações em um objeto alvo.",
                  "exemplo": "const alvo = {\n nome: 'João',\n idade: 25\n};\nconst manipulador = {\n get: function (alvo, propriedade) {\n console.log(Acesso à propriedade ${propriedade});\n return alvo[propriedade];\n }\n};\nconst objetoProxy = new Proxy(alvo, manipulador);\nconsole.log(objetoProxy.nome);",
                  "descricaoDoExemplo": "Cria um objeto Proxy que envolve o objeto 'alvo' e intercepta a operação de acesso às propriedades. No exemplo, ao acessar a propriedade 'nome', uma mensagem é exibida no console antes de retornar o valor real."
                  }
                  ,
                  {
                  "objeto": 152,
                  "função": "Reflect",
                  "oQueFaz": "Fornece métodos estáticos para realizar operações em objetos, de forma similar aos métodos do Proxy.",
                  "exemplo": "const objeto = {};\nReflect.defineProperty(objeto, 'propriedade', { value: 'valor' });\nconsole.log(objeto.propriedade);",
                  "descricaoDoExemplo": "Cria um novo objeto vazio e usa o método estático Reflect.defineProperty para definir a propriedade 'propriedade' com o valor 'valor'. Em seguida, o valor da propriedade é acessado e exibido no console."
                  }
                  ,
                  {
                  "objeto": 153,
                  "função": "Promise",
                  "oQueFaz": "Representa um valor que pode estar disponível no futuro, podendo ser resolvido (valor disponível) ou rejeitado (ocorreu um erro).",
                  "exemplo": "const promessa = new Promise((resolve, reject) => {\n setTimeout(() => {\n resolve('Valor resolvido');\n }, 2000);\n});\npromessa.then((valor) => {\n console.log(valor);\n});",
                  "descricaoDoExemplo": "Cria uma nova Promise que será resolvida após 2 segundos. Quando a Promise é resolvida, o valor 'Valor resolvido' é passado para a função de callback definida no método then, que o exibe no console."
                  }
                  ,
                  {
                  "objeto": 154,
                  "função": "Async/await",
                  "oQueFaz": "Permite escrever código assíncrono de forma mais síncrona, facilitando o tratamento de Promises.",
                  "exemplo": "async function exemploAsync() {\n const valor = await promessa;\n console.log(valor);\n}\n\nexemploAsync();",
                  "descricaoDoExemplo": "Define uma função assíncrona chamada exemploAsync que utiliza a palavra-chave await para aguardar a resolução da Promise 'promessa'. Quando a Promise é resolvida, o valor é atribuído à constante 'valor' e exibido no console."
                  }
                  ,
                  {
                  "objeto": 155,
                  "função": "Generators",
                  "oQueFaz": "São funções especiais que podem ser pausadas e retomadas, permitindo a criação de iterações controladas.",
                  "exemplo": "function* contador() {\n let i = 0;\n while (true) {\n yield i;\n i++;\n }\n}\n\nconst gen = contador();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);",
                  "descricaoDoExemplo": "Define uma função generator chamada contador que gera sequencialmente os números inteiros. Cada vez que o método next é chamado no generator, o valor atual é retornado. O exemplo exibe os três primeiros valores gerados."
                  }
                  ,
                  {
                  "objeto": 156,
                  "função": "Maps",
                  "oQueFaz": "Estrutura de dados que permite associar valores a chaves, com suporte a qualquer tipo de dado como chave.",
                  "exemplo": "const mapa = new Map();\nconst chave1 = 'chave1';\nconst chave2 = {};\n\nmapa.set(chave1, 'valor1');\nmapa.set(chave2, 'valor2');\n\nconsole.log(mapa.get(chave1));\nconsole.log(mapa.get(chave2));",
                  "descricaoDoExemplo": "Cria um novo Map e associa os valores 'valor1' e 'valor2' às chaves 'chave1' e 'chave2', respectivamente. Em seguida, recupera os valores correspondentes às chaves e os exibe no console."
                  }
                  ,
                  {
                  "objeto": 157,
                  "função": "Sets",
                  "oQueFaz": "Estrutura de dados que armazena valores únicos, eliminando duplicatas automaticamente.",
                  "exemplo": "const conjunto = new Set();\n\nconjunto.add('valor1');\nconjunto.add('valor2');\nconjunto.add('valor2');\n\nconsole.log(conjunto.size);\nconsole.log(conjunto.has('valor1'));\nconsole.log(conjunto.has('valor3'));\n\nconjunto.delete('valor2');\nconsole.log(conjunto.size);",
                  "descricaoDoExemplo": "Cria um novo Set e adiciona os valores 'valor1' e 'valor2'. Como 'valor2' é duplicado, ele é eliminado automaticamente. O exemplo exibe o tamanho do conjunto, verifica se ele contém certos valores e remove um valor específico."
                  }
                  ,
                  {
                  "objeto": 158,
                  "função": "WeakMaps",
                  "oQueFaz": "Estrutura de dados semelhante a um Map, mas com algumas diferenças importantes, como a não prevenção da coleta de lixo para chaves.",
                  "exemplo": "const mapaFraco = new WeakMap();\nconst chave = {};\n\nmapaFraco.set(chave, 'valor');\nconsole.log(mapaFraco.get(chave));\n\nchave = null;\nconsole.log(mapaFraco.get(chave));",
                  "descricaoDoExemplo": "Cria um novo WeakMap e associa o valor 'valor' à chave 'chave'. Em seguida, o valor é recuperado utilizando a chave. Após atribuir null à variável chave, o valor associado é automaticamente coletado pelo garbage collector."
                  }
                  ,
                  {
                  "objeto": 159,
                  "função": "WeakSets",
                  "oQueFaz": "Estrutura de dados semelhante a um Set, mas com algumas diferenças importantes, como a não prevenção da coleta de lixo para os elementos.",
                  "exemplo": "const conjuntoFraco = new WeakSet();\nconst elemento1 = {};\nconst elemento2 = {};\n\nconjuntoFraco.add(elemento1);\nconjuntoFraco.add(elemento2);\n\nconsole.log(conjuntoFraco.has(elemento1));\nconsole.log(conjuntoFraco.has(elemento2));\n\nconjuntoFraco.delete(elemento2);\n\nconsole.log(conjuntoFraco.has(elemento2));",
                  "descricaoDoExemplo": "Cria um novo WeakSet e adiciona os elementos 'elemento1' e 'elemento2'. O exemplo verifica se o conjunto contém determinados elementos e remove o 'elemento2'. Após a remoção, o conjunto não contém mais o 'elemento2'."
                  }
                  ,
                  {
                  "objeto": 160,
                  "função": "ArrayBuffer",
                  "oQueFaz": "Armazena dados binários brutos em memória, sendo útil para manipulação de dados de baixo nível.",
                  "exemplo": "const buffer = new ArrayBuffer(8);\nconst view = new DataView(buffer);\n\nview.setInt8(0, 1);\nview.setInt8(1, 2);\nview.setInt8(2, 3);\nview.setInt8(3, 4);\nview.setInt8(4, 5);\nview.setInt8(5, 6);\nview.setInt8(6, 7);\nview.setInt8(7, 8);\n\nconsole.log(view.getInt8(0));\nconsole.log(view.getInt8(4));",
                  "descricaoDoExemplo": "Cria um novo ArrayBuffer com um tamanho fixo de 8 bytes. Em seguida, utiliza o DataView para ler e escrever dados no buffer. O exemplo exibe os valores armazenados nas posições 0 e 4 do buffer."
                  }
                  ,
                  {
                  "objeto": 161,
                  "função": "SharedArrayBuffer",
                  "oQueFaz": "Similar a ArrayBuffer, mas permite que múltiplos processos compartilhem o mesmo buffer de memória.",
                  "exemplo": "const buffer = new SharedArrayBuffer(8);\nconst view = new Int8Array(buffer);\n\nview[0] = 1;\nview[1] = 2;\nview[2] = 3;\nview[3] = 4;\nview[4] = 5;\nview[5] = 6;\nview[6] = 7;\nview[7] = 8;\n\nconsole.log(view[0]);\nconsole.log(view[4]);",
                  "descricaoDoExemplo": "Cria um novo SharedArrayBuffer com um tamanho fixo de 8 bytes. Em seguida, utiliza o Int8Array para ler e escrever dados no buffer compartilhado. O exemplo exibe os valores armazenados nas posições 0 e 4 do buffer."
                  }
                  ,
                  {
                  "objeto": 162,
                  "função": "Atomics",
                  "oQueFaz": "Fornece operações atômicas em Arrays e SharedArraysBuffers, garantindo que não sejam interrompidas por outras operações.",
                  "exemplo": "const buffer = new SharedArrayBuffer(4);\nconst view = new Int32Array(buffer);\n\nAtomics.store(view, 0, 42);\nconsole.log(Atomics.load(view, 0));",
                  "descricaoDoExemplo": "Cria um novo SharedArrayBuffer com um tamanho fixo de 4 bytes. Em seguida, utiliza o Int32Array e as operações atômicas do Atomics para armazenar e carregar o valor 42 na posição 0 do buffer compartilhado."
                  }
                  ,
                  {
                  "objeto": 163,
                  "função": "Intl",
                  "oQueFaz": "Fornece suporte para internacionalização, permitindo formatação de datas, números e moedas de acordo com as regras de cada região.",
                  "exemplo": "const data = new Date();\nconst formato = new Intl.DateTimeFormat('pt-BR');\n\nconsole.log(formato.format(data));",
                  "descricaoDoExemplo": "Cria uma nova instância de DateTimeFormat, especificando o local 'pt-BR'. Em seguida, formata a data atual de acordo com as regras de formatação do Brasil e exibe o resultado no console."
                  }
                  ,
                  {
                  "objeto": 164,
                  "função": "JSON",
                  "oQueFaz": "Fornece métodos para trabalhar com dados no formato JSON, incluindo serialização e desserialização.",
                  "exemplo": "const objeto = {\n nome: 'João',\n idade: 25\n};\n\nconst json = JSON.stringify(objeto);\nconsole.log(json);\n\nconst objetoNovo = JSON.parse(json);\nconsole.log(objetoNovo);",
                  "descricaoDoExemplo": "Cria um objeto 'objeto' com duas propriedades. Em seguida, utiliza o método JSON.stringify para serializá-lo em formato JSON e exibe o resultado no console. Depois, utiliza o método JSON.parse para desserializar o JSON em um novo objeto e o exibe no console."
                  }
                  ,
                  {
                  "objeto": 165,
                  "função": "Error",
                  "oQueFaz": "Representa um erro em tempo de execução, contendo informações sobre o erro ocorrido.",
                  "exemplo": "function dividir(a, b) {\n if (b === 0) {\n throw new Error('Divisão por zero não é permitida.');\n }\n return a / b;\n}\n\ntry {\n console.log(dividir(10, 0));\n} catch (erro) {\n console.log(erro.message);\n}",
                  "descricaoDoExemplo": "Define uma função 'dividir' que lança um erro se o segundo argumento for igual a zero. Em seguida, utiliza um bloco try/catch para tentar chamar a função dividir com argumentos válidos. Se ocorrer um erro, a mensagem de erro é capturada e exibida no console."
                  }
                  ,
                  {
                  "objeto": 166,
                  "função": "Math",
                  "oQueFaz": "Fornece métodos e constantes para realizar operações matemáticas.",
                  "exemplo": "console.log(Math.sqrt(16));\nconsole.log(Math.pow(2, 3));\nconsole.log(Math.random());",
                  "descricaoDoExemplo": "Calcula a raiz quadrada de 16 utilizando o método Math.sqrt. Em seguida, calcula 2 elevado à potência de 3 utilizando o método Math.pow. Por fim, gera um número aleatório entre 0 e 1 utilizando o método Math.random e o exibe no console."
                  }
                  ,
                  {
                  "objeto": 167,
                  "função": "RegExp",
                  "oQueFaz": "Representa uma expressão regular, utilizada para realizar busca e manipulação de padrões em strings.",
                  "exemplo": "const regex = /abc/;\nconsole.log(regex.test('abcde'));\nconsole.log(regex.exec('abcde'));\nconsole.log('abcde'.match(regex));",
                  "descricaoDoExemplo": "Cria uma expressão regular que procura o padrão 'abc'. Em seguida, testa se a string 'abcde' contém o padrão utilizando o método test. Também utiliza o método exec e o método match para encontrar todas as ocorrências do padrão na string."
                  }
                  ,
                  {
                  "objeto": 168,
                  "função": "Date",
                  "oQueFaz": "Representa uma data e hora, permitindo a manipulação de datas e cálculos relacionados.",
                  "exemplo": "const dataAtual = new Date();\nconsole.log(dataAtual);\n\nconst dataPersonalizada = new Date(2022, 0, 1);\nconsole.log(dataPersonalizada);\n\nconst timestamp = Date.now();\nconsole.log(timestamp);",
                  "descricaoDoExemplo": "Cria uma instância de Date que representa a data e hora atuais e a exibe no console. Em seguida, cria uma instância de Date personalizada que representa o primeiro dia do ano de 2022 e a exibe no console. Por fim, utiliza o método estático Date.now para obter o timestamp atual e o exibe no console."
                  }
                  ,
                  {
                  "objeto": 169,
                  "função": "Set",
                  "oQueFaz": "Estrutura de dados que armazena valores únicos, eliminando duplicatas automaticamente.",
                  "exemplo": "const conjunto = new Set();\n\nconjunto.add('valor1');\nconjunto.add('valor2');\nconjunto.add('valor2');\n\nconsole.log(conjunto.size);\nconsole.log(conjunto.has('valor1'));\nconsole.log(conjunto.has('valor3'));\n\nconjunto.delete('valor2');\nconsole.log(conjunto.size);",
                  "descricaoDoExemplo": "Cria um novo Set e adiciona os valores 'valor1' e 'valor2'. Como 'valor2' é duplicado, ele é eliminado automaticamente. O exemplo exibe o tamanho do conjunto, verifica se ele contém certos valores e remove um valor específico."
                  }
                  ,
                  {
                  "objeto": 170,
                  "função": "WeakSet",
                  "oQueFaz": "Estrutura de dados semelhante a um Set, mas com algumas diferenças importantes, como a não prevenção da coleta de lixo para os elementos.",
                  "exemplo": "const conjuntoFraco = new WeakSet();\nconst elemento1 = {};\nconst elemento2 = {};\n\nconjuntoFraco.add(elemento1);\nconjuntoFraco.add(elemento2);\n\nconsole.log(conjuntoFraco.has(elemento1));\nconsole.log(conjuntoFraco.has(elemento2));\n\nconjuntoFraco.delete(elemento2);\n\nconsole.log(conjuntoFraco.has(elemento2));",
                  "descricaoDoExemplo": "Cria um novo WeakSet e adiciona os elementos 'elemento1' e 'elemento2'. O exemplo verifica se o conjunto contém determinados elementos e remove o 'elemento2'. Após a remoção, o conjunto não contém mais o 'elemento2'."
                  }
                  ,
                  {
                  "objeto": 171,
                  "função": "Promise",
                  "oQueFaz": "Representa um valor que pode estar disponível agora, no futuro ou nunca, permitindo a escrita de código assíncrono de forma mais fácil.",
                  "exemplo": "function aguardar(ms) {\n return new Promise((resolve, reject) => {\n setTimeout(() => {\n resolve('Aguardou ' + ms + ' milissegundos.');\n }, ms);\n });\n}\n\naguardar(2000).then((mensagem) => {\n console.log(mensagem);\n});",
                  "descricaoDoExemplo": "Define uma função 'aguardar' que retorna uma Promise. A Promise é resolvida após o tempo especificado, retornando uma mensagem. Em seguida, utiliza o método then para tratar o resultado da Promise e exibir a mensagem no console."
                  }
                  ,
                  {
                  "objeto": 172,
                  "função": "Proxy",
                  "oQueFaz": "Permite a criação de objetos com comportamento personalizado, interceptando e definindo operações básicas para esses objetos.",
                  "exemplo": "const objeto = { nome: 'João' };\n\nconst proxy = new Proxy(objeto, {\n get(target, prop) {\n console.log('Acesso à propriedade: ' + prop);\n return target[prop];\n },\n set(target, prop, value) {\n console.log('Definição da propriedade: ' + prop + ' = ' + value);\n target[prop] = value;\n }\n});\n\nconsole.log(proxy.nome);\nproxy.nome = 'Maria';",
                  "descricaoDoExemplo": "Cria um objeto 'objeto' com uma propriedade 'nome'. Em seguida, cria um Proxy para esse objeto, interceptando as operações de acesso e definição de propriedades. O exemplo exibe mensagens no console ao acessar ou definir a propriedade 'nome' através do Proxy."
                  }
                  ,
                  {
                  "objeto": 173,
                  "função": "Reflect",
                  "oQueFaz": "Fornece métodos para realizar operações em objetos, de forma similar aos métodos estáticos do Object, mas de forma mais consistente e extensível.",
                  "exemplo": "const objeto = { nome: 'João' };\n\nconsole.log(Reflect.has(objeto, 'nome'));\nconsole.log(Reflect.get(objeto, 'nome'));\n\nReflect.set(objeto, 'nome', 'Maria');\nconsole.log(objeto.nome);",
                  "descricaoDoExemplo": "Cria um objeto 'objeto' com uma propriedade 'nome'. Em seguida, utiliza os métodos estáticos do Reflect para verificar se o objeto possui a propriedade 'nome', obter o valor da propriedade e definir um novo valor para a propriedade. O exemplo exibe os resultados no console."
                  }
                  ,
                  {
                  "objeto": 174,
                  "função": "Web Workers",
                  "oQueFaz": "Permite a execução de scripts em segundo plano, em threads separadas, para melhorar a responsividade de aplicativos web.",
                  "exemplo": "/* Exemplo básico de uso de Web Workers */\n\n// Arquivo principal (script.js)\nconst worker = new Worker('worker.js');\n\nworker.postMessage('Olá, worker!');\n\nworker.onmessage = (event) => {\n console.log('Mensagem recebida do worker:', event.data);\n};\n\n// Arquivo do worker (worker.js)\nself.onmessage = (event) => {\n console.log('Mensagem recebida do script principal:', event.data);\n self.postMessage('Olá, script principal!');\n};",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso de Web Workers. No arquivo principal (script.js), é criado um novo Web Worker a partir do arquivo 'worker.js'. Em seguida, uma mensagem é enviada para o worker através do método postMessage. O evento onmessage é usado para capturar a resposta do worker. No arquivo do worker (worker.js), a mensagem recebida do script principal é exibida no console e uma mensagem de resposta é enviada de volta para o script principal através do método postMessage."
                  }
                  ,
                  {
                  "objeto": 175,
                  "função": "Service Workers",
                  "oQueFaz": "Permite a execução de scripts em segundo plano, de forma assíncrona, para controlar a funcionalidade de um site ou aplicativo web, como o armazenamento em cache e a notificação push.",
                  "exemplo": "/* Exemplo básico de registro de um Service Worker */\n\nif ('serviceWorker' in navigator) {\n window.addEventListener('load', () => {\n navigator.serviceWorker\n .register('service-worker.js')\n .then((registration) => {\n console.log('Service Worker registrado com sucesso:', registration);\n })\n .catch((erro) => {\n console.error('Falha ao registrar o Service Worker:', erro);\n });\n });\n}",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de registro de um Service Worker. Verifica se o navegador suporta Service Workers e, em seguida, utiliza o método register para registrar o arquivo 'service-worker.js' como um Service Worker. O resultado do registro é exibido no console."
                  }
                  ,
                  {
                  "objeto": 176,
                  "função": "IndexedDB",
                  "oQueFaz": "Fornece uma API de banco de dados NoSQL embutido no navegador, permitindo o armazenamento de dados estruturados de forma persistente.",
                  "exemplo": "/* Exemplo básico de uso do IndexedDB */\n\nconst request = indexedDB.open('meuBancoDeDados', 1);\n\nrequest.onupgradeneeded = (event) => {\n const db = event.target.result;\n const objectStore = db.createObjectStore('pessoas', { keyPath: 'id' });\n objectStore.createIndex('nome', 'nome', { unique: false });\n};\n\nrequest.onsuccess = (event) => {\n const db = event.target.result;\n const transaction = db.transaction('pessoas', 'readwrite');\n const objectStore = transaction.objectStore('pessoas');\n\n const pessoa = { id: 1, nome: 'João' };\n const request = objectStore.add(pessoa);\n\n request.onsuccess = () => {\n console.log('Pessoa adicionada com sucesso.');\n };\n};",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso do IndexedDB para criar um banco de dados, criar uma tabela chamada 'pessoas' e adicionar uma pessoa. O exemplo utiliza os eventos onupgradeneeded e onsuccess para executar as operações necessárias."
                  }
                  ,
                  {
                  "objeto": 177,
                  "função": "File API",
                  "oQueFaz": "Fornece uma API para trabalhar com arquivos, permitindo a leitura e escrita de dados em arquivos no navegador.",
                  "exemplo": "/* Exemplo básico de uso da File API */\n\nconst arquivoInput = document.getElementById('arquivoInput');\n\narquivoInput.addEventListener('change', (event) => {\n const arquivo = event.target.files[0];\n\n const leitor = new FileReader();\n\n leitor.onload = () => {\n console.log('Conteúdo do arquivo:', leitor.result);\n };\n\n leitor.readAsText(arquivo);\n});",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso da File API para ler o conteúdo de um arquivo selecionado pelo usuário. O exemplo utiliza um elemento de input de arquivo (arquivoInput) e adiciona um evento change para lidar com a seleção de um arquivo. O conteúdo do arquivo é lido usando um FileReader e exibido no console."
                  }
                  ,
                  {
                  "objeto": 178,
                  "função": "Canvas",
                  "oQueFaz": "Fornece uma API para desenhar gráficos e imagens em tempo real no navegador, permitindo a criação de elementos visuais interativos.",
                  "exemplo": "/* Exemplo básico de uso do Canvas */\n\nconst canvas = document.getElementById('meuCanvas');\nconst contexto = canvas.getContext('2d');\n\ncontexto.fillStyle = 'blue';\ncontexto.fillRect(10, 10, 50, 50);\n\ncontexto.strokeStyle = 'red';\ncontexto.lineWidth = 2;\ncontexto.strokeRect(20, 20, 50, 50);\n\ncontexto.beginPath();\ncontexto.moveTo(100, 100);\ncontexto.lineTo(200, 200);\ncontexto.lineTo(200, 100);\ncontexto.closePath();\ncontexto.fillStyle = 'green';\ncontexto.fill();",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso do Canvas para desenhar formas geométricas e linhas. O exemplo cria um elemento de canvas (meuCanvas) e obtém o contexto 2D. Em seguida, desenha um retângulo preenchido, um retângulo com borda e um triângulo preenchido usando os métodos disponíveis no contexto 2D."
                  }
                  ,
                  {
                  "objeto": 179,
                  "função": "Fetch API",
                  "oQueFaz": "Fornece uma interface para fazer requisições HTTP assíncronas no navegador, permitindo a comunicação com servidores e a obtenção de recursos externos.",
                  "exemplo": "/* Exemplo básico de uso da Fetch API */\n\nfetch('https://api.example.com/data')\n .then((response) => {\n if (response.ok) {\n return response.json();\n } else {\n throw new Error('Erro na requisição.');\n }\n })\n .then((data) => {\n console.log('Dados recebidos:', data);\n })\n .catch((error) => {\n console.error('Erro:', error);\n });",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso da Fetch API para fazer uma requisição GET para a URL 'https://api.example.com/data'. O exemplo verifica se a resposta da requisição foi bem-sucedida e converte os dados para JSON. Os dados recebidos são exibidos no console. Em caso de erro, uma mensagem de erro é exibida no console."
                  }
                  ,
                  {
                  "objeto": 180,
                  "função": "WebSockets",
                  "oQueFaz": "Fornece uma API para a criação de conexões bidirecionais em tempo real entre um navegador e um servidor, permitindo a comunicação em tempo real.",
                  "exemplo": "/* Exemplo básico de uso de WebSockets */\n\nconst socket = new WebSocket('wss://api.example.com/socket');\n\nsocket.onopen = () => {\n console.log('Conexão estabelecida.');\n socket.send('Olá, servidor!');\n};\n\nsocket.onmessage = (event) => {\n console.log('Mensagem recebida do servidor:', event.data);\n};\n\nsocket.onclose = () => {\n console.log('Conexão encerrada.');\n};",
                  "descricaoDoExemplo": "Demonstra um exemplo básico de uso de WebSockets para estabelecer uma conexão com um servidor WebSocket. O exemplo cria um novo WebSocket com a URL 'wss://api.example.com/socket'. Quando a conexão é estabelecida, uma mensagem é enviada para o servidor através do método send. As mensagens recebidas do servidor são exibidas no console. Quando a conexão é encerrada, uma mensagem é exibida no console."
                  },
                  {
                    "objeto": 181,
                    "função": "Geolocation API",
                    "oQueFaz": "Fornece uma API para obter a localização geográfica do dispositivo do usuário, permitindo o acesso às coordenadas de latitude e longitude.",
                    "exemplo": "/* Exemplo básico de uso da Geolocation API */\n\nif (navigator.geolocation) {\n navigator.geolocation.getCurrentPosition((position) => {\n const latitude = position.coords.latitude;\n const longitude = position.coords.longitude;\n\n console.log('Latitude:', latitude);\n console.log('Longitude:', longitude);\n }, (error) => {\n console.error('Erro ao obter a localização:', error);\n });\n} else {\n console.error('Geolocalização não é suportada neste navegador.');\n}",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso da Geolocation API para obter a localização geográfica do dispositivo do usuário. O exemplo verifica se o navegador suporta a geolocalização e, em caso afirmativo, obtém a posição atual do usuário usando o método getCurrentPosition. As coordenadas de latitude e longitude são exibidas no console. Em caso de erro, uma mensagem de erro é exibida no console."
                    }
                    ,
                    {
                    "objeto": 182,
                    "função": "Notifications API",
                    "oQueFaz": "Fornece uma API para exibir notificações ao usuário, permitindo enviar mensagens ou alertas mesmo quando o navegador não está em foco.",
                    "exemplo": "/* Exemplo básico de uso da Notifications API */\n\nif (Notification.permission === 'granted') {\n exibirNotificacao();\n} else if (Notification.permission !== 'denied') {\n Notification.requestPermission().then((permission) => {\n if (permission === 'granted') {\n exibirNotificacao();\n }\n });\n}\n\nfunction exibirNotificacao() {\n const notificacao = new Notification('Nova mensagem', {\n body: 'Você recebeu uma nova mensagem.',\n icon: 'icone.png'\n });\n\n notificacao.onclick = () => {\n console.log('Notificação clicada.');\n };\n}",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso da Notifications API para exibir uma notificação ao usuário. O exemplo verifica se a permissão de notificação já foi concedida pelo usuário. Se a permissão foi concedida, a função exibirNotificacao é chamada para criar e exibir a notificação. Caso contrário, é solicitada a permissão de notificação e, se concedida, a função exibirNotificacao é chamada. A notificação exibida possui um título, uma mensagem e um ícone. Quando a notificação é clicada, uma mensagem é exibida no console."
                    }
                    ,
                    {
                    "objeto": 183,
                    "função": "Web Storage",
                    "oQueFaz": "Fornece uma API para armazenar dados no navegador, permitindo a persistência de informações mesmo após o fechamento do navegador.",
                    "exemplo": "/* Exemplo básico de uso do Web Storage */\n\nlocalStorage.setItem('nome', 'João');\n\nconst nomeArmazenado = localStorage.getItem('nome');\n\nconsole.log('Nome armazenado:', nomeArmazenado);\n\nlocalStorage.removeItem('nome');",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do Web Storage para armazenar dados no navegador. O exemplo usa o localStorage para armazenar o valor 'João' com a chave 'nome'. Em seguida, o valor armazenado é recuperado usando o método getItem e exibido no console. Por fim, a chave 'nome' e seu valor correspondente são removidos usando o método removeItem."
                    }
                    ,
                    {
                    "objeto": 184,
                    "função": "IndexedDB",
                    "oQueFaz": "Fornece uma API de banco de dados orientado a objetos no navegador, permitindo armazenar e recuperar objetos estruturados de forma persistente.",
                    "exemplo": "/* Exemplo básico de uso do IndexedDB */\n\nconst request = indexedDB.open('meuBanco', 1);\n\nrequest.onupgradeneeded = (event) => {\n const db = event.target.result;\n\n const objectStore = db.createObjectStore('pessoas', { keyPath: 'id' });\n\n objectStore.createIndex('nome', 'nome', { unique: false });\n objectStore.createIndex('idade', 'idade', { unique: false });\n};\n\nrequest.onsuccess = (event) => {\n const db = event.target.result;\n\n const transaction = db.transaction('pessoas', 'readwrite');\n const objectStore = transaction.objectStore('pessoas');\n\n const pessoa = { id: 1, nome: 'João', idade: 30 };\n\n const request = objectStore.add(pessoa);\n\n request.onsuccess = () => {\n console.log('Pessoa adicionada com sucesso.');\n };\n\n transaction.oncomplete = () => {\n console.log('Transação concluída.');\n };\n};",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do IndexedDB para criar um banco de dados 'meuBanco' com uma store 'pessoas'. O exemplo define um índice para os campos 'nome' e 'idade' da store. Em seguida, adiciona uma pessoa à store usando o método add. Quando a operação é concluída com sucesso, uma mensagem é exibida no console. O exemplo usa transações para garantir a integridade dos dados e exibe uma mensagem quando a transação é concluída."
                    }
                    ,
                    {
                    "objeto": 185,
                    "função": "File API",
                    "oQueFaz": "Fornece uma API para interagir com arquivos no navegador, permitindo a leitura, gravação e manipulação de arquivos selecionados pelo usuário.",
                    "exemplo": "/* Exemplo básico de uso da File API */\n\nconst fileInput = document.getElementById('file-input');\n\nfileInput.addEventListener('change', (event) => {\n const file = event.target.files[0];\n\n const reader = new FileReader();\n\n reader.onload = (event) => {\n const contents = event.target.result;\n console.log('Conteúdo do arquivo:', contents);\n };\n\n reader.readAsText(file);\n});",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso da File API para ler o conteúdo de um arquivo selecionado pelo usuário. O exemplo cria um elemento de input do tipo file e adiciona um ouvinte de eventos para capturar o evento de mudança. Quando o usuário seleciona um arquivo, o evento é disparado e o conteúdo do arquivo é lido usando o FileReader. O conteúdo é então exibido no console."
                    }
                    ,
                    {
                    "objeto": 186,
                    "função": "Drag and Drop API",
                    "oQueFaz": "Fornece uma API para permitir a interação com elementos arrastáveis (drag) e elementos onde eles podem ser soltos (drop), facilitando a implementação de recursos de arrastar e soltar.",
                    "exemplo": "/* Exemplo básico de uso da Drag and Drop API */\n\nconst draggableElement = document.getElementById('draggable');\nconst dropzone = document.getElementById('dropzone');\n\n// Evento de arrastar iniciado\n\ndraggableElement.addEventListener('dragstart', (event) => {\n event.dataTransfer.setData('text/plain', event.target.id);\n});\n\n// Evento de soltar\n\ndropzone.addEventListener('drop', (event) => {\n event.preventDefault();\n\n const data = event.dataTransfer.getData('text/plain');\n const draggableElement = document.getElementById(data);\n\n dropzone.appendChild(draggableElement);\n});\n\ndropzone.addEventListener('dragover', (event) => {\n event.preventDefault();\n});",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso da Drag and Drop API para permitir a interação de elementos arrastáveis e elementos onde eles podem ser soltos. O exemplo define um elemento arrastável com o id 'draggable' e uma área de soltar com o id 'dropzone'. Quando o evento de arrastar é iniciado no elemento arrastável, o id do elemento é armazenado nos dados de transferência do evento. Quando o evento de soltar ocorre na área de soltar, o elemento arrastável é movido para a área de soltar. Os eventos de dragover e drop são manipulados para evitar o comportamento padrão do navegador."
                    }
                    ,
                    {
                    "objeto": 187,
                    "função": "Canvas API",
                    "oQueFaz": "Fornece uma API para desenhar gráficos e imagens dinamicamente no navegador usando JavaScript.",
                    "exemplo": "/* Exemplo básico de uso da Canvas API */\n\nconst canvas = document.getElementById('myCanvas');\nconst context = canvas.getContext('2d');\n\ncontext.fillStyle = 'red';\ncontext.fillRect(10, 10, 50, 50);\n\ncontext.strokeStyle = 'blue';\ncontext.lineWidth = 2;\ncontext.strokeRect(20, 20, 50, 50);\n\ncontext.beginPath();\ncontext.moveTo(100, 100);\ncontext.lineTo(200, 200);\ncontext.lineTo(200, 100);\ncontext.closePath();\ncontext.fillStyle = 'green';\ncontext.fill();",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso da Canvas API para desenhar formas no elemento canvas. O exemplo obtém o contexto de renderização 2D do canvas e define a cor de preenchimento e a cor de contorno. Em seguida, desenha um retângulo preenchido e um retângulo com contorno. Por fim, desenha um triângulo usando um caminho de desenho. O triângulo é preenchido com a cor verde."
                    }
                    ,
                    {
                    "objeto": 188,
                    "função": "Web Workers",
                    "oQueFaz": "Permite a execução de scripts em segundo plano, independentes da interface do usuário, para evitar bloqueios e melhorar a responsividade do aplicativo.",
                    "exemplo": "/* Exemplo básico de uso de Web Workers */\n\n// Script principal\n\nconst worker = new Worker('worker.js');\n\nworker.onmessage = (event) => {\n console.log('Mensagem recebida do Web Worker:', event.data);\n};\n\nworker.postMessage('Olá, Web Worker!');\n\n// worker.js\n\nself.onmessage = (event) => {\n console.log('Mensagem recebida no Web Worker:', event.data);\n\n const resposta = 'Olá, Script principal!';\n self.postMessage(resposta);\n};",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso de Web Workers para executar um script em segundo plano. O exemplo cria um novo Web Worker usando o arquivo 'worker.js' como script de trabalho. O script principal se inscreve no evento onmessage para receber mensagens do Web Worker. Em seguida, envia uma mensagem para o Web Worker usando o método postMessage. O Web Worker recebe a mensagem no evento onmessage, processa-a e envia uma resposta de volta usando o método postMessage. A resposta é recebida no script principal no evento onmessage e exibida no console."
                    }
                    ,
                    {
                    "objeto": 189,
                    "função": "Server-Sent Events (SSE)",
                    "oQueFaz": "Permite a transmissão de eventos do servidor para o cliente de forma assíncrona, contínua e unidirecional, permitindo atualizações em tempo real.",
                    "exemplo": "/* Exemplo básico de uso de Server-Sent Events */\n\nconst eventSource = new EventSource('/sse-endpoint');\n\neventSource.onopen = () => {\n console.log('Conexão estabelecida com o servidor.');\n};\n\neventSource.onerror = (error) => {\n console.error('Erro na conexão:', error);\n};\n\neventSource.onmessage = (event) => {\n const data = JSON.parse(event.data);\n console.log('Evento recebido:', data);\n};",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso de Server-Sent Events para receber eventos do servidor. O exemplo cria um objeto EventSource apontando para o endpoint '/sse-endpoint' no servidor. O evento onopen é acionado quando a conexão é estabelecida, e o evento onerror é acionado em caso de erro na conexão. Quando um evento é recebido do servidor, o evento onmessage é acionado, e os dados do evento são exibidos no console após serem convertidos em JSON."
                    }
                    ,
                    {
                    "objeto": 190,
                    "função": "WebRTC",
                    "oQueFaz": "Fornece uma API para comunicação em tempo real, peer-to-peer, de áudio, vídeo e dados diretamente entre navegadores, sem a necessidade de servidores intermediários.",
                    "exemplo": "/* Exemplo básico de uso do WebRTC */\n\nconst configuration = { iceServers: [{ urls: 'stun:stun.example.org' }] };\nconst peerConnection = new RTCPeerConnection(configuration);\n\npeerConnection.addEventListener('icecandidate', (event) => {\n if (event.candidate) {\n // Enviar o candidato para o outro peer\n }\n});\n\n// Adicionar tracks de áudio/vídeo\n\nnavigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {\n stream.getTracks().forEach((track) => {\n peerConnection.addTrack(track, stream);\n });\n});",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do WebRTC para estabelecer uma conexão peer-to-peer entre navegadores. O exemplo cria um objeto RTCPeerConnection com uma configuração que inclui um servidor STUN. Em seguida, adiciona um ouvinte de evento para capturar os candidatos ICE gerados durante o processo de conexão. O exemplo também usa a API de mídia para obter acesso à câmera e ao microfone do usuário. Os tracks de áudio e vídeo são adicionados à conexão peer-to-peer usando o método addTrack."
                    }
                    ,
                    {
                    "objeto": 191,
                    "função": "Service Workers",
                    "oQueFaz": "Permitem que um aplicativo web execute tarefas em segundo plano, como receber notificações push, sincronização offline e armazenamento em cache.",
                    "exemplo": "/* Exemplo básico de uso de Service Workers */\n\n// Arquivo: sw.js\n\nself.addEventListener('install', (event) => {\n console.log('Service Worker instalado.');\n});\n\nself.addEventListener('activate', (event) => {\n console.log('Service Worker ativado.');\n});\n\nself.addEventListener('fetch', (event) => {\n console.log('Requisição interceptada:', event.request.url);\n event.respondWith(fetch(event.request));\n});\n\n// Registro do Service Worker\n\nif ('serviceWorker' in navigator) {\n navigator.serviceWorker.register('sw.js')\n .then(() => {\n console.log('Service Worker registrado com sucesso.');\n })\n .catch((error) => {\n console.error('Falha ao registrar o Service Worker:', error);\n });\n}",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso de Service Workers para interceptar requisições de rede. O exemplo define ouvintes de eventos para os eventos 'install', 'activate' e 'fetch'. Quando o Service Worker é instalado, ativado ou uma requisição de rede é feita, as respectivas mensagens são exibidas no console. O exemplo também registra o Service Worker no navegador usando o método register da API ServiceWorkerContainer."
                    }
                    ,
                    {
                    "objeto": 192,
                    "função": "Progressive Web Apps (PWA)",
                    "oQueFaz": "Permite que um aplicativo web tenha recursos de uma aplicação nativa, como funcionar offline, ser instalado na tela inicial e enviar notificações push.",
                    "exemplo": "/* Exemplo básico de Progressive Web App */\n\n// Arquivo: manifest.json\n\n{\n name: Meu PWA,\n short_name: Meu PWA,\n start_url: /,\n display: standalone,\n background_color: #ffffff,\n theme_color: #000000,\n icons: [\n {\n src: /icon.png,\n sizes: 192x192,\n type: image/png\n }\n ]\n}\n\n// Arquivo: service-worker.js\n\nself.addEventListener('fetch', (event) => {\n event.respondWith(\n caches.match(event.request).then((response) => {\n if (response) {\n return response;\n }\n\n return fetch(event.request);\n })\n );\n});",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uma Progressive Web App. O exemplo inclui um arquivo manifest.json que especifica metadados do aplicativo, como nome, ícone e cores de tema. Também inclui um arquivo service-worker.js que intercepta as requisições de rede e busca as respostas no cache. Se a resposta não estiver em cache, a solicitação é encaminhada para a rede. Esses arquivos são parte integrante de uma PWA e ajudam a fornecer recursos como funcionamento offline, instalação na tela inicial e exibição em tela cheia."
                    }
                    ,
                    {
                    "objeto": 193,
                    "função": "Web Components",
                    "oQueFaz": "Permitem criar componentes reutilizáveis e encapsulados para a construção de interfaces de usuário, usando HTML, CSS e JavaScript.",
                    "exemplo": "/* Exemplo básico de uso de Web Components */\n\n// Definição do componente\n\nclass MyComponent extends HTMLElement {\n connectedCallback() {\n this.innerHTML = '<h1>Meu Componente</h1>';\n }\n}\n\n// Registro do componente\n\ncustomElements.define('my-component', MyComponent);\n\n// Utilização do componente\n\nconst myComponent = document.createElement('my-component');\ndocument.body.appendChild(myComponent);",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso de Web Components para criar e utilizar um componente personalizado. O exemplo define uma classe MyComponent que estende a classe HTMLElement. O método connectedCallback é invocado quando o componente é conectado ao DOM, e nesse exemplo, define o conteúdo HTML do componente. Em seguida, o componente é registrado usando o método define da API customElements. Por fim, uma instância do componente é criada e adicionada ao corpo do documento HTML."
                    }
                    ,
                    {
                    "objeto": 194,
                    "função": "WebAssembly",
                    "oQueFaz": "É um formato de código binário portátil, executado de forma eficiente em navegadores modernos, permitindo a execução de código de baixo nível, escrito em linguagens como C, C++ e Rust.",
                    "exemplo": "/* Exemplo básico de uso do WebAssembly */\n\n// Código em C\n\nint add(int a, int b) {\n return a + b;\n}\n\n// Compilação e carregamento do módulo WebAssembly\n\nfetch('module.wasm')\n .then((response) => response.arrayBuffer())\n .then((buffer) => WebAssembly.compile(buffer))\n .then((module) => WebAssembly.instantiate(module))\n .then((instance) => {\n // Chamada da função exportada\n const result = instance.exports.add(3, 4);\n console.log('Resultado:', result);\n });",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do WebAssembly para executar código escrito em C. O exemplo inclui uma função simples de adição escrita em C. O código C é compilado em um módulo WebAssembly que é carregado usando a API fetch e compilado e instanciado usando as funções WebAssembly.compile e WebAssembly.instantiate. A função exportada pelo módulo é chamada e o resultado é exibido no console."
                    }
                    ,
                    {
                    "objeto": 195,
                    "função": "IndexedDB",
                    "oQueFaz": "Fornece uma API de banco de dados de alto desempenho para armazenamento de dados estruturados no navegador.",
                    "exemplo": "/* Exemplo básico de uso do IndexedDB */\n\n// Abrir/criar um banco de dados\n\nconst request = window.indexedDB.open('myDatabase', 1);\n\n// Manipular eventos de sucesso e erro\n\nrequest.onerror = (event) => {\n console.error('Erro ao abrir o banco de dados:', event.target.error);\n};\n\nrequest.onsuccess = (event) => {\n const db = event.target.result;\n console.log('Banco de dados aberto com sucesso:', db);\n};\n\n// Manipular evento de atualização de versão\n\nrequest.onupgradeneeded = (event) => {\n const db = event.target.result;\n const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });\n console.log('Banco de dados atualizado.');\n};",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do IndexedDB para abrir/criar um banco de dados e manipular eventos relacionados. O exemplo usa a função indexedDB.open para abrir/criar um banco de dados chamado 'myDatabase' com a versão 1. São definidos ouvintes de eventos para capturar eventos de sucesso, erro e atualização de versão. No evento de atualização de versão, é criada uma object store chamada 'myObjectStore'. Os eventos são usados para exibir mensagens no console."
                    }
                    ,
                    {
                    "objeto": 196,
                    "função": "MediaDevices",
                    "oQueFaz": "Fornece acesso aos dispositivos de mídia do usuário, como câmera e microfone, permitindo a captura de áudio, vídeo e fluxos de mídia.",
                    "exemplo": "/* Exemplo básico de uso do MediaDevices */\n\n// Obter acesso à câmera\n\nnavigator.mediaDevices.getUserMedia({ video: true })\n .then((stream) => {\n const videoElement = document.getElementById('video');\n videoElement.srcObject = stream;\n videoElement.play();\n })\n .catch((error) => {\n console.error('Erro ao acessar a câmera:', error);\n });",
                    "descricaoDoExemplo": "Demonstra um exemplo básico de uso do MediaDevices para acessar a câmera do usuário e exibir a transmissão de vídeo em um elemento HTML <video>. O exemplo chama a função getUserMedia da API mediaDevices, passando { video: true } como restrição para obter acesso à câmera. O fluxo de mídia retornado é atribuído ao elemento de vídeo e reproduzido. Em caso de erro, uma mensagem de erro é exibida no console."
                    },
                    {
                      "objeto": 197,
                      "função": "Map.prototype.values",
                      "oQueFaz": "Retorna um novo objeto de um iterador contendo os valores dos elementos no objeto Map, na ordem de inserção.",
                      "exemplo": "let map = new Map();\nmap.set('chave1', 'valor1');\nmap.set('chave2', 'valor2');\n\nlet values = map.values();\nconsole.log(values.next().value); // retorna 'valor1'\nconsole.log(values.next().value); // retorna 'valor2'",
                      "descricaoDoExemplo": "Neste exemplo, criamos um objeto Map e adicionamos alguns pares chave-valor. Em seguida, usamos o método values() para obter um iterador dos valores no mapa. Podemos usar o iterador para iterar sobre os valores usando o método next().value."
                      },
                      {
                      "objeto": 198,
                      "função": "Set.prototype.clear",
                      "oQueFaz": "Remove todos os elementos do objeto Set.",
                      "exemplo": "let set = new Set(['valor1', 'valor2', 'valor3']);\nconsole.log(set.size); // retorna 3\n\nset.clear();\nconsole.log(set.size); // retorna 0",
                      "descricaoDoExemplo": "Neste exemplo, criamos um objeto Set com alguns valores. Usamos o método clear() para remover todos os elementos do conjunto. Depois de chamar o método clear(), o tamanho do conjunto se torna 0."
                      },
                      {
                      "objeto": 199,
                      "função": "Set.prototype.entries",
                      "oQueFaz": "Retorna um novo objeto de um iterador contendo os pares chave-valor para cada elemento no objeto Set, na ordem de inserção.",
                      "exemplo": "let set = new Set(['valor1', 'valor2']);\nlet entries = set.entries();\n\nconsole.log(entries.next().value); // retorna ['valor1', 'valor1']\nconsole.log(entries.next().value); // retorna ['valor2', 'valor2']",
                      "descricaoDoExemplo": "Neste exemplo, criamos um objeto Set com alguns valores. Em seguida, usamos o método entries() para obter um iterador dos pares chave-valor no conjunto. Podemos usar o iterador para iterar sobre os pares chave-valor usando o método next().value."
                      },
                      {
                      "objeto": 200,
                      "função": "Set.prototype.forEach",
                      "oQueFaz": "Executa uma função callback para cada valor no objeto Set, na ordem de inserção.",
                      "exemplo": "let set = new Set(['valor1', 'valor2']);\n\nset.forEach(function(valor) {\n console.log(valor);\n});\n\n// Saída:\n// valor1\n// valor2",
                      "descricaoDoExemplo": "Neste exemplo, criamos um objeto Set com alguns valores. Em seguida, usamos o método forEach() para executar uma função callback para cada valor no conjunto. A função callback recebe o valor como argumento e imprime-o no console."
                      },
                      {
                      "objeto": 201,
                      "função": "Set.prototype.keys",
                      "oQueFaz": "Retorna um novo objeto de um iterador contendo as chaves para cada elemento no objeto Set, na ordem de inserção.",
                      "exemplo": "let set = new Set(['valor1', 'valor2']);\n.",
                      "descricaoDoExemplo": "N/A"
                      },
                      {
                        "objeto": 202,
                        "função": "Set.prototype.values",
                        "oQueFaz": "Retorna um novo objeto de um iterador contendo os valores dos elementos no objeto Set, na ordem de inserção.",
                        "exemplo": "let set = new Set(['valor1', 'valor2']);\nlet values = set.values();\n\nconsole.log(values.next().value); // retorna 'valor1'\nconsole.log(values.next().value); // retorna 'valor2'",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto Set com alguns valores. Em seguida, usamos o método values() para obter um iterador dos valores no conjunto. Podemos usar o iterador para iterar sobre os valores usando o método next().value."
                        },
                        {
                        "objeto": 203,
                        "função": "WeakMap.prototype.delete",
                        "oQueFaz": "Remove a entrada associada à chave do objeto WeakMap.",
                        "exemplo": "let weakMap = new WeakMap();\nlet chave1 = {};\nlet chave2 = {};\n\nweakMap.set(chave1, 'valor1');\nweakMap.set(chave2, 'valor2');\n\nconsole.log(weakMap.delete(chave1)); // retorna true\nconsole.log(weakMap.delete(chave1)); // retorna false",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakMap e adicionamos duas entradas usando chaves de objeto. Usamos o método delete() para remover a entrada associada à chave1. O método retorna true se a entrada for removida com sucesso e false se a chave não existir no WeakMap."
                        },
                        {
                        "objeto": 204,
                        "função": "WeakMap.prototype.get",
                        "oQueFaz": "Retorna o valor associado à chave no objeto WeakMap, ou undefined se a chave não existir.",
                        "exemplo": "let weakMap = new WeakMap();\nlet chave1 = {};\nlet chave2 = {};\n\nweakMap.set(chave1, 'valor1');\nweakMap.set(chave2, 'valor2');\n\nconsole.log(weakMap.get(chave1)); // retorna 'valor1'\nconsole.log(weakMap.get(chave2)); // retorna 'valor2'\nconsole.log(weakMap.get({})); // retorna undefined",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakMap e adicionamos duas entradas usando chaves de objeto. Usamos o método get() para obter o valor associado à chave1 e chave2. Se a chave não existir no WeakMap, o método retorna undefined."
                        },
                        {
                        "objeto": 205,
                        "função": "WeakMap.prototype.has",
                        "oQueFaz": "Retorna um valor booleano indicando se o objeto WeakMap contém uma entrada para a chave especificada.",
                        "exemplo": "let weakMap = new WeakMap();\nlet chave1 = {};\nlet chave2 = {};\n\nweakMap.set(chave1, 'valor1');\n\nconsole.log(weakMap.has(chave1)); // retorna true\nconsole.log(weakMap.has(chave2)); // retorna false",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakMap e adicionamos uma entrada usando a chave1. Usamos o método has() para verificar se o WeakMap contém uma entrada para a chave1 e chave2. O método retorna true se a chave existir e false caso contrário."
                        },
                        {
                        "objeto": 206,
                        "função": "WeakMap.prototype.set",
                        "oQueFaz": "Define um novo par chave/valor no objeto WeakMap.",
                        "exemplo": "let weakMap = new WeakMap();\nlet chave1 = {};\nlet chave2 = {};\n\nweakMap.set(chave1, 'valor1');\nweakMap.set(chave2, 'valor2');",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakMap e adicionamos duas entradas usando chaves de objeto. O método set() define um novo par chave/valor no WeakMap. As chaves podem ser objetos e os valores podem ser qualquer tipo de valor."
                        },
                        {
                        "objeto": 207,
                        "função": "WeakSet.prototype.add",
                        "oQueFaz": "Adiciona um novo objeto ao objeto WeakSet.",
                        "exemplo": "let weakSet = new WeakSet();\nlet objeto1 = {};\nlet objeto2 = {};\n\nweakSet.add(objeto1);\nweakSet.add(objeto2);",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakSet e adicionamos dois objetos a ele usando o método add(). O WeakSet permite apenas objetos como membros, e não possui métodos para acessar ou iterar sobre seus membros."
                        },
                        {
                        "objeto": 208,
                        "função": "WeakSet.prototype.delete",
                        "oQueFaz": "Remove um objeto do objeto WeakSet.",
                        "exemplo": "let weakSet = new WeakSet();\nlet objeto1 = {};\nlet objeto2 = {};\n\nweakSet.add(objeto1);\nweakSet.add(objeto2);\n\nconsole.log(weakSet.delete(objeto1)); // retorna true\nconsole.log(weakSet.delete(objeto1)); // retorna false",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakSet e adicionamos dois objetos a ele usando o método add(). Em seguida, usamos o método delete() para remover o objeto1 do WeakSet. O método retorna true se o objeto for removido com sucesso e false se o objeto não estiver presente no WeakSet."
                        },
                        {
                        "objeto": 209,
                        "função": "WeakSet.prototype.has",
                        "oQueFaz": "Retorna um valor booleano indicando se o objeto WeakSet contém o objeto especificado.",
                        "exemplo": "let weakSet = new WeakSet();\nlet objeto1 = {};\nlet objeto2 = {};\n\nweakSet.add(objeto1);\n\nconsole.log(weakSet.has(objeto1)); // retorna true\nconsole.log(weakSet.has(objeto2)); // retorna false",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto WeakSet e adicionamos o objeto1 a ele usando o método add(). Em seguida, usamos o método has() para verificar se o WeakSet contém o objeto1 e objeto2. O método retorna true se o objeto estiver presente e false caso contrário."
                        },
                        {
                        "objeto": 210,
                        "função": "Math.abs",
                        "oQueFaz": "Retorna o valor absoluto de um número, ou seja, o valor numérico sem sinal.",
                        "exemplo": "console.log(Math.abs(5)); // retorna 5\nconsole.log(Math.abs(-5)); // retorna 5",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.abs() para obter o valor absoluto dos números 5 e -5. O método retorna o valor numérico sem sinal, ou seja, o valor positivo do número fornecido."
                        },
                        {
                        "objeto": 211,
                        "função": "Math.ceil",
                        "oQueFaz": "Retorna o menor número inteiro maior ou igual a um número.",
                        "exemplo": "console.log(Math.ceil(4.3)); // retorna 5\nconsole.log(Math.ceil(9.9)); // retorna 10",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.ceil() para arredondar os números 4.3 e 9.9 para cima. O método retorna o menor número inteiro maior ou igual ao número fornecido."
                        },
                        {
                        "objeto": 212,
                        "função": "Math.floor",
                        "oQueFaz": "Retorna o maior número inteiro menor ou igual a um número.",
                        "exemplo": "console.log(Math.floor(4.9)); // retorna 4\nconsole.log(Math.floor(9.2)); // retorna 9",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.floor() para arredondar os números 4.9 e 9.2 para baixo. O método retorna o maior número inteiro menor ou igual ao número fornecido."
                        },
                        {
                        "objeto": 213,
                        "função": "Math.round",
                        "oQueFaz": "Retorna o valor de um número arredondado para o inteiro mais próximo.",
                        "exemplo": "console.log(Math.round(4.5)); // retorna 5\nconsole.log(Math.round(9.2)); // retorna 9",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.round() para arredondar os números 4.5 e 9.2 para o inteiro mais próximo. O método retorna o valor arredondado do número fornecido."
                        },
                        {
                        "objeto": 214,
                        "função": "Math.random",
                        "oQueFaz": "Retorna um número pseudoaleatório no intervalo [0, 1).",
                        "exemplo": "console.log(Math.random()); // retorna um número pseudoaleatório entre 0 e 1",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.random() para gerar um número pseudoaleatório no intervalo entre 0 e 1. O método retorna um valor aleatório maior ou igual a 0 e menor que 1."
                        },
                        {
                        "objeto": 215,
                        "função": "Math.max",
                        "oQueFaz": "Retorna o maior número de um ou mais números.",
                        "exemplo": "console.log(Math.max(5, 10, 2)); // retorna 10\nconsole.log(Math.max(-5, -10, -2)); // retorna -2",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.max() para obter o maior número entre os números 5, 10 e 2. O método retorna o valor máximo entre os argumentos fornecidos."
                        },
                        {
                        "objeto": 216,
                        "função": "Math.min",
                        "oQueFaz": "Retorna o menor número de um ou mais números.",
                        "exemplo": "console.log(Math.min(5, 10, 2)); // retorna 2\nconsole.log(Math.min(-5, -10, -2)); // retorna -10",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.min() para obter o menor número entre os números 5, 10 e 2. O método retorna o valor mínimo entre os argumentos fornecidos."
                        },
                        {
                        "objeto": 217,
                        "função": "Math.pow",
                        "oQueFaz": "Retorna a base elevada à potência do expoente.",
                        "exemplo": "console.log(Math.pow(2, 3)); // retorna 8\nconsole.log(Math.pow(10, 2)); // retorna 100",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.pow() para calcular o resultado da base elevada à potência do expoente. O método retorna o valor resultante da operação de potenciação."
                        },
                        {
                        "objeto": 218,
                        "função": "Math.sqrt",
                        "oQueFaz": "Retorna a raiz quadrada de um número.",
                        "exemplo": "console.log(Math.sqrt(16)); // retorna 4\nconsole.log(Math.sqrt(9)); // retorna 3",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Math.sqrt() para calcular a raiz quadrada dos números 16 e 9. O método retorna o valor resultante da operação de extração da raiz quadrada."
                        },
                        {
                        "objeto": 219,
                        "função": "Date.now",
                        "oQueFaz": "Retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC.",
                        "exemplo": "console.log(Date.now()); // retorna o número de milissegundos desde o Unix Epoch",
                        "descricaoDoExemplo": "Neste exemplo, usamos o método Date.now() para obter o número de milissegundos desde o Unix Epoch (1º de janeiro de 1970 00:00:00 UTC). O método retorna um valor numérico representando o instante atual."
                        },
                        {
                        "objeto": 220,
                        "função": "Date.prototype.getDate",
                        "oQueFaz": "Retorna o dia do mês (de 1 a 31) para a data especificada.",
                        "exemplo": "let data = new Date('June 24, 2023');\nconsole.log(data.getDate()); // retorna 24",
                        "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data de 24 de junho de 2023. Usamos o método getDate() para obter o dia do mês, que é 24."
                        },
                        {
                          "objeto": 221,
                          "função": "Date.prototype.getMonth",
                          "oQueFaz": "Retorna o mês (de 0 a 11) para a data especificada.",
                          "exemplo": "let data = new Date('June 24, 2023');\nconsole.log(data.getMonth()); // retorna 5",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data de 24 de junho de 2023. Usamos o método getMonth() para obter o mês, que é 5 (lembrando que os meses são indexados de 0 a 11)."
                          },
                          {
                          "objeto": 222,
                          "função": "Date.prototype.getFullYear",
                          "oQueFaz": "Retorna o ano (como um valor de quatro dígitos) para a data especificada.",
                          "exemplo": "let data = new Date('June 24, 2023');\nconsole.log(data.getFullYear()); // retorna 2023",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data de 24 de junho de 2023. Usamos o método getFullYear() para obter o ano, que é 2023."
                          },
                          {
                          "objeto": 223,
                          "função": "Date.prototype.getHours",
                          "oQueFaz": "Retorna as horas (de 0 a 23) para a data especificada.",
                          "exemplo": "let data = new Date('June 24, 2023 13:45:30');\nconsole.log(data.getHours()); // retorna 13",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data e hora de 24 de junho de 2023, às 13:45:30. Usamos o método getHours() para obter as horas, que é 13."
                          },
                          {
                          "objeto": 224,
                          "função": "Date.prototype.getMinutes",
                          "oQueFaz": "Retorna os minutos (de 0 a 59) para a data especificada.",
                          "exemplo": "let data = new Date('June 24, 2023 13:45:30');\nconsole.log(data.getMinutes()); // retorna 45",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data e hora de 24 de junho de 2023, às 13:45:30. Usamos o método getMinutes() para obter os minutos, que é 45."
                          },
                          {
                          "objeto": 225,
                          "função": "Date.prototype.getSeconds",
                          "oQueFaz": "Retorna os segundos (de 0 a 59) para a data especificada.",
                          "exemplo": "let data = new Date('June 24, 2023 13:45:30');\nconsole.log(data.getSeconds()); // retorna 30",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data e hora de 24 de junho de 2023, às 13:45:30. Usamos o método getSeconds() para obter os segundos, que é 30."
                          },
                          {
                          "objeto": 226,
                          "função": "Date.prototype.toISOString",
                          "oQueFaz": "Retorna uma representação da data especificada em formato de string, seguindo o padrão ISO 8601.",
                          "exemplo": "let data = new Date('June 24, 2023 13:45:30');\nconsole.log(data.toISOString()); // retorna '2023-06-24T13:45:30.000Z'",
                          "descricaoDoExemplo": "Neste exemplo, criamos um objeto Date representando a data e hora de 24 de junho de 2023, às 13:45:30. Usamos o método toISOString() para obter uma representação da data em formato de string, seguindo o padrão ISO 8601."
                          },
                          {
                          "objeto": 227,
                          "função": "Array.prototype.length",
                          "oQueFaz": "Retorna o número de elementos em um array.",
                          "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.length); // retorna 5",
                          "descricaoDoExemplo": "Neste exemplo, criamos um array com 5 elementos. Usamos a propriedade length para obter o número de elementos no array, que é 5."
                          },
                          {
                          "objeto": 228,
                          "função": "Array.prototype.push",
                          "oQueFaz": "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.",
                          "exemplo": "let array = [1, 2, 3];\nconsole.log(array.push(4, 5)); // retorna 5\nconsole.log(array); // retorna [1, 2, 3, 4, 5]",
                          "descricaoDoExemplo": "Neste exemplo, temos um array com 3 elementos. Usamos o método push() para adicionar os números 4 e 5 ao final do array. O método retorna o novo comprimento do array, que é 5, e o array final fica [1, 2, 3, 4, 5]."
                          },
                          {
                          "objeto": 229,
                          "função": "Array.prototype.pop",
                          "oQueFaz": "Remove o último elemento de um array e o retorna.",
                          "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.pop()); // retorna 5\nconsole.log(array); // retorna [1, 2, 3, 4]",
                          "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método pop() para remover o último elemento do array, que é o número 5. O método retorna o elemento removido, que é 5, e o array final fica [1, 2, 3, 4]."
                          },
                          {
                          "objeto": 230,
                          "função": "Array.prototype.join",
                          "oQueFaz": "Junta todos os elementos de um array em uma string, separados por um separador especificado.",
                          "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.join(', ')); // retorna '1, 2, 3, 4, 5'",
                          "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método join() para juntar todos os elementos do array em uma string, separados por vírgula e espaço. O método retorna a string resultante, que é '1, 2, 3, 4, 5'."
                          },
                          {
                            "objeto": 231,
                            "função": "Array.prototype.slice",
                            "oQueFaz": "Retorna uma cópia superficial de uma parte de um array em um novo array, selecionada a partir do início até o fim (fim não incluído). O array original não é modificado.",
                            "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.slice(1, 4)); // retorna [2, 3, 4]",
                            "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método slice() para retornar uma cópia dos elementos do array, a partir do índice 1 até o índice 4 (exclusivo). O array resultante é [2, 3, 4]. O array original não é modificado."
                            },
                            {
                            "objeto": 232,
                            "função": "Array.prototype.splice",
                            "oQueFaz": "Altera o conteúdo de um array removendo, substituindo ou adicionando elementos. Modifica o array original e retorna um array com os elementos removidos.",
                            "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.splice(2, 2, 'a', 'b')); // retorna [3, 4]\nconsole.log(array); // retorna [1, 2, 'a', 'b', 5]",
                            "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método splice() para remover 2 elementos a partir do índice 2 e adicionar os elementos 'a' e 'b' no mesmo local. O método retorna um array com os elementos removidos, que é [3, 4]. O array original é modificado e fica [1, 2, 'a', 'b', 5]."
                            },
                            {
                            "objeto": 233,
                            "função": "Array.prototype.reverse",
                            "oQueFaz": "Inverte a ordem dos elementos de um array. O primeiro elemento se torna o último e o último se torna o primeiro.",
                            "exemplo": "let array = [1, 2, 3, 4, 5];\narray.reverse();\nconsole.log(array); // retorna [5, 4, 3, 2, 1]",
                            "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método reverse() para inverter a ordem dos elementos. Após a execução do método, o array fica [5, 4, 3, 2, 1]."
                            },
                            {
                            "objeto": 234,
                            "função": "Array.prototype.sort",
                            "oQueFaz": "Ordena os elementos de um array de acordo com a ordem de classificação dos valores Unicode dos caracteres.",
                            "exemplo": "let array = [3, 1, 4, 2, 5];\narray.sort();\nconsole.log(array); // retorna [1, 2, 3, 4, 5]",
                            "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método sort() para ordenar os elementos em ordem crescente. Após a execução do método, o array fica [1, 2, 3, 4, 5]."
                            },
                            {
                            "objeto": 235,
                            "função": "Array.prototype.concat",
                            "oQueFaz": "Retorna um novo array que é uma concatenação de arrays ou valores fornecidos.",
                            "exemplo": "let array1 = [1, 2, 3];\nlet array2 = [4, 5];\nlet newArray = array1.concat(array2);\nconsole.log(newArray); // retorna [1, 2, 3, 4, 5]",
                            "descricaoDoExemplo": "Neste exemplo, temos dois arrays: array1 com os elementos [1, 2, 3] e array2 com os elementos [4, 5]. Usamos o método concat() em array1, passando array2 como argumento, para criar um novo array que é a concatenação dos dois arrays. O novo array resultante é [1, 2, 3, 4, 5]."
                            },
                            {
                              "objeto": 236,
                              "função": "Array.prototype.join",
                              "oQueFaz": "Une todos os elementos de um array em uma string, separados por um separador especificado.",
                              "exemplo": "let array = ['Hello', 'World'];\nlet result = array.join(' ');\nconsole.log(result); // retorna 'Hello World'",
                              "descricaoDoExemplo": "Neste exemplo, temos um array com dois elementos: 'Hello' e 'World'. Usamos o método join() para unir os elementos do array em uma string, separados por um espaço em branco. O resultado é a string 'Hello World'."
                              },
                              {
                              "objeto": 237,
                              "função": "Array.prototype.includes",
                              "oQueFaz": "Verifica se um array contém um determinado elemento e retorna true ou false.",
                              "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.includes(3)); // retorna true\nconsole.log(array.includes(6)); // retorna false",
                              "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método includes() para verificar se o array contém o elemento 3 e o elemento 6. O método retorna true para o elemento 3, pois está presente no array, e retorna false para o elemento 6, pois não está presente no array."
                              },
                              {
                              "objeto": 238,
                              "função": "Array.prototype.findIndex",
                              "oQueFaz": "Retorna o índice do primeiro elemento em um array que satisfaz uma função de teste fornecida. Caso contrário, retorna -1.",
                              "exemplo": "let array = [1, 2, 3, 4, 5];\nlet index = array.findIndex(element => element > 3);\nconsole.log(index); // retorna 3",
                              "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método findIndex() para encontrar o índice do primeiro elemento que seja maior que 3. A função de teste retorna true para o elemento 4, e o método retorna o índice 3."
                              },
                              {
                              "objeto": 239,
                              "função": "Array.prototype.find",
                              "oQueFaz": "Retorna o primeiro elemento em um array que satisfaz uma função de teste fornecida. Caso contrário, retorna undefined.",
                              "exemplo": "let array = [1, 2, 3, 4, 5];\nlet element = array.find(element => element > 3);\nconsole.log(element); // retorna 4",
                              "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método find() para encontrar o primeiro elemento que seja maior que 3. A função de teste retorna true para o elemento 4, e o método retorna esse elemento."
                              },
                              {
                              "objeto": 240,
                              "função": "Array.prototype.some",
                              "oQueFaz": "Verifica se pelo menos um elemento em um array satisfaz uma função de teste fornecida. Retorna true ou false.",
                              "exemplo": "let array = [1, 2, 3, 4, 5];\nconsole.log(array.some(element => element > 3)); // retorna true\nconsole.log(array.some(element => element > 6)); // retorna false",
                              "descricaoDoExemplo": "Neste exemplo, temos um array com 5 elementos. Usamos o método some() para verificar se pelo menos um elemento do array é maior que 3 e se pelo menos um elemento é maior que 6. O método retorna true para a primeira verificação, pois o elemento 4 é maior que 3, e retorna false para a segunda verificação, pois nenhum elemento é maior que 6."
                              },
                              {
                                "objeto": 241,
                                "função": "Number.prototype.valueOf",
                                "oQueFaz": "Retorna o valor primitivo do objeto Number especificado",
                                "exemplo": "let num = new Number(10);\nnum.valueOf(); // retorna 10",
                                "descricaoDoExemplo": "O método valueOf() retorna o valor primitivo do objeto Number especificado."
                                },
                                {
                                "objeto": 242,
                                "função": "Math.trunc",
                                "oQueFaz": "Retorna a parte inteira de um número, removendo os dígitos fracionários",
                                "exemplo": "Math.trunc(4.9); // retorna 4",
                                "descricaoDoExemplo": "O método Math.trunc() retorna a parte inteira de um número, removendo os dígitos fracionários."
                                },
                                {
                                "objeto": 243,
                                "função": "Math.sign",
                                "oQueFaz": "Retorna o sinal de um número, indicando se o número é positivo, negativo ou zero",
                                "exemplo": "Math.sign(-5); // retorna -1",
                                "descricaoDoExemplo": "O método Math.sign() retorna o sinal de um número, indicando se o número é positivo, negativo ou zero. Retorna -1 para números negativos, 1 para números positivos e 0 para zero."
                                },
                                {
                                "objeto": 244,
                                "função": "Math.asin",
                                "oQueFaz": "Retorna o arco seno de um número",
                                "exemplo": "Math.asin(0.5); // retorna 0.5235987755982989",
                                "descricaoDoExemplo": "O método Math.asin() retorna o arco seno de um número, em radianos."
                                },
                                {
                                "objeto": 245,
                                "função": "Math.acos",
                                "oQueFaz": "Retorna o arco cosseno de um número",
                                "exemplo": "Math.acos(0.5); // retorna 1.0471975511965979",
                                "descricaoDoExemplo": "O método Math.acos() retorna o arco cosseno de um número, em radianos."
                                },
                                {
                                "objeto": 246,
                                "função": "Math.atan",
                                "oQueFaz": "Retorna o arco tangente de um número",
                                "exemplo": "Math.atan(1); // retorna 0.7853981633974483",
                                "descricaoDoExemplo": "O método Math.atan() retorna o arco tangente de um número, em radianos."
                                },
                                {
                                "objeto": 247,
                                "função": "Math.atan2",
                                "oQueFaz": "Retorna o arco tangente do quociente de suas coordenadas",
                                "exemplo": "Math.atan2(1, 1); // retorna 0.7853981633974483",
                                "descricaoDoExemplo": "O método Math.atan2() retorna o arco tangente do quociente das coordenadas y e x, em radianos."
                                },
                                {
                                  "objeto": 248,
                                  "função": "Date.prototype.toString",
                                  "oQueFaz": "Retorna uma string representando a data especificada",
                                  "exemplo": "let date = new Date();\ndate.toString(); // retorna 'Thu Jun 24 2023 00 from andregusmao.",
                                  "descricaoDoExemplo": ""},
                                  {
                                    "objeto": 249,
                                    "função": "Date.prototype.toDateString",
                                    "oQueFaz": "Retorna uma representação legível de data em formato de string",
                                    "exemplo": "let date = new Date();\ndate.toDateString(); // retorna 'Thu Jun 24 2023'",
                                    "descricaoDoExemplo": "O método toDateString() retorna uma representação legível de data em formato de string, sem incluir informações sobre o horário."
                                    },
                                    {
                                    "objeto": 250,
                                    "função": "Date.prototype.toISOString",
                                    "oQueFaz": "Retorna uma representação de data em formato de string no padrão ISO 8601",
                                    "exemplo": "let date = new Date();\ndate.toISOString(); // retorna '2023-06-24T00:00:00.000Z'",
                                    "descricaoDoExemplo": "O método toISOString() retorna uma representação de data em formato de string no padrão ISO 8601 (AAAA-MM-DDTHH:mm:ss.sssZ), de acordo com o horário universal coordenado (UTC)."
                                    },
                                    {
                                    "objeto": 251,
                                    "função": "Date.prototype.toTimeString",
                                    "oQueFaz": "Retorna uma representação legível de horário em formato de string",
                                    "exemplo": "let date = new Date();\ndate.toTimeString(); // retorna '00:00:00 GMT+0000 (Coordinated Universal Time)'",
                                    "descricaoDoExemplo": "O método toTimeString() retorna uma representação legível de horário em formato de string, sem incluir informações sobre a data."
                                    },
                                    {
                                    "objeto": 252,
                                    "função": "Date.prototype.toUTCString",
                                    "oQueFaz": "Retorna uma representação de data em formato de string no padrão UTC",
                                    "exemplo": "let date = new Date();\ndate.toUTCString(); // retorna 'Thu, 24 Jun 2023 00:00:00 GMT'",
                                    "descricaoDoExemplo": "O método toUTCString() retorna uma representação de data em formato de string no padrão UTC (Coordinated Universal Time)."
                                    },
                                    {
                                    "objeto": 253,
                                    "função": "Date.prototype.getDate",
                                    "oQueFaz": "Retorna o dia do mês correspondente à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getDate(); // retorna 24",
                                    "descricaoDoExemplo": "O método getDate() retorna o dia do mês (de 1 a 31) correspondente à data especificada."
                                    },
                                    {
                                    "objeto": 254,
                                    "função": "Date.prototype.getDay",
                                    "oQueFaz": "Retorna o dia da semana correspondente à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getDay(); // retorna 4",
                                    "descricaoDoExemplo": "O método getDay() retorna o dia da semana (de 0 a 6, sendo 0 = domingo e 6 = sábado) correspondente à data especificada."
                                    },
                                    {
                                    "objeto": 255,
                                    "função": "Date.prototype.getFullYear",
                                    "oQueFaz": "Retorna o ano correspondente à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getFullYear(); // retorna 2023",
                                    "descricaoDoExemplo": "O método getFullYear() retorna o ano correspondente à data especificada, com 4 dígitos."
                                    },
                                    {
                                    "objeto": 256,
                                    "função": "Date.prototype.getHours",
                                    "oQueFaz": "Retorna as horas correspondentes à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:00');\ndate.getHours(); // retorna 10",
                                    "descricaoDoExemplo": "O método getHours() retorna as horas (de 0 a 23) correspondentes à data especificada."
                                    },
                                    {
                                    "objeto": 257,
                                    "função": "Date.prototype.getMilliseconds",
                                    "oQueFaz": "Retorna os milissegundos correspondentes à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:25.500');\ndate.getMilliseconds(); // retorna 500",
                                    "descricaoDoExemplo": "O método getMilliseconds() retorna os milissegundos (de 0 a 999) correspondentes à data especificada."
                                    },
                                    {
                                    "objeto": 258,
                                    "função": "Date.prototype.getMinutes",
                                    "oQueFaz": "Retorna os minutos correspondentes à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:00');\ndate.getMinutes(); // retorna 30",
                                    "descricaoDoExemplo": "O método getMinutes() retorna os minutos (de 0 a 59) correspondentes à data especificada."
                                    },
                                    {
                                    "objeto": 259,
                                    "função": "Date.prototype.getMonth",
                                    "oQueFaz": "Retorna o mês correspondente à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getMonth(); // retorna 5",
                                    "descricaoDoExemplo": "O método getMonth() retorna o mês (de 0 a 11, sendo 0 = janeiro e 11 = dezembro) correspondente à data especificada."
                                    },
                                    {
                                    "objeto": 260,
                                    "função": "Date.prototype.getSeconds",
                                    "oQueFaz": "Retorna os segundos correspondentes à data especificada",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:25');\ndate.getSeconds(); // retorna 25",
                                    "descricaoDoExemplo": "O método getSeconds() retorna os segundos (de 0 a 59) correspondentes à data especificada."
                                    },
                                    {
                                    "objeto": 261,
                                    "função": "Date.prototype.getTime",
                                    "oQueFaz": "Retorna o valor numérico correspondente à data especificada em milissegundos desde 1º de janeiro de 1970",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:00');\ndate.getTime(); // retorna 1677126600000",
                                    "descricaoDoExemplo": "O método getTime() retorna o valor numérico correspondente à data especificada em milissegundos desde 1º de janeiro de 1970."
                                    },
                                    {
                                    "objeto": 262,
                                    "função": "Date.prototype.getTimezoneOffset",
                                    "oQueFaz": "Retorna a diferença entre o horário local e o horário UTC em minutos",
                                    "exemplo": "let date = new Date();\ndate.getTimezoneOffset(); // retorna -180",
                                    "descricaoDoExemplo": "O método getTimezoneOffset() retorna a diferença entre o horário local e o horário UTC em minutos. Esse valor é positivo se o horário local estiver atrás do horário UTC e negativo se estiver à frente."
                                    },
                                    {
                                    "objeto": 263,
                                    "função": "Date.prototype.getUTCDate",
                                    "oQueFaz": "Retorna o dia do mês correspondente à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getUTCDate(); // retorna 24",
                                    "descricaoDoExemplo": "O método getUTCDate() retorna o dia do mês (de 1 a 31) correspondente à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 264,
                                    "função": "Date.prototype.getUTCDay",
                                    "oQueFaz": "Retorna o dia da semana correspondente à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getUTCDay(); // retorna 5",
                                    "descricaoDoExemplo": "O método getUTCDay() retorna o dia da semana (de 0 a 6, sendo 0 = domingo e 6 = sábado) correspondente à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 265,
                                    "função": "Date.prototype.getUTCFullYear",
                                    "oQueFaz": "Retorna o ano correspondente à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getUTCFullYear(); // retorna 2023",
                                    "descricaoDoExemplo": "O método getUTCFullYear() retorna o ano correspondente à data especificada, com 4 dígitos, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 266,
                                    "função": "Date.prototype.getUTCHours",
                                    "oQueFaz": "Retorna as horas correspondentes à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:00');\ndate.getUTCHours(); // retorna 10",
                                    "descricaoDoExemplo": "O método getUTCHours() retorna as horas (de 0 a 23) correspondentes à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 267,
                                    "função": "Date.prototype.getUTCMilliseconds",
                                    "oQueFaz": "Retorna os milissegundos correspondentes à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:25.500');\ndate.getUTCMilliseconds(); // retorna 500",
                                    "descricaoDoExemplo": "O método getUTCMilliseconds() retorna os milissegundos (de 0 a 999) correspondentes à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 268,
                                    "função": "Date.prototype.getUTCMinutes",
                                    "oQueFaz": "Retorna os minutos correspondentes à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:00');\ndate.getUTCMinutes(); // retorna 30",
                                    "descricaoDoExemplo": "O método getUTCMinutes() retorna os minutos (de 0 a 59) correspondentes à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 269,
                                    "função": "Date.prototype.getUTCMonth",
                                    "oQueFaz": "Retorna o mês correspondente à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24');\ndate.getUTCMonth(); // retorna 5",
                                    "descricaoDoExemplo": "O método getUTCMonth() retorna o mês (de 0 a 11, sendo 0 = janeiro e 11 = dezembro) correspondente à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                    "objeto": 270,
                                    "função": "Date.prototype.getUTCSeconds",
                                    "oQueFaz": "Retorna os segundos correspondentes à data especificada, de acordo com o horário UTC",
                                    "exemplo": "let date = new Date('2023-06-24T10:30:25');\ndate.getUTCSeconds(); // retorna 25",
                                    "descricaoDoExemplo": "O método getUTCSeconds() retorna os segundos (de 0 a 59) correspondentes à data especificada, de acordo com o horário UTC."
                                    },
                                    {
                                      "objeto": 270,
                                      "função": "Date.prototype.setMinutes",
                                      "oQueFaz": "Define os minutos de uma data de acordo com o horário local",
                                      "exemplo": "const data = new Date();\ndata.setMinutes(30);\nconsole.log(data.getMinutes()); // 30",
                                      "descricaoDoExemplo": "Cria uma nova data e define os minutos como 30. Em seguida, obtém os minutos da data atualizada, resultando em 30."
                                      },
                                      {
                                      "objeto": 271,
                                      "função": "Date.prototype.setUTCMinutes",
                                      "oQueFaz": "Define os minutos de uma data de acordo com o horário UTC",
                                      "exemplo": "const data = new Date();\ndata.setUTCMinutes(30);\nconsole.log(data.getUTCMinutes()); // 30",
                                      "descricaoDoExemplo": "Cria uma nova data e define os minutos como 30 no horário UTC. Em seguida, obtém os minutos da data atualizada, resultando em 30."
                                      },
                                      {
                                      "objeto": 272,
                                      "função": "Date.prototype.setHours",
                                      "oQueFaz": "Define as horas de uma data de acordo com o horário local",
                                      "exemplo": "const data = new Date();\ndata.setHours(12);\nconsole.log(data.getHours()); // 12",
                                      "descricaoDoExemplo": "Cria uma nova data e define as horas como 12. Em seguida, obtém as horas da data atualizada, resultando em 12."
                                      },
                                      {
                                      "objeto": 273,
                                      "função": "Date.prototype.setUTCHours",
                                      "oQueFaz": "Define as horas de uma data de acordo com o horário UTC",
                                      "exemplo": "const data = new Date();\ndata.setUTCHours(12);\nconsole.log(data.getUTCHours()); // 12",
                                      "descricaoDoExemplo": "Cria uma nova data e define as horas como 12 no horário UTC. Em seguida, obtém as horas da data atualizada, resultando em 12."
                                      },
                                      {
                                      "objeto": 274,
                                      "função": "Date.prototype.setDate",
                                      "oQueFaz": "Define o dia do mês de uma data",
                                      "exemplo": "const data = new Date();\ndata.setDate(15);\nconsole.log(data.getDate()); // 15",
                                      "descricaoDoExemplo": "Cria uma nova data e define o dia do mês como 15. Em seguida, obtém o dia do mês da data atualizada, resultando em 15."
                                      },
                                      {
                                      "objeto": 275,
                                      "função": "Date.prototype.setUTCDate",
                                      "oQueFaz": "Define o dia do mês de uma data de acordo com o horário UTC",
                                      "exemplo": "const data = new Date();\ndata.setUTCDate(15);\nconsole.log(data.getUTCDate()); // 15",
                                      "descricaoDoExemplo": "Cria uma nova data e define o dia do mês como 15 no horário UTC. Em seguida, obtém o dia do mês da data atualizada, resultando em 15."
                                      },
                                      {
                                        "objeto": 276,
                                        "função": "Date.prototype.setMonth",
                                        "oQueFaz": "Define o mês de uma data especificada de acordo com o valor local.",
                                        "exemplo": "var data = new Date();\ndata.setMonth(5);\nconsole.log(data.getMonth()); // retorna 5",
                                        "descricaoDoExemplo": "Cria um objeto Date e define o mês como 5 (junho). Em seguida, a função getMonth() é usada para obter o valor do mês, que será 5."
                                        },
                                        {
                                        "objeto": 277,
                                        "função": "Date.prototype.setUTCMonth",
                                        "oQueFaz": "Define o mês de uma data especificada de acordo com o valor UTC.",
                                        "exemplo": "var data = new Date();\ndata.setUTCMonth(5);\nconsole.log(data.getUTCMonth()); // retorna 5",
                                        "descricaoDoExemplo": "Cria um objeto Date e define o mês como 5 (junho) usando o valor UTC. Em seguida, a função getUTCMonth() é usada para obter o valor do mês, que será 5."
                                        },
                                        {
                                        "objeto": 278,
                                        "função": "Date.prototype.setFullYear",
                                        "oQueFaz": "Define o ano de uma data especificada de acordo com o valor local.",
                                        "exemplo": "var data = new Date();\ndata.setFullYear(2023);\nconsole.log(data.getFullYear()); // retorna 2023",
                                        "descricaoDoExemplo": "Cria um objeto Date e define o ano como 2023. Em seguida, a função getFullYear() é usada para obter o valor do ano, que será 2023."
                                        },
                                        {
                                        "objeto": 279,
                                        "função": "Date.prototype.setUTCFullYear",
                                        "oQueFaz": "Define o ano de uma data especificada de acordo com o valor UTC.",
                                        "exemplo": "var data = new Date();\ndata.setUTCFullYear(2023);\nconsole.log(data.getUTCFullYear()); // retorna 2023",
                                        "descricaoDoExemplo": "Cria um objeto Date e define o ano como 2023 usando o valor UTC. Em seguida, a função getUTCFullYear() é usada para obter o valor do ano, que será 2023."
                                        },
                                        {
                                        "objeto": 280,
                                        "função": "Date.prototype.setTime",
                                        "oQueFaz": "Define o valor numérico de uma data especificada como o número de milissegundos decorridos desde 1º de janeiro de 1970 00:00:00 UTC.",
                                        "exemplo": "var data = new Date();\ndata.setTime(1624578752000);\nconsole.log(data.getTime()); // retorna 1624578752000",
                                        "descricaoDoExemplo": "Cria um objeto Date e define o valor numérico da data como 1624578752000 (milissegundos desde 1º de janeiro de 1970 00:00:00 UTC). Em seguida, a função getTime() é usada para obter o valor numérico da data, que será 1624578752000."
                                        },
                                        {
                                          "objeto": 281,
                                          "função": "Date.prototype.setYear",
                                          "oQueFaz": "Define o ano de uma data especificada de acordo com o horário local.",
                                          "exemplo": "var data = new Date();\ndata.setYear(2023);",
                                          "descricaoDoExemplo": "Define o ano da data 'data' como 2023."
                                        },
                                        {
                                          "objeto": 282,
                                          "função": "Date.prototype.toGMTString",
                                          "oQueFaz": "Retorna a representação de uma data em formato de string, de acordo com o horário do Meridiano de Greenwich (GMT).",
                                          "exemplo": "var data = new Date();\nvar stringGMT = data.toGMTString();",
                                          "descricaoDoExemplo": "Converte a data 'data' para uma string no formato GMT e a armazena em 'stringGMT'."
                                        },
                                        {
                                          "objeto": 283,
                                          "função": "Math.acosh",
                                          "oQueFaz": "Retorna o cosseno hiperbólico inverso de um número.",
                                          "exemplo": "var numero = 1.5;\nvar cossenoHiperbolicoInverso = Math.acosh(numero);",
                                          "descricaoDoExemplo": "Calcula o cosseno hiperbólico inverso do número 1.5 e armazena o resultado em 'cossenoHiperbolicoInverso'."
                                        },
                                        {
                                          "objeto": 284,
                                          "função": "Math.asinh",
                                          "oQueFaz": "Retorna o seno hiperbólico inverso de um número.",
                                          "exemplo": "var numero = 2.5;\nvar senoHiperbolicoInverso = Math.asinh(numero);",
                                          "descricaoDoExemplo": "Calcula o seno hiperbólico inverso do número 2.5 e armazena o resultado em 'senoHiperbolicoInverso'."
                                        },
                                        {
                                          "objeto": 285,
                                          "função": "Math.atanh",
                                          "oQueFaz": "Retorna a tangente hiperbólica inversa de um número.",
                                          "exemplo": "var numero = 0.75;\nvar tangenteHiperbolicaInversa = Math.atanh(numero);",
                                          "descricaoDoExemplo": "Calcula a tangente hiperbólica inversa do número 0.75 e armazena o resultado em 'tangenteHiperbolicaInversa'."
                                        },
                                        {
                                          "objeto": 286,
                                          "função": "Math.cbrt",
                                          "oQueFaz": "Retorna a raiz cúbica de um número.",
                                          "exemplo": "var numero = 27;\nvar raizCubica = Math.cbrt(numero);",
                                          "descricaoDoExemplo": "Calcula a raiz cúbica do número 27 e armazena o resultado em 'raizCubica'."
                                        },
                                        {
                                          "objeto": 287,
                                          "função": "Math.clz32",
                                          "oQueFaz": "Retorna o número de zeros à esquerda na representação binária de 32 bits de um número.",
                                          "exemplo": "var numero = 9;\nvar zerosEsquerda = Math.clz32.",
                                          "descricaoDoExemplo": "Calcula a raiz cúbica do número 27 e armazena o resultado em 'raizCubica'."},
                                          {
                                            "objeto": 288,
                                            "função": "Math.cosh",
                                            "oQueFaz": "Retorna o cosseno hiperbólico de um número.",
                                            "exemplo": "var numero = 2;\nvar cossenoHiperbolico = Math.cosh(numero);",
                                            "descricaoDoExemplo": "Calcula o cosseno hiperbólico do número 2 e armazena o resultado em 'cossenoHiperbolico'."
                                          },
                                          {
                                            "objeto": 289,
                                            "função": "Math.expm1",
                                            "oQueFaz": "Retorna o valor exponencial de um número decrementado em 1.",
                                            "exemplo": "var numero = 1;\nvar expMenos1 = Math.expm1(numero);",
                                            "descricaoDoExemplo": "Calcula o valor exponencial do número 1 decrementado em 1 e armazena o resultado em 'expMenos1'."
                                          },
                                          {
                                            "objeto": 290,
                                            "função": "Math.hypot",
                                            "oQueFaz": "Retorna a raiz quadrada da soma dos quadrados dos argumentos.",
                                            "exemplo": "var a = 3;\nvar b = 4;\nvar hipotenusa = Math.hypot(a, b);",
                                            "descricaoDoExemplo": "Calcula a hipotenusa de um triângulo retângulo com os catetos 'a' e 'b' e armazena o resultado em 'hipotenusa'."
                                          },
                                          {
                                            "objeto": 291,
                                            "função": "Math.imul",
                                            "oQueFaz": "Retorna o resultado da multiplicação de dois números inteiros de 32 bits.",
                                            "exemplo": "var a = 5;\nvar b = 6;\nvar resultado = Math.imul(a, b);",
                                            "descricaoDoExemplo": "Calcula o resultado da multiplicação dos números inteiros 5 e 6 e armazena o resultado em 'resultado'."
                                          },
                                          {
                                            "objeto": 292,
                                            "função": "Math.log1p",
                                            "oQueFaz": "Retorna o logaritmo natural de 1 mais um número.",
                                            "exemplo": "var numero = 1;\nvar log1maisNumero = Math.log1p(numero);",
                                            "descricaoDoExemplo": "Calcula o logaritmo natural de 1 mais o número 1 e armazena o resultado em 'log1maisNumero'."
                                          },
                                          {
                                            "objeto": 293,
                                            "função": "Math.log10",
                                            "oQueFaz": "Retorna o logaritmo de base 10 de um número.",
                                            "exemplo": "var numero = 100;\nvar log10Numero = Math.log10(numero);",
                                            "descricaoDoExemplo": "Calcula o logaritmo de base 10 do número 100 e armazena o resultado em 'log10Numero'."
                                          },
                                          {
                                            "objeto": 294,
                                            "função": "Math.log2",
                                            "oQueFaz": "Retorna o logaritmo de base 2 de um número.",
                                            "exemplo": "var numero = 8;\nvar log2Numero = Math.log2(numero);",
                                            "descricaoDoExemplo": "Calcula o logaritmo de base 2 do número 8 e armazena o resultado em 'log2Numero'."
                                          },
                                          {
                                            "objeto": 295,
                                            "função": "Math.sign",
                                            "oQueFaz": "Retorna o sinal de um número, indicando se o número é positivo, negativo ou zero.",
                                            "exemplo": "var numero = -5;\nvar sinal = Math.sign(numero);",
                                            "descricaoDoExemplo": "Verifica o sinal do número -5 e armazena o resultado em 'sinal'."
                                          },
                                          {
                                            "objeto": 296,
                                            "função": "Math.sinh",
                                            "oQueFaz": "Retorna o seno hiperbólico de um número.",
                                            "exemplo": "var numero = 1;\nvar senoHiperbolico = Math.sinh(numero);",
                                            "descricaoDoExemplo": "Calcula o seno hiperbólico do número 1 e armazena o resultado em 'senoHiperbolico'."
                                          },
                                          {
                                            "objeto": 297,
                                            "função": "Math.tanh",
                                            "oQueFaz": "Retorna a tangente hiperbólica de um número.",
                                            "exemplo": "var numero = 0.5;\nvar tangenteHiperbolica = Math.tanh(numero);",
                                            "descricaoDoExemplo": "Calcula a tangente hiperbólica do número 0.5 e armazena o resultado em 'tangenteHiperbolica'."
                                          },
                                          {
                                            "objeto": 298,
                                            "função": "String.prototype.anchor",
                                            "oQueFaz": "Cria um elemento de âncora HTML com o valor da string atual como o texto do link.",
                                            "exemplo": "var str = 'Hello, world!';\nvar result = str.anchor('link');\nconsole.log(result);\n// Output: <a name=link>Hello, world!</a>",
                                            "descricaoDoExemplo": "O exemplo cria um elemento de âncora HTML com o nome 'link' e o valor da string 'Hello, world!' como o texto do link."
                                            },
                                            {
                                            "objeto": 299,
                                            "função": "String.prototype.big",
                                            "oQueFaz": "Cria uma string HTML <big> envolvendo o valor da string atual.",
                                            "exemplo": "var str = 'Hello, world!';\nvar result = str.big();\nconsole.log(result);\n// Output: <big>Hello, world!</big>",
                                            "descricaoDoExemplo": "O exemplo envolve o valor da string 'Hello, world!' com a tag HTML <big> para torná-lo visualmente maior."
                                            },
                                            {
                                            "objeto": 300,
                                            "função": "String.prototype.blink",
                                            "oQueFaz": "Cria uma string HTML <blink> envolvendo o valor da string atual para fazê-lo piscar no navegador (descontinuado).",
                                            "exemplo": "var str = 'Hello, world!';\nvar result = str.blink();\nconsole.log(result);\n// Output: <blink>Hello, world!</blink>",
                                            "descricaoDoExemplo": "O exemplo envolve o valor da string 'Hello, world!' com a tag HTML <blink> para fazer o texto piscar no navegador (observe que essa tag está descontinuada e não é mais suportada em muitos navegadores)."
                                            },
                                            {
                                            "objeto": 301,
                                            "função": "String.prototype.bold",
                                            "oQueFaz": "Cria uma string HTML <b> envolvendo o valor da string atual para torná-lo em negrito.",
                                            "exemplo": "var str = 'Hello, world!';\nvar result = str.bold();\nconsole.log(result);\n// Output: <b>Hello, world!</b>",
                                            "descricaoDoExemplo": "O exemplo envolve o valor da string 'Hello, world!' com a tag HTML <b> para torná-lo em negrito."
                                            },
                                            {
                                            "objeto": 302,
                                            "função": "String.prototype.fixed",
                                            "oQueFaz": "Cria uma string HTML <tt> envolvendo o valor da string atual para exibi-lo em uma fonte de espaçamento fixo.",
                                            "exemplo": "var str = 'Hello, world!';\nvar result = str.fixed();\nconsole.log(result);\n// Output: <tt>Hello, world!</tt>",
                                            "descricaoDoExemplo": "O exemplo envolve o valor da string 'Hello, world!' com a tag HTML <tt> para exibi-lo em uma fonte de espaçamento fixo."
                                            },
                                            {
                                              "objeto": 303,
                                              "função": "String.prototype.fontcolor",
                                              "oQueFaz": "Define a cor do texto de uma string usando tags <font>",
                                              "exemplo": "var texto = 'Hello World';\ntexto.fontcolor('red'); // retorna <font color='red'>Hello World</font>'",
                                              "descricaoDoExemplo": "Define a cor do texto da string 'Hello World' como vermelho usando a função fontcolor() e retorna a string modificada"
                                              },
                                              {
                                              "objeto": 304,
                                              "função": "String.prototype.fontsize",
                                              "oQueFaz": "Define o tamanho da fonte de uma string usando tags <font>",
                                              "exemplo": "var texto = 'Hello World';\ntexto.fontsize(6); // retorna <font size='6'>Hello World</font>'",
                                              "descricaoDoExemplo": "Define o tamanho da fonte da string 'Hello World' como 6 usando a função fontsize() e retorna a string modificada"
                                              },
                                              {
                                              "objeto": 305,
                                              "função": "String.prototype.italics",
                                              "oQueFaz": "Define o estilo itálico de uma string usando tags <i>",
                                              "exemplo": "var texto = 'Hello World';\ntexto.italics(); // retorna <i>Hello World</i>'",
                                              "descricaoDoExemplo": "Define o estilo itálico da string 'Hello World' usando a função italics() e retorna a string modificada"
                                              },
                                              {
                                              "objeto": 306,
                                              "função": "String.prototype.link",
                                              "oQueFaz": "Cria um link HTML de uma string usando tags <a>",
                                              "exemplo": "var url = 'https://www.example.com';\nvar texto = 'Example';\ntexto.link(url); // retorna <a href='https://www.example.com'>Example</a>'",
                                              "descricaoDoExemplo": "Cria um link HTML com o texto 'Example' e o URL 'https://www.example.com' usando a função link() e retorna o link"
                                              },
                                              {
                                              "objeto": 307,
                                              "função": "String.prototype.small",
                                              "oQueFaz": "Define o estilo de texto pequeno de uma string usando tags <small>",
                                              "exemplo": "var texto = 'Hello World';\ntexto.small(); // retorna <small>Hello World</small>'",
                                              "descricaoDoExemplo": "Define o estilo de texto pequeno da string 'Hello World' usando a função small() e retorna a string modificada"
                                              },
                                              {
                                              "objeto": 308,
                                              "função": "String.prototype.strike",
                                              "oQueFaz": "Define o estilo de texto riscado de uma string usando tags <strike>",
                                              "exemplo": "var texto = 'Hello World';\ntexto.strike(); // retorna <strike>Hello World</strike>'",
                                              "descricaoDoExemplo": "Define o estilo de texto riscado da string 'Hello World' usando a função strike() e retorna a string modificada"
                                              },
                                              
  {
    "objeto": 303,
    "função": "String.prototype.fontcolor",
    "oQueFaz": "Define a cor do texto em HTML",
    "exemplo": "var texto = 'Exemplo';\ntexto.fontcolor('blue'); // retorna '<font color=blue>Exemplo</font>'",
    "descricaoDoExemplo": "Define a cor do texto 'Exemplo' como azul, envolvendo-o em tags HTML <font> com o atributo color definido como 'blue'"
    },
    {
    "objeto": 304,
    "função": "String.prototype.fontsize",
    "oQueFaz": "Define o tamanho da fonte do texto em HTML",
    "exemplo": "var texto = 'Exemplo';\ntexto.fontsize(18); // retorna '<font size=18>Exemplo</font>'",
    "descricaoDoExemplo": "Define o tamanho da fonte do texto 'Exemplo' como 18, envolvendo-o em tags HTML <font> com o atributo size definido como '18'"
    },
    {
    "objeto": 305,
    "função": "String.prototype.italics",
    "oQueFaz": "Define o texto em itálico em HTML",
    "exemplo": "var texto = 'Exemplo';\ntexto.italics(); // retorna '<i>Exemplo</i>'",
    "descricaoDoExemplo": "Define o texto 'Exemplo' como itálico, envolvendo-o em tags HTML <i>"
    },
    {
    "objeto": 306,
    "função": "String.prototype.link",
    "oQueFaz": "Cria um link em HTML",
    "exemplo": "var url = 'https://www.exemplo.com';\nurl.link('Exemplo'); // retorna '<a href=https://www.exemplo.com\">Exemplo</a>'",
    "descricaoDoExemplo": "Cria um link com o texto 'Exemplo' que redireciona para a URL 'https://www.exemplo.com', envolvendo-o em tags HTML <a> com o atributo href definido como 'https://www.exemplo.com'"
    },
    {
    "objeto": 307,
    "função": "String.prototype.small",
    "oQueFaz": "Define o texto como pequeno em HTML",
    "exemplo": "var texto = 'Exemplo';\ntexto.small(); // retorna '<small>Exemplo</small>'",
    "descricaoDoExemplo": "Define o texto 'Exemplo' como pequeno, envolvendo-o em tags HTML <small>"
    },
    {
    "objeto": 308,
    "função": "String.prototype.strike",
    "oQueFaz": "Define o texto como tachado (riscado) em HTML",
    "exemplo": "var texto = 'Exemplo';\ntexto.strike(); // retorna '<strike>Exemplo</strike>'",
    "descricaoDoExemplo": "Define o texto 'Exemplo' como tachado (riscado), envolvendo-o em tags HTML <strike>"
    },
    
  {
    "objeto": 309,
    "função": "String.prototype.sub",
    "oQueFaz": "Retorna uma string com a tag <sub> HTML envolvendo o texto",
    "exemplo": "const texto = 'H2O';\ntexto.sub(); // retorna 'H<sub>2</sub>O'",
    "descricaoDoExemplo": "Retorna a string 'H<sub>2</sub>O', onde o número 2 está formatado como subscrito"
    },
    {
    "objeto": 310,
    "função": "String.prototype.sup",
    "oQueFaz": "Retorna uma string com a tag <sup> HTML envolvendo o texto",
    "exemplo": "const texto = '10<sup>2</sup>';\ntexto.sup(); // retorna '10<sup>2</sup>'",
    "descricaoDoExemplo": "Retorna a string '10<sup>2</sup>', onde o número 2 está formatado como sobrescrito"
    },
    {
    "objeto": 311,
    "função": "Array.from()",
    "oQueFaz": "Cria uma nova instância de array a partir de um objeto semelhante a um array",
    "exemplo": "const obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };\nArray.from(obj); // retorna ['a', 'b', 'c']",
    "descricaoDoExemplo": "Cria um novo array com os elementos 'a', 'b' e 'c' a partir do objeto semelhante a um array"
    },
    {
    "objeto": 312,
    "função": "Array.isArray()",
    "oQueFaz": "Verifica se um valor é um array",
    "exemplo": "Array.isArray([1, 2, 3]); // retorna true",
    "descricaoDoExemplo": "Verifica se o valor [1, 2, 3] é um array e retorna true"
    },
    {
    "objeto": 313,
    "função": "Array.of()",
    "oQueFaz": "Cria uma nova instância de array com os elementos fornecidos",
    "exemplo": "Array.of(1, 2, 3); // retorna [1, 2, 3]",
    "descricaoDoExemplo": "Cria um novo array com os elementos 1, 2 e 3"
    },
    {
    "objeto": 314,
    "função": "Array.prototype.concat()",
    "oQueFaz": "Concatena arrays ou valores em um novo array",
    "exemplo": "const array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\narray1.concat(array2); // retorna [1, 2, 3, 4, 5, 6]",
    "descricaoDoExemplo": "Concatena os arrays array1 e array2 em um novo array resultante [1, 2, 3, 4, 5, 6]"
    },
    {
    "objeto": 315,
    "função": "Array.prototype.filter()",
    "oQueFaz": "Cria um novo array com todos os elementos que passam por um teste",
    "exemplo": "",
    "descricaoDoExemplo": ""
  },
  {
    "objeto": 316,
    "função": "Array.prototype.find()",
    "oQueFaz": "Retorna o primeiro elemento de um array que satisfaça a condição especificada em uma função de teste",
    "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst numeroMaiorQueTres = numeros.find(num => num > 3);\nconsole.log(numeroMaiorQueTres); // retorna 4",
    "descricaoDoExemplo": "Retorna o primeiro número maior que 3 do array 'numeros', ou seja, o número 4"
    },
    {
    "objeto": 317,
    "função": "Array.prototype.findIndex()",
    "oQueFaz": "Retorna o índice do primeiro elemento de um array que satisfaça a condição especificada em uma função de teste",
    "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst indiceMaiorQueTres = numeros.findIndex(num => num > 3);\nconsole.log(indiceMaiorQueTres); // retorna 3",
    "descricaoDoExemplo": "Retorna o índice do primeiro número maior que 3 do array 'numeros', ou seja, o índice 3"
    },
    {
    "objeto": 318,
    "função": "Array.prototype.flat()",
    "oQueFaz": "Cria um novo array com todos os elementos de sub-arrays concatenados de forma recursiva até a profundidade especificada",
    "exemplo": "const array = [1, 2, [3, 4, [5, 6]]];\nconst arrayAchatado = array.flat();\nconsole.log(arrayAchatado); // retorna [1, 2, 3, 4, [5, 6]]",
    "descricaoDoExemplo": "Cria um novo array com todos os elementos de 'array' achatados até uma profundidade de 1"
    },
    {
    "objeto": 319,
    "função": "Array.prototype.flatMap()",
    "oQueFaz": "Executa um mapeamento e, em seguida, achatamento (flat) dos elementos do array de acordo com uma função",
    "exemplo": "const numeros = [1, 2, 3];\nconst numerosDuplicados = numeros.flatMap(num => [num, num]);\nconsole.log(numerosDuplicados); // retorna [1, 1, 2, 2, 3, 3]",
    "descricaoDoExemplo": "Cria um novo array onde cada número do array 'numeros' é duplicado, resultando em [1, 1, 2, 2, 3, 3]"
    },
    {
    "objeto": 320,
    "função": "Array.prototype.forEach()",
    "oQueFaz": "Executa uma função em cada elemento de um array",
    "exemplo": "const numeros = [1, 2, 3];\nnumeros.forEach(num => console.log(num));\n// imprime:\n// 1\n// 2\n// 3",
    "descricaoDoExemplo": "Executa a função de console.log para cada número do array 'numeros', imprimindo-os no console"
    },
    {
    "objeto": 321,
    "função": "Array.prototype.includes()",
    "oQueFaz": "Verifica se um array contém um determinado elemento e retorna true ou false",
    "exemplo": "const numeros = [1, 2, 3];\nconsole.log(numeros.includes(2)); // retorna true\nconsole.log(numeros.includes(4)); // retorna false",
    "descricaoDoExemplo": "Verifica se o número 2 está presente no array 'numeros' (está) e se o número 4 está presente (não está)"
    },
    {
    "objeto": 322,
    "função": "Array.prototype.indexOf()",
    "oQueFaz": "Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 caso contrário",
    "exemplo": "const numeros = [1, 2, 3, 2];\nconsole.log(numeros.indexOf(2)); // retorna 1\nconsole.log(numeros.indexOf(4)); // retorna -1",
    "descricaoDoExemplo": "Retorna o índice da primeira ocorrência do número 2 no array 'numeros' (índice 1) e verifica se o número 4 está presente (não está)"
    },
    {
    "objeto": 323,
    "função": "Array.prototype.join()",
    "oQueFaz": "Une todos os elementos de um array em uma string, separados por um delimitador especificado",
    "exemplo": "const elementos = ['Maçã', 'Banana', 'Laranja'];\nconst frase = elementos.join(', ');\nconsole.log(frase); // retorna 'Maçã, Banana, Laranja'",
    "descricaoDoExemplo": "Junta os elementos do array 'elementos' em uma string, separados por vírgula e espaço"
    },
    {
    "objeto": 324,
    "função": "Array.prototype.keys()",
    "oQueFaz": "Retorna um novo objeto Array Iterator que contém as chaves (índices) para cada elemento do array",
    "exemplo": "const array = ['a', 'b', 'c'];\nconst iterator = array.keys();\nconsole.log(iterator.next()); // retorna { value: 0, done: false }\nconsole.log(iterator.next()); // retorna { value: 1, done: false }\nconsole.log(iterator.next()); // retorna { value: 2, done: false }\nconsole.log(iterator.next()); // retorna { value: undefined, done: true }",
    "descricaoDoExemplo": "Retorna um iterador que contém as chaves (índices) do array 'array', começando pelo índice 0 e terminando no índice 2"
    },
    {
    "objeto": 325,
    "função": "Array.prototype.lastIndexOf()",
    "oQueFaz": "Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 caso contrário",
    "exemplo": "const numeros = [1, 2, 3, 2];\nconsole.log(numeros.lastIndexOf(2)); // retorna 3\nconsole.log(numeros.lastIndexOf(4)); // retorna -1",
    "descricaoDoExemplo": "Retorna o índice da última ocorrência do número 2 no array 'numeros' (índice 3) e verifica se o número 4 está presente (não está)"
    },
    {
      "objeto": 325,
      "função": "Array.prototype.lastIndexOf()",
      "oQueFaz": "Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 caso contrário",
      "exemplo": "const numeros = [1, 2, 3, 2];\nconsole.log(numeros.lastIndexOf(2)); // retorna 3\nconsole.log(numeros.lastIndexOf(4)); // retorna -1",
      "descricaoDoExemplo": "Retorna o índice da última ocorrência do número 2 no array 'numeros' (índice 3) e verifica se o número 4 está presente (não está)"
      },
      {
      "objeto": 326,
      "função": "Array.prototype.map()",
      "oQueFaz": "Cria um novo array com os resultados de uma função chamada em cada elemento do array original",
      "exemplo": "const numeros = [1, 2, 3];\nconst numerosDobrados = numeros.map(num => num * 2);\nconsole.log(numerosDobrados); // retorna [2, 4, 6]",
      "descricaoDoExemplo": "Cria um novo array onde cada número do array 'numeros' é dobrado, resultando em [2, 4, 6]"
      },
      {
      "objeto": 327,
      "função": "Array.prototype.pop()",
      "oQueFaz": "Remove o último elemento de um array e o retorna",
      "exemplo": "const numeros = [1, 2, 3];\nconst ultimoNumero = numeros.pop();\nconsole.log(numeros); // retorna [1, 2]\nconsole.log(ultimoNumero); // retorna 3",
      "descricaoDoExemplo": "Remove o último número do array 'numeros' (3) e o retorna"
      },
      {
      "objeto": 328,
      "função": "Array.prototype.push()",
      "oQueFaz": "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array",
      "exemplo": "const numeros = [1, 2];\nconst novoComprimento = numeros.push(3, 4);\nconsole.log(numeros); // retorna [1, 2, 3, 4]\nconsole.log(novoComprimento); // retorna 4",
      "descricaoDoExemplo": "Adiciona os números 3 e 4 ao final do array 'numeros' e retorna o novo comprimento do array"
      },
      {
      "objeto": 329,
      "função": "Array.prototype.reduce()",
      "oQueFaz": "Executa uma função em cada elemento do array, resultando em um único valor de retorno",
      "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst soma = numeros.reduce((acumulador, num) => acumulador + num, 0);\nconsole.log(soma); // retorna 15",
      "descricaoDoExemplo": "Calcula a soma de todos os números do array 'numeros' utilizando o método reduce, resultando em 15"
      },
      {
      "objeto": 330,
      "função": "Array.prototype.reduceRight()",
      "oQueFaz": "Executa uma função em cada elemento do array, da direita para a esquerda, resultando em um único valor de retorno",
      "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst somaReversa = numeros.reduceRight((acumulador, num) => acumulador + num, 0);\nconsole.log(somaReversa); // retorna 15",
      "descricaoDoExemplo": "Calcula a soma de todos os números do array 'numeros' da direita para a esquerda utilizando o método reduceRight, resultando em 15"
      },
      {
        "objeto": 331,
        "função": "Array.prototype.reverse()",
        "oQueFaz": "Inverte a ordem dos elementos de um array",
        "exemplo": "const numeros = [1, 2, 3];\nnumeros.reverse();\nconsole.log(numeros); // retorna [3, 2, 1]",
        "descricaoDoExemplo": "Inverte a ordem dos números no array 'numeros', resultando em [3, 2, 1]"
        },
        {
        "objeto": 332,
        "função": "Array.prototype.shift()",
        "oQueFaz": "Remove o primeiro elemento de um array e o retorna",
        "exemplo": "const numeros = [1, 2, 3];\nconst primeiroNumero = numeros.shift();\nconsole.log(numeros); // retorna [2, 3]\nconsole.log(primeiroNumero); // retorna 1",
        "descricaoDoExemplo": "Remove o primeiro número do array 'numeros' (1) e o retorna"
        },
        {
        "objeto": 333,
        "função": "Array.prototype.slice()",
        "oQueFaz": "Retorna uma cópia superficial de uma parte de um array em um novo array, sem modificar o array original",
        "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst subArray = numeros.slice(1, 4);\nconsole.log(subArray); // retorna [2, 3, 4]",
        "descricaoDoExemplo": "Cria um novo array contendo os elementos do array 'numeros' do índice 1 ao índice 3 (não inclusivo)"
        },
        {
        "objeto": 334,
        "função": "Array.prototype.some()",
        "oQueFaz": "Verifica se pelo menos um elemento de um array satisfaz a condição especificada em uma função de teste",
        "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst temNumeroPar = numeros.some(num => num % 2 === 0);\nconsole.log(temNumeroPar); // retorna true",
        "descricaoDoExemplo": "Verifica se há pelo menos um número par no array 'numeros' (há) utilizando o método some"
        },
        {
        "objeto": 335,
        "função": "Array.prototype.sort()",
        "oQueFaz": "Ordena os elementos de um array localmente e retorna o array ordenado",
        "exemplo": "const numeros = [3, 1, 2];\nnumeros.sort();\nconsole.log(numeros); // retorna [1, 2, 3]",
        "descricaoDoExemplo": "Ordena os números do array 'numeros' em ordem crescente utilizando o método sort"
        },
        {
        "objeto": 336,
        "função": "Array.prototype.splice()",
        "oQueFaz": "Altera o conteúdo de um array, removendo, substituindo ou adicionando elementos",
        "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst numerosRemovidos = numeros.splice(2, 2);\nconsole.log(numeros); // retorna [1, 2, 5]\nconsole.log(numerosRemovidos); // retorna [3, 4]",
        "descricaoDoExemplo": "Remove dois números a partir do índice 2 do array 'numeros' (3 e 4) e retorna-os em um novo array"
        },
        {
          "objeto": 337,
          "função": "Array.prototype.toLocaleString()",
          "oQueFaz": "Retorna uma string representando os elementos de um array, localizada de acordo com o idioma especificado",
          "exemplo": "const numeros = [1, 2, 3];\nconst stringLocalizada = numeros.toLocaleString('pt-BR');\nconsole.log(stringLocalizada); // retorna '1,2,3'",
          "descricaoDoExemplo": "Retorna uma string com os números do array 'numeros' representados como uma lista separada por vírgulas no formato localizado para o idioma pt-BR"
          },
          {
          "objeto": 338,
          "função": "Array.prototype.toString()",
          "oQueFaz": "Retorna uma string representando os elementos de um array",
          "exemplo": "const numeros = [1, 2, 3];\nconst string = numeros.toString();\nconsole.log(string); // retorna '1,2,3'",
          "descricaoDoExemplo": "Retorna uma string com os números do array 'numeros' representados como uma lista separada por vírgulas"
          },
          {
          "objeto": 339,
          "função": "Array.prototype.unshift()",
          "oQueFaz": "Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array",
          "exemplo": "const numeros = [2, 3];\nconst novoComprimento = numeros.unshift(1);\nconsole.log(numeros); // retorna [1, 2, 3]\nconsole.log(novoComprimento); // retorna 3",
          "descricaoDoExemplo": "Adiciona o número 1 no início do array 'numeros' e retorna o novo comprimento do array"
          },
          {
          "objeto": 340,
          "função": "Array.prototype.valueOf()",
          "oQueFaz": "Retorna o próprio array",
          "exemplo": "const numeros = [1, 2, 3];\nconst array = numeros.valueOf();\nconsole.log(array); // retorna [1, 2, 3]",
          "descricaoDoExemplo": "Retorna o array 'numeros' como ele é, ou seja, [1, 2, 3]"
          },
          {
          "objeto": 341,
          "função": "Array.from()",
          "oQueFaz": "Cria um novo array a partir de um objeto iterável ou de um array-like object",
          "exemplo": "const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };\nconst novoArray = Array.from(arrayLike);\nconsole.log(novoArray); // retorna ['a', 'b', 'c']",
          "descricaoDoExemplo": "Cria um novo array contendo os elementos do objeto 'arrayLike'"
          },
          {
          "objeto": 342,
          "função": "Array.isArray()",
          "oQueFaz": "Verifica se um valor é um array",
          "exemplo": "console.log(Array.isArray([1, 2, 3])); // retorna true\nconsole.log(Array.isArray('texto')); // retorna false",
          "descricaoDoExemplo": "Verifica se o valor [1, 2, 3] é um array (é) e se o valor 'texto' é um array (não é)"
          },
          {
            "objeto": 343,
            "função": "Array.of()",
            "oQueFaz": "Cria um novo array com um número variável de elementos passados como argumento",
            "exemplo": "const novoArray = Array.of(1, 2, 3);\nconsole.log(novoArray); // retorna [1, 2, 3]",
            "descricaoDoExemplo": "Cria um novo array contendo os elementos 1, 2 e 3"
            },
            {
            "objeto": 344,
            "função": "Array.prototype@@iterator",
            "oQueFaz": "Retorna um objeto Array Iterator que contém os pares chave/valor para cada elemento do array",
            "exemplo": "const array = ['a', 'b', 'c'];\nconst iterator = arraySymbol.iterator;\nconsole.log(iterator.next()); // retorna { value: 'a', done: false }\nconsole.log(iterator.next()); // retorna { value: 'b', done: false }\nconsole.log(iterator.next()); // retorna { value: 'c', done: false }\nconsole.log(iterator.next()); // retorna { value: undefined, done: true }",
            "descricaoDoExemplo": "Retorna um iterador que contém os elementos do array 'array' como pares chave/valor"
            },
            {
            "objeto": 345,
            "função": "Array.prototype[@@unscopables]",
            "oQueFaz": "Uma propriedade de objeto que define quais propriedades não devem ser expostas quando o objeto é escopo de uma instrução 'with'",
            "exemplo": "const array = [1, 2, 3];\nwith (array) {\n console.log(length); // retorna 3\n console.log(keys()); // retorna um erro\n}",
            "descricaoDoExemplo": "O objeto Array possui propriedades definidas em @@unscopables, como 'keys', que não são expostas dentro do escopo de uma instrução 'with'"
            },
            {
            "objeto": 346,
            "função": "Array.prototype[@@species]",
            "oQueFaz": "Retorna a função de construtor Array que é usada para criar objetos derivados",
            "exemplo": "class MeuArray extends Array {\n // implementação personalizada\n}\nconst meuArray = new MeuArray(1, 2, 3);\nconsole.log(meuArray instanceof MeuArray); // retorna true\nconsole.log(meuArray instanceof Array); // retorna true",
            "descricaoDoExemplo": "A propriedade @@species permite que classes derivadas de Array retornem instâncias do tipo derivado ao invés de Array"
            },
            {
            "objeto": 347,
            "função": "Array.prototype[@@toStringTag]",
            "oQueFaz": "Retorna uma string que representa o tipo do objeto",
            "exemplo": "const array = [];\nconsole.log(Object.prototype.toString.call(array)); // retorna '[object Array]'",
            "descricaoDoExemplo": "Retorna uma string '[object Array]' que representa o tipo do objeto 'array'"
            },
            {
              "objeto": 348,
              "função": "Array.prototype[@@unscopables]",
              "oQueFaz": "Uma propriedade de objeto que define quais propriedades não devem ser expostas quando o objeto é escopo de uma instrução 'with'",
              "exemplo": "const array = [1, 2, 3];\nwith (array) {\n console.log(length); // retorna 3\n console.log(keys()); // retorna um erro\n}",
              "descricaoDoExemplo": "O objeto Array possui propriedades definidas em @@unscopables, como 'keys', que não são expostas dentro do escopo de uma instrução 'with'"
              },
              {
              "objeto": 349,
              "função": "Array.prototype.copyWithin()",
              "oQueFaz": "Copia uma sequência de elementos de um array dentro do próprio array, substituindo elementos existentes",
              "exemplo": "const numeros = [1, 2, 3, 4, 5];\nnumeros.copyWithin(0, 3);\nconsole.log(numeros); // retorna [4, 5, 3, 4, 5]",
              "descricaoDoExemplo": "Copia os elementos do array 'numeros' a partir do índice 3 e cola-os a partir do índice 0, substituindo os elementos existentes"
              },
              {
              "objeto": 350,
              "função": "Array.prototype.entries()",
              "oQueFaz": "Retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array",
              "exemplo": "const array = ['a', 'b', 'c'];\nconst iterator = array.entries();\nconsole.log(iterator.next()); // retorna { value: [0, 'a'], done: false }\nconsole.log(iterator.next()); // retorna { value: [1, 'b'], done: false }\nconsole.log(iterator.next()); // retorna { value: [2, 'c'], done: false }\nconsole.log(iterator.next()); // retorna { value: undefined, done: true }",
              "descricaoDoExemplo": "Retorna um iterador que contém os pares chave/valor para cada índice do array 'array'"
              },
              {
              "objeto": 351,
              "função": "Array.prototype.every()",
              "oQueFaz": "Verifica se todos os elementos de um array satisfazem a condição especificada em uma função de teste",
              "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst todosSaoMaioresQueZero = numeros.every(num => num > 0);\nconsole.log(todosSaoMaioresQueZero); // retorna true",
              "descricaoDoExemplo": "Verifica se todos os números do array 'numeros' são maiores que zero utilizando o método every (são)"
              },
              {
              "objeto": 352,
              "função": "Array.prototype.fill()",
              "oQueFaz": "Preenche todos os elementos de um array com um valor estático",
              "exemplo": "const numeros = [1, 2, 3, 4, 5];\nnumeros.fill(0);\nconsole.log(numeros); // retorna [0, 0, 0, 0, 0]",
              "descricaoDoExemplo": "Preenche todos os elementos do array 'numeros' com o valor 0"
              },
              {
                "objeto": 353,
                "função": "Array.prototype.filter()",
                "oQueFaz": "Cria um novo array com todos os elementos que passaram no teste da função especificada",
                "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst numerosPares = numeros.filter(num => num % 2 === 0);\nconsole.log(numerosPares); // retorna [2, 4]",
                "descricaoDoExemplo": "Cria um novo array contendo apenas os números pares do array 'numeros' utilizando o método filter"
                },
                {
                "objeto": 354,
                "função": "Array.prototype.find()",
                "oQueFaz": "Retorna o primeiro elemento de um array que satisfaça a função de teste especificada",
                "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst primeiroPar = numeros.find(num => num % 2 === 0);\nconsole.log(primeiroPar); // retorna 2",
                "descricaoDoExemplo": "Retorna o primeiro número par do array 'numeros' utilizando o método find"
                },
                {
                "objeto": 355,
                "função": "Array.prototype.findIndex()",
                "oQueFaz": "Retorna o índice do primeiro elemento de um array que satisfaça a função de teste especificada",
                "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst indicePrimeiroPar = numeros.findIndex(num => num % 2 === 0);\nconsole.log(indicePrimeiroPar); // retorna 1",
                "descricaoDoExemplo": "Retorna o índice do primeiro número par do array 'numeros' utilizando o método findIndex"
                },
                {
                "objeto": 356,
                "função": "Array.prototype.flat()",
                "oQueFaz": "Cria um novo array com todos os elementos de sub-array concatenados de forma recursiva até a profundidade especificada",
                "exemplo": "const numeros = [1, 2, [3, 4, [5]]];\nconst numerosAchatados = numeros.flat(2);\nconsole.log(numerosAchatados); // retorna [1, 2, 3, 4, 5]",
                "descricaoDoExemplo": "Cria um novo array com os elementos do array 'numeros' achatados até a profundidade 2"
                },
                {
                "objeto": 357,
                "função": "Array.prototype.flatMap()",
                "oQueFaz": "Cria um novo array com os resultados da aplicação de uma função para cada elemento do array e, em seguida, achatando o resultado em um novo array",
                "exemplo": "const numeros = [1, 2, 3];\nconst numerosDuplicados = numeros.flatMap(num => [num, num]);\nconsole.log(numerosDuplicados); // retorna [1, 1, 2, 2, 3, 3]",
                "descricaoDoExemplo": "Cria um novo array contendo os números do array 'numeros' duplicados utilizando o método flatMap"
                },
                {
                "objeto": 358,
                "função": "Array.prototype.forEach()",
                "oQueFaz": "Executa uma função em cada elemento do array",
                "exemplo": "const numeros = [1, 2, 3];\nnumeros.forEach(num => console.log(num)); // imprime 1, 2, 3 no console",
                "descricaoDoExemplo": "Imprime cada número do array 'numeros' no console utilizando o método forEach"
                },
                {
                  "objeto": 359,
                  "função": "Array.prototype.includes()",
                  "oQueFaz": "Verifica se um array contém um determinado elemento e retorna true ou false",
                  "exemplo": "const numeros = [1, 2, 3];\nconsole.log(numeros.includes(2)); // retorna true\nconsole.log(numeros.includes(4)); // retorna false",
                  "descricaoDoExemplo": "Verifica se o número 2 está presente no array 'numeros' (está) e se o número 4 está presente no array 'numeros' (não está)"
                  },
                  {
                  "objeto": 360,
                  "função": "Array.prototype.indexOf()",
                  "oQueFaz": "Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente",
                  "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst indiceDoNumero3 = numeros.indexOf(3);\nconsole.log(indiceDoNumero3); // retorna 2",
                  "descricaoDoExemplo": "Retorna o índice do número 3 no array 'numeros' (índice 2)"
                  },
                  {
                  "objeto": 361,
                  "função": "Array.prototype.join()",
                  "oQueFaz": "Junta todos os elementos de um array em uma string, separados por um separador especificado",
                  "exemplo": "const numeros = [1, 2, 3];\nconst stringNumeros = numeros.join(', ');\nconsole.log(stringNumeros); // retorna '1, 2, 3'",
                  "descricaoDoExemplo": "Junta os números do array 'numeros' em uma string separados por vírgula e espaço"
                  },
                  {
                  "objeto": 362,
                  "função": "Array.prototype.keys()",
                  "oQueFaz": "Retorna um novo objeto Array Iterator que contém as chaves para cada índice no array",
                  "exemplo": "const array = ['a', 'b', 'c'];\nconst iterator = array.keys();\nconsole.log(iterator.next()); // retorna { value: 0, done: false }\nconsole.log(iterator.next()); // retorna { value: 1, done: false }\nconsole.log(iterator.next()); // retorna { value: 2, done: false }\nconsole.log(iterator.next()); // retorna { value: undefined, done: true }",
                  "descricaoDoExemplo": "Retorna um iterador que contém as chaves (índices) do array 'array'"
                  },
                  {
                  "objeto": 363,
                  "função": "Array.prototype.lastIndexOf()",
                  "oQueFaz": "Retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente",
                  "exemplo": "const numeros = [1, 2, 3, 4, 5, 3];\nconst ultimoIndiceDoNumero3 = numeros.lastIndexOf(3);\nconsole.log(ultimoIndiceDoNumero3); // retorna 5",
                  "descricaoDoExemplo": "Retorna o último índice do número 3 no array 'numeros' (índice 5)"
                  },
                  {
                    "objeto": 364,
                    "função": "Array.prototype.map()",
                    "oQueFaz": "Cria um novo array com os resultados da aplicação de uma função para cada elemento do array",
                    "exemplo": "const numeros = [1, 2, 3];\nconst numerosDobrados = numeros.map(num => num * 2);\nconsole.log(numerosDobrados); // retorna [2, 4, 6]",
                    "descricaoDoExemplo": "Cria um novo array contendo os números do array 'numeros' dobrados utilizando o método map"
                    },
                    {
                    "objeto": 365,
                    "função": "Array.prototype.pop()",
                    "oQueFaz": "Remove o último elemento de um array e retorna esse elemento",
                    "exemplo": "const numeros = [1, 2, 3];\nconst ultimoNumero = numeros.pop();\nconsole.log(numeros); // retorna [1, 2]\nconsole.log(ultimoNumero); // retorna 3",
                    "descricaoDoExemplo": "Remove o último número do array 'numeros' (3) e retorna esse número"
                    },
                    {
                    "objeto": 366,
                    "função": "Array.prototype.push()",
                    "oQueFaz": "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array",
                    "exemplo": "const numeros = [1, 2, 3];\nconst novoComprimento = numeros.push(4, 5);\nconsole.log(numeros); // retorna [1, 2, 3, 4, 5]\nconsole.log(novoComprimento); // retorna 5",
                    "descricaoDoExemplo": "Adiciona os números 4 e 5 ao final do array 'numeros' e retorna o novo comprimento do array (5)"
                    },
                    {
                    "objeto": 367,
                    "função": "Array.prototype.reduce()",
                    "oQueFaz": "Executa uma função em cada elemento do array para reduzir o array a um único valor",
                    "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst soma = numeros.reduce((acumulador, numero) => acumulador + numero);\nconsole.log(soma); // retorna 15",
                    "descricaoDoExemplo": "Calcula a soma de todos os números do array 'numeros' utilizando o método reduce"
                    },
                    {
                    "objeto": 368,
                    "função": "Array.prototype.reduceRight()",
                    "oQueFaz": "Executa uma função em cada elemento do array (da direita para a esquerda) para reduzir o array a um único valor",
                    "exemplo": "const numeros = [1, 2, 3, 4, 5];\nconst subtracao = numeros.reduceRight((acumulador, numero) => acumulador - numero);\nconsole.log(subtracao); // retorna -5",
                    "descricaoDoExemplo": "Calcula a subtração de todos os números do array 'numeros' da direita para a esquerda utilizando o método reduceRight"
                    },
                    {
                      "objeto": 369,
                      "função": "Array.prototype.reverse()",
                      "oQueFaz": "Inverte a ordem dos elementos de um array",
                      "exemplo": "const numeros = [1, 2, 3];\nnumeros.reverse();\nconsole.log(numeros); // retorna [3, 2, 1]",
                      "descricaoDoExemplo": "Inverte a ordem dos números no array 'numeros'"
                      },
                      {
                      "objeto": 370,
                      "função": "Array.prototype.shift()",
                      "oQueFaz": "Remove o primeiro elemento de um array e retorna esse elemento",
                      "exemplo": "const numeros = [1, 2, 3];\nconst primeiroNumero = numeros.shift();\nconsole.log(numeros); // retorna [2, 3]\nconsole.log(primeiroNumero); // retorna 1",
                      "descricaoDoExemplo": "Remove o primeiro número do array 'numeros' (1) e retorna esse número"
                      },
                      {
                        "objeto": 371,
                        "função": "Math.floor()",
                        "oQueFaz": "Retorna o maior número inteiro menor ou igual a um número",
                        "exemplo": "Math.floor(5.7); // retorna 5",
                        "descricaoDoExemplo": "Retorna o maior número inteiro menor ou igual a 5.7, resultando em 5"
                        },
                        {
                        "objeto": 372,
                        "função": "Math.max()",
                        "oQueFaz": "Retorna o maior valor entre dois números",
                        "exemplo": "Math.max(2, 8); // retorna 8",
                        "descricaoDoExemplo": "Retorna o maior valor entre 2 e 8, resultando em 8"
                        },
                        {
                        "objeto": 373,
                        "função": "Math.min()",
                        "oQueFaz": "Retorna o menor valor entre dois números",
                        "exemplo": "Math.min(2, 8); // retorna 2",
                        "descricaoDoExemplo": "Retorna o menor valor entre 2 e 8, resultando em 2"
                        },
                        {
                        "objeto": 374,
                        "função": "Math.random()",
                        "oQueFaz": "Retorna um número pseudoaleatório entre 0 e 1",
                        "exemplo": "Math.random(); // retorna um número aleatório entre 0 e 1",
                        "descricaoDoExemplo": "Retorna um número pseudoaleatório entre 0 e 1"
                        },
                        {
                        "objeto": 375,
                        "função": "Math.round()",
                        "oQueFaz": "Arredonda um número para o inteiro mais próximo",
                        "exemplo": "Math.round(5.7); // retorna 6",
                        "descricaoDoExemplo": "Arredonda o número 5.7 para o inteiro mais próximo, resultando em 6"
                        },
                        {
                        "objeto": 376,
                        "função": "Math.sqrt()",
                        "oQueFaz": "Retorna a raiz quadrada de um número",
                        "exemplo": "Math.sqrt(9); // retorna 3",
                        "descricaoDoExemplo": "Retorna a raiz quadrada do número 9, resultando em 3"
                        },
                        {
                        "objeto": 377,
                        "função": "Number.isFinite()",
                        "oQueFaz": "Verifica se um valor é finito",
                        "exemplo": "Number.isFinite(10); // retorna true",
                        "descricaoDoExemplo": "Verifica se o valor 10 é finito e retorna true"
                        },
                        {
                        "objeto": 378,
                        "função": "Number.isInteger()",
                        "oQueFaz": "Verifica se um valor é um número inteiro",
                        "exemplo": "Number.isInteger(5); // retorna true",
                        "descricaoDoExemplo": "Verifica se o valor 5 é um número inteiro e retorna true"
                        },
                        {
                        "objeto": 379,
                        "função": "Number.isNaN()",
                        "oQueFaz": "Verifica se um valor é NaN (Not-a-Number)",
                        "exemplo": "Number.isNaN('hello'); // retorna false",
                        "descricaoDoExemplo": "Verifica se o valor 'hello' é NaN e retorna false"
                        },
                        {
                          "objeto": 380,
                          "função": "Number.isSafeInteger()",
                          "oQueFaz": "Verifica se um valor é um número inteiro seguro",
                          "exemplo": "Number.isSafeInteger(9007199254740991); // retorna true",
                          "descricaoDoExemplo": "Verifica se o valor 9007199254740991 é um número inteiro seguro e retorna true"
                          },
                          {
                          "objeto": 381,
                          "função": "Number.parseFloat()",
                          "oQueFaz": "Converte uma string em um número de ponto flutuante",
                          "exemplo": "Number.parseFloat('3.14'); // retorna 3.14",
                          "descricaoDoExemplo": "Converte a string '3.14' em um número de ponto flutuante"
                          },
                          {
                          "objeto": 382,
                          "função": "Number.parseInt()",
                          "oQueFaz": "Converte uma string em um número inteiro",
                          "exemplo": "Number.parseInt('10'); // retorna 10",
                          "descricaoDoExemplo": "Converte a string '10' em um número inteiro"
                          },
                          {
                          "objeto": 383,
                          "função": "Number.prototype.toExponential()",
                          "oQueFaz": "Retorna uma string representando um número em notação exponencial",
                          "exemplo": "(5).toExponential(); // retorna '5e+0'",
                          "descricaoDoExemplo": "Retorna a representação do número 5 em notação exponencial: '5e+0'"
                          },
                          {
                          "objeto": 384,
                          "função": "Number.prototype.toFixed()",
                          "oQueFaz": "Formata um número usando notação de ponto fixo",
                          "exemplo": "(5.123).toFixed(2); // retorna '5.12'",
                          "descricaoDoExemplo": "Formata o número 5.123 usando duas casas decimais: '5.12'"
                          },
                          {
                          "objeto": 385,
                          "função": "Number.prototype.toPrecision()",
                          "oQueFaz": "Retorna uma string representando um número com um comprimento específico",
                          "exemplo": "(5.123).toPrecision(3); // retorna '5.12'",
                          "descricaoDoExemplo": "Retorna a representação do número 5.123 com um comprimento de 3 dígitos: '5.12'"
                          },
                          {
                          "objeto": 386,
                          "função": "Number.prototype.toString()",
                          "oQueFaz": "Retorna uma string representando o objeto Number especificado",
                          "exemplo": "(10).toString(); // retorna '10'",
                          "descricaoDoExemplo": "Retorna a representação do objeto Number 10 como uma string: '10'"
                          },
                          {
                          "objeto": 387,
                          "função": "Number.prototype.valueOf()",
                          "oQueFaz": "Retorna o valor primitivo do objeto Number especificado",
                          "exemplo": "(10).valueOf(); // retorna 10",
                          "descricaoDoExemplo": "Retorna o valor primitivo do objeto Number 10, que é o próprio número 10"
                          },
                          {
                            "objeto": 388,
                            "função": "Object.assign()",
                            "oQueFaz": "Copia os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino",
                            "exemplo": "const objetoDestino = Object.assign({}, objeto1, objeto2);",
                            "descricaoDoExemplo": "Copia as propriedades de objeto1 e objeto2 para objetoDestino"
                            },
                            {
                            "objeto": 389,
                            "função": "Object.create()",
                            "oQueFaz": "Cria um novo objeto com o protótipo especificado e propriedades próprias",
                            "exemplo": "const novoObjeto = Object.create(prototipoObjeto);",
                            "descricaoDoExemplo": "Cria um novo objeto com protótipo prototipoObjeto"
                            },
                            {
                            "objeto": 390,
                            "função": "Object.defineProperty()",
                            "oQueFaz": "Define uma nova propriedade diretamente em um objeto ou modifica uma propriedade existente em um objeto e retorna o objeto",
                            "exemplo": "Object.defineProperty(objeto, 'propriedade', { value: 42, writable: true });",
                            "descricaoDoExemplo": "Define uma nova propriedade 'propriedade' com valor 42 no objeto"
                            },
                            {
                            "objeto": 391,
                            "função": "Object.defineProperties()",
                            "oQueFaz": "Define novas propriedades diretamente em um objeto ou modifica propriedades existentes em um objeto e retorna o objeto",
                            "exemplo": "Object.defineProperties(objeto, { prop1: { value: 42 }, prop2: { value: 'Hello' } });",
                            "descricaoDoExemplo": "Define as propriedades 'prop1' e 'prop2' no objeto"
                            },
                            {
                            "objeto": 392,
                            "função": "Object.entries()",
                            "oQueFaz": "Retorna uma matriz contendo todos os pares [chave, valor] de propriedades próprias enumeráveis de um objeto",
                            "exemplo": "const objeto = { a: 1, b: 2, c: 3 }; Object.entries(objeto); // retorna [['a', 1], ['b', 2], ['c', 3]]",
                            "descricaoDoExemplo": "Retorna uma matriz contendo todos os pares [chave, valor] do objeto"
                            },
                            {
                            "objeto": 393,
                            "função": "Object.freeze()",
                            "oQueFaz": "Congela um objeto: outros códigos não podem excluir ou alterar qualquer propriedade",
                            "exemplo": "const objeto = { propriedade: 'valor' }; Object.freeze(objeto);",
                            "descricaoDoExemplo": "Congela o objeto para torná-lo imutável"
                            },
                            {
                            "objeto": 394,
                            "função": "Object.fromEntries()",
                            "oQueFaz": "Transforma uma lista de pares [chave, valor] em um objeto",
                            "exemplo": "const matriz = [['a', 1], ['b', 2], ['c', 3]]; Object.fromEntries(matriz); // retorna { a: 1, b: 2, c: 3 }",
                            "descricaoDoExemplo": "Transforma uma matriz de pares [chave, valor] em um objeto"
                            },
                            {
                              "objeto": 395,
                              "função": "Object.getOwnPropertyDescriptor()",
                              "oQueFaz": "Retorna um descritor de propriedade de um objeto para uma determinada chave",
                              "exemplo": "const descritor = Object.getOwnPropertyDescriptor(objeto, 'chave');",
                              "descricaoDoExemplo": "Retorna o descritor de propriedade para a chave 'chave' no objeto"
                              },
                              {
                              "objeto": 396,
                              "função": "Object.getOwnPropertyDescriptors()",
                              "oQueFaz": "Retorna todos os descritores de propriedade próprios de um objeto",
                              "exemplo": "const descritores = Object.getOwnPropertyDescriptors(objeto);",
                              "descricaoDoExemplo": "Retorna todos os descritores de propriedade próprios do objeto"
                              },
                              {
                              "objeto": 397,
                              "função": "Object.getOwnPropertyNames()",
                              "oQueFaz": "Retorna uma matriz com todos os nomes de propriedades próprias enumeráveis e não enumeráveis de um objeto",
                              "exemplo": "const nomesPropriedades = Object.getOwnPropertyNames(objeto);",
                              "descricaoDoExemplo": "Retorna uma matriz com todos os nomes de propriedades próprias do objeto"
                              },
                              {
                              "objeto": 398,
                              "função": "Object.getOwnPropertySymbols()",
                              "oQueFaz": "Retorna uma matriz com todos os símbolos de propriedades próprias de um objeto",
                              "exemplo": "const simbolosPropriedades = Object.getOwnPropertySymbols(objeto);",
                              "descricaoDoExemplo": "Retorna uma matriz com todos os símbolos de propriedades próprias do objeto"
                              },
                              {
                              "objeto": 399,
                              "função": "Object.getPrototypeOf()",
                              "oQueFaz": "Retorna o protótipo (interno) do objeto especificado",
                              "exemplo": "const prototipo = Object.getPrototypeOf(objeto);",
                              "descricaoDoExemplo": "Retorna o protótipo do objeto"
                              },
                              {
                              "objeto": 400,
                              "função": "Object.is()",
                              "oQueFaz": "Verifica se dois valores são iguais",
                              "exemplo": "Object.is(valor1, valor2);",
                              "descricaoDoExemplo": "Verifica se valor1 e valor2 são iguais"
                              },
                              {
                                "objeto": 401,
                                "função": "RegExp.prototype.exec()",
                                "oQueFaz": "Executa uma pesquisa por uma correspondência em uma string especificada.",
                                "exemplo": "const regex = /hello/g;\nconst str = 'hello world';\nconsole.log(regex.exec(str)); // retorna ['hello']",
                                "descricaoDoExemplo": "Executa uma pesquisa global por correspondência da expressão regular 'hello' na string 'hello world' e retorna um array contendo a correspondência encontrada."
                                },
                                {
                                "objeto": 402,
                                "função": "RegExp.prototype.test()",
                                "oQueFaz": "Testa se há uma correspondência em uma string especificada.",
                                "exemplo": "const regex = /hello/;\nconst str = 'hello world';\nconsole.log(regex.test(str)); // retorna true",
                                "descricaoDoExemplo": "Verifica se a string 'hello world' contém uma correspondência da expressão regular 'hello' e retorna true se houver correspondência."
                                },
                                {
                                "objeto": 403,
                                "função": "String.fromCharCode()",
                                "oQueFaz": "Retorna uma string criada pela sequência de valores Unicode especificada.",
                                "exemplo": "console.log(String.fromCharCode(65, 66, 67)); // retorna 'ABC'",
                                "descricaoDoExemplo": "Cria uma string a partir dos valores Unicode 65, 66 e 67, que correspondem às letras 'A', 'B' e 'C', respectivamente."
                                },
                                {
                                "objeto": 404,
                                "função": "String.prototype.charAt()",
                                "oQueFaz": "Retorna o caractere especificado a partir de uma string.",
                                "exemplo": "const str = 'Hello';\nconsole.log(str.charAt(1)); // retorna 'e'",
                                "descricaoDoExemplo": "Retorna o caractere na posição 1 da string 'Hello', que é 'e'."
                                },
                                {
                                "objeto": 405,
                                "função": "String.prototype.charCodeAt()",
                                "oQueFaz": "Retorna um número indicando o valor Unicode do caractere na posição especificada.",
                                "exemplo": "const str = 'Hello';\nconsole.log(str.charCodeAt(0)); // retorna 72",
                                "descricaoDoExemplo": "Retorna o valor Unicode do caractere na posição 0 da string 'Hello', que é 72."
                                },
                                {
                                "objeto": 406,
                                "função": "String.prototype.concat()",
                                "oQueFaz": "Combina o texto de duas ou mais strings e retorna uma nova string.",
                                "exemplo": "const str1 = 'Hello';\nconst str2 = ' world';\nconsole.log(str1.concat(str2)); // retorna 'Hello world'",
                                "descricaoDoExemplo": "Combina as strings 'Hello' e ' world' em uma nova string 'Hello world'."
                                },
                                {
                                  "objeto": 407,
                                  "função": "String.prototype.includes()",
                                  "oQueFaz": "Verifica se uma string contém outra string. Retorna `true` ou `false`.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst contemMundo = texto.includes('mundo');",
                                  "descricaoDoExemplo": "Verifica se a string `texto` contém a substring 'mundo' e armazena o resultado da verificação na variável `contemMundo`."
                                },
                                {
                                  "objeto": 408,
                                  "função": "String.prototype.indexOf()",
                                  "oQueFaz": "Retorna o índice da primeira ocorrência de uma substring em uma string, ou -1 se a substring não for encontrada.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst indice = texto.indexOf('mundo');",
                                  "descricaoDoExemplo": "Obtém o índice da primeira ocorrência da substring 'mundo' na string `texto` e armazena o índice resultante na variável `indice`."
                                },
                                {
                                  "objeto": 409,
                                  "função": "String.prototype.lastIndexOf()",
                                  "oQueFaz": "Retorna o índice da última ocorrência de uma substring em uma string, ou -1 se a substring não for encontrada.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst indice = texto.lastIndexOf('mundo');",
                                  "descricaoDoExemplo": "Obtém o índice da última ocorrência da substring 'mundo' na string `texto` e armazena o índice resultante na variável `indice`."
                                },
                                {
                                  "objeto": 410,
                                  "função": "String.prototype.padEnd()",
                                  "oQueFaz": "Preenche o final de uma string com um determinado número de caracteres a partir de outra string.",
                                  "exemplo": "const texto = 'Olá';\nconst textoPreenchido = texto.padEnd(6, '!');",
                                  "descricaoDoExemplo": "Preenche o final da string `texto` com o caractere '!' até atingir um tamanho total de 6 caracteres e armazena o resultado na variável `textoPreenchido`."
                                },
                                {
                                  "objeto": 411,
                                  "função": "String.prototype.padStart()",
                                  "oQueFaz": "Preenche o início de uma string com um determinado número de caracteres a partir de outra string.",
                                  "exemplo": "const texto = 'mundo!';\nconst textoPreenchido = texto.padStart(10, 'Olá, ');\n",
                                  "descricaoDoExemplo": "Preenche o início da string `texto` com a string 'Olá, ' até atingir um tamanho total de 10 caracteres e armazena o resultado na variável `textoPreenchido`."
                                },
                                {
                                  "objeto": 412,
                                  "função": "String.prototype.repeat()",
                                  "oQueFaz": "Retorna uma nova string contendo a concatenação da string original repetida um determinado número de vezes.",
                                  "exemplo": "const texto = 'Olá';\nconst textoRepetido = texto.repeat(3);",
                                  "descricaoDoExemplo": "Cria uma nova string `textoRepetido` concatenando a string `texto` três vezes."
                                },
                                {
                                  "objeto": 413,
                                  "função": "String.prototype.replace()",
                                  "oQueFaz": "Substitui uma substring em uma string por outra substring.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst novoTexto = texto.replace('mundo', 'amigo');",
                                  "descricaoDoExemplo": "Substitui a substring 'mundo' na string `texto` pela substring 'amigo' e armazena o resultado na variável `novoTexto`."
                                },
                                {
                                  "objeto": 414,
                                  "função": "String.prototype.search()",
                                  "oQueFaz": "Executa uma busca por uma expressão regular em uma string e retorna o índice da primeira ocorrência encontrada, ou -1 se a expressão não for encontrada.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst indice = texto.search(/mundo/);",
                                  "descricaoDoExemplo": "Executa uma busca pela expressão regular /mundo/ na string `texto` e armazena o índice da primeira ocorrência encontrada na variável `indice`."
                                },
                                {
                                  "objeto": 415,
                                  "função": "String.prototype.slice()",
                                  "oQueFaz": "Extrai uma seção de uma string e retorna uma nova string.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst novaString = texto.slice(5, 10);",
                                  "descricaoDoExemplo": "Extrai uma seção da string `texto` começando no índice 5 e indo até o índice 10 (não incluindo o caractere no índice 10) e armazena a nova string resultante na variável `novaString`."
                                },
                                {
                                  "objeto": 416,
                                  "função": "String.prototype.split()",
                                  "oQueFaz": "Divide uma string em um array de substrings com base em um separador especificado.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst array = texto.split(', ');",
                                  "descricaoDoExemplo": "Divide a string `texto` em um array de substrings usando a sequência ', ' como separador e armazena o array resultante na variável `array`."
                                },
                                {
                                  "objeto": 417,
                                  "função": "String.prototype.startsWith()",
                                  "oQueFaz": "Verifica se uma string começa com outra string. Retorna `true` ou `false`.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst comecaComOla = texto.startsWith('Olá');",
                                  "descricaoDoExemplo": "Verifica se a string `texto` começa com a substring 'Olá' e armazena o resultado da verificação na variável `comecaComOla`."
                                },
                                {
                                  "objeto": 418,
                                  "função": "String.prototype.substring()",
                                  "oQueFaz": "Retorna uma parte da string entre dois índices especificados, ou do início/fim da string até um índice especificado.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst subString = texto.substring(5, 10);",
                                  "descricaoDoExemplo": "Retorna uma parte da string `texto` começando no índice 5 e indo até o índice 10 (não incluindo o caractere no índice 10) e armazena a substring resultante na variável `subString`."
                                },
                                {
                                  "objeto": 419,
                                  "função": "String.prototype.toLowerCase()",
                                  "oQueFaz": "Retorna uma nova string com todos os caracteres convertidos para minúsculas.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst textoMinusculo = texto.toLowerCase();",
                                  "descricaoDoExemplo": "Cria uma nova string `textoMinusculo` com todos os caracteres da string `texto` convertidos para minúsculas."
                                },
                                {
                                  "objeto": 420,
                                  "função": "String.prototype.toUpperCase()",
                                  "oQueFaz": "Retorna uma nova string com todos os caracteres convertidos para maiúsculas.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst textoMaiusculo = texto.toUpperCase();",
                                  "descricaoDoExemplo": "Cria uma nova string `textoMaiusculo` com todos os caracteres da string `texto` convertidos para maiúsculas."
                                },
                                {
                                  "objeto": 421,
                                  "função": "String.prototype.trim()",
                                  "oQueFaz": "Remove os espaços em branco do início e do final de uma string.",
                                  "exemplo": "const texto = '   Olá, mundo!   ';\nconst textoSemEspacos = texto.trim();",
                                  "descricaoDoExemplo": "Cria uma nova string `textoSemEspacos` removendo os espaços em branco do início e do final da string `texto`."
                                },
                                {
                                  "objeto": 422,
                                  "função": "String.prototype.valueOf()",
                                  "oQueFaz": "Retorna o valor primitivo de uma string.",
                                  "exemplo": "const texto = 'Olá, mundo!';\nconst valor = texto.valueOf();",
                                  "descricaoDoExemplo": "Obtém o valor primitivo da string `texto` e armazena o valor resultante na variável `valor`."
                                },
                                {
                                  "objeto": 423,
                                  "função": "Symbol()",
                                  "oQueFaz": "Retorna um valor primitivo de tipo símbolo.",
                                  "exemplo": "const simbolo = Symbol('descrição');",
                                  "descricaoDoExemplo": "Cria um novo símbolo com uma descrição opcional e armazena-o na variável `simbolo`."
                                },
                                {
                                  "objeto": 424,
                                  "função": "Symbol.for()",
                                  "oQueFaz": "Retorna um símbolo existente no registro global com a chave fornecida, ou cria e retorna um novo símbolo se a chave não existir.",
                                  "exemplo": "const simbolo = Symbol.for('chave');",
                                  "descricaoDoExemplo": "Retorna um símbolo existente com a chave 'chave' do registro global, ou cria e retorna um novo símbolo com a chave fornecida se ela não existir."
                                },
                                {
                                  "objeto": 425,
                                  "função": "Symbol.keyFor()",
                                  "oQueFaz": "Retorna uma chave de símbolo registrada no registro global para um símbolo fornecido.",
                                  "exemplo": "const simbolo = Symbol.for('chave');\nconst chave = Symbol.keyFor(simbolo);",
                                  "descricaoDoExemplo": "Retorna a chave associada ao símbolo `simbolo` no registro global, ou `undefined` se o símbolo não estiver registrado."
                                },
                                {
                                  "objeto": 426,
                                  "função": "Math.abs()",
                                  "oQueFaz": "Retorna o valor absoluto de um número.",
                                  "exemplo": "const numero = -5;\nconst absoluto = Math.abs(numero);",
                                  "descricaoDoExemplo": "Obtém o valor absoluto do número `-5` e armazena o valor resultante na variável `absoluto`."
                                },
                                {
                                  "objeto": 427,
                                  "função": "Math.ceil()",
                                  "oQueFaz": "Arredonda um número para cima para o próximo inteiro.",
                                  "exemplo": "const numero = 3.14;\nconst arredondado = Math.ceil(numero);",
                                  "descricaoDoExemplo": "Arredonda o número `3.14` para cima para o próximo inteiro (`4`) e armazena o valor resultante na variável `arredondado`."
                                },
                                {
                                  "objeto": 428,
                                  "função": "Math.floor()",
                                  "oQueFaz": "Arredonda um número para baixo para o inteiro anterior.",
                                  "exemplo": "const numero = 3.14;\nconst arredondado = Math.floor(numero);",
                                  "descricaoDoExemplo": "Arredonda o número `3.14` para baixo para o inteiro anterior (`3`) e armazena o valor resultante na variável `arredondado`."
                                },
                                {
                                  "objeto": 429,
                                  "função": "Math.round()",
                                  "oQueFaz": "Arredonda um número para o inteiro mais próximo.",
                                  "exemplo": "const numero = 3.14;\nconst arredondado = Math.round(numero);",
                                  "descricaoDoExemplo": "Arredonda o número `3.14` para o inteiro mais próximo (`3`) e armazena o valor resultante"
                                },
                                {
                                  "objeto": 430,
                                  "função": "Math.max()",
                                  "oQueFaz": "Retorna o maior valor de uma lista de números.",
                                  "exemplo": "const maior = Math.max(10, 5, 20);",
                                  "descricaoDoExemplo": "Obtém o maior valor entre os números `10`, `5` e `20` e armazena o valor resultante na variável `maior`."
                                },
                                {
                                  "objeto": 431,
                                  "função": "Math.min()",
                                  "oQueFaz": "Retorna o menor valor de uma lista de números.",
                                  "exemplo": "const menor = Math.min(10, 5, 20);",
                                  "descricaoDoExemplo": "Obtém o menor valor entre os números `10`, `5` e `20` e armazena o valor resultante na variável `menor`."
                                },
                                {
                                  "objeto": 432,
                                  "função": "Math.pow()",
                                  "oQueFaz": "Retorna a base elevada à potência do expoente.",
                                  "exemplo": "const resultado = Math.pow(2, 3);",
                                  "descricaoDoExemplo": "Calcula `2` elevado à potência `3` (`2³`) e armazena o valor resultante na variável `resultado`."
                                },
                                {
                                  "objeto": 433,
                                  "função": "Math.random()",
                                  "oQueFaz": "Retorna um número pseudoaleatório entre 0 e 1.",
                                  "exemplo": "const aleatorio = Math.random();",
                                  "descricaoDoExemplo": "Gera um número pseudoaleatório entre 0 (inclusivo) e 1 (exclusivo) e armazena o valor resultante na variável `aleatorio`."
                                },
                                {
                                  "objeto": 434,
                                  "função": "Math.sqrt()",
                                  "oQueFaz": "Retorna a raiz quadrada de um número.",
                                  "exemplo": "const raiz = Math.sqrt(16);",
                                  "descricaoDoExemplo": "Calcula a raiz quadrada do número `16` e armazena o valor resultante na variável `raiz`."
                                },
                                {
                                  "objeto": 435,
                                  "função": "Math.log()",
                                  "oQueFaz": "Retorna o logaritmo natural (base e) de um número.",
                                  "exemplo": "const logaritmo = Math.log(10);",
                                  "descricaoDoExemplo": "Calcula o logaritmo natural (base e) do número `10` e armazena o valor resultante na variável `logaritmo`."
                                },
                                {
                                  "objeto": 436,
                                  "função": "Math.sin()",
                                  "oQueFaz": "Retorna o seno de um ângulo em radianos.",
                                  "exemplo": "const seno = Math.sin(Math.PI / 2);",
                                  "descricaoDoExemplo": "Calcula o seno do ângulo de 90 graus (π/2 radianos) e armazena o valor resultante na variável `seno`."
                                },
                                {
                                  "objeto": 437,
                                  "função": "Math.cos()",
                                  "oQueFaz": "Retorna o cosseno de um ângulo em radianos.",
                                  "exemplo": "const cosseno = Math.cos(Math.PI);",
                                  "descricaoDoExemplo": "Calcula o cosseno do ângulo de 180 graus (π radianos) e armazena o valor resultante na variável `cosseno`."
                                },
                                {
                                  "objeto": 438,
                                  "função": "Math.tan()",
                                  "oQueFaz": "Retorna a tangente de um ângulo em radianos.",
                                  "exemplo": "const tangente = Math.tan(Math.PI / 4);",
                                  "descricaoDoExemplo": "Calcula a tangente do ângulo de 45 graus (π/4 radianos) e armazena o valor resultante na variável `tangente`."
                                },
                                {
                                  "objeto": 439,
                                  "função": "Math.PI",
                                  "oQueFaz": "Retorna o valor de π (pi), a relação entre a circunferência de um círculo e seu diâmetro.",
                                  "exemplo": "const pi = Math.PI;",
                                  "descricaoDoExemplo": "Atribui o valor de π (aproximadamente 3.141592653589793) à variável `pi`."
                                },
                                {
                                  "objeto": 440,
                                  "função": "Date()",
                                  "oQueFaz": "Cria um objeto de data que representa uma data e hora específica.",
                                  "exemplo": "const dataAtual = new Date();",
                                  "descricaoDoExemplo": "Cria um novo objeto `dataAtual` contendo a data e hora atuais."
                                },
                                {
                                  "objeto": 441,
                                  "função": "Date.now()",
                                  "oQueFaz": "Retorna o número de milissegundos decorridos desde 1º de janeiro de 1970 00:00:00 UTC.",
                                  "exemplo": "const timestamp = Date.now();",
                                  "descricaoDoExemplo": "Obtém o número de milissegundos decorridos desde 1º de janeiro de 1970 00:00:00 UTC e armazena o valor resultante na variável `timestamp`."
                                },
                                {
                                  "objeto": 442,
                                  "função": "Date.prototype.getFullYear()",
                                  "oQueFaz": "Retorna o ano de uma data como um número de quatro dígitos (ex.: 2023).",
                                  "exemplo": "const data = new Date();\nconst ano = data.getFullYear();",
                                  "descricaoDoExemplo": "Obtém o ano atual da data representada pelo objeto `data` e armazena o valor resultante na variável `ano`."
                                },
                                {
                                  "objeto": 443,
                                  "função": "Date.prototype.getMonth()",
                                  "oQueFaz": "Retorna o mês de uma data como um número (0 - janeiro, 1 - fevereiro, etc.).",
                                  "exemplo": "const data = new Date();\nconst mes = data.getMonth();",
                                  "descricaoDoExemplo": "Obtém o mês atual da data representada pelo objeto `data` como um número (0 para janeiro, 1 para fevereiro, etc.) e armazena o valor resultante na variável `mes`."
                                },
                                {
                                  "objeto": 444,
                                  "função": "Date.prototype.getDate()",
                                  "oQueFaz": "Retorna o dia do mês de uma data como um número (1 - 31).",
                                  "exemplo": "const data = new Date();\nconst dia = data.getDate();",
                                  "descricaoDoExemplo": "Obtém o dia do mês atual da data representada pelo objeto `data` como um número (1 a 31) e armazena o valor resultante na variável `dia`."
                                },
                                {
                                  "objeto": 445,
                                  "função": "Date.prototype.getHours()",
                                  "oQueFaz": "Retorna a hora de uma data como um número (0 - 23).",
                                  "exemplo": "const data = new Date();\nconst horas = data.getHours();",
                                  "descricaoDoExemplo": "Obtém a hora atual da data representada pelo objeto `data` como um número (0 a 23) e armazena o valor resultante na variável `horas`."
                                },
                                {
                                  "objeto": 446,
                                  "função": "Date.prototype.getMinutes()",
                                  "oQueFaz": "Retorna os minutos de uma data como um número (0 - 59).",
                                  "exemplo": "const data = new Date();\nconst minutos = data.getMinutes();",
                                  "descricaoDoExemplo": "Obtém os minutos atuais da data representada pelo objeto `data` como um número (0 a 59) e armazena o valor resultante na variável `minutos`."
                                },
                                {
                                  "objeto": 447,
                                  "função": "Date.prototype.getSeconds()",
                                  "oQueFaz": "Retorna os segundos de uma data como um número (0 - 59).",
                                  "exemplo": "const data = new Date();\nconst segundos = data.getSeconds();",
                                  "descricaoDoExemplo": "Obtém os segundos atuais da data representada pelo objeto `data` como um número (0 a 59) e armazena o valor resultante na variável `segundos`."
                                },
                                {
                                  "objeto": 448,
                                  "função": "Date.prototype.getMilliseconds()",
                                  "oQueFaz": "Retorna os milissegundos de uma data como um número (0 - 999).",
                                  "exemplo": "const data = new Date();\nconst milissegundos = data.getMilliseconds();",
                                  "descricaoDoExemplo": "Obtém os milissegundos atuais da data representada pelo objeto `data` como um número (0 a 999) e armazena o valor resultante na variável `milissegundos`."
                                },
                                {
                                  "objeto": 449,
                                  "função": "Date.prototype.getTime()",
                                  "oQueFaz": "Retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC até uma data.",
                                  "exemplo": "const data = new Date();\nconst timestamp = data.getTime();",
                                  "descricaoDoExemplo": "Obtém o número de milissegundos decorridos desde 1º de janeiro de 1970 00:00:00 UTC até a data representada pelo objeto `data` e armazena o valor resultante na variável `timestamp`."
                                },
                                {
                                  "objeto": 450,
                                  "função": "Date.prototype.setDate()",
                                  "oQueFaz": "Define o dia do mês de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setDate(15);",
                                  "descricaoDoExemplo": "Define o dia do mês da data representada pelo objeto `data` como `15`."
                                },
                                {
                                  "objeto": 451,
                                  "função": "Date.prototype.setMonth()",
                                  "oQueFaz": "Define o mês de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setMonth(6);",
                                  "descricaoDoExemplo": "Define o mês da data representada pelo objeto `data` como `6` (julho)."
                                },
                                {
                                  "objeto": 452,
                                  "função": "Date.prototype.setFullYear()",
                                  "oQueFaz": "Define o ano de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setFullYear(2023);",
                                  "descricaoDoExemplo": "Define o ano da data representada pelo objeto `data` como `2023`."
                                },
                                {
                                  "objeto": 453,
                                  "função": "Date.prototype.setHours()",
                                  "oQueFaz": "Define a hora de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setHours(12);",
                                  "descricaoDoExemplo": "Define a hora da data representada pelo objeto `data` como `12`."
                                },
                                {
                                  "objeto": 454,
                                  "função": "Date.prototype.setMinutes()",
                                  "oQueFaz": "Define os minutos de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setMinutes(30);",
                                  "descricaoDoExemplo": "Define os minutos da data representada pelo objeto `data` como `30`."
                                },
                                {
                                  "objeto": 455,
                                  "função": "Date.prototype.setSeconds()",
                                  "oQueFaz": "Define os segundos de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setSeconds(45);",
                                  "descricaoDoExemplo": "Define os segundos da data representada pelo objeto `data` como `45`."
                                },
                                {
                                  "objeto": 456,
                                  "função": "Date.prototype.setMilliseconds()",
                                  "oQueFaz": "Define os milissegundos de uma data.",
                                  "exemplo": "const data = new Date();\ndata.setMilliseconds(500);",
                                  "descricaoDoExemplo": "Define os milissegundos da data representada pelo objeto `data` como `500`."
                                },
                                {
                                  "objeto": 457,
                                  "função": "Date.prototype.setTime()",
                                  "oQueFaz": "Define uma data usando um número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC.",
                                  "exemplo": "const data = new Date();\ndata.setTime(1624567890000);",
                                  "descricaoDoExemplo": "Define a data representada pelo objeto `data` usando o número de milissegundos `1624567890000` desde 1º de janeiro de 1970 00:00:00 UTC."
                                },
                                {
                                  "objeto": 458,
                                  "função": "Array.isArray()",
                                  "oQueFaz": "Verifica se um valor é um array.",
                                  "exemplo": "const array = [1, 2, 3];\nconst isArray = Array.isArray(array);",
                                  "descricaoDoExemplo": "Verifica se o valor da variável `array` é um array e armazena o valor resultante (`true` ou `false`) na variável"
                                },
                                {
                                  "objeto": 459,
                                  "função": "Array.prototype.length",
                                  "oQueFaz": "Retorna o número de elementos em um array.",
                                  "exemplo": "const array = [1, 2, 3];\nconst length = array.length;",
                                  "descricaoDoExemplo": "Obtém o número de elementos no array representado pela variável `array` e armazena o valor resultante na variável `length`."
                                },
                                {
                                  "objeto": 460,
                                  "função": "Array.prototype.push()",
                                  "oQueFaz": "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.",
                                  "exemplo": "const array = [1, 2, 3];\nconst novoComprimento = array.push(4, 5);",
                                  "descricaoDoExemplo": "Adiciona os elementos `4` e `5` ao final do array representado pela variável `array` e retorna o novo comprimento do array, que é armazenado na variável `novoComprimento`."
                                },
                                {
                                  "objeto": 461,
                                  "função": "Array.prototype.pop()",
                                  "oQueFaz": "Remove o último elemento de um array e retorna o elemento removido.",
                                  "exemplo": "const array = [1, 2, 3];\nconst ultimoElemento = array.pop();",
                                  "descricaoDoExemplo": "Remove o último elemento do array representado pela variável `array` e armazena o elemento removido na variável `ultimoElemento`."
                                },
                                {
                                  "objeto": 462,
                                  "função": "Array.prototype.shift()",
                                  "oQueFaz": "Remove o primeiro elemento de um array e retorna o elemento removido.",
                                  "exemplo": "const array = [1, 2, 3];\nconst primeiroElemento = array.shift();",
                                  "descricaoDoExemplo": "Remove o primeiro elemento do array representado pela variável `array` e armazena o elemento removido na variável `primeiroElemento`."
                                },
                                {
                                  "objeto": 463,
                                  "função": "Array.prototype.unshift()",
                                  "oQueFaz": "Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.",
                                  "exemplo": "const array = [2, 3, 4];\nconst novoComprimento = array.unshift(1);",
                                  "descricaoDoExemplo": "Adiciona o elemento `1` no início do array representado pela variável `array` e retorna o novo comprimento do array, que é armazenado na variável `novoComprimento`."
                                },
                                {
                                  "objeto": 464,
                                  "função": "Array.prototype.slice()",
                                  "oQueFaz": "Cria uma cópia superficial de uma parte de um array em um novo array.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst novoArray = array.slice(2, 4);",
                                  "descricaoDoExemplo": "Cria um novo array `novoArray` contendo uma cópia dos elementos do array representado pela variável `array` a partir do índice `2` (inclusivo) até o índice `4` (exclusivo)."
                                },
                                {
                                  "objeto": 465,
                                  "função": "Array.prototype.splice()",
                                  "oQueFaz": "Altera o conteúdo de um array, removendo, substituindo ou adicionando elementos.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst elementosRemovidos = array.splice(1, 3, 'a', 'b', 'c');",
                                  "descricaoDoExemplo": "Remove `3` elementos a partir do índice `1` do array representado pela variável `array` e adiciona os elementos `'a'`, `'b'` e `'c'` no lugar. Os elementos removidos são armazenados na variável `elementosRemovidos`."
                                },
                                {
                                  "objeto": 466,
                                  "função": "Array.prototype.concat()",
                                  "oQueFaz": "Combina dois ou mais arrays, retornando um novo array resultante.",
                                  "exemplo": "const array1 = [1, 2];\nconst array2 = [3, 4];\nconst novoArray = array1.concat(array2);",
                                  "descricaoDoExemplo": "Combina os arrays `array1` e `array2` em um novo array `novoArray`."
                                },
                                {
                                  "objeto": 467,
                                  "função": "Array.prototype.join()",
                                  "oQueFaz": "Combina todos os elementos de um array em uma string, separados por um separador especificado.",
                                  "exemplo": "const array = ['a', 'b', 'c'];\nconst stringResultante = array.join('-');",
                                  "descricaoDoExemplo": "Combina os elementos do array representado pela variável `array` em uma única string, separados pelo caractere `'-'`, e armazena a string resultante na variável `stringResultante`."
                                },
                                {
                                  "objeto": 468,
                                  "função": "Array.prototype.indexOf()",
                                  "oQueFaz": "Retorna o primeiro índice em que um determinado elemento pode ser encontrado em um array, ou -1 se o elemento não estiver presente.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst indice = array.indexOf(3);",
                                  "descricaoDoExemplo": "Obtém o primeiro índice em que o elemento `3` é encontrado no array representado pela variável `array` e armazena o valor resultante na variável `indice`."
                                },
                                {
                                  "objeto": 469,
                                  "função": "Array.prototype.lastIndexOf()",
                                  "oQueFaz": "Retorna o último índice em que um determinado elemento pode ser encontrado em um array, ou -1 se o elemento não estiver presente.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst ultimoIndice = array.lastIndexOf(3);",
                                  "descricaoDoExemplo": "Obtém o último índice em que o elemento `3` é encontrado no array representado pela variável `array` e armazena o valor resultante na variável `ultimoIndice`."
                                },
                                {
                                  "objeto": 470,
                                  "função": "Array.prototype.forEach()",
                                  "oQueFaz": "Executa uma função em cada elemento de um array.",
                                  "exemplo": "const array = [1, 2, 3];\narray.forEach(elemento => console.log(elemento));",
                                  "descricaoDoExemplo": "Executa a função de callback `console.log` para cada elemento do array representado pela variável `array`."
                                },
                                {
                                  "objeto": 471,
                                  "função": "Array.prototype.map()",
                                  "oQueFaz": "Cria um novo array com os resultados da aplicação de uma função a cada elemento de um array.",
                                  "exemplo": "const array = [1, 2, 3];\nconst novoArray = array.map(elemento => elemento * 2);",
                                  "descricaoDoExemplo": "Cria um novo array `novoArray` contendo o resultado da multiplicação de cada elemento do array representado pela variável `array` por `2`."
                                },
                                {
                                  "objeto": 472,
                                  "função": "Array.prototype.filter()",
                                  "oQueFaz": "Cria um novo array com todos os elementos que passam em um teste (função fornecida).",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst novoArray = array.filter(elemento => elemento % 2 === 0);",
                                  "descricaoDoExemplo": "Cria um novo array `novoArray` contendo apenas os elementos pares do array representado pela variável `array`."
                                },
                                {
                                  "objeto": 473,
                                  "função": "Array.prototype.reduce()",
                                  "oQueFaz": "Aplica uma função a um acumulador e a cada elemento de um array (da esquerda para a direita) para reduzi-los a um único valor.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst soma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);",
                                  "descricaoDoExemplo": "Calcula a soma de todos os elementos do array representado pela variável `array` usando a função de callback fornecida no `reduce` e armazena o valor resultante na variável `soma`."
                                },
                                {
                                  "objeto": 474,
                                  "função": "Array.prototype.every()",
                                  "oQueFaz": "Verifica se todos os elementos de um array satisfazem a uma condição (função fornecida).",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst todosSaoMaioresQueZero = array.every(elemento => elemento > 0);",
                                  "descricaoDoExemplo": "Verifica se todos os elementos do array representado pela variável `array` são maiores que zero e armazena o valor resultante (`true` ou `false`) na variável `todosSaoMaioresQueZero`."
                                },
                                {
                                  "objeto": 475,
                                  "função": "Array.prototype.some()",
                                  "oQueFaz": "Verifica se pelo menos um elemento de um array satisfaz a uma condição (função fornecida).",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst peloMenosUmEhPar = array.some(elemento => elemento % 2 === 0);",
                                  "descricaoDoExemplo": "Verifica se pelo menos um elemento do array representado pela variável `array` é par e armazena o valor resultante"
                                },
                                {
                                  "objeto": 476,
                                  "função": "Array.prototype.find()",
                                  "oQueFaz": "Retorna o primeiro elemento de um array que satisfaz a uma condição (função fornecida).",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst primeiroPar = array.find(elemento => elemento % 2 === 0);",
                                  "descricaoDoExemplo": "Obtém o primeiro elemento do array representado pela variável `array` que é par e armazena o valor resultante na variável `primeiroPar`."
                                },
                                {
                                  "objeto": 477,
                                  "função": "Array.prototype.findIndex()",
                                  "oQueFaz": "Retorna o índice do primeiro elemento de um array que satisfaz a uma condição (função fornecida).",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst indiceDoPrimeiroPar = array.findIndex(elemento => elemento % 2 === 0);",
                                  "descricaoDoExemplo": "Obtém o índice do primeiro elemento do array representado pela variável `array` que é par e armazena o valor resultante na variável `indiceDoPrimeiroPar`."
                                },
                                {
                                  "objeto": 478,
                                  "função": "Array.prototype.includes()",
                                  "oQueFaz": "Verifica se um array contém um determinado elemento.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\nconst contemDois = array.includes(2);",
                                  "descricaoDoExemplo": "Verifica se o array representado pela variável `array` contém o elemento `2` e armazena o valor resultante (`true` ou `false`) na variável `contemDois`."
                                },
                                {
                                  "objeto": 479,
                                  "função": "Array.prototype.sort()",
                                  "oQueFaz": "Ordena os elementos de um array no lugar e retorna o array.",
                                  "exemplo": "const array = [3, 1, 4, 2, 5];\narray.sort();",
                                  "descricaoDoExemplo": "Ordena os elementos do array representado pela variável `array` em ordem crescente."
                                },
                                {
                                  "objeto": 480,
                                  "função": "Array.prototype.reverse()",
                                  "oQueFaz": "Inverte a ordem dos elementos de um array no lugar e retorna o array.",
                                  "exemplo": "const array = [1, 2, 3, 4, 5];\narray.reverse();",
                                  "descricaoDoExemplo": "Inverte a ordem dos elementos do array representado pela variável `array`."
                                },
                                {
                                  "objeto": 481,
                                  "função": "URLSearchParams.append()",
                                  "oQueFaz": "Adiciona um novo par de chave/valor a um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams();\nparams.append('chave', 'valor');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams vazio e adiciona um par 'chave/valor' com a chave 'chave' e valor 'valor'."
                                },
                                {
                                  "objeto": 482,
                                  "função": "URLSearchParams.delete()",
                                  "oQueFaz": "Remove um par de chave/valor de um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nparams.delete('chave1');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, remove o par 'chave1/valor1' do objeto."
                                },
                                {
                                  "objeto": 483,
                                  "função": "URLSearchParams.entries()",
                                  "oQueFaz": "Retorna um iterador que permite percorrer todos os pares de chave/valor contidos em um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nfor (const [key, value] of params.entries()) {\n  console.log(key, value);\n}",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, itera sobre todos os pares usando o método `entries()` e exibe as chaves e os valores no console."
                                },
                                {
                                  "objeto": 484,
                                  "função": "URLSearchParams.get()",
                                  "oQueFaz": "Retorna o primeiro valor associado a uma determinada chave em um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nconst valor = params.get('chave1');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, obtém o valor associado à chave 'chave1', que é 'valor1'."
                                },
                                {
                                  "objeto": 485,
                                  "função": "URLSearchParams.getAll()",
                                  "oQueFaz": "Retorna todos os valores associados a uma determinada chave em um objeto URLSearchParams como um array.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave1=valor2');\nconst valores = params.getAll('chave1');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave1/valor2' e, em seguida, obtém todos os valores associados à chave 'chave1' como um array, que neste caso seria ['valor1', 'valor2']."
                                },
                                {
                                  "objeto": 486,
                                  "função": "URLSearchParams.has()",
                                  "oQueFaz": "Verifica se um objeto URLSearchParams contém uma determinada chave.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nconst temChave = params.has('chave1');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, verifica se o objeto contém a chave 'chave1'."
                                },
                                {
                                  "objeto": 487,
                                  "função": "URLSearchParams.keys()",
                                  "oQueFaz": "Retorna um iterador que permite percorrer todas as chaves contidas em um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nfor (const key of params.keys()) {\n  console.log(key);\n}",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, itera sobre todas as chaves usando o método `keys()` e exibe as chaves no console."
                                },
                                {
                                  "objeto": 488,
                                  "função": "URLSearchParams.set()",
                                  "oQueFaz": "Define um novo valor para uma determinada chave em um objeto URLSearchParams, ou adiciona a chave/valor caso ela não exista.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nparams.set('chave1', 'novoValor');",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, define um novo valor 'novoValor' para a chave 'chave1'."
                                },
                                {
                                  "objeto": 489,
                                  "função": "URLSearchParams.sort()",
                                  "oQueFaz": "Ordena os pares de chave/valor de um objeto URLSearchParams por ordem de chave.",
                                  "exemplo": "const params = new URLSearchParams('chave2=valor2&chave1=valor1');\nparams.sort();",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave2/valor2' e 'chave1/valor1' e, em seguida, ordena os pares de acordo com a ordem das chaves, resultando em 'chave1/valor1' e 'chave2/valor2'."
                                },
                                {
                                  "objeto": 490,
                                  "função": "URLSearchParams.toString()",
                                  "oQueFaz": "Retorna uma string contendo todos os pares de chave/valor de um objeto URLSearchParams formatados como uma query string.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nconst queryString = params.toString();",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, converte os pares em uma string no formato de query string, que seria 'chave1=valor1&chave2=valor2'."
                                },
                                {
                                  "objeto": 491,
                                  "função": "URLSearchParams.values()",
                                  "oQueFaz": "Retorna um iterador que permite percorrer todos os valores contidos em um objeto URLSearchParams.",
                                  "exemplo": "const params = new URLSearchParams('chave1=valor1&chave2=valor2');\nfor (const value of params.values()) {\n  console.log(value);\n}",
                                  "descricaoDoExemplo": "Cria um novo objeto URLSearchParams com os pares 'chave1/valor1' e 'chave2/valor2' e, em seguida, itera sobre todos os valores usando o método `values()` e exibe os valores no console."
                                },
                                {
                                  "objeto": 492,
                                  "função": "WebGL2RenderingContext.copyTexImage2D()",
                                  "oQueFaz": "Copia o conteúdo de um framebuffer WebGL para uma textura 2D.",
                                  "exemplo": "gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, 256, 256, 0);",
                                  "descricaoDoExemplo": "Copia a parte do framebuffer WebGL atualmente associado ao destino de renderização para uma textura 2D. O retângulo especificado começa na posição (0, 0) e tem largura e altura de 256 pixels. O formato interno da textura é RGBA e o nível de detalhe é 0."
                                },
                                {
                                  "objeto": 493,
                                  "função": "WebGL2RenderingContext.copyTexSubImage3D()",
                                  "oQueFaz": "Copia uma sub-região de um framebuffer WebGL para uma textura 3D.",
                                  "exemplo": "gl.copyTexSubImage3D(gl.TEXTURE_3D, 0, 0, 0, 0, 0, 128, 128, 1);",
                                  "descricaoDoExemplo": "Copia uma sub-região do framebuffer WebGL atualmente associado ao destino de renderização para uma textura 3D. A região copiada começa na posição (0, 0, 0) do framebuffer e tem largura, altura e profundidade de 128 pixels. A textura 3D é atualizada no nível de detalhe 0."
                                },
                                {
                                  "objeto": 494,
                                  "função": "WebGL2RenderingContext.createTransformFeedback()",
                                  "oQueFaz": "Cria e retorna um novo objeto WebGLTransformFeedback.",
                                  "exemplo": "const transformFeedback = gl.createTransformFeedback();",
                                  "descricaoDoExemplo": "Cria um novo objeto WebGLTransformFeedback que pode ser usado para capturar e armazenar dados gerados pelos shaders do WebGL durante a renderização."
                                },
                                {
                                  "objeto": 495,
                                  "função": "WebGL2RenderingContext.createVertexArray()",
                                  "oQueFaz": "Cria e retorna um novo objeto WebGLVertexArrayObject (VAO).",
                                  "exemplo": "const vao = gl.createVertexArray();",
                                  "descricaoDoExemplo": "Cria um novo objeto WebGLVertexArrayObject que encapsula o estado do vertex array, incluindo os buffers de atributos e os atributos de vertex shader associados."
                                },
                                {
                                  "objeto": 496,
                                  "função": "WebGL2RenderingContext.deleteTransformFeedback()",
                                  "oQueFaz": "Exclui um objeto WebGLTransformFeedback.",
                                  "exemplo": "gl.deleteTransformFeedback(transformFeedback);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLTransformFeedback especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 497,
                                  "função": "WebGL2RenderingContext.deleteVertexArray()",
                                  "oQueFaz": "Exclui um objeto WebGLVertexArrayObject (VAO).",
                                  "exemplo": "gl.deleteVertexArray(vao);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLVertexArrayObject especificado, liberando a memória e os recursos associados a ele, incluindo buffers de atributos e atributos de vertex shader."
                                },
                                {
                                  "objeto": 498,
                                  "função": "WebGL2RenderingContext.drawArraysInstanced()",
                                  "oQueFaz": "Renderiza múltiplas instâncias de um conjunto de vértices a partir dos dados fornecidos.",
                                  "exemplo": "gl.drawArraysInstanced(gl.TRIANGLES, 0, vertexCount, instanceCount);",
                                  "descricaoDoExemplo": "Renderiza múltiplas instâncias de um conjunto de vértices usando um conjunto de primitivas. O conjunto de vértices começa no índice 0 e contém um total de vertexCount vértices. O número de instâncias renderizadas é especificado por instanceCount."
                                },
                                {
                                  "objeto": 499,
                                  "função": "WebGL2RenderingContext.drawBuffers()",
                                  "oQueFaz": "Especifica uma lista de buffers de destino para saída de cor durante a renderização.",
                                  "exemplo": "gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1]);",
                                  "descricaoDoExemplo": "Define a lista de buffers de destino para saída de cor. Neste exemplo, os buffers de destino são definidos como `COLOR_ATTACHMENT0` e `COLOR_ATTACHMENT1`."
                                },
                                {
                                  "objeto": 500,
                                  "função": "WebGL2RenderingContext.createQuery()",
                                  "oQueFaz": "Cria e retorna um novo objeto WebGLQuery.",
                                  "exemplo": "const query = gl.createQuery();",
                                  "descricaoDoExemplo": "Cria um novo objeto WebGLQuery que pode ser usado para consultar informações do WebGL, como tempo de renderização."
                                },
                                {
                                  "objeto": 501,
                                  "função": "WebGL2RenderingContext.deleteQuery()",
                                  "oQueFaz": "Exclui um objeto WebGLQuery.",
                                  "exemplo": "gl.deleteQuery(query);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLQuery especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 502,
                                  "função": "WebGL2RenderingContext.endQuery()",
                                  "oQueFaz": "Encerra a gravação de comandos para um objeto WebGLQuery.",
                                  "exemplo": "gl.endQuery(gl.TIME_ELAPSED);",
                                  "descricaoDoExemplo": "Encerra a gravação de comandos para o objeto WebGLQuery especificado. Neste exemplo, o tipo de consulta é `TIME_ELAPSED`."
                                },
                                {
                                  "objeto": 503,
                                  "função": "WebGL2RenderingContext.endTransformFeedback()",
                                  "oQueFaz": "Encerra a captura de dados gerados pelos shaders do WebGL durante a renderização.",
                                  "exemplo": "gl.endTransformFeedback();",
                                  "descricaoDoExemplo": "Encerra a captura de dados gerados pelos shaders do WebGL durante a renderização e desativa o objeto WebGLTransformFeedback associado."
                                },
                                {
                                  "objeto": 504,
                                  "função": "WebGL2RenderingContext.getQueryParameter()",
                                  "oQueFaz": "Retorna informações sobre um objeto WebGLQuery.",
                                  "exemplo": "const result = gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE);",
                                  "descricaoDoExemplo": "Retorna um valor booleano indicando se os resultados da consulta estão disponíveis para o objeto WebGLQuery especificado."
                                },
                                {
                                  "objeto": 505,
                                  "função": "WebGL2RenderingContext.getQuery()",
                                  "oQueFaz": "Recupera o valor de um objeto WebGLQuery.",
                                  "exemplo": "const result = gl.getQuery(query, gl.QUERY_RESULT);",
                                  "descricaoDoExemplo": "Recupera o valor resultante da consulta realizada pelo objeto WebGLQuery especificado."
                                },
                                {
                                  "objeto": 506,
                                  "função": "WebGL2RenderingContext.getIndexedParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro WebGL indexado.",
                                  "exemplo": "const value = gl.getIndexedParameter(gl.TRANSFORM_FEEDBACK_BUFFER_BINDING, 0);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro WebGL indexado especificado. Neste exemplo, o parâmetro é `TRANSFORM_FEEDBACK_BUFFER_BINDING` e o índice é 0."
                                },
                                {
                                  "objeto": 507,
                                  "função": "WebGL2RenderingContext.getUniformBlockIndex()",
                                  "oQueFaz": "Retorna o índice de um bloco de uniformes em um programa WebGL.",
                                  "exemplo": "const blockIndex = gl.getUniformBlockIndex(program, 'BlockName');",
                                  "descricaoDoExemplo": "Retorna o índice do bloco de uniformes com o nome 'BlockName' no programa WebGL especificado."
                                },
                                {
                                  "objeto": 508,
                                  "função": "WebGL2RenderingContext.invalidateFramebuffer()",
                                  "oQueFaz": "Invalida a contenção de dados de um framebuffer WebGL.",
                                  "exemplo": "gl.invalidateFramebuffer(gl.FRAMEBUFFER, [gl.COLOR_ATTACHMENT0]);",
                                  "descricaoDoExemplo": "Invalida a contenção de dados para o framebuffer WebGL especificado. Neste exemplo, apenas o buffer de cor anexado em `COLOR_ATTACHMENT0` é invalidado."
                                },
                                {
                                  "objeto": 509,
                                  "função": "WebGL2RenderingContext.invalidateSubFramebuffer()",
                                  "oQueFaz": "Invalida a contenção de dados de uma parte específica de um framebuffer WebGL.",
                                  "exemplo": "gl.invalidateSubFramebuffer(gl.FRAMEBUFFER, [gl.COLOR_ATTACHMENT0], x, y, width, height);",
                                  "descricaoDoExemplo": "Invalida a contenção de dados para uma parte específica do framebuffer WebGL especificado. Neste exemplo, apenas o buffer de cor anexado em `COLOR_ATTACHMENT0` é invalidado e a área inválida é definida pelas coordenadas (x, y) e dimensões (width, height)."
                                },
                                {
                                  "objeto": 510,
                                  "função": "WebGL2RenderingContext.readBuffer()",
                                  "oQueFaz": "Define o buffer de cor a ser lido durante a operação de leitura de pixels.",
                                  "exemplo": "gl.readBuffer(gl.COLOR_ATTACHMENT0);",
                                  "descricaoDoExemplo": "Define o buffer de cor a ser lido durante a operação de leitura de pixels. Neste exemplo, o buffer de cor anexado em `COLOR_ATTACHMENT0` é definido como o buffer de leitura."
                                },
                                {
                                  "objeto": 511,
                                  "função": "WebGL2RenderingContext.getSamplerParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro de amostrador WebGL.",
                                  "exemplo": "const wrapS = gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro de amostrador WebGL especificado para o amostrador WebGL especificado."
                                },
                                {
                                  "objeto": 512,
                                  "função": "WebGL2RenderingContext.getSyncParameter()",
                                  "oQueFaz": "Retorna informações sobre um objeto WebGLSync.",
                                  "exemplo": "const status = gl.getSyncParameter(sync, gl.SYNC_STATUS);",
                                  "descricaoDoExemplo": "Retorna informações sobre o objeto WebGLSync especificado. Neste exemplo, o parâmetro é `SYNC_STATUS`."
                                },
                                {
                                  "objeto": 513,
                                  "função": "WebGL2RenderingContext.getTransformFeedbackVarying()",
                                  "oQueFaz": "Retorna informações sobre um varying de transform feedback em um programa WebGL.",
                                  "exemplo": "const varyingInfo = gl.getTransformFeedbackVarying(program, index);",
                                  "descricaoDoExemplo": "Retorna informações sobre o varying de transform feedback com o índice especificado no programa WebGL especificado."
                                },
                                {
                                  "objeto": 514,
                                  "função": "WebGL2RenderingContext.getUniform()",
                                  "oQueFaz": "Recupera o valor de uma variável de uniforme em um programa WebGL.",
                                  "exemplo": "const value = gl.getUniform(program, uniformLocation);",
                                  "descricaoDoExemplo": "Recupera o valor da variável de uniforme no programa WebGL especificado. O local do uniforme é obtido usando a função `getUniformLocation()`."
                                },
                                {
                                  "objeto": 515,
                                  "função": "WebGL2RenderingContext.getVertexAttrib()",
                                  "oQueFaz": "Retorna informações sobre um atributo de vértice em um buffer WebGL.",
                                  "exemplo": "const buffer = gl.getVertexAttrib(index, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING);",
                                  "descricaoDoExemplo": "Retorna informações sobre o atributo de vértice com o índice especificado no buffer WebGL especificado. Neste exemplo, o parâmetro é `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING`."
                                },
                                {
                                  "objeto": 516,
                                  "função": "WebGL2RenderingContext.getVertexAttribOffset()",
                                  "oQueFaz": "Retorna o deslocamento de um atributo de vértice em um buffer WebGL.",
                                  "exemplo": "const offset = gl.getVertexAttribOffset(index, gl.VERTEX_ATTRIB_ARRAY_POINTER);",
                                  "descricaoDoExemplo": "Retorna o deslocamento em bytes do atributo de vértice com o índice especificado no buffer WebGL especificado. Neste exemplo, o parâmetro é `VERTEX_ATTRIB_ARRAY_POINTER`."
                                },
                                {
                                  "objeto": 517,
                                  "função": "WebGL2RenderingContext.isQuery()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLQuery válido.",
                                  "exemplo": "const isValid = gl.isQuery(query);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLQuery especificado é um objeto WebGLQuery válido."
                                },
                                {
                                  "objeto": 518,
                                  "função": "WebGL2RenderingContext.isSampler()",
                                  "oQueFaz": "Verifica se um objeto é um amostrador WebGL válido.",
                                  "exemplo": "const isValid = gl.isSampler(sampler);",
                                  "descricaoDoExemplo": "Verifica se o objeto amostrador WebGL especificado é um amostrador WebGL válido."
                                },
                                {
                                  "objeto": 519,
                                  "função": "WebGL2RenderingContext.isSync()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLSync válido.",
                                  "exemplo": "const isValid = gl.isSync(sync);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLSync especificado é um objeto WebGLSync válido."
                                },
                                {
                                  "objeto": 520,
                                  "função": "WebGL2RenderingContext.isTransformFeedback()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLTransformFeedback válido.",
                                  "exemplo": "const isValid = gl.isTransformFeedback(transformFeedback);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLTransformFeedback especificado é um objeto WebGLTransformFeedback válido."
                                },
                                {
                                  "objeto": 521,
                                  "função": "WebGL2RenderingContext.isVertexArray()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLVertexArray válido.",
                                  "exemplo": "const isValid = gl.isVertexArray(vertexArray);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLVertexArray especificado é um objeto WebGLVertexArray válido."
                                },
                                {
                                  "objeto": 522,
                                  "função": "WebGL2RenderingContext.pauseTransformFeedback()",
                                  "oQueFaz": "Pausa a gravação de dados de transform feedback.",
                                  "exemplo": "gl.pauseTransformFeedback();",
                                  "descricaoDoExemplo": "Pausa a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 523,
                                  "função": "WebGL2RenderingContext.resumeTransformFeedback()",
                                  "oQueFaz": "Retoma a gravação de dados de transform feedback.",
                                  "exemplo": "gl.resumeTransformFeedback();",
                                  "descricaoDoExemplo": "Retoma a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 524,
                                  "função": "WebGL2RenderingContext.bindVertexArray()",
                                  "oQueFaz": "Associa um objeto WebGLVertexArray a um contexto WebGL.",
                                  "exemplo": "gl.bindVertexArray(vertexArray);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLVertexArray especificado ao contexto WebGL atual."
                                },
                                {
                                  "objeto": 525,
                                  "função": "WebGL2RenderingContext.createVertexArray()",
                                  "oQueFaz": "Cria um novo objeto WebGLVertexArray.",
                                  "exemplo": "const vertexArray = gl.createVertexArray();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLVertexArray que pode ser usado para armazenar atributos de vértice e estados de buffer."
                                },
                                {
                                  "objeto": 526,
                                  "função": "WebGL2RenderingContext.deleteVertexArray()",
                                  "oQueFaz": "Exclui um objeto WebGLVertexArray.",
                                  "exemplo": "gl.deleteVertexArray(vertexArray);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLVertexArray especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 527,
                                  "função": "WebGL2RenderingContext.createSampler()",
                                  "oQueFaz": "Cria um novo objeto WebGLSampler.",
                                  "exemplo": "const sampler = gl.createSampler();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSampler que pode ser usado para definir propriedades de amostragem para texturas."
                                },
                                {
                                  "objeto": 528,
                                  "função": "WebGL2RenderingContext.deleteSampler()",
                                  "oQueFaz": "Exclui um objeto WebGLSampler.",
                                  "exemplo": "gl.deleteSampler(sampler);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSampler especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 529,
                                  "função": "WebGL2RenderingContext.bindSampler()",
                                  "oQueFaz": "Associa um objeto WebGLSampler a um ponto de textura.",
                                  "exemplo": "gl.bindSampler(unit, sampler);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLSampler especificado ao ponto de textura especificado."
                                },
                                {
                                  "objeto": 530,
                                  "função": "WebGL2RenderingContext.samplerParameteri()",
                                  "oQueFaz": "Define um parâmetro inteiro para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);",
                                  "descricaoDoExemplo": "Define o valor inteiro do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_FILTER` e o valor é `LINEAR`."
                                },
                                {
                                  "objeto": 531,
                                  "função": "WebGL2RenderingContext.samplerParameterf()",
                                  "oQueFaz": "Define um parâmetro de ponto flutuante para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameterf(sampler, gl.TEXTURE_MIN_LOD, 0.0);",
                                  "descricaoDoExemplo": "Define o valor de ponto flutuante do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_LOD` e o valor é 0.0."
                                },
                                {
                                  "objeto": 532,
                                  "função": "WebGL2RenderingContext.getSamplerParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro de amostrador WebGL.",
                                  "exemplo": "const wrapS = gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro de amostrador WebGL especificado para o amostrador WebGL especificado."
                                },
                                {
                                  "objeto": 533,
                                  "função": "WebGL2RenderingContext.fenceSync()",
                                  "oQueFaz": "Cria um objeto WebGLSync para sincronização condicional.",
                                  "exemplo": "const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSync que pode ser usado para sincronização condicional de comandos WebGL."
                                },
                                {
                                  "objeto": 534,
                                  "função": "WebGL2RenderingContext.isSync()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLSync válido.",
                                  "exemplo": "const isValid = gl.isSync(sync);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLSync especificado é um objeto WebGLSync válido."
                                },
                                {
                                  "objeto": 535,
                                  "função": "WebGL2RenderingContext.deleteSync()",
                                  "oQueFaz": "Exclui um objeto WebGLSync.",
                                  "exemplo": "gl.deleteSync(sync);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSync especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 536,
                                  "função": "WebGL2RenderingContext.clientWaitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado ou ocorra um intervalo de tempo.",
                                  "exemplo": "const status = gl.clientWaitSync(sync, gl.SYNC_FLUSH_COMMANDS_BIT, timeout);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado ou ocorra um intervalo de tempo. Neste exemplo, a função retorna o status de espera."
                                },
                                {
                                  "objeto": 537,
                                  "função": "WebGL2RenderingContext.waitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado.",
                                  "exemplo": "gl.waitSync(sync, 0);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado. Neste exemplo, a função espera indefinidamente."
                                },
                                {
                                  "objeto": 538,
                                  "função": "WebGL2RenderingContext.getSyncParameter()",
                                  "oQueFaz": "Retorna informações sobre um objeto WebGLSync.",
                                  "exemplo": "const status = gl.getSyncParameter(sync, gl.SYNC_STATUS);",
                                  "descricaoDoExemplo": "Retorna informações sobre o objeto WebGLSync especificado. Neste exemplo, o parâmetro é `SYNC_STATUS`."
                                },
                                {
                                  "objeto": 539,
                                  "função": "WebGL2RenderingContext.createTransformFeedback()",
                                  "oQueFaz": "Cria um novo objeto WebGLTransformFeedback.",
                                  "exemplo": "const transformFeedback = gl.createTransformFeedback();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLTransformFeedback que pode ser usado para capturar e armazenar dados gerados por shaders de transform feedback."
                                },
                                {
                                  "objeto": 540,
                                  "função": "WebGL2RenderingContext.deleteTransformFeedback()",
                                  "oQueFaz": "Exclui um objeto WebGLTransformFeedback.",
                                  "exemplo": "gl.deleteTransformFeedback(transformFeedback);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLTransformFeedback especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 541,
                                  "função": "WebGL2RenderingContext.bindTransformFeedback()",
                                  "oQueFaz": "Associa um objeto WebGLTransformFeedback a um ponto de transform feedback.",
                                  "exemplo": "gl.bindTransformFeedback(target, transformFeedback);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLTransformFeedback especificado ao ponto de transform feedback especificado."
                                },
                                {
                                  "objeto": 542,
                                  "função": "WebGL2RenderingContext.beginTransformFeedback()",
                                  "oQueFaz": "Inicia a gravação de dados de transform feedback.",
                                  "exemplo": "gl.beginTransformFeedback(gl.POINTS);",
                                  "descricaoDoExemplo": "Inicia a gravação de dados de transform feedback para o tipo de primitiva especificado."
                                },
                                {
                                  "objeto": 543,
                                  "função": "WebGL2RenderingContext.endTransformFeedback()",
                                  "oQueFaz": "Encerra a gravação de dados de transform feedback.",
                                  "exemplo": "gl.endTransformFeedback();",
                                  "descricaoDoExemplo": "Encerra a gravação de dados de transform feedback e gera o resultado do transform feedback."
                                },
                                {
                                  "objeto": 544,
                                  "função": "WebGL2RenderingContext.transformFeedbackVaryings()",
                                  "oQueFaz": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback.",
                                  "exemplo": "gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);",
                                  "descricaoDoExemplo": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback no programa WebGL especificado. Neste exemplo, o modo de captura é `SEPARATE_ATTRIBS`."
                                },
                                {
                                  "objeto": 545,
                                  "função": "WebGL2RenderingContext.getTransformFeedbackVarying()",
                                  "oQueFaz": "Retorna informações sobre um varying de transform feedback em um programa WebGL.",
                                  "exemplo": "const varyingInfo = gl.getTransformFeedbackVarying(program, index);",
                                  "descricaoDoExemplo": "Retorna informações sobre o varying de transform feedback com o índice especificado no programa WebGL especificado."
                                },
                                {
                                  "objeto": 546,
                                  "função": "WebGL2RenderingContext.pauseTransformFeedback()",
                                  "oQueFaz": "Pausa a gravação de dados de transform feedback.",
                                  "exemplo": "gl.pauseTransformFeedback();",
                                  "descricaoDoExemplo": "Pausa a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 547,
                                  "função": "WebGL2RenderingContext.resumeTransformFeedback()",
                                  "oQueFaz": "Retoma a gravação de dados de transform feedback.",
                                  "exemplo": "gl.resumeTransformFeedback();",
                                  "descricaoDoExemplo": "Retoma a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 548,
                                  "função": "WebGL2RenderingContext.createSampler()",
                                  "oQueFaz": "Cria um novo objeto WebGLSampler.",
                                  "exemplo": "const sampler = gl.createSampler();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSampler que pode ser usado para definir propriedades de amostragem para texturas."
                                },
                                {
                                  "objeto": 549,
                                  "função": "WebGL2RenderingContext.deleteSampler()",
                                  "oQueFaz": "Exclui um objeto WebGLSampler.",
                                  "exemplo": "gl.deleteSampler(sampler);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSampler especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 550,
                                  "função": "WebGL2RenderingContext.bindSampler()",
                                  "oQueFaz": "Associa um objeto WebGLSampler a um ponto de textura.",
                                  "exemplo": "gl.bindSampler(unit, sampler);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLSampler especificado ao ponto de textura especificado."
                                },
                                {
                                  "objeto": 551,
                                  "função": "WebGL2RenderingContext.samplerParameteri()",
                                  "oQueFaz": "Define um parâmetro inteiro para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);",
                                  "descricaoDoExemplo": "Define o valor inteiro do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_FILTER` e o valor é `LINEAR`."
                                },
                                {
                                  "objeto": 552,
                                  "função": "WebGL2RenderingContext.samplerParameterf()",
                                  "oQueFaz": "Define um parâmetro de ponto flutuante para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameterf(sampler, gl.TEXTURE_MIN_LOD, 0.0);",
                                  "descricaoDoExemplo": "Define o valor de ponto flutuante do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_LOD` e o valor é 0.0."
                                },
                                {
                                  "objeto": 553,
                                  "função": "WebGL2RenderingContext.getSamplerParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro de amostrador WebGL.",
                                  "exemplo": "const wrapS = gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro de amostrador WebGL especificado para o amostrador WebGL especificado."
                                },
                                {
                                  "objeto": 554,
                                  "função": "WebGL2RenderingContext.fenceSync()",
                                  "oQueFaz": "Cria um objeto WebGLSync para sincronização condicional.",
                                  "exemplo": "const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSync que pode ser usado para sincronização condicional de comandos WebGL."
                                },
                                {
                                  "objeto": 555,
                                  "função": "WebGL2RenderingContext.isSync()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLSync válido.",
                                  "exemplo": "const isValid = gl.isSync(sync);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLSync especificado é um objeto WebGLSync válido."
                                },
                                {
                                  "objeto": 556,
                                  "função": "WebGL2RenderingContext.deleteSync()",
                                  "oQueFaz": "Exclui um objeto WebGLSync.",
                                  "exemplo": "gl.deleteSync(sync);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSync especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 557,
                                  "função": "WebGL2RenderingContext.clientWaitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado ou ocorra um intervalo de tempo.",
                                  "exemplo": "const status = gl.clientWaitSync(sync, gl.SYNC_FLUSH_COMMANDS_BIT, timeout);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado ou ocorra um intervalo de tempo. Neste exemplo, a função retorna o status de espera."
                                },
                                {
                                  "objeto": 558,
                                  "função": "WebGL2RenderingContext.waitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado.",
                                  "exemplo": "gl.waitSync(sync, 0);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado. Neste exemplo, a função espera indefinidamente."
                                },
                                {
                                  "objeto": 559,
                                  "função": "WebGL2RenderingContext.getSyncParameter()",
                                  "oQueFaz": "Retorna informações sobre um objeto WebGLSync.",
                                  "exemplo": "const status = gl.getSyncParameter(sync, gl.SYNC_STATUS);",
                                  "descricaoDoExemplo": "Retorna informações sobre o objeto WebGLSync especificado. Neste exemplo, o parâmetro é `SYNC_STATUS`."
                                },
                                {
                                  "objeto": 560,
                                  "função": "WebGL2RenderingContext.createTransformFeedback()",
                                  "oQueFaz": "Cria um novo objeto WebGLTransformFeedback.",
                                  "exemplo": "const transformFeedback = gl.createTransformFeedback();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLTransformFeedback que pode ser usado para capturar e armazenar dados gerados por shaders de transform feedback."
                                },
                                {
                                  "objeto": 561,
                                  "função": "WebGL2RenderingContext.deleteTransformFeedback()",
                                  "oQueFaz": "Exclui um objeto WebGLTransformFeedback.",
                                  "exemplo": "gl.deleteTransformFeedback(transformFeedback);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLTransformFeedback especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 562,
                                  "função": "WebGL2RenderingContext.bindTransformFeedback()",
                                  "oQueFaz": "Associa um objeto WebGLTransformFeedback a um ponto de transform feedback.",
                                  "exemplo": "gl.bindTransformFeedback(target, transformFeedback);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLTransformFeedback especificado ao ponto de transform feedback especificado."
                                },
                                {
                                  "objeto": 563,
                                  "função": "WebGL2RenderingContext.beginTransformFeedback()",
                                  "oQueFaz": "Inicia a gravação de dados de transform feedback.",
                                  "exemplo": "gl.beginTransformFeedback(gl.POINTS);",
                                  "descricaoDoExemplo": "Inicia a gravação de dados de transform feedback para o tipo de primitiva especificado."
                                },
                                {
                                  "objeto": 564,
                                  "função": "WebGL2RenderingContext.endTransformFeedback()",
                                  "oQueFaz": "Encerra a gravação de dados de transform feedback.",
                                  "exemplo": "gl.endTransformFeedback();",
                                  "descricaoDoExemplo": "Encerra a gravação de dados de transform feedback e gera o resultado do transform feedback."
                                },
                                {
                                  "objeto": 565,
                                  "função": "WebGL2RenderingContext.transformFeedbackVaryings()",
                                  "oQueFaz": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback.",
                                  "exemplo": "gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);",
                                  "descricaoDoExemplo": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback no programa WebGL especificado. Neste exemplo, o modo de captura é `SEPARATE_ATTRIBS`."
                                },
                                {
                                  "objeto": 566,
                                  "função": "WebGL2RenderingContext.getTransformFeedbackVarying()",
                                  "oQueFaz": "Retorna informações sobre um varying de transform feedback em um programa WebGL.",
                                  "exemplo": "const varyingInfo = gl.getTransformFeedbackVarying(program, index);",
                                  "descricaoDoExemplo": "Retorna informações sobre o varying de transform feedback com o índice especificado no programa WebGL especificado."
                                },
                                {
                                  "objeto": 567,
                                  "função": "WebGL2RenderingContext.pauseTransformFeedback()",
                                  "oQueFaz": "Pausa a gravação de dados de transform feedback.",
                                  "exemplo": "gl.pauseTransformFeedback();",
                                  "descricaoDoExemplo": "Pausa a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 568,
                                  "função": "WebGL2RenderingContext.resumeTransformFeedback()",
                                  "oQueFaz": "Retoma a gravação de dados de transform feedback.",
                                  "exemplo": "gl.resumeTransformFeedback();",
                                  "descricaoDoExemplo": "Retoma a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 569,
                                  "função": "WebGL2RenderingContext.createSampler()",
                                  "oQueFaz": "Cria um novo objeto WebGLSampler.",
                                  "exemplo": "const sampler = gl.createSampler();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSampler que pode ser usado para definir propriedades de amostragem para texturas."
                                },
                                {
                                  "objeto": 570,
                                  "função": "WebGL2RenderingContext.deleteSampler()",
                                  "oQueFaz": "Exclui um objeto WebGLSampler.",
                                  "exemplo": "gl.deleteSampler(sampler);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSampler especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 571,
                                  "função": "WebGL2RenderingContext.bindSampler()",
                                  "oQueFaz": "Associa um objeto WebGLSampler a um ponto de textura.",
                                  "exemplo": "gl.bindSampler(unit, sampler);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLSampler especificado ao ponto de textura especificado."
                                },
                                {
                                  "objeto": 572,
                                  "função": "WebGL2RenderingContext.samplerParameteri()",
                                  "oQueFaz": "Define um parâmetro inteiro para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);",
                                  "descricaoDoExemplo": "Define o valor inteiro do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_FILTER` e o valor é `LINEAR`."
                                },
                                {
                                  "objeto": 573,
                                  "função": "WebGL2RenderingContext.samplerParameterf()",
                                  "oQueFaz": "Define um parâmetro de ponto flutuante para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameterf(sampler, gl.TEXTURE_MIN_LOD, 0.0);",
                                  "descricaoDoExemplo": "Define o valor de ponto flutuante do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_LOD` e o valor é 0.0."
                                },
                                {
                                  "objeto": 574,
                                  "função": "WebGL2RenderingContext.getSamplerParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro de amostrador WebGL.",
                                  "exemplo": "const wrapS = gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro de amostrador WebGL especificado para o amostrador WebGL especificado."
                                },
                                {
                                  "objeto": 575,
                                  "função": "WebGL2RenderingContext.fenceSync()",
                                  "oQueFaz": "Cria um objeto WebGLSync para sincronização condicional.",
                                  "exemplo": "const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSync que pode ser usado para sincronização condicional de comandos WebGL."
                                },
                                {
                                  "objeto": 576,
                                  "função": "WebGL2RenderingContext.isSync()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLSync válido.",
                                  "exemplo": "const isValid = gl.isSync(sync);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLSync especificado é um objeto WebGLSync válido."
                                },
                                {
                                  "objeto": 577,
                                  "função": "WebGL2RenderingContext.deleteSync()",
                                  "oQueFaz": "Exclui um objeto WebGLSync.",
                                  "exemplo": "gl.deleteSync(sync);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSync especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 578,
                                  "função": "WebGL2RenderingContext.clientWaitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado ou ocorra um intervalo de tempo.",
                                  "exemplo": "const status = gl.clientWaitSync(sync, gl.SYNC_FLUSH_COMMANDS_BIT, timeout);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado ou ocorra um intervalo de tempo. Neste exemplo, a função retorna o status de espera."
                                },
                                {
                                  "objeto": 579,
                                  "função": "WebGL2RenderingContext.waitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado.",
                                  "exemplo": "gl.waitSync(sync, 0);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado. Neste exemplo, a função espera indefinidamente."
                                },
                                {
                                  "objeto": 580,
                                  "função": "WebGL2RenderingContext.getSyncParameter()",
                                  "oQueFaz": "Retorna informações sobre um objeto WebGLSync.",
                                  "exemplo": "const status = gl.getSyncParameter(sync, gl.SYNC_STATUS);",
                                  "descricaoDoExemplo": "Retorna informações sobre o objeto WebGLSync especificado. Neste exemplo, o parâmetro é `SYNC_STATUS`."
                                },
                                {
                                  "objeto": 581,
                                  "função": "WebGL2RenderingContext.createTransformFeedback()",
                                  "oQueFaz": "Cria um novo objeto WebGLTransformFeedback.",
                                  "exemplo": "const transformFeedback = gl.createTransformFeedback();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLTransformFeedback que pode ser usado para capturar e armazenar dados gerados por shaders de transform feedback."
                                },
                                {
                                  "objeto": 582,
                                  "função": "WebGL2RenderingContext.deleteTransformFeedback()",
                                  "oQueFaz": "Exclui um objeto WebGLTransformFeedback.",
                                  "exemplo": "gl.deleteTransformFeedback(transformFeedback);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLTransformFeedback especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 583,
                                  "função": "WebGL2RenderingContext.bindTransformFeedback()",
                                  "oQueFaz": "Associa um objeto WebGLTransformFeedback a um ponto de transform feedback.",
                                  "exemplo": "gl.bindTransformFeedback(target, transformFeedback);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLTransformFeedback especificado ao ponto de transform feedback especificado."
                                },
                                {
                                  "objeto": 584,
                                  "função": "WebGL2RenderingContext.beginTransformFeedback()",
                                  "oQueFaz": "Inicia a gravação de dados de transform feedback.",
                                  "exemplo": "gl.beginTransformFeedback(gl.POINTS);",
                                  "descricaoDoExemplo": "Inicia a gravação de dados de transform feedback para o tipo de primitiva especificado."
                                },
                                {
                                  "objeto": 585,
                                  "função": "WebGL2RenderingContext.endTransformFeedback()",
                                  "oQueFaz": "Encerra a gravação de dados de transform feedback.",
                                  "exemplo": "gl.endTransformFeedback();",
                                  "descricaoDoExemplo": "Encerra a gravação de dados de transform feedback e gera o resultado do transform feedback."
                                },
                                {
                                  "objeto": 586,
                                  "função": "WebGL2RenderingContext.transformFeedbackVaryings()",
                                  "oQueFaz": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback.",
                                  "exemplo": "gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);",
                                  "descricaoDoExemplo": "Especifica os varying de transform feedback a serem capturados durante a gravação de dados de transform feedback no programa WebGL especificado. Neste exemplo, o modo de captura é `SEPARATE_ATTRIBS`."
                                },
                                {
                                  "objeto": 587,
                                  "função": "WebGL2RenderingContext.getTransformFeedbackVarying()",
                                  "oQueFaz": "Retorna informações sobre um varying de transform feedback em um programa WebGL.",
                                  "exemplo": "const varyingInfo = gl.getTransformFeedbackVarying(program, index);",
                                  "descricaoDoExemplo": "Retorna informações sobre o varying de transform feedback com o índice especificado no programa WebGL especificado."
                                },
                                {
                                  "objeto": 588,
                                  "função": "WebGL2RenderingContext.pauseTransformFeedback()",
                                  "oQueFaz": "Pausa a gravação de dados de transform feedback.",
                                  "exemplo": "gl.pauseTransformFeedback();",
                                  "descricaoDoExemplo": "Pausa a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 589,
                                  "função": "WebGL2RenderingContext.resumeTransformFeedback()",
                                  "oQueFaz": "Retoma a gravação de dados de transform feedback.",
                                  "exemplo": "gl.resumeTransformFeedback();",
                                  "descricaoDoExemplo": "Retoma a gravação de dados de transform feedback em todos os objetos WebGLTransformFeedback ativos."
                                },
                                {
                                  "objeto": 590,
                                  "função": "WebGL2RenderingContext.createSampler()",
                                  "oQueFaz": "Cria um novo objeto WebGLSampler.",
                                  "exemplo": "const sampler = gl.createSampler();",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSampler que pode ser usado para definir propriedades de amostragem para texturas."
                                },
                                {
                                  "objeto": 591,
                                  "função": "WebGL2RenderingContext.deleteSampler()",
                                  "oQueFaz": "Exclui um objeto WebGLSampler.",
                                  "exemplo": "gl.deleteSampler(sampler);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSampler especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 592,
                                  "função": "WebGL2RenderingContext.bindSampler()",
                                  "oQueFaz": "Associa um objeto WebGLSampler a um ponto de textura.",
                                  "exemplo": "gl.bindSampler(unit, sampler);",
                                  "descricaoDoExemplo": "Associa o objeto WebGLSampler especificado ao ponto de textura especificado."
                                },
                                {
                                  "objeto": 593,
                                  "função": "WebGL2RenderingContext.samplerParameteri()",
                                  "oQueFaz": "Define um parâmetro inteiro para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);",
                                  "descricaoDoExemplo": "Define o valor inteiro do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_FILTER` e o valor é `LINEAR`."
                                },
                                {
                                  "objeto": 594,
                                  "função": "WebGL2RenderingContext.samplerParameterf()",
                                  "oQueFaz": "Define um parâmetro de ponto flutuante para um objeto WebGLSampler.",
                                  "exemplo": "gl.samplerParameterf(sampler, gl.TEXTURE_MIN_LOD, 0.0);",
                                  "descricaoDoExemplo": "Define o valor de ponto flutuante do parâmetro especificado para o objeto WebGLSampler especificado. Neste exemplo, o parâmetro é `TEXTURE_MIN_LOD` e o valor é 0.0."
                                },
                                {
                                  "objeto": 595,
                                  "função": "WebGL2RenderingContext.getSamplerParameter()",
                                  "oQueFaz": "Retorna informações sobre um parâmetro de amostrador WebGL.",
                                  "exemplo": "const wrapS = gl.getSamplerParameter(sampler, gl.TEXTURE_WRAP_S);",
                                  "descricaoDoExemplo": "Retorna o valor do parâmetro de amostrador WebGL especificado para o amostrador WebGL especificado."
                                },
                                {
                                  "objeto": 596,
                                  "função": "WebGL2RenderingContext.fenceSync()",
                                  "oQueFaz": "Cria um objeto WebGLSync para sincronização condicional.",
                                  "exemplo": "const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);",
                                  "descricaoDoExemplo": "Cria e retorna um novo objeto WebGLSync que pode ser usado para sincronização condicional de comandos WebGL."
                                },
                                {
                                  "objeto": 597,
                                  "função": "WebGL2RenderingContext.isSync()",
                                  "oQueFaz": "Verifica se um objeto é um objeto WebGLSync válido.",
                                  "exemplo": "const isValid = gl.isSync(sync);",
                                  "descricaoDoExemplo": "Verifica se o objeto WebGLSync especificado é um objeto WebGLSync válido."
                                },
                                {
                                  "objeto": 598,
                                  "função": "WebGL2RenderingContext.deleteSync()",
                                  "oQueFaz": "Exclui um objeto WebGLSync.",
                                  "exemplo": "gl.deleteSync(sync);",
                                  "descricaoDoExemplo": "Exclui o objeto WebGLSync especificado, liberando a memória e os recursos associados a ele."
                                },
                                {
                                  "objeto": 599,
                                  "função": "WebGL2RenderingContext.clientWaitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado ou ocorra um intervalo de tempo.",
                                  "exemplo": "const status = gl.clientWaitSync(sync, gl.SYNC_FLUSH_COMMANDS_BIT, timeout);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado ou ocorra um intervalo de tempo. Neste exemplo, a função retorna o status de espera."
                                },
                                {
                                  "objeto": 600,
                                  "função": "WebGL2RenderingContext.waitSync()",
                                  "oQueFaz": "Aguarda até que um objeto WebGLSync seja sinalizado.",
                                  "exemplo": "gl.waitSync(sync, 0);",
                                  "descricaoDoExemplo": "Aguarda até que o objeto WebGLSync especificado seja sinalizado. Neste exemplo, a função espera indefinidamente."
                                },
                                {
                                  "objeto": 601,
                                  "função": "Path2D.quadraticCurveTo()",
                                  "oQueFaz": "Adiciona uma curva quadrática ao caminho atual",
                                  "exemplo": "const path = new Path2D();\npath.moveTo(50, 50);\npath.quadraticCurveTo(100, 0, 150, 50);",
                                  "descricaoDoExemplo": "Cria um novo objeto Path2D, move o ponto inicial para as coordenadas (50, 50) e adiciona uma curva quadrática com controle nas coordenadas (100, 0) e ponto final nas coordenadas (150, 50) ao caminho."
                                  },
                                  {
                                  "objeto": 602,
                                  "função": "Path2D.rect()",
                                  "oQueFaz": "Adiciona um retângulo ao caminho atual",
                                  "exemplo": "const path = new Path2D();\npath.rect(50, 50, 100, 100);",
                                  "descricaoDoExemplo": "Cria um novo objeto Path2D e adiciona um retângulo com posição inicial nas coordenadas (50, 50) e dimensões de largura 100 e altura 100 ao caminho."
                                  },
                                  {
                                  "objeto": 603,
                                  "função": "Blob.size",
                                  "oQueFaz": "Retorna o tamanho do conteúdo do Blob em bytes",
                                  "exemplo": "const blob = new Blob(['Hello, world!']);\nconsole.log(blob.size); // retorna 13",
                                  "descricaoDoExemplo": "Cria um novo objeto Blob com o conteúdo 'Hello, world!' e retorna o tamanho do conteúdo em bytes, que é 13."
                                  },
                                  {
                                  "objeto": 604,
                                  "função": "Blob.slice()",
                                  "oQueFaz": "Cria uma nova Blob contendo uma porção do conteúdo do Blob original",
                                  "exemplo": "const blob = new Blob(['Hello, world!']);\nconst slicedBlob = blob.slice(0, 5);\nconsole.log(slicedBlob.size); // retorna 5",
                                  "descricaoDoExemplo": "Cria um novo objeto Blob com o conteúdo 'Hello, world!' e cria uma nova Blob contendo os primeiros 5 bytes do conteúdo original. Retorna o tamanho do novo Blob, que é 5."
                                  },
                                  {
                                  "objeto": 605,
                                  "função": "Blob.stream()",
                                  "oQueFaz": "Retorna um objeto ReadableStream para ler o conteúdo do Blob",
                                  "exemplo": "const blob = new Blob(['Hello, world!']);\nconst stream = blob.stream();",
                                  "descricaoDoExemplo": "Cria um novo objeto Blob com o conteúdo 'Hello, world!' e retorna um objeto ReadableStream que pode ser usado para ler o conteúdo do Blob."
                                  },
                                  {
                                    "objeto": 606,
                                    "função": "File.lastModified",
                                    "oQueFaz": "Retorna o carimbo de data/hora da última modificação do arquivo",
                                    "exemplo": "const file = new File(['Hello, world!'], 'example.txt');\nconsole.log(file.lastModified); // retorna o carimbo de data/hora da última modificação",
                                    "descricaoDoExemplo": "Cria um novo objeto File com o conteúdo 'Hello, world!' e nome 'example.txt'. Retorna o carimbo de data/hora."
                                  },
                                  {
                                    "objeto": 607,
                                    "função": "File.name",
                                    "oQueFaz": "Retorna o nome do arquivo",
                                    "exemplo": "const file = new File(['Hello, world!'], 'example.txt');\nconsole.log(file.name); // retorna 'example.txt'",
                                    "descricaoDoExemplo": "Cria um novo objeto File com o conteúdo 'Hello, world!' e nome 'example.txt'. Retorna o nome do arquivo, que é 'example.txt'."
                                    },
                                    {
                                    "objeto": 608,
                                    "função": "File.type",
                                    "oQueFaz": "Retorna o tipo MIME do arquivo",
                                    "exemplo": "const file = new File(['Hello, world!'], 'example.txt', { type: 'text/plain' });\nconsole.log(file.type); // retorna 'text/plain'",
                                    "descricaoDoExemplo": "Cria um novo objeto File com o conteúdo 'Hello, world!', nome 'example.txt' e tipo MIME 'text/plain'. Retorna o tipo MIME do arquivo, que é 'text/plain'."
                                    },
                                    {
                                    "objeto": 609,
                                    "função": "File.size",
                                    "oQueFaz": "Retorna o tamanho do arquivo em bytes",
                                    "exemplo": "const file = new File(['Hello, world!'], 'example.txt');\nconsole.log(file.size); // retorna 13",
                                    "descricaoDoExemplo": "Cria um novo objeto File com o conteúdo 'Hello, world!' e nome 'example.txt'. Retorna o tamanho do arquivo em bytes, que é 13."
                                    },
                                    {
                                    "objeto": 610,
                                    "função": "File.lastModified",
                                    "oQueFaz": "Retorna o carimbo de data/hora da última modificação do arquivo",
                                    "exemplo": "const file = new File(['Hello, world!'], 'example.txt');\nconsole.log(file.lastModified); // retorna o carimbo de data/hora da última modificação",
                                    "descricaoDoExemplo": "Cria um novo objeto File com o conteúdo 'Hello, world!' e nome 'example.txt'. Retorna o carimbo de data/hora da última modificação do arquivo."
                                    },
                                    {
                                    "objeto": 611,
                                    "função": "FileReader.readAsArrayBuffer()",
                                    "oQueFaz": "Lê o conteúdo do arquivo como um ArrayBuffer",
                                    "exemplo": "const file = document.getElementById('inputFile').files[0];\nconst reader = new FileReader();\nreader.onload = function(event) {\n const arrayBuffer = event.target.result;\n console.log(arrayBuffer);\n};\nreader.readAsArrayBuffer(file);",
                                    "descricaoDoExemplo": "Obtém o arquivo selecionado em um elemento de entrada de arquivo (input file), cria um novo objeto FileReader e lê o conteúdo do arquivo como um ArrayBuffer. Quando a leitura é concluída, a função de retorno de chamada é acionada e exibe o ArrayBuffer no console."
                                    },
                                    {
                                      "objeto": 612,
                                      "função": "FileReader.readAsText()",
                                      "oQueFaz": "Lê o conteúdo do arquivo como uma string de texto",
                                      "exemplo": "const file = document.getElementById('inputFile').files[0];\nconst reader = new FileReader();\nreader.onload = function(event) {\n const text = event.target.result;\n console.log(text);\n};\nreader.readAsText(file);",
                                      "descricaoDoExemplo": "Obtém o arquivo selecionado em um elemento de entrada de arquivo (input file), cria um novo objeto FileReader e lê o conteúdo do arquivo como uma string de texto. Quando a leitura é concluída, a função de retorno de chamada é acionada e exibe a string de texto no console."
                                      },
                                      {
                                      "objeto": 613,
                                      "função": "FileReader.readAsDataURL()",
                                      "oQueFaz": "Lê o conteúdo do arquivo como uma URL de dados",
                                      "exemplo": "const file = document.getElementById('inputFile').files[0];\nconst reader = new FileReader();\nreader.onload = function(event) {\n const dataURL = event.target.result;\n console.log(dataURL);\n};\nreader.readAsDataURL(file);",
                                      "descricaoDoExemplo": "Obtém o arquivo selecionado em um elemento de entrada de arquivo (input file), cria um novo objeto FileReader e lê o conteúdo do arquivo como uma URL de dados. Quando a leitura é concluída, a função de retorno de chamada é acionada e exibe a URL de dados no console."
                                      },
                                      {
                                      "objeto": 614,
                                      "função": "FileReader.onload",
                                      "oQueFaz": "Define uma função de retorno de chamada a ser executada quando a leitura é concluída",
                                      "exemplo": "const file = document.getElementById('inputFile').files[0];\nconst reader = new FileReader();\nreader.onload = function(event) {\n const text = event.target.result;\n console.log(text);\n};",
                                      "descricaoDoExemplo": "Obtém o arquivo selecionado em um elemento de entrada de arquivo (input file), cria um novo objeto FileReader e define uma função de retorno de chamada para ser executada quando a leitura é concluída. A função de retorno de chamada recebe o evento FileReader.onload como parâmetro e pode processar o resultado da leitura do arquivo."
                                      },
                                      {
                                      "objeto": 615,
                                      "função": "FileReader.onerror",
                                      "oQueFaz": "Define uma função de retorno de chamada a ser executada se ocorrer um erro durante a leitura",
                                      "exemplo": "const file = document.getElementById('inputFile').files[0];\nconst reader = new FileReader();\nreader.onerror = function(event) {\n console.error('Erro durante a leitura do arquivo');\n};",
                                      "descricaoDoExemplo": "Obtém o arquivo selecionado em um elemento de entrada de arquivo (input file), cria um novo objeto FileReader e define uma função de retorno de chamada para ser executada se ocorrer um erro durante a leitura do arquivo. A função de retorno de chamada pode lidar com o erro ou exibir uma mensagem de erro adequada."
                                      },
                                      {
                                      "objeto": 616,
                                      "função": "FormData.append()",
                                      "oQueFaz": "Anexa um novo valor a um objeto FormData",
                                      "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');",
                                      "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData."
                                      },
                                      {
                                        "objeto": 617,
                                        "função": "FormData.get()",
                                        "oQueFaz": "Retorna o primeiro valor associado a uma chave específica em um objeto FormData",
                                        "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');\nconsole.log(formData.get('username')); // retorna 'John'",
                                        "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData. Retorna o primeiro valor associado à chave 'username', que é 'John'."
                                        },
                                        {
                                        "objeto": 618,
                                        "função": "FormData.getAll()",
                                        "oQueFaz": "Retorna todos os valores associados a uma chave específica em um objeto FormData",
                                        "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('username', 'Doe');\nconsole.log(formData.getAll('username')); // retorna ['John', 'Doe']",
                                        "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'username'/'Doe' ao objeto FormData. Retorna todos os valores associados à chave 'username' como uma matriz, que é ['John', 'Doe']."
                                        },
                                        {
                                        "objeto": 619,
                                        "função": "FormData.has()",
                                        "oQueFaz": "Verifica se um objeto FormData contém uma determinada chave",
                                        "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nconsole.log(formData.has('username')); // retorna true\nconsole.log(formData.has('email')); // retorna false",
                                        "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' ao objeto FormData. Verifica se o objeto FormData contém a chave 'username' (retorna true) e a chave 'email' (retorna false)."
                                        },
                                        {
                                        "objeto": 620,
                                        "função": "FormData.delete()",
                                        "oQueFaz": "Remove um par chave/valor específico de um objeto FormData",
                                        "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nconsole.log(formData.get('username')); // retorna 'John'\nformData.delete('username');\nconsole.log(formData.get('username')); // retorna null",
                                        "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' ao objeto FormData. Obtém o valor associado à chave 'username' (retorna 'John') e, em seguida, remove o par chave/valor 'username'/'John' usando o método FormData.delete(). Após a remoção, tentar obter o valor associado à chave 'username' retorna null."
                                        },
                                        {
                                          "objeto": 621,
                                          "função": "FormData.entries()",
                                          "oQueFaz": "Retorna um iterador que permite percorrer todos os pares chave/valor em um objeto FormData",
                                          "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');\nfor (const pair of formData.entries()) {\n console.log(pair[0], pair[1]);\n}",
                                          "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData. Usa o método FormData.entries() para obter um iterador que permite percorrer todos os pares chave/valor do objeto FormData. O loop for...of itera sobre os pares e exibe a chave e o valor de cada par no console."
                                          },
                                          {
                                          "objeto": 622,
                                          "função": "FormData.keys()",
                                          "oQueFaz": "Retorna um iterador que permite percorrer todas as chaves em um objeto FormData",
                                          "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');\nfor (const key of formData.keys()) {\n console.log(key);\n}",
                                          "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData. Usa o método FormData.keys() para obter um iterador que permite percorrer todas as chaves do objeto FormData. O loop for...of itera sobre as chaves e exibe cada chave no console."
                                          },
                                          {
                                          "objeto": 623,
                                          "função": "FormData.values()",
                                          "oQueFaz": "Retorna um iterador que permite percorrer todos os valores em um objeto FormData",
                                          "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');\nfor (const value of formData.values()) {\n console.log(value);\n}",
                                          "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData. Usa o método FormData.values() para obter um iterador que permite percorrer todos os valores do objeto FormData. O loop for...of itera sobre os valores e exibe cada valor no console."
                                          },
                                          {
                                          "objeto": 624,
                                          "função": "FormData.forEach()",
                                          "oQueFaz": "Executa uma função de retorno de chamada para cada par chave/valor em um objeto FormData",
                                          "exemplo": "const formData = new FormData();\nformData.append('username', 'John');\nformData.append('email', 'john@example.com');\nformData.forEach(function(value, key) {\n console.log(key, value);\n});",
                                          "descricaoDoExemplo": "Cria um novo objeto FormData e anexa um par chave/valor 'username'/'John' e um par chave/valor 'email'/'john@example.com' ao objeto FormData. Usa o método FormData.forEach() para executar uma função de retorno de chamada para cada par chave/valor no objeto FormData. A função de retorno de chamada recebe o valor e a chave como parâmetros e os exibe no console."
                                          },{
                                            "objeto": 625,
                                            "função": "FileReaderSync.readAsText()",
                                            "oQueFaz": "Lê o conteúdo de um arquivo como texto.",
                                            "exemplo": "var reader = new FileReaderSync();\nvar file = new File(['Hello, World!'], 'example.txt');\nvar result = reader.readAsText(file);\nconsole.log(result); // 'Hello, World!'",
                                            "descricaoDoExemplo": "O exemplo mostra como usar FileReaderSync para ler o conteúdo de um arquivo e obter o texto resultante."
                                            },
                                            {
                                            "objeto": 626,
                                            "função": "FileReaderSync.result",
                                            "oQueFaz": "Retorna o resultado da leitura de um arquivo pelo FileReaderSync.",
                                            "exemplo": "var reader = new FileReaderSync();\nvar file = new File(['Hello, World!'], 'example.txt');\nvar result = reader.readAsText(file);\nconsole.log(reader.result); // 'Hello, World!'",
                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade result para acessar o resultado da leitura de um arquivo pelo FileReaderSync."
                                            },
                                            {
                                            "objeto": 627,
                                            "função": "ProgressEvent.lengthComputable",
                                            "oQueFaz": "Indica se o comprimento total do evento é computável.",
                                            "exemplo": "var xhr = new XMLHttpRequest();\nxhr.open('GET', 'example.txt', true);\nxhr.onprogress = function(event) {\n console.log(event.lengthComputable); // true\n};\nxhr.send();",
                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade lengthComputable para verificar se o comprimento total do evento é computável durante o progresso de uma solicitação XMLHttpRequest."
                                            },
                                            {
                                            "objeto": 628,
                                            "função": "ProgressEvent.loaded",
                                            "oQueFaz": "Retorna o número de bytes carregados até o momento.",
                                            "exemplo": "var xhr = new XMLHttpRequest();\nxhr.open('GET', 'example.txt', true);\nxhr.onprogress = function(event) {\n console.log(event.loaded); // exibe o número de bytes carregados\n};\nxhr.send();",
                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade loaded para obter o número de bytes carregados até o momento durante o progresso de uma solicitação XMLHttpRequest."
                                            },
                                            {
                                              "objeto": 630,
                                              "função": "FormData.append()",
                                              "oQueFaz": "Adiciona um novo par chave/valor a um objeto FormData.",
                                              "exemplo": "var formData = new FormData();\nformData.append('nome', 'João');",
                                              "descricaoDoExemplo": "O exemplo cria um objeto FormData vazio e adiciona um novo par chave/valor com a chave 'nome' e valor 'João' usando o método append()."
                                              },
                                            {
                                            "objeto": 629,
                                            "função": "ProgressEvent.total",
                                            "oQueFaz": "Retorna o tamanho total em bytes do conteúdo a ser carregado.",
                                            "exemplo": "var xhr = new XMLHttpRequest();\nxhr.open('GET', 'example.txt', true);\nxhr.onprogress = function(event) {\n console.log(event.total); // exibe o tamanho total do conteúdo em bytes\n};\nxhr.send();",
                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade total para obter o tamanho total em bytes do conteúdo a ser carregado durante o progresso de uma solicitação XMLHttpRequest."
                                            },
                                            {
                                              "objeto": 631,
                                              "função": "FormData.delete()",
                                              "oQueFaz": "Remove um par chave/valor específico de um objeto FormData.",
                                              "exemplo": "var formData = new FormData();\nformData.append('username', 'john');\nformData.append('password', '123456');\nformData.delete('password');\nconsole.log(formData.get('password')); // null",
                                              "descricaoDoExemplo": "O exemplo mostra como usar o método delete para remover um par chave/valor específico de um objeto FormData."
                                              },
                                              {
                                              "objeto": 632,
                                              "função": "FormData.get()",
                                              "oQueFaz": "Retorna o valor associado a uma determinada chave em um objeto FormData.",
                                              "exemplo": "var formData = new FormData();\nformData.append('username', 'john');\nconsole.log(formData.get('username')); // 'john'",
                                              "descricaoDoExemplo": "O exemplo mostra como usar o método get para obter o valor associado a uma determinada chave em um objeto FormData."
                                              },
                                              {
                                              "objeto": 633,
                                              "função": "FormData.getAll()",
                                              "oQueFaz": "Retorna um array de todos os valores associados a uma determinada chave em um objeto FormData.",
                                              "exemplo": "var formData = new FormData();\nformData.append('fruit', 'apple');\nformData.append('fruit', 'banana');\nconsole.log(formData.getAll('fruit')); // ['apple', 'banana']",
                                              "descricaoDoExemplo": "O exemplo mostra como usar o método getAll para obter um array de todos os valores associados a uma determinada chave em um objeto FormData."
                                              },
                                              {
                                              "objeto": 634,
                                              "função": "FormData.has()",
                                              "oQueFaz": "Verifica se uma determinada chave existe em um objeto FormData.",
                                              "exemplo": "var formData = new FormData();\nformData.append('username', 'john');\nconsole.log(formData.has('username')); // true\nconsole.log(formData.has('password')); // false",
                                              "descricaoDoExemplo": "O exemplo mostra como usar o método has para verificar se uma determinada chave existe em um objeto FormData."
                                              },
                                              {
                                              "objeto": 635,
                                              "função": "FormData.set()",
                                              "oQueFaz": "Define um novo valor para uma determinada chave em um objeto FormData, adicionando-a se não existir ou substituindo-a se já existir.",
                                              "exemplo": "var formData = new FormData();\nformData.set('username', 'john');\nconsole.log(formData.get('username')); // 'john'\nformData.set('username', 'mary');\nconsole.log(formData.get('username')); // 'mary'",
                                              "descricaoDoExemplo": "O exemplo mostra como usar o método set para definir um novo valor para uma determinada chave em um objeto FormData."
                                              },
                                              {
                                              "objeto": 636,
                                              "função": "Gamepad.buttons",
                                              "oQueFaz": "Uma lista de objetos GamepadButton representando os botões do gamepad.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.buttons[0].pressed); // verifica se o primeiro botão está pressionado\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como acessar os objetos GamepadButton representando os botões de um gamepad conectado."
                                              },
                                              {
                                              "objeto": 637,
                                              "função": "Gamepad.axes",
                                              "oQueFaz": "Uma lista de valores numéricos que representam o estado dos eixos analógicos do gamepad.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.axes[0]); // valor do primeiro eixo analógico\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como acessar os valores dos eixos analógicos de um gamepad conectado."
                                              },
                                              {
                                              "objeto": 638,
                                              "função": "Gamepad.id",
                                              "oQueFaz": "Uma string que identifica exclusivamente o gamepad.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.id); // identificador do gamepad\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como obter o identificador exclusivo de um gamepad conectado."
                                              },
                                              {
                                              "objeto": 639,
                                              "função": "Gamepad.mapping",
                                              "oQueFaz": "Uma string que representa o tipo de mapeamento usado pelo gamepad.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.mapping); // tipo de mapeamento do gamepad\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como obter o tipo de mapeamento usado por um gamepad conectado."
                                              },
                                              {
                                              "objeto": 640,
                                              "função": "Gamepad.connected",
                                              "oQueFaz": "Um valor booleano indicando se o gamepad está atualmente conectado ou não.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.connected); // true\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como verificar se um gamepad está atualmente conectado."
                                              },
                                              {
                                              "objeto": 641,
                                              "função": "Gamepad.timestamp",
                                              "oQueFaz": "O valor do tempo em milissegundos em que as informações do gamepad foram atualizadas pela última vez.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad.timestamp); // tempo da última atualização\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como obter o tempo em que as informações do gamepad foram atualizadas pela última vez."
                                              },
                                              {
                                              "objeto": 642,
                                              "função": "GamepadEvent.gamepad",
                                              "oQueFaz": "O objeto gamepad associado ao evento.",
                                              "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var gamepad = event.gamepad;\n console.log(gamepad); // objeto gamepad\n});",
                                              "descricaoDoExemplo": "O exemplo mostra como obter o objeto gamepad associado a um evento gamepadconnected."
                                              },
                                              {
                                                "objeto": 643,
                                                "função": "GamepadEvent.type",
                                                "oQueFaz": "O tipo de evento gamepad (gamepadconnected, gamepaddisconnected).",
                                                "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var type = event.type;\n console.log(type); // 'gamepadconnected'\n});",
                                                "descricaoDoExemplo": "O exemplo mostra como obter o tipo de evento gamepad associado a um evento gamepadconnected."
                                                },
                                                {
                                                "objeto": 644,
                                                "função": "GamepadEvent.connected",
                                                "oQueFaz": "Um valor booleano indicando se o gamepad está atualmente conectado ou não.",
                                                "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var connected = event.connected;\n console.log(connected); // true\n});",
                                                "descricaoDoExemplo": "O exemplo mostra como verificar se um gamepad está atualmente conectado usando a propriedade connected de um evento gamepadconnected."
                                                },
                                                {
                                                "objeto": 645,
                                                "função": "GamepadEvent.timestamp",
                                                "oQueFaz": "O valor do tempo em milissegundos em que o evento gamepad foi gerado.",
                                                "exemplo": "window.addEventListener('gamepadconnected', function(event) {\n var timestamp = event.timestamp;\n console.log(timestamp); // tempo do evento\n});",
                                                "descricaoDoExemplo": "O exemplo mostra como obter o tempo em que o evento gamepad foi gerado usando a propriedade timestamp de um evento gamepadconnected."
                                                },
                                                {
                                                "objeto": 646,
                                                "função": "GeoLocation.getCurrentPosition()",
                                                "oQueFaz": "Solicita a localização atual do dispositivo ao usuário.",
                                                "exemplo": "navigator.geolocation.getCurrentPosition(successCallback, errorCallback);\n\nfunction successCallback(position) {\n var latitude = position.coords.latitude;\n var longitude = position.coords.longitude;\n console.log(latitude, longitude);\n}\n\nfunction errorCallback(error) {\n console.log(error.message);\n}",
                                                "descricaoDoExemplo": "O exemplo mostra como usar a função getCurrentPosition para obter a localização atual do dispositivo. A função successCallback é chamada quando a localização é obtida com sucesso, fornecendo os valores de latitude e longitude. A função errorCallback é chamada em caso de erro."
                                                },
                                                {
                                                "objeto": 647,
                                                "função": "GeoLocation.watchPosition()",
                                                "oQueFaz": "Monitora continuamente a localização atual do dispositivo.",
                                                "exemplo": "var watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);\n\nfunction successCallback(position) {\n var latitude = position.coords.latitude;\n var longitude = position.coords.longitude;\n console.log(latitude, longitude);\n}\n\nfunction errorCallback(error) {\n console.log(error.message);\n}\n\n// Para parar o monitoramento, chame navigator.geolocation.clearWatch(watchId);",
                                                "descricaoDoExemplo": "O exemplo mostra como usar a função watchPosition para monitorar continuamente a localização atual do dispositivo. A função successCallback é chamada sempre que a localização é atualizada, fornecendo os valores de latitude e longitude atualizados. A função errorCallback é chamada em caso de erro. Para parar o monitoramento, a função navigator.geolocation.clearWatch deve ser chamada, passando o ID retornado por watchPosition."
                                                },
                                                {
                                                  "objeto": 648,
                                                  "função": "GeolocationPosition.coords",
                                                  "oQueFaz": "Um objeto que contém as coordenadas geográficas da localização.",
                                                  "exemplo": "function successCallback(position) {\n var coords = position.coords;\n console.log(coords.latitude, coords.longitude);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar as coordenadas geográficas da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 649,
                                                  "função": "GeolocationCoordinates.latitude",
                                                  "oQueFaz": "A latitude da localização em graus decimais.",
                                                  "exemplo": "function successCallback(position) {\n var latitude = position.coords.latitude;\n console.log(latitude);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a latitude da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 650,
                                                  "função": "GeolocationCoordinates.longitude",
                                                  "oQueFaz": "A longitude da localização em graus decimais.",
                                                  "exemplo": "function successCallback(position) {\n var longitude = position.coords.longitude;\n console.log(longitude);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a longitude da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 651,
                                                  "função": "GeolocationCoordinates.altitude",
                                                  "oQueFaz": "A altitude da localização em metros, acima do nível médio do mar.",
                                                  "exemplo": "function successCallback(position) {\n var altitude = position.coords.altitude;\n console.log(altitude);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a altitude da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 652,
                                                  "função": "GeolocationCoordinates.accuracy",
                                                  "oQueFaz": "A precisão da localização em metros.",
                                                  "exemplo": "function successCallback(position) {\n var accuracy = position.coords.accuracy;\n console.log(accuracy);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a precisão da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 653,
                                                  "função": "GeolocationCoordinates.altitudeAccuracy",
                                                  "oQueFaz": "A precisão da altitude da localização em metros.",
                                                  "exemplo": "function successCallback(position) {\n var altitudeAccuracy = position.coords.altitudeAccuracy;\n console.log(altitudeAccuracy);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a precisão da altitude da localização retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                  "objeto": 654,
                                                  "função": "GeolocationCoordinates.heading",
                                                  "oQueFaz": "A direção do dispositivo em relação ao norte verdadeiro em graus.",
                                                  "exemplo": "function successCallback(position) {\n var heading = position.coords.heading;\n console.log(heading);\n}",
                                                  "descricaoDoExemplo": "O exemplo mostra como acessar a direção do dispositivo em relação ao norte verdadeiro retornada pela função getCurrentPosition ou watchPosition."
                                                  },
                                                  {
                                                    "objeto": 655,
                                                    "função": "GeolocationCoordinates.speed",
                                                    "oQueFaz": "A velocidade do dispositivo em metros por segundo.",
                                                    "exemplo": "function successCallback(position) {\n var speed = position.coords.speed;\n console.log(speed);\n}",
                                                    "descricaoDoExemplo": "O exemplo mostra como acessar a velocidade do dispositivo retornada pela função getCurrentPosition ou watchPosition."
                                                    },
                                                    {
                                                    "objeto": 656,
                                                    "função": "GeolocationCoordinates.timestamp",
                                                    "oQueFaz": "O valor do tempo em milissegundos em que as informações de localização foram obtidas.",
                                                    "exemplo": "function successCallback(position) {\n var timestamp = position.coords.timestamp;\n console.log(timestamp);\n}",
                                                    "descricaoDoExemplo": "O exemplo mostra como acessar o tempo em que as informações de localização foram obtidas, retornado pela função getCurrentPosition ou watchPosition."
                                                    },
                                                    {
                                                    "objeto": 657,
                                                    "função": "GeolocationPositionError.code",
                                                    "oQueFaz": "Um código numérico que representa o tipo de erro ocorrido ao obter a localização.",
                                                    "exemplo": "function errorCallback(error) {\n var code = error.code;\n console.log(code);\n}",
                                                    "descricaoDoExemplo": "O exemplo mostra como acessar o código numérico que representa o tipo de erro ocorrido ao obter a localização. O código pode ter os seguintes valores: 1 (PERMISSION_DENIED), 2 (POSITION_UNAVAILABLE), 3 (TIMEOUT)."
                                                    },
                                                    {
                                                    "objeto": 658,
                                                    "função": "GeolocationPositionError.message",
                                                    "oQueFaz": "Uma string que descreve o tipo de erro ocorrido ao obter a localização.",
                                                    "exemplo": "function errorCallback(error) {\n var message = error.message;\n console.log(message);\n}",
                                                    "descricaoDoExemplo": "O exemplo mostra como acessar a mensagem que descreve o tipo de erro ocorrido ao obter a localização. A mensagem pode ser 'Permission denied', 'Position unavailable' ou 'Timeout'."
                                                    },
                                                    {
                                                    "objeto": 659,
                                                    "função": "Headers.append()",
                                                    "oQueFaz": "Adiciona um novo valor para um determinado nome de cabeçalho em um objeto Headers.",
                                                    "exemplo": "var headers = new Headers();\nheaders.append('Content-Type', 'application/json');",
                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método append para adicionar um novo valor para um determinado nome de cabeçalho em um objeto Headers."
                                                    },
                                                    {
                                                    "objeto": 660,
                                                    "função": "Headers.delete()",
                                                    "oQueFaz": "Remove um nome de cabeçalho e seus valores associados de um objeto Headers.",
                                                    "exemplo": "var headers = new Headers();\nheaders.append('Content-Type', 'application/json');\nheaders.delete('Content-Type');",
                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método delete para remover um nome de cabeçalho e seus valores associados de um objeto Headers."
                                                    },
                                                    {
                                                    "objeto": 661,
                                                    "função": "Headers.get()",
                                                    "oQueFaz": "Retorna o valor de um determinado nome de cabeçalho em um objeto Headers.",
                                                    "exemplo": "var headers = new Headers();\nheaders.append('Content-Type', 'application/json');\nconsole.log(headers.get('Content-Type')); // 'application/json'",
                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método get para obter o valor de um determinado nome de cabeçalho em um objeto Headers."
                                                    },
                                                    {
                                                      "objeto": 662,
                                                      "função": "Headers.has()",
                                                      "oQueFaz": "Verifica se um determinado nome de cabeçalho existe em um objeto Headers.",
                                                      "exemplo": "var headers = new Headers();\nheaders.append('Content-Type', 'application/json');\nconsole.log(headers.has('Content-Type')); // true",
                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método has para verificar se um determinado nome de cabeçalho existe em um objeto Headers."
                                                      },
                                                      {
                                                      "objeto": 663,
                                                      "função": "Headers.set()",
                                                      "oQueFaz": "Define um novo valor para um determinado nome de cabeçalho em um objeto Headers, substituindo qualquer valor existente.",
                                                      "exemplo": "var headers = new Headers();\nheaders.set('Content-Type', 'application/json');",
                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método set para definir um novo valor para um determinado nome de cabeçalho em um objeto Headers, substituindo qualquer valor existente."
                                                      },
                                                      {
                                                      "objeto": 664,
                                                      "função": "IDBCursor.advance()",
                                                      "oQueFaz": "Avança o cursor para a próxima posição no objeto de armazenamento.",
                                                      "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n cursor.advance(2); // avança 2 posições\n cursor.continue();\n }\n};",
                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método advance para avançar o cursor para a próxima posição no objeto de armazenamento."
                                                      },
                                                      {
                                                      "objeto": 665,
                                                      "função": "IDBCursor.continue()",
                                                      "oQueFaz": "Avança o cursor para a próxima posição no objeto de armazenamento e continua a execução do código do evento.",
                                                      "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n cursor.continue();\n }\n};",
                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método continue para avançar o cursor para a próxima posição no objeto de armazenamento e continuar a execução do código do evento."
                                                      },
                                                      {
                                                      "objeto": 666,
                                                      "função": "IDBCursor.delete()",
                                                      "oQueFaz": "Remove o registro atual apontado pelo cursor do objeto de armazenamento.",
                                                      "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n cursor.delete(); // remove o registro\n cursor.continue();\n }\n};",
                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método delete para remover o registro atual apontado pelo cursor do objeto de armazenamento."
                                                      },
                                                      {
                                                        "objeto": 667,
                                                        "função": "IDBCursor.update()",
                                                        "oQueFaz": "Atualiza o registro atual apontado pelo cursor no objeto de armazenamento.",
                                                        "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n var updatedData = { name: 'New Name', age: 30 };\n cursor.update(updatedData); // atualiza o registro\n cursor.continue();\n }\n};",
                                                        "descricaoDoExemplo": "O exemplo mostra como usar o método update para atualizar o registro atual apontado pelo cursor no objeto de armazenamento."
                                                        },
                                                        {
                                                        "objeto": 668,
                                                        "função": "IDBCursor.value",
                                                        "oQueFaz": "O valor do registro atual apontado pelo cursor.",
                                                        "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n var value = cursor.value; // valor do registro\n console.log(value);\n cursor.continue();\n }\n};",
                                                        "descricaoDoExemplo": "O exemplo mostra como acessar o valor do registro atual apontado pelo cursor usando a propriedade value."
                                                        },
                                                        {
                                                        "objeto": 669,
                                                        "função": "IDBCursor.key",
                                                        "oQueFaz": "A chave do registro atual apontado pelo cursor.",
                                                        "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n var key = cursor.key; // chave do registro\n console.log(key);\n cursor.continue();\n }\n};",
                                                        "descricaoDoExemplo": "O exemplo mostra como acessar a chave do registro atual apontado pelo cursor usando a propriedade key."
                                                        },
                                                        {
                                                        "objeto": 670,
                                                        "função": "IDBCursor.primaryKey",
                                                        "oQueFaz": "A chave primária do registro atual apontado pelo cursor.",
                                                        "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n var primaryKey = cursor.primaryKey; // chave primária do registro\n console.log(primaryKey);\n cursor.continue();\n }\n};",
                                                        "descricaoDoExemplo": "O exemplo mostra como acessar a chave primária do registro atual apontado pelo cursor usando a propriedade primaryKey."
                                                        },
                                                        {
                                                        "objeto": 671,
                                                        "função": "IDBCursor.direction",
                                                        "oQueFaz": "A direção do cursor.",
                                                        "exemplo": "var request = objectStore.openCursor();\nrequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n var direction = cursor.direction; // direção do cursor\n console.log(direction);\n cursor.continue();\n }\n};",
                                                        "descricaoDoExemplo": "O exemplo mostra como acessar a direção do cursor usando a propriedade direction. A direção pode ser 'next' (próximo) ou 'prev' (anterior)."
                                                        },
                                                        {
                                                          "objeto": 672,
                                                          "função": "IDBDatabase.createObjectStore()",
                                                          "oQueFaz": "Cria um novo objeto de armazenamento no banco de dados.",
                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onupgradeneeded = function(event) {\n var db = event.target.result;\n var objectStore = db.createObjectStore('store', { keyPath: 'id' });\n};",
                                                          "descricaoDoExemplo": "O exemplo mostra como usar o método createObjectStore para criar um novo objeto de armazenamento no banco de dados. O método recebe o nome do objeto de armazenamento e um objeto de configuração opcional."
                                                          },
                                                          {
                                                          "objeto": 673,
                                                          "função": "IDBDatabase.deleteObjectStore()",
                                                          "oQueFaz": "Remove um objeto de armazenamento do banco de dados.",
                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onupgradeneeded = function(event) {\n var db = event.target.result;\n db.deleteObjectStore('store');\n};",
                                                          "descricaoDoExemplo": "O exemplo mostra como usar o método deleteObjectStore para remover um objeto de armazenamento do banco de dados. O método recebe o nome do objeto de armazenamento a ser removido."
                                                          },
                                                          {
                                                          "objeto": 674,
                                                          "função": "IDBDatabase.transaction()",
                                                          "oQueFaz": "Inicia uma nova transação no banco de dados.",
                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n};",
                                                          "descricaoDoExemplo": "O exemplo mostra como usar o método transaction para iniciar uma nova transação no banco de dados. O método recebe o nome do objeto de armazenamento ou uma lista de nomes de objetos de armazenamento e o modo de acesso ('readonly', 'readwrite' ou 'versionchange')."
                                                          },
                                                          {
                                                          "objeto": 675,
                                                          "função": "IDBTransaction.objectStore()",
                                                          "oQueFaz": "Obtém um objeto de armazenamento dentro de uma transação.",
                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n var objectStore = transaction.objectStore('store');\n};",
                                                          "descricaoDoExemplo": "O exemplo mostra como usar o método objectStore para obter um objeto de armazenamento dentro de uma transação. O método recebe o nome do objeto de armazenamento a ser obtido."
                                                          },
                                                          {
                                                          "objeto": 676,
                                                          "função": "IDBTransaction.abort()",
                                                          "oQueFaz": "Cancela a transação e reverte todas as alterações pendentes.",
                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n transaction.abort();\n};",
                                                          "descricaoDoExemplo": "O exemplo mostra como usar o método abort para cancelar uma transação e reverter todas as alterações pendentes."
                                                          },
                                                          {
                                                            "objeto": 677,
                                                            "função": "IDBTransaction.complete",
                                                            "oQueFaz": "Um evento que é acionado quando a transação é concluída com sucesso.",
                                                            "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n\n transaction.oncomplete = function(event) {\n console.log('Transação concluída');\n };\n};",
                                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade oncomplete para definir um evento que é acionado quando a transação é concluída com sucesso."
                                                            },
                                                            {
                                                            "objeto": 678,
                                                            "função": "IDBTransaction.error",
                                                            "oQueFaz": "Um evento que é acionado quando ocorre um erro durante a transação.",
                                                            "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n\n transaction.onerror = function(event) {\n console.log('Erro na transação');\n };\n};",
                                                            "descricaoDoExemplo": "O exemplo mostra como usar a propriedade onerror para definir um evento que é acionado quando ocorre um erro durante a transação."
                                                            },
                                                            {
                                                            "objeto": 679,
                                                            "função": "IDBTransaction.objectStoreNames",
                                                            "oQueFaz": "Uma lista de nomes de objetos de armazenamento associados à transação.",
                                                            "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction(['store1', 'store2'], 'readwrite');\n\n var objectStoreNames = transaction.objectStoreNames;\n console.log(objectStoreNames); // ['store1', 'store2']\n};",
                                                            "descricaoDoExemplo": "O exemplo mostra como acessar a lista de nomes de objetos de armazenamento associados à transação usando a propriedade objectStoreNames."
                                                            },
                                                            {
                                                            "objeto": 680,
                                                            "função": "IDBObjectStore.add()",
                                                            "oQueFaz": "Adiciona um novo objeto ao objeto de armazenamento.",
                                                            "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n var objectStore = transaction.objectStore('store');\n\n var data = { id: 1, name: 'John' };\n var addRequest = objectStore.add(data);\n\n addRequest.onsuccess = function(event) {\n console.log('Objeto adicionado com sucesso');\n };\n};",
                                                            "descricaoDoExemplo": "O exemplo mostra como usar o método add para adicionar um novo objeto ao objeto de armazenamento. O método recebe o objeto a ser adicionado."
                                                            },
                                                            {
                                                              "objeto": 681,
                                                              "função": "IDBObjectStore.put()",
                                                              "oQueFaz": "Adiciona ou atualiza um objeto no objeto de armazenamento.",
                                                              "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n var objectStore = transaction.objectStore('store');\n\n var data = { id: 1, name: 'John' };\n var putRequest = objectStore.put(data);\n\n putRequest.onsuccess = function(event) {\n console.log('Objeto adicionado/atualizado com sucesso');\n };\n};",
                                                              "descricaoDoExemplo": "O exemplo mostra como usar o método put para adicionar ou atualizar um objeto no objeto de armazenamento. O método recebe o objeto a ser adicionado ou atualizado."
                                                              },
                                                              {
                                                              "objeto": 682,
                                                              "função": "IDBObjectStore.get()",
                                                              "oQueFaz": "Recupera o objeto com a chave correspondente do objeto de armazenamento.",
                                                              "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n\n var getRequest = objectStore.get(1);\n\n getRequest.onsuccess = function(event) {\n var data = event.target.result;\n console.log(data); // objeto recuperado\n };\n};",
                                                              "descricaoDoExemplo": "O exemplo mostra como usar o método get para recuperar o objeto com a chave correspondente do objeto de armazenamento. O método recebe a chave do objeto a ser recuperado."
                                                              },
                                                              {
                                                              "objeto": 683,
                                                              "função": "IDBObjectStore.delete()",
                                                              "oQueFaz": "Remove o objeto com a chave correspondente do objeto de armazenamento.",
                                                              "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n var objectStore = transaction.objectStore('store');\n\n var deleteRequest = objectStore.delete(1);\n\n deleteRequest.onsuccess = function(event) {\n console.log('Objeto removido com sucesso');\n };\n};",
                                                              "descricaoDoExemplo": "O exemplo mostra como usar o método delete para remover o objeto com a chave correspondente do objeto de armazenamento. O método recebe a chave do objeto a ser removido."
                                                              },
                                                              {
                                                              "objeto": 684,
                                                              "função": "IDBObjectStore.clear()",
                                                              "oQueFaz": "Remove todos os objetos do objeto de armazenamento.",
                                                              "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n var objectStore = transaction.objectStore('store');\n\n var clearRequest = objectStore.clear();\n\n clearRequest.onsuccess = function(event) {\n console.log('Objetos removidos com sucesso');\n };\n};",
                                                              "descricaoDoExemplo": "O exemplo mostra como usar o método clear para remover todos os objetos do objeto de armazenamento."
                                                              },
                                                              {
                                                                "objeto": 685,
                                                                "função": "IDBObjectStore.count()",
                                                                "oQueFaz": "Retorna o número de objetos no objeto de armazenamento.",
                                                                "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n\n var countRequest = objectStore.count();\n\n countRequest.onsuccess = function(event) {\n var count = event.target.result;\n console.log(count); // número de objetos\n };\n};",
                                                                "descricaoDoExemplo": "O exemplo mostra como usar o método count para retornar o número de objetos no objeto de armazenamento."
                                                                },
                                                                {
                                                                "objeto": 686,
                                                                "função": "IDBObjectStore.openCursor()",
                                                                "oQueFaz": "Abre um cursor para percorrer os objetos no objeto de armazenamento.",
                                                                "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n\n var cursorRequest = objectStore.openCursor();\n\n cursorRequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n console.log(cursor.value); // objeto atual\n cursor.continue(); // mover para o próximo objeto\n }\n };\n};",
                                                                "descricaoDoExemplo": "O exemplo mostra como usar o método openCursor para abrir um cursor e percorrer os objetos no objeto de armazenamento. O cursor permite acessar e manipular os objetos individualmente."
                                                                },
                                                                {
                                                                "objeto": 687,
                                                                "função": "IDBObjectStore.index()",
                                                                "oQueFaz": "Obtém um índice associado ao objeto de armazenamento.",
                                                                "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n\n var index = objectStore.index('indexName');\n};",
                                                                "descricaoDoExemplo": "O exemplo mostra como usar o método index para obter um índice associado ao objeto de armazenamento. O método recebe o nome do índice a ser obtido."
                                                                },
                                                                {
                                                                "objeto": 688,
                                                                "função": "IDBIndex.get()",
                                                                "oQueFaz": "Recupera os objetos com a chave ou faixa de chaves correspondente do índice.",
                                                                "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var getRequest = index.get('key');\n\n getRequest.onsuccess = function(event) {\n var data = event.target.result;\n console.log(data); // objetos recuperados\n };\n};",
                                                                "descricaoDoExemplo": "O exemplo mostra como usar o método get para recuperar os objetos com a chave ou faixa de chaves correspondente do índice. O método recebe a chave ou faixa de chaves a serem recuperadas."
                                                                },
                                                                {
                                                                  "objeto": 689,
                                                                  "função": "IDBIndex.getKey()",
                                                                  "oQueFaz": "Recupera as chaves ou faixa de chaves correspondente dos objetos do índice.",
                                                                  "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var getKeyRequest = index.getKey('key');\n\n getKeyRequest.onsuccess = function(event) {\n var key = event.target.result;\n console.log(key); // chaves recuperadas\n };\n};",
                                                                  "descricaoDoExemplo": "O exemplo mostra como usar o método getKey para recuperar as chaves ou faixa de chaves correspondente dos objetos do índice. O método recebe a chave ou faixa de chaves a serem recuperadas."
                                                                  },
                                                                  {
                                                                  "objeto": 690,
                                                                  "função": "IDBIndex.getAll()",
                                                                  "oQueFaz": "Recupera todos os objetos do índice.",
                                                                  "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var getAllRequest = index.getAll();\n\n getAllRequest.onsuccess = function(event) {\n var data = event.target.result;\n console.log(data); // objetos recuperados\n };\n};",
                                                                  "descricaoDoExemplo": "O exemplo mostra como usar o método getAll para recuperar todos os objetos do índice."
                                                                  },
                                                                  {
                                                                  "objeto": 691,
                                                                  "função": "IDBIndex.getAllKeys()",
                                                                  "oQueFaz": "Recupera todas as chaves dos objetos do índice.",
                                                                  "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var getAllKeysRequest = index.getAllKeys();\n\n getAllKeysRequest.onsuccess = function(event) {\n var keys = event.target.result;\n console.log(keys); // chaves recuperadas\n };\n};",
                                                                  "descricaoDoExemplo": "O exemplo mostra como usar o método getAllKeys para recuperar todas as chaves dos objetos do índice."
                                                                  },
                                                                  {
                                                                    "objeto": 692,
                                                                    "função": "IDBIndex.count()",
                                                                    "oQueFaz": "Retorna o número de objetos no índice.",
                                                                    "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var countRequest = index.count();\n\n countRequest.onsuccess = function(event) {\n var count = event.target.result;\n console.log(count); // número de objetos\n };\n};",
                                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método count para retornar o número de objetos no índice."
                                                                    },
                                                                    {
                                                                    "objeto": 693,
                                                                    "função": "IDBIndex.openCursor()",
                                                                    "oQueFaz": "Abre um cursor para percorrer os objetos do índice.",
                                                                    "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var cursorRequest = index.openCursor();\n\n cursorRequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n console.log(cursor.value); // objeto atual\n cursor.continue(); // mover para o próximo objeto\n }\n };\n};",
                                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método openCursor para abrir um cursor e percorrer os objetos do índice. O cursor permite acessar e manipular os objetos individualmente."
                                                                    },
                                                                    {
                                                                    "objeto": 694,
                                                                    "função": "IDBIndex.getKeyCursor()",
                                                                    "oQueFaz": "Abre um cursor para percorrer as chaves dos objetos do índice.",
                                                                    "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readonly');\n var objectStore = transaction.objectStore('store');\n var index = objectStore.index('indexName');\n\n var cursorRequest = index.getKeyCursor();\n\n cursorRequest.onsuccess = function(event) {\n var cursor = event.target.result;\n if (cursor) {\n console.log(cursor.key); // chave atual\n cursor.continue(); // mover para a próxima chave\n }\n };\n};",
                                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método getKeyCursor para abrir um cursor e percorrer as chaves dos objetos do índice. O cursor permite acessar e manipular as chaves individualmente."
                                                                    },
                                                                    {
                                                                    "objeto": 695,
                                                                    "função": "IDBIndex.createIndex()",
                                                                    "oQueFaz": "Cria um novo índice no objeto de armazenamento.",
                                                                    "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onupgradeneeded = function(event) {\n var db = event.target.result;\n var objectStore = db.createObjectStore('store');\n\n var index = objectStore.createIndex('indexName', 'property');\n};",
                                                                    "descricaoDoExemplo": "O exemplo mostra como usar o método createIndex para criar um novo índice no objeto de armazenamento. O método recebe o nome do índice e a propriedade do objeto usada como chave do índice."
                                                                    },
                                                                    {
                                                                      "objeto": 696,
                                                                      "função": "IDBIndex.deleteIndex()",
                                                                      "oQueFaz": "Remove um índice do objeto de armazenamento.",
                                                                      "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onupgradeneeded = function(event) {\n var db = event.target.result;\n var objectStore = db.createObjectStore('store');\n\n objectStore.deleteIndex('indexName');\n};",
                                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método deleteIndex para remover um índice do objeto de armazenamento. O método recebe o nome do índice a ser removido."
                                                                      },
                                                                      {
                                                                      "objeto": 697,
                                                                      "função": "IDBTransaction.objectStore()",
                                                                      "oQueFaz": "Obtém um objeto de armazenamento associado à transação.",
                                                                      "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction('store', 'readwrite');\n\n var objectStore = transaction.objectStore('store');\n};",
                                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método objectStore para obter um objeto de armazenamento associado à transação. O método recebe o nome do objeto de armazenamento a ser obtido."
                                                                      },
                                                                      {
                                                                      "objeto": 698,
                                                                      "função": "IDBTransaction.objectStoreNames()",
                                                                      "oQueFaz": "Retorna uma lista de nomes de objetos de armazenamento associados à transação.",
                                                                      "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n var transaction = db.transaction(['store1', 'store2'], 'readonly');\n\n var objectStoreNames = transaction.objectStoreNames;\n console.log(objectStoreNames); // ['store1', 'store2']\n};",
                                                                      "descricaoDoExemplo": "O exemplo mostra como usar a propriedade objectStoreNames para retornar uma lista de nomes de objetos de armazenamento associados à transação."
                                                                      },
                                                                      {
                                                                      "objeto": 699,
                                                                      "função": "IDBTransaction.abort()",
                                                                      "oQueFaz": "Aborta a transação, revertendo todas as alterações feitas.",
                                                                      "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n // Realiza operações na transação\n\n transaction.abort(); // Aborta a transação\n};",
                                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método abort para abortar a transação, revertendo todas as alterações feitas."
                                                                      },
                                                                      {
                                                                      "objeto": 700,
                                                                      "função": "IDBTransaction.objectStore()",
                                                                      "oQueFaz": "Obtém um objeto de armazenamento associado à transação.",
                                                                      "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n var objectStore = transaction.objectStore('store');\n};",
                                                                      "descricaoDoExemplo": "O exemplo mostra como usar o método objectStore para obter um objeto de armazenamento associado à transação. O método recebe o nome do objeto de armazenamento a ser obtido."
                                                                      },
                                                                      {
                                                                        "objeto": 701,
                                                                        "função": "IDBTransaction.objectStoreNames()",
                                                                        "oQueFaz": "Retorna uma lista de nomes de objetos de armazenamento associados à transação.",
                                                                        "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction(['store1', 'store2'], 'readonly');\n\n var objectStoreNames = transaction.objectStoreNames;\n console.log(objectStoreNames); // ['store1', 'store2']\n};",
                                                                        "descricaoDoExemplo": "O exemplo mostra como usar a propriedade objectStoreNames para retornar uma lista de nomes de objetos de armazenamento associados à transação."
                                                                        },
                                                                        {
                                                                        "objeto": 702,
                                                                        "função": "IDBTransaction.abort()",
                                                                        "oQueFaz": "Aborta a transação, revertendo todas as alterações feitas.",
                                                                        "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n // Realiza operações na transação\n\n transaction.abort(); // Aborta a transação\n};",
                                                                        "descricaoDoExemplo": "O exemplo mostra como usar o método abort para abortar a transação, revertendo todas as alterações feitas."
                                                                        },
                                                                        {
                                                                        "objeto": 703,
                                                                        "função": "IDBTransaction.commit()",
                                                                        "oQueFaz": "Confirma a transação, efetivando todas as alterações feitas.",
                                                                        "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n // Realiza operações na transação\n\n transaction.commit(); // Confirma a transação\n};",
                                                                        "descricaoDoExemplo": "O exemplo mostra como usar o método commit para confirmar a transação, efetivando todas as alterações feitas."
                                                                        },
                                                                        {
                                                                        "objeto": 704,
                                                                        "função": "IDBTransaction.onerror",
                                                                        "oQueFaz": "Evento acionado quando ocorre um erro na transação.",
                                                                        "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n transaction.onerror = function(event) {\n console.log('Erro na transação');\n };\n};",
                                                                        "descricaoDoExemplo": "O exemplo mostra como definir um manipulador de evento para a propriedade onerror de uma transação. O manipulador é acionado quando ocorre um erro na transação."
                                                                        },
                                                                        {
                                                                          "objeto": 705,
                                                                          "função": "IDBTransaction.oncomplete",
                                                                          "oQueFaz": "Evento acionado quando a transação é concluída com sucesso.",
                                                                          "exemplo": "var request = indexedDB.open('database', 1);\n\nrequest.onsuccess = function(event) {\n var db = event.target.result;\n\n var transaction = db.transaction('store', 'readwrite');\n\n transaction.oncomplete = function(event) {\n console.log('Transação concluída');\n };\n};",
                                                                          "descricaoDoExemplo": "O exemplo mostra como definir um manipulador de evento para a propriedade oncomplete de uma transação. O manipulador é acionado quando a transação é concluída com sucesso."
                                                                          }]
  
const listaNODE=[{
  "objeto": 0,
  "função": "cluster.fork()",
  "oQueFaz": "Cria um novo processo filho para o cluster.",
  "exemplo": "const worker = cluster.fork();",
  "descricaoDoExemplo": "Cria um novo processo filho no cluster."
},
{
  "objeto": 1,
  "função": "cluster.isMaster",
  "oQueFaz": "Verifica se o processo atual é o processo mestre do cluster.",
  "exemplo": "if (cluster.isMaster) { ... }",
  "descricaoDoExemplo": "Verifica se o processo atual é o processo mestre do cluster e executa o código dentro do bloco if apenas no processo mestre."
},
{
  "objeto": 2,
  "função": "cluster.isWorker",
  "oQueFaz": "Verifica se o processo atual é um processo filho do cluster.",
  "exemplo": "if (cluster.isWorker) { ... }",
  "descricaoDoExemplo": "Verifica se o processo atual é um processo filho do cluster e executa o código dentro do bloco if apenas nos processos filhos."
},
{
  "objeto": 3,
  "função": "cluster.worker",
  "oQueFaz": "Fornece informações sobre o processo filho atual.",
  "exemplo": "console.log(cluster.worker.id);",
  "descricaoDoExemplo": "Imprime o ID do processo filho atual."
},
{
  "objeto": 4,
  "função": "cluster.on()",
  "oQueFaz": "Registra um manipulador de eventos para um determinado evento do cluster.",
  "exemplo": "cluster.on('online', (worker) => { ... });",
  "descricaoDoExemplo": "Registra um manipulador de eventos para o evento 'online', que é acionado quando um novo processo filho está online no cluster."
},
{
  "objeto": 5,
  "função": "cluster.settings",
  "oQueFaz": "Fornece acesso às configurações do cluster.",
  "exemplo": "console.log(cluster.settings.exec);",
  "descricaoDoExemplo": "Imprime o caminho para o arquivo executável usado para criar processos filhos no cluster."
},
{
  "objeto": 6,
  "função": "dgram.createSocket()",
  "oQueFaz": "Cria um novo objeto de soquete UDP (User Datagram Protocol).",
  "exemplo": "const socket = dgram.createSocket('udp4');",
  "descricaoDoExemplo": "Cria um novo soquete UDP usando o protocolo UDP versão 4 (IPv4) e armazena-o na variável 'socket'."
},
{
  "objeto": 7,
  "função": "dgram.Socket.bind()",
  "oQueFaz": "Associa um soquete a um endereço e porta específicos.",
  "exemplo": "socket.bind(8080);",
  "descricaoDoExemplo": "Associa o soquete à porta 8080."
},
{
  "objeto": 8,
  "função": "dgram.Socket.send()",
  "oQueFaz": "Envia dados por meio de um soquete UDP.",
  "exemplo": "socket.send(message, 0, message.length, 8080, 'localhost', (err) => { ... });",
  "descricaoDoExemplo": "Envia a mensagem por meio do soquete UDP para o endereço 'localhost' na porta 8080."
},
{
  "objeto": 9,
  "função": "dgram.Socket.close()",
  "oQueFaz": "Fecha o soquete UDP.",
  "exemplo": "socket.close();",
  "descricaoDoExemplo": "Fecha o soquete UDP."
},
{
  "objeto": 10,
  "função": "dgram.Socket.setBroadcast()",
  "oQueFaz": "Define se um soquete UDP está habilitado para transmitir pacotes para o endereço de transmissão.",
  "exemplo": "socket.setBroadcast(true);",
  "descricaoDoExemplo": "Habilita a transmissão de pacotes do soquete UDP para o endereço de transmissão."
},
{
  "objeto": 11,
  "função": "dgram.Socket.setTTL()",
  "oQueFaz": "Define o valor do campo Time-to-Live (TTL) dos pacotes enviados por meio de um soquete UDP.",
  "exemplo": "socket.setTTL(64);",
  "descricaoDoExemplo": "Define o valor do campo TTL dos pacotes enviados pelo soquete UDP como 64."
},
{
  "objeto": 12,
  "função": "dgram.Socket.setMulticastTTL()",
  "oQueFaz": "Define o valor do campo Time-to-Live (TTL) dos pacotes multicast enviados por meio de um soquete UDP.",
  "exemplo": "socket.setMulticastTTL(128);",
  "descricaoDoExemplo": "Define o valor do campo TTL dos pacotes multicast enviados pelo soquete UDP como 128."
},
{
  "objeto": 13,
  "função": "dgram.Socket.addMembership()",
  "oQueFaz": "Adiciona o soquete UDP a um grupo multicast.",
  "exemplo": "socket.addMembership('230.0.0.1');",
  "descricaoDoExemplo": "Adiciona o soquete UDP ao grupo multicast com o endereço IP '230.0.0.1'."
},
{
  "objeto": 14,
  "função": "dgram.Socket.dropMembership()",
  "oQueFaz": "Remove o soquete UDP de um grupo multicast.",
  "exemplo": "socket.dropMembership('230.0.0.1');",
  "descricaoDoExemplo": "Remove o soquete UDP do grupo multicast com o endereço IP '230.0.0.1'."
},
{
  "objeto": 15,
  "função": "dgram.Socket.on()",
  "oQueFaz": "Registra um manipulador de eventos para um determinado evento do soquete UDP.",
  "exemplo": "socket.on('message', (msg, rinfo) => { ... });",
  "descricaoDoExemplo": "Registra um manipulador de eventos para o evento 'message', que é acionado quando uma mensagem é recebida pelo soquete UDP."
},
{
  "objeto": 16,
  "função": "dgram.Socket.removeListener()",
  "oQueFaz": "Remove um manipulador de eventos específico de um evento do soquete UDP.",
  "exemplo": "socket.removeListener('message', handler);",
  "descricaoDoExemplo": "Remove o manipulador de eventos 'handler' do evento 'message' do soquete UDP."
},
{
  "objeto": 17,
  "função": "dgram.Socket.removeAllListeners()",
  "oQueFaz": "Remove todos os manipuladores de eventos de um evento do soquete UDP.",
  "exemplo": "socket.removeAllListeners('message');",
  "descricaoDoExemplo": "Remove todos os manipuladores de eventos do evento 'message' do soquete UDP."
},
{
  "objeto": 18,
  "função": "fs.createReadStream()",
  "oQueFaz": "Cria uma stream de leitura para um arquivo.",
  "exemplo": "const stream = fs.createReadStream('file.txt');",
  "descricaoDoExemplo": "Cria uma stream de leitura para o arquivo 'file.txt' e armazena-a na variável 'stream'."
},
{
  "objeto": 19,
  "função": "fs.createWriteStream()",
  "oQueFaz": "Cria uma stream de gravação para um arquivo.",
  "exemplo": "const stream = fs.createWriteStream('file.txt');",
  "descricaoDoExemplo": "Cria uma stream de gravação para o arquivo 'file.txt' e armazena-a na variável 'stream'."
},
{
  "objeto": 20,
  "função": "fs.watch()",
  "oQueFaz": "Observa mudanças em um arquivo ou diretório.",
  "exemplo": "fs.watch('file.txt', (event, filename) => { ... });",
  "descricaoDoExemplo": "Observa o arquivo 'file.txt' em busca de mudanças e executa uma função de retorno de chamada sempre que ocorrer uma alteração."
},
{
  "objeto": 21,
  "função": "fs.unwatchFile()",
  "oQueFaz": "Deixa de observar as mudanças em um arquivo.",
  "exemplo": "fs.unwatchFile('file.txt');",
  "descricaoDoExemplo": "Deixa de observar o arquivo 'file.txt' para detectar mudanças."
},
{
  "objeto": 22,
  "função": "fs.watchFile()",
  "oQueFaz": "Observa as mudanças em um arquivo especificado.",
  "exemplo": "fs.watchFile('file.txt', (curr, prev) => { ... });",
  "descricaoDoExemplo": "Observa o arquivo 'file.txt' para detectar mudanças de estado e executa uma função de retorno de chamada sempre que ocorrer uma mudança."
},
{
  "objeto": 23,
  "função": "fs.stat()",
  "oQueFaz": "Recupera informações do status de um arquivo ou diretório.",
  "exemplo": "fs.stat('file.txt', (err, stats) => { ... });",
  "descricaoDoExemplo": "Recupera informações do status do arquivo 'file.txt' e executa uma função de retorno de chamada com o objeto 'stats' contendo os detalhes do status."
},
{
  "objeto": 24,
  "função": "fs.lstat()",
  "oQueFaz": "Recupera informações do status de um link simbólico.",
  "exemplo": "fs.lstat('link.txt', (err, stats) => { ... });",
  "descricaoDoExemplo": "Recupera informações do status do link simbólico 'link.txt' e executa uma função de retorno de chamada com o objeto 'stats' contendo os detalhes do status."
},
{
  "objeto": 25,
  "função": "fs.fstat()",
  "oQueFaz": "Recupera informações do status de um descritor de arquivo.",
  "exemplo": "fs.fstat(fd, (err, stats) => { ... });",
  "descricaoDoExemplo": "Recupera informações do status do descritor de arquivo 'fd' e executa uma função de retorno de chamada com o objeto 'stats' contendo os detalhes do status."
},
{
  "objeto": 26,
  "função": "fs.chmod()",
  "oQueFaz": "Altera as permissões de acesso de um arquivo ou diretório.",
  "exemplo": "fs.chmod('file.txt', 0o755, (err) => { ... });",
  "descricaoDoExemplo": "Altera as permissões de acesso do arquivo 'file.txt' para 0o755 (permissões de leitura, gravação e execução para o proprietário e permissões de leitura e execução para o grupo e outros)."
},
{
  "objeto": 27,
  "função": "fs.chown()",
  "oQueFaz": "Altera o proprietário e o grupo de um arquivo ou diretório.",
  "exemplo": "fs.chown('file.txt', 1000, 1000, (err) => { ... });",
  "descricaoDoExemplo": "Altera o proprietário e o grupo do arquivo 'file.txt' para o usuário e grupo com o ID 1000."
},
{
  "objeto": 28,
  "função": "fs.fchmod()",
  "oQueFaz": "Altera as permissões de acesso de um descritor de arquivo.",
  "exemplo": "fs.fchmod(fd, 0o755, (err) => { ... });",
  "descricaoDoExemplo": "Altera as permissões de acesso do descritor de arquivo 'fd' para 0o755 (permissões de leitura, gravação e execução para o proprietário e permissões de leitura e execução para o grupo e outros)."
},
{
  "objeto": 29,
  "função": "fs.fchown()",
  "oQueFaz": "Altera o proprietário e o grupo de um descritor de arquivo.",
  "exemplo": "fs.fchown(fd, 1000, 1000, (err) => { ... });",
  "descricaoDoExemplo": "Altera o proprietário e o grupo do descritor de arquivo 'fd' para o usuário e grupo com o ID 1000."
},
{
  "objeto": 30,
  "função": "fs.lchmod()",
  "oQueFaz": "Altera as permissões de acesso de um link simbólico.",
  "exemplo": "fs.lchmod('link.txt', 0o755, (err) => { ... });",
  "descricaoDoExemplo": "Altera as permissões de acesso do link simbólico 'link.txt' para 0o755 (permissões de leitura, gravação e execução para o proprietário e permissões de leitura e execução para o grupo e outros)."
},
{
  "objeto": 31,
  "função": "fs.lchown()",
  "oQueFaz": "Altera o proprietário e o grupo de um link simbólico.",
  "exemplo": "fs.lchown('link.txt', 1000, 1000, (err) => { ... });",
  "descricaoDoExemplo": "Altera o proprietário e o grupo do link simbólico 'link.txt' para o usuário e grupo com o ID 1000."
},
{
  "objeto": 32,
  "função": "fs.link()",
  "oQueFaz": "Cria um novo link rígido (hard link) para um arquivo existente.",
  "exemplo": "fs.link('file.txt', 'link.txt', (err) => { ... });",
  "descricaoDoExemplo": "Cria um novo link rígido 'link.txt' para o arquivo existente 'file.txt'."
},
{
  "objeto": 33,
  "função": "fs.symlink()",
  "oQueFaz": "Cria um novo link simbólico para um arquivo ou diretório.",
  "exemplo": "fs.symlink('file.txt', 'link.txt', (err) => { ... });",
  "descricaoDoExemplo": "Cria um novo link simbólico 'link.txt' para o arquivo ou diretório existente 'file.txt'."
},
{
  "objeto": 34,
  "função": "fs.readlink()",
  "oQueFaz": "Lê o valor de um link simbólico.",
  "exemplo": "fs.readlink('link.txt', (err, linkString) => { ... });",
  "descricaoDoExemplo": "Lê o valor do link simbólico 'link.txt' e executa uma função de retorno de chamada com a string do link."
},
{
  "objeto": 35,
  "função": "fs.utimes()",
  "oQueFaz": "Altera os tempos de acesso e modificação de um arquivo ou diretório.",
  "exemplo": "fs.utimes('file.txt', accessTime, modifyTime, (err) => { ... });",
  "descricaoDoExemplo": "Altera os tempos de acesso e modificação do arquivo 'file.txt' para os valores especificados."
},
{
  "objeto": 36,
  "função": "fs.futimes()",
  "oQueFaz": "Altera os tempos de acesso e modificação de um descritor de arquivo.",
  "exemplo": "fs.futimes(fd, accessTime, modifyTime, (err) => { ... });",
  "descricaoDoExemplo": "Altera os tempos de acesso e modificação do descritor de arquivo 'fd' para os valores especificados."
},
{
  "objeto": 37,
  "função": "fs.lutimes()",
  "oQueFaz": "Altera os tempos de acesso e modificação de um link simbólico.",
  "exemplo": "fs.lutimes('link.txt', accessTime, modifyTime, (err) => { ... });",
  "descricaoDoExemplo": "Altera os tempos de acesso e modificação do link simbólico 'link.txt' para os valores especificados."
},
{
  "objeto": 38,
  "função": "fs.realpath()",
  "oQueFaz": "Resolve o caminho real de um arquivo ou diretório.",
  "exemplo": "fs.realpath('file.txt', (err, resolvedPath) => { ... });",
  "descricaoDoExemplo": "Resolve o caminho real do arquivo 'file.txt' e executa uma função de retorno de chamada com o caminho resolvido."
},
{
  "objeto": 39,
  "função": "fs.truncate()",
  "oQueFaz": "Trunca um arquivo para um tamanho especificado.",
  "exemplo": "fs.truncate('file.txt', 100, (err) => { ... });",
  "descricaoDoExemplo": "Trunca o arquivo 'file.txt' para um tamanho de 100 bytes."
},
{
  "objeto": 40,
  "função": "fs.ftruncate()",
  "oQueFaz": "Trunca um arquivo para um tamanho especificado de forma assíncrona.",
  "exemplo": "fs.ftruncate(fd, len, (err) => { ... });",
  "descricaoDoExemplo": "Trunca o arquivo referenciado pelo descritor de arquivo 'fd' para o tamanho especificado 'len'."
},
{
  "objeto": 41,
  "função": "fs.createLink()",
  "oQueFaz": "Cria um novo link para um arquivo existente de forma assíncrona.",
  "exemplo": "fs.createLink(existingPath, newPath, (err) => { ... });",
  "descricaoDoExemplo": "Cria um novo link 'newPath' para o arquivo existente em 'existingPath'."
},
{
  "objeto": 42,
  "função": "fs.createSymbolicLink()",
  "oQueFaz": "Cria um novo link simbólico para um arquivo ou diretório de forma assíncrona.",
  "exemplo": "fs.createSymbolicLink(target, path, type, (err) => { ... });",
  "descricaoDoExemplo": "Cria um novo link simbólico 'path' para o destino 'target' com o tipo especificado."
},
{
  "objeto": 43,
  "função": "fs.read()",
  "oQueFaz": "Lê dados de um arquivo aberto de forma assíncrona.",
  "exemplo": "fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => { ... });",
  "descricaoDoExemplo": "Lê dados do arquivo referenciado pelo descritor de arquivo 'fd' e armazena-os no buffer fornecido."
},
{
  "objeto": 44,
  "função": "fs.write()",
  "oQueFaz": "Escreve dados em um arquivo aberto de forma assíncrona.",
  "exemplo": "fs.write(fd, buffer, offset, length, position, (err, bytesWritten, buffer) => { ... });",
  "descricaoDoExemplo": "Escreve dados no arquivo referenciado pelo descritor de arquivo 'fd' a partir do buffer fornecido."
},
{
  "objeto": 45,
  "função": "fs.fsync()",
  "oQueFaz": "Sincroniza as alterações pendentes em um arquivo aberto de forma assíncrona.",
  "exemplo": "fs.fsync(fd, (err) => { ... });",
  "descricaoDoExemplo": "Sincroniza as alterações pendentes no arquivo referenciado pelo descritor de arquivo 'fd'."
},
{
  "objeto": 46,
  "função": "fs.fdatasync()",
  "oQueFaz": "Sincroniza os dados de um arquivo aberto de forma assíncrona.",
  "exemplo": "fs.fdatasync(fd, (err) => { ... });",
  "descricaoDoExemplo": "Sincroniza os dados no arquivo referenciado pelo descritor de arquivo 'fd'."
},
{
  "objeto": 47,
  "função": "fs.copyFile()",
  "oQueFaz": "Copia um arquivo para um destino de forma assíncrona.",
  "exemplo": "fs.copyFile(src, dest, (err) => { ... });",
  "descricaoDoExemplo": "Copia o arquivo de origem 'src' para o destino 'dest'."
},
{
  "objeto": 48,
  "função": "fs.unwatch()",
  "oQueFaz": "Remove um observador de alterações de um objeto fs anteriormente adicionado.",
  "exemplo": "fs.unwatch(filename, (event) => { ... });",
  "descricaoDoExemplo": "Remove o observador de alterações do arquivo ou diretório 'filename'."
},
{
  "objeto": 49,
  "função": "fs.access()",
  "oQueFaz": "Testa a permissão de acesso a um arquivo ou diretório de forma assíncrona.",
  "exemplo": "fs.access(path, mode, (err) => { ... });",
  "descricaoDoExemplo": "Verifica se o arquivo ou diretório 'path' possui as permissões especificadas em 'mode'."
},
{
  "objeto": 50,
  "função": "fs.appendFile()",
  "oQueFaz": "Anexa dados a um arquivo de forma assíncrona.",
  "exemplo": "fs.appendFile(file, data, options, (err) => { ... });",
  "descricaoDoExemplo": "Anexa os dados fornecidos ao arquivo especificado."
},
{
  "objeto": 50,
  "função": "fs.appendFile()",
  "oQueFaz": "Anexa dados a um arquivo de forma assíncrona.",
  "exemplo": "fs.appendFile(file, data, options, (err) => { ... });",
  "descricaoDoExemplo": "Anexa os dados fornecidos ao arquivo especificado."
},
{
  "objeto": 51,
  "função": "fs.chmodSync()",
  "oQueFaz": "Altera as permissões de um arquivo de forma síncrona.",
  "exemplo": "fs.chmodSync(path, mode);",
  "descricaoDoExemplo": "Altera as permissões do arquivo em 'path' de acordo com o 'mode' especificado."
},
{
  "objeto": 52,
  "função": "fs.chownSync()",
  "oQueFaz": "Altera o proprietário e o grupo de um arquivo de forma síncrona.",
  "exemplo": "fs.chownSync(path, uid, gid);",
  "descricaoDoExemplo": "Altera o proprietário e o grupo do arquivo em 'path' para os valores especificados 'uid' e 'gid'."
},
{
  "objeto": 53,
  "função": "fs.close()",
  "oQueFaz": "Fecha um arquivo de forma assíncrona.",
  "exemplo": "fs.close(fd, (err) => { ... });",
  "descricaoDoExemplo": "Fecha o arquivo referenciado pelo descritor de arquivo 'fd'."
},
{
  "objeto": 54,
  "função": "fs.closeSync()",
  "oQueFaz": "Fecha um arquivo de forma síncrona.",
  "exemplo": "fs.closeSync(fd);",
  "descricaoDoExemplo": "Fecha o arquivo referenciado pelo descritor de arquivo 'fd' de forma síncrona."
},
{
  "objeto": 55,
  "função": "fs.existsSync()",
  "oQueFaz": "Verifica se um arquivo ou diretório existe de forma síncrona.",
  "exemplo": "fs.existsSync(path);",
  "descricaoDoExemplo": "Verifica se o arquivo ou diretório em 'path' existe."
},
{
  "objeto": 56,
  "função": "fs.fstatSync()",
  "oQueFaz": "Obtém o status de um arquivo usando um descritor de arquivo de forma síncrona.",
  "exemplo": "fs.fstatSync(fd);",
  "descricaoDoExemplo": "Obtém o status do arquivo referenciado pelo descritor de arquivo 'fd'."
},
{
  "objeto": 57,
  "função": "fs.fsyncSync()",
  "oQueFaz": "Sincroniza as alterações pendentes em um arquivo aberto de forma síncrona.",
  "exemplo": "fs.fsyncSync(fd);",
  "descricaoDoExemplo": "Sincroniza as alterações pendentes no arquivo referenciado pelo descritor de arquivo 'fd' de forma síncrona."
},
{
  "objeto": 58,
  "função": "fs.ftruncateSync()",
  "oQueFaz": "Trunca um arquivo para um tamanho especificado de forma síncrona.",
  "exemplo": "fs.ftruncateSync(fd, len);",
  "descricaoDoExemplo": "Trunca o arquivo referenciado pelo descritor de arquivo 'fd' para o tamanho especificado 'len' de forma síncrona."
},
{
  "objeto": 59,
  "função": "fs.futimesSync()",
  "oQueFaz": "Altera os tempos de acesso e modificação de um arquivo de forma síncrona.",
  "exemplo": "fs.futimesSync(fd, atime, mtime);",
  "descricaoDoExemplo": "Altera os tempos de acesso e modificação do arquivo referenciado pelo descritor de arquivo 'fd' para os valores especificados 'atime' e 'mtime'."
},
{
  "objeto": 60,
  "função": "fs.lchmodSync()",
  "oQueFaz": "Altera as permissões de um link de forma síncrona.",
  "exemplo": "fs.lchmodSync(path, mode);",
  "descricaoDoExemplo": "Altera as permissões do link em 'path' de acordo com o 'mode' especificado."
},
{
  "objeto": 61,
  "função": "fs.lchownSync()",
  "oQueFaz": "Altera o proprietário e o grupo de um link de forma síncrona.",
  "exemplo": "fs.lchownSync(path, uid, gid);",
  "descricaoDoExemplo": "Altera o proprietário e o grupo do link em 'path' para os valores especificados 'uid' e 'gid'."
},
{
  "objeto": 62,
  "função": "fs.linkSync()",
  "oQueFaz": "Cria um novo link para um arquivo existente de forma síncrona.",
  "exemplo": "fs.linkSync(existingPath, newPath);",
  "descricaoDoExemplo": "Cria um novo link 'newPath' para o arquivo existente em 'existingPath' de forma síncrona."
},
{
  "objeto": 63,
  "função": "fs.lstatSync()",
  "oQueFaz": "Obtém o status de um arquivo ou link de forma síncrona.",
  "exemplo": "fs.lstatSync(path);",
  "descricaoDoExemplo": "Obtém o status do arquivo ou link em 'path' de forma síncrona."
},
{
  "objeto": 64,
  "função": "fs.mkdirSync()",
  "oQueFaz": "Cria um diretório de forma síncrona.",
  "exemplo": "fs.mkdirSync(path, mode);",
  "descricaoDoExemplo": "Cria um diretório em 'path' com as permissões especificadas em 'mode'."
},
{
  "objeto": 65,
  "função": "fs.mkdtempSync()",
  "oQueFaz": "Cria um diretório temporário de forma síncrona.",
  "exemplo": "fs.mkdtempSync(prefix);",
  "descricaoDoExemplo": "Cria um diretório temporário com o prefixo especificado em 'prefix' de forma síncrona."
},
{
  "objeto": 66,
  "função": "fs.open()",
  "oQueFaz": "Abre um arquivo de forma assíncrona.",
  "exemplo": "fs.open(path, flags, mode, (err, fd) => { ... });",
  "descricaoDoExemplo": "Abre o arquivo em 'path' com as opções de 'flags' e permissões em 'mode'."
},
{
  "objeto": 67,
  "função": "fs.openSync()",
  "oQueFaz": "Abre um arquivo de forma síncrona.",
  "exemplo": "fs.openSync(path, flags, mode);",
  "descricaoDoExemplo": "Abre o arquivo em 'path' com as opções de 'flags' e permissões em 'mode' de forma síncrona."
},
{
  "objeto": 68,
  "função": "fs.readSync()",
  "oQueFaz": "Lê dados de um arquivo de forma síncrona.",
  "exemplo": "fs.readSync(fd, buffer, offset, length, position);",
  "descricaoDoExemplo": "Lê dados do arquivo referenciado pelo descritor de arquivo 'fd' e os armazena no buffer fornecido."
},
{
  "objeto": 69,
  "função": "fs.readdirSync()",
  "oQueFaz": "Lê o conteúdo de um diretório de forma síncrona.",
  "exemplo": "fs.readdirSync(path, options);",
  "descricaoDoExemplo": "Lê o conteúdo do diretório em 'path' e retorna um array com os nomes dos arquivos e subdiretórios."
},
{
  "objeto": 70,
  "função": "fs.readFile()",
  "oQueFaz": "Lê o conteúdo de um arquivo de forma assíncrona.",
  "exemplo": "fs.readFile(file, options, (err, data) => { ... });",
  "descricaoDoExemplo": "Lê o conteúdo do arquivo especificado e retorna os dados lidos."
},
{
  "objeto": 71,
  "função": "fs.readFileSync()",
  "oQueFaz": "Lê o conteúdo de um arquivo de forma síncrona.",
  "exemplo": "fs.readFileSync(file, options);",
  "descricaoDoExemplo": "Lê o conteúdo do arquivo especificado de forma síncrona e retorna os dados lidos."
},
{
  "objeto": 72,
  "função": "fs.readlinkSync()",
  "oQueFaz": "Lê o valor de um link de forma síncrona.",
  "exemplo": "fs.readlinkSync(path, options);",
  "descricaoDoExemplo": "Lê o valor do link em 'path' de forma síncrona e retorna o caminho real ou simbólico."
},
{
  "objeto": 73,
  "função": "fs.realpathSync()",
  "oQueFaz": "Resolve o caminho real de um arquivo de forma síncrona.",
  "exemplo": "fs.realpathSync(path, options);",
  "descricaoDoExemplo": "Resolve o caminho real do arquivo em 'path' de forma síncrona e retorna o caminho absoluto."
},
{
  "objeto": 74,
  "função": "fs.renameSync()",
  "oQueFaz": "Renomeia um arquivo de forma síncrona.",
  "exemplo": "fs.renameSync(oldPath, newPath);",
  "descricaoDoExemplo": "Renomeia o arquivo em 'oldPath' com o novo nome especificado em 'newPath' de forma síncrona."
},
{
  "objeto": 75,
  "função": "fs.rmdirSync()",
  "oQueFaz": "Remove um diretório vazio de forma síncrona.",
  "exemplo": "fs.rmdirSync(path);",
  "descricaoDoExemplo": "Remove o diretório em 'path' se estiver vazio, de forma síncrona."
},
{
  "objeto": 76,
  "função": "fs.statSync()",
  "oQueFaz": "Obtém o status de um arquivo ou diretório de forma síncrona.",
  "exemplo": "fs.statSync(path);",
  "descricaoDoExemplo": "Obtém o status do arquivo ou diretório em 'path' de forma síncrona."
},
{
  "objeto": 77,
  "função": "fs.symlinkSync()",
  "oQueFaz": "Cria um novo link simbólico de forma síncrona.",
  "exemplo": "fs.symlinkSync(target, path, type);",
  "descricaoDoExemplo": "Cria um novo link simbólico em 'path' que aponta para o 'target' especificado de forma síncrona."
},
{
  "objeto": 78,
  "função": "fs.truncateSync()",
  "oQueFaz": "Trunca um arquivo para um tamanho especificado de forma síncrona.",
  "exemplo": "fs.truncateSync(path, len);",
  "descricaoDoExemplo": "Trunca o arquivo em 'path' para o tamanho especificado 'len' de forma síncrona."
},
{
  "objeto": 79,
  "função": "fs.unlinkSync()",
  "oQueFaz": "Remove um arquivo de forma síncrona.",
  "exemplo": "fs.unlinkSync(path);",
  "descricaoDoExemplo": "Remove o arquivo em 'path' de forma síncrona."
},
{
  "objeto": 80,
  "função": "fs.utimesSync()",
  "oQueFaz": "Atualiza os tempos de acesso e modificação de um arquivo de forma síncrona.",
  "exemplo": "fs.utimesSync(path, atime, mtime);",
  "descricaoDoExemplo": "Atualiza os tempos de acesso e modificação do arquivo em 'path' de forma síncrona."
},
{
  "objeto": 81,
  "função": "fs.writeSync()",
  "oQueFaz": "Escreve dados em um arquivo de forma síncrona.",
  "exemplo": "fs.writeSync(fd, buffer, offset, length, position);",
  "descricaoDoExemplo": "Escreve os dados do buffer fornecido no arquivo referenciado pelo descritor de arquivo 'fd'."
},
{
  "objeto": 82,
  "função": "fs.writeFile()",
  "oQueFaz": "Escreve dados em um arquivo de forma assíncrona.",
  "exemplo": "fs.writeFile(file, data, options, (err) => { ... });",
  "descricaoDoExemplo": "Escreve os dados fornecidos no arquivo especificado."
},
{
  "objeto": 83,
  "função": "fs.writeFileSync()",
  "oQueFaz": "Escreve dados em um arquivo de forma síncrona.",
  "exemplo": "fs.writeFileSync(file, data, options);",
  "descricaoDoExemplo": "Escreve os dados fornecidos no arquivo especificado de forma síncrona."
},
{
  "objeto": 84,
  "função": "http.get()",
  "oQueFaz": "Realiza uma requisição HTTP GET.",
  "exemplo": "http.get(url, options, (res) => { ... });",
  "descricaoDoExemplo": "Realiza uma requisição HTTP GET para a URL especificada e recebe a resposta através do callback."
},
{
  "objeto": 85,
  "função": "http.request()",
  "oQueFaz": "Realiza uma requisição HTTP customizada.",
  "exemplo": "http.request(url, options, (res) => { ... });",
  "descricaoDoExemplo": "Realiza uma requisição HTTP customizada para a URL especificada e recebe a resposta através do callback."
},
{
  "objeto": 86,
  "função": "http.Server.listen()",
  "oQueFaz": "Inicia o servidor HTTP para escutar as requisições.",
  "exemplo": "server.listen(port, hostname, backlog, (err) => { ... });",
  "descricaoDoExemplo": "Inicia o servidor HTTP na porta e host especificados para escutar as requisições."
},
{
  "objeto": 87,
  "função": "http.Server.close()",
  "oQueFaz": "Fecha o servidor HTTP.",
  "exemplo": "server.close((err) => { ... });",
  "descricaoDoExemplo": "Fecha o servidor HTTP, interrompendo a escuta de novas requisições."
},
{
  "objeto": 88,
  "função": "http.Server.timeout",
  "oQueFaz": "Tempo limite para as requisições do servidor HTTP.",
  "exemplo": "server.timeout = 120000;",
  "descricaoDoExemplo": "Define o tempo limite para as requisições do servidor HTTP em milissegundos."
},
{
  "objeto": 89,
  "função": "http.Server.keepAliveTimeout",
  "oQueFaz": "Tempo limite para manter a conexão viva no servidor HTTP.",
  "exemplo": "server.keepAliveTimeout = 5000;",
  "descricaoDoExemplo": "Define o tempo limite para manter a conexão viva no servidor HTTP em milissegundos."
},
{
  "objeto": 90,
  "função": "http.Server.maxHeadersCount",
  "oQueFaz": "Número máximo de cabeçalhos de requisição permitidos no servidor HTTP.",
  "exemplo": "server.maxHeadersCount = 20;",
  "descricaoDoExemplo": "Define o número máximo de cabeçalhos de requisição permitidos no servidor HTTP."
},
{
  "objeto": 91,
  "função": "http.IncomingMessage.url",
  "oQueFaz": "URL da requisição recebida pelo servidor HTTP.",
  "exemplo": "req.url;",
  "descricaoDoExemplo": "Acessa a URL da requisição recebida pelo servidor HTTP."
},
{
  "objeto": 92,
  "função": "http.IncomingMessage.method",
  "oQueFaz": "Método da requisição recebida pelo servidor HTTP.",
  "exemplo": "req.method;",
  "descricaoDoExemplo": "Acessa o método da requisição recebida pelo servidor HTTP."
},
{
  "objeto": 93,
  "função": "http.IncomingMessage.headers",
  "oQueFaz": "Cabeçalhos da requisição recebida pelo servidor HTTP.",
  "exemplo": "req.headers;",
  "descricaoDoExemplo": "Acessa os cabeçalhos da requisição recebida pelo servidor HTTP."
},
{
  "objeto": 94,
  "função": "http.IncomingMessage.statusCode",
  "oQueFaz": "Código de status da resposta HTTP enviada pelo servidor.",
  "exemplo": "res.statusCode;",
  "descricaoDoExemplo": "Acessa o código de status da resposta HTTP enviada pelo servidor."
},
{
  "objeto": 95,
  "função": "http.ServerResponse.setHeader()",
  "oQueFaz": "Define um cabeçalho na resposta HTTP do servidor.",
  "exemplo": "res.setHeader(name, value);",
  "descricaoDoExemplo": "Define o cabeçalho com o nome e valor especificados na resposta HTTP do servidor."
},
{
  "objeto": 96,
  "função": "http.ServerResponse.getHeader()",
  "oQueFaz": "Obtém o valor de um cabeçalho da resposta HTTP do servidor.",
  "exemplo": "res.getHeader(name);",
  "descricaoDoExemplo": "Obtém o valor do cabeçalho com o nome especificado na resposta HTTP do servidor."
},
{
  "objeto": 97,
  "função": "http.ServerResponse.removeHeader()",
  "oQueFaz": "Remove um cabeçalho da resposta HTTP do servidor.",
  "exemplo": "res.removeHeader(name);",
  "descricaoDoExemplo": "Remove o cabeçalho com o nome especificado da resposta HTTP do servidor."
},
{
  "objeto": 98,
  "função": "http.ServerResponse.writeHead()",
  "oQueFaz": "Envia uma linha de status e cabeçalhos como resposta HTTP do servidor.",
  "exemplo": "res.writeHead(statusCode, headers);",
  "descricaoDoExemplo": "Envia uma linha de status e cabeçalhos como resposta HTTP do servidor para o cliente."
},
{
  "objeto": 99,
  "função": "http.ServerResponse.write()",
  "oQueFaz": "Envia dados como parte da resposta HTTP do servidor.",
  "exemplo": "res.write(chunk, encoding);",
  "descricaoDoExemplo": "Envia dados como parte da resposta HTTP do servidor para o cliente."
},
{
  "objeto": 100,
  "função": "http.ServerResponse.end()",
  "oQueFaz": "Finaliza a resposta HTTP do servidor.",
  "exemplo": "res.end(data, encoding);",
  "descricaoDoExemplo": "Finaliza a resposta HTTP do servidor e envia os dados opcionais para o cliente."
},
{
  "objeto": 101,
  "função": "http.ClientRequest.setHeader()",
  "oQueFaz": "Define um cabeçalho na requisição HTTP do cliente.",
  "exemplo": "req.setHeader(name, value);",
  "descricaoDoExemplo": "Define o cabeçalho com o nome e valor especificados na requisição HTTP do cliente."
},
{
  "objeto": 102,
  "função": "http.ClientRequest.getHeader()",
  "oQueFaz": "Obtém o valor de um cabeçalho na resposta HTTP do cliente.",
  "exemplo": "const value = res.getHeader(name);",
  "descricaoDoExemplo": "Obtém o valor do cabeçalho com o nome especificado na resposta HTTP do cliente."
  },
  {
  "objeto": 103,
  "função": "http.ClientRequest.removeHeader()",
  "oQueFaz": "Remove um cabeçalho da requisição HTTP do cliente.",
  "exemplo": "req.removeHeader(name);",
  "descricaoDoExemplo": "Remove o cabeçalho com o nome especificado da requisição HTTP do cliente."
  },
  {
  "objeto": 104,
  "função": "http.ClientRequest.write()",
  "oQueFaz": "Escreve dados na requisição HTTP do cliente.",
  "exemplo": "req.write(chunk, encoding);",
  "descricaoDoExemplo": "Escreve os dados fornecidos na requisição HTTP do cliente."
  },
  {
  "objeto": 105,
  "função": "http.ClientRequest.end()",
  "oQueFaz": "Finaliza a requisição HTTP do cliente.",
  "exemplo": "req.end(data, encoding, callback);",
  "descricaoDoExemplo": "Finaliza a requisição HTTP do cliente, enviando os dados fornecidos, se houver."
  },
  {
  "objeto": 106,
  "função": "http.ClientRequest.abort()",
  "oQueFaz": "Aborta a requisição HTTP do cliente.",
  "exemplo": "req.abort();",
  "descricaoDoExemplo": "Aborta a requisição HTTP do cliente, encerrando-a prematuramente."
  },
  {
  "objeto": 107,
  "função": "http.Agent.maxSockets",
  "oQueFaz": "Define o número máximo de sockets por agente HTTP.",
  "exemplo": "http.Agent.maxSockets = n;",
  "descricaoDoExemplo": "Define o número máximo de sockets que cada agente HTTP pode manter abertos simultaneamente."
  },
  {
  "objeto": 108,
  "função": "http.Agent.keepAlive",
  "oQueFaz": "Define se os sockets de agente HTTP são mantidos ativos.",
  "exemplo": "http.Agent.keepAlive = true;",
  "descricaoDoExemplo": "Define se os sockets dos agentes HTTP devem ser mantidos ativos para reutilização."
  },
  {
  "objeto": 109,
  "função": "http.Agent.createConnection()",
  "oQueFaz": "Cria uma nova conexão de socket para um agente HTTP.",
  "exemplo": "const socket = http.Agent.createConnection(options);",
  "descricaoDoExemplo": "Cria uma nova conexão de socket com as opções fornecidas para um agente HTTP."
  },
  {
  "objeto": 110,
  "função": "http.Agent.destroy()",
  "oQueFaz": "Destroi todos os sockets do agente HTTP.",
  "exemplo": "http.Agent.destroy();",
  "descricaoDoExemplo": "Destroi todos os sockets abertos pelos agentes HTTP."
  },
  {
  "objeto": 111,
  "função": "http.globalAgent",
  "oQueFaz": "O agente HTTP global utilizado por requisições HTTP padrão.",
  "exemplo": "http.globalAgent",
  "descricaoDoExemplo": "O agente HTTP global pode ser utilizado como um agente padrão para todas as requisições HTTP."
  },
  {
  "objeto": 112,
  "função": "https.createServer()",
  "oQueFaz": "Cria um servidor HTTPS.",
  "exemplo": "const server = https.createServer(options, callback);",
  "descricaoDoExemplo": "Cria um servidor HTTPS com as opções fornecidas e chama o callback quando o servidor está pronto para receber solicitações."
  },
  {
  "objeto": 113,
  "função": "https.get()",
  "oQueFaz": "Realiza uma requisição GET HTTPS.",
  "exemplo": "https.get(options, callback);",
  "descricaoDoExemplo": "Realiza uma requisição GET HTTPS com as opções fornecidas e chama o callback quando a resposta é recebida."
  },
  {
  "objeto": 114,
  "função": "https.request()",
  "oQueFaz": "Realiza uma requisição HTTPS.",
  "exemplo": "https.request(options, callback);",
  "descricaoDoExemplo": "Realiza uma requisição HTTPS com as opções fornecidas e chama o callback quando a resposta é recebida."
  },
  {
  "objeto": 115,
  "função": "https.Agent.maxSockets",
  "oQueFaz": "Define o número máximo de sockets por agente HTTPS.",
  "exemplo": "https.Agent.maxSockets = n;",
  "descricaoDoExemplo": "Define o número máximo de sockets que cada agente HTTPS pode manter abertos simultaneamente."
  },
  {
  "objeto": 116,
  "função": "https.Agent.keepAlive",
  "oQueFaz": "Define se os sockets de agente HTTPS são mantidos ativos.",
  "exemplo": "https.Agent.keepAlive = true;",
  "descricaoDoExemplo": "Define se os sockets dos agentes HTTPS devem ser mantidos ativos para reutilização."
  },
  {
  "objeto": 117,
  "função": "https.Agent.createConnection()",
  "oQueFaz": "Cria uma nova conexão de socket para um agente HTTPS.",
  "exemplo": "const socket = https.Agent.createConnection(options);",
  "descricaoDoExemplo": "Cria uma nova conexão de socket com as opções fornecidas para um agente HTTPS."
  },
  {
  "objeto": 118,
  "função": "https.Agent.destroy()",
  "oQueFaz": "Destroi todos os sockets do agente HTTPS.",
  "exemplo": "https.Agent.destroy();",
  "descricaoDoExemplo": "Destroi todos os sockets abertos pelos agentes HTTPS."
  },
  {
  "objeto": 119,
  "função": "url.parse()",
  "oQueFaz": "Analisa uma URL em uma representação de objeto.",
  "exemplo": "const urlObject = url.parse(urlString, parseQueryString);",
  "descricaoDoExemplo": "Analisa a string da URL fornecida e retorna um objeto com as partes componentes da URL."
  },
  {
  "objeto": 120,
  "função": "url.format()",
  "oQueFaz": "Converte um objeto URL em uma string de URL formatada.",
  "exemplo": "const urlString = url.format(urlObject);",
  "descricaoDoExemplo": "Converte o objeto URL fornecido em uma string de URL formatada."
  },
  {
  "objeto": 121,
  "função": "url.resolve()",
  "oQueFaz": "Resolve uma URL relativa em relação a uma URL base.",
  "exemplo": "const resolvedUrl = url.resolve(from, to);",
  "descricaoDoExemplo": "Resolve uma URL relativa em relação a uma URL base, retornando a URL absoluta resultante."
  },
  {
  "objeto": 122,
  "função": "querystring.stringify()",
  "oQueFaz": "Converte um objeto em uma string de consulta.",
  "exemplo": "const queryString = querystring.stringify(obj, sep, eq, options);",
  "descricaoDoExemplo": "Converte um objeto em uma string de consulta, aplicando a separação e a codificação conforme especificado."
  },
  {
  "objeto": 123,
  "função": "querystring.parse()",
  "oQueFaz": "Converte uma string de consulta em um objeto.",
  "exemplo": "const obj = querystring.parse(str, sep, eq, options);",
  "descricaoDoExemplo": "Converte uma string de consulta em um objeto, decodificando a string conforme especificado."
  },
  {
  "objeto": 124,
  "função": "zlib.createDeflate()",
  "oQueFaz": "Cria um objeto de fluxo Deflate.",
  "exemplo": "const deflate = zlib.createDeflate(options);",
  "descricaoDoExemplo": "Cria um objeto de fluxo Deflate com as opções fornecidas."
  },
  {
  "objeto": 125,
  "função": "zlib.createInflate()",
  "oQueFaz": "Cria um objeto de fluxo Inflate.",
  "exemplo": "const inflate = zlib.createInflate(options);",
  "descricaoDoExemplo": "Cria um objeto de fluxo Inflate com as opções fornecidas."
  },
  {
  "objeto": 126,
  "função": "zlib.createGzip()",
  "oQueFaz": "Cria um objeto de fluxo Gzip.",
  "exemplo": "const gzip = zlib.createGzip(options);",
  "descricaoDoExemplo": "Cria um objeto de fluxo Gzip com as opções fornecidas."
  },
  {
  "objeto": 127,
  "função": "zlib.createGunzip()",
  "oQueFaz": "Cria um objeto de fluxo Gunzip.",
  "exemplo": "const gunzip = zlib.createGunzip(options);",
  "descricaoDoExemplo": "Cria um objeto de fluxo Gunzip com as opções fornecidas."
  },
  {
  "objeto": 128,
  "função": "zlib.deflate()",
  "oQueFaz": "Comprime dados usando o algoritmo Deflate.",
  "exemplo": "zlib.deflate(buffer, options, callback);",
  "descricaoDoExemplo": "Comprime os dados do buffer fornecido usando o algoritmo Deflate e chama o callback quando a operação estiver concluída."
  },
  {
  "objeto": 129,
  "função": "zlib.deflateSync()",
  "oQueFaz": "Comprime dados usando o algoritmo Deflate de forma síncrona.",
  "exemplo": "const compressedData = zlib.deflateSync(buffer, options);",
  "descricaoDoExemplo": "Comprime os dados do buffer fornecido usando o algoritmo Deflate de forma síncrona, retornando os dados comprimidos resultantes."
  },
  {
  "objeto": 130,
  "função": "zlib.inflate()",
  "oQueFaz": "Descomprime dados usando o algoritmo Inflate.",
  "exemplo": "zlib.inflate(buffer, options, callback);",
  "descricaoDoExemplo": "Descomprime os dados do buffer fornecido usando o algoritmo Inflate e chama o callback quando a operação estiver concluída."
  },
  {
  "objeto": 131,
  "função": "zlib.inflateSync()",
  "oQueFaz": "Descomprime dados usando o algoritmo Inflate de forma síncrona.",
  "exemplo": "const decompressedData = zlib.inflateSync(buffer, options);",
  "descricaoDoExemplo": "Descomprime os dados do buffer fornecido usando o algoritmo Inflate de forma síncrona, retornando os dados descomprimidos resultantes."
  },
  {
  "objeto": 132,
  "função": "zlib.gzip()",
  "oQueFaz": "Comprime dados usando o algoritmo Gzip.",
  "exemplo": "zlib.gzip(buffer, options, callback);",
  "descricaoDoExemplo": "Comprime os dados do buffer fornecido usando o algoritmo Gzip e chama o callback quando a operação estiver concluída."
  },
  {
    "objeto": 133,
    "função": "zlib.gzipSync()",
    "oQueFaz": "Comprime dados usando o algoritmo Gzip de forma síncrona.",
    "exemplo": "const compressedData = zlib.gzipSync(buffer, options);",
    "descricaoDoExemplo": "Comprime os dados do buffer fornecido usando o algoritmo Gzip de forma síncrona, retornando os dados comprimidos resultantes."
    },
    {
    "objeto": 134,
    "função": "zlib.gunzip()",
    "oQueFaz": "Descomprime dados usando o algoritmo Gunzip.",
    "exemplo": "zlib.gunzip(buffer, options, callback);",
    "descricaoDoExemplo": "Descomprime os dados do buffer fornecido usando o algoritmo Gunzip e chama o callback quando a operação estiver concluída."
    },
    {
    "objeto": 135,
    "função": "zlib.gunzipSync()",
    "oQueFaz": "Descomprime dados usando o algoritmo Gunzip de forma síncrona.",
    "exemplo": "const decompressedData = zlib.gunzipSync(buffer, options);",
    "descricaoDoExemplo": "Descomprime os dados do buffer fornecido usando o algoritmo Gunzip de forma síncrona, retornando os dados descomprimidos resultantes."
    },
    {
    "objeto": 136,
    "função": "dns.lookup()",
    "oQueFaz": "Realiza uma pesquisa DNS em um nome de host.",
    "exemplo": "dns.lookup(hostname, options, callback);",
    "descricaoDoExemplo": "Realiza uma pesquisa DNS no nome de host fornecido e chama o callback com o endereço IP resultante."
    },
    {
    "objeto": 137,
    "função": "dns.lookupService()",
    "oQueFaz": "Obtém o nome do serviço associado a um endereço IP e porta.",
    "exemplo": "dns.lookupService(address, port, callback);",
    "descricaoDoExemplo": "Obtém o nome do serviço associado ao endereço IP e porta fornecidos e chama o callback com o nome do serviço."
    },
    {
    "objeto": 138,
    "função": "dns.resolve()",
    "oQueFaz": "Resolve um nome de host em registros DNS.",
    "exemplo": "dns.resolve(hostname, rrtype, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo especificado e chama o callback com os registros resultantes."
    },
    {
    "objeto": 139,
    "função": "dns.resolve4()",
    "oQueFaz": "Resolve um nome de host em registros DNS do tipo 'A' (IPv4).",
    "exemplo": "dns.resolve4(hostname, options, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo 'A' (IPv4) e chama o callback com os endereços IPv4 resultantes."
    },
    {
    "objeto": 140,
    "função": "dns.resolve6()",
    "oQueFaz": "Resolve um nome de host em registros DNS do tipo 'AAAA' (IPv6).",
    "exemplo": "dns.resolve6(hostname, options, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo 'AAAA' (IPv6) e chama o callback com os endereços IPv6 resultantes."
    },
    {
    "objeto": 141,
    "função": "dns.resolveCname()",
    "oQueFaz": "Resolve um nome de host em registros DNS do tipo 'CNAME'.",
    "exemplo": "dns.resolveCname(hostname, options, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo 'CNAME' e chama o callback com os nomes canônicos resultantes."
    },
    {
    "objeto": 142,
    "função": "dns.resolveMx()",
    "oQueFaz": "Resolve um nome de host em registros DNS do tipo 'MX'.",
    "exemplo": "dns.resolveMx(hostname, options, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo 'MX' e chama o callback com os registros MX resultantes."
    },
    {
    "objeto": 143,
    "função": "dns.resolveNs()",
    "oQueFaz": "Resolve um nome de host em registros DNS do tipo 'NS'.",
    "exemplo": "dns.resolveNs(hostname, callback);",
    "descricaoDoExemplo": "Resolve o nome de host fornecido em registros DNS do tipo 'NS' e chama o callback com os servidores de nomes resultantes."
    },
    {
    "objeto": 144,
    "função": "dns.resolvePtr()",
    "oQueFaz": "Resolve um endereço IP em registros DNS do tipo 'PTR'.",
    "exemplo": "dns.resolvePtr(ip, callback);",
    "descricaoDoExemplo": "Resolve o endereço IP fornecido em registros DNS do tipo 'PTR' e chama o callback com os registros PTR resultantes."
    },
    {
    "objeto": 145,
    "função": "dns.resolveSoa()",
    "oQueFaz": "Resolve um nome de domínio em registros DNS do tipo 'SOA' (Start of Authority).",
    "exemplo": "dns.resolveSoa(domain, callback);",
    "descricaoDoExemplo": "Resolve o nome de domínio fornecido em registros DNS do tipo 'SOA' (Start of Authority) e chama o callback com os registros SOA resultantes."
    },
    {
    "objeto": 146,
    "função": "dns.resolveSrv()",
    "oQueFaz": "Resolve um nome de serviço e protocolo em registros DNS do tipo 'SRV'.",
    "exemplo": "dns.resolveSrv(service, protocol, callback);",
    "descricaoDoExemplo": "Resolve o nome de serviço e protocolo fornecidos em registros DNS do tipo 'SRV' e chama o callback com os registros SRV resultantes."
    },
    {
    "objeto": 147,
    "função": "dns.resolveNaptr()",
    "oQueFaz": "Resolve um nome de domínio em registros DNS do tipo 'NAPTR' (Naming Authority Pointer).",
    "exemplo": "dns.resolveNaptr(domain, callback);",
    "descricaoDoExemplo": "Resolve o nome de domínio fornecido em registros DNS do tipo 'NAPTR' (Naming Authority Pointer) e chama o callback com os registros NAPTR resultantes."
    },
    {
    "objeto": 148,
    "função": "dns.reverse()",
    "oQueFaz": "Executa uma pesquisa reversa DNS em um endereço IP.",
    "exemplo": "dns.reverse(ip, callback);",
    "descricaoDoExemplo": "Executa uma pesquisa reversa DNS no endereço IP fornecido e chama o callback com os nomes de host resultantes."
    },
    {
    "objeto": 149,
    "função": "dns.getServers()",
    "oQueFaz": "Retorna uma matriz contendo os servidores DNS configurados.",
    "exemplo": "const dnsServers = dns.getServers();",
    "descricaoDoExemplo": "Retorna uma matriz contendo os endereços IP dos servidores DNS configurados no sistema."
    },
    {
    "objeto": 150,
    "função": "net.createServer()",
    "oQueFaz": "Cria um servidor TCP ou IPC.",
    "exemplo": "const server = net.createServer(options, connectionListener);",
    "descricaoDoExemplo": "Cria um servidor TCP ou IPC com as opções fornecidas e um listener de conexão que é chamado quando uma nova conexão é estabelecida."
    },
    {
    "objeto": 151,
    "função": "net.connect()",
    "oQueFaz": "Estabelece uma conexão TCP ou IPC.",
    "exemplo": "const socket = net.connect(options, connectListener);",
    "descricaoDoExemplo": "Estabelece uma conexão TCP ou IPC com o host e porta especificados e chama o listener de conexão quando a conexão é estabelecida."
    },
    {
    "objeto": 152,
    "função": "net.Socket.bufferSize",
    "oQueFaz": "Propriedade que retorna o tamanho do buffer de envio do soquete.",
    "exemplo": "const bufferSize = socket.bufferSize;",
    "descricaoDoExemplo": "Retorna o tamanho atual do buffer de envio do soquete em bytes."
    },
    {
    "objeto": 153,
    "função": "net.Socket.remoteAddress",
    "oQueFaz": "Propriedade que retorna o endereço IP do lado remoto do soquete.",
    "exemplo": "const remoteAddress = socket.remoteAddress;",
    "descricaoDoExemplo": "Retorna o endereço IP do lado remoto (servidor/cliente) do soquete."
    },
    {
    "objeto": 154,
    "função": "net.Socket.remoteFamily",
    "oQueFaz": "Propriedade que retorna a família de endereços IP do lado remoto do soquete.",
    "exemplo": "const remoteFamily = socket.remoteFamily;",
    "descricaoDoExemplo": "Retorna a família de endereços IP (IPv4 ou IPv6) do lado remoto (servidor/cliente) do soquete."
    },
    {
    "objeto": 155,
    "função": "net.Socket.remotePort",
    "oQueFaz": "Propriedade que retorna a porta do lado remoto do soquete.",
    "exemplo": "const remotePort = socket.remotePort;",
    "descricaoDoExemplo": "Retorna o número da porta do lado remoto (servidor/cliente) do soquete."
    },
    {
    "objeto": 156,
    "função": "net.Socket.localAddress",
    "oQueFaz": "Propriedade que retorna o endereço IP do lado local do soquete.",
    "exemplo": "const localAddress = socket.localAddress;",
    "descricaoDoExemplo": "Retorna o endereço IP do lado local (servidor/cliente) do soquete."
    },
    {
    "objeto": 157,
    "função": "net.Socket.localPort",
    "oQueFaz": "Propriedade que retorna a porta do lado local do soquete.",
    "exemplo": "const localPort = socket.localPort;",
    "descricaoDoExemplo": "Retorna o número da porta do lado local (servidor/cliente) do soquete."
    },
    {
    "objeto": 158,
    "função": "net.Socket.connect()",
    "oQueFaz": "Conecta um soquete a um host e porta.",
    "exemplo": "socket.connect(options, connectListener);",
    "descricaoDoExemplo": "Conecta o soquete ao host e porta especificados e chama o listener de conexão quando a conexão é estabelecida."
    },
    {
    "objeto": 159,
    "função": "net.Socket.setEncoding()",
    "oQueFaz": "Define a codificação a ser usada para ler/gravar dados do/para o soquete.",
    "exemplo": "socket.setEncoding(encoding);",
    "descricaoDoExemplo": "Define a codificação a ser usada para ler/gravar dados do/para o soquete, onde a codificação pode ser 'utf8', 'ascii' ou 'binary'."
    },
    {
    "objeto": 160,
    "função": "net.Socket.write()",
    "oQueFaz": "Grava dados no soquete.",
    "exemplo": "socket.write(data, encoding, callback);",
    "descricaoDoExemplo": "Grava os dados fornecidos no soquete usando a codificação especificada e chama o callback quando a operação é concluída."
    },
    {
    "objeto": 161,
    "função": "net.Socket.end()",
    "oQueFaz": "Envia os dados pendentes no buffer de gravação e fecha o soquete.",
    "exemplo": "socket.end(data, encoding);",
    "descricaoDoExemplo": "Envia os dados pendentes no buffer de gravação e fecha o soquete após todos os dados terem sido gravados."
    },
    {
    "objeto": 162,
    "função": "net.Socket.pause()",
    "oQueFaz": "Pausa a leitura de dados do soquete.",
    "exemplo": "socket.pause();",
    "descricaoDoExemplo": "Pausa a leitura de dados do soquete. Os dados recebidos serão armazenados em um buffer interno até que a leitura seja retomada."
    },
    {
    "objeto": 163,
    "função": "net.Socket.resume()",
    "oQueFaz": "Retoma a leitura de dados do soquete.",
    "exemplo": "socket.resume();",
    "descricaoDoExemplo": "Retoma a leitura de dados do soquete após ter sido pausada."
    },
    {
    "objeto": 164,
    "função": "net.Socket.setTimeout()",
    "oQueFaz": "Define um limite de tempo de inatividade para o soquete.",
    "exemplo": "socket.setTimeout(timeout, callback);",
    "descricaoDoExemplo": "Define um limite de tempo de inatividade (em milissegundos) para o soquete. Se nenhum dado for recebido no período de tempo especificado, o callback de timeout será chamado."
    },
    {
    "objeto": 165,
    "função": "net.Socket.setNoDelay()",
    "oQueFaz": "Define a opção de não atraso para o soquete.",
    "exemplo": "socket.setNoDelay([noDelay]);",
    "descricaoDoExemplo": "Define a opção de não atraso para o soquete. Quando definida como true, os dados são enviados imediatamente ao chamar socket.write(), sem atrasos adicionais."
    },
    {
    "objeto": 166,
    "função": "net.Socket.setKeepAlive()",
    "oQueFaz": "Define a opção de manter a conexão viva para o soquete.",
    "exemplo": "socket.setKeepAlive([enable], [initialDelay]);",
    "descricaoDoExemplo": "Define a opção de manter a conexão viva para o soquete. Quando habilitada, o soquete tentará manter a conexão aberta enviando sondagens periódicas."
    },
    {
    "objeto": 167,
    "função": "net.Socket.address()",
    "oQueFaz": "Retorna o endereço local e porta associados ao soquete.",
    "exemplo": "const socketAddress = socket.address();",
    "descricaoDoExemplo": "Retorna um objeto que contém o endereço local e a porta associados ao soquete."
    },
    {
    "objeto": 168,
    "função": "net.Socket.unref()",
    "oQueFaz": "Permite que o soquete não mantenha o programa em execução.",
    "exemplo": "socket.unref();",
    "descricaoDoExemplo": "Permite que o soquete seja desacoplado do ciclo de vida do programa. Se todos os soquetes não-ref são encerrados, o programa pode ser encerrado mesmo se ainda houver outros eventos pendentes."
    },
    {
    "objeto": 169,
    "função": "net.Socket.ref()",
    "oQueFaz": "Reverte a ação de unref(), permitindo que o soquete mantenha o programa em execução.",
    "exemplo": "socket.ref();",
    "descricaoDoExemplo": "Reverte a ação de unref(), permitindo que o soquete mantenha o ciclo de vida do programa mesmo se outros eventos estiverem pendentes."
    },
    {
    "objeto": 170,
    "função": "net.Socket.destroy()",
    "oQueFaz": "Fecha o soquete de forma imediata e destrói qualquer dado não lido no buffer.",
    "exemplo": "socket.destroy();",
    "descricaoDoExemplo": "Fecha o soquete de forma imediata e destrói qualquer dado não lido no buffer de entrada."
    },
    {
    "objeto": 171,
    "função": "net.Socket.destroySoon()",
    "oQueFaz": "Fecha o soquete após todos os dados pendentes terem sido gravados.",
    "exemplo": "socket.destroySoon();",
    "descricaoDoExemplo": "Fecha o soquete após todos os dados pendentes no buffer de gravação terem sido gravados. Nenhum dado adicional será gravado após chamar essa função."
    },
    {
    "objeto": 172,
    "função": "net.Server.listen()",
    "oQueFaz": "Inicia o servidor para escutar as conexões.",
    "exemplo": "server.listen(options, [callback]);",
    "descricaoDoExemplo": "Inicia o servidor para escutar as conexões com base nas opções fornecidas e chama o callback quando o servidor começar a ouvir."
    },
    {
    "objeto": 173,
    "função": "net.Server.close()",
    "oQueFaz": "Fecha o servidor, interrompendo todas as conexões ativas.",
    "exemplo": "server.close([callback]);",
    "descricaoDoExemplo": "Fecha o servidor, interrompendo todas as conexões ativas. Chama o callback quando o servidor é totalmente encerrado."
    },
    {
    "objeto": 174,
    "função": "net.Server.maxConnections",
    "oQueFaz": "Propriedade que define o número máximo de conexões simultâneas permitidas.",
    "exemplo": "server.maxConnections = n;",
    "descricaoDoExemplo": "Define o número máximo de conexões simultâneas permitidas para o servidor."
    },
    {
    "objeto": 175,
    "função": "net.Server.connections",
    "oQueFaz": "Propriedade que retorna o número de conexões ativas atualmente.",
    "exemplo": "const activeConnections = server.connections;",
    "descricaoDoExemplo": "Retorna o número de conexões ativas atualmente no servidor."
    },
    {
    "objeto": 176,
    "função": "net.Server.address()",
    "oQueFaz": "Retorna o endereço IP e a porta em que o servidor está ouvindo.",
    "exemplo": "const serverAddress = server.address();",
    "descricaoDoExemplo": "Retorna um objeto que contém o endereço IP e a porta em que o servidor está ouvindo."
    },
    {
    "objeto": 177,
    "função": "readline.createInterface()",
    "oQueFaz": "Cria uma interface de leitura para entrada/saída de linha de comando.",
    "exemplo": "const rl = readline.createInterface(options);",
    "descricaoDoExemplo": "Cria uma interface de leitura para entrada/saída de linha de comando com base nas opções fornecidas."
    },
    {
    "objeto": 178,
    "função": "readline.Interface.question()",
    "oQueFaz": "Exibe uma pergunta para o usuário e aguarda a entrada.",
    "exemplo": "rl.question(query, callback);",
    "descricaoDoExemplo": "Exibe a pergunta especificada para o usuário e chama o callback com a resposta fornecida pelo usuário."
    },
    {
    "objeto": 179,
    "função": "readline.Interface.close()",
    "oQueFaz": "Fecha a interface de leitura.",
    "exemplo": "rl.close();",
    "descricaoDoExemplo": "Fecha a interface de leitura, liberando os recursos associados."
    },
    {
    "objeto": 180,
    "função": "readline.Interface.pause()",
    "oQueFaz": "Pausa a leitura de entrada.",
    "exemplo": "rl.pause();",
    "descricaoDoExemplo": "Pausa a leitura de entrada da interface. Nenhuma chamada de callback será feita enquanto a leitura estiver pausada."
    },
    {
    "objeto": 181,
    "função": "readline.Interface.resume()",
    "oQueFaz": "Retoma a leitura de entrada pausada.",
    "exemplo": "rl.resume();",
    "descricaoDoExemplo": "Retoma a leitura de entrada pausada da interface."
    },
    {
    "objeto": 182,
    "função": "readline.Interface.setPrompt()",
    "oQueFaz": "Define o prompt exibido para o usuário.",
    "exemplo": "rl.setPrompt(prompt);",
    "descricaoDoExemplo": "Define o prompt exibido para o usuário antes de esperar pela entrada."
    },
    {
    "objeto": 183,
    "função": "readline.Interface.prompt()",
    "oQueFaz": "Exibe o prompt para o usuário.",
    "exemplo": "rl.prompt();",
    "descricaoDoExemplo": "Exibe o prompt para o usuário, aguardando a entrada."
    },
    {
      "objeto": 184,
      "função": "readline.Interface.write()",
      "oQueFaz": "Escreve dados na saída da interface de leitura.",
      "exemplo": "rl.write(data, [key]);",
      "descricaoDoExemplo": "Escreve os dados fornecidos na saída da interface de leitura, exibindo-os para o usuário."
      },
      {
      "objeto": 185,
      "função": "stream.Readable.pause()",
      "oQueFaz": "Pausa a leitura de um fluxo legível.",
      "exemplo": "readable.pause();",
      "descricaoDoExemplo": "Pausa a leitura de um fluxo legível. Os eventos 'data' não serão mais emitidos até que o fluxo seja retomado."
      },
      {
      "objeto": 186,
      "função": "stream.Readable.resume()",
      "oQueFaz": "Retoma a leitura de um fluxo legível pausado.",
      "exemplo": "readable.resume();",
      "descricaoDoExemplo": "Retoma a leitura de um fluxo legível pausado, fazendo com que os eventos 'data' voltem a ser emitidos."
      },
      {
      "objeto": 187,
      "função": "stream.Readable.pipe()",
      "oQueFaz": "Encadeia a saída de um fluxo legível para a entrada de um fluxo gravável.",
      "exemplo": "readable.pipe(writable);",
      "descricaoDoExemplo": "Encadeia a saída de um fluxo legível para a entrada de um fluxo gravável. Os dados lidos do fluxo legível são gravados automaticamente no fluxo gravável."
      },
      {
      "objeto": 188,
      "função": "stream.Readable.unpipe()",
      "oQueFaz": "Remove a conexão entre um fluxo legível e um fluxo gravável anteriormente estabelecida pela função 'pipe()'.",
      "exemplo": "readable.unpipe([writable]);",
      "descricaoDoExemplo": "Remove a conexão entre um fluxo legível e um fluxo gravável anteriormente estabelecida pela função 'pipe()'. Se nenhum fluxo gravável for fornecido, todos os fluxos graváveis ​​serão desvinculados."
      },
      {
      "objeto": 189,
      "função": "stream.Readable.push()",
      "oQueFaz": "Empurra dados para o buffer interno de um fluxo legível.",
      "exemplo": "readable.push(chunk, [encoding]);",
      "descricaoDoExemplo": "Empurra os dados fornecidos para o buffer interno de um fluxo legível. Esses dados podem ser lidos posteriormente através de eventos 'data'."
      },
      {
      "objeto": 190,
      "função": "stream.Readable.unshift()",
      "oQueFaz": "Insere dados no início do buffer interno de um fluxo legível.",
      "exemplo": "readable.unshift(chunk);",
      "descricaoDoExemplo": "Insere os dados fornecidos no início do buffer interno de um fluxo legível. Esses dados serão lidos primeiro antes de qualquer outro dado no buffer interno."
      },
      {
      "objeto": 191,
      "função": "stream.Writable.write()",
      "oQueFaz": "Escreve dados em um fluxo gravável.",
      "exemplo": "writable.write(chunk, [encoding], [callback]);",
      "descricaoDoExemplo": "Escreve os dados fornecidos em um fluxo gravável. Os dados podem ser uma string ou um buffer. Opcionalmente, um encoding pode ser especificado para strings. Um callback pode ser fornecido para ser chamado quando a escrita estiver concluída ou se ocorrer algum erro."
      },
      {
      "objeto": 192,
      "função": "stream.Writable.end()",
      "oQueFaz": "Finaliza a escrita em um fluxo gravável.",
      "exemplo": "writable.end([chunk], [encoding], [callback]);",
      "descricaoDoExemplo": "Finaliza a escrita em um fluxo gravável. Opcionalmente, um último chunk de dados pode ser fornecido para ser escrito antes do encerramento. Um encoding também pode ser especificado para strings. Um callback pode ser fornecido para ser chamado quando a escrita e o encerramento estiverem concluídos ou se ocorrer algum erro."
      },
      {
      "objeto": 193,
      "função": "stream.Writable.cork()",
      "oQueFaz": "Ativa o modo de acúmulo de gravação em um fluxo gravável.",
      "exemplo": "writable.cork();",
      "descricaoDoExemplo": "Ativa o modo de acúmulo de gravação em um fluxo gravável. Isso permite que várias chamadas de 'write()' sejam agrupadas e gravadas em lote, melhorando a eficiência de gravação."
      },
      {
      "objeto": 194,
      "função": "stream.Writable.uncork()",
      "oQueFaz": "Desativa o modo de acúmulo de gravação em um fluxo gravável.",
      "exemplo": "writable.uncork();",
      "descricaoDoExemplo": "Desativa o modo de acúmulo de gravação em um fluxo gravável. Isso faz com que os dados acumulados sejam gravados imediatamente."
      },
      {
      "objeto": 195,
      "função": "stream.Writable.setDefaultEncoding()",
      "oQueFaz": "Define o encoding padrão para um fluxo gravável.",
      "exemplo": "writable.setDefaultEncoding(encoding);",
      "descricaoDoExemplo": "Define o encoding padrão a ser usado ao gravar strings em um fluxo gravável. Isso permite que o encoding seja inferido ao gravar strings."
      },
      {
      "objeto": 196,
      "função": "stream.Writable.destroy()",
      "oQueFaz": "Destroi um fluxo gravável.",
      "exemplo": "writable.destroy([error]);",
      "descricaoDoExemplo": "Destroi um fluxo gravável, emitindo o evento 'close'. Um erro opcional pode ser fornecido para ser passado para o evento 'error'."
      },
      {
      "objeto": 197,
      "função": "assert.ok()",
      "oQueFaz": "Verifica se o valor fornecido é verdadeiro.",
      "exemplo": "assert.ok(value, [message]);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é verdadeiro. Se não for, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 198,
      "função": "assert.strictEqual()",
      "oQueFaz": "Verifica se dois valores são estritamente iguais.",
      "exemplo": "assert.strictEqual(actual, expected, [message]);",
      "descricaoDoExemplo": "Verifica se o valor atual é estritamente igual ao valor esperado. Se não for, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 199,
      "função": "assert.deepStrictEqual()",
      "oQueFaz": "Verifica se dois valores são estritamente iguais, comparando recursivamente seus membros.",
      "exemplo": "assert.deepStrictEqual(actual, expected, [message]);",
      "descricaoDoExemplo": "Verifica se o valor atual é estritamente igual ao valor esperado, comparando recursivamente seus membros. Se não for, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 200,
      "função": "assert.notStrictEqual()",
      "oQueFaz": "Verifica se dois valores não são estritamente iguais.",
      "exemplo": "assert.notStrictEqual(actual, expected, [message]);",
      "descricaoDoExemplo": "Verifica se o valor atual não é estritamente igual ao valor esperado. Se forem estritamente iguais, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 201,
      "função": "assert.deepEqual()",
      "oQueFaz": "Verifica se dois valores são iguais, comparando recursivamente seus membros.",
      "exemplo": "assert.deepEqual(actual, expected, [message]);",
      "descricaoDoExemplo": "Verifica se o valor atual é igual ao valor esperado, comparando recursivamente seus membros. Se não for, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 202,
      "função": "assert.notDeepEqual()",
      "oQueFaz": "Verifica se dois valores não são iguais, comparando recursivamente seus membros.",
      "exemplo": "assert.notDeepEqual(actual, expected, [message]);",
      "descricaoDoExemplo": "Verifica se o valor atual não é igual ao valor esperado, comparando recursivamente seus membros. Se forem iguais, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 203,
      "função": "assert.throws()",
      "oQueFaz": "Verifica se a função fornecida lança uma exceção.",
      "exemplo": "assert.throws(block, [error], [message]);",
      "descricaoDoExemplo": "Verifica se a função fornecida lança uma exceção. Se não lançar, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 204,
      "função": "assert.doesNotThrow()",
      "oQueFaz": "Verifica se a função fornecida não lança uma exceção.",
      "exemplo": "assert.doesNotThrow(block, [message]);",
      "descricaoDoExemplo": "Verifica se a função fornecida não lança uma exceção. Se lançar, uma exceção é lançada com uma mensagem opcional."
      },
      {
      "objeto": 205,
      "função": "assert.fail()",
      "oQueFaz": "Lança uma exceção com a mensagem fornecida.",
      "exemplo": "assert.fail([message]);",
      "descricaoDoExemplo": "Lança uma exceção com a mensagem fornecida. Esta função é usada para indicar que um teste falhou de maneira forçada."
      },
      {
      "objeto": 206,
      "função": "cluster.worker.id",
      "oQueFaz": "O ID exclusivo do processo do trabalhador.",
      "exemplo": "console.log(cluster.worker.id);",
      "descricaoDoExemplo": "Exibe o ID exclusivo do processo do trabalhador atual."
      },
      {
      "objeto": 207,
      "função": "cluster.worker.process",
      "oQueFaz": "A referência para o objeto de processo do trabalhador.",
      "exemplo": "console.log(cluster.worker.process);",
      "descricaoDoExemplo": "Exibe a referência para o objeto de processo associado ao trabalhador atual."
      },
      {
      "objeto": 208,
      "função": "cluster.worker.isConnected()",
      "oQueFaz": "Verifica se o trabalhador está conectado ao processo mestre.",
      "exemplo": "if (cluster.worker.isConnected()) { ... }",
      "descricaoDoExemplo": "Verifica se o trabalhador está atualmente conectado ao processo mestre. Retorna true se estiver conectado, caso contrário, retorna false."
      },
      {
      "objeto": 209,
      "função": "cluster.worker.isDead()",
      "oQueFaz": "Verifica se o trabalhador foi encerrado.",
      "exemplo": "if (cluster.worker.isDead()) { ... }",
      "descricaoDoExemplo": "Verifica se o trabalhador foi encerrado. Retorna true se estiver encerrado, caso contrário, retorna false."
      },
      {
      "objeto": 210,
      "função": "cluster.worker.send()",
      "oQueFaz": "Envia uma mensagem para o processo mestre.",
      "exemplo": "cluster.worker.send(message, [sendHandle], [callback]);",
      "descricaoDoExemplo": "Envia uma mensagem para o processo mestre. A mensagem pode ser qualquer valor serializável. Um identificador de envio opcional pode ser fornecido para especificar um canal de envio específico. Um callback também pode ser fornecido para ser chamado após o envio da mensagem."
      },
      {
      "objeto": 211,
      "função": "cluster.worker.disconnect()",
      "oQueFaz": "Desconecta o trabalhador do processo mestre.",
      "exemplo": "cluster.worker.disconnect();",
      "descricaoDoExemplo": "Desconecta o trabalhador do processo mestre. Depois de desconectado, o trabalhador não receberá mais mensagens nem novos trabalhos."
      },
      {
      "objeto": 212,
      "função": "cluster.worker.kill()",
      "oQueFaz": "Encerra o processo do trabalhador.",
      "exemplo": "cluster.worker.kill([signal]);",
      "descricaoDoExemplo": "Encerra o processo do trabalhador. Pode ser fornecido um sinal opcional para especificar o sinal a ser enviado para encerrar o processo."
      },
      {
      "objeto": 213,
      "função": "cluster.worker.suicide",
      "oQueFaz": "Indica se o trabalhador terminou por conta própria.",
      "exemplo": "if (cluster.worker.suicide) { ... }",
      "descricaoDoExemplo": "Indica se o trabalhador terminou por conta própria. Retorna true se o trabalhador terminou por suicídio, ou seja, chamando o método 'disconnect()', caso contrário, retorna false."
      },
      {
      "objeto": 214,
      "função": "cluster.worker.on()",
      "oQueFaz": "Registra um manipulador de evento para um evento específico.",
      "exemplo": "cluster.worker.on(event, listener);",
      "descricaoDoExemplo": "Registra um manipulador de evento para um evento específico. O manipulador de evento será chamado sempre que o evento for disparado."
      },
      {
      "objeto": 215,
      "função": "cluster.worker.removeListener()",
      "oQueFaz": "Remove um manipulador de evento para um evento específico.",
      "exemplo": "cluster.worker.removeListener(event, listener);",
      "descricaoDoExemplo": "Remove um manipulador de evento para um evento específico. O manipulador de evento deixará de ser chamado quando o evento for disparado."
      },
      {
      "objeto": 216,
      "função": "cluster.worker.removeAllListeners()",
      "oQueFaz": "Remove todos os manipuladores de eventos para um evento específico.",
      "exemplo": "cluster.worker.removeAllListeners([event]);",
      "descricaoDoExemplo": "Remove todos os manipuladores de eventos registrados para um evento específico. Se nenhum evento for fornecido, todos os manipuladores de eventos serão removidos para todos os eventos."
      },
      {
      "objeto": 217,
      "função": "fs.copyFileSync()",
      "oQueFaz": "Copia um arquivo para um destino específico de forma síncrona.",
      "exemplo": "fs.copyFileSync(srcPath, destPath);",
      "descricaoDoExemplo": "Copia o arquivo em 'srcPath' para o destino especificado em 'destPath'. A operação é realizada de forma síncrona, o que significa que o método bloqueia até que a cópia seja concluída."
      },
      {
      "objeto": 218,
      "função": "stream.Writable.destroySoon()",
      "oQueFaz": "Inicia o encerramento do fluxo gravável, permitindo que gravações finais sejam concluídas.",
      "exemplo": "writable.destroySoon();",
      "descricaoDoExemplo": "Inicia o encerramento do fluxo gravável, permitindo que gravações finais sejam concluídas antes do encerramento. Após a chamada a este método, não serão mais aceitas novas gravações."
      },
      {
      "objeto": 219,
      "função": "stream.Transform._transform()",
      "oQueFaz": "Método interno para transformar dados em um fluxo transformável.",
      "exemplo": "transform._transform(chunk, encoding, callback);",
      "descricaoDoExemplo": "Método interno usado para transformar os dados em um fluxo transformável. O método recebe um 'chunk' de dados para transformação, o 'encoding' opcional que especifica a codificação dos dados e um 'callback' para sinalizar a conclusão da transformação."
      },
      {
      "objeto": 220,
      "função": "stream.Transform._flush()",
      "oQueFaz": "Método interno chamado quando não há mais dados para serem transformados.",
      "exemplo": "transform._flush(callback);",
      "descricaoDoExemplo": "Método interno chamado quando não há mais dados para serem transformados no fluxo transformável. Pode ser usado para realizar tarefas finais de transformação e chamar o 'callback' para sinalizar a conclusão."
      },
      {
      "objeto": 221,
      "função": "stream.PassThrough._transform()",
      "oQueFaz": "Método interno para passar dados diretamente para o fluxo de saída.",
      "exemplo": "passThrough._transform(chunk, encoding, callback);",
      "descricaoDoExemplo": "Método interno usado para passar os dados diretamente para o fluxo de saída sem realizar transformações. O método recebe um 'chunk' de dados para passar adiante, o 'encoding' opcional que especifica a codificação dos dados e um 'callback' para sinalizar a conclusão."
      },
      {
      "objeto": 222,
      "função": "stream.PassThrough._flush()",
      "oQueFaz": "Método interno chamado quando não há mais dados para serem passados diretamente para o fluxo de saída.",
      "exemplo": "passThrough._flush(callback);",
      "descricaoDoExemplo": "Método interno chamado quando não há mais dados para serem passados diretamente para o fluxo de saída do fluxo 'PassThrough'. Pode ser usado para realizar tarefas finais e chamar o 'callback' para sinalizar a conclusão."
      },
      {
      "objeto": 223,
      "função": "util.debug()",
      "oQueFaz": "Imprime uma mensagem de depuração no console.",
      "exemplo": "util.debug(string);",
      "descricaoDoExemplo": "Imprime uma mensagem de depuração no console. A mensagem fornecida será prefixada com a palavra 'DeprecationWarning:' e exibida no console de depuração."
      },
      {
      "objeto": 224,
      "função": "util.error()",
      "oQueFaz": "Imprime uma mensagem de erro no console.",
      "exemplo": "util.error([...args]);",
      "descricaoDoExemplo": "Imprime uma mensagem de erro no console. As mensagens fornecidas serão prefixadas com a palavra 'Error:' e exibidas no console de erros."
      },
      {
      "objeto": 225,
      "função": "util.puts()",
      "oQueFaz": "Imprime uma string seguida de uma nova linha no console.",
      "exemplo": "util.puts([...args]);",
      "descricaoDoExemplo": "Imprime uma string seguida de uma nova linha no console. As strings fornecidas serão exibidas no console, cada uma em uma linha separada."
      },
      {
      "objeto": 226,
      "função": "util.print()",
      "oQueFaz": "Imprime uma string no console.",
      "exemplo": "util.print([...args]);",
      "descricaoDoExemplo": "Imprime uma string no console. As strings fornecidas serão exibidas no console sem uma nova linha adicionada."
      },
      {
      "objeto": 227,
      "função": "util.log()",
      "oQueFaz": "Imprime uma string formatada com uma data no console.",
      "exemplo": "util.log([...args]);",
      "descricaoDoExemplo": "Imprime uma string formatada com uma data no console. A string fornecida será prefixada com a data e hora atual e exibida no console."
      },
      {
      "objeto": 228,
      "função": "util.inspect()",
      "oQueFaz": "Retorna uma representação em formato de string do objeto especificado.",
      "exemplo": "util.inspect(object, [options]);",
      "descricaoDoExemplo": "Retorna uma representação em formato de string do objeto especificado. É útil para depuração e exibição de objetos complexos. As opções podem ser fornecidas para controlar o formato da string de saída."
      },
      {
      "objeto": 229,
      "função": "util.isArray()",
      "oQueFaz": "Verifica se o valor fornecido é um Array.",
      "exemplo": "util.isArray(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Array. Retorna true se for um Array, caso contrário, retorna false."
      },
      {
      "objeto": 230,
      "função": "util.isBoolean()",
      "oQueFaz": "Verifica se o valor fornecido é um Boolean.",
      "exemplo": "util.isBoolean(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Boolean. Retorna true se for um Boolean, caso contrário, retorna false."
      },
      {
      "objeto": 231,
      "função": "util.isNull()",
      "oQueFaz": "Verifica se o valor fornecido é null.",
      "exemplo": "util.isNull(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é null. Retorna true se for null, caso contrário, retorna false."
      },
      {
      "objeto": 232,
      "função": "util.isNullOrUndefined()",
      "oQueFaz": "Verifica se o valor fornecido é null ou undefined.",
      "exemplo": "util.isNullOrUndefined(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é null ou undefined. Retorna true se for null ou undefined, caso contrário, retorna false."
      },
      {
      "objeto": 233,
      "função": "util.isNumber()",
      "oQueFaz": "Verifica se o valor fornecido é um Number.",
      "exemplo": "util.isNumber(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Number. Retorna true se for um Number, caso contrário, retorna false."
      },
      {
      "objeto": 234,
      "função": "util.isString()",
      "oQueFaz": "Verifica se o valor fornecido é uma String.",
      "exemplo": "util.isString(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é uma String. Retorna true se for uma String, caso contrário, retorna false."
      },
      {
      "objeto": 235,
      "função": "util.isSymbol()",
      "oQueFaz": "Verifica se o valor fornecido é um Symbol.",
      "exemplo": "util.isSymbol(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Symbol. Retorna true se for um Symbol, caso contrário, retorna false."
      },
      {
      "objeto": 236,
      "função": "util.isUndefined()",
      "oQueFaz": "Verifica se o valor fornecido é undefined.",
      "exemplo": "util.isUndefined(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é undefined. Retorna true se for undefined, caso contrário, retorna false."
      },
      {
      "objeto": 237,
      "função": "util.isRegExp()",
      "oQueFaz": "Verifica se o valor fornecido é uma expressão regular (RegExp).",
      "exemplo": "util.isRegExp(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é uma expressão regular (RegExp). Retorna true se for uma RegExp, caso contrário, retorna false."
      },
      {
      "objeto": 238,
      "função": "util.isObject()",
      "oQueFaz": "Verifica se o valor fornecido é um Object (excluindo null).",
      "exemplo": "util.isObject(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Object (excluindo null). Retorna true se for um Object, caso contrário, retorna false."
      },
      {
      "objeto": 239,
      "função": "util.isDate()",
      "oQueFaz": "Verifica se o valor fornecido é um Date.",
      "exemplo": "util.isDate(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Date. Retorna true se for um Date, caso contrário, retorna false."
      },
      {
      "objeto": 240,
      "função": "util.isError()",
      "oQueFaz": "Verifica se o valor fornecido é um Error.",
      "exemplo": "util.isError(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é um Error. Retorna true se for um Error, caso contrário, retorna false."
      },
      {
      "objeto": 241,
      "função": "util.isFunction()",
      "oQueFaz": "Verifica se o valor fornecido é uma Function.",
      "exemplo": "util.isFunction(value);",
      "descricaoDoExemplo": "Verifica se o valor fornecido é uma Function. Retorna true se for uma Function, caso contrário, retorna false."
      },
      {
      "objeto": 242,
      "função": "util.inherits()",
      "oQueFaz": "Habilita a herança de protótipo entre construtores.",
      "exemplo": "util.inherits(constructor, superConstructor);",
      "descricaoDoExemplo": "Habilita a herança de protótipo entre construtores, definindo o protótipo de 'constructor' como uma instância de 'superConstructor'. Isso permite que 'constructor' herde propriedades e métodos de 'superConstructor'."
      },
      {
      "objeto": 243,
      "função": "util.format()",
      "oQueFaz": "Retorna uma string formatada usando substituição de espaços reservados.",
      "exemplo": "util.format(format[, ...args]);",
      "descricaoDoExemplo": "Retorna uma string formatada usando substituição de espaços reservados. Os espaços reservados são indicados por '%s' na string de formato. Os argumentos fornecidos são inseridos nos espaços reservados na ordem em que são fornecidos."
      },
      {
      "objeto": 244,
      "função": "util.deprecate()",
      "oQueFaz": "Retorna uma versão com aviso de depreciação da função fornecida.",
      "exemplo": "util.deprecate(fn, message);",
      "descricaoDoExemplo": "Retorna uma versão com aviso de depreciação da função fornecida. Quando a função é chamada, ela emite uma mensagem de aviso contendo o 'message'. Isso pode ser usado para marcar funções que estão obsoletas e devem ser substituídas no futuro."
      },
      {
      "objeto": 245,
      "função": "process.arch",
      "oQueFaz": "Uma string que indica a arquitetura do processador.",
      "exemplo": "console.log(process.arch);",
      "descricaoDoExemplo": "A propriedade 'process.arch' retorna uma string que indica a arquitetura do processador. Por exemplo, 'x64' para uma arquitetura de 64 bits."
      },
      {
      "objeto": 246,
      "função": "process.argv",
      "oQueFaz": "Um array contendo os argumentos de linha de comando passados quando o processo foi iniciado.",
      "exemplo": "console.log(process.argv);",
      "descricaoDoExemplo": "A propriedade 'process.argv' retorna um array contendo os argumentos de linha de comando passados quando o processo foi iniciado. O primeiro elemento do array é o caminho do executável do Node.js e o segundo elemento é o caminho do script em execução. Os argumentos adicionais são fornecidos a partir do terceiro elemento em diante."
      },
      {
      "objeto": 247,
      "função": "process.chdir()",
      "oQueFaz": "Muda o diretório de trabalho atual do processo.",
      "exemplo": "process.chdir(directory);",
      "descricaoDoExemplo": "O método 'process.chdir()' muda o diretório de trabalho atual do processo para o diretório especificado. Isso afeta o diretório em que o processo procura por arquivos e onde os arquivos são criados por padrão."
      },
      {
      "objeto": 248,
      "função": "process.cwd()",
      "oQueFaz": "Retorna o diretório de trabalho atual do processo.",
      "exemplo": "console.log(process.cwd());",
      "descricaoDoExemplo": "O método 'process.cwd()' retorna o diretório de trabalho atual do processo, ou seja, o diretório em que o processo está sendo executado."
      },
      {
      "objeto": 249,
      "função": "process.cpuUsage()",
      "oQueFaz": "Retorna os tempos de CPU utilizados pelo processo.",
      "exemplo": "console.log(process.cpuUsage());",
      "descricaoDoExemplo": "O método 'process.cpuUsage()' retorna um objeto com informações sobre os tempos de CPU utilizados pelo processo. O objeto possui duas propriedades: 'user' e 'system', que representam os tempos de CPU do usuário e do sistema, respectivamente."
      },
      {
      "objeto": 250,
      "função": "process.env",
      "oQueFaz": "Um objeto contendo as variáveis de ambiente do processo.",
      "exemplo": "console.log(process.env);",
      "descricaoDoExemplo": "A propriedade 'process.env' é um objeto contendo as variáveis de ambiente do processo. As variáveis de ambiente são pares chave-valor que podem ser usados para configurar o ambiente de execução do processo."
      },
      {
      "objeto": 251,
      "função": "process.execArgv",
      "oQueFaz": "Um array contendo as opções de linha de comando específicas do Node.js.",
      "exemplo": "console.log(process.execArgv);",
      "descricaoDoExemplo": "A propriedade 'process.execArgv' é um array contendo as opções de linha de comando específicas do Node.js. Essas opções são fornecidas antes do nome do arquivo script em execução e podem ser usadas para configurar o ambiente de execução do Node.js."
      },
      {
      "objeto": 252,
      "função": "process.exit()",
      "oQueFaz": "Encerra o processo com um código de saída especificado.",
      "exemplo": "process.exit([code]);",
      "descricaoDoExemplo": "O método 'process.exit()' encerra o processo com um código de saída especificado. Se nenhum código de saída for fornecido, o processo será encerrado com código 0, indicando um encerramento bem-sucedido."
      },
      {
      "objeto": 253,
      "função": "process.exitCode",
      "oQueFaz": "Um número que representa o código de saída do processo.",
      "exemplo": "console.log(process.exitCode);",
      "descricaoDoExemplo": "A propriedade 'process.exitCode' é um número que representa o código de saída do processo. Por padrão, o valor é undefined. No entanto, se o processo for encerrado usando 'process.exit()', o valor será definido para o código de saída fornecido."
      },
      {
      "objeto": 254,
      "função": "process.hrtime()",
      "oQueFaz": "Retorna o tempo de CPU atual em nanossegundos.",
      "exemplo": "console.log(process.hrtime());",
      "descricaoDoExemplo": "O método 'process.hrtime()' retorna o tempo de CPU atual em nanossegundos. É útil para medir o tempo de execução de trechos de código com alta precisão."
      },
      {
      "objeto": 255,
      "função": "process.kill()",
      "oQueFaz": "Envia um sinal para um processo.",
      "exemplo": "process.kill(pid[, signal]);",
      "descricaoDoExemplo": "O método 'process.kill()' envia um sinal para um processo especificado pelo ID do processo (PID). O sinal pode ser especificado como uma string ou como um número. Se nenhum sinal for fornecido, o sinal padrão é 'SIGTERM'."
      },
      {
      "objeto": 256,
      "função": "process.memoryUsage()",
      "oQueFaz": "Retorna informações sobre o uso de memória do processo.",
      "exemplo": "console.log(process.memoryUsage());",
      "descricaoDoExemplo": "O método 'process.memoryUsage()' retorna um objeto com informações sobre o uso de memória do processo. O objeto possui várias propriedades, incluindo 'rss', 'heapTotal', 'heapUsed', entre outras, que representam diferentes métricas de uso de memória."
      },
      {
      "objeto": 257,
      "função": "process.nextTick()",
      "oQueFaz": "Agenda uma função para ser executada na próxima iteração do ciclo de eventos.",
      "exemplo": "process.nextTick(callback[, ...args]);",
      "descricaoDoExemplo": "O método 'process.nextTick()' agenda uma função para ser executada na próxima iteração do ciclo de eventos do Node.js. A função é colocada em uma fila especial e será chamada antes de qualquer outra operação de E/S ou temporizador."
      },
      {
      "objeto": 258,
      "função": "process.pid",
      "oQueFaz": "O ID do processo do Node.js.",
      "exemplo": "console.log(process.pid);",
      "descricaoDoExemplo": "A propriedade 'process.pid' é o ID do processo do Node.js. O ID do processo é um identificador exclusivo atribuído a cada processo em um sistema operacional."
      },
      {
      "objeto": 259,
      "função": "process.platform",
      "oQueFaz": "Uma string que indica a plataforma em que o processo está sendo executado.",
      "exemplo": "console.log(process.platform);",
      "descricaoDoExemplo": "A propriedade 'process.platform' retorna uma string que indica a plataforma em que o processo está sendo executado. Por exemplo, 'win32' para o Windows, 'linux' para o Linux, 'darwin' para o macOS, etc."
      },
      {
      "objeto": 260,
      "função": "process.ppid",
      "oQueFaz": "O ID do processo pai do Node.js.",
      "exemplo": "console.log(process.ppid);",
      "descricaoDoExemplo": "A propriedade 'process.ppid' é o ID do processo pai do Node.js. O processo pai é o processo que criou o processo do Node.js."
      },
      {
      "objeto": 261,
      "função": "process.resourceUsage()",
      "oQueFaz": "Retorna informações sobre o uso de recursos do processo.",
      "exemplo": "console.log(process.resourceUsage());",
      "descricaoDoExemplo": "O método 'process.resourceUsage()' retorna um objeto com informações sobre o uso de recursos do processo. O objeto possui várias propriedades, incluindo 'userCPUTime', 'systemCPUTime', 'maxRSS', entre outras, que representam diferentes métricas de uso de recursos."
      },
      {
      "objeto": 262,
      "função": "process.send()",
      "oQueFaz": "Envia uma mensagem para o processo pai ou filho através do canal de comunicação estabelecido entre eles.",
      "exemplo": "process.send(message[, sendHandle[, options]][, callback]);",
      "descricaoDoExemplo": "O método 'process.send()' envia uma mensagem para o processo pai ou filho através do canal de comunicação estabelecido entre eles. A mensagem pode ser qualquer valor serializável. Opcionalmente, um 'sendHandle' pode ser fornecido para enviar um soquete ou pipe juntamente com a mensagem."
      },
      {
      "objeto": 263,
      "função": "process.setegid()",
      "oQueFaz": "Define o ID efetivo do grupo para o processo.",
      "exemplo": "process.setegid(id);",
      "descricaoDoExemplo": "O método 'process.setegid()' define o ID efetivo do grupo para o processo. Essa função só está disponível em sistemas Unix-like."
      },
      {
      "objeto": 264,
      "função": "process.seteuid()",
      "oQueFaz": "Define o ID efetivo do usuário para o processo.",
      "exemplo": "process.seteuid(id);",
      "descricaoDoExemplo": "O método 'process.seteuid()' define o ID efetivo do usuário para o processo. Essa função só está disponível em sistemas Unix-like."
      },
      {
      "objeto": 265,
      "função": "process.setgid()",
      "oQueFaz": "Define o ID do grupo para o processo.",
      "exemplo": "process.setgid(id);",
      "descricaoDoExemplo": "O método 'process.setgid()' define o ID do grupo para o processo. Essa função só está disponível em sistemas Unix-like."
      },
      {
      "objeto": 266,
      "função": "process.setgroups()",
      "oQueFaz": "Define os IDs dos grupos suplementares para o processo.",
      "exemplo": "process.setgroups(groups);",
      "descricaoDoExemplo": "O método 'process.setgroups()' define os IDs dos grupos suplementares para o processo. Essa função só está disponível em sistemas Unix-like."
      },
      {
      "objeto": 267,
      "função": "process.setuid()",
      "oQueFaz": "Define o ID do usuário para o processo.",
      "exemplo": "process.setuid(id);",
      "descricaoDoExemplo": "O método 'process.setuid()' define o ID do usuário para o processo. Essa função só está disponível em sistemas Unix-like."
      },
      {
      "objeto": 268,
      "função": "process.stdin",
      "oQueFaz": "Um objeto stream que representa a entrada padrão (stdin) do processo.",
      "exemplo": "process.stdin.on('data', (data) => {\n console.log(Received data: ${data});\n});",
      "descricaoDoExemplo": "A propriedade 'process.stdin' é um objeto stream que representa a entrada padrão (stdin) do processo. Ele permite que você leia dados da entrada padrão do processo."
      },
      {
      "objeto": 269,
      "função": "process.stdout",
      "oQueFaz": "Um objeto stream que representa a saída padrão (stdout) do processo.",
      "exemplo": "process.stdout.write('Hello, world!');",
      "descricaoDoExemplo": "A propriedade 'process.stdout' é um objeto stream que representa a saída padrão (stdout) do processo. Ele permite que você escreva dados na saída padrão do processo."
      },
      {
      "objeto": 270,
      "função": "process.stderr",
      "oQueFaz": "Um objeto stream que representa a saída de erro padrão (stderr) do processo.",
      "exemplo": "process.stderr.write('Error occurred!');",
      "descricaoDoExemplo": "A propriedade 'process.stderr' é um objeto stream que representa a saída de erro padrão (stderr) do processo. Ele permite que você escreva mensagens de erro na saída de erro do processo."
      },
      {
      "objeto": 271,
      "função": "process.title",
      "oQueFaz": "O título do processo exibido em ferramentas de gerenciamento de processos.",
      "exemplo": "console.log(process.title);",
      "descricaoDoExemplo": "A propriedade 'process.title' é o título do processo exibido em ferramentas de gerenciamento de processos, como o Gerenciador de Tarefas no Windows ou o Monitor de Atividade no macOS."
      },
      {
      "objeto": 272,
      "função": "process.umask()",
      "oQueFaz": "Define ou retorna a máscara de permissões do processo.",
      "exemplo": "console.log(process.umask());",
      "descricaoDoExemplo": "O método 'process.umask()' é usado para definir ou retornar a máscara de permissões do processo. A máscara de permissões é usada para determinar as permissões padrão de criação de arquivos e diretórios para o processo."
      },
      {
      "objeto": 273,
      "função": "process.uptime()",
      "oQueFaz": "Retorna o tempo de execução do processo em segundos.",
      "exemplo": "console.log(process.uptime());",
      "descricaoDoExemplo": "O método 'process.uptime()' retorna o tempo de execução do processo em segundos. É útil para medir quanto tempo o processo tem sido executado desde o início."
      },
      {
      "objeto": 274,
      "função": "process.version",
      "oQueFaz": "A versão do Node.js.",
      "exemplo": "console.log(process.version);",
      "descricaoDoExemplo": "A propriedade 'process.version' é uma string que representa a versão do Node.js em uso."
      },
      {
      "objeto": 275,
      "função": "process.versions",
      "oQueFaz": "Um objeto que contém as versões das dependências do Node.js.",
      "exemplo": "console.log(process.versions);",
      "descricaoDoExemplo": "A propriedade 'process.versions' é um objeto que contém as versões das principais dependências do Node.js, incluindo o V8, o OpenSSL, o zlib, entre outras."
      },
      {
      "objeto": 276,
      "função": "process.release",
      "oQueFaz": "Um objeto que contém informações sobre a versão do Node.js em execução.",
      "exemplo": "console.log(process.release);",
      "descricaoDoExemplo": "A propriedade 'process.release' é um objeto que contém informações sobre a versão do Node.js em execução, como o número da versão, a data de lançamento, o V8, o OpenSSL, entre outras informações relevantes."
      },
      {
      "objeto": 277,
      "função": "process.domain",
      "oQueFaz": "O domínio atual para o contexto do processo.",
      "exemplo": "console.log(process.domain);",
      "descricaoDoExemplo": "A propriedade 'process.domain' é um objeto que representa o domínio atual para o contexto do processo. O domínio é um mecanismo para tratar exceções em um escopo específico e facilitar o rastreamento e a depuração de erros."
      },
      {
      "objeto": 278,
      "função": "process.setUncaughtExceptionCaptureCallback()",
      "oQueFaz": "Define uma função de retorno de chamada para capturar exceções não tratadas.",
      "exemplo": "process.setUncaughtExceptionCaptureCallback(callback);",
      "descricaoDoExemplo": "O método 'process.setUncaughtExceptionCaptureCallback()' define uma função de retorno de chamada para capturar exceções não tratadas. A função de retorno de chamada será chamada sempre que ocorrer uma exceção não tratada no processo."
      },
      {
      "objeto": 279,
      "função": "process.report.getReport()",
      "oQueFaz": "Obtém um relatório sobre o estado atual do processo.",
      "exemplo": "const report = process.report.getReport();\nconsole.log(report);",
      "descricaoDoExemplo": "O método 'process.report.getReport()' obtém um relatório sobre o estado atual do processo. O relatório contém informações sobre a CPU, a memória, os eventos de E/S, entre outras métricas relevantes."
      },
      {
      "objeto": 280,
      "função": "process.report.triggerReport()",
      "oQueFaz": "Gera um relatório sobre o estado atual do processo e grava-o em um arquivo.",
      "exemplo": "process.report.triggerReport();",
      "descricaoDoExemplo": "O método 'process.report.triggerReport()' gera um relatório sobre o estado atual do processo e grava-o em um arquivo. O arquivo de relatório pode ser útil para análise posterior ou para depurar problemas de desempenho."
      },
      {
      "objeto": 281,
      "função": "process.report.directory",
      "oQueFaz": "O diretório onde os relatórios são gravados.",
      "exemplo": "console.log(process.report.directory);",
      "descricaoDoExemplo": "A propriedade 'process.report.directory' é uma string que representa o diretório onde os relatórios gerados pelo método 'process.report.triggerReport()' são gravados. O diretório padrão é determinado pelo sistema operacional."
      },
      {
      "objeto": 282,
      "função": "process.report.reportOnFatalError",
      "oQueFaz": "Especifica se um relatório deve ser gerado quando ocorre um erro fatal no processo.",
      "exemplo": "process.report.reportOnFatalError = true;",
      "descricaoDoExemplo": "A propriedade 'process.report.reportOnFatalError' é um booleano que especifica se um relatório deve ser gerado quando ocorre um erro fatal no processo. O valor padrão é 'false'."
      },
      {
      "objeto": 283,
      "função": "process.report.reportOnSignal",
      "oQueFaz": "Especifica se um relatório deve ser gerado quando um sinal é recebido pelo processo.",
      "exemplo": "process.report.reportOnSignal = true;",
      "descricaoDoExemplo": "A propriedade 'process.report.reportOnSignal' é um booleano que especifica se um relatório deve ser gerado quando um sinal é recebido pelo processo. O valor padrão é 'false'."
      },
      {
      "objeto": 284,
      "função": "process.report.reportOnUncaughtException",
      "oQueFaz": "Especifica se um relatório deve ser gerado quando ocorre uma exceção não tratada no processo.",
      "exemplo": "process.report.reportOnUncaughtException = true;",
      "descricaoDoExemplo": "A propriedade 'process.report.reportOnUncaughtException' é um booleano que especifica se um relatório deve ser gerado quando ocorre uma exceção não tratada no processo. O valor padrão é 'false'."
      },
      {
        "objeto": 285,
        "função": "process.report.reportOnUnhandledPromiseRejection",
        "oQueFaz": "Especifica se um relatório deve ser gerado quando ocorre uma rejeição de promessa não tratada.",
        "exemplo": "process.report.reportOnUnhandledPromiseRejection = true;",
        "descricaoDoExemplo": "A propriedade 'process.report.reportOnUnhandledPromiseRejection' é um booleano que especifica se um relatório deve ser gerado quando ocorre uma rejeição de promessa não tratada no processo. O valor padrão é 'false'."
        },
        {
        "objeto": 286,
        "função": "process.report.signal",
        "oQueFaz": "Um evento emitido quando um sinal é recebido pelo processo.",
        "exemplo": "process.report.signal.on('SIGINT', () => {\n console.log('SIGINT received');\n});",
        "descricaoDoExemplo": "O evento 'process.report.signal' é emitido quando um sinal é recebido pelo processo. Você pode usar esse evento para executar ações específicas com base no sinal recebido, como interromper a execução do processo em resposta ao sinal SIGINT."
        },
        {
        "objeto": 287,
        "função": "process.report.uncaughtException",
        "oQueFaz": "Um evento emitido quando ocorre uma exceção não tratada no processo.",
        "exemplo": "process.report.uncaughtException.on((error) => {\n console.error('Uncaught exception:', error);\n});",
        "descricaoDoExemplo": "O evento 'process.report.uncaughtException' é emitido quando ocorre uma exceção não tratada no processo. Você pode usar esse evento para lidar com exceções não tratadas de forma personalizada, como registrar o erro ou realizar ações de limpeza antes de encerrar o processo."
        },
        {
        "objeto": 288,
        "função": "process.report.unhandledRejection",
        "oQueFaz": "Um evento emitido quando ocorre uma rejeição de promessa não tratada no processo.",
        "exemplo": "process.report.unhandledRejection.on((reason, promise) => {\n console.error('Unhandled promise rejection:', reason);\n});",
        "descricaoDoExemplo": "O evento 'process.report.unhandledRejection' é emitido quando ocorre uma rejeição de promessa não tratada no processo. Você pode usar esse evento para lidar com rejeições de promessas não tratadas de forma personalizada, como registrar o motivo da rejeição ou realizar ações de limpeza antes de encerrar o processo."
        },
        {
        "objeto": 289,
        "função": "process.on()",
        "oQueFaz": "Registra um manipulador de eventos para um determinado evento no processo.",
        "exemplo": "process.on('exit', (code) => {\n console.log('Process exited with code:', code);\n});",
        "descricaoDoExemplo": "O método 'process.on()' registra um manipulador de eventos para um determinado evento no processo. Você pode usar esse método para capturar eventos como 'exit', 'uncaughtException', 'unhandledRejection', entre outros, e executar código personalizado quando esses eventos ocorrerem."
        },
        {
        "objeto": 290,
        "função": "process.once()",
        "oQueFaz": "Registra um manipulador de eventos para um determinado evento no processo, que será executado apenas uma vez.",
        "exemplo": "process.once('SIGINT', () => {\n console.log('SIGINT received');\n});",
        "descricaoDoExemplo": "O método 'process.once()' registra um manipulador de eventos para um determinado evento no processo, que será executado apenas uma vez. Depois que o evento for acionado e o manipulador for executado, ele será removido automaticamente."
        },
        {
        "objeto": 291,
        "função": "process.removeListener()",
        "oQueFaz": "Remove um manipulador de eventos para um determinado evento no processo.",
        "exemplo": "const handler = () => {\n console.log('Event handler');\n};\nprocess.on('myEvent', handler);\n\n// Remover o manipulador\nprocess.removeListener('myEvent', handler);",
        "descricaoDoExemplo": "O método 'process.removeListener()' remove um manipulador de eventos registrado anteriormente para um determinado evento no processo. Você deve fornecer o mesmo manipulador que foi passado para o método 'process.on()' ao registrá-lo inicialmente."
        },
        {
        "objeto": 292,
        "função": "process.removeAllListeners()",
        "oQueFaz": "Remove todos os manipuladores de eventos para um determinado evento no processo.",
        "exemplo": "process.removeAllListeners('myEvent');",
        "descricaoDoExemplo": "O método 'process.removeAllListeners()' remove todos os manipuladores de eventos registrados anteriormente para um determinado evento no processo. Depois de chamar esse método, nenhum manipulador será acionado quando o evento ocorrer."
        },
        {
        "objeto": 293,
        "função": "process.prependListener()",
        "oQueFaz": "Registra um manipulador de eventos para um determinado evento no processo, que será executado antes de outros manipuladores registrados anteriormente.",
        "exemplo": "process.prependListener('myEvent', () => {\n console.log('Prepended event handler');\n});",
        "descricaoDoExemplo": "O método 'process.prependListener()' registra um manipulador de eventos para um determinado evento no processo, que será executado antes de outros manipuladores registrados anteriormente. Isso garante que o manipulador prependido seja chamado antes dos demais manipuladores para o evento especificado."
        },
        {
        "objeto": 294,
        "função": "process.prependOnceListener()",
        "oQueFaz": "Registra um manipulador de eventos para um determinado evento no processo, que será executado apenas uma vez e antes de outros manipuladores registrados anteriormente.",
        "exemplo": "process.prependOnceListener('myEvent', () => {\n console.log('Prepended once event handler');\n});",
        "descricaoDoExemplo": "O método 'process.prependOnceListener()' registra um manipulador de eventos para um determinado evento no processo, que será executado apenas uma vez e antes de outros manipuladores registrados anteriormente. Depois que o evento for acionado e o manipulador for executado, ele será removido automaticamente."
        },
        {
        "objeto": 295,
        "função": "process.emitWarning()",
        "oQueFaz": "Emite um aviso personalizado com uma mensagem e uma pilha de chamadas opcional.",
        "exemplo": "process.emitWarning('This is a custom warning', 'CustomWarning');",
        "descricaoDoExemplo": "O método 'process.emitWarning()' emite um aviso personalizado no processo. Você pode fornecer uma mensagem para o aviso e um tipo personalizado para distinguir o aviso de outros tipos de avisos. É possível também fornecer uma pilha de chamadas personalizada para o aviso."
        },
        {
        "objeto": 296,
        "função": "process.addAsyncListener()",
        "oQueFaz": "Adiciona um observador assíncrono ao processo para rastrear o ciclo de vida das promessas.",
        "exemplo": "const asyncListener = require('async-listener');\n\nconst listener = asyncListener.createListener();\n\nprocess.addAsyncListener(listener);",
        "descricaoDoExemplo": "O método 'process.addAsyncListener()' adiciona um observador assíncrono ao processo para rastrear o ciclo de vida das promessas. Esses observadores podem ser usados para monitorar e depurar o comportamento assíncrono do processo, como rastrear o tempo de execução de promessas e capturar erros não tratados."
        },
        {
        "objeto": 297,
        "função": "process.removeAsyncListener()",
        "oQueFaz": "Remove um observador assíncrono previamente adicionado ao processo.",
        "exemplo": "const asyncListener = require('async-listener');\n\nconst listener = asyncListener.createListener();\n\nprocess.addAsyncListener(listener);\n\n// Remover o observador\nprocess.removeAsyncListener(listener);",
        "descricaoDoExemplo": "O método 'process.removeAsyncListener()' remove um observador assíncrono previamente adicionado ao processo usando o método 'process.addAsyncListener()'. Isso interrompe o rastreamento e a captura de eventos relacionados às promessas pelo observador removido."
        },
        {
        "objeto": 298,
        "função": "child_process.exec()",
        "oQueFaz": "Executa um comando no shell do sistema operacional como um processo filho.",
        "exemplo": "const { exec } = require('child_process');\n\nexec('ls -l', (error, stdout, stderr) => {\n if (error) {\n console.error(exec error: ${error});\n return;\n }\n console.log(stdout: ${stdout});\n console.error(stderr: ${stderr});\n});",
        "descricaoDoExemplo": "A função 'child_process.exec()' executa um comando no shell do sistema operacional como um processo filho. Você pode fornecer um comando a ser executado como uma string e um retorno de chamada para lidar com a saída e os erros do comando executado."
        },
        {
        "objeto": 299,
        "função": "child_process.execFile()",
        "oQueFaz": "Executa um arquivo executável como um processo filho.",
        "exemplo": "const { execFile } = require('child_process');\n\nexecFile('node', ['--version'], (error, stdout, stderr) => {\n if (error) {\n console.error(execFile error: ${error});\n return;\n }\n console.log(stdout: ${stdout});\n console.error(stderr: ${stderr});\n});",
        "descricaoDoExemplo": "A função 'child_process.execFile()' executa um arquivo executável como um processo filho. Você pode fornecer o caminho para o arquivo executável e um array de argumentos opcionais a serem passados para o arquivo. Um retorno de chamada pode ser fornecido para lidar com a saída e os erros do processo executado."
        },
        {
        "objeto": 300,
        "função": "child_process.fork()",
        "oQueFaz": "Cria um novo processo filho usando o módulo fornecido.",
        "exemplo": "const { fork } = require('child_process');\n\nconst child = fork('worker.js');\n\nchild.on('message', (message) => {\n console.log('Received message from child:', message);\n});",
        "descricaoDoExemplo": "A função 'child_process.fork()' cria um novo processo filho usando o módulo fornecido. O novo processo filho será uma instância separada do interpretador do Node.js. Você pode se comunicar com o processo filho usando o evento 'message' e os métodos 'send()' e 'on()' para enviar e receber mensagens entre o processo pai e o filho."
        },
        {
        "objeto": 301,
        "função": "child_process.spawn()",
        "oQueFaz": "Inicia um novo processo filho com o comando especificado.",
        "exemplo": "const { spawn } = require('child_process');\n\nconst child = spawn('ls', ['-l']);\n\nchild.stdout.on('data', (data) => {\n console.log(stdout: ${data});\n});",
        "descricaoDoExemplo": "A função 'child_process.spawn()' inicia um novo processo filho com o comando especificado. Você pode fornecer o comando a ser executado como uma string e um array de argumentos opcionais. Você pode capturar a saída do processo filho usando os eventos 'data', 'error' e 'close' dos objetos 'stdout', 'stderr' e 'child', respectivamente."
        },
        {
        "objeto": 302,
        "função": "child_process.execSync()",
        "oQueFaz": "Executa um comando no shell do sistema operacional como um processo filho de forma síncrona.",
        "exemplo": "const { execSync } = require('child_process');\n\nconst stdout = execSync('ls -l');\n\nconsole.log(stdout: ${stdout});",
        "descricaoDoExemplo": "A função 'child_process.execSync()' executa um comando no shell do sistema operacional como um processo filho de forma síncrona. Isso significa que a execução do processo filho bloqueia a execução do processo pai até que o processo filho seja concluído. A função retorna a saída do processo filho como uma string."
        },
        {
        "objeto": 303,
        "função": "child_process.execFileSync()",
        "oQueFaz": "Executa um arquivo executável como um processo filho de forma síncrona.",
        "exemplo": "const { execFileSync } = require('child_process');\n\nconst stdout = execFileSync('node', ['--version']);\n\nconsole.log(stdout: ${stdout});",
        "descricaoDoExemplo": "A função 'child_process.execFileSync()' executa um arquivo executável como um processo filho de forma síncrona. Isso significa que a execução do processo filho bloqueia a execução do processo pai até que o processo filho seja concluído. A função retorna a saída do processo filho como uma string."
        },
        {
        "objeto": 304,
        "função": "child_process.spawnSync()",
        "oQueFaz": "Inicia um novo processo filho de forma síncrona com o comando especificado.",
        "exemplo": "const { spawnSync } = require('child_process');\n\nconst result = spawnSync('ls', ['-l']);\n\nconsole.log(stdout: ${result.stdout});",
        "descricaoDoExemplo": "A função 'child_process.spawnSync()' inicia um novo processo filho de forma síncrona com o comando especificado. Isso significa que a execução do processo filho bloqueia a execução do processo pai até que o processo filho seja concluído. O resultado da função contém informações sobre a saída, os erros e o status do processo filho."
        },
        {
        "objeto": 305,
        "função": "fs.accessSync()",
        "oQueFaz": "Verifica a existência e permissões de um arquivo ou diretório de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\ntry {\n fs.accessSync('/path/to/file', fs.constants.R_OK | fs.constants.W_OK);\n console.log('File exists and has read/write permissions');\n} catch (error) {\n console.error('File does not exist or has no read/write permissions');\n}",
        "descricaoDoExemplo": "A função 'fs.accessSync()' verifica a existência e as permissões de um arquivo ou diretório de forma síncrona. Você pode fornecer o caminho para o arquivo ou diretório e uma combinação de constantes para verificar as permissões necessárias (por exemplo, 'fs.constants.R_OK' para verificar a permissão de leitura). Se o arquivo ou diretório não existir ou não tiver as permissões especificadas, uma exceção será lançada."
        },
        {
        "objeto": 306,
        "função": "fs.appendFileSync()",
        "oQueFaz": "Anexa dados a um arquivo de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.appendFileSync('file.txt', 'Hello, world!\n');",
        "descricaoDoExemplo": "A função 'fs.appendFileSync()' anexa dados a um arquivo de forma síncrona. Você pode fornecer o caminho para o arquivo e os dados a serem anexados como uma string ou um buffer. Se o arquivo não existir, ele será criado. Se ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 307,
        "função": "fs.mkdir()",
        "oQueFaz": "Cria um diretório de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.mkdir('/path/to/directory', (error) => {\n if (error) {\n console.error(Failed to create directory: ${error});\n return;\n }\n console.log('Directory created successfully');\n});",
        "descricaoDoExemplo": "A função 'fs.mkdir()' cria um diretório de forma síncrona. Você pode fornecer o caminho para o diretório a ser criado e um retorno de chamada para lidar com erros, se ocorrerem. Se o diretório já existir ou ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 308,
        "função": "fs.mkdtemp()",
        "oQueFaz": "Cria um diretório temporário de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\nconst tempDir = fs.mkdtempSync('/tmp/');\nconsole.log('Temporary directory created:', tempDir);",
        "descricaoDoExemplo": "A função 'fs.mkdtemp()' cria um diretório temporário de forma síncrona. Você pode fornecer um prefixo opcional para o nome do diretório temporário. A função retorna o caminho do diretório temporário criado. Se ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 309,
        "função": "fs.opendir()",
        "oQueFaz": "Abre um diretório e retorna um objeto 'Dirent' para ler seu conteúdo de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.opendir('/path/to/directory', (error, dir) => {\n if (error) {\n console.error(Failed to open directory: ${error});\n return;\n }\n\n // Ler o conteúdo do diretório\n dir.read((readError, dirent) => {\n if (readError) {\n console.error(Failed to read directory: ${readError});\n return;\n }\n\n console.log('Dirent:', dirent);\n\n // Fechar o diretório\n dir.close((closeError) => {\n if (closeError) {\n console.error(Failed to close directory: ${closeError});\n }\n });\n });\n});",
        "descricaoDoExemplo": "A função 'fs.opendir()' abre um diretório e retorna um objeto 'Dirent' para ler seu conteúdo de forma assíncrona. Você pode fornecer o caminho para o diretório a ser aberto e um retorno de chamada que receberá o objeto 'Dirent'. Com o objeto 'Dirent', você pode ler o conteúdo do diretório usando o método 'read()' e fechar o diretório usando o método 'close()'. Se ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 310,
        "função": "fs.opendirSync()",
        "oQueFaz": "Abre um diretório e retorna um objeto 'Dirent' para ler seu conteúdo de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\ntry {\n const dir = fs.opendirSync('/path/to/directory');\n\n // Ler o conteúdo do diretório\n let dirent;\n while ((dirent = dir.readSync()) !== null) {\n console.log('Dirent:', dirent);\n }\n\n // Fechar o diretório\n dir.closeSync();\n} catch (error) {\n console.error(Failed to open or read directory: ${error});\n}",
        "descricaoDoExemplo": "A função 'fs.opendirSync()' abre um diretório e retorna um objeto 'Dirent' para ler seu conteúdo de forma síncrona. Você pode fornecer o caminho para o diretório a ser aberto. Com o objeto 'Dirent', você pode ler o conteúdo do diretório usando o método 'readSync()' e fechar o diretório usando o método 'closeSync()'. Se ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 311,
        "função": "fs.readdir()",
        "oQueFaz": "Lê o conteúdo de um diretório de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.readdir('/path/to/directory', (error, files) => {\n if (error) {\n console.error(Failed to read directory: ${error});\n return;\n }\n\n console.log('Files:', files);\n});",
        "descricaoDoExemplo": "A função 'fs.readdir()' lê o conteúdo de um diretório de forma assíncrona. Você pode fornecer o caminho para o diretório a ser lido e um retorno de chamada que receberá um array com os nomes dos arquivos e diretórios encontrados. Se ocorrer algum erro durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 312,
        "função": "fs.rename()",
        "oQueFaz": "Renomeia um arquivo ou diretório de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.rename('/path/to/oldName', '/path/to/newName', (error) => {\n if (error) {\n console.error(Failed to rename file or directory: ${error});\n return;\n }\n console.log('File or directory renamed successfully');\n});",
        "descricaoDoExemplo": "A função 'fs.rename()' renomeia um arquivo ou diretório de forma assíncrona. Você pode fornecer o caminho do arquivo ou diretório atual e o novo nome desejado, juntamente com um retorno de chamada para lidar com erros, se ocorrerem. Se o arquivo ou diretório não existir ou ocorrerem erros durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 313,
        "função": "fs.rmdir()",
        "oQueFaz": "Remove um diretório de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.rmdir('/path/to/directory', (error) => {\n if (error) {\n console.error(Failed to remove directory: ${error});\n return;\n }\n console.log('Directory removed successfully');\n});",
        "descricaoDoExemplo": "A função 'fs.rmdir()' remove um diretório de forma assíncrona. Você pode fornecer o caminho para o diretório a ser removido e um retorno de chamada para lidar com erros, se ocorrerem. O diretório só será removido se estiver vazio. Se o diretório não existir ou ocorrerem erros durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 314,
        "função": "fs.unlink()",
        "oQueFaz": "Remove um arquivo de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nfs.unlink('/path/to/file', (error) => {\n if (error) {\n console.error(Failed to remove file: ${error});\n return;\n }\n console.log('File removed successfully');\n});",
        "descricaoDoExemplo": "A função 'fs.unlink()' remove um arquivo de forma assíncrona. Você pode fornecer o caminho para o arquivo a ser removido e um retorno de chamada para lidar com erros, se ocorrerem. Se o arquivo não existir ou ocorrerem erros durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 315,
        "função": "fs.writev()",
        "oQueFaz": "Escreve buffers em um arquivo de forma assíncrona.",
        "exemplo": "const fs = require('fs');\n\nconst buffers = [\n Buffer.from('Hello, '),\n Buffer.from('world!\n')\n];\n\nfs.open('/path/to/file', 'w', (openError, fd) => {\n if (openError) {\n console.error(Failed to open file: ${openError});\n return;\n }\n\n fs.writev(fd, buffers, (writeError, bytesWritten, buffers) => {\n if (writeError) {\n console.error(Failed to write to file: ${writeError});\n return;\n }\n\n console.log('Bytes written:', bytesWritten);\n\n fs.close(fd, (closeError) => {\n if (closeError) {\n console.error(Failed to close file: ${closeError});\n }\n });\n });\n});",
        "descricaoDoExemplo": "A função 'fs.writev()' escreve buffers em um arquivo de forma assíncrona. Você pode fornecer o descritor de arquivo retornado pela função 'fs.open()', um array de buffers a serem escritos e um retorno de chamada para lidar com erros e receber o número de bytes escritos. Se ocorrerem erros durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 316,
        "função": "fs.writevSync()",
        "oQueFaz": "Escreve buffers em um arquivo de forma síncrona.",
        "exemplo": "const fs = require('fs');\n\nconst buffers = [\n Buffer.from('Hello, '),\n Buffer.from('world!\n')\n];\n\nconst fd = fs.openSync('/path/to/file', 'w');\n\nconst bytesWritten = fs.writevSync(fd, buffers);\n\nconsole.log('Bytes written:', bytesWritten);\n\nfs.closeSync(fd);",
        "descricaoDoExemplo": "A função 'fs.writevSync()' escreve buffers em um arquivo de forma síncrona. Você pode fornecer o descritor de arquivo retornado pela função 'fs.openSync()', um array de buffers a serem escritos e a função retornará o número de bytes escritos. Se ocorrerem erros durante o processo, uma exceção será lançada."
        },
        {
        "objeto": 317,
        "função": "crypto.createCipher()",
        "oQueFaz": "Cria um objeto Cipher para criptografar dados usando um algoritmo específico.",
        "exemplo": "const crypto = require('crypto');\n\nconst algorithm = 'aes-256-cbc';\nconst key = 'my-secret-key';\nconst iv = crypto.randomBytes(16);\n\nconst cipher = crypto.createCipher(algorithm, key, iv);\n\nlet encryptedData = cipher.update('Hello, world!', 'utf8', 'hex');\nencryptedData += cipher.final('hex');\n\nconsole.log('Encrypted data:', encryptedData);",
        "descricaoDoExemplo": "A função 'crypto.createCipher()' cria um objeto Cipher para criptografar dados usando um algoritmo e uma chave especificados. Você pode fornecer o algoritmo, a chave e um vetor de inicialização (IV) opcional. O objeto Cipher pode ser usado para criptografar dados com base nas opções fornecidas. No exemplo acima, o texto 'Hello, world!' é criptografado usando o algoritmo AES-256-CBC com uma chave e IV específicos. O texto criptografado é exibido em formato hexadecimal."
        },
        {
        "objeto": 318,
        "função": "crypto.createCipheriv()",
        "oQueFaz": "Cria um objeto Cipher para criptografar dados usando um algoritmo e um IV específicos.",
        "exemplo": "const crypto = require('crypto');\n\nconst algorithm = 'aes-256-cbc';\nconst key = 'my-secret-key';\nconst iv = crypto.randomBytes(16);\n\nconst cipher = crypto.createCipheriv(algorithm, key, iv);\n\nlet encryptedData = cipher.update('Hello, world!', 'utf8', 'hex');\nencryptedData += cipher.final('hex');\n\nconsole.log('Encrypted data:', encryptedData);",
        "descricaoDoExemplo": "A função 'crypto.createCipheriv()' cria um objeto Cipher para criptografar dados usando um algoritmo e um vetor de inicialização (IV) específicos. Você pode fornecer o algoritmo, a chave e o IV. O objeto Cipher pode ser usado para criptografar dados com base nas opções fornecidas. No exemplo acima, o texto 'Hello, world!' é criptografado usando o algoritmo AES-256-CBC com uma chave e IV específicos. O texto criptografado é exibido em formato hexadecimal."
        },
        {
        "objeto": 319,
        "função": "crypto.createDecipher()",
        "oQueFaz": "Cria um objeto Decipher para descriptografar dados usando um algoritmo específico.",
        "exemplo": "const crypto = require('crypto');\n\nconst algorithm = 'aes-256-cbc';\nconst key = 'my-secret-key';\nconst iv = crypto.randomBytes(16);\n\nconst cipher = crypto.createCipher(algorithm, key, iv);\n\nlet encryptedData = cipher.update('Hello, world!', 'utf8', 'hex');\nencryptedData += cipher.final('hex');\n\nconst decipher = crypto.createDecipher(algorithm, key, iv);\n\nlet decryptedData = decipher.update(encryptedData, 'hex', 'utf8');\ndecryptedData += decipher.final('utf8');\n\nconsole.log('Decrypted data:', decryptedData);",
        "descricaoDoExemplo": "A função 'crypto.createDecipher()' cria um objeto Decipher para descriptografar dados usando um algoritmo e uma chave especificados. Você pode fornecer o algoritmo, a chave e um vetor de inicialização (IV) opcional. O objeto Decipher pode ser usado para descriptografar dados com base nas opções fornecidas. No exemplo acima, o texto 'Hello, world!' é criptografado usando o algoritmo AES-256-CBC com uma chave e IV específicos e, em seguida, descriptografado novamente. O texto descriptografado é exibido em formato UTF-8."
        },
        {
        "objeto": 320,
        "função": "crypto.createDecipheriv()",
        "oQueFaz": "Cria um objeto Decipher para descriptografar dados usando um algoritmo e um IV específicos.",
        "exemplo": "const crypto = require('crypto');\n\nconst algorithm = 'aes-256-cbc';\nconst key = 'my-secret-key';\nconst iv = crypto.randomBytes(16);\n\nconst cipher = crypto.createCipheriv(algorithm, key, iv);\n\nlet encryptedData = cipher.update('Hello, world!', 'utf8', 'hex');\nencryptedData += cipher.final('hex');\n\nconst decipher = crypto.createDecipheriv(algorithm, key, iv);\n\nlet decryptedData = decipher.update(encryptedData, 'hex', 'utf8');\ndecryptedData += decipher.final('utf8');\n\nconsole.log('Decrypted data:', decryptedData);",
        "descricaoDoExemplo": "A função 'crypto.createDecipheriv()' cria um objeto Decipher para descriptografar dados usando um algoritmo e um vetor de inicialização (IV) específicos. Você pode fornecer o algoritmo, a chave e o IV. O objeto Decipher pode ser usado para descriptografar dados com base nas opções fornecidas. No exemplo acima, o texto 'Hello, world!' é criptografado usando o algoritmo AES-256-CBC com uma chave e IV específicos e, em seguida, descriptografado novamente. O texto descriptografado é exibido em formato UTF-8."
        },
        {
        "objeto": 321,
        "função": "crypto.createDiffieHellman()",
        "oQueFaz": "Cria um objeto DiffieHellman para troca de chaves secreta.",
        "exemplo": "const crypto = require('crypto');\n\nconst dh = crypto.createDiffieHellman(256);\n\nconst publicKey = dh.generateKeys();\n\n// Envie a chave pública para outra parte\n\n// Receba a chave pública da outra parte\n\nconst sharedSecret = dh.computeSecret(otherPublicKey);\n\nconsole.log('Shared secret:', sharedSecret);",
        "descricaoDoExemplo": "A função 'crypto.createDiffieHellman()' cria um objeto DiffieHellman para troca de chaves secreta. Você pode fornecer o tamanho do número primo usado para gerar as chaves. O objeto DiffieHellman pode gerar uma chave pública usando o método 'generateKeys()' e calcular o segredo compartilhado usando o método 'computeSecret()'. No exemplo acima, um objeto DiffieHellman é criado com um tamanho de 256 bits. A chave pública é gerada e pode ser enviada para outra parte. A chave pública da outra parte é recebida e usada para calcular o segredo compartilhado. O segredo compartilhado é exibido."
        },
        {
        "objeto": 322,
        "função": "crypto.createECDH()",
        "oQueFaz": "Cria um objeto ECDH para troca de chaves secreta usando criptografia de curva elíptica.",
        "exemplo": "const crypto = require('crypto');\n\nconst ecdh = crypto.createECDH('secp256k1');\n\nconst publicKey = ecdh.generateKeys();\n\n// Envie a chave pública para outra parte\n\n// Receba a chave pública da outra parte\n\nconst sharedSecret = ecdh.computeSecret(otherPublicKey);\n\nconsole.log('Shared secret:', sharedSecret);",
        "descricaoDoExemplo": "A função 'crypto.createECDH()' cria um objeto ECDH para troca de chaves secreta usando criptografia de curva elíptica. Você pode fornecer uma curva específica, como 'secp256k1'. O objeto ECDH pode gerar uma chave pública usando o método 'generateKeys()' e calcular o segredo compartilhado usando o método 'computeSecret()'. No exemplo acima, um objeto ECDH é criado com a curva 'secp256k1'. A chave pública é gerada e pode ser enviada para outra parte. A chave pública da outra parte é recebida e usada para calcular o segredo compartilhado. O segredo compartilhado é exibido."
        },
        {
        "objeto": 323,
        "função": "crypto.createHash()",
        "oQueFaz": "Cria um objeto Hash para calcular o hash de dados.",
        "exemplo": "const crypto = require('crypto');\n\nconst hash = crypto.createHash('sha256');\n\nhash.update('Hello, world!');\n\nconst hashedData = hash.digest('hex');\n\nconsole.log('Hashed data:', hashedData);",
        "descricaoDoExemplo": "A função 'crypto.createHash()' cria um objeto Hash para calcular o hash de dados usando um algoritmo específico, como SHA-256. Você pode fornecer o algoritmo desejado ao criar o objeto Hash. O objeto Hash pode ser atualizado com dados usando o método 'update()' e o hash pode ser calculado usando o método 'digest()'. No exemplo acima, o texto 'Hello, world!' é usado para calcular o hash SHA-256, e o hash resultante é exibido em formato hexadecimal."
        },
        {
        "objeto": 324,
        "função": "crypto.createHmac()",
        "oQueFaz": "Cria um objeto Hmac para calcular o HMAC (Hash-based Message Authentication Code).",
        "exemplo": "const crypto = require('crypto');\n\nconst secret = 'my-secret-key';\n\nconst hmac = crypto.createHmac('sha256', secret);\n\nhmac.update('Hello, world!');\n\nconst hmacDigest = hmac.digest('hex');\n\nconsole.log('HMAC:', hmacDigest);",
        "descricaoDoExemplo": "A função 'crypto.createHmac()' cria um objeto Hmac para calcular o HMAC (Hash-based Message Authentication Code) usando um algoritmo específico, como SHA-256. Você pode fornecer o algoritmo desejado e uma chave secreta ao criar o objeto Hmac. O objeto Hmac pode ser atualizado com dados usando o método 'update()' e o HMAC pode ser calculado usando o método 'digest()'. No exemplo acima, o texto 'Hello, world!' é usado para calcular o HMAC usando o algoritmo SHA-256 e uma chave secreta. O HMAC resultante é exibido em formato hexadecimal."
        },
        {
        "objeto": 325,
        "função": "crypto.createSign()",
        "oQueFaz": "Cria um objeto Sign para assinar digitalmente dados usando uma chave privada.",
        "exemplo": "const crypto = require('crypto');\n\nconst privateKey = crypto.generatePrivateKey();\n\nconst sign = crypto.createSign('SHA256');\n\nsign.update('Hello, world!');\n\nconst signature = sign.sign(privateKey, 'hex');\n\nconsole.log('Signature:', signature);",
        "descricaoDoExemplo": "A função 'crypto.createSign()' cria um objeto Sign para assinar digitalmente dados usando uma chave privada. Você pode fornecer o algoritmo desejado ao criar o objeto Sign, como SHA-256. O objeto Sign pode ser atualizado com dados usando o método 'update()' e a assinatura pode ser gerada usando o método 'sign()'. No exemplo acima, o texto 'Hello, world!' é usado para gerar uma assinatura digital usando o algoritmo SHA-256 e uma chave privada. A assinatura resultante é exibida em formato hexadecimal."
        },
        {
        "objeto": 326,
        "função": "crypto.createVerify()",
        "oQueFaz": "Cria um objeto Verify para verificar a autenticidade de uma assinatura digital.",
        "exemplo": "const crypto = require('crypto');\n\nconst publicKey = crypto.generatePublicKey();\n\nconst verify = crypto.createVerify('SHA256');\n\nverify.update('Hello, world!');\n\nconst isValid = verify.verify(publicKey, signature, 'hex');\n\nconsole.log('Signature is valid:', isValid);",
        "descricaoDoExemplo": "A função 'crypto.createVerify()' cria um objeto Verify para verificar a autenticidade de uma assinatura digital usando uma chave pública. Você pode fornecer o algoritmo desejado ao criar o objeto Verify, como SHA-256. O objeto Verify pode ser atualizado com dados usando o método 'update()' e a validade da assinatura pode ser verificada usando o método 'verify()'. No exemplo acima, o texto 'Hello, world!' é usado junto com uma chave pública e uma assinatura para verificar se a assinatura é válida. O resultado da verificação é exibido como um valor booleano."
        },
        {
        "objeto": 327,
        "função": "crypto.generateKeyPair()",
        "oQueFaz": "Gera um par de chaves criptográficas assimétricas.",
        "exemplo": "const crypto = require('crypto');\n\nconst { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {\n modulusLength: 2048,\n});\n\nconsole.log('Public key:', publicKey);\nconsole.log('Private key:', privateKey);",
        "descricaoDoExemplo": "A função 'crypto.generateKeyPair()' gera um par de chaves criptográficas assimétricas. Você pode fornecer o tipo de algoritmo desejado, como 'rsa', e as opções adicionais, como o comprimento do módulo (modulusLength). O par de chaves é gerado e pode ser usado para fins criptográficos. No exemplo acima, um par de chaves RSA com um comprimento de módulo de 2048 bits é gerado. A chave pública e a chave privada são exibidas."
        },
        {
        "objeto": 328,
        "função": "crypto.pbkdf2()",
        "oQueFaz": "Deriva uma chave criptográfica a partir de uma senha usando uma função de derivação de chave baseada em senha (PBKDF2).",
        "exemplo": "const crypto = require('crypto');\n\nconst password = 'my-password';\nconst salt = crypto.randomBytes(16);\nconst iterations = 100000;\nconst keyLength = 64;\nconst digest = 'sha512';\n\ncrypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {\n if (err) throw err;\n console.log('Derived key:', derivedKey.toString('hex'));\n});",
        "descricaoDoExemplo": "A função 'crypto.pbkdf2()' deriva uma chave criptográfica a partir de uma senha usando uma função de derivação de chave baseada em senha (PBKDF2). Você pode fornecer a senha, o salt, o número de iterações, o comprimento da chave, o algoritmo de digestão e um callback para receber a chave derivada. No exemplo acima, a senha 'my-password' é usada junto com um salt aleatório, 100.000 iterações, um comprimento de chave de 64 bytes e o algoritmo de digestão SHA-512 para derivar uma chave. A chave derivada é exibida em formato hexadecimal."
        },
        {
        "objeto": 329,
        "função": "crypto.randomBytes()",
        "oQueFaz": "Gera um buffer de bytes criptograficamente seguro.",
        "exemplo": "const crypto = require('crypto');\n\nconst buffer = crypto.randomBytes(16);\n\nconsole.log('Random bytes:', buffer.toString('hex'));",
        "descricaoDoExemplo": "A função 'crypto.randomBytes()' gera um buffer de bytes criptograficamente seguro. Você pode fornecer o tamanho do buffer em bytes. O buffer gerado contém bytes aleatórios adequados para uso em operações criptográficas. No exemplo acima, um buffer de 16 bytes é gerado e exibido em formato hexadecimal."
        },
        {
        "objeto": 330,
        "função": "crypto.scrypt()",
        "oQueFaz": "Deriva uma chave criptográfica a partir de uma senha usando o algoritmo de derivação de chave baseado em memória scrypt.",
        "exemplo": "const crypto = require('crypto');\n\nconst password = 'my-password';\nconst salt = crypto.randomBytes(16);\nconst keyLength = 64;\nconst options = {\n cost: 16384,\n blockSize: 8,\n parallelization: 1,\n maxmem: 32 * 1024 * 1024, // 32MB\n};\n\ncrypto.scrypt(password, salt, keyLength, options, (err, derivedKey) => {\n if (err) throw err;\n console.log('Derived key:', derivedKey.toString('hex'));\n});",
        "descricaoDoExemplo": "A função 'crypto.scrypt()' deriva uma chave criptográfica a partir de uma senha usando o algoritmo de derivação de chave baseado em memória scrypt. Você pode fornecer a senha, o salt, o comprimento da chave, as opções de configuração e um callback para receber a chave derivada. As opções de configuração incluem o custo, o tamanho do bloco, a paralelização e a memória máxima a ser usada. No exemplo acima, a senha 'my-password' é usada junto com um salt aleatório, um comprimento de chave de 64 bytes e as opções de configuração especificadas para derivar uma chave usando scrypt. A chave derivada é exibida em formato hexadecimal."
        },
        {
        "objeto": 331,
        "função": "crypto.timingSafeEqual()",
        "oQueFaz": "Verifica se dois buffers são igualmente seguros em tempo constante.",
        "exemplo": "const crypto = require('crypto');\n\nconst buffer1 = Buffer.from('abc');\nconst buffer2 = Buffer.from('def');\n\nconst isEqual = crypto.timingSafeEqual(buffer1, buffer2);\n\nconsole.log('Buffers are equal:', isEqual);",
        "descricaoDoExemplo": "A função 'crypto.timingSafeEqual()' verifica se dois buffers são igualmente seguros em tempo constante. Isso é útil para comparar valores secretos, como hashes criptográficos, a fim de evitar ataques de temporização. A função retorna um valor booleano indicando se os buffers são iguais. No exemplo acima, dois buffers são comparados e o resultado da comparação é exibido como um valor booleano."
        },
        {
        "objeto": 332,
        "propriedade": "crypto.constants.OPENSSL_VERSION_NUMBER",
        "oQueFaz": "Uma constante que representa o número da versão do OpenSSL em uso.",
        "exemplo": "const crypto = require('crypto');\n\nconsole.log('OpenSSL version number:', crypto.constants.OPENSSL_VERSION_NUMBER);",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.OPENSSL_VERSION_NUMBER' representa o número da versão do OpenSSL em uso. Você pode acessar essa propriedade para obter informações sobre a versão do OpenSSL no ambiente atual. No exemplo acima, o número da versão do OpenSSL é exibido."
        },
        {
        "objeto": 333,
        "propriedade": "crypto.constants.SSL_OP_NO_SSLv2",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo SSLv2 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_SSLv2,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_SSLv2' é uma constante que desabilita o suporte ao protocolo SSLv2 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao SSLv2 nas opções de conexão."
        },
        {
        "objeto": 334,
        "propriedade": "crypto.constants.SSL_OP_NO_SSLv3",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo SSLv3 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_SSLv3,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_SSLv3' é uma constante que desabilita o suporte ao protocolo SSLv3 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao SSLv3 nas opções de conexão."
        },
        {
        "objeto": 335,
        "propriedade": "crypto.constants.SSL_OP_NO_TLSv1",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo TLSv1.0 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_TLSv1,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_TLSv1' é uma constante que desabilita o suporte ao protocolo TLSv1.0 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao TLSv1.0 nas opções de conexão."
        },
        {
        "objeto": 336,
        "propriedade": "crypto.constants.SSL_OP_NO_TLSv1_1",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo TLSv1.1 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_TLSv1_1,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_TLSv1_1' é uma constante que desabilita o suporte ao protocolo TLSv1.1 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao TLSv1.1 nas opções de conexão."
        },
        {
        "objeto": 337,
        "propriedade": "crypto.constants.SSL_OP_NO_TLSv1_2",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo TLSv1.2 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_TLSv1_2,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_TLSv1_2' é uma constante que desabilita o suporte ao protocolo TLSv1.2 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao TLSv1.2 nas opções de conexão."
        },
        {
        "objeto": 338,
        "propriedade": "crypto.constants.SSL_OP_NO_TLSv1_3",
        "oQueFaz": "Uma constante que desabilita o suporte ao protocolo TLSv1.3 em conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_TLSv1_3,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_TLSv1_3' é uma constante que desabilita o suporte ao protocolo TLSv1.3 em conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar o suporte ao TLSv1.3 nas opções de conexão."
        },
        {
        "objeto": 339,
        "propriedade": "crypto.constants.SSL_OP_ALL",
        "oQueFaz": "Uma constante que habilita todos os recursos e opções do SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_ALL,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_ALL' é uma constante que habilita todos os recursos e opções do SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para habilitar todos os recursos e opções nas opções de conexão."
        },
        {
        "objeto": 340,
        "propriedade": "crypto.constants.SSL_OP_SINGLE_DH_USE",
        "oQueFaz": "Uma constante que solicita a geração de um novo par de chaves Diffie-Hellman (DH) para cada conexão SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_SINGLE_DH_USE,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_SINGLE_DH_USE' é uma constante que solicita a geração de um novo par de chaves Diffie-Hellman (DH) para cada conexão SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS que usam DH. No exemplo acima, a constante é usada para solicitar a geração de um novo par de chaves DH para cada conexão."
        },
        {
        "objeto": 341,
        "propriedade": "crypto.constants.SSL_OP_SINGLE_ECDH_USE",
        "oQueFaz": "Uma constante que solicita a geração de uma nova chave ECDH para cada conexão SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_SINGLE_ECDH_USE,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_SINGLE_ECDH_USE' é uma constante que solicita a geração de uma nova chave ECDH para cada conexão SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS que usam ECDH. No exemplo acima, a constante é usada para solicitar a geração de uma nova chave ECDH para cada conexão."
        },
        {
        "objeto": 342,
        "propriedade": "crypto.constants.SSL_OP_EPHEMERAL_RSA",
        "oQueFaz": "Uma constante que solicita o uso de chaves RSA efêmeras para chaves de sessão SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_EPHEMERAL_RSA,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_EPHEMERAL_RSA' é uma constante que solicita o uso de chaves RSA efêmeras para chaves de sessão SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para solicitar o uso de chaves RSA efêmeras para chaves de sessão."
        },
        {
        "objeto": 343,
        "propriedade": "crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE",
        "oQueFaz": "Uma constante que solicita ao servidor SSL/TLS que selecione a cifra preferencialmente em vez de permitir a negociação do cliente.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE' é uma constante que solicita ao servidor SSL/TLS que selecione a cifra preferencialmente em vez de permitir a negociação do cliente. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para solicitar que o servidor selecione a cifra preferencialmente."
        },
        {
        "objeto": 344,
        "propriedade": "crypto.constants.SSL_OP_TLS_ROLLBACK_BUG",
        "oQueFaz": "Uma constante que contorna o bug de rollback de protocolo TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_TLS_ROLLBACK_BUG,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_TLS_ROLLBACK_BUG' é uma constante que contorna um bug conhecido relacionado ao rollback de protocolo TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para contornar o bug de rollback de protocolo TLS."
        },
        {
        "objeto": 345,
        "propriedade": "crypto.constants.SSL_OP_NO_COMPRESSION",
        "oQueFaz": "Uma constante que desabilita a compressão de dados SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_NO_COMPRESSION,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_NO_COMPRESSION' é uma constante que desabilita a compressão de dados SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para desabilitar a compressão de dados nas opções de conexão."
        },
        {
        "objeto": 346,
        "propriedade": "crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION",
        "oQueFaz": "Uma constante que permite a renegociação insegura de conexões SSL/TLS.",
        "exemplo": "const crypto = require('crypto');\n\nconst options = {\n secureOptions: crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,\n};\n\n// Use options ao criar uma conexão SSL/TLS",
        "descricaoDoExemplo": "A propriedade 'crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION' é uma constante que permite a renegociação insegura de conexões SSL/TLS. Você pode usar essa constante ao configurar opções de segurança para conexões SSL/TLS. No exemplo acima, a constante é usada para permitir a renegociação insegura de conexões."
        },
        {
        "objeto": 347,
        "propriedade": "os.EOL",
        "oQueFaz": "Uma constante que representa o sequenciador de término de linha do sistema operacional atual.",
        "exemplo": "const os = require('os');\n\nconsole.log(Término de linha: ${os.EOL});",
        "descricaoDoExemplo": "A propriedade 'os.EOL' é uma constante que representa o sequenciador de término de linha do sistema operacional atual. Você pode usá-la para garantir que o término de linha seja compatível com o sistema operacional em que seu código está sendo executado. No exemplo acima, o sequenciador de término de linha é impresso no console."
        },
        {
        "objeto": 348,
        "propriedade": "os.arch()",
        "oQueFaz": "Um método que retorna a arquitetura do processador do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(Arquitetura do processador: ${os.arch()});",
        "descricaoDoExemplo": "O método 'os.arch()' retorna a arquitetura do processador do sistema operacional. Ele retorna uma string que representa a arquitetura do processador, como 'x64' ou 'arm'. No exemplo acima, a arquitetura do processador é impressa no console."
        },
        {
        "objeto": 349,
        "propriedade": "os.constants.signals",
        "oQueFaz": "Um objeto que contém constantes para sinais do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(os.constants.signals.SIGINT);",
        "descricaoDoExemplo": "O objeto 'os.constants.signals' contém constantes para sinais do sistema operacional. Essas constantes são usadas para lidar com eventos de sinais, como interrupções de teclado (SIGINT) ou encerramentos (SIGTERM). No exemplo acima, a constante 'SIGINT' é impressa no console."
        },
        {
        "objeto": 350,
        "propriedade": "os.constants.errno",
        "oQueFaz": "Um objeto que contém constantes para códigos de erro do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(os.constants.errno.ENOENT);",
        "descricaoDoExemplo": "O objeto 'os.constants.errno' contém constantes para códigos de erro do sistema operacional. Essas constantes são usadas para lidar com erros específicos do sistema operacional, como arquivos não encontrados (ENOENT) ou permissão negada (EACCES). No exemplo acima, a constante 'ENOENT' é impressa no console."
        },
        {
        "objeto": 351,
        "propriedade": "os.cpus()",
        "oQueFaz": "Um método que retorna informações sobre os núcleos de processamento do sistema.",
        "exemplo": "const os = require('os');\n\nconst cpus = os.cpus();\nconsole.log(cpus);",
        "descricaoDoExemplo": "O método 'os.cpus()' retorna informações sobre os núcleos de processamento do sistema. Ele retorna um array de objetos, cada um representando um núcleo de processamento, com informações como modelo, velocidade, tempo ocioso e muito mais. No exemplo acima, as informações dos núcleos de processamento são impressas no console."
        },
        {
        "objeto": 352,
        "propriedade": "os.endianness()",
        "oQueFaz": "Um método que retorna a endianness do processador.",
        "exemplo": "const os = require('os');\n\nconsole.log(Endianness do processador: ${os.endianness()});",
        "descricaoDoExemplo": "O método 'os.endianness()' retorna a endianness do processador. Ele retorna uma string que representa a endianness, que pode ser 'LE' (Little Endian) ou 'BE' (Big Endian). No exemplo acima, a endianness do processador é impressa no console."
        },
        {
        "objeto": 353,
        "propriedade": "os.freemem()",
        "oQueFaz": "Um método que retorna a quantidade de memória livre no sistema, em bytes.",
        "exemplo": "const os = require('os');\n\nconsole.log(Memória livre: ${os.freemem()} bytes);",
        "descricaoDoExemplo": "O método 'os.freemem()' retorna a quantidade de memória livre no sistema, em bytes. No exemplo acima, a quantidade de memória livre é impressa no console."
        },
        {
        "objeto": 354,
        "propriedade": "os.homedir()",
        "oQueFaz": "Um método que retorna o diretório home do usuário atual.",
        "exemplo": "const os = require('os');\n\nconsole.log(Diretório home: ${os.homedir()});",
        "descricaoDoExemplo": "O método 'os.homedir()' retorna o diretório home do usuário atual. Ele retorna uma string que representa o caminho do diretório home. No exemplo acima, o diretório home é impresso no console."
        },
        {
        "objeto": 355,
        "propriedade": "os.hostname()",
        "oQueFaz": "Um método que retorna o nome do host do sistema.",
        "exemplo": "const os = require('os');\n\nconsole.log(Nome do host: ${os.hostname()});",
        "descricaoDoExemplo": "O método 'os.hostname()' retorna o nome do host do sistema. Ele retorna uma string que representa o nome do host. No exemplo acima, o nome do host é impresso no console."
        },
        {
        "objeto": 356,
        "propriedade": "os.loadavg()",
        "oQueFaz": "Um método que retorna uma média da carga do sistema nos últimos 1, 5 e 15 minutos.",
        "exemplo": "const os = require('os');\n\nconst loadavg = os.loadavg();\nconsole.log(loadavg);",
        "descricaoDoExemplo": "O método 'os.loadavg()' retorna uma média da carga do sistema nos últimos 1, 5 e 15 minutos. Ele retorna um array de números que representa a carga média. No exemplo acima, a carga média do sistema é impressa no console."
        },
        {
        "objeto": 357,
        "propriedade": "os.networkInterfaces()",
        "oQueFaz": "Um método que retorna informações sobre as interfaces de rede do sistema.",
        "exemplo": "const os = require('os');\n\nconst interfaces = os.networkInterfaces();\nconsole.log(interfaces);",
        "descricaoDoExemplo": "O método 'os.networkInterfaces()' retorna informações sobre as interfaces de rede do sistema. Ele retorna um objeto onde as chaves são nomes de interfaces de rede e os valores são arrays de objetos contendo informações sobre cada endereço de rede. No exemplo acima, as informações das interfaces de rede são impressas no console."
        },
        {
        "objeto": 358,
        "propriedade": "os.platform()",
        "oQueFaz": "Um método que retorna o nome da plataforma do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(Plataforma: ${os.platform()});",
        "descricaoDoExemplo": "O método 'os.platform()' retorna o nome da plataforma do sistema operacional. Ele retorna uma string que representa a plataforma, como 'win32', 'linux' ou 'darwin'. No exemplo acima, a plataforma é impressa no console."
        },
        {
        "objeto": 359,
        "propriedade": "os.release()",
        "oQueFaz": "Um método que retorna a versão do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(Versão do sistema operacional: ${os.release()});",
        "descricaoDoExemplo": "O método 'os.release()' retorna a versão do sistema operacional. Ele retorna uma string que representa a versão do sistema operacional. No exemplo acima, a versão do sistema operacional é impressa no console."
        },
        {
        "objeto": 360,
        "propriedade": "os.tmpdir()",
        "oQueFaz": "Um método que retorna o diretório temporário do sistema.",
        "exemplo": "const os = require('os');\n\nconsole.log(Diretório temporário: ${os.tmpdir()});",
        "descricaoDoExemplo": "O método 'os.tmpdir()' retorna o diretório temporário do sistema. Ele retorna uma string que representa o caminho do diretório temporário. No exemplo acima, o diretório temporário é impresso no console."
        },
        {
        "objeto": 361,
        "propriedade": "os.totalmem()",
        "oQueFaz": "Um método que retorna a quantidade total de memória no sistema, em bytes.",
        "exemplo": "const os = require('os');\n\nconsole.log(Memória total: ${os.totalmem()} bytes);",
        "descricaoDoExemplo": "O método 'os.totalmem()' retorna a quantidade total de memória no sistema, em bytes. No exemplo acima, a quantidade total de memória é impressa no console."
        },
        {
        "objeto": 362,
        "propriedade": "os.type()",
        "oQueFaz": "Um método que retorna o nome do sistema operacional.",
        "exemplo": "const os = require('os');\n\nconsole.log(Sistema operacional: ${os.type()});",
        "descricaoDoExemplo": "O método 'os.type()' retorna o nome do sistema operacional. Ele retorna uma string que representa o nome do sistema operacional, como 'Linux', 'Windows' ou 'Darwin'. No exemplo acima, o nome do sistema operacional é impresso no console."
        },
        {
        "objeto": 363,
        "propriedade": "os.uptime()",
        "oQueFaz": "Um método que retorna o tempo de atividade do sistema, em segundos.",
        "exemplo": "const os = require('os');\n\nconsole.log(Tempo de atividade: ${os.uptime()} segundos);",
        "descricaoDoExemplo": "O método 'os.uptime()' retorna o tempo de atividade do sistema, em segundos. No exemplo acima, o tempo de atividade é impresso no console."
        },
        {
        "objeto": 364,
        "propriedade": "os.userInfo()",
        "oQueFaz": "Um método que retorna informações sobre o usuário do sistema.",
        "exemplo": "const os = require('os');\n\nconst userInfo = os.userInfo();\nconsole.log(userInfo);",
        "descricaoDoExemplo": "O método 'os.userInfo()' retorna informações sobre o usuário do sistema. Ele retorna um objeto com propriedades como 'username' (nome de usuário), 'uid' (ID do usuário), 'gid' (ID do grupo) e outras informações. No exemplo acima, as informações do usuário do sistema são impressas no console."
        },
        {
        "objeto": 365,
        "propriedade": "path.basename()",
        "oQueFaz": "Um método que retorna o nome do último componente de um caminho.",
        "exemplo": "const path = require('path');\n\nconst filePath = '/path/to/file.txt';\nconst fileName = path.basename(filePath);\nconsole.log(fileName);",
        "descricaoDoExemplo": "O método 'path.basename()' retorna o nome do último componente de um caminho. No exemplo acima, o nome do arquivo é extraído do caminho '/path/to/file.txt' e é impresso no console."
        },
        {
        "objeto": 366,
        "propriedade": "path.delimiter",
        "oQueFaz": "Uma string que representa o separador de caminhos no sistema operacional atual.",
        "exemplo": "const path = require('path');\n\nconsole.log(Separador de caminhos: ${path.delimiter});",
        "descricaoDoExemplo": "A propriedade 'path.delimiter' é uma string que representa o separador de caminhos no sistema operacional atual. No exemplo acima, o separador de caminhos é impresso no console."
        },
        {
        "objeto": 367,
        "propriedade": "path.dirname()",
        "oQueFaz": "Um método que retorna o diretório pai de um caminho.",
        "exemplo": "const path = require('path');\n\nconst filePath = '/path/to/file.txt';\nconst directory = path.dirname(filePath);\nconsole.log(directory);",
        "descricaoDoExemplo": "O método 'path.dirname()' retorna o diretório pai de um caminho. No exemplo acima, o diretório '/path/to' é extraído do caminho '/path/to/file.txt' e é impresso no console."
        },
        {
        "objeto": 368,
        "propriedade": "path.extname()",
        "oQueFaz": "Um método que retorna a extensão de um arquivo de um caminho.",
        "exemplo": "const path = require('path');\n\nconst filePath = '/path/to/file.txt';\nconst extension = path.extname(filePath);\nconsole.log(extension);",
        "descricaoDoExemplo": "O método 'path.extname()' retorna a extensão de um arquivo de um caminho. No exemplo acima, a extensão '.txt' é extraída do caminho '/path/to/file.txt' e é impressa no console."
        },
        {
        "objeto": 369,
        "propriedade": "path.format()",
        "oQueFaz": "Um método que retorna um caminho formatado a partir de um objeto.",
        "exemplo": "const path = require('path');\n\nconst pathObject = {\n dir: '/path/to',\n base: 'file.txt'\n};\nconst formattedPath = path.format(pathObject);\nconsole.log(formattedPath);",
        "descricaoDoExemplo": "O método 'path.format()' retorna um caminho formatado a partir de um objeto com propriedades como 'dir' (diretório) e 'base' (nome do arquivo). No exemplo acima, o caminho '/path/to/file.txt' é formatado a partir do objeto e é impresso no console."
        },
        {
        "objeto": 370,
        "propriedade": "path.isAbsolute()",
        "oQueFaz": "Um método que verifica se um caminho é absoluto.",
        "exemplo": "const path = require('path');\n\nconst absolutePath = '/path/to/file.txt';\nconst relativePath = 'file.txt';\n\nconsole.log(path.isAbsolute(absolutePath)); // true\nconsole.log(path.isAbsolute(relativePath)); // false",
        "descricaoDoExemplo": "O método 'path.isAbsolute()' verifica se um caminho é absoluto. Ele retorna 'true' se o caminho for absoluto e 'false' caso contrário. No exemplo acima, é verificado se os caminhos '/path/to/file.txt' e 'file.txt' são absolutos ou relativos, e os resultados são impressos no console."
        },
        {
        "objeto": 371,
        "propriedade": "path.join()",
        "oQueFaz": "Um método que combina segmentos de caminho em um único caminho.",
        "exemplo": "const path = require('path');\n\nconst parentPath = '/path/to';\nconst fileName = 'file.txt';\n\nconst filePath = path.join(parentPath, fileName);\nconsole.log(filePath);",
        "descricaoDoExemplo": "O método 'path.join()' combina segmentos de caminho em um único caminho. No exemplo acima, o segmento '/path/to' e o nome do arquivo 'file.txt' são combinados em um único caminho '/path/to/file.txt', que é impresso no console."
        },
        {
        "objeto": 372,
        "propriedade": "path.normalize()",
        "oQueFaz": "Um método que normaliza um caminho, removendo redundâncias e resolvendo '..' e '.'.",
        "exemplo": "const path = require('path');\n\nconst filePath = '/path//to/file.txt';\nconst normalizedPath = path.normalize(filePath);\nconsole.log(normalizedPath);",
        "descricaoDoExemplo": "O método 'path.normalize()' normaliza um caminho, removendo redundâncias e resolvendo segmentos '..' e '.'. No exemplo acima, o caminho '/path//to/file.txt' é normalizado para '/path/to/file.txt' e é impresso no console."
        },
        {
        "objeto": 373,
        "propriedade": "path.parse()",
        "oQueFaz": "Um método que retorna um objeto com as partes de um caminho.",
        "exemplo": "const path = require('path');\n\nconst filePath = '/path/to/file.txt';\nconst pathObject = path.parse(filePath);\nconsole.log(pathObject);",
        "descricaoDoExemplo": "O método 'path.parse()' retorna um objeto com as partes de um caminho, como 'root' (raiz), 'dir' (diretório), 'base' (nome do arquivo), 'name' (nome sem extensão) e 'ext' (extensão). No exemplo acima, as partes do caminho '/path/to/file.txt' são extraídas e são impressas no console."
        },
        {
        "objeto": 374,
        "propriedade": "path.posix",
        "oQueFaz": "Um objeto que fornece métodos específicos para caminhos no estilo POSIX (Unix).",
        "exemplo": "const path = require('path').posix;\n\nconst filePath = '/path/to/file.txt';\nconst fileName = path.basename(filePath);\nconsole.log(fileName);",
        "descricaoDoExemplo": "O objeto 'path.posix' fornece métodos específicos para manipulação de caminhos no estilo POSIX (Unix). No exemplo acima, o método 'path.basename()' é chamado usando o objeto 'path.posix' para obter o nome do arquivo do caminho '/path/to/file.txt', que é impresso no console."
        },
        {
        "objeto": 375,
        "propriedade": "path.relative()",
        "oQueFaz": "Um método que retorna o caminho relativo entre dois caminhos.",
        "exemplo": "const path = require('path');\n\nconst fromPath = '/path/from';\nconst toPath = '/path/to/file.txt';\n\nconst relativePath = path.relative(fromPath, toPath);\nconsole.log(relativePath);",
        "descricaoDoExemplo": "O método 'path.relative()' retorna o caminho relativo entre dois caminhos. No exemplo acima, é calculado o caminho relativo entre '/path/from' e '/path/to/file.txt' e o resultado é impresso no console."
        },
        {
        "objeto": 376,
        "propriedade": "path.resolve()",
        "oQueFaz": "Um método que resolve um ou mais segmentos de caminho em um caminho absoluto.",
        "exemplo": "const path = require('path');\n\nconst basePath = '/path/to';\nconst fileName = 'file.txt';\n\nconst absolutePath = path.resolve(basePath, fileName);\nconsole.log(absolutePath);",
        "descricaoDoExemplo": "O método 'path.resolve()' resolve um ou mais segmentos de caminho em um caminho absoluto. No exemplo acima, o segmento '/path/to' e o nome do arquivo 'file.txt' são resolvidos em um caminho absoluto, que é impresso no console."
        },
        {
        "objeto": 377,
        "propriedade": "path.sep",
        "oQueFaz": "Uma string que representa o separador de diretórios no sistema operacional atual.",
        "exemplo": "const path = require('path');\n\nconsole.log(Separador de diretórios: ${path.sep});",
        "descricaoDoExemplo": "A propriedade 'path.sep' é uma string que representa o separador de diretórios no sistema operacional atual. No exemplo acima, o separador de diretórios é impresso no console."
        },
        {
        "objeto": 378,
        "propriedade": "process.hrtime.bigint()",
        "oQueFaz": "Um método que retorna o tempo de CPU atual em nanossegundos como um valor BigInt.",
        "exemplo": "const start = process.hrtime.bigint();\n\n// Execute uma operação demorada\n\nconst end = process.hrtime.bigint();\nconst elapsedTime = end - start;\nconsole.log(Tempo decorrido: ${elapsedTime} nanossegundos);",
        "descricaoDoExemplo": "O método 'process.hrtime.bigint()' retorna o tempo de CPU atual em nanossegundos como um valor BigInt. No exemplo acima, é medido o tempo decorrido de uma operação demorada usando esse método e o resultado é impresso no console."
        },
        {
        "objeto":379,
        "propriedade": "process.getegid()",
        "oQueFaz": "Um método que retorna o ID do grupo efetivo do processo.",
        "exemplo": "const gid = process.getegid();\nconsole.log(ID do grupo efetivo: ${gid});",
        "descricaoDoExemplo": "O método 'process.getegid()' retorna o ID do grupo efetivo do processo. No exemplo acima, o ID do grupo efetivo é obtido e é impresso no console."
        },
        {
        "objeto":380,
        "propriedade": "process.geteuid()",
        "oQueFaz": "Um método que retorna o ID do usuário efetivo do processo.",
        "exemplo": "const uid = process.geteuid();\nconsole.log(ID do usuário efetivo: ${uid});",
        "descricaoDoExemplo": "O método 'process.geteuid()' retorna o ID do usuário efetivo do processo. No exemplo acima, o ID do usuário efetivo é obtido e é impresso no console."
        },
        {
        "objeto":381,
        "propriedade": "process.getgid()",
        "oQueFaz": "Um método que retorna o ID do grupo do processo.",
        "exemplo": "const gid = process.getgid();\nconsole.log(ID do grupo: ${gid});",
        "descricaoDoExemplo": "O método 'process.getgid()' retorna o ID do grupo do processo. No exemplo acima, o ID do grupo é obtido e é impresso no console."
        },
        {
        "objeto": 382,
        "propriedade": "process.getgroups()",
        "oQueFaz": "Um método que retorna uma matriz com os IDs dos grupos aos quais o processo pertence.",
        "exemplo": "const groups = process.getgroups();\nconsole.log(IDs dos grupos do processo: ${groups});",
        "descricaoDoExemplo": "O método 'process.getgroups()' retorna uma matriz com os IDs dos grupos aos quais o processo pertence. No exemplo acima, os IDs dos grupos do processo são obtidos e são impressos no console."
        },
        {
        "objeto": 383,
        "propriedade": "process.getuid()",
        "oQueFaz": "Um método que retorna o ID do usuário do processo.",
        "exemplo": "const uid = process.getuid();\nconsole.log(ID do usuário: ${uid});",
        "descricaoDoExemplo": "O método 'process.getuid()' retorna o ID do usuário do processo. No exemplo acima, o ID do usuário é obtido e é impresso no console."
        },
        {
        "objeto": 384,
        "propriedade": "process.mainModule",
        "oQueFaz": "Uma referência ao módulo principal do aplicativo.",
        "exemplo": "console.log(process.mainModule.filename);",
        "descricaoDoExemplo": "A propriedade 'process.mainModule' é uma referência ao módulo principal do aplicativo. No exemplo acima, é impresso o nome do arquivo do módulo principal."
        },
        {
        "objeto": 385,
        "propriedade": "punycode.decode()",
        "oQueFaz": "Um método que decodifica uma sequência de caracteres punycode em uma sequência Unicode.",
        "exemplo": "const punycode = require('punycode');\n\nconst encoded = 'xn--espaol-zwa';\nconst decoded = punycode.decode(encoded);\nconsole.log(decoded);",
        "descricaoDoExemplo": "O método 'punycode.decode()' decodifica uma sequência de caracteres punycode em uma sequência Unicode. No exemplo acima, a sequência 'xn--espaol-zwa' é decodificada em 'español' e é impressa no console."
        },
        {
          "objeto": 386,
          "função": "repl._tabBreakInfoLineNumberString()",
          "oQueFaz": "Executa a conclusão de número de linha como string de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoLineNumberString();",
          "descricaoDoExemplo": "Executa a conclusão de número de linha como string de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 387,
          "função": "punycode.encode()",
          "oQueFaz": "Codifica um domínio Unicode em uma representação de Punycode.",
          "exemplo": "const encoded = punycode.encode('mañana');",
          "descricaoDoExemplo": "Codifica o domínio Unicode 'mañana' em Punycode."
        },
        {
          "objeto": 388,
          "função": "punycode.toASCII()",
          "oQueFaz": "Converte um domínio Unicode em ASCII usando Punycode.",
          "exemplo": "const ascii = punycode.toASCII('mañana');",
          "descricaoDoExemplo": "Converte o domínio Unicode 'mañana' em ASCII usando Punycode."
        },
        {
          "objeto": 389,
          "função": "punycode.toUnicode()",
          "oQueFaz": "Converte um domínio Punycode em Unicode.",
          "exemplo": "const unicode = punycode.toUnicode('xn--maana-pta');",
          "descricaoDoExemplo": "Converte o domínio Punycode 'xn--maana-pta' em Unicode."
        },
        {
          "objeto": 390,
          "função": "querystring.escape()",
          "oQueFaz": "Escapa de caracteres especiais em uma string para ser usada em URLs.",
          "exemplo": "const escaped = querystring.escape('Olá, mundo!');",
          "descricaoDoExemplo": "Escapa de caracteres especiais na string 'Olá, mundo!' para uso em URLs."
        },
        {
          "objeto": 391,
          "função": "querystring.unescape()",
          "oQueFaz": "Decodifica uma string URL escapada.",
          "exemplo": "const unescaped = querystring.unescape('Ol%C3%A1%2C%20mundo%21');",
          "descricaoDoExemplo": "Decodifica a string URL escapada 'Ol%C3%A1%2C%20mundo%21'."
        },
        {
          "objeto": 392,
          "função": "readline.clearLine()",
          "oQueFaz": "Limpa a linha atual em uma interface readline.",
          "exemplo": "readline.clearLine(process.stdout, 0);",
          "descricaoDoExemplo": "Limpa a linha atual no fluxo de saída padrão."
        },
        {
          "objeto": 393,
          "função": "readline.clearScreenDown()",
          "oQueFaz": "Limpa a tela abaixo de uma interface readline.",
          "exemplo": "readline.clearScreenDown(process.stdout);",
          "descricaoDoExemplo": "Limpa a tela abaixo do cursor no fluxo de saída padrão."
        },
        {
          "objeto": 394,
          "função": "readline.cursorTo()",
          "oQueFaz": "Move o cursor para uma determinada posição em uma interface readline.",
          "exemplo": "readline.cursorTo(process.stdout, 0, 0);",
          "descricaoDoExemplo": "Move o cursor para a posição (0, 0) no fluxo de saída padrão."
        },
        {
          "objeto": 395,
          "função": "readline.emitKeypressEvents()",
          "oQueFaz": "Configura uma interface readline para emitir eventos de pressionamento de tecla.",
          "exemplo": "readline.emitKeypressEvents(input, output);",
          "descricaoDoExemplo": "Configura a interface readline para emitir eventos de pressionamento de tecla para o objeto de entrada e saída."
        },
        {
          "objeto": 396,
          "função": "readline.moveCursor()",
          "oQueFaz": "Move o cursor em uma determinada quantidade de linhas e colunas em uma interface readline.",
          "exemplo": "readline.moveCursor(process.stdout, -1, -1);",
          "descricaoDoExemplo": "Move o cursor uma linha para cima e uma coluna para a esquerda no fluxo de saída padrão."
        },
        {
          "objeto": 397,
          "função": "readline.question()",
          "oQueFaz": "Faz uma pergunta ao usuário em uma interface readline e espera por uma resposta.",
          "exemplo": "readline.question('Qual é o seu nome? ', (answer) => { console.log(`Olá, ${answer}!`); });",
          "descricaoDoExemplo": "Faz uma pergunta 'Qual é o seu nome?' e imprime a resposta na console."
        },
        {
          "objeto": 398,
          "função": "readline.close()",
          "oQueFaz": "Fecha uma interface readline.",
          "exemplo": "readline.close();",
          "descricaoDoExemplo": "Fecha a interface readline atual."
        },
        {
          "objeto": 399,
          "função": "repl.start()",
          "oQueFaz": "Inicia uma sessão REPL (Read-Eval-Print Loop) interativa.",
          "exemplo": "const replServer = repl.start();",
          "descricaoDoExemplo": "Inicia uma nova sessão REPL interativa e retorna o objeto de servidor REPL."
        },
        {
          "objeto": 400,
          "função": "repl.writer()",
          "oQueFaz": "Define uma função para personalizar a forma como os resultados são formatados em uma sessão REPL.",
          "exemplo": "repl.writer = (output) => { return JSON.stringify(output, null, 2); };",
          "descricaoDoExemplo": "Define uma função para formatar os resultados como uma string JSON indentada com 2 espaços."
        },
        {
          "objeto": 401,
          "função": "repl.parse()",
          "oQueFaz": "Analisa uma entrada REPL em uma sessão REPL.",
          "exemplo": "const parsed = repl.parse('2 + 2');",
          "descricaoDoExemplo": "Analisa a entrada '2 + 2' na sessão REPL atual e retorna o resultado."
        },
        {
          "objeto": 402,
          "função": "repl.isCommand()",
          "oQueFaz": "Verifica se uma entrada REPL é um comando especial reconhecido pela sessão REPL.",
          "exemplo": "const isCommand = repl.isCommand('.exit');",
          "descricaoDoExemplo": "Verifica se a entrada '.exit' é um comando especial reconhecido pela sessão REPL atual."
        },
        {
          "objeto": 403,
          "função": "repl.isCompletion()",
          "oQueFaz": "Verifica se uma entrada REPL é uma solicitação de conclusão de código.",
          "exemplo": "const isCompletion = repl.isCompletion('Math.a');",
          "descricaoDoExemplo": "Verifica se a entrada 'Math.a' é uma solicitação de conclusão de código na sessão REPL atual."
        },
        {
          "objeto": 404,
          "função": "repl.print()",
          "oQueFaz": "Imprime um valor na saída da sessão REPL.",
          "exemplo": "repl.print('Olá, mundo!');",
          "descricaoDoExemplo": "Imprime 'Olá, mundo!' na saída da sessão REPL atual."
        },
        {
          "objeto": 405,
          "função": "repl.resetEvalContext()",
          "oQueFaz": "Redefine o contexto de avaliação em uma sessão REPL.",
          "exemplo": "repl.resetEvalContext();",
          "descricaoDoExemplo": "Redefine o contexto de avaliação da sessão REPL atual."
        },
        {
          "objeto": 406,
          "função": "repl.displayPrompt()",
          "oQueFaz": "Exibe o prompt da sessão REPL para solicitar uma entrada do usuário.",
          "exemplo": "repl.displayPrompt();",
          "descricaoDoExemplo": "Exibe o prompt da sessão REPL atual para solicitar uma entrada do usuário."
        },
        {
          "objeto": 407,
          "função": "repl.history",
          "oQueFaz": "Propriedade que contém o histórico de comandos de uma sessão REPL.",
          "exemplo": "console.log(repl.history);",
          "descricaoDoExemplo": "Imprime o histórico de comandos da sessão REPL atual."
        },
        {
          "objeto": 408,
          "função": "repl.defineCommand()",
          "oQueFaz": "Define um novo comando personalizado em uma sessão REPL.",
          "exemplo": "repl.defineCommand('sayhello', { help: 'Diz olá', action() { console.log('Olá!'); } });",
          "descricaoDoExemplo": "Define um novo comando 'sayhello' que imprime 'Olá!' na console quando chamado."
        },
        {
          "objeto": 409,
          "função": "repl.highlight()",
          "oQueFaz": "Realça a sintaxe de uma string de código em uma sessão REPL.",
          "exemplo": "const highlighted = repl.highlight('console.log(\"Hello!\")', {});",
          "descricaoDoExemplo": "Realça a sintaxe da string de código 'console.log(\"Hello!\")' na sessão REPL atual."
        },
        {
          "objeto": 410,
          "função": "repl.break()",
          "oQueFaz": "Define um ponto de interrupção em uma sessão REPL.",
          "exemplo": "repl.break();",
          "descricaoDoExemplo": "Define um ponto de interrupção na sessão REPL atual."
        },
        {
          "objeto": 411,
          "função": "repl.clearBreak()",
          "oQueFaz": "Remove todos os pontos de interrupção em uma sessão REPL.",
          "exemplo": "repl.clearBreak();",
          "descricaoDoExemplo": "Remove todos os pontos de interrupção na sessão REPL atual."
        },
        {
          "objeto": 412,
          "função": "repl.clearBreakpoints()",
          "oQueFaz": "Remove todos os pontos de interrupção em uma sessão REPL.",
          "exemplo": "repl.clearBreakpoints();",
          "descricaoDoExemplo": "Remove todos os pontos de interrupção na sessão REPL atual."
        },
        {
          "objeto": 413,
          "função": "repl.compile()",
          "oQueFaz": "Compila um trecho de código em uma sessão REPL.",
          "exemplo": "const compiled = repl.compile('2 + 2');",
          "descricaoDoExemplo": "Compila o trecho de código '2 + 2' na sessão REPL atual e retorna o resultado compilado."
        },
        {
          "objeto": 414,
          "função": "repl.contextEval()",
          "oQueFaz": "Avalia uma expressão em um contexto REPL.",
          "exemplo": "repl.contextEval('console.log(\"Hello!\")');",
          "descricaoDoExemplo": "Avalia a expressão 'console.log(\"Hello!\")' no contexto da sessão REPL atual."
        },
        {
          "objeto": 415,
          "função": "repl.debug()",
          "oQueFaz": "Inicia um depurador interativo em uma sessão REPL.",
          "exemplo": "repl.debug('console.log(\"Hello!\")');",
          "descricaoDoExemplo": "Inicia um depurador interativo para a expressão 'console.log(\"Hello!\")' na sessão REPL atual."
        },
        {
          "objeto": 416,
          "função": "repl.inspect()",
          "oQueFaz": "Insere um objeto em uma sessão REPL para inspeção.",
          "exemplo": "repl.inspect(objeto, { colors: true });",
          "descricaoDoExemplo": "Insere o objeto 'objeto' na sessão REPL atual para inspeção, com suporte a cores."
        },
        {
          "objeto": 417,
          "função": "repl.run()",
          "oQueFaz": "Executa um arquivo em uma sessão REPL.",
          "exemplo": "repl.run('./script.js');",
          "descricaoDoExemplo": "Executa o arquivo './script.js' na sessão REPL atual."
        },
        {
          "objeto": 418,
          "função": "repl.unbreak()",
          "oQueFaz": "Remove um ponto de interrupção específico em uma sessão REPL.",
          "exemplo": "repl.unbreak(1);",
          "descricaoDoExemplo": "Remove o ponto de interrupção com ID 1 na sessão REPL atual."
        },
        {
          "objeto": 419,
          "função": "repl._builtinLibs",
          "oQueFaz": "Lista de bibliotecas internas disponíveis em uma sessão REPL.",
          "exemplo": "console.log(repl._builtinLibs);",
          "descricaoDoExemplo": "Imprime a lista de bibliotecas internas disponíveis na sessão REPL atual."
        },
        {
          "objeto": 420,
          "função": "repl._defaultWriter()",
          "oQueFaz": "Função padrão para formatar os resultados em uma sessão REPL.",
          "exemplo": "repl._defaultWriter(output);",
          "descricaoDoExemplo": "Formata o resultado 'output' usando a função padrão de formatação na sessão REPL atual."
        },
        {
          "objeto": 421,
          "função": "repl._flush()",
          "oQueFaz": "Descarrega o buffer de saída de uma sessão REPL.",
          "exemplo": "repl._flush();",
          "descricaoDoExemplo": "Descarrega o buffer de saída da sessão REPL atual."
        },
        {
          "objeto": 422,
          "função": "repl._isCodeBlock()",
          "oQueFaz": "Verifica se uma string contém um bloco de código em uma sessão REPL.",
          "exemplo": "const isCodeBlock = repl._isCodeBlock('for (let i = 0; i < 10; i++) { console.log(i); }');",
          "descricaoDoExemplo": "Verifica se a string 'for (let i = 0; i < 10; i++) { console.log(i); }' contém um bloco de código na sessão REPL atual."
        },
        {
          "objeto": 423,
          "função": "repl._isExpression()",
          "oQueFaz": "Verifica se uma string contém uma expressão em uma sessão REPL.",
          "exemplo": "const isExpression = repl._isExpression('2 + 2');",
          "descricaoDoExemplo": "Verifica se a string '2 + 2' contém uma expressão na sessão REPL atual."
        },
        {
          "objeto": 424,
          "função": "repl._normalizeBreakpoints()",
          "oQueFaz": "Normaliza uma lista de pontos de interrupção em uma sessão REPL.",
          "exemplo": "const normalized = repl._normalizeBreakpoints(breakpoints);",
          "descricaoDoExemplo": "Normaliza a lista de pontos de interrupção 'breakpoints' na sessão REPL atual."
        },
        {
          "objeto": 425,
          "função": "repl._promptLength()",
          "oQueFaz": "Retorna o comprimento do prompt da sessão REPL.",
          "exemplo": "const promptLength = repl._promptLength();",
          "descricaoDoExemplo": "Retorna o comprimento do prompt da sessão REPL atual."
        },
        {
          "objeto": 426,
          "função": "repl._replCommon()",
          "oQueFaz": "Objeto que contém funções comuns para sessões REPL.",
          "exemplo": "repl._replCommon.actionKeywords;",
          "descricaoDoExemplo": "Acessa a propriedade 'actionKeywords' do objeto 'repl._replCommon' na sessão REPL atual."
        },
        {
          "objeto": 427,
          "função": "repl._replCommon.actionKeywords",
          "oQueFaz": "Lista de palavras-chave de ação em uma sessão REPL.",
          "exemplo": "console.log(repl._replCommon.actionKeywords);",
          "descricaoDoExemplo": "Imprime a lista de palavras-chave de ação na sessão REPL atual."
        },
        {
          "objeto": 428,
          "função": "repl._replCommon.evalCommand()",
          "oQueFaz": "Avalia um comando em uma sessão REPL.",
          "exemplo": "repl._replCommon.evalCommand('.exit');",
          "descricaoDoExemplo": "Avalia o comando '.exit' na sessão REPL atual."
        },
        {
          "objeto": 429,
          "função": "repl._replCommon.readEvalPrintLoop()",
          "oQueFaz": "Inicia o ciclo de leitura, avaliação e impressão em uma sessão REPL.",
          "exemplo": "repl._replCommon.readEvalPrintLoop();",
          "descricaoDoExemplo": "Inicia o ciclo de leitura, avaliação e impressão na sessão REPL atual."
        },
        {
          "objeto": 430,
          "função": "repl._replCommon.start()",
          "oQueFaz": "Inicia uma sessão REPL.",
          "exemplo": "repl._replCommon.start();",
          "descricaoDoExemplo": "Inicia uma nova sessão REPL."
        },
        {
          "objeto": 431,
          "função": "repl._replCommon.underscoreAssigned",
          "oQueFaz": "Verifica se uma variável '_' foi atribuída em uma sessão REPL.",
          "exemplo": "const underscoreAssigned = repl._replCommon.underscoreAssigned;",
          "descricaoDoExemplo": "Verifica se uma variável '_' foi atribuída na sessão REPL atual."
        },
        {
          "objeto": 432,
          "função": "repl._wrapSafe()",
          "oQueFaz": "Envolve um código com um bloco try-catch seguro em uma sessão REPL.",
          "exemplo": "repl._wrapSafe('console.log(\"Hello!\")');",
          "descricaoDoExemplo": "Envolve o código 'console.log(\"Hello!\")' com um bloco try-catch seguro na sessão REPL atual."
        },
        {
          "objeto": 433,
          "função": "repl._wrapUnsafe()",
          "oQueFaz": "Envolve um código com um bloco try-catch inseguro em uma sessão REPL.",
          "exemplo": "repl._wrapUnsafe('console.log(\"Hello!\")');",
          "descricaoDoExemplo": "Envolve o código 'console.log(\"Hello!\")' com um bloco try-catch inseguro na sessão REPL atual."
        },
        {
          "objeto": 434,
          "função": "repl._tab()",
          "oQueFaz": "Executa a conclusão de código em uma sessão REPL.",
          "exemplo": "repl._tab();",
          "descricaoDoExemplo": "Executa a conclusão de código na sessão REPL atual."
        },
        {
          "objeto": 435,
          "função": "repl._tabComplete()",
          "oQueFaz": "Executa a conclusão de código em uma sessão REPL.",
          "exemplo": "repl._tabComplete();",
          "descricaoDoExemplo": "Executa a conclusão de código na sessão REPL atual."
        },
        {
          "objeto": 436,
          "função": "repl._tabHelper()",
          "oQueFaz": "Função auxiliar para execução da conclusão de código em uma sessão REPL.",
          "exemplo": "repl._tabHelper();",
          "descricaoDoExemplo": "Executa a função auxiliar para a conclusão de código na sessão REPL atual."
        },
        {
          "objeto": 437,
          "função": "repl._tabVariable()",
          "oQueFaz": "Executa a conclusão de variável em uma sessão REPL.",
          "exemplo": "repl._tabVariable();",
          "descricaoDoExemplo": "Executa a conclusão de variável na sessão REPL atual."
        },
        {
          "objeto": 438,
          "função": "repl._tabFunction()",
          "oQueFaz": "Executa a conclusão de função em uma sessão REPL.",
          "exemplo": "repl._tabFunction();",
          "descricaoDoExemplo": "Executa a conclusão de função na sessão REPL atual."
        },
        {
          "objeto": 439,
          "função": "repl._tabObject()",
          "oQueFaz": "Executa a conclusão de objeto em uma sessão REPL.",
          "exemplo": "repl._tabObject();",
          "descricaoDoExemplo": "Executa a conclusão de objeto na sessão REPL atual."
        },
        {
          "objeto": 440,
          "função": "repl._tabMethod()",
          "oQueFaz": "Executa a conclusão de método em uma sessão REPL.",
          "exemplo": "repl._tabMethod();",
          "descricaoDoExemplo": "Executa a conclusão de método na sessão REPL atual."
        },
        {
          "objeto": 441,
          "função": "repl._tabKeyword()",
          "oQueFaz": "Executa a conclusão de palavra-chave em uma sessão REPL.",
          "exemplo": "repl._tabKeyword();",
          "descricaoDoExemplo": "Executa a conclusão de palavra-chave na sessão REPL atual."
        },
        {
          "objeto": 442,
          "função": "repl._tabFileName()",
          "oQueFaz": "Executa a conclusão de nome de arquivo em uma sessão REPL.",
          "exemplo": "repl._tabFileName();",
          "descricaoDoExemplo": "Executa a conclusão de nome de arquivo na sessão REPL atual."
        },
        {
          "objeto": 443,
          "função": "repl._tabCommand()",
          "oQueFaz": "Executa a conclusão de comando em uma sessão REPL.",
          "exemplo": "repl._tabCommand();",
          "descricaoDoExemplo": "Executa a conclusão de comando na sessão REPL atual."
        },
        {
          "objeto": 444,
          "função": "repl._tabCommandName()",
          "oQueFaz": "Executa a conclusão de nome de comando em uma sessão REPL.",
          "exemplo": "repl._tabCommandName();",
          "descricaoDoExemplo": "Executa a conclusão de nome de comando na sessão REPL atual."
        },
        {
          "objeto": 445,
          "função": "repl._tabBreak()",
          "oQueFaz": "Executa a conclusão de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreak();",
          "descricaoDoExemplo": "Executa a conclusão de interrupção na sessão REPL atual."
        },
        {
          "objeto": 446,
          "função": "repl._tabBreakPoint()",
          "oQueFaz": "Executa a conclusão de ponto de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakPoint();",
          "descricaoDoExemplo": "Executa a conclusão de ponto de interrupção na sessão REPL atual."
        },
        {
          "objeto": 447,
          "função": "repl._tabBreakCommand()",
          "oQueFaz": "Executa a conclusão de comando de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakCommand();",
          "descricaoDoExemplo": "Executa a conclusão de comando de interrupção na sessão REPL atual."
        },
        {
          "objeto": 448,
          "função": "repl._tabBreakInfo()",
          "oQueFaz": "Executa a conclusão de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfo();",
          "descricaoDoExemplo": "Executa a conclusão de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 449,
          "função": "repl._tabBreakInfoProp()",
          "oQueFaz": "Executa a conclusão de propriedade de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoProp();",
          "descricaoDoExemplo": "Executa a conclusão de propriedade de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 450,
          "função": "repl._tabBreakInfoPosition()",
          "oQueFaz": "Executa a conclusão de posição de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoPosition();",
          "descricaoDoExemplo": "Executa a conclusão de posição de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 451,
          "função": "repl._tabBreakInfoLineNumber()",
          "oQueFaz": "Executa a conclusão de número de linha de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoLineNumber();",
          "descricaoDoExemplo": "Executa a conclusão de número de linha de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 452,
          "função": "repl._tabBreakInfoScriptId()",
          "oQueFaz": "Executa a conclusão de ID de script de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoScriptId();",
          "descricaoDoExemplo": "Executa a conclusão de ID de script de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 453,
          "função": "repl._tabBreakInfoFunctionName()",
          "oQueFaz": "Executa a conclusão de nome de função de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoFunctionName();",
          "descricaoDoExemplo": "Executa a conclusão de nome de função de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 454,
          "função": "repl._tabBreakInfoMethodName()",
          "oQueFaz": "Executa a conclusão de nome de método de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoMethodName();",
          "descricaoDoExemplo": "Executa a conclusão de nome de método de informações de interrupção na sessão REPL atual."
        },
        {
          "objeto": 455,
          "função": "repl._tabBreakInfoFileName()",
          "oQueFaz": "Executa a conclusão de nome de arquivo de informações de interrupção em uma sessão REPL.",
          "exemplo": "repl._tabBreakInfoFileName();",
          "descricaoDoExemplo": "Executa a conclusão de nome de arquivo de informações de interrupção na sessão REPL atual."
        }
      ]
























                                                                          const [searchQueryName, setSearchQueryName] = useState('');
                                                                         
                                                                          const [listajj, setlistajj] = useState(listaJSON);
                                                                    
                                                                          const [originalList, setOriginalList] = useState([]);
                                                                          const[aa,setaa]=useState([]);
                                                                          const [searchQueryNamea, setSearchQueryNamea] = useState('');
                                                                          const[button,setbutton]=useState('1');
                                                                          
                                                                          const styles = `
                                                                          .search-input {
                                                                            width: 200px;
                                                                            margin-bottom: 10px;
                                                                          }
                                                                            .table {
                                                                              border-collapse: collapse;
                                                                              width: 100%;
                                                                            }
                                                                        
                                                                            .table th,
                                                                            .table td {
                                                                              border: 1px solid black;
                                                                              padding: 8px;
                                                                            }
                                                                        
                                                                            .table th {
                                                                              background-color: #f2f2f2;
                                                                            }
                                                                        
                                                                            .table tr:nth-child(even) {
                                                                              background-color: #f2f2f2;
                                                                            }
                                                                        
                                                                            .table tr:hover {
                                                                              background-color: #ddd;
                                                                            }
                               
                                                                           `;






                                                                           
                                                                           useEffect(() => {

                                                                            
                                                                              const functions = {}; // Objeto auxiliar para armazenar as funções encontradas
                                                                              const filteredList = [];
                                                                            
                                                                              for (let i = 0; i < listajj.length; i++) {
                                                                                const item = listajj[i];
                                                                                if (!functions[item.função]) {
                                                                                  functions[item.função] = true;
                                                                                  filteredList.push(item);
                                                                                }
                                                                              }
                                                                            
                                                                            







                                                                            setOriginalList(filteredList);
                                                                        
                                                                          }, [ ,button]);
                                                                          
                                                                          useEffect(() => {
                                                                            function filterData() {
                                                                              const stringa = searchQueryName.toLowerCase().split(' ');
                                                                              const filteredList = originalList.filter((item) => {
                                                                                const string = item.oQueFaz.toLowerCase();
                                                                                let score = 0;
                                                                                for (let i = 0; i < stringa.length; i++) {
                                                                                  const nameMatch = string.includes(stringa[i]);
                                                                                  if (nameMatch) {
                                                                                    score++;
                                                                                  }
                                                                                }
                                                                                return score > 0;
                                                                              });
                                                                          
                                                                              filteredList.sort((a, b) => {
                                                                                const stringA = a.oQueFaz.toLowerCase();
                                                                                const stringB = b.oQueFaz.toLowerCase();
                                                                                let scoreA = 0;
                                                                                let scoreB = 0;
                                                                                for (let i = 0; i < stringa.length; i++) {
                                                                                  if (stringA.includes(stringa[i])) {
                                                                                    scoreA++;
                                                                                  }
                                                                                  if (stringB.includes(stringa[i])) {
                                                                                    scoreB++;
                                                                                  }
                                                                                }
                                                                                return scoreB - scoreA;
                                                                              });
                                                                          
                                                                              if (searchQueryName === '' && aa!='' && button==='1') {
                                                                                
                                                                                setaa(originalList);
                                                                                setlistajj(originalList);
                                                                                window.location.reload()

                                                                              } if (searchQueryName === '' && aa==='') {
                                                                                setaa(originalList);
                                                                                setlistajj(originalList);
                                                                              }
                                                                              
                                                                              
                                                                              
                                                                              else {
                                                                                setaa(filteredList);
                                                                                setlistajj(filteredList);
                                                                              }
                                                                            }
                                                                          
                                                                            filterData();
                                                                          }, [searchQueryName, originalList]);





                                                                          useEffect(() => {
                                                                            function filterData() {
                                                                              const stringa = searchQueryNamea.toLowerCase().split(' ');
                                                                              const filteredList = originalList.filter((item) => {
                                                                                const string = item.função.toLowerCase();
                                                                                let score = 0;
                                                                                for (let i = 0; i < stringa.length; i++) {
                                                                                  const nameMatch = string.includes(stringa[i]);
                                                                                  if (nameMatch) {
                                                                                    score++;
                                                                                  }
                                                                                }
                                                                                return score > 0;
                                                                              });
                                                                          
                                                                              filteredList.sort((a, b) => {
                                                                                const stringA = a.função.toLowerCase();
                                                                                const stringB = b.função.toLowerCase();
                                                                                let scoreA = 0;
                                                                                let scoreB = 0;
                                                                                for (let i = 0; i < stringa.length; i++) {
                                                                                  if (stringA.includes(stringa[i])) {
                                                                                    scoreA++;
                                                                                  }
                                                                                  if (stringB.includes(stringa[i])) {
                                                                                    scoreB++;
                                                                                  }
                                                                                }
                                                                                return scoreB - scoreA;
                                                                              });
                                                                          
                                                                              if (searchQueryNamea === '' && aa!='' && button==='1') {
                                                                                
                                                                                setaa(originalList);
                                                                                setlistajj(originalList);
                                                                                window.location.reload()

                                                                              } if (searchQueryNamea === '' && aa==='') {
                                                                                setaa(originalList);
                                                                                setlistajj(originalList);
                                                                              }
                                                                              
                                                                              
                                                                              
                                                                              else {
                                                                                setaa(filteredList);
                                                                                setlistajj(filteredList);
                                                                              }
                                                                            }
                                                                          
                                                                            filterData();
                                                                          }, [searchQueryNamea, originalList]);
























        
       const javascript=()=>{

setlistajj(listaJSON)
setbutton('1')

       }  
       
       

const node=()=>{
  setlistajj(listaNODE)
  setbutton('2')
  

  

       }

  return (
 
    <div>
   <h1>Funções</h1>
   <style>{styles}</style>
   <div>
        <input
          type="text"
          className='search-input'
          value={searchQueryNamea}
          onChange={(event) => setSearchQueryNamea(event.target.value)}
          placeholder="Pesquisar por nome..."
        />
      </div>
   <div>
        <input
          type="text"
          className='search-input'
          value={searchQueryName}
          onChange={(event) => setSearchQueryName(event.target.value)}
          placeholder="Pesquisar por funcionalidade..."
        />
      </div>
      <button type="button" onClick={javascript}>
          JavaScript
        </button>
        <button type="button" onClick={node}>
          Node
        </button>
  
   <table className="table">
        <thead>
          <tr>
            <th>função</th>
            <th>o que faz</th>
            <th>exemplo</th>
            <th>descrição do exemplo</th>
          </tr>
        </thead>
        <tbody>
        {aa.length === 0 ? (
  listajj.map((item) => (
    <tr key={item.objeto}>
      <td>{item.função}</td>
      <td>{item.oQueFaz}</td>
      <td>{item.exemplo}</td>
      <td>{item.descricaoDoExemplo}</td>
    </tr>
  ))
) : (
  aa.map((pp) => (
    <tr key={pp.objeto}>
      <td>{pp.função}</td>
      <td>{pp.oQueFaz}</td>
      <td>{pp.exemplo}</td>
      <td>{pp.descricaoDoExemplo}</td>
    </tr>
  ))
)}
        </tbody>
      </table>
      
   </div>
  );






}

export default App;
