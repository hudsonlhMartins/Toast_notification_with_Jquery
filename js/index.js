$(document).ready(function() {
    toast_notification.close_toast();
})


$('#open').click(function() {
    toast_notification.show_toast({title: 'Error', message: 'Não foi salvo', time: 10, type: 'error'})
})
$('#sucess').click(function() {
    toast_notification.show_toast({title: 'Sucesso', message: 'Funcionou, tudo certo', time: 3, type: 'success'})
})
$('#warning').click(function() {
    toast_notification.show_toast({title: 'Aviso', message: 'não esta disponivel', time: 30, type: 'warning'})
})


// Colocar no utils
var toast_notification ={
    /*ESPERANDO TITLE, MENSSAGEM, TIME E TYPE*/
    show_toast:function ({title, message, time, type}) {

        var container_icon = $('#toast .icon');
        var progress = $('#toast .progress');
        var toast = $('#toast')
        $(toast).addClass('visible');
        $(progress).addClass('visible');
        toast_notification.addMessage(title, message);
        var root = document.documentElement;
    
        switch (type) {
            case 'success':
                var existMoreone = $(container_icon).find('svg').length;
                if (existMoreone > 0) {
                    $(container_icon).find('svg').remove();
                }
                $(container_icon).prepend('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>')
                $(toast).addClass('type-success');
                $(toast).removeClass('type-error');
                $(toast).removeClass('type-warning');
    
                break
            case 'error':
                var existMoreone = $(container_icon).find('svg').length;
                if (existMoreone > 0) {
                    $(container_icon).find('svg').remove();
                }
                $(container_icon).prepend('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>')
                $(toast).addClass('type-error');
                $(toast).removeClass('type-success');
                $(toast).removeClass('type-warning');
    
                break
            case 'warning':
                var existMoreone = $(container_icon).find('svg').length;
                if (existMoreone > 0) {
                    $(container_icon).find('svg').remove();
                }
                $(container_icon).prepend('<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"></path></svg>')
                $(toast).removeClass('type-error');
                $(toast).removeClass('type-success');
                $(toast).addClass('type-warning');
    
                break
        }
    
    
        root.style.setProperty('--time-animation', time+'s');
        var timeNormal = time * 1000;
        var timeWithdoutAnimation = time * 1000 + 300;
    
        setTimeout(function() {
            $(toast).removeClass('visible');
        }, timeNormal)
    
        setTimeout(function() {
            $(progress).removeClass('visible');
        },timeWithdoutAnimation)    
    },
    
    
    addMessage: function (titleP, messageP) {
        var title = $('#toast .menssagem .text-1');
       // console.log($(title).text())
        var message = $('#toast .menssagem .text-2');
        $(title).text(titleP);
        $(message).text(messageP);
    },

    
    /* AQUI CHAMAR EESA FUNCTION NO EVENTS */
    close_toast:function () {
        var progress = $('#toast .progress');
        $('.toast .icon-close').click(function() {
            var taost_atual = $(this).closest('.toast')
            $(taost_atual).removeClass('visible');
    
            setTimeout(function() {
                $(progress).removeClass('visible');
            },300)
        })
    }
}
