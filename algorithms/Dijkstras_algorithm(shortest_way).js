'use strict';
// хеш таблица графа

const graph = {}
graph["start"] = {}
graph["start"]["a"] = 6;
graph["start"]["b"] = 3;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {}; // у конечно узла нет соседей

// таблица стоимостей
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// таблица родителей
const parents = {};
parents["a"] = 'start';
parents["b"] = 'start';
parents["fin"] = null;

let processed = [];

function find_lowest_cost_node(costs) { // функция найти наименьший узел
let lowest_cost = Infinity;
let lowest_cost_node = null;
for (let node in costs) { // перебрать все узлы
let cost = costs[node];
if (cost < lowest_cost && (processed.indexOf(node) === -1)) { // если меньше уже из виденных и он не был обработан
lowest_cost = cost; // он назначается новым узлом с наименьшей стоимостью.
lowest_cost_node = node;
}
}
return lowest_cost_node;
}

let node = find_lowest_cost_node(costs); // найти узел с наименьшей стоимостью среди необработанных
while ( node !== null ) { //если обработаны все узлы цикл завершен
let cost = costs[node] ;
let neighbord = graph[node];
Object.keys(neighbord).forEach(function(n) { // перебрать всех соседей текущего узла // обджект кейс получить ключи обьекта и фор ич для операции над каждым из них
let new_cost = cost + neighbord[n];
if (costs[n] > new_cost) { // если к соседу можно быстрее добраться через текущий узел...
costs[n] = new_cost // то обновить стоимость этого узла.
parents[n] = node // а этот узел становится новым родителем для соседа.


} 

});


processed = processed.concat(node)   // узел помечается как необработанный 

node = find_lowest_cost_node(costs); // найти след. узел для обработки и повторить цикл.
}

console.log ("кратчайший путь от начала до конца будет весом в : " + costs['fin']);

