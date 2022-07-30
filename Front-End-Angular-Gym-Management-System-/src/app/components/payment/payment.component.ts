import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentHandler:any = null;


  constructor() { }

  ngOnInit(): void {

    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('شربتها يا كروديه :)');
      }
    });
  
    paymentHandler.open({
      name: 'NashaatMohamed',
      description: 'ادفع يلا',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LPt1HHqRgQUoXwugQh1UIh1kBMdPbOcbTcApe27Y8slCZspelwvVHN1XOKrWmKjOhnzIX8F84fG4CS4CrIfpO2C00GJRw6oTY',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

}

