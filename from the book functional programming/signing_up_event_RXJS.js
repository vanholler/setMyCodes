Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup') // Observable Представление любого набора значений за любой промежуток времени. Это самый основной строительный блок RxJS.
.pluck('srcElemet', 'value') // pluck Сопоставляет каждое исходное значение (объект) с указанным вложенным свойством.
.map(ssn => ssn.replace(/^\s*|\s*$|-/g, ''))
.filter(ssn => ssn !== null && ssn.length === 9)
.subscribe(validSsn => { //Асинхронно подписывает наблюдателей на это
console.log(`Valid SSN ${validSsn}`);
});

// https://rxjs.dev/
// в дом дереве
// <script src="https://unpkg.com/@reactivex/rxjs@5.0.0-beta.10/dist/global/Rx.umd.js"></script>