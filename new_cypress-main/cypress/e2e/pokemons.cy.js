describe('Покупка аватара', function () {

    it('e2e покупка нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зашла на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //Ввожу почту 
         cy.get('#password').type('USER_PASSWORD'); //Ввожу пароль
         cy.get('.auth__button').click(); // Нажимаю кнопку "Подтвердить"
         cy.get('.header__btns > :nth-child(4)').click();// Нажимаю кнопку "Магазин"
         cy.get(':nth-child(6) > .shop__button').click();// Нажимаю кнопку купить для доступного аватара
         cy.get('.credit').type('4620869113632996'); // Ввожу номер карты
         cy.get('.k_input_ccv').type('125'); // Ввожу код
         cy.get('.k_input_date').type('1225'); // Ввожу срок действия
         cy.get('.k_input_name').type('IVAN IVANOV'); // Ввожу имя владельца карты
         cy.get('.pay-btn').click(); // Нажимаю кнопку "Оплатить"
         cy.get('#cardnumber').type('56456'); // Ввожу код из смс
         cy.get('.payment__submit-button').click(); // Нажимаю кнопку "Отправить"
         cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяю наличие и видимость сообщения об успешной оплате
        })
    })