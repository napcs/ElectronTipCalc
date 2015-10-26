var $ = require('jquery');

var Calculator = {

  init: function() {
    this.billField    = $("#billAmountField");
    this.form         = $("#tip_calc");
    this.outputTip    = $("#tip");
    this.outputTotal  = $("#total");
    this.serviceField = $("#serviceField");

    // set some default values
    this.billField.val(10.00);
    this.serviceField.val(15);
    this.calculate();

    // set up event
    this.form.on("input", function(event) {
      Calculator.calculate();
    });
  },

  calculate: function() {
    var bill = this.billField.val();
    var rate = this.serviceField.val();
    console.log(bill);
    console.log(rate);

    bill = Number(bill);
    bill = bill * 100;

    tip = bill * (rate / 100);
    tip = Math.ceil(tip);

    total = bill + tip;
    tip /= 100;
    total /= 100;

    this.outputTip.html(tip.toFixed(2));
    this.outputTotal.html(total.toFixed(2));
  }

};

Calculator.init();
