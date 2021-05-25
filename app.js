$(document).ready(() => {
    let total = 0;
    $('#btn-confirm').on('click', async () => {
        const enterReason = $('#input-reason').val();
        const enterAmount = +$('#input-amount').val();
        const alertCtl = document.createElement('ion-alert');
        if(enterReason.trim().length <= 0 
            || enterAmount <= 0 
                || enterAmount.length <= 0) {
            alertCtl.message = 'Please enter valid reason and amount!'; 
            alertCtl.header = 'Invaild Inputs';
            alertCtl.buttons = ['Okay'];
            document.body.appendChild(alertCtl);
            return alertCtl.present();
        } else {
            $('#expense-list').append('<ion-item>' + enterReason + ': $'+ enterAmount +'</ion-item>');
            total += enterAmount;
            $('#total-expenses').text(total)
            clear();
        }
    })

    const clear = () => {
        $('#input-reason').val('');
        $('#input-amount').val('');
    }

    $('#btn-cancel').on('click', clear)
})