export const options = {
    
    allowedConnections: ['Username-Password-Authentication', 'facebook','twitter', 'linkedin', 'google-oauth2'], 
    autoclose: true,
    autofocus: false,
    allowForgotPassword: true,
    allowSignUp: true,
    closable: false,
    //container: 'hiw-login-container'
    language: 'pt-br',
    languageDictionary: {
    emailInputPlaceholder: "seu@email.com",
    title: ""
  },
    //socialButtonStyle: 'large',
    rememberLastLogin: true,
    redirect: true,
    theme: {
        logo: '../assets/img/g4349.png',
        primaryColor: 'blue'
    },
    loginAfterSignup: true,
      labeledSubmitButton: true,
      additionalSignUpFields: [    
            {
                name: "full_name",
                placeholder: "Entre com o seu nome completo"
            }]
    /*
    avatar: {
        url: function(email, cb) {
        // Obtain the avatar url for the email input by the user, Lock
        // will preload the image before displaying it.
        // Note that in case of an error you call cb with the error in
        // the first arg instead of `null`.
        var url = obtainAvatarUrl(email);
        cb(null, url);
        },
        displayName: function(email, cb) {
        // Obtain the display name for the email input by the user.
        // Note that in case of an error you call cb with the error in
        // the first arg instead of `null`.
        var displayName = obtainDisplayName(email);
        cb(null, displayName);
        }
    }, 
        
    
    popupOptions: { width: 300, height: 400, left: 200, top: 300 },
    
     
    logo: 'https://example.com/assets/logo.png',
    
    redirectUrl: 'http://testurl.com',
  
    
    mustAcceptTerms: true,
    responseMode: 'form_post',
     responseType: 'token',
    usernameStyle: 'username',
    prefill: '{prefill: {email: "someone@auth0.com", username: "someone"}}',
    forgotPasswordLink: 'https://yoursite.com/reset-password',
    additionalSignUpFields: [
    {
        name: "address",
        placeholder: "Entre com seu endereço",
        // The following properties are optional
        icon: "https://example.com/assests/address_icon.png",
        prefill: "Rua 123",
        validator: function(address:string) {
            return {
                valid: address.length >= 10,
                hint: "Deve ter 10 ou mais caracteres" // optional
            };
        }
    },
    {
        name: "full_name",
        placeholder: "Entre com o seu nome completo"
    },
    {
    type: "select",
    name: "location",
    placeholder: "choose your location",
    options: [
      {value: "us", label: "United States"},
      {value: "fr", label: "France"},
      {value: "br", label: "Brazil"},
      {value: "ar", label: "Argentina"}
    ],
    // The following properties are optional
    icon: "https://example.com/assests/location_icon.png",
    prefill: "br"
  }]
  */
};

