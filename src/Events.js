/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const buton = document.createElement('button');
    buton.innerHTML = 'Удали меня';
    document.body.append(buton);
    buton.addEventListener('click', buton.remove);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let item of arr) {
        let li = document.createElement('li');
        li.addEventListener('mouseover', () => li.setAttribute('title', item));
        li.innerHTML = item;
        ul.append(li);
    }
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const linq = document.createElement('a');
    linq.setAttribute('href', 'https://tensor.ru/');
    linq.innerHTML = 'tensor';
    linq.addEventListener(
        'click',
        (e) => {
            e.preventDefault();
            linq.innerHTML = `tensor ${linq.getAttribute('href')}`;
        },
        { once: true },
    );
    document.body.append(linq);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = 'Пункт';
    li.addEventListener('click', () => (li.innerHTML = 'Пункт!'), {
        once: true,
    });
    ul.append(li);
    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', () => {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', () => (li.innerHTML = 'Пункт!'), {
            once: true,
        });
        ul.append(li);
    });
    document.body.prepend(ul);
    document.body.append(button);
}
