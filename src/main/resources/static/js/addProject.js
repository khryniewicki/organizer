$('#myProjects2').modal({
    keyboard: false
});


$('.dropdown-toggle').dropdown();

function addIMG(avatar) {
    $('#avatar2').val('icons/' + avatar);

    $('#img_edit_menu2').attr('src', 'img/icons/' + avatar);
    changestyle();
};

function changestyle() {
    if ($('#img_edit_menu2').attr('src') == null || $('#img_edit_menu2').attr('src') == '') {
        console.log('none');
        $('#img_edit_menu2').hide()
    } else {
        console.log('block');
        $('#img_edit_menu2').show();
    }
}