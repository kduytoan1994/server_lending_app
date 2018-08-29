module.exports = {
  convertStringToNumber: function (number) {
    var i = 1;
    var strResult = "";
    while (number > 0) {
      strResult = (number % 10) + strResult;
      number = Math.floor(number / 10);
      if (i % 3 == 0 && number > 0) {
        strResult = "." + strResult;
      }
      i++;
    }
    return strResult;
  },

  standardMoney : function(money) {
    if (money == 0) return 0;
    if (money=="" || money == null || money == undefined) return 0;
    return this.convertStringToNumber(money * 1000000);
  },

  checkIdGet : function(id) {
    if (id==null || id==undefined || id.length==0)  return false;
    return /^\w+$/.test(id);
  },

  getFullyNumber : function(number) {
    return (number >= 10 ? number+"" : "0"+number);
  },

  calculateDate : function(dateInput, rangeTime) {
    var date = dateInput.split("/"); 

    var nextDate = new Date(date[2], date[1], date[0]);
    nextDate.setMonth(nextDate.getMonth() + rangeTime);

    return this.getFullyNumber(nextDate.getDate()) + "/" + this.getFullyNumber(nextDate.getMonth()) + "/" + nextDate.getFullYear();
  },
};