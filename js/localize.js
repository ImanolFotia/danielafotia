function localize_content()
{
    console.log(window.navigator.language);
    if(String(window.navigator.language).indexOf("es") != -1){ 
        $("#banner_bio").html('Biografía');
        $("#banner_con").html('Contacto');
        $("#nav_bio").html('<i class="far fa-user"></i> Biografía');
        $("#nav_con").html('<i class="far fa-envelope"></i> Contacto');

        
        $("#contact_title").html('Contactame');
        $("#email_id").html('Email');
        $("#email-form-id").attr("placeholder", 'Tu email...').blur();
        $("#email-help-id").html('Nunca compatiremos tu email con nadie');
        $("#subject-id").html('Asunto');
        $("#form-subject-id").attr("placeholder", 'Asunto...').blur();
        $("#message-id").html('Mensaje');
        $("#text-messaje-id").attr("placeholder", 'Tu mensaje...').blur();
        $("#submit-id").html('Enviar');
    }
}