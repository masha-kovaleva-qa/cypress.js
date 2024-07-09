describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстан.пароля


         cy.get('#mail').type('german@dolnikov.ru'); //Ввел почту 
         cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
         cy.get('#loginButton').click(); // Нажал кнопку войти

         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что крестик есть и виден пользователю
 
     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстан.пароля


        cy.get('#forgotEmailButton').click(); //Нажимаю восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователей
})
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстан.пароля


        cy.get('#mail').type('german@dolnikov.ru'); //Ввел почту 
        cy.get('#pass').type('iLoveqastudio7'); //Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что крестик есть и виден пользователю

    })
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки восстан.пароля


        cy.get('#mail').type('german.1@dolnikov.ru'); //Ввел неверную почту 
        cy.get('#pass').type('iLoveqastudio1'); //Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что крестик есть и виден пользователю

    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('germandolnikov.ru'); //Ввел почту без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти


        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что крестик есть и виден пользователю

    })
    it('Проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');


        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввел почту разным регистром
        cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
        cy.get('#loginButton').click(); // Нажал кнопку войти


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю,что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю, что крестик есть и виден пользователю

    })
})