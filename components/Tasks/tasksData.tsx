interface Task {
  id: number;
  icon: string;
  text: string;
}

const tasksData: Task[] = [
  {
    id: 1,
    icon: "/icons/notes.svg",
    text: "Принципово новий підхід, що дозволяє дистанційно з використанням БПЛА проводити дослідження по виявленню локації вибухонебезпечних предметів",
  },
  {
    id: 2,
    icon: "/icons/security.svg",
    text: " Технологія заснована на методі сканування (ПЕМЗ) – зондування  теріторії разом із аналізом випромінювань аномалій  пошукових об'єктів",
  },
  {
    id: 3,
    icon: "/icons/laptop.svg",
    text: "Проведені тестові польові роботи в реальних умовах",
  },
  {
    id: 4,
    icon: "/icons/calendar.svg",
    text: " Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей ",
  },
  {
    id: 5,
    icon: "/icons/users.svg",
    text: "В Україні є необхідність скласти  карти забруднених територій та об’єктів країни",
  },
  {
    id: 6,
    icon: "/icons/book.svg",
    text: "Ми також надаємо корисні поради щодо вибору дрона, використання його можливостей ",
  },
];

export default tasksData;
