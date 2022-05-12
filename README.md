# Toast Notification

Toast para notificação de sucesso e error

## Tech usada
* Javascript ES6 e Jquery
* Sass

## Como usar
1. Colocar a div com id toast no body do html
2. Copiar o sass e cole no seu projeto
3. Copiar o Js cole no seu projeto
4. Por fim, para chamar o toast chamar a function show_toast, como parametro passar um objeto com title, message, time e type

***Title*** e o titulo que vai aparecer no toast. Ex. Sucesso <br/>
***Message*** e a menssagem que vai aparecer em baixo do title. Ex: Salvo com sucesso <br/>
***Time*** e o tempo de duração, lembrando que o tempo e em segundos <br/>
***Type*** e o tipo se e success, error e warning (Só aceita esse dois tipo e o nome tem que ser assim msm em english)

tipos aceitos: success, error e warning

```
 show_toast({title: 'Sucesso', message: 'Salvo com sucesso', time: 3, type: 'success'})
```

<br/>

## Imagem

![imagem-demo](/assets/Screenshot_3.png)