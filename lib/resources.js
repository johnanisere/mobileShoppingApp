export default {
    potUri:'https://res.cloudinary.com/www-mybukka-com/image/upload/v1518008217/pot_nzunmy.png',
    foodUri:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1517936047/niklas-rhose-14304_iuneus.jpg',
    logo:'https://res.cloudinary.com/www-mybukka-com/image/upload/v1513294716/logo-light_xnxon0_rzghhp.png',
    signupendpoint:'http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/register',
    loginendpoint:"https://chef.mybukka.com/api/v1/bukka/auth/custom/login",
    carddtlsendpoint:"https://chef.mybukka.com/api/v1/bukka/customer/card/",
    resetPassword:'https://chef.mybukka.com/api/v1/bukka/resetPassword',
    forgot_password:'https://chef.mybukka.com/api/v1/bukka/forgotPassword',
    link:'https://mybukka.com/forgotPassword',
    cardicon:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1520859030/Group_4_wpqo8p.png',
    NIGflag:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1520859227/Group_5_xawt8v.png',
    mastercard:'https://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1520859309/image_2_1_m8axpw.png',
    addcard:'https://chef.mybukka.com/api/v1/bukka/customer/cardDetails/',
    paystack: {
        'Authorization': 'Bearer sk_live_c788ab63428164f9a605aec59a2a3e249c4080c1',
        'Content-Type': 'application/json'
      },
    reauth:"https://api.paystack.co/charge",
    paystackOtp:'https://api.paystack.co/charge/submit_otp',
    googleApiKey:'AIzaSyBFtqKn_6Hu_V3CalNPqCi3Nbk5pXXQ9qM'
}

export const mapStateToProps=(state)=>(state)