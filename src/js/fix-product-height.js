export const fixProductHeight = () => {
  window.onload = () => {
    const firstColumn = document.querySelector('.featured-product-info__slider');
    const secondColumn = document.querySelector('.featured-product-info__specifications');

    const adjustHeight = () => {
      if (firstColumn && secondColumn) { // Проверка на существование обоих элементов
        if (window.innerWidth >= 768) {
          secondColumn.style.height = `${firstColumn.clientHeight}px`;
        } else {
          secondColumn.style.height = 'auto'; // Сброс высоты для маленьких экранов
        }
      }
    };

    // Изначальная установка высоты, если элементы существуют
    if (firstColumn && secondColumn) {
      adjustHeight();

      // Перенастройка при изменении размеров окна
      window.onresize = adjustHeight;
    }
  };
}
