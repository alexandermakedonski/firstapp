(function($) {

    var submitAjaxRequest = function(e){

        var form = $(this);
        var method = form.find('input[name="_method"]').val() || 'POST';
        $.ajax({
            type: method,
            url: form.prop('action'),
            data: form.serialize(),
            success:function(){
                $.publish('form.submitted');
            }
        })

        e.preventDefault();

    };

    $( "form[data-remote]" ).on( "submit",submitAjaxRequest);

    $('*[data-click-submits-form]').on('switchChange.bootstrapSwitch',function(){
        $(this).closest('form').submit();
    });

})(jQuery);