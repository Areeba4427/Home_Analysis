KJE.parameters.set("LANGUAGE", "CA");
KJE.parameters.set("INTERNATIONAL", "TRUE");
KJE.parameters.set("ADDITIONAL_FIELDS", true);
KJE.parameters.set("MSG_YOUR_INCOME", "Gross employment income");
KJE.parameters.set("MSG_FEDERAL_TAX_WITHHOLDING", "Federal tax");
KJE.parameters.set("MSG_STATE_TAX_WITHHOLDING", "CPP/QPP Contributions");
KJE.parameters.set(
  "MSG_INSURANCE_AND_BENEFITS",
  "EI (Employment Insurance) premiums paid"
);
KJE.parameters.set("MSG_LOCAL_TAX_WITHHOLDING", "Union Dues");
KJE.parameters.set(
  "MSG_COMPANY_SAVINGS_PLAN",
  "Company Pension Plan Deductions/GRSP"
);
KJE.parameters.set("MSG_MEDICARE", "Stock Purchase Plan");
KJE.parameters.set("MSG_FICA", "Provincial tax");
KJE.parameters.set("MSG_TOTAL_PAYCHECK", "Total net monthly pay is");
KJE.parameters.set("MSG_YOUR_ADDITIONAL1", "Other debt payments");
KJE.parameters.set("MSG_YOUR_ADDITIONAL2", "Other monthly expenses");
KJE.parameters.set("MSG_YOUR_INCOME", "Gross amount paid");
KJE.parameters.set(
  "MSG_OTHER_TAXES_AND_WITHHOLDINGS",
  "Additional/Other Income Deductions"
);
KJE.parameters.set("MSG_YOUR_SCHOOL_OR_DAYCARE", "School or daycare");
KJE.HomeBudgetCalc = function () {
  this.MSG_GRAPH_REPORT_TITLE = KJE.parameters.get(
    "MSG_GRAPH_REPORT_TITLE",
    "Monthly Budget Expenses"
  );
  this.LBL_FEDERAL_TAX_WITHHOLDING = KJE.parameters.get(
    "MSG_FEDERAL_TAX_WITHHOLDING",
    "Federal tax withholding"
  );
  this.LBL_STATE_TAX_WITHHOLDING = KJE.parameters.get(
    "MSG_STATE_TAX_WITHHOLDING",
    "State tax withholding"
  );
  this.LBL_LOCAL_TAX_WITHHOLDING = KJE.parameters.get(
    "MSG_LOCAL_TAX_WITHHOLDING",
    "Local tax withholding"
  );
  this.LBL_OTHER_TAXES_AND_WITHHOLDINGS = KJE.parameters.get(
    "MSG_OTHER_TAXES_AND_WITHHOLDINGS",
    "Other taxes and withholding"
  );
  this.LBL_FICA = KJE.parameters.get("MSG_FICA", "FICA");
  this.LBL_MEDICARE = KJE.parameters.get("MSG_MEDICARE", "Medicare");
  this.LBL_INSURANCE_AND_BENEFITS = KJE.parameters.get(
    "MSG_INSURANCE_AND_BENEFITS",
    "Insurance and benefits"
  );
  this.LBL_COMPANY_SAVINGS_PLAN = KJE.parameters.get(
    "MSG_COMPANY_SAVINGS_PLAN",
    "Company retirement savings"
  );
  this.INTERNATIONAL = KJE.parameters.get("INTERNATIONAL", false);
  this.MSG_NET_INCOME = KJE.parameters.get("MSG_NET_INCOME", "Net income");
  this.MSG_YOUR_DEBT_PAYMENTS = KJE.parameters.get(
    "MSG_YOUR_DEBT_PAYMENTS",
    "Mortgage and debt"
  );
  this.MSG_YOUR_UTILITIES = KJE.parameters.get(
    "MSG_YOUR_UTILITIES",
    "Utilities"
  );
  this.MSG_YOUR_FOOD_GENERAL = KJE.parameters.get(
    "MSG_YOUR_FOOD_GENERAL",
    "Food and general expenses"
  );
  this.MSG_YOUR_INSURANCE = KJE.parameters.get(
    "MSG_YOUR_INSURANCE",
    "Insurance"
  );
  this.MSG_YOUR_MIXED = KJE.parameters.get(
    "MSG_YOUR_MIXED",
    "Maintenance, medical, childcare, etc."
  );
  this.MSG_TOTAL_AVAILABLE_FOR_SAVINGS = KJE.parameters.get(
    "MSG_TOTAL_AVAILABLE_FOR_SAVINGS",
    "Available for savings"
  );
  this.PERCENT_ADDITIONAL = KJE.FloatArray(2);
  this.YOUR_ADDITIONAL = KJE.FloatArray(2);
  this.MSG_YOUR_ADDITIONAL = new Array(2);
  this.MSG_YOUR_ADDITIONAL[0] = KJE.parameters.get(
    "MSG_YOUR_ADDITIONAL1",
    "Additional debt payment"
  );
  this.MSG_YOUR_ADDITIONAL[1] = KJE.parameters.get(
    "MSG_YOUR_ADDITIONAL2",
    "Additional expenses"
  );
  this.NET_MONTHLY_PAYCHECK = 0;
  this.YEARLY_GROSS_INCOME = 0;
  this.SPOUSE_NET_CHECK = 0;
  this.NET_CHECK = 0;
  this.YOUR_DEBT_PAYMENTS = 0;
  this.YOUR_UTILITIES = 0;
  this.YOUR_FOOD_GENERAL = 0;
  this.YOUR_INSURANCE = 0;
  this.YOUR_MIXED = 0;
  this.PERCENT_DEBT_PAYMENTS = 0;
  this.PERCENT_UTILITIES = 0;
  this.PERCENT_FOOD_GENERAL = 0;
  this.PERCENT_INSURANCE = 0;
  this.PERCENT_MIXED = 0;
  this.PERCENT_AVAILABLE_FOR_SAVINGS = 0;
  this.PERCENT_COMPANY_BENEFITS = 0;
  this.PERCENT_COMPANY_SAVINGS_PLAN = 0;
  this.PERCENT_TAXES_PAID = 0;
  this.PERCENT_EXPENSES_PAID = 0;
  this.sLang = KJE.parameters.get("LANGUAGE", "ENGLISH");
  this.DS_SPENDING = KJE.FloatArray(6);
  this.cats = new Array(6);
  if (KJE.lang == "UK") {
    this.DS_INCOME = KJE.FloatArray(3);
    this.cats2 = new Array(3);
  } else {
    this.DS_INCOME = KJE.FloatArray(8);
    this.cats2 = new Array(8);
  }
};
KJE.HomeBudgetCalc.prototype.clear = function () {
  this.YOUR_INCOME = 0;
  this.INCOME_PAID = 0;
  this.INCOME_PAID_TEXT = "";
  this.OTHER_INCOME = 0;
  this.OTHER_INCOME_PAID = 0;
  this.OTHER_INCOME_PAID_TEXT = "";
  this.SPOUSE_INCOME = 0;
  this.SPOUSE_PAID = 0;
  this.SPOUSE_PAID_TEXT = "";
  this.SPOUSE_OTHER_INCOME_PAID = 0;
  this.SPOUSE_OTHER_INCOME = 0;
  this.SPOUSE_OTHER_INCOME_PAID_TEXT = "";
  this.FICA = 0;
  this.MEDICARE = 0;
  this.FEDERAL_TAX_WITHHOLDING = 0;
  this.STATE_TAX_WITHHOLDING = 0;
  this.LOCAL_TAX_WITHHOLDING = 0;
  this.OTHER_TAXES_AND_WITHHOLDINGS = 0;
  this.INSURANCE_AND_BENEFITS = 0;
  this.COMPANY_SAVINGS_PLAN = 0;
  this.SPOUSE_STATE_TAX_WITHHOLDING = 0;
  this.SPOUSE_LOCAL_TAX_WITHHOLDING = 0;
  this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS = 0;
  this.SPOUSE_FICA = 0;
  this.SPOUSE_MEDICARE = 0;
  this.SPOUSE_INSURANCE_AND_BENEFITS = 0;
  this.SPOUSE_COMPANY_SAVINGS_PLAN = 0;
  this.YOUR_CHURCH = 0;
  this.YOUR_HOUSE_PAYMENT = 0;
  this.YOUR_AUTO_PAYMENT = 0;
  this.YOUR_AUTO_PAYMENT_2 = 0;
  this.YOUR_CREDIT_CARD_PAYMENTS = 0;
  this.YOUR_ELECTRIC = 0;
  this.YOUR_GAS = 0;
  this.YOUR_SEWER = 0;
  this.YOUR_CABLE = 0;
  this.YOUR_TELEPHONE = 0;
  this.YOUR_INTERNET = 0;
  this.YOUR_FOOD = 0;
  this.YOUR_AUTO_GAS_AND_MAINTENANCE = 0;
  this.YOUR_GENERAL_MERCHANDISE = 0;
  this.YOUR_DONATIONS = 0;
  this.YOUR_AUTO_INSURANCE = 0;
  this.YOUR_LIFE = 0;
  this.YOUR_HEALTH = 0;
  this.YOUR_HOME_INSURANCE = 0;
  this.YOUR_HOME_MAINTAINCE = 0;
  this.YOUR_MEDICAL = 0;
  this.YOUR_TRAVEL_AND_ENTERTAINMENT = 0;
  this.YOUR_GIFT_EXPENSE = 0;
  this.YOUR_BANK_SERVICE_CHARGE = 0;
  this.YOUR_SCHOOL_OR_DAYCARE = 0;
};
KJE.HomeBudgetCalc.prototype.calculate = function (G) {
  var f = KJE;
  var X = this.YOUR_INCOME;
  var E = this.FICA;
  var I = this.MEDICARE;
  var d = this.OTHER_INCOME;
  var u = this.FEDERAL_TAX_WITHHOLDING;
  var W = this.STATE_TAX_WITHHOLDING;
  var a = this.LOCAL_TAX_WITHHOLDING;
  var A = this.OTHER_TAXES_AND_WITHHOLDINGS;
  var P = this.INSURANCE_AND_BENEFITS;
  var H = this.COMPANY_SAVINGS_PLAN;
  var o = this.YOUR_HOUSE_PAYMENT;
  var J = this.YOUR_AUTO_PAYMENT;
  var s = this.YOUR_AUTO_PAYMENT_2;
  var F = this.YOUR_CREDIT_CARD_PAYMENTS;
  var S = this.YOUR_ELECTRIC;
  var q = this.YOUR_GAS;
  var k = this.YOUR_SEWER;
  var l = this.YOUR_CABLE;
  var V = this.YOUR_TELEPHONE;
  var j = this.YOUR_INTERNET;
  var D = this.YOUR_FOOD;
  var U = this.YOUR_AUTO_GAS_AND_MAINTENANCE;
  var p = this.YOUR_GENERAL_MERCHANDISE;
  var c = this.YOUR_DONATIONS;
  var m = this.YOUR_AUTO_INSURANCE;
  var K = this.YOUR_LIFE;
  var g = this.YOUR_HEALTH;
  var Y = this.YOUR_HOME_INSURANCE;
  var z = this.YOUR_HOME_MAINTAINCE;
  var Q = this.YOUR_MEDICAL;
  var B = this.YOUR_TRAVEL_AND_ENTERTAINMENT;
  var w = this.YOUR_GIFT_EXPENSE;
  var v = this.YOUR_BANK_SERVICE_CHARGE;
  var y = this.YOUR_SCHOOL_OR_DAYCARE;
  this.NET_CHECK = X - u - W - a - A - E - I - P - H;
  this.NET_INCOME =
    KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, this.NET_CHECK) +
    KJE.HomeBudgetCalc.convertToMonthly(this.OTHER_INCOME_PAID, d);
  this.SPOUSE_NET_CHECK =
    this.SPOUSE_INCOME -
    this.SPOUSE_FEDERAL_TAX_WITHHOLDING -
    this.SPOUSE_STATE_TAX_WITHHOLDING -
    this.SPOUSE_LOCAL_TAX_WITHHOLDING -
    this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS -
    this.SPOUSE_FICA -
    this.SPOUSE_MEDICARE -
    this.SPOUSE_INSURANCE_AND_BENEFITS -
    this.SPOUSE_COMPANY_SAVINGS_PLAN;
  this.SPOUSE_NET_INCOME =
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_PAID,
      this.SPOUSE_NET_CHECK
    ) +
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_OTHER_INCOME_PAID,
      this.SPOUSE_OTHER_INCOME
    );
  this.NET_MONTHLY_INCOME = this.SPOUSE_NET_INCOME + this.NET_INCOME;
  var Z =
    KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, this.YOUR_INCOME) +
    KJE.HomeBudgetCalc.convertToMonthly(this.OTHER_INCOME_PAID, d) +
    KJE.HomeBudgetCalc.convertToMonthly(this.SPOUSE_PAID, this.SPOUSE_INCOME) +
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_OTHER_INCOME_PAID,
      this.SPOUSE_OTHER_INCOME
    );
  this.YEARLY_GROSS_INCOME = Z * 12;
  var h = o + J + s + this.YOUR_ADDITIONAL[0] + F;
  if (h == 0) {
    this.DEBT_RATIO = 0;
  } else {
    if (Z <= 0) {
      this.DEBT_RATIO = 1;
    } else {
      this.DEBT_RATIO = h / Z;
    }
  }
  var b =
    o +
    J +
    s +
    F +
    S +
    q +
    k +
    l +
    V +
    j +
    D +
    U +
    p +
    c +
    m +
    K +
    g +
    Y +
    z +
    Q +
    B +
    w +
    v +
    y +
    this.YOUR_CHURCH;
  for (R = 0; R < this.YOUR_ADDITIONAL.length; R++) {
    b += this.YOUR_ADDITIONAL[R];
  }
  var x = b;
  var O = this.NET_MONTHLY_INCOME - x;
  var T = 1;
  if (O > 0) {
    T = x + O;
  } else {
    T = x;
  }
  this.PERCENT_HOUSE_PAYMENT = T == 0 ? 0 : o / T;
  this.PERCENT_AUTO_PAYMENT = T == 0 ? 0 : J / T;
  this.PERCENT_AUTO_PAYMENT_2 = T == 0 ? 0 : T == 0 ? 0 : s / T;
  this.PERCENT_CREDIT_CARD_PAYMENTS = T == 0 ? 0 : F / T;
  this.PERCENT_ELECTRIC = T == 0 ? 0 : S / T;
  this.PERCENT_GAS = T == 0 ? 0 : q / T;
  this.PERCENT_SEWER = T == 0 ? 0 : k / T;
  this.PERCENT_CABLE = T == 0 ? 0 : l / T;
  this.PERCENT_TELEPHONE = T == 0 ? 0 : V / T;
  this.PERCENT_INTERNET = T == 0 ? 0 : j / T;
  this.PERCENT_FOOD = T == 0 ? 0 : D / T;
  this.PERCENT_AUTO = T == 0 ? 0 : U / T;
  this.PERCENT_GENERAL_MERCHANDISE = T == 0 ? 0 : p / T;
  this.PERCENT_DONATIONS = T == 0 ? 0 : c / T;
  this.PERCENT_AUTO_INSURANCE = T == 0 ? 0 : m / T;
  this.PERCENT_LIFE = T == 0 ? 0 : K / T;
  this.PERCENT_HEALTH = T == 0 ? 0 : g / T;
  this.PERCENT_HOME_INSURANCE = T == 0 ? 0 : Y / T;
  this.PERCENT_HOME_MAINTAINCE = T == 0 ? 0 : z / T;
  this.PERCENT_MEDICAL = T == 0 ? 0 : Q / T;
  this.PERCENT_TRAVEL_AND_ENTERTAINMENT = T == 0 ? 0 : B / T;
  this.PERCENT_GIFT_EXPENSE = T == 0 ? 0 : w / T;
  this.PERCENT_BANK_SERVICE_CHARGE = T == 0 ? 0 : v / T;
  this.PERCENT_SCHOOL_OR_DAYCARE = T == 0 ? 0 : y / T;
  this.PERCENT_CHURCH = T == 0 ? 0 : this.YOUR_CHURCH / T;
  this.PERCENT_TOTAL_EXPENSES = T == 0 ? 0 : x / T;
  this.PERCENT_AMOUNT_ABLE_TO_PUT_INTO_SAVINGS = T == 0 ? 0 : O / T;
  for (var R = 0; R < this.YOUR_ADDITIONAL.length; R++) {
    this.PERCENT_ADDITIONAL[R] = T == 0 ? 0 : this.YOUR_ADDITIONAL[R] / T;
  }
  var e =
    KJE.HomeBudgetCalc.convertToMonthly(
      this.INCOME_PAID,
      u + W + a + A + E + I
    ) +
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_PAID,
      this.SPOUSE_FEDERAL_TAX_WITHHOLDING +
        this.SPOUSE_STATE_TAX_WITHHOLDING +
        this.SPOUSE_LOCAL_TAX_WITHHOLDING +
        this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS +
        this.SPOUSE_FICA +
        this.SPOUSE_MEDICARE
    );
  var r = O * 12;
  var N =
    KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, P) * 12 +
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_PAID,
      this.SPOUSE_INSURANCE_AND_BENEFITS
    ) *
      12;
  var t =
    KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, H) * 12 +
    KJE.HomeBudgetCalc.convertToMonthly(
      this.SPOUSE_PAID,
      this.SPOUSE_COMPANY_SAVINGS_PLAN
    ) *
      12;
  var L = e * 12;
  var C = x * 12;
  if (r >= 0) {
    this.PERCENT_AVAILABLE_FOR_SAVINGS = r / (Z * 12);
    this.PERCENT_COMPANY_BENEFITS = N / (Z * 12);
    this.PERCENT_COMPANY_SAVINGS_PLAN = t / (Z * 12);
    this.PERCENT_TAXES_PAID = L / (Z * 12);
    this.PERCENT_EXPENSES_PAID = C / (Z * 12);
  } else {
    this.PERCENT_AVAILABLE_FOR_SAVINGS = 0;
    this.PERCENT_COMPANY_BENEFITS = N / (Z * 12 - r);
    this.PERCENT_COMPANY_SAVINGS_PLAN = t / (Z * 12 - r);
    this.PERCENT_TAXES_PAID = L / (Z * 12 - r);
    this.PERCENT_EXPENSES_PAID = C / (Z * 12 - r);
  }
  this.YOUR_DEBT_PAYMENTS = o + J + s + F + this.YOUR_ADDITIONAL[0];
  this.YOUR_UTILITIES = S + q + k + l + V + j;
  this.YOUR_FOOD_GENERAL = D + U + p + c + this.YOUR_CHURCH;
  this.YOUR_INSURANCE = m + K + g + Y;
  this.YOUR_MIXED = z + Q + B + w + v + y + this.YOUR_ADDITIONAL[1];
  if (T == 0) {
    T = 1;
  }
  this.PERCENT_DEBT_PAYMENTS = this.YOUR_DEBT_PAYMENTS / T;
  this.PERCENT_UTILITIES = this.YOUR_UTILITIES / T;
  this.PERCENT_FOOD_GENERAL = this.YOUR_FOOD_GENERAL / T;
  this.PERCENT_INSURANCE = this.YOUR_INSURANCE / T;
  this.PERCENT_MIXED = this.YOUR_MIXED / T;
  this.DS_SPENDING[0] = this.PERCENT_DEBT_PAYMENTS;
  this.DS_SPENDING[1] = this.PERCENT_UTILITIES;
  this.DS_SPENDING[2] = this.PERCENT_FOOD_GENERAL;
  this.DS_SPENDING[3] = this.PERCENT_INSURANCE;
  this.DS_SPENDING[4] = this.PERCENT_MIXED;
  this.DS_SPENDING[5] = (O < 0 ? 0 : O) / T;
  this.cats[0] =
    f.dollars(this.YOUR_DEBT_PAYMENTS, 0) +
    " " +
    this.MSG_YOUR_DEBT_PAYMENTS +
    " (" +
    f.percent(this.DS_SPENDING[0], 1) +
    ")";
  this.cats[1] =
    f.dollars(this.YOUR_UTILITIES, 0) +
    " " +
    this.MSG_YOUR_UTILITIES +
    " (" +
    f.percent(this.DS_SPENDING[1], 1) +
    ")";
  this.cats[2] =
    f.dollars(this.YOUR_FOOD_GENERAL, 0) +
    " " +
    this.MSG_YOUR_FOOD_GENERAL +
    " (" +
    f.percent(this.DS_SPENDING[2], 1) +
    ")";
  this.cats[3] =
    f.dollars(this.YOUR_INSURANCE, 0) +
    " " +
    this.MSG_YOUR_INSURANCE +
    " (" +
    f.percent(this.DS_SPENDING[3], 1) +
    ")";
  this.cats[4] =
    f.dollars(this.YOUR_MIXED, 0) +
    " " +
    this.MSG_YOUR_MIXED +
    " (" +
    f.percent(this.DS_SPENDING[4], 1) +
    ")";
  this.cats[5] =
    f.dollars(O, 0) +
    " " +
    this.MSG_TOTAL_AVAILABLE_FOR_SAVINGS +
    " (" +
    f.percent(this.DS_SPENDING[5], 1) +
    ")";
  T = Z;
  if (T == 0) {
    T = 1;
  }
  if (KJE.lang == "UK") {
    this.DS_INCOME[0] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, u) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_FEDERAL_TAX_WITHHOLDING
      );
    this.DS_INCOME[1] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, A) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS
      );
    this.DS_INCOME[2] = this.NET_MONTHLY_INCOME;
    this.cats2[0] =
      f.dollars(this.DS_INCOME[0], 0) +
      " " +
      this.LBL_FEDERAL_TAX_WITHHOLDING +
      " (" +
      f.percent(this.DS_INCOME[0] / T) +
      ")";
    this.cats2[1] =
      f.dollars(this.DS_INCOME[1], 0) +
      " " +
      this.LBL_OTHER_TAXES_AND_WITHHOLDINGS +
      " (" +
      f.percent(this.DS_INCOME[1] / T) +
      ")";
    this.cats2[2] =
      f.dollars(this.DS_INCOME[2], 0) +
      " " +
      this.MSG_NET_INCOME +
      " (" +
      f.percent(this.DS_INCOME[2] / T) +
      ")";
  } else {
    this.DS_INCOME[1] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, W) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_STATE_TAX_WITHHOLDING
      );
    this.DS_INCOME[2] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, a) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_LOCAL_TAX_WITHHOLDING
      );
    this.DS_INCOME[3] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, A) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS
      );
    this.DS_INCOME[5] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, P) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_INSURANCE_AND_BENEFITS
      );
    this.DS_INCOME[6] =
      KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, H) +
      KJE.HomeBudgetCalc.convertToMonthly(
        this.SPOUSE_PAID,
        this.SPOUSE_COMPANY_SAVINGS_PLAN
      );
    this.DS_INCOME[7] = this.NET_MONTHLY_INCOME;
    if (this.sLang == "CA" || this.sLang == "FRENCH") {
      this.DS_INCOME[0] =
        KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, u + E) +
        KJE.HomeBudgetCalc.convertToMonthly(
          this.SPOUSE_PAID,
          this.SPOUSE_FEDERAL_TAX_WITHHOLDING + this.SPOUSE_FICA
        );
      this.DS_INCOME[4] =
        KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, I) +
        KJE.HomeBudgetCalc.convertToMonthly(
          this.SPOUSE_PAID,
          this.SPOUSE_MEDICARE
        );
      this.cats2[0] =
        f.dollars(this.DS_INCOME[0], 0) +
        " " +
        this.LBL_FEDERAL_TAX_WITHHOLDING +
        (this.LBL_FICA == "" ? "" : " + " + this.LBL_FICA) +
        " (" +
        f.percent(this.DS_INCOME[0] / T) +
        ")";
      this.cats2[4] =
        f.dollars(this.DS_INCOME[4], 0) +
        " " +
        this.LBL_MEDICARE +
        " (" +
        f.percent(this.DS_INCOME[4] / T) +
        ")";
    } else {
      this.DS_INCOME[0] =
        KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, u) +
        KJE.HomeBudgetCalc.convertToMonthly(
          this.SPOUSE_PAID,
          this.SPOUSE_FEDERAL_TAX_WITHHOLDING
        );
      this.DS_INCOME[4] =
        KJE.HomeBudgetCalc.convertToMonthly(this.INCOME_PAID, I + E) +
        KJE.HomeBudgetCalc.convertToMonthly(
          this.SPOUSE_PAID,
          this.SPOUSE_MEDICARE + this.SPOUSE_FICA
        );
      this.cats2[0] =
        f.dollars(this.DS_INCOME[0], 0) +
        " " +
        this.LBL_FEDERAL_TAX_WITHHOLDING +
        " (" +
        f.percent(this.DS_INCOME[0] / T) +
        ")";
      this.cats2[4] =
        f.dollars(this.DS_INCOME[4], 0) +
        " " +
        this.LBL_MEDICARE +
        " " +
        KJE.MSG_AND_LBL +
        " " +
        this.LBL_FICA +
        " (" +
        f.percent(this.DS_INCOME[4] / T) +
        ")";
    }
    this.cats2[1] =
      f.dollars(this.DS_INCOME[1], 0) +
      " " +
      this.LBL_STATE_TAX_WITHHOLDING +
      " (" +
      f.percent(this.DS_INCOME[1] / T) +
      ")";
    this.cats2[2] =
      f.dollars(this.DS_INCOME[2], 0) +
      " " +
      this.LBL_LOCAL_TAX_WITHHOLDING +
      " (" +
      f.percent(this.DS_INCOME[2] / T) +
      ")";
    this.cats2[3] =
      f.dollars(this.DS_INCOME[3], 0) +
      " " +
      this.LBL_OTHER_TAXES_AND_WITHHOLDINGS +
      " (" +
      f.percent(this.DS_INCOME[3] / T) +
      ")";
    this.cats2[5] =
      f.dollars(this.DS_INCOME[5], 0) +
      " " +
      this.LBL_INSURANCE_AND_BENEFITS +
      " (" +
      f.percent(this.DS_INCOME[5] / T) +
      ")";
    this.cats2[6] =
      f.dollars(this.DS_INCOME[6], 0) +
      " " +
      this.LBL_COMPANY_SAVINGS_PLAN +
      " (" +
      f.percent(this.DS_INCOME[6] / T) +
      ")";
    this.cats2[7] =
      f.dollars(this.DS_INCOME[7], 0) +
      " " +
      this.MSG_NET_INCOME +
      " (" +
      f.percent(this.DS_INCOME[7] / T) +
      ")";
    for (var M = 0; M < this.DS_INCOME.length; M++) {
      this.DS_INCOME[M] /= T;
    }
  }
  this.TOTAL_MONTHLY_INCOME = Z;
  this.TOTAL_EXPENSES = x;
  this.TOTAL_AVAILABLE_FOR_SAVINGS = O;
  this.TOTAL_TAXES_PAID = e;
  this.YEARLY_AVAILABLE_FOR_SAVINGS = r;
  this.YEARLY_PAID_FOR_COMPANY_BENEFITS = N;
  this.YEARLY_PAID_INTO_COMPANY_SAVINGS_PLAN = t;
  this.YEARLY_TAXES = L;
  this.YEARLY_EXPENSES = C;
};
KJE.HomeBudgetCalc.prototype.formatReport = function (c) {
  var d = KJE;
  var a = this.iDecimal;
  var e = c;
  e = KJE.replace("TABLE_TOTAL_COLS", "6", e);
  e = KJE.replace("SPOUSE_NET_CHECK", d.dollars(this.SPOUSE_NET_CHECK, 2), e);
  e = KJE.replace("SPOUSE_INCOME", d.dollars(this.SPOUSE_INCOME, 2), e);
  e = KJE.replace(
    "SPOUSE_FEDERAL_TAX_WITHHOLDING",
    d.dollars(this.SPOUSE_FEDERAL_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_STATE_TAX_WITHHOLDING",
    d.dollars(this.SPOUSE_STATE_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_LOCAL_TAX_WITHHOLDING",
    d.dollars(this.SPOUSE_LOCAL_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS",
    d.dollars(this.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_INSURANCE_AND_BENEFITS",
    d.dollars(this.SPOUSE_INSURANCE_AND_BENEFITS, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_COMPANY_SAVINGS_PLAN",
    d.dollars(this.SPOUSE_COMPANY_SAVINGS_PLAN, 2),
    e
  );
  e = KJE.replace("SPOUSE_FICA", d.dollars(this.SPOUSE_FICA, 2), e);
  e = KJE.replace("SPOUSE_MEDICARE", d.dollars(this.SPOUSE_MEDICARE, 2), e);
  e = KJE.replace(
    "YEARLY_GROSS_INCOME",
    d.dollars(this.YEARLY_GROSS_INCOME, 2),
    e
  );
  e = KJE.replace(
    "SPOUSE_OTHER_INCOME_PAID_TEXT",
    this.SPOUSE_OTHER_INCOME_PAID_TEXT,
    e
  );
  e = KJE.replace("OTHER_INCOME_PAID_TEXT", this.OTHER_INCOME_PAID_TEXT, e);
  e = KJE.replace(
    "TOTAL_MONTHLY_INCOME",
    d.dollars(this.TOTAL_MONTHLY_INCOME, 2),
    e
  );
  e = KJE.replace(
    "FEDERAL_TAX_WITHHOLDING",
    d.dollars(this.FEDERAL_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "STATE_TAX_WITHHOLDING",
    d.dollars(this.STATE_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "LOCAL_TAX_WITHHOLDING",
    d.dollars(this.LOCAL_TAX_WITHHOLDING, 2),
    e
  );
  e = KJE.replace(
    "OTHER_TAXES_AND_WITHHOLDINGS",
    d.dollars(this.OTHER_TAXES_AND_WITHHOLDINGS, 2),
    e
  );
  e = KJE.replace("FICA", d.dollars(this.FICA, 2), e);
  e = KJE.replace("MEDICARE", d.dollars(this.MEDICARE, 2), e);
  e = KJE.replace(
    "INSURANCE_AND_BENEFITS",
    d.dollars(this.INSURANCE_AND_BENEFITS, 2),
    e
  );
  e = KJE.replace("NET_CHECK", d.dollars(this.NET_CHECK, 2), e);
  e = KJE.replace(
    "NET_MONTHLY_INCOME",
    d.dollars(this.NET_MONTHLY_INCOME, 2),
    e
  );
  e = KJE.replace(
    "YOUR_HOUSE_PAYMENT",
    d.dollars(this.YOUR_HOUSE_PAYMENT, 2),
    e
  );
  e = KJE.replace(
    "YOUR_AUTO_PAYMENT_2",
    d.dollars(this.YOUR_AUTO_PAYMENT_2, 2),
    e
  );
  e = KJE.replace("YOUR_AUTO_PAYMENT", d.dollars(this.YOUR_AUTO_PAYMENT, 2), e);
  e = KJE.replace(
    "YOUR_CREDIT_CARD_PAYMENTS",
    d.dollars(this.YOUR_CREDIT_CARD_PAYMENTS, 2),
    e
  );
  e = KJE.replace("YOUR_ELECTRIC", d.dollars(this.YOUR_ELECTRIC, 2), e);
  e = KJE.replace("YOUR_GAS", d.dollars(this.YOUR_GAS, 2), e);
  e = KJE.replace("YOUR_SEWER", d.dollars(this.YOUR_SEWER, 2), e);
  e = KJE.replace("YOUR_CABLE", d.dollars(this.YOUR_CABLE, 2), e);
  e = KJE.replace("YOUR_TELEPHONE", d.dollars(this.YOUR_TELEPHONE, 2), e);
  e = KJE.replace("YOUR_INTERNET", d.dollars(this.YOUR_INTERNET, 2), e);
  e = KJE.replace("YOUR_FOOD_GENERAL", d.dollars(this.YOUR_FOOD_GENERAL, 2), e);
  e = KJE.replace("YOUR_FOOD", d.dollars(this.YOUR_FOOD, 2), e);
  e = KJE.replace(
    "YOUR_AUTO_GAS_AND_MAINTENANCE",
    d.dollars(this.YOUR_AUTO_GAS_AND_MAINTENANCE, 2),
    e
  );
  e = KJE.replace(
    "YOUR_GENERAL_MERCHANDISE",
    d.dollars(this.YOUR_GENERAL_MERCHANDISE, 2),
    e
  );
  e = KJE.replace("YOUR_DONATIONS", d.dollars(this.YOUR_DONATIONS, 2), e);
  e = KJE.replace(
    "YOUR_AUTO_INSURANCE",
    d.dollars(this.YOUR_AUTO_INSURANCE, 2),
    e
  );
  e = KJE.replace("YOUR_LIFE", d.dollars(this.YOUR_LIFE, 2), e);
  e = KJE.replace("YOUR_HEALTH", d.dollars(this.YOUR_HEALTH, 2), e);
  e = KJE.replace(
    "YOUR_HOME_MAINTAINCE",
    d.dollars(this.YOUR_HOME_MAINTAINCE, 2),
    e
  );
  e = KJE.replace(
    "YOUR_HOME_INSURANCE",
    d.dollars(this.YOUR_HOME_INSURANCE, 2),
    e
  );
  e = KJE.replace("YOUR_MEDICAL", d.dollars(this.YOUR_MEDICAL, 2), e);
  e = KJE.replace(
    "YOUR_TRAVEL_AND_ENTERTAINMENT",
    d.dollars(this.YOUR_TRAVEL_AND_ENTERTAINMENT, 2),
    e
  );
  e = KJE.replace("YOUR_GIFT_EXPENSE", d.dollars(this.YOUR_GIFT_EXPENSE, 2), e);
  e = KJE.replace(
    "YOUR_BANK_SERVICE_CHARGE",
    d.dollars(this.YOUR_BANK_SERVICE_CHARGE, 2),
    e
  );
  e = KJE.replace(
    "YOUR_SCHOOL_OR_DAYCARE",
    d.dollars(this.YOUR_SCHOOL_OR_DAYCARE, 2),
    e
  );
  e = KJE.replace(
    "PERCENT_AVAILABLE_FOR_SAVINGS",
    d.percent(this.PERCENT_AVAILABLE_FOR_SAVINGS, 2),
    e
  );
  e = KJE.replace(
    "PERCENT_COMPANY_BENEFITS",
    d.percent(this.PERCENT_COMPANY_BENEFITS, 2),
    e
  );
  e = KJE.replace(
    "PERCENT_COMPANY_SAVINGS_PLAN",
    d.percent(this.PERCENT_COMPANY_SAVINGS_PLAN, 2),
    e
  );
  e = KJE.replace(
    "PERCENT_TAXES_PAID",
    d.percent(this.PERCENT_TAXES_PAID, 2),
    e
  );
  e = KJE.replace(
    "PERCENT_EXPENSES_PAID",
    d.percent(this.PERCENT_EXPENSES_PAID, 2),
    e
  );
  e = KJE.replace(
    "YEARLY_AVAILABLE_FOR_SAVINGS",
    d.dollars(this.YEARLY_AVAILABLE_FOR_SAVINGS, 2),
    e
  );
  e = KJE.replace(
    "YEARLY_PAID_FOR_COMPANY_BENEFITS",
    d.dollars(this.YEARLY_PAID_FOR_COMPANY_BENEFITS, 2),
    e
  );
  e = KJE.replace(
    "YEARLY_PAID_INTO_COMPANY_SAVINGS_PLAN",
    d.dollars(this.YEARLY_PAID_INTO_COMPANY_SAVINGS_PLAN, 2),
    e
  );
  e = KJE.replace("YEARLY_TAXES", d.dollars(this.YEARLY_TAXES, 2), e);
  e = KJE.replace("YEARLY_EXPENSES", d.dollars(this.YEARLY_EXPENSES, 2), e);
  e = KJE.replace("DEBT_RATIO", d.percent(this.DEBT_RATIO, 2), e);
  e = KJE.replace(
    "PERCENT_HOUSE_PAYMENT",
    d.percent(this.PERCENT_HOUSE_PAYMENT, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_AUTO_PAYMENT_2",
    d.percent(this.PERCENT_AUTO_PAYMENT_2, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_AUTO_PAYMENT",
    d.percent(this.PERCENT_AUTO_PAYMENT, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_CREDIT_CARD_PAYMENTS",
    d.percent(this.PERCENT_CREDIT_CARD_PAYMENTS, 1),
    e
  );
  e = KJE.replace("PERCENT_ELECTRIC", d.percent(this.PERCENT_ELECTRIC, 1), e);
  e = KJE.replace("PERCENT_GAS", d.percent(this.PERCENT_GAS, 1), e);
  e = KJE.replace("PERCENT_SEWER", d.percent(this.PERCENT_SEWER, 1), e);
  e = KJE.replace("PERCENT_CABLE", d.percent(this.PERCENT_CABLE, 1), e);
  e = KJE.replace("PERCENT_TELEPHONE", d.percent(this.PERCENT_TELEPHONE, 1), e);
  e = KJE.replace("PERCENT_INTERNET", d.percent(this.PERCENT_INTERNET, 1), e);
  e = KJE.replace(
    "PERCENT_GENERAL_MERCHANDISE",
    d.percent(this.PERCENT_GENERAL_MERCHANDISE, 1),
    e
  );
  e = KJE.replace("PERCENT_DONATIONS", d.percent(this.PERCENT_DONATIONS, 1), e);
  e = KJE.replace(
    "PERCENT_AUTO_INSURANCE",
    d.percent(this.PERCENT_AUTO_INSURANCE, 1),
    e
  );
  e = KJE.replace("PERCENT_LIFE", d.percent(this.PERCENT_LIFE, 1), e);
  e = KJE.replace("PERCENT_HEALTH", d.percent(this.PERCENT_HEALTH, 1), e);
  e = KJE.replace(
    "PERCENT_HOME_INSURANCE",
    d.percent(this.PERCENT_HOME_INSURANCE, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_HOME_MAINTAINCE",
    d.percent(this.PERCENT_HOME_MAINTAINCE, 1),
    e
  );
  e = KJE.replace("PERCENT_MEDICAL", d.percent(this.PERCENT_MEDICAL, 1), e);
  e = KJE.replace(
    "PERCENT_TRAVEL_AND_ENTERTAINMENT",
    d.percent(this.PERCENT_TRAVEL_AND_ENTERTAINMENT, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_GIFT_EXPENSE",
    d.percent(this.PERCENT_GIFT_EXPENSE, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_BANK_SERVICE_CHARGE",
    d.percent(this.PERCENT_BANK_SERVICE_CHARGE, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_SCHOOL_OR_DAYCARE",
    d.percent(this.PERCENT_SCHOOL_OR_DAYCARE, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_TOTAL_EXPENSES",
    d.percent(this.PERCENT_TOTAL_EXPENSES, 1),
    e
  );
  e = KJE.replace(
    "PERCENT_AMOUNT_ABLE_TO_PUT_INTO_SAVINGS",
    d.percent(this.PERCENT_AMOUNT_ABLE_TO_PUT_INTO_SAVINGS, 1),
    e
  );
  e = KJE.replace("PERCENT_CHURCH", d.percent(this.PERCENT_CHURCH, 1), e);
  e = KJE.replace(
    "PERCENT_DEBT_PAYMENTS",
    d.percent(this.PERCENT_DEBT_PAYMENTS, 1),
    e
  );
  e = KJE.replace("PERCENT_UTILITIES", d.percent(this.PERCENT_UTILITIES, 1), e);
  e = KJE.replace("PERCENT_INSURANCE", d.percent(this.PERCENT_INSURANCE, 1), e);
  e = KJE.replace("PERCENT_MIXED", d.percent(this.PERCENT_MIXED, 1), e);
  e = KJE.replace(
    "PERCENT_FOOD_GENERAL",
    d.percent(this.PERCENT_FOOD_GENERAL, 1),
    e
  );
  e = KJE.replace("PERCENT_FOOD", d.percent(this.PERCENT_FOOD, 1), e);
  e = KJE.replace("SPOUSE_NET_INCOME", d.dollars(this.SPOUSE_NET_INCOME, 2), e);
  e = KJE.replace("NET_INCOME", d.dollars(this.NET_INCOME, 2), e);
  e = KJE.replace("YOUR_CHURCH", d.dollars(this.YOUR_CHURCH, 2), e);
  e = KJE.replace("PERCENT_AUTO", d.percent(this.PERCENT_AUTO, 1), e);
  e = KJE.replace("YOUR_INCOME", d.dollars(this.YOUR_INCOME, 2), e);
  e = KJE.replace("INCOME_PAID_TEXT", this.INCOME_PAID_TEXT, e);
  e = KJE.replace("SPOUSE_PAID_TEXT", this.SPOUSE_PAID_TEXT, e);
  e = KJE.replace(
    "SPOUSE_OTHER_INCOME",
    d.dollars(this.SPOUSE_OTHER_INCOME, 2),
    e
  );
  e = KJE.replace("OTHER_INCOME", d.dollars(this.OTHER_INCOME, 2), e);
  e = KJE.replace("TOTAL_EXPENSES", d.dollars(this.TOTAL_EXPENSES, 2), e);
  e = KJE.replace(
    "TOTAL_AVAILABLE_FOR_SAVINGS",
    d.dollars(this.TOTAL_AVAILABLE_FOR_SAVINGS, 2),
    e
  );
  e = KJE.replace("TOTAL_TAXES_PAID", d.dollars(this.TOTAL_TAXES_PAID, 2), e);
  e = KJE.replace(
    "COMPANY_SAVINGS_PLAN",
    d.dollars(this.COMPANY_SAVINGS_PLAN, 2),
    e
  );
  e = KJE.replace(
    "YOUR_DEBT_PAYMENTS",
    d.dollars(this.YOUR_DEBT_PAYMENTS, 2),
    e
  );
  e = KJE.replace("YOUR_UTILITIES", d.dollars(this.YOUR_UTILITIES, 2), e);
  e = KJE.replace("YOUR_MIXED", d.dollars(this.YOUR_MIXED, 2), e);
  e = KJE.replace("YOUR_INSURANCE", d.dollars(this.YOUR_INSURANCE, 2), e);
  for (var b = 0; b < this.YOUR_ADDITIONAL.length; b++) {
    e = KJE.replace(
      "MSG_YOUR_ADDITIONAL" + (b + 1),
      this.MSG_YOUR_ADDITIONAL[b],
      e
    );
    e = KJE.replace(
      "PERCENT_ADDITIONAL" + (b + 1),
      d.percent(this.PERCENT_ADDITIONAL[b], 1),
      e
    );
    e = KJE.replace(
      "YOUR_ADDITIONAL" + (b + 1),
      d.dollars(this.YOUR_ADDITIONAL[b], 2),
      e
    );
  }
  return e;
};
KJE.HomeBudgetCalc.prototype.formatGraph = function (a, b) {
  b[0].setTitle(
    KJE.getKJEReplaced(
      this.MSG_GRAPH_REPORT_TITLE,
      KJE.dollars(this.TOTAL_EXPENSES),
      KJE.dollars(this.TOTAL_AVAILABLE_FOR_SAVINGS)
    )
  );
  b[0].setTitleGraph(this.MSG_GRAPH_REPORT_TITLE);
  b[0].show(true);
  b[0].paint();
};
KJE.Default.PAY_ANNUAL = 1;
KJE.Default.PAY_SEMIANNUAL = 2;
KJE.Default.PAY_QUARTERLY = 4;
KJE.Default.PAY_MONTHLY = 12;
KJE.Default.PAY_SEMIMONTHLY = 24;
KJE.Default.PAY_BIWEEKLY = 26;
KJE.Default.PAY_WEEKLY = 52;
KJE.Default.PAY_HOURLY = 2080;
KJE.Default.PAY_SELECTIONS = KJE.parameters.get("ARRAY_PAY_SELECTIONS", [
  "Annual",
  "Semi-Annual",
  "Quarterly",
  "Monthly",
  "Semi-Monthly",
  "Bi-Weekly",
  "Weekly",
  "Hourly",
]);
KJE.Default.PAY_INDEX = [
  KJE.Default.PAY_ANNUAL,
  KJE.Default.PAY_SEMIANNUAL,
  KJE.Default.PAY_QUARTERLY,
  KJE.Default.PAY_MONTHLY,
  KJE.Default.PAY_SEMIMONTHLY,
  KJE.Default.PAY_BIWEEKLY,
  KJE.Default.PAY_WEEKLY,
  KJE.Default.PAY_HOURLY,
];
KJE.getDropBoxPaymentFreq = function (a, c, b) {
  return KJE.replace(
    "**" + a + "**",
    KJE.getDropBox(
      a,
      KJE.parameters.get(a, c),
      KJE.Default.PAY_INDEX,
      KJE.Default.PAY_SELECTIONS
    ),
    b
  );
};
KJE.HomeBudgetCalc.convertToMonthly = function (b, a) {
  var c = 0;
  if (b == KJE.Default.PAY_SEMIANNUAL) {
    c += a / 6;
  } else {
    if (b == KJE.Default.PAY_WEEKLY) {
      c += (a * 52) / 12;
    } else {
      if (b == KJE.Default.PAY_HOURLY) {
        c += (a * 2080) / 12;
      } else {
        if (b == KJE.Default.PAY_BIWEEKLY) {
          c += (a * 26) / 12;
        } else {
          if (b == KJE.Default.PAY_SEMIMONTHLY) {
            c += a * 2;
          } else {
            if (b == KJE.Default.PAY_QUARTERLY) {
              c += a / 3;
            } else {
              if (b == KJE.Default.PAY_ANNUAL) {
                c += a / 12;
              } else {
                c += a;
              }
            }
          }
        }
      }
    }
  }
  return c;
};
KJE.CalcName = "Home Budget Calculator (Canadian)";
KJE.CalcType = "CAHomeBudget";
KJE.CalculatorTitleTemplate = "Home Budget Calculator";
KJE.gHeight = 400;
KJE.gHeightReport = 400;
KJE.parseInputs = function (a) {
  a = KJE.getDropBoxPaymentFreq(
    "OTHER_INCOME_PAID",
    KJE.Default.PAY_MONTHLY,
    a
  );
  a = KJE.getDropBoxPaymentFreq(
    "SPOUSE_OTHER_INCOME_PAID",
    KJE.Default.PAY_MONTHLY,
    a
  );
  a = KJE.getDropBoxPaymentFreq("INCOME_PAID", KJE.Default.PAY_MONTHLY, a);
  a = KJE.getDropBoxPaymentFreq("SPOUSE_PAID", KJE.Default.PAY_MONTHLY, a);
  return a;
};
KJE.initialize = function () {
  KJE.CalcControl = new KJE.HomeBudgetCalc();
  KJE.GuiControl = new KJE.HomeBudget(KJE.CalcControl);
};
KJE.HomeBudget = function (n) {
  var e = KJE;
  var b = KJE.gLegend;
  var h = KJE.parameters.get("MSG_ITEM_PERIOD", "Frequency");
  KJE.DollarSlider("YOUR_INCOME", "Gross amount paid", 0, 10000000, 0, 0, 6);
  KJE.DollarSlider("OTHER_INCOME", "Other income", 0, 10000000, 0, 0, 6);
  KJE.DollarSlider("SPOUSE_INCOME", "Gross amount paid", 0, 10000000, 0, 0, 6);
  KJE.DollarSlider("SPOUSE_OTHER_INCOME", "Other income", 0, 10000000, 0, 0, 6);
  KJE.DropBox("INCOME_PAID", h);
  KJE.DropBox("OTHER_INCOME_PAID", h);
  KJE.DropBox("SPOUSE_PAID", h);
  KJE.DropBox("SPOUSE_OTHER_INCOME_PAID", h);
  KJE.DollarSlider(
    "SPOUSE_FEDERAL_TAX_WITHHOLDING",
    n.LBL_FEDERAL_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "SPOUSE_STATE_TAX_WITHHOLDING",
    n.LBL_STATE_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "SPOUSE_LOCAL_TAX_WITHHOLDING",
    n.LBL_LOCAL_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS",
    n.LBL_OTHER_TAXES_AND_WITHHOLDINGS,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider("SPOUSE_FICA", n.LBL_FICA, 0, 10000000, 0, 0, 6);
  KJE.DollarSlider("SPOUSE_MEDICARE", n.LBL_MEDICARE, 0, 10000000, 0, 0, 6);
  KJE.DollarSlider(
    "SPOUSE_INSURANCE_AND_BENEFITS",
    n.LBL_INSURANCE_AND_BENEFITS,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "SPOUSE_COMPANY_SAVINGS_PLAN",
    n.LBL_COMPANY_SAVINGS_PLAN,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider("FICA", n.LBL_FICA, 0, 10000000, 0, 0, 6);
  KJE.DollarSlider("MEDICARE", n.LBL_MEDICARE, 0, 10000000, 0, 0, 6);
  KJE.DollarSlider(
    "FEDERAL_TAX_WITHHOLDING",
    n.LBL_FEDERAL_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "STATE_TAX_WITHHOLDING",
    n.LBL_STATE_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "LOCAL_TAX_WITHHOLDING",
    n.LBL_LOCAL_TAX_WITHHOLDING,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "OTHER_TAXES_AND_WITHHOLDINGS",
    n.LBL_OTHER_TAXES_AND_WITHHOLDINGS,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "INSURANCE_AND_BENEFITS",
    n.LBL_INSURANCE_AND_BENEFITS,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "COMPANY_SAVINGS_PLAN",
    n.LBL_COMPANY_SAVINGS_PLAN,
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider("YOUR_HOUSE_PAYMENT", "House Payment", 0, 10000000, 0, 0, 0);
  KJE.DollarSlider("YOUR_AUTO_PAYMENT", "Auto Payment", 0, 10000000, 0, 0, 6);
  KJE.DollarSlider(
    "YOUR_AUTO_PAYMENT_2",
    "Auto Payment 2",
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "YOUR_CREDIT_CARD_PAYMENTS",
    "Credit Card Payments",
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider("YOUR_ELECTRIC", "Electric", 0, 10000000, 0, 0, 7);
  KJE.DollarSlider("YOUR_GAS", "Gas", 0, 100000000, 0, 0, 7);
  KJE.DollarSlider("YOUR_SEWER", "Sewer and water", 0, 10000, 0, 0, 7);
  KJE.DollarSlider("YOUR_CABLE", "Cable", 0, 100000000, 0, 0, 7);
  KJE.DollarSlider("YOUR_TELEPHONE", "Telephone", 0, 100000000, 0, 0, 7);
  KJE.DollarSlider("YOUR_INTERNET", "Internet", 0, 100000000, 0, 0, 7);
  KJE.DollarSlider("YOUR_FOOD", "Food", 0, 100000, 0, 0, 7);
  KJE.DollarSlider(
    "YOUR_AUTO_GAS_AND_MAINTENANCE",
    "Auto gas and maintenance",
    0,
    100000000,
    0,
    0,
    7
  );
  KJE.DollarSlider(
    "YOUR_GENERAL_MERCHANDISE",
    "General Merchandise",
    0,
    100000,
    0,
    0,
    7
  );
  KJE.DollarSlider(
    "YOUR_DONATIONS",
    "Charitable donations",
    0,
    100000,
    0,
    0,
    7
  );
  KJE.DollarSlider(
    "YOUR_AUTO_INSURANCE",
    "Auto Insurance",
    0,
    100000000,
    0,
    0,
    7
  );
  KJE.DollarSlider("YOUR_LIFE", "Life", 0, 100000000, 0, 0, 6);
  KJE.DollarSlider("YOUR_HEALTH", "Health", 0, 100000000, 0, 0, 6);
  KJE.DollarSlider("YOUR_HOME_INSURANCE", "Home", 0, 100000000, 0, 0, 6);
  KJE.DollarSlider(
    "YOUR_HOME_MAINTAINCE",
    "Home maintenance",
    0,
    100000000,
    0,
    0,
    6
  );
  KJE.DollarSlider("YOUR_MEDICAL", "Medical", 0, 10000000, 0, 0, 6);
  KJE.DollarSlider(
    "YOUR_TRAVEL_AND_ENTERTAINMENT",
    "Travel and Entertainment",
    0,
    10000000,
    0,
    0,
    7
  );
  KJE.DollarSlider("YOUR_GIFT_EXPENSE", "Gift Expense", 0, 10000000, 0, 0, 7);
  KJE.DollarSlider(
    "YOUR_BANK_SERVICE_CHARGE",
    "Bank Service Charge",
    0,
    10000000,
    0,
    0,
    7
  );
  KJE.DollarSlider(
    "YOUR_SCHOOL_OR_DAYCARE",
    "Child care expense",
    0,
    10000000,
    0,
    0,
    7
  );
  KJE.DollarSlider("YOUR_CHURCH", "Religious donations", 0, 10000000, 0, 0, 7);
  KJE.DollarSlider(
    "YOUR_ADDITIONAL1",
    n.MSG_YOUR_ADDITIONAL[0],
    0,
    10000000,
    0,
    0,
    6
  );
  KJE.DollarSlider(
    "YOUR_ADDITIONAL2",
    n.MSG_YOUR_ADDITIONAL[1],
    0,
    10000000,
    0,
    0,
    6
  );
  for (var l = 0; l < n.MSG_YOUR_ADDITIONAL.length; l++) {
    n.MSG_YOUR_ADDITIONAL[l] = KJE.parameters.get(
      "MSG_YOUR_ADDITIONAL" + (l + 1),
      n.MSG_YOUR_ADDITIONAL[l]
    );
  }
  var j = KJE.gNewGraph(
    KJE.gPIE,
    "GRAPH2",
    true,
    false,
    KJE.colorList[1],
    KJE.parameters.get(
      "MSG_GRAPH_TITLE1",
      "Monthly expenses of KJE1 leave you with KJE2 available for savings."
    )
  );
  j._legend._iOrientation = b.BOTTOM;
  var f = KJE.gNewGraph(
    KJE.gPIE,
    "GRAPH1",
    true,
    true,
    KJE.colorList[1],
    KJE.parameters.get(
      "MSG_GRAPH_TITLE2",
      "Monthly net income is KJE1 after taking KJE2 in deductions."
    )
  );
  if (f) {
    f._legend._iOrientation = b.BOTTOM;
  }
  var a = KJE.parameters.get("MSG_DROPPER_TITLE", "Your monthly net income");
  var d = function () {
    return a + "|" + KJE.subText(e.dollars(n.NET_INCOME), "KJERightBold");
  };
  KJE.addDropper(new KJE.Dropper("INPUTS", true, d, d), KJE.colorList[0]);
  var q = KJE.parameters.get("MSG_SPOUSE_TITLE", "Spouse's monthly net income");
  var c = function () {
    return (
      q + "|" + KJE.subText(e.dollars(n.SPOUSE_NET_INCOME), "KJERightBold")
    );
  };
  KJE.addDropper(new KJE.Dropper("SPOUSE", false, c, c), KJE.colorList[0]);
  var k = function () {
    return (
      n.MSG_YOUR_DEBT_PAYMENTS +
      "|" +
      KJE.subText(e.dollars(n.YOUR_DEBT_PAYMENTS), "KJERightBold")
    );
  };
  KJE.addDropper(
    new KJE.Dropper("DEBT_PAYMENTS", false, k, k),
    KJE.colorList[0]
  );
  var o = function () {
    return (
      n.MSG_YOUR_MIXED +
      "|" +
      KJE.subText(e.dollars(n.YOUR_MIXED), "KJERightBold")
    );
  };
  KJE.addDropper(new KJE.Dropper("MIXED", false, o, o), KJE.colorList[0]);
  var p = function () {
    return (
      n.MSG_YOUR_INSURANCE +
      "|" +
      KJE.subText(e.dollars(n.YOUR_INSURANCE), "KJERightBold")
    );
  };
  KJE.addDropper(new KJE.Dropper("INSURANCE", false, p, p), KJE.colorList[0]);
  var m = function () {
    return (
      n.MSG_YOUR_FOOD_GENERAL +
      "|" +
      KJE.subText(e.dollars(n.YOUR_FOOD_GENERAL), "KJERightBold")
    );
  };
  KJE.addDropper(
    new KJE.Dropper("FOOD_GENERAL", false, m, m),
    KJE.colorList[0]
  );
  var g = function () {
    return (
      n.MSG_YOUR_UTILITIES +
      "|" +
      KJE.subText(e.dollars(n.YOUR_UTILITIES), "KJERightBold")
    );
  };
  KJE.addDropper(new KJE.Dropper("UTILITIES", false, g, g), KJE.colorList[0]);
};
KJE.HomeBudget.prototype.setValues = function (b) {
  var a = KJE.inputs.items;
  b.YOUR_INCOME = a.YOUR_INCOME.getValue();
  b.INCOME_PAID = a.INCOME_PAID.getValue();
  b.INCOME_PAID_TEXT = a.INCOME_PAID.getFormatted();
  b.OTHER_INCOME = a.OTHER_INCOME.getValue();
  b.OTHER_INCOME_PAID = a.OTHER_INCOME_PAID.getValue();
  b.OTHER_INCOME_PAID_TEXT = a.OTHER_INCOME_PAID.getFormatted();
  b.SPOUSE_INCOME = a.SPOUSE_INCOME.getValue();
  b.SPOUSE_PAID = a.SPOUSE_PAID.getValue();
  b.SPOUSE_PAID_TEXT = a.SPOUSE_PAID.getFormatted();
  b.SPOUSE_OTHER_INCOME = a.SPOUSE_OTHER_INCOME.getValue();
  b.SPOUSE_OTHER_INCOME_PAID = a.SPOUSE_OTHER_INCOME_PAID.getValue();
  b.SPOUSE_OTHER_INCOME_PAID_TEXT = a.SPOUSE_OTHER_INCOME_PAID.getFormatted();
  b.FICA = a.FICA.getValue();
  b.MEDICARE = a.MEDICARE.getValue();
  b.SPOUSE_FEDERAL_TAX_WITHHOLDING =
    a.SPOUSE_FEDERAL_TAX_WITHHOLDING.getValue();
  b.SPOUSE_STATE_TAX_WITHHOLDING = a.SPOUSE_STATE_TAX_WITHHOLDING.getValue();
  b.SPOUSE_LOCAL_TAX_WITHHOLDING = a.SPOUSE_LOCAL_TAX_WITHHOLDING.getValue();
  b.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS =
    a.SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS.getValue();
  b.SPOUSE_FICA = a.SPOUSE_FICA.getValue();
  b.SPOUSE_MEDICARE = a.SPOUSE_MEDICARE.getValue();
  b.SPOUSE_INSURANCE_AND_BENEFITS = a.SPOUSE_INSURANCE_AND_BENEFITS.getValue();
  b.SPOUSE_COMPANY_SAVINGS_PLAN = a.SPOUSE_COMPANY_SAVINGS_PLAN.getValue();
  b.FEDERAL_TAX_WITHHOLDING = a.FEDERAL_TAX_WITHHOLDING.getValue();
  b.STATE_TAX_WITHHOLDING = a.STATE_TAX_WITHHOLDING.getValue();
  b.LOCAL_TAX_WITHHOLDING = a.LOCAL_TAX_WITHHOLDING.getValue();
  b.OTHER_TAXES_AND_WITHHOLDINGS = a.OTHER_TAXES_AND_WITHHOLDINGS.getValue();
  b.INSURANCE_AND_BENEFITS = a.INSURANCE_AND_BENEFITS.getValue();
  b.COMPANY_SAVINGS_PLAN = a.COMPANY_SAVINGS_PLAN.getValue();
  b.YOUR_HOUSE_PAYMENT = a.YOUR_HOUSE_PAYMENT.getValue();
  b.YOUR_AUTO_PAYMENT = a.YOUR_AUTO_PAYMENT.getValue();
  b.YOUR_AUTO_PAYMENT_2 = a.YOUR_AUTO_PAYMENT_2.getValue();
  b.YOUR_CREDIT_CARD_PAYMENTS = a.YOUR_CREDIT_CARD_PAYMENTS.getValue();
  b.YOUR_ELECTRIC = a.YOUR_ELECTRIC.getValue();
  b.YOUR_GAS = a.YOUR_GAS.getValue();
  b.YOUR_SEWER = a.YOUR_SEWER.getValue();
  b.YOUR_CABLE = a.YOUR_CABLE.getValue();
  b.YOUR_TELEPHONE = a.YOUR_TELEPHONE.getValue();
  b.YOUR_INTERNET = a.YOUR_INTERNET.getValue();
  b.YOUR_FOOD = a.YOUR_FOOD.getValue();
  b.YOUR_AUTO_GAS_AND_MAINTENANCE = a.YOUR_AUTO_GAS_AND_MAINTENANCE.getValue();
  b.YOUR_GENERAL_MERCHANDISE = a.YOUR_GENERAL_MERCHANDISE.getValue();
  b.YOUR_DONATIONS = a.YOUR_DONATIONS.getValue();
  b.YOUR_AUTO_INSURANCE = a.YOUR_AUTO_INSURANCE.getValue();
  b.YOUR_LIFE = a.YOUR_LIFE.getValue();
  b.YOUR_HEALTH = a.YOUR_HEALTH.getValue();
  b.YOUR_HOME_INSURANCE = a.YOUR_HOME_INSURANCE.getValue();
  b.YOUR_HOME_MAINTAINCE = a.YOUR_HOME_MAINTAINCE.getValue();
  b.YOUR_MEDICAL = a.YOUR_MEDICAL.getValue();
  b.YOUR_TRAVEL_AND_ENTERTAINMENT = a.YOUR_TRAVEL_AND_ENTERTAINMENT.getValue();
  b.YOUR_GIFT_EXPENSE = a.YOUR_GIFT_EXPENSE.getValue();
  b.YOUR_BANK_SERVICE_CHARGE = a.YOUR_BANK_SERVICE_CHARGE.getValue();
  b.YOUR_SCHOOL_OR_DAYCARE = a.YOUR_SCHOOL_OR_DAYCARE.getValue();
  b.YOUR_CHURCH = a.YOUR_CHURCH.getValue();
  b.YOUR_ADDITIONAL[0] = a.YOUR_ADDITIONAL1.getValue();
  b.YOUR_ADDITIONAL[1] = a.YOUR_ADDITIONAL2.getValue();
};
KJE.HomeBudget.prototype.refresh = function (d) {
  var c = KJE;
  var a = KJE.gGraphs[0];
  var b = KJE.gGraphs[1];
  KJE.setTitleTemplate();
  a.removeAll();
  a.setGraphCategories(d.cats);
  a.add(new KJE.gGraphDataSeries(d.DS_SPENDING, "Test", a.getColor(1)));
  a.setTitleTemplate(
    c.dollars(d.TOTAL_EXPENSES),
    c.dollars(d.TOTAL_AVAILABLE_FOR_SAVINGS)
  );
  if (b) {
    b.removeAll();
    b.setGraphCategories(d.cats2);
    b.add(new KJE.gGraphDataSeries(d.DS_INCOME, "Test", a.getColor(1)));
    b.setTitleTemplate(
      c.dollars(d.NET_MONTHLY_INCOME),
      c.dollars(
        d.YEARLY_PAID_INTO_COMPANY_SAVINGS_PLAN / 12 +
          d.YEARLY_PAID_FOR_COMPANY_BENEFITS / 12 +
          d.TOTAL_TAXES_PAID
      )
    );
    b.paint();
  }
  a.paint();
};
KJE.InputScreenText =
  " <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-YOUR_INCOME'><input id='KJE-YOUR_INCOME' /></div> <div id='KJE-C-INCOME_PAID'>**INCOME_PAID**</div> <div id='KJE-C-FEDERAL_TAX_WITHHOLDING'><input id='KJE-FEDERAL_TAX_WITHHOLDING' /></div> <div id='KJE-C-FICA'><input id='KJE-FICA' /></div> <div id='KJE-C-STATE_TAX_WITHHOLDING'><input id='KJE-STATE_TAX_WITHHOLDING' /></div> <div id='KJE-C-INSURANCE_AND_BENEFITS'><input id='KJE-INSURANCE_AND_BENEFITS' /></div> <div id='KJE-C-LOCAL_TAX_WITHHOLDING'><input id='KJE-LOCAL_TAX_WITHHOLDING' /></div> <div id='KJE-C-COMPANY_SAVINGS_PLAN'><input id='KJE-COMPANY_SAVINGS_PLAN' /></div> <div id='KJE-C-MEDICARE'><input id='KJE-MEDICARE' /></div> <div id='KJE-C-OTHER_TAXES_AND_WITHHOLDINGS'><input id='KJE-OTHER_TAXES_AND_WITHHOLDINGS' /></div> <div id='KJE-C-NET_MONTHLY_PAYCHECK'><div id='KJE-NET_MONTHLY_PAYCHECK'></div></div> <div id='KJE-C-OTHER_INCOME'><input id='KJE-OTHER_INCOME' /></div> <div id='KJE-C-OTHER_INCOME_PAID'>**OTHER_INCOME_PAID**</div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-SPOUSE><div id=KJE-P-SPOUSE>Input information:</div></div> <div id=KJE-E-SPOUSE > <div id='KJE-C-SPOUSE_INCOME'><input id='KJE-SPOUSE_INCOME' /></div> <div id='KJE-C-SPOUSE_PAID'>**SPOUSE_PAID**</div> <div id='KJE-C-SPOUSE_FEDERAL_TAX_WITHHOLDING'><input id='KJE-SPOUSE_FEDERAL_TAX_WITHHOLDING' /></div> <div id='KJE-C-SPOUSE_FICA'><input id='KJE-SPOUSE_FICA' /></div> <div id='KJE-C-SPOUSE_STATE_TAX_WITHHOLDING'><input id='KJE-SPOUSE_STATE_TAX_WITHHOLDING' /></div> <div id='KJE-C-SPOUSE_INSURANCE_AND_BENEFITS'><input id='KJE-SPOUSE_INSURANCE_AND_BENEFITS' /></div> <div id='KJE-C-SPOUSE_LOCAL_TAX_WITHHOLDING'><input id='KJE-SPOUSE_LOCAL_TAX_WITHHOLDING' /></div> <div id='KJE-C-SPOUSE_COMPANY_SAVINGS_PLAN'><input id='KJE-SPOUSE_COMPANY_SAVINGS_PLAN' /></div> <div id='KJE-C-SPOUSE_MEDICARE'><input id='KJE-SPOUSE_MEDICARE' /></div> <div id='KJE-C-SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS'><input id='KJE-SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS' /></div> <div id='KJE-C-SPOUSE_OTHER_INCOME'><input id='KJE-SPOUSE_OTHER_INCOME' /></div> <div id='KJE-C-SPOUSE_OTHER_INCOME_PAID'>**SPOUSE_OTHER_INCOME_PAID**</div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-DEBT_PAYMENTS><div id=KJE-P-DEBT_PAYMENTS>Debt:</div></div> <div id=KJE-E-DEBT_PAYMENTS > <div id='KJE-C-YOUR_HOUSE_PAYMENT'><input id='KJE-YOUR_HOUSE_PAYMENT' /></div> <div id='KJE-C-YOUR_AUTO_PAYMENT'><input id='KJE-YOUR_AUTO_PAYMENT' /></div> <div id='KJE-C-YOUR_AUTO_PAYMENT_2'><input id='KJE-YOUR_AUTO_PAYMENT_2' /></div> <div id='KJE-C-YOUR_CREDIT_CARD_PAYMENTS'><input id='KJE-YOUR_CREDIT_CARD_PAYMENTS' /></div> <div id='KJE-C-YOUR_ADDITIONAL1'><input id='KJE-YOUR_ADDITIONAL1' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-UTILITIES><div id=KJE-P-UTILITIES>Utilities:</div></div> <div id=KJE-E-UTILITIES > <div id='KJE-C-YOUR_ELECTRIC'><input id='KJE-YOUR_ELECTRIC' /></div> <div id='KJE-C-YOUR_GAS'><input id='KJE-YOUR_GAS' /></div> <div id='KJE-C-YOUR_SEWER'><input id='KJE-YOUR_SEWER' /></div> <div id='KJE-C-YOUR_CABLE'><input id='KJE-YOUR_CABLE' /></div> <div id='KJE-C-YOUR_TELEPHONE'><input id='KJE-YOUR_TELEPHONE' /></div> <div id='KJE-C-YOUR_INTERNET'><input id='KJE-YOUR_INTERNET' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-FOOD_GENERAL><div id=KJE-P-FOOD_GENERAL>Food:</div></div> <div id=KJE-E-FOOD_GENERAL > <div id='KJE-C-YOUR_FOOD'><input id='KJE-YOUR_FOOD' /></div> <div id='KJE-C-YOUR_AUTO_GAS_AND_MAINTENANCE'><input id='KJE-YOUR_AUTO_GAS_AND_MAINTENANCE' /></div> <div id='KJE-C-YOUR_GENERAL_MERCHANDISE'><input id='KJE-YOUR_GENERAL_MERCHANDISE' /></div> <div id='KJE-C-YOUR_DONATIONS'><input id='KJE-YOUR_DONATIONS' /></div> <div id='KJE-C-YOUR_CHURCH'><input id='KJE-YOUR_CHURCH' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INSURANCE><div id=KJE-P-INSURANCE>Insurance:</div></div> <div id=KJE-E-INSURANCE > <div id='KJE-C-YOUR_AUTO_INSURANCE'><input id='KJE-YOUR_AUTO_INSURANCE' /></div> <div id='KJE-C-YOUR_LIFE'><input id='KJE-YOUR_LIFE' /></div> <div id='KJE-C-YOUR_HEALTH'><input id='KJE-YOUR_HEALTH' /></div> <div id='KJE-C-YOUR_HOME_INSURANCE'><input id='KJE-YOUR_HOME_INSURANCE' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-MIXED><div id=KJE-P-MIXED>Mixed:</div></div> <div id=KJE-E-MIXED > <div id='KJE-C-YOUR_HOME_MAINTAINCE'><input id='KJE-YOUR_HOME_MAINTAINCE' /></div> <div id='KJE-C-YOUR_MEDICAL'><input id='KJE-YOUR_MEDICAL' /></div> <div id='KJE-C-YOUR_TRAVEL_AND_ENTERTAINMENT'><input id='KJE-YOUR_TRAVEL_AND_ENTERTAINMENT' /></div> <div id='KJE-C-YOUR_GIFT_EXPENSE'><input id='KJE-YOUR_GIFT_EXPENSE' /></div> <div id='KJE-C-YOUR_BANK_SERVICE_CHARGE'><input id='KJE-YOUR_BANK_SERVICE_CHARGE' /></div> <div id='KJE-C-YOUR_SCHOOL_OR_DAYCARE'><input id='KJE-YOUR_SCHOOL_OR_DAYCARE' /></div> <div id='KJE-C-YOUR_ADDITIONAL2'><input id='KJE-YOUR_ADDITIONAL2' /></div> <div style=\"height:10px\"></div> </div> **GRAPH2** **GRAPH1** ";
KJE.DefinitionText =
  " <div id='KJE-D-1' ><dt>Monthly expenses</dt><dd>This is the total of all of your monthly expenses. This includes your expenses for shelter, family, transportation, vacations, entertainment, loan payments, food, clothing, insurance and other miscellaneous items.</dd></div> <div id='KJE-D-2' ><dt>Net monthly pay</dt><dd>Input your income from your paycheque. You can enter your paycheque as well as your spouse's paycheque.</dd></div> <div id='KJE-D-3' ><dt>Misc income</dt><dd>Any other income that you receive can be entered here.</dd></div> <div id='KJE-D-4' ><dt>Income breakdown</dt><dd>View how your income is divided up between your income sources.</dd></div> <div id='KJE-D-5' ><dt>Expenses breakdown</dt><dd>View breakdown of your monthly expenses.</dd></div> ";
KJE.ReportText =
  ' <h2 class=\'KJEReportHeader KJEFontHeading\'>Monthly expenses of TOTAL_EXPENSES leave you with TOTAL_AVAILABLE_FOR_SAVINGS available for savings</h2> **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable> <caption class=\'KJEHeaderRow KJEHeading\'>Mortgage and Debt</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25" scope=\'col\'>%</th><th class="KJEHeading KJECell25" scope=\'col\'>Amount</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>House payment</th><td class="KJECell KJECellBorder">PERCENT_HOUSE_PAYMENT</td><td class="KJECell">YOUR_HOUSE_PAYMENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Auto payment</th><td class="KJECell KJECellBorder">PERCENT_AUTO_PAYMENT</td><td class="KJECell">YOUR_AUTO_PAYMENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Second auto payment</th><td class="KJECell KJECellBorder">PERCENT_AUTO_PAYMENT_2</td><td class="KJECell">YOUR_AUTO_PAYMENT_2</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Credit card payments</th><td class="KJECell KJECellBorder">PERCENT_CREDIT_CARD_PAYMENTS</td><td class="KJECell">YOUR_CREDIT_CARD_PAYMENTS</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>MSG_YOUR_ADDITIONAL1</th><td class="KJECell KJECellBorder">PERCENT_ADDITIONAL1</td><td class="KJECell">YOUR_ADDITIONAL1</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total</th><td class="KJELabel KJECellBorder">PERCENT_DEBT_PAYMENTS</td><td class="KJELabel">YOUR_DEBT_PAYMENTS</td></tr> </tfoot> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable> <caption class=\'KJEHeaderRow KJEHeading\'>Utilities</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25" scope=\'col\'>%</th><th class="KJEHeading KJECell25" scope=\'col\'>Amount</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Electricity</th><td class="KJECell KJECellBorder">PERCENT_ELECTRIC</td><td class="KJECell">YOUR_ELECTRIC</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Gas</th><td class="KJECell KJECellBorder">PERCENT_GAS</td><td class="KJECell">YOUR_GAS</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Sewer and water</th><td class="KJECell KJECellBorder">PERCENT_SEWER</td><td class="KJECell">YOUR_SEWER</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Cable</th><td class="KJECell KJECellBorder">PERCENT_CABLE</td><td class="KJECell">YOUR_CABLE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Telephone</th><td class="KJECell KJECellBorder">PERCENT_TELEPHONE</td><td class="KJECell">YOUR_TELEPHONE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Internet</th><td class="KJECell KJECellBorder">PERCENT_INTERNET</td><td class="KJECell">YOUR_INTERNET</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total</th><td class="KJELabel KJECellBorder">PERCENT_UTILITIES</td><td class="KJELabel">YOUR_UTILITIES</td></tr> </tfoot> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable> <caption class=\'KJEHeaderRow KJEHeading\'>Food and General Expenses</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25" scope=\'col\'>%</th><th class="KJEHeading KJECell25" scope=\'col\'>Amount</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Food</th><td class="KJECell KJECellBorder">PERCENT_FOOD</td><td class="KJECell">YOUR_FOOD</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Auto gas and maintenance</th><td class="KJECell KJECellBorder">PERCENT_AUTO</td><td class="KJECell">YOUR_AUTO_GAS_AND_MAINTENANCE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>General merchandise</th><td class="KJECell KJECellBorder">PERCENT_GENERAL_MERCHANDISE</td><td class="KJECell">YOUR_GENERAL_MERCHANDISE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Charitable donations</th><td class="KJECell KJECellBorder">PERCENT_DONATIONS</td><td class="KJECell">YOUR_DONATIONS</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Religious donations</th><td class="KJECell KJECellBorder">PERCENT_CHURCH</td><td class="KJECell">YOUR_CHURCH</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total</th><td class="KJELabel KJECellBorder">PERCENT_FOOD_GENERAL</td><td class="KJELabel">YOUR_FOOD_GENERAL</td></tr> </tfoot> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable> <caption class=\'KJEHeaderRow KJEHeading\'>Insurance</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25" scope=\'col\'>%</th><th class="KJEHeading KJECell25" scope=\'col\'>Amount</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder scope=\'row\'">Auto</th><td class="KJECell KJECellBorder">PERCENT_AUTO_INSURANCE</td><td class="KJECell">YOUR_AUTO_INSURANCE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Life</th><td class="KJECell KJECellBorder">PERCENT_LIFE</td><td class="KJECell">YOUR_LIFE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Health</th><td class="KJECell KJECellBorder">PERCENT_HEALTH</td><td class="KJECell">YOUR_HEALTH</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Home</th><td class="KJECell KJECellBorder">PERCENT_HOME_INSURANCE</td><td class="KJECell">YOUR_HOME_INSURANCE</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total</th><td class="KJELabel KJECellBorder">PERCENT_INSURANCE</td><td class="KJELabel">YOUR_INSURANCE</td></tr> </tfoot> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable> <caption class=\'KJEHeaderRow KJEHeading\'>Home Maintenance, Medical, Childcare, Etc.</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25">%</th><th class="KJEHeading KJECell25">Amount</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Home maintenance</th><td class="KJECell KJECellBorder">PERCENT_HOME_MAINTAINCE</td><td class="KJECell">YOUR_HOME_MAINTAINCE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Medical expenses</th><td class="KJECell KJECellBorder">PERCENT_MEDICAL</td><td class="KJECell">YOUR_MEDICAL</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Travel and entertainment</th><td class="KJECell KJECellBorder">PERCENT_TRAVEL_AND_ENTERTAINMENT</td><td class="KJECell">YOUR_TRAVEL_AND_ENTERTAINMENT</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Gift expense</th><td class="KJECell KJECellBorder">PERCENT_GIFT_EXPENSE</td><td class="KJECell">YOUR_GIFT_EXPENSE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Bank service charges</th><td class="KJECell KJECellBorder">PERCENT_BANK_SERVICE_CHARGE</td><td class="KJECell">YOUR_BANK_SERVICE_CHARGE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>School or daycare</th><td class="KJECell KJECellBorder">PERCENT_SCHOOL_OR_DAYCARE</td><td class="KJECell">YOUR_SCHOOL_OR_DAYCARE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>MSG_YOUR_ADDITIONAL2</th><td class="KJECell KJECellBorder">PERCENT_ADDITIONAL2</td><td class="KJECell">YOUR_ADDITIONAL2</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total</th><td class="KJELabel KJECellBorder">PERCENT_MIXED</td><td class="KJELabel">YOUR_MIXED</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total expenses</th><td class="KJELabel KJECellBorder">PERCENT_TOTAL_EXPENSES</td><td class="KJELabel">TOTAL_EXPENSES</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total available for savings</th><td class="KJELabel KJECellBorder">PERCENT_AMOUNT_ABLE_TO_PUT_INTO_SAVINGS</td><td class="KJELabel">TOTAL_AVAILABLE_FOR_SAVINGS</td></tr> </tfoot> </table> </div> <h2 class=\'KJEReportHeader KJEFontHeading\'>Income and paycheque deductions</h2> **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Your net monthly income is NET_MONTHLY_INCOME</caption> <thead class=\'KJEReportTHeader\'> <tr class=KJEHeaderRow><td class="KJEHeading KJECell50">&nbsp;</td><th class="KJEHeading KJECell25" scope=\'col\'>You</th><th class="KJEHeading KJECell25" scope=\'col\'>Your Spouse</th></tr> </thead> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Gross employment income</th><td class="KJECell KJECellBorder">YOUR_INCOME INCOME_PAID_TEXT</td><td class="KJECell">SPOUSE_INCOME SPOUSE_PAID_TEXT</td></tr> <!--STARTHIDETAXES--> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Federal tax</th><td class="KJECell KJECellBorder">FEDERAL_TAX_WITHHOLDING</td><td class="KJECell">SPOUSE_FEDERAL_TAX_WITHHOLDING</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Provincial tax</th><td class="KJECell KJECellBorder">FICA</td><td class="KJECell">SPOUSE_FICA</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>CPP/QPP contributions</th><td class="KJECell KJECellBorder">STATE_TAX_WITHHOLDING</td><td class="KJECell">SPOUSE_STATE_TAX_WITHHOLDING</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>EI (Employment Insurance) premiums paid</th><td class="KJECell KJECellBorder">INSURANCE_AND_BENEFITS</td><td class="KJECell">SPOUSE_INSURANCE_AND_BENEFITS</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Union dues</th><td class="KJECell KJECellBorder">LOCAL_TAX_WITHHOLDING</td><td class="KJECell">SPOUSE_LOCAL_TAX_WITHHOLDING</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Company pension plan deduction/GRSP</th><td class="KJECell KJECellBorder">COMPANY_SAVINGS_PLAN</td><td class="KJECell">SPOUSE_COMPANY_SAVINGS_PLAN</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Stock purchase plan</th><td class="KJECell KJECellBorder">MEDICARE</td><td class="KJECell">SPOUSE_MEDICARE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Additional/Other income deductions</th><td class="KJECell KJECellBorder">OTHER_TAXES_AND_WITHHOLDINGS</td><td class="KJECell">SPOUSE_OTHER_TAXES_AND_WITHHOLDINGS</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Net paycheque</th><td class="KJECell KJECellBorder">NET_CHECK</td><td class="KJECell">SPOUSE_NET_CHECK</td></tr> <!--ENDHIDETAXES--> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Other income</th><td class="KJECell KJECellBorder">OTHER_INCOME OTHER_INCOME_PAID_TEXT</td><td class="KJECell">SPOUSE_OTHER_INCOME SPOUSE_OTHER_INCOME_PAID_TEXT</td></tr> </tbody> </table> </div> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Break down of your annual gross income of YEARLY_GROSS_INCOME</caption> <!--STARTHIDETAXES--> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell50" scope=\'row\'>Total taxes</th><td class="KJECell KJECellBorder KJECell25">PERCENT_TAXES_PAID</td><td class="KJECell KJECell25">YEARLY_TAXES per year</td> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Company benefits</th><td class="KJECell KJECellBorder">PERCENT_COMPANY_BENEFITS</td><td class="KJECell">YEARLY_PAID_FOR_COMPANY_BENEFITS per year</td> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Company retirement savings plan</th><td class="KJECell KJECellBorder">PERCENT_COMPANY_SAVINGS_PLAN</td><td class="KJECell">YEARLY_PAID_INTO_COMPANY_SAVINGS_PLAN per year</td> <!--ENDHIDETAXES--> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Expenses paid</th><td class="KJECell KJECellBorder">PERCENT_EXPENSES_PAID</td><td class="KJECell">YEARLY_EXPENSES per year</td> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Available for savings</th><td class="KJECell KJECellBorder">PERCENT_AVAILABLE_FOR_SAVINGS</td><td class="KJECell">YEARLY_AVAILABLE_FOR_SAVINGS per year</td> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Debt ratio</th><td class="KJECell KJECellBorder">DEBT_RATIO</td><td class="KJECell">&nbsp;</td> </table> </div> ';
