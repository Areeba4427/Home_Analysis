(function (d, g) {
  var c = "kje-jaws-panel";
  var a = null;
  d.jawsReader = d.jawsReader || {};
  function b() {
    var h = document.createElement("div");
    h.setAttribute("aria-live", "assertive");
    h.style.position = "absolute";
    h.style.left = "-9999px";
    h.id = c;
    document.body.append(h);
    return h;
  }
  function f() {
    if (!a) {
      a = document.getElementById(c);
      if (!a) {
        a = b();
      }
    }
    return a;
  }
  d.jawsReader.read = function e(i, j) {
    var h = f();
    if (j) {
      h.innerText = "";
    }
    setTimeout(function () {
      h.innerText = i;
    }, 50);
  };
})(window);
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  };
}
document.documentElement.setAttribute("KJE-useragent", navigator.userAgent);
var KJE = {
  lang: "EN",
  initFired: false,
  reportTest: false,
  CalcDelay: 100,
  CalculatorWidthMax: 900,
  CalculatorWidthMin: 320,
  CalculatorWidthNoMargin: false,
  bLockDown: false,
  ShowDefinitions: true,
  ShowCalculateButton: true,
  ShowReportButton: true,
  ShowPrintButton: true,
  ShowExtraClientInputs: false,
  ShowRequiredMessage: true,
  KeepCalculatorOnPage: false,
  KeepCalculatorOnPageAutoReport: false,
  closeCalculatorDroppersForReport: false,
  sExtraClientInputs: "EXTRA",
  ExtraClientInputs:
    "<div id=KJE-D-EXTRA><div id=KJE-P-EXTRA>Input information:</div></div><div id=KJE-E-EXTRA ><div id='KJE-C-EXTRA_CLIENTNAME'><input id='KJE-EXTRA_CLIENTNAME' /></div><div id='KJE-C-EXTRA_NOTES'><input id='KJE-EXTRA_NOTES' /></div><div id='KJE-C-EXTRA_DATE'><input id='KJE-EXTRA_DATE' /></div><div style=\"height:10px\"></div></div>",
  DivDataPoint:
    "<div id='KJEGuiDataPoint' style='top: 0; left: 0;' aria-hidden='true'></div>",
  IncludeDefinitions: true,
  PopupDefinitions: true,
  InlineDefinitions: false,
  SliderWidthAdjust: 0,
  bNativeSlider: true,
  bElementStyling: true,
  ErrorBackground: "#FF7777",
  IncompleteBackground: "#FFFF77",
  CalculatorName: "Calculator Title",
  bUseInputForm: false,
  CommandButtons:
    "<div id='KJEFixed'><div id='KJECommandButtons'><input type=button class=KJECommandButton  name=KJECalculate id=KJECalculate value='**LBL_CALCULATE**' aira-live='assertive'/><input **VIEWREPORT** class=KJECommandButton  id=KJEViewReport name=KJEViewReport value='**LBL_VIEWREPORT**' aira-live='assertive'/></div>**FLOAT_TITLE**</div>",
  CommandMoreButtons:
    "<div id='#KJEMoreButtons**MORE_BUTTON_COUNT**'><input type='button' class='KJEMoreButton' id='KJEAddMore**MORE_BUTTON_COUNT**' name='KJEAddMore' value='**LBL_MORE**'></div>",
  CommandButtonsFloatTitle:
    "<div id='KJEScrollSticky' **STICKY_DISPLAY_STYLE**></div>",
  ReportButtons:
    "<div style='width:100%'><div id='KJEReportButtons'><input type=button class=KJECommandButton  name=KJEPrint id=KJEPrintReport value='**LBL_PRINTREPORT**' /><input type=button  class=KJECommandButton  id=KJEHideReport name=KJEHideReport value='**LBL_HIDEREPORT**' /></div></div>",
  CommandButtonsFixed: false,
  CommandButtonsTop: true,
  CommandButtonOffset: 22,
  CommandButtonHeader: 0,
  FixedHeaderHeight: 0,
  CommandButtonPosition: "relative",
  Scroll: true,
  ScrollMinimum: 23,
  ReportHeader: "<div class='KJEReportTitleHeader'>**REPORT_TITLE**</div>",
  ReportStyleDefault:
    '<style>*{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}body{-webkit-text-size-adjust:none;font-family:Arial,Helvetica,sans-serif;font-weight:normal;font-size:100%;line-height:normal;padding:0;background-color:#FFFFFF}table,td,ul,ol,ul,li,dd,dl,p,br,dt,th{font-weight:normal;font-size:1rem;line-height:1.2rem;color:#222}th{font-weight:bold;background-color:inherit}p{margin:1rem 0}div.KJEReportTitleHeader,h1.KJEFontTitle{font-size:1.4rem;font-weight:bold;line-height:1.6rem}.KJEInset{margin-left:20px;margin-right:20px}hr.KJEDivide{border:0;width:100%;height:1px}hr.KJEFooterLine{border-width:0;border-top-width:2px;border-top-style:solid;width:100%;height:0}.KJECenterText{text-align:center}.KJEBold{font-weight:bold}.KJEBoldCenter{font-weight:bold;text-align:center;overflow:visible}div.KJESubTitle{font-size:1rem;font-weight:normal;line-height:1.2rem}p.KJEReportFooter,.KJEFooter,p.footer{font-size:.9rem;line-height:normal;font-weight:normal}#KJE-C-REPORTGRAPH0,#KJE-C-REPORTGRAPH1,#KJE-C-REPORTGRAPH2,#KJE-C-REPORTGRAPH3,#KJE-C-REPORTGRAPH4,#KJE-C-REPORTGRAPH5{text-align:center}h2.KJEGraphTitle{text-align:center;font-size:1.2rem;line-height:1.3rem;font-weight:bold;margin:0}div.KJEReportTableDiv{margin:20px 0;margin-right:0;margin-left:0;border-width:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0}.KJECenter{text-align:center}h2.KJEReportHeader{font-size:1.2rem;font-weight:bold;line-height:1.4rem}.KJEReportTitleBlock{text-align:center;padding:10px;margin:10px;border:1px solid black}.KJEReportTitle{font-size:1.3rem;font-weight:bold;margin:0;padding:0}div.KJEReportExtraClientBlock{width:100%;text-align:center}tr.KJEHeaderRow{text-align:center;border:none;border-bottom:2px solid #565656}tr.KJEFooterRow{text-align:right;border:none}h2.KJESubHeading{font-size:1rem;padding:0;margin:0}.KJEHeadingUnderline{text-decoration:underline}.KJEHeadingRight{text-align:right}td.KJECell,th.KJECell,td.KJELabel,th.KJELabel,th.KJEHeading,td.KJECellStrong,th.KJECellStrong,td.KJECellBorder,th.KJECellBorder{padding:10px 8px;vertical-align:text-top;border:none;border-right:1px solid #565656}td.KJELabel,th.KJELabel,th.KJEHeading{display:table-cell}th.KJEHeading,caption.KJEHeading{font-size:1.2rem;font-weight:bold;line-height:1.3rem;padding:10px 8px}th.KJELabel{text-align:right}td.KJELabelPad{padding-right:10px;padding-top:10px;padding-bottom:10px;padding-left:10px;border:none}td.KJECellStrong{font-weight:bold}td.KJECellBorderBottom,th.KJECellBorderBottom{border-bottom-width:1px;border-bottom-style:solid}.KJELeft{text-align:left}.KJELeftPad,th.KJELeftPad{text-align:left;padding-left:10px}.KJECenter,th.KJECenter{text-align:center}.KJERight{text-align:right}.KJERightBold,th.KJERightBold{text-align:right;font-weight:bold}.KJECenterBold,th.KJECenterBold{text-align:center;font-weight:bold}.KJELeftBold,th.KJELeftBold{text-align:left;font-weight:bold}td.KJECell10,th.KJECell10{width:10%}td.KJECell15,th.KJECell15{width:15%}td.KJECell225,th.KJECell225{width:22.5%}td.KJECell20,th.KJECell20{width:20%}td.KJECell25,th.KJECell25{width:25%}td.KJECell30,th.KJECell30{width:30%}td.KJECell35,th.KJECell35{width:35%}td.KJECell40,th.KJECell40{width:40%}td.KJECell50,th.KJECell50{width:50%}td.KJECell60,th.KJECell60{width:60%}td.KJECell70,th.KJECell70{width:70%}td.KJECell85,th.KJECell85{width:85%}div.KJEReportTableSidebySide{width:100%;clear:both;display:block}div.KJEReportTableSidebySide::after{content:"";clear:both;display:table}div.KJEReportTableDivLeft,div.KJEReportTableDivRight{display:inline-block;float:right;width:49%;display:table-cell}div.KJEReportTableDivLeft{float:left}div.KJEReportTableDivLeft::after,div.KJEReportTableDivRight::after{content:"";clear:both;display:table-cell}th.KJEColumnHeader{text-align:center}h2.KJEScheduleHeader{font-size:1.2rem;font-weight:bold;line-height:1.4rem;page-break-after:avoid}td.KJEScheduleCellStrong{font-weight:bold}td.KJECellBorder,th.KJECellBorder{border-width:0;border-sytle:solid;border-width:0 1px 0 0}div.KJELogo{text-align:center;width:100%}.KJEDefinitions{display:block}.KJEBreakHeader{display:block;page-break-before:always}thead.KJEScheduleTHeader{display:table-header-group}tr.KJEScheduleHeaderRow,tr.KJEScheduleEvenRow,tr.KJEScheduleOddRow,tr.KJEScheduleFooterRow{text-align:right;border:none;border-bottom:1px solid #565656}caption.KJEScheduleHeaderRow{text-align:center}th.KJEScheduleHeading,th.KJEScheduleCell,th.KJEScheduleCellStrong{vertical-align:text-top;padding:10px 8px;border:none;border-right:1px solid #565656}th.KJEScheduleHeading{border:none;text-align:center}caption.KJEHeaderRow{border:2px solid #565656;border-bottom-style:none}img.KJEMiddle{vertical-align:middle}hr.KJEFooterLine{border:1px solid #CCCCCC;height:0;width:100%;margin-bottom:20px;margin-top:20px}hr.KJEDivide{border:none;outline:none;height:3px;width:100%;display:block;margin:0;margin-bottom:10px;margin-top:10px;color:#ccc;background:#dfe0db}table.KJEReportTable,table.KJEScheduleTable{font-size:1rem;border-spacing:0;border-collapse:collapse;width:100%;margin:0;padding:0;background-color:#CCCCCC;color:#222;border:2px solid #565656}tr.KJEHeaderRow,tr.KJEFooterRow,caption.KJEHeaderRow,tr.KJEScheduleHeaderRow,tr.KJEScheduleFooterRow{background-color:#CCCCCC;color:#222}tr.KJEOddRow,tr.KJEScheduleOddRow,tr.KJEEvenRow,tr.KJEScheduleEvenRow{background:#FFFFFF;background-color:#FFFFFF;border:none;border-bottom:1px solid #565656;text-align:right}</style>',
  ReportStyleFonts:
    "<style>#KJEReportBody, #KJEReportBody .KJEToggleSubTitle,#KJEReportBody #KJEReport,#KJEReportBody #KJEReport p,#KJEReportBody #KJEDefinitions,#KJEReportBody #KJEDefinitions p, #KJEReportBody .KJESubTitle  { font-size: 1.0rem; } #KJEReportBody h1.KJEFontTitle {    line-height:1.2;  font-size:1.4rem; } #KJEReportBody #KJEReport p.KJEFooter, #KJEReportBody #KJEReportBody .KJEFooter  { font-size:0.9rem;}</style>",
  ReportGraphContainer:
    '<div id=KJE-C-REPORTGRAPH**COUNT** style="page-break-inside: avoid; margin: 0 auto; margin-top:15px; **ADDITIONAL** ">',
  iDecimal: 2,
  ReportShowGraphs: true,
  ReportFooter:
    "<div class=KJECenter><p></p><strong>&copy; 1998-2023 KJE Computer Solutions, Inc.</strong><br/>Financial Calculators at <a src='http://www.dinkytown.net'>www.dinkytown.net</a><br/>(612) 331-2291 <br/>1730 New Brighton Blvd. PMB #111<br/>Minneapolis, MN 55413<p class='KJEReportFooter KJECenter'>KJE Computer Solutions, Inc.'s information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes.  We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues. More <a href='http://www.dinkytown.net/money/information.html'>Information</a>.</p></div>",
  ReportExtraFooter: "",
  ReportStyleSheet: null,
  ReportStyleSheet2: null,
  KJEReportBodyClass: "class=KJEReportBody id=KJEReportBody ",
  ReportOKToOpen: true,
  ReportDocumentEnd:
    "**FOOTER** <script>setTimeout(function() {window.print(), window.close();}, 1000)</script></body></html>\n",
  CalculatorTitleTemplate: null,
  CalclatorTitle: null,
  CalculatorTableClass: "KJECalculatorTable",
  CalculatorTableReportClass: "KJECalculatorReportTable",
  CalculatorTitleClass: "KJETitle",
  CalculatorTitleAdditionalClass: "KJEFontHeading KJETitleExtra",
  CalculatorTitleError: "KJEError",
  CalculatorTitleErrorCalculation: "KJEErrorCalculation",
  CalculatorTitleMissing: "KJEMissing",
  CalculatorStickyTitleClass: "KJEFontHeading KJETitleExtra",
  CalculatorDescInputClass: "",
  CalculatorDescReportClass: "KJECalculatorDescReportView",
  CalcTitlePaddingTop: 30,
  CalcTitlePaddingLeft: 40,
  CalcTitlePaddingRight: 40,
  CalcTitlePaddingMenu: 55,
  ClearColor: "#FFFFFF",
  colorList: [
    "#f7f7f7",
    "#efefef",
    "#dfe0db",
    "#CCCCCC",
    "#CCDDCC",
    "#CCCCDD",
    "#DDCCCC",
    "#CCCCDD",
    "#CCDDCC",
    "#CCDDDD",
    "#CCCCDD",
  ],
  colorRGBackground: "#FFFFFF",
  DefinitionsH1:
    "<h2 class='KJEDefinitionsHeader KJEFontHeading'>**LBL_DEFINITIONS**</h2>",
  LBL_DEFINITIONS: "Definitions",
  Colon: ":",
  CalculatorTitleEntry:
    "Please enter or select a value in all required fields.",
  CalculatorTitleCalc: "Press &ldquo;Calculate&rdquo; to view your results.",
  ButtonMore: "More +",
  ButtonCalculate: "Calculate",
  ButtonViewReport: "View Report",
  ButtonHideReport: "Hide Report",
  ButtonPrintReport: "Print",
  sCurrency: "Dollars",
  MSG_YEARS_LBL: "years",
  MSG_YEAR_LBL: "year",
  MSG_MONTHS_LBL: "months",
  MSG_MONTH_LBL: "month",
  MSG_AND_LBL: "and",
  MSG_YES: "Yes",
  MSG_NO: "No",
  YES: "yes",
  NO: "no",
  MSG_EXCEEDS_LIMIT_OF_RANGE: "KJE1 is limited to KJE2",
  MSG_UNDER_LIMIT_OF_RANGE: "KJE1 can't be less than KJE2",
  MSG_VALID_RANGE: "Enter an amount between KJE1 and KJE2",
  MSG_INVALID_DATE: "Please enter a valid date for KJE1",
  MSG_MISSING_ITEM: "Please enter a value for KJE1",
  MSG_REQUIRED_NOTICE:
    "<div id='KJERequiredNote' class=KJEFooter><span class='KJERequired'>KJE1</span>KJE2</div>",
  MSG_REQUIRED_SYMBOL:
    "*<span class='KJERequiredShowHover'>This entry is required.</span>",
  MSG_REQUIRED_SYMBOL_BARE: "*",
  REQUIRED_SYMBOL_CLASS: "KJERequired",
  REQUIRED_HOVER_CLASS: "KJERequiredShowHover",
  MSG_NOTREQUIRED_SYMBOL: "",
  MSG_GRAPH: "**GRAPH**",
  SplashContent: "Financial Calculators from<br />Dinkytown.net",
  SplashContentFooter:
    "Financial Calculators &copy;1998-2023 KJE Computer Solutions, Inc.",
  Default: {
    CalculationYear: new Date().getFullYear(),
    RORMarket: 7,
    RORRetire: 4,
    RORSave: 1,
    RateCard: 16,
    RatePersonal: 7.5,
    RateFix15: 6.5,
    RateFix30: 7,
    RateAdj: 5,
    RateAuto: 7,
    RateAutoLow: 1.9,
    MortgageAmt: 350000,
    HomePrice: 400000,
    StateTaxRate: 8,
    InflationRate: 3,
    RateCardMax: 48,
    LoanRateMin: 0,
    LoanRateMax: 25,
    LoanSliderRateMax: 10,
    MortgageMin: 0,
    MortgageMax: 250000000,
    MortgageRateMin: 0,
    MortgageRateMax: 50,
    MortgageSliderRateMax: 10,
    MortgageTerm: 30,
    MortgageTermMin: 1,
    MortgageTermMax: 40,
    MortgageTermIncrement: 5,
    MortgageShowAll: true,
    MortgageShowAllMax: 25,
    InvestRateMin: 0,
    InvestRateMax: 20,
    InvestSliderRateMax: 12,
    InflationRateMin: 0,
    InflationRateMax: 20,
    InflationSliderRateMax: 12,
  },
  initializing: 0,
  InTask: false,
  calcCleared: false,
  CalculatorDiv: "KJECalculatorDiv",
  AllContent: "KJEAllContent",
  CalcTimeout: 0,
  CalcTitleHeight: 0,
  Error: false,
  InComplete: false,
  bValidateIncomplete: true,
  Calculating: false,
  gGraphs: new Array(0),
  gReportGraphs: new Array(0),
  iOldWidth: -1,
  bSizeInitialized: false,
  ResizeTimeOut: null,
  iUrekau: [
    -392586034, -1258949165, 1900121069, -840526557, -892482046, 883678354,
    -1352292754, 1332498680, 0, 1505998205, 380075612, -1435395332,
  ],
  InputScreenText: false,
  DefinitionText: false,
  ReportText: false,
  MSG_ADA_TABLE: "role='presentation'",
  TypedArray: typeof Float64Array != "undefined",
  showInputsFirst: false,
  showSliderTitle: true,
  ShowScrollTitle: true,
  URLValueParm: "KJEData",
  SidebySidePrefix:
    "<div class=KJECalcTableSidebySide id=KJEInputsSidebySide><div class=KJECalcTableDivLeft id=KJEInputsColumnLeft style='background-color:transparent'>",
  SidebySideMid:
    "</div><div class=KJECalcTableDivRight id=KJEInputsColumnRight style='background-color:transparent'>",
  SidebySideEnd: "</div></div>",
  replace: function (c, b, a) {
    return a ? a.split(c).join(b) : "";
  },
  getKJEReplaced: function (a) {
    if (a || a == "") {
      for (var b = 1; b < arguments.length; b++) {
        a = a.replace("KJE" + b, arguments[b]);
      }
    } else {
      a = "";
      for (b = 0; b < arguments.length; b++) {
        a += arguments[b] + (b == arguments.length - 1 ? "" : ", ");
      }
    }
    return a;
  },
  dateFormat: function (d, a) {
    if (d == null) {
      return a;
    }
    var b = "/",
      c = d.getMonth() + 1;
    return d == null ? "" : c + b + d.getDate() + b + d.getFullYear();
  },
  chjilap: function (d) {
    var b = 0;
    var e = "";
    if (d.length == 0) {
    } else {
      for (var a = 0; a < d.length; a++) {
        e = d.charCodeAt(a);
        b = (b << 5) - b + e;
        b = b & b;
      }
    }
    return b;
  },
  getTermLabel: function (f, c) {
    var n = KJE;
    var j = Math.floor(f / 12),
      b = f % 12,
      d = n.MSG_AND_LBL,
      g = n.MSG_MONTH_LBL,
      l = n.MSG_MONTHS_LBL,
      e = n.MSG_YEAR_LBL,
      k = n.MSG_YEARS_LBL,
      h = " ",
      a = "";
    return (
      (c || j > 0 ? j + h + (j == 1 ? e : k) : a) +
      (c || (j > 0 && b > 0) ? h + d + h : a) +
      (c || b > 0 ? b + h + (b == 1 ? g : l) : a)
    );
  },
  setOrientation: function () {
    var a = KJE;
    switch (window.orientation) {
      case -90:
      case 90:
      default:
        a.resize(true);
        break;
    }
  },
  resize: function (b) {
    var a = KJE;
    if (!a.device.iphone || b) {
      if (a.ResizeTimeOut != null) {
        clearTimeout(a.ResizeTimeOut);
      }
      a.ResizeTimeOut = setTimeout(a.calcResize, 50);
      a.bSizeInitialized = true;
    }
  },
  InputSetupMoreButtons: function (a) {
    return KJE.replace(
      "**MORE_BUTTON_COUNT**",
      a + "",
      KJE.CommandMoreButtons.replace(
        "**LBL_MORE**",
        KJE.parameters.get("MSG_MOREBUTTON" + a, KJE.ButtonMore)
      )
    );
  },
  InputSetup: function (f, h, r) {
    var d = KJE;
    var a = d.bUseInputForm;
    var k = "**COMMAND_BUTTONS**";
    var l = "**REPORT_BUTTONS**";
    var j = "**MORE_BUTTONS**";
    var x = (d.deviceMobile || d.CommandButtonsFixed) && d.CommandButtonsTop;
    var u = f.indexOf(k);
    var t = r.indexOf(l);
    var w =
      "<div id='KJETitle' aria-live='polite' class='" +
      d.CalculatorTitleClass +
      " " +
      d.CalculatorTitleAdditionalClass +
      "'>" +
      d.CalculatorTitleShow +
      "</div>";
    var g = "**TITLE_BAR**";
    var e = f.indexOf(g);
    d.bSidebySide = false;
    d.bSidebySideViewing = false;
    if (KJE.parameters.get("USE_INPUT_SIDEBYSIDE", false)) {
      var o = f.indexOf("**GRAPH");
      var m = f.indexOf("KJE-D-INPUTS");
      if (o != -1) {
        if (
          f.indexOf("KJE-D-INPUTS", m + 1) == -1 &&
          f.indexOf("**GRAPH", o + 1) == -1
        ) {
          f = f.replace(
            "**GRAPH",
            KJE.SidebySideMid.replace("transparent", d.colorList[1]) + "**GRAPH"
          );
          d.bSidebySide = true;
        }
      }
    }
    var p = d.bSidebySide;
    for (var q = 1; q < 10; q++) {
      f = d.replace("**GRAPH" + q + "**", d.getGraphCode(q), f);
    }
    var n = "<!--KJEMAIN-->" + d.DivDataPoint;
    if (d.MSG_SR_HEADER) {
      n +=
        "<span id='KJEScreenReaderHeader' class='KJEAccessible'>" +
        d.MSG_SR_HEADER +
        "</span>";
    }
    if (d.SRExtraHeader) {
      n += d.SRExtraHeader;
    }
    if (a) {
      n +=
        "<form title='" +
        (d.CalcName ? d.CalcName : d.CalculatorTitleShow) +
        "' name=KJECalcForm id=KJECalcForm'>";
    }
    n += "<div id=KJECalculatorScreenSize>";
    n += u < 0 && x ? k : "";
    n +=
      "<div id='KJEWaitContainer'><div id='KJEWait' class=KJEWait></div></div>";
    n += "<div id=KJECalculatorTable style='margin: 0 auto;'>";
    n +=
      "<div id=KJECalculatorTableCell class='KJECalculator KJEEase' style='width:100%'>";
    n +=
      "<span id=KJESplash class=KJEBold style='color:#333333'><br /><br /><br />" +
      d.SplashContent +
      "<p class=KJEFooter>" +
      d.SplashContentFooter +
      "</p><br /><br /><br /><br /><br /><br /><br /><br /></span>";
    n += "<div id='KJEMain' class=KJEMain >";
    n +=
      "<div id='KJEMenuContainer'><button id='KJEMenu' type='button' class=KJEMenu tabindex='0' aria-label='" +
      KJE.MSG_MENU_TITLE +
      "'></button><div role='region' aria-label='" +
      KJE.MSG_MENU_TITLE +
      "' id='KJEMenuWindow'></div></div>";
    n += e < 0 ? w : "";
    n += d.ShowRequiredMessage
      ? d.getKJEReplaced(
          KJE.MSG_REQUIRED_NOTICE,
          KJE.MSG_REQUIRED_SYMBOL_BARE,
          KJE.parameters.get("MSG_INDICATES_REQUIRED", "indicates required.")
        )
      : "";
    n +=
      "<div id='KJEInputs' class='KJEInputs'>" +
      (d.ShowExtraClientInputs ? d.ExtraClientInputs : "");
    n += p ? KJE.SidebySidePrefix.replace("transparent", d.colorList[0]) : "";
    n += f;
    n += p ? KJE.SidebySideEnd : "";
    n += "</div>";
    n += "</div>";
    n += "</div>";
    n += "</div>";
    n += u < 0 && !x ? k : "";
    n += "</div>";
    if (a) {
      n += "</form>";
    }
    n += "<!--KJEMAINEND-->";
    n += "<div id=KJEReport class=KJEReport>";
    n += u >= 0 && t < 0 ? l : "";
    n += "<div id=KJEReportTop></div>";
    if (d.ExtraFooter) {
      n += d.ExtraFooter(h);
    }
    n += "</div>";
    if (d.IncludeDefinitions && !d.InlineDefinitions) {
      n += d.formatDefinitions(h);
    }
    d.fmtReportButtons = d.ReportButtons.replace(
      "**LBL_HIDEREPORT**",
      d.ButtonHideReport
    ).replace("**LBL_PRINTREPORT**", d.ButtonPrintReport);
    d.fmtCommandButtons = d.CommandButtons.replace(
      "**LBL_VIEWREPORT**",
      d.ButtonViewReport
    )
      .replace("**LBL_CALCULATE**", d.ButtonCalculate)
      .replace("**VIEWREPORT**", a ? "type=submit" : "type=button");
    d.fmtCommandButtons = d.fmtCommandButtons
      .replace(
        "**FLOAT_TITLE**",
        d.CommandButtonsFixed ? "" : d.CommandButtonsFloatTitle
      )
      .replace(
        "**STICKY_DISPLAY_STYLE**",
        d.ShowScrollTitle ? "" : "style='display:none;'"
      );
    r = r.replace(l, d.fmtReportButtons);
    n = n
      .replace(g, w)
      .replace(k, d.fmtCommandButtons)
      .replace(l, d.fmtReportButtons);
    var q = 0;
    while (n.indexOf(j) > -1) {
      n = n.replace(j, this.InputSetupMoreButtons(++q));
    }
    return { sInputs: n, sReport: r, bReportAddButtonEvents: t >= 0 };
  },
  formatDefinitions: function (d, c) {
    var a = KJE;
    c = c ? c : a.LBL_DEFINITIONS;
    var b = "";
    b +=
      "<div id=KJEDefinitions class=KJEDefinitions>" +
      a.DefinitionsH1.replace("**LBL_DEFINITIONS**", a.LBL_DEFINITIONS).replace(
        "**LBL_DEFINITIONS**",
        a.LBL_DEFINITIONS
      );
    b += "<div id='KJEDefinitionsDL'>" + d + "</div>";
    b += "</div>";
    return b;
  },
  inCommandTask: function (c) {
    var a = KJE;
    var b = "inline-block";
    var d = "none";
    if (a.InTask && c) {
      return true;
    }
    a.Wait.style.display = c ? b : d;
    a.InTask = c;
    return false;
  },
  setTitle: function (c, g) {
    var j = KJE;
    var h = j.subheader;
    var i = j.kujiae;
    var a = j.CalcTitle;
    var b = j.kujaleip;
    var d = j.UKuejna;
    if (b) {
      a.innerHTML = d + i + h;
      a.className = j.CalculatorTitleError;
      a.style.setProperty("display", "block", "important");
    } else {
      KJE.TrialReplace1 = 1;
      var f = c + h;
      if (f != a.innerHTML) {
        a.innerHTML = f;
      }
      if (g) {
        a.className = j.CalculatorTitleClass + " " + g;
      } else {
        a.className = j.CalculatorTitleClass + " " + j.CalculatorTitle;
      }
      if (j.KJEScrollSticky) {
        var e = j.KJEScrollSticky;
        if (
          j.Error ||
          j.InComplete ||
          (j.ShowScrollTitle && !j.reportViewable)
        ) {
          KJE.scrolled();
          if (f != e.innerHTML) {
            e.innerHTML = f;
          }
          e.className = g ? g : "";
        } else {
          e.style.display = "none";
          if ("" != e.innerHTML) {
            e.innerHTML = "";
          }
        }
      }
    }
  },
  setTitleTemplate: function () {
    var a = KJE;
    var c = "";
    if (a.CalculatorTitleTemplate) {
      c = a.CalculatorTitleTemplate;
      for (var b = 0; b < arguments.length; b++) {
        c = c.replace("KJE" + (b + 1), arguments[b]);
      }
      a.CalculatorTitleShow = c;
    } else {
      a.CalculatorTitleShow = a.CalculatorTitle;
    }
  },
  results: function (g, j, f) {
    var l = KJE;
    l.calcCleared = false;
    if (l.CalcTimeout) {
      clearTimeout(l.CalcTimeout);
    }
    if (g || f == true) {
      if (l.inCommandTask(true)) {
        return;
      }
      if (g) {
        l.showInputs();
      }
    }
    KJE.bCalculationModuleError = false;
    try {
      l.Error = false;
      l.InComplete = false;
      l.DataPointHide();
      var a = l.CalcControl;
      a.clear();
      l.GuiControl.setValues(a);
      if (l.setValuesAdditional) {
        l.setValuesAdditional(a);
      }
      if (l.ShowExtraClientInputs) {
        l.setExtraClientInputs(a);
      }
      var k = 0;
      var d = "";
      var h = l.inputs.items;
      for (var e in h) {
        if (!h[e].validate()) {
          k++;
          l.InComplete = true;
          d = (d ? d + ", " : "") + h[e]._sLabel;
        }
      }
      d = l.getKJEReplaced(l.MSG_MISSING_ITEM, d);
      if (!l.InComplete) {
        if (j && a.initReport) {
          a.initReport();
        }
        try {
          a.calculate(j ? true : false);
        } catch (b) {
          KJE.bCalculationModuleError = true;
          throw b;
        }
        if (KJE.calculateAdditional) {
          KJE.calculateAdditional(a, j ? true : false);
        }
        l.GuiControl.refresh(a);
        if (KJE.refreshAdditional) {
          KJE.refreshAdditional(l.GuiControl, a);
        }
        for (var e in l.droppers.items) {
          l.droppers.items[e].setText();
        }
        l.setTitle(l.CalculatorTitleShow);
      }
      if (l.InComplete && l.bValidateIncomplete) {
        l.calcClear(
          k > 3 || d == l.getKJEReplaced(l.MSG_MISSING_ITEM, "")
            ? l.CalculatorTitleEntry
            : d,
          l.CalculatorTitleMissingClass
        );
      }
    } catch (b) {
      l.Error = true;
      var c = (b.err ? b.err : b) + " ";
      if (b.oInputElement) {
        b.oInputElement.setCalculationError(b);
      }
      if (c.indexOf("NS_ERROR_FAILURE") < 1) {
        l.calcClear(
          c,
          l.CalculatorTitleError +
            (KJE.bCalculationModuleError
              ? " " + l.CalculatorTitleErrorCalculation
              : "")
        );
      }
    }
    if (g || f) {
      setTimeout(function () {
        l.inCommandTask(false);
      }, 400);
    }
    if (KJE.StorageSet) {
      KJE.StorageSet();
    }
    l.initializing = 2;
    KJE.bCalculationModuleError = false;
  },
  calcClear: function (c, f) {
    var a = KJE;
    var d = a.gGraphs;
    if (!c) {
      c = a.CalculatorTitleEntry;
    }
    if (!f) {
      f = null;
    }
    for (var e = 0; e < d.length; e++) {
      if (d[e]) {
        d[e].blank();
      }
    }
    for (var b in a.inputs.items) {
      if (a.inputs.items[b]._inputType == a.TypeLabel) {
        a.inputs.items[b].setText("");
      }
    }
    if (a.GuiControl.clear) {
      a.GuiControl.clear();
    }
    a.setTitle(c, f);
  },
  calcResize: function () {
    var a = KJE;
    if (a.setWidth()) {
      if (a.bSidebySide) {
        if (a.CalculatorWidth < 1000) {
          KJE.InputsSidebySide.classList.add("KJECalcTableStack");
          KJE.InputsColumnLeft.classList.add("KJECalcTableDivStack");
          KJE.InputsColumnRight.classList.add("KJECalcTableDivStack");
          a.bSidebySideViewing = false;
        } else {
          KJE.InputsSidebySide.classList.remove("KJECalcTableStack");
          KJE.InputsColumnLeft.classList.remove("KJECalcTableDivStack");
          KJE.InputsColumnRight.classList.remove("KJECalcTableDivStack");
          a.bSidebySideViewing = true;
        }
      }
      for (var b in a.inputs.items) {
        a.inputs.items[b].newWidth();
      }
      a.resizeGraphs(true);
    }
    if (a.reportViewable) {
      var c = a.gReportGraphs;
      for (var d = 0; d < c.length; d++) {
        if (c[d]) {
          c[d].setWidth(true);
        }
      }
    }
    if (!KJE.ShowMenu) {
      KJE.CalcTitle.style.paddingRight =
        a.CalcTitlePaddingRight / (a.CalculatorWidth < 450 ? 4 : 1) + "px";
    }
    KJE.CalcTitle.style.paddingLeft =
      a.CalcTitlePaddingLeft / (a.CalculatorWidth < 450 ? 4 : 1) + "px";
    if (a.resizeMenu) {
      a.resizeMenu();
    }
    a.scrolled();
  },
  resizeGraphs: function () {
    var a = KJE.gGraphs;
    for (var b = 0; b < a.length; b++) {
      if (a[b]) {
        a[b].setWidth(false);
        a[b].setHeight(true);
      }
    }
  },
  iDropperHeights: function () {
    var c = 0;
    for (var b in KJE.droppers.items) {
      if (b != KJE.sExtraClientInputs) {
        var a = KJE.droppers.items[b];
        c += a._idDropper.clientHeight;
        if (a._bShow) {
          c += a._idDroppee.clientHeight;
        }
      }
    }
    return c;
  },
  dataChanged: function (b) {
    var a = KJE;
    if (a.CalcTimeout) {
      clearTimeout(a.CalcTimeout);
    }
    if (a.CalcShowReportTimeout) {
      clearTimeout(a.CalcShowReportTimeout);
    }
    a.CalcTimeout = setTimeout(a.results, a.CalcDelay);
    if (KJE.KeepCalculatorOnPage && a.Report.style.display != "none") {
      a.showInputs();
      if (KJE.KeepCalculatorOnPageAutoReport) {
        a.CalcShowReportTimeout = setTimeout(function () {
          a.showReportFinal();
        }, 1000);
      }
    }
  },
  completeFade: function () {
    var a = KJE;
    if (a.fade < 100) {
      a.fade += a.device.iphone ? 100 : 4;
      a.Buttons.style.opacity = a.fade / 100;
      a.Main.style.opacity = a.fade / 100;
    } else {
      clearInterval(a.pace);
      KJE.Calculator.style.transition = a.DropeeTransition;
      if (KJE.reportTest) {
        a.showReport();
      }
    }
  },
  Startfade: function () {
    var a = KJE;
    if (a.fade < 100) {
      a.fade += 4;
      a.Splash.style.opacity = 1 - a.fade / 100;
    } else {
      clearInterval(a.pace);
      a.Splash.style.display = "none";
      a.fade = 0;
      a.pace = setInterval(a.completeFade, 10);
    }
  },
  showCalculator: function () {
    var a = KJE;
    a.results(true);
    a.ms = a.Main.style.opacity != 0 || a.Main.style.opacity == "";
    if (a.ms) {
      setTimeout(function () {
        a.Buttons.style.visibility = "visible";
        a.Main.style.visibility = "visible";
        a.Splash.style.display = "none";
      }, 500);
    } else {
      a.Buttons.style.opacity = 0;
      a.Main.style.opacity = 0;
      a.Splash.style.opacity = 1;
    }
    a.fade = 0;
    a.pace = setInterval(a.Startfade, 10);
    a.initializing = 1;
  },
  getOffset: function (c) {
    var b = 0;
    var a = 0;
    while (c && !isNaN(c.offsetLeft) && !isNaN(c.offsetTop)) {
      b += c.offsetLeft - c.scrollLeft;
      a += c.offsetTop - c.scrollTop;
      c = c.offsetParent;
    }
    return { top: a, left: b };
  },
  setWidth: function (b) {
    var a = KJE;
    KJE.elementWidth(a.CalculatorTable.style, "100%");
    var c = a.ScreenSize.clientWidth;
    a.oldClientWidth = c;
    a.DataPoint.style.maxWidth = c - 37 + "px";
    a.CalculatorWidth = c - 10;
    if (b) {
      a.oldClientWidth = 0;
    }
    return true;
  },
  FloatArray: function (d) {
    var a = KJE;
    if (a.TypedArray) {
      return new Float64Array(d);
    }
    var b = new Array(d);
    for (var c = 0; c < d; c++) {
      b[c] = 0;
    }
    return b;
  },
  IntArray: function (d) {
    var a = KJE;
    if (a.TypedArray) {
      return new Int16Array(d);
    }
    var b = new Array(d);
    for (var c = 0; c < d; c++) {
      b[c] = 0;
    }
    return b;
  },
  init: function () {
    var a = KJE;
    if (a.initFired) {
      return;
    }
    a.initFired = true;
    if (document.getElementById("KJE-IFRAME")) {
      KJE.KJEFrame = document.getElementById("KJE-IFRAME");
      KJE.KJEFrame.height = 1500;
      if (typeof ResizeObserver !== "undefined") {
        window.addEventListener("message", function (c) {
          if (c.data.hasOwnProperty("frameHeight")) {
            KJE.KJEFrame.height = c.data.frameHeight;
          }
        });
      } else {
        KJE.KJEFrame.height = 3000;
      }
      KJE.KJEFrame.style.width = "100%";
      KJE.KJEFrame.style.border = "none";
      KJE.KJEFrame.setAttribute("scrolling", "no");
    } else {
      if (typeof ResizeObserver !== "undefined") {
        KJE.Bodyheight;
        KJE.sendPostMessage = function () {
          if (KJE.Bodyheight !== document.body.clientHeight) {
            KJE.Bodyheight = document.body.clientHeight;
            window.parent.postMessage({ frameHeight: KJE.Bodyheight }, "*");
          }
        };
        KJE.resizeObserver = new ResizeObserver(function () {
          KJE.sendPostMessage();
        });
        var b = document.getElementsByTagName("body")[0];
        if (b) {
          KJE.resizeObserver.observe(b);
        }
        setTimeout(KJE.sendPostMessage, 1000);
      }
    }
    KJE.bDescribedBy = a.parameters.get("DEFN_DESCRIBED_BY_ATTRIB", true);
    if (a.initialize) {
      if (KJE.IE7and8) {
        document.write(
          "This browser is not supported.  Please use a modern browser such as Chrome, Firefox, Safari or Edge browser."
        );
        return;
      }
      KJE.closeCalculatorDroppersForReport = a.parameters.get(
        "CLOSE_DROPPERS_FOR_REPORT",
        KJE.KeepCalculatorOnPage
      );
      a.initAfterLoad();
      if (a.ShowMenu) {
        a.displayMenu(true);
        KJE.sMenuHelp = a.parameters.get(
          "MSG_MENU_HELP",
          "<dt><span class='KJEDefinitionsHeader KJEFontHeading'>Additional Functions</span></dt><dd>Click this menu to access the additional functions including:<p><span class=KJEBold>Reset to Defaults:</span>Click the &quot;Reset to defaults&quot; button to reload the default values for this calculator.</p><p><span class=KJEBold>Clear all Fields:</span>Click the &quot;Clear all fields&quot; button to clear all entry fields and reset any radio buttons or drop downs to their default values.</p></dd>"
        );
        if (a.parseMenuDefn) {
          KJE.sMenuHelp = a.parseMenuDefn(KJE.sMenuHelp);
        }
        a.AddDefinitionEvents(
          document.getElementById("KJEMenuContainer"),
          a.formatDefinitionEntry(a.sMenuHelp),
          a.parameters.get("MSG_MENU_HELP_TITLE", "Additional functions"),
          "MSG_MENU",
          1,
          KJE.Menu,
          "KJEDefinitionIconMenu",
          "KJEGuiDefnPopupRight KJEMenuDefinitions",
          true
        );
      }
    }
  },
  initAfterLoad: function () {
    var ad = KJE;
    ad.InputClass = "KJEInput" + (KJE.InputModern ? " KJEInputModern" : "");
    var L = navigator.userAgent;
    ad.device = {
      iphone: L.match(/(iPhone|iPod|iPad)/),
      android: L.match(/Android/),
    };
    ad.deviceUseNumberType = false;
    ad.deviceInputPad = ad.deviceUseNumberType
      ? KJE.parameters.get("DEVICE_INPUT_PAD", 10)
      : 0;
    if (ad.bNativeSlider == true) {
      var X = document.createElement("input");
      X.setAttribute("type", "range");
      ad.bNativeSlider = X.type !== "text";
    }
    ad.bUseStorage = false;
    if (ad.bStorageInit) {
      ad.bUseStorage = ad.bStorageInit();
    }
    var Q = ad.ReportStyleSheet,
      aa = ad.ReportStyleSheet2,
      l = "KJE.css",
      k = "KJESiteSpecific.css",
      G = document.getElementsByTagName("link");
    for (var J = 0; J < G.length; ++J) {
      var T = G[J].href;
      if (T.indexOf(l) >= 0 && Q == null) {
        Q = T;
        ad.hRefPath = T.substring(0, T.lastIndexOf("/") + 1);
      }
      if (T.indexOf(k) >= 0 && aa == null) {
        aa = T;
      }
    }
    if (Q == null) {
      Q = l;
    }
    if (aa == null) {
      aa = k;
    }
    ad.ReportStyleSheet = Q;
    ad.ReportStyleSheet2 = aa;
    var V = ad.iUrekau;
    var af = V.length,
      u = location.hostname,
      S = (ad.kujiae = u.replace(/^www\./i, "")),
      c = ad.parameters,
      g = document;
    var Z = ad.chjilap(S);
    ad.kujaleip = true;
    for (var X = af - 1; X >= 0; X--) {
      if (Z == V[X]) {
        ad.kujaleip = false;
      }
    }
    KJE.TrialReplace1 = 2;
    ad.CalculatorTitleShow = ad.CalculatorTitle = c.get(
      "TITLE_TEMPLATE",
      ad.CalculatorTitle ? ad.CalculatorTitle : document.title
    );
    ad.AllContent = document.getElementById("KJEAllContent");
    ad.CalculatorDesc = document.getElementById("KJECalculatorDescID");
    if (!ad.AllContent) {
      if (KJE.AllContentTemp) {
      } else {
        if (ad.CalculatorDesc) {
          if (ad.CalculatorDesc.nextSibling) {
            KJE.AllContentTemp = ad.CalculatorDesc.nextSibling;
          } else {
            KJE.AllContentTemp = ad.CalculatorDesc;
          }
        }
      }
      if (KJE.AllContentTemp) {
        ad.AllContent = document.createElement("div");
        ad.AllContent.id = "KJEAllContent";
        ad.AllContentTemp.parentNode.insertBefore(
          ad.AllContent,
          ad.AllContentTemp
        );
      }
    }
    var U = document.getElementById("KJEAllContentTemp");
    if (U) {
      U.parentNode.removeChild(U);
    }
    if (ad.InlineDefinitions) {
      ad.DefinitionTextContainer = g.getElementById("KJEDefinitionText");
      ad.DefinitionText = ad.DefinitionTextContainer.innerHTML;
    }
    var o = g.getElementById("KJEReportText");
    if (o) {
      ad.ReportText = o.innerHTML;
      o.innerHTML = "";
    }
    ad.DefinitionText = ad.formatDefinitionEntry(ad.DefinitionText);
    if (ad.DefinitionTextContainer) {
      ad.DefinitionTextContainer.innerHTML = ad.DefinitionText;
    }
    var R = ad.ReportText;
    if (ad.ReportProcess) {
      R = ad.ReportProcess(R);
    }
    R = ad.replace("KJE_CURRENTDATE", ad.dateFormat(new Date()), R);
    ad.ReportGraphCount = 0;
    if (!ad.ReportShowGraphs) {
      R = ad.replace(ad.MSG_GRAPH, "", R);
    } else {
      if (R) {
        var e = 0;
        while (true) {
          e = R.indexOf(ad.MSG_GRAPH, e);
          if (e >= 0) {
            ad.ReportGraphCount++;
            e += ad.MSG_GRAPH.length;
          } else {
            break;
          }
        }
      }
    }
    ad.ReportText = R;
    if (ad.parseInputs) {
      ad.InputScreenText = ad.parseInputs(ad.InputScreenText);
    }
    if (ad.inputPostprocess) {
      ad.InputScreenText = ad.inputPostprocess(ad.InputScreenText);
    }
    var r = ad.InputSetup(ad.InputScreenText, ad.DefinitionText, ad.ReportText);
    ad.AllContent.innerHTML = r.sInputs;
    ad.ReportText = r.sReport;
    ad.bReportAddButtonEvents = r.bReportAddButtonEvents;
    ad.Splash = g.getElementById("KJESplash");
    ad.inputsViewable = true;
    ad.Wait = g.getElementById("KJEWait");
    ad.Report = g.getElementById("KJEReport");
    ad.ReportTop = g.getElementById("KJEReportTop");
    var b = (ad.Fixed = g.getElementById("KJEFixed"));
    var F = (ad.Buttons = g.getElementById("KJECommandButtons"));
    var O = (ad.Calculate = g.getElementById("KJECalculate"));
    var I = (ad.PrintReport = g.getElementById("KJEPrintReport"));
    var m = (ad.ViewReport = g.getElementById("KJEViewReport"));
    var j = (ad.HideReport = g.getElementById("KJEHideReport"));
    var ab = (ad.Inputs = g.getElementById("KJEInputs"));
    var w = (ad.DataPoint = g.getElementById("KJEGuiDataPoint"));
    var B = (ad.KJEScrollSticky = g.getElementById("KJEScrollSticky"));
    var x = (ad.ScreenReaderHeader = g.getElementById("KJEScreenReaderHeader"));
    var P = (ad.Calculator = g.getElementById("KJECalculatorTableCell"));
    ad.H1Title = g.getElementById("KJETitleH1");
    KJE.InputsSidebySide = document.getElementById("KJEInputsSidebySide");
    KJE.InputsColumnLeft = document.getElementById("KJEInputsColumnLeft");
    KJE.InputsColumnRight = document.getElementById("KJEInputsColumnRight");
    ad.ScreenSize = g.getElementById("KJECalculatorScreenSize");
    var N = g.getElementById("KJECalcForm");
    var W = (ad.CalcTitle = g.getElementById("KJETitle"));
    W.style.paddingTop = ad.CalcTitlePaddingTop + "px";
    W.style.paddingRight = ad.CalcTitlePaddingRight + "px";
    W.style.paddingLeft = ad.CalcTitlePaddingLeft + "px";
    W.style.paddingBottom = "0px";
    W.style.setProperty("display", "block", "important");
    var ac = (ad.Main = g.getElementById("KJEMain"));
    var p = (ad.Definitions = g.getElementById("KJEDefinitions"));
    if (p && p.lastChild) {
      var z = p.lastChild.childNodes;
      var ae = z.length;
      for (X = 0; X < ae; X++) {
        var f = z[X];
        if (f.id && f.id.substr(0, 6) == "KJE-D-") {
          var t = f.id.substr(6).trim();
          var H = c.get("DFN_" + t, null);
          if (H == "REMOVE") {
            f.innerHTML = "";
            f.style.visibility = "hidden";
            f.style.display = "none";
            f.id = null;
          } else {
            if (H) {
              if (f.lastChild) {
                f.lastChild.innerHTML = H;
              }
            }
            var H = c.get("DFN_NAME_" + t, c.get("MSG_" + t, null));
            if (H) {
              if (f.firstChild) {
                f.firstChild.innerHTML = H;
              }
            }
          }
        }
      }
    }
    ab.style.display = "block";
    ad.CalculatorTable = g.getElementById("KJECalculatorTable");
    ad.menuInit(W);
    var M = "click";
    O.addEventListener(M, ad.calculateButtonAction, false);
    w.addEventListener(M, ad.DataPointHide, false);
    if (m) {
      m.addEventListener(M, ad.showReport, false);
    }
    if (N) {
      N.addEventListener("submit", function (h) {
        h.preventDefault();
      });
    }
    ad.addReportButtonEvents();
    F.style.opacity = 0;
    ac.style.opacity = 0;
    ad.Splash.style.opacity = 1;
    if (b) {
    } else {
      b = ad.Fixed = ad.Buttons;
      ad.CommandButtonsFixed = true;
    }
    if (ad.CommandButtonsFixed) {
      b.style.position = KJE.CommandButtonPosition;
      ad.FixedTop = ad.CommandButtonOffset;
    } else {
      b.style.position = "absolute";
      ad.FixedTop = P.offsetTop - ad.CommandButtonOffset;
    }
    b.style.top = ad.FixedTop + "px";
    if (!ad.CommandButtonsFixed) {
      window.addEventListener("scroll", ad.scrolled, false);
    }
    window.addEventListener("resize", ad.resize, false);
    window.addEventListener("orientationchange", ad.setOrientation, false);
    ad.oldClientWidth = 0;
    ad.setWidth(true);
    ad.CalculatorTitleTemplate = c.get(
      "TITLE_TEMPLATE",
      ad.CalculatorTitleTemplate
    );
    var a = (ad.HeaderTitle = c.get("CALC_HEADER_TITLE", ""));
    var A = (ad.HeaderDesc = c.get("CALC_HEADER_DESC", ""));
    ad.initialize();
    if (ad.ShowExtraClientInputs) {
      ad.parameters.getSet("EXTRA_CLIENTNAME", "");
      ad.parameters.getSet("EXTRA_NOTES", "");
      ad.parameters.set("USFD_EXTRA_CLIENTNAME", false);
      ad.parameters.set("USFD_EXTRA_NOTES", false);
      ad.parameters.set("USFD_EXTRA_DATE", true);
      KJE.InputItem.AltNotRequired = true;
      ad.StringInput("EXTRA_CLIENTNAME", "Name");
      ad.StringInput("EXTRA_NOTES", "Notes");
      ad.Date("EXTRA_DATE", "Date").bIncompleteCheck = false;
      KJE.InputItem.AltNotRequired = null;
      var d = ad.parameters.get(
        "MSG_DROPPER_EXTRATITLE",
        "Name, notes and date for report:"
      );
      ad.addDropper(new ad.Dropper("EXTRA", true, d, d), ad.colorList[0]);
    }
    var E = g.getElementById("KJEHeaderContent");
    if (E) {
      var n = c.get(
        "CALC_HEADER_DIV",
        "<div id=KJECalculatorTitle><h1>CALC_HEADER_TITLE</h1></div><div id=KJECalculatorDescription>CALC_HEADER_DESC</div>"
      );
      E.innerHTML = n
        .replace("CALC_HEADER_TITLE", a)
        .replace("CALC_HEADER_DESC", A);
    }
    var C = ad.inputs.items;
    var q = KJE.INIT;
    var Y = KJE.INIT_NOCHANGE;
    var K = KJE.INIT_ACTION;
    for (var X in C) {
      var y = K[C[X]._inputType];
      if (y != Y) {
        if (C[X].bShow && !C[X]._inputField.disabled) {
          if (
            C[X]._inputType == KJE.TypeNumber &&
            y != "" &&
            y < C[X]._minimum
          ) {
            y = C[X]._minimum;
          } else {
            if (
              C[X]._inputType == KJE.TypeNumber &&
              y == "" &&
              C[X].vDefault == 0
            ) {
              y = 0;
            }
          }
          KJE.InputItem.InputSetValues(
            C[X],
            y,
            K[C[X]._inputTypeAdditional],
            false
          );
        }
      }
    }
    if (KJE.FixedHeaderHeight == 0) {
      var D = document.getElementById("KJETitleBar");
      if (D) {
        KJE.FixedHeaderHeight = D.offsetHeight;
        KJE.ScrollMinimum = D.offsetHeight + KJE.ScrollMinimum;
      }
    }
    if (ad.customInit) {
      ad.customInit(this);
    }
    ad.showTimer();
  },
  showTimer: function () {
    var a = KJE;
    setTimeout(a.showCalculator, 250);
  },
  scrolled: function () {
    var a = KJE;
    if (!a.CommandButtonsFixed) {
      if (a.ScrollTimeOut != null) {
        clearTimeout(a.ScrollTimeOut);
      }
      a.ScrollTimeOut = setTimeout(a.buttonPosition, 10);
    }
  },
  buttonPosition: function () {
    var a = KJE;
    var c = a.util.findPosRelativeToViewport(
      a.reportViewable ? a.Report : a.CalculatorTable
    );
    var b = (a.KJEButtonYPoint = c[1]);
    if (a.FixedTop + a.FixedHeaderHeight < b) {
      a.Fixed.className = "KJEButtonIsScrolling";
      a.Fixed.style.position = "absolute";
      if (a.KJEScrollSticky) {
        a.KJEScrollSticky.style.display = "none";
      }
      a.Fixed.style.top = a.FixedTop + "px";
      a.Fixed.style.left = "";
      a.Fixed.style.width = "100%";
    } else {
      a.Fixed.className = "KJEButtonIsFixed";
      a.Fixed.style.position = "fixed";
      a.Fixed.style.top = a.FixedHeaderHeight + "px";
      if (a.reportViewable) {
        a.Fixed.style.left = "";
        a.Fixed.style.width = a.ScreenSize.clientWidth + "px";
      } else {
        a.Fixed.style.left = 0 + c[0] + "px";
        a.Fixed.style.width = a.CalculatorTable.clientWidth + "px";
      }
      if (a.Error || a.InComplete || a.ShowScrollTitle) {
        if (a.KJEScrollSticky) {
          a.KJEScrollSticky.style.display = "block";
        }
      }
    }
  },
  goScroll: function () {
    var a = KJE;
    if (a.Scroll) {
      var b = a.util.findPos(a.H1Title ? a.H1Title : a.Calculator);
      window.scrollTo(b[0], b[1] - a.ScrollMinimum);
    }
  },
  showInputs: function () {
    var a = KJE;
    if (a.CalcControl.initInputs) {
      a.CalcControl.initInputs();
    }
    var b = (a.Report.style.display = "none");
    if (a.ScreenReaderHeader) {
      a.ScreenReaderHeader.style.display = "inline";
    }
    var c = "inline-block";
    var e = "block";
    a.CalculatorTable.className = a.CalculatorTableClass;
    a.Calculate.value = a.ButtonCalculate;
    if (a.ViewReport) {
      a.ViewReport.value = a.ButtonViewReport;
    }
    a.Calculate.style.display = a.ShowCalculateButton ? c : b;
    a.ViewReport.style.display = a.ShowReportButton ? c : b;
    var d = a.Definitions;
    if (d) {
      d.style.display = a.ShowDefinitions ? e : b;
    }
    a.Calculator.style.overflow = "hidden";
    a.Main.style.display = e;
    a.reportViewable = false;
    if (a.showInputsFirst) {
      a.goScroll();
    } else {
      a.showInputsFirst = true;
    }
    a.calcResize();
    setTimeout(function () {
      KJE.Main.style.overflow = "visible";
      KJE.Calculator.style.overflow = "visible";
    }, 500);
  },
  calculateInputInitiatizing: function (b) {
    var a = KJE;
    if (a.initializing == 1 || b) {
      a.initializing = 2;
      a.results(!a.reportViewable);
    }
  },
  calculateButtonAction: function () {
    var a = KJE;
    if (a.InTask) {
      return;
    }
    if (a.MenuWindowHide) {
      a.MenuWindowHide();
    }
    a.calculateInputInitiatizing(true);
    if (a.KeepCalculatorOnPage) {
      a.goScroll();
    }
    if (a.reportViewable) {
      a.printTheReport();
    } else {
      if (!a.Error && !a.InComplete) {
        a.CalcTimeout = setTimeout(a.resultsCalcButton, 50);
      }
    }
  },
  reportButtonExtraAction: function () {
    if (KJE.closeCalculatorDroppersForReport) {
      for (var a in KJE.droppers.items) {
        if (KJE.reportViewable) {
          KJE.droppers.items[a].doOpen(10);
        } else {
          KJE.droppers.items[a].doClose(10);
        }
      }
    }
  },
  resultsCalcButton: function () {
    KJE.calculateInputInitiatizing(true);
    KJE.results(false, false, true);
  },
  printOpenReport: function (e) {
    var b = KJE;
    var d = document.getElementById("KJEAllContent");
    var u = b.replace;
    var t = b.gReportGraphs;
    var h = d.innerHTML;
    var l = b.ReportDocumentStart + h + b.ReportDocumentEnd;
    var k = l.indexOf("<!--KJEDEFINITIONS-->");
    var j = l.indexOf("<!--KJEDEFINITIONSEND-->", k);
    l = l.substring(0, k) + l.substring(j);
    k = l.indexOf("<!--KJEMAIN-->");
    j = l.indexOf("<!--KJEMAINEND-->", k);
    l = l.substring(0, k) + l.substring(j);
    l = u("<!--KJEDEFINITIONSEND-->", "", l);
    l = u("<!--REPORT_DEFINED_END-->", "", l);
    l = u("<!--KJEMAINEND-->", "", l);
    l = u("**REPORT_STYLE_SHEET**", b.ReportStyleSheet, l);
    l = u("**REPORT_STYLE_SHEET2**", b.ReportStyleSheet2, l);
    l = u("**REPORT_DEFAULT_STYLE**", b.ReportStyleDefault, l);
    l = u("**REPORT_FONT_STYLE**", b.ReportStyleFonts, l);
    var q = b.replace(
      "<img src='logo.png'",
      "<img src='" + b.hRefPath + "logo.png'",
      b.ReportHeader
    );
    q = b.replace("**REPORT_TITLE**", document.title, q);
    l = u("**HEADER**", q, l);
    l = u(
      "**FOOTER**",
      u(
        "<!--EXTRA_FOOTER-->",
        KJE.parameters.get(b.lang + "ReportExtraFooter", b.ReportExtraFooter),
        KJE.parameters.get(b.lang + "ReportFooter", b.ReportFooter)
      ),
      l
    );
    l = u(
      "**REPORT_TITLE**",
      b.CalcName ? b.CalcName : b.CalculatorTitleShow,
      l
    );
    l = u("**CURRENT_DATE**", b.dateFormat(new Date()), l);
    l = u("**current_date**", b.dateFormat(new Date()), l);
    l = u("**TITLE**", b.CalcName ? b.CalcName : "Financial Calculator", l);
    l = u("Calculator Calculator", "Calculator", l);
    if (b.reportViewable) {
      var m = 0;
      for (var r = 0; r < t.length; r++) {
        if (t[r]) {
          m = Math.round(parseFloat(b.strip(t[r].wContainer.style.width)));
          var c = t[r]._cBackground;
          t[r].setBackground("#FFFFFF");
          t[r].setWidth(true, KJE.gWidthReport);
          t[r].setBackground(c);
        }
      }
    }
    var f = "<!--GRAPHEND-->";
    for (var p = 0; p < b.ReportGraphCount; p++) {
      var w =
        '<img src="' +
        t[p].wCanvas.toDataURL() +
        '" height=' +
        t[p].wCanvas.offsetHeight +
        " width=" +
        t[p].wCanvas.offsetWidth +
        ">";
      var a =
        "<h2 class='KJEGraphTitle'>" +
        u('"', "&quote", t[p]._titleGraph.s) +
        "</h2>";
      k = l.indexOf("<!--GRAPH" + p + "-->");
      j = l.indexOf(f, k);
      l =
        l.substring(0, k) +
        b.ReportGraphContainer.replace("**COUNT**", p + "").replace(
          "**ADDITIONAL**",
          "width:" + t[p].wCanvas.offsetWidth + "px;"
        ) +
        a +
        w +
        "</div>" +
        l.substring(j + f.length);
    }
    e.document.write(l);
    var o = KJE.replace("'", "'", l);
    o = o.replace(/(\r\n|\n|\r)/gm, " ");
    e.document.close();
    e.focus();
    if (b.reportViewable) {
      var n = b.gReportGraphs;
      for (var r = 0; r < n.length; r++) {
        if (n[r]) {
          n[r].setWidth(false, m);
          n[r].setHeight(true, 0);
        }
      }
    }
  },
  printTheReport: function () {
    var a = KJE;
    var c = 0;
    if (screen) {
      c = screen.width / 2 - 480;
    }
    var b = window.open(
      "",
      "_blank",
      "toolbar=yes,menubar=yes,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=960,height=" +
        (screen.height - 170) +
        ",left=" +
        c +
        ",top=5"
    );
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      setTimeout(function () {
        a.printOpenReport(b);
      }, 100);
    } else {
      a.printOpenReport(b);
    }
  },
  showReport: function () {
    var a = KJE;
    if (a.InTask) {
      return;
    }
    a.InTask = false;
    if (a.Error || a.InComplete) {
      a.calculateInputInitiatizing(true);
      return;
    }
    if (a.ReportOKToOpen) {
      if (a.inCommandTask(true)) {
        return;
      }
      setTimeout(a.showReportFinal, 200);
    }
  },
  showReportFinal: function () {
    var a = KJE;
    a.DataPointHide();
    if (a.ScreenReaderHeader) {
      a.ScreenReaderHeader.style.display = "none";
    }
    if (KJE.KeepCalculatorOnPage == false) {
      if (KJE.MenuWindowHide) {
        KJE.MenuWindowHide();
      }
    }
    if (a.reportButtonExtraAction) {
      a.reportButtonExtraAction();
    }
    if (!a.reportViewable) {
      if (a.displayMenu) {
        a.displayMenu(false);
      }
      if (KJE.KeepCalculatorOnPage == false) {
        a.CalculatorTable.className = a.CalculatorTableReportClass;
      }
      a.results(false, true);
      if (a.Error || a.InComplete) {
        a.inCommandTask(false);
        return;
      }
      a.reportViewable = true;
      if (a.ViewReport) {
        a.Calculate.value = a.ButtonPrintReport;
      }
      a.Calculate.style.display = a.ShowPrintButton ? "inline-block" : "none";
      if (!a.KeepCalculatorOnPage) {
        a.Main.style.overflow = "hidden";
        a.Main.style.display = "none";
        jawsReader.read("Report Displayed press enter to hide report", true);
      }
      if (a.Definitions) {
        a.Definitions.style.display = "none";
      }
      a.Report.style.display = "block";
      if (a.ViewReport) {
        a.ViewReport.value = a.ButtonHideReport;
      }
      if (a.reportPreprocess) {
        a.sReport = a.reportPreprocess(a.CalcControl, a.ReportText);
      } else {
        a.sReport = a.ReportText;
      }
      if (a.ShowExtraClientInputs) {
        a.sReport = a.setExtraClientReport(a.CalcControl, a.ReportText);
      }
      a.sReport = a.replace(
        "**CALCULATION_YEAR**",
        a.input(a.Default.CalculationYear, 0),
        a.sReport
      );
      a.sReport = a.CalcControl.formatReport(a.sReport);
      if (a.reportPostprocess) {
        a.sReport = a.reportPostprocess(a.sReport);
      }
      setTimeout(a.fireReport, 50);
    } else {
      a.showInputs();
      if (a.CalculatorDesc) {
        a.CalculatorDesc.className = a.CalculatorDescInputClass;
      }
      if (a.KeepCalculatorOnPage) {
        a.Calculate.style.display = "none";
      } else {
        setTimeout(a.results, 400);
        setTimeout(function () {
          jawsReader.read("Report Hidden press enter to display report", true);
        }, 500);
      }
      if (a.displayMenu) {
        a.displayMenu(true);
      }
      setTimeout(function () {
        a.inCommandTask(false);
      }, 400);
    }
    if (a.CalcShowReportTimeout) {
      clearTimeout(a.CalcShowReportTimeout);
    }
  },
  fireReport: function () {
    var b = KJE;
    if (b.CalculatorDesc) {
      b.CalculatorDesc.className = b.CalculatorDescReportClass;
    }
    var e = b.sReport;
    for (var d = 0; d < b.ReportGraphCount; d++) {
      var h =
        "<!--GRAPH" +
        d +
        "-->" +
        b.ReportGraphContainer.replace("**COUNT**", d + "").replace(
          "**ADDITIONAL**",
          ""
        ) +
        "<canvas id=KJE-G-REPORTGRAPH" +
        d +
        "> </canvas></div><!--GRAPHEND-->";
      e = e.replace(b.MSG_GRAPH, h);
    }
    b.ReportTop.innerHTML = e;
    if (b.ReportGraphCount > 0) {
      for (var f = 0; f < b.ReportGraphCount; f++) {
        var a = b.gNewGraph(
          b.gGraphs[f]._gtGraphType._iGraphType,
          "REPORTGRAPH" + f,
          true,
          false,
          false,
          b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""),
          true
        );
        if (a) {
          b.gReportGraphs[f] = a;
        }
      }
    }
    var c = null;
    for (f = 0; f < b.gReportGraphs.length; f++) {
      c = b.gReportGraphs[f];
      c.setAriaRole(b.gGraphs[f].getFigureTitle());
      c.setProperty(b.gGraphs[f].getProperty());
      c._legend.setProperty(b.gGraphs[f]._legend.getProperty());
      c._grid.setProperty(b.gGraphs[f]._grid.getProperty());
      c._axisY.setProperty(b.gGraphs[f]._axisY.getProperty());
      c._axisX.setProperty(b.gGraphs[f]._axisX.getProperty());
      c.setTitle(b.sgv(b.gGraphs[f]._titleGraph.getProperty(), ""));
      c._titleXAxis.setProperty(b.gGraphs[f]._titleXAxis.getProperty());
      c._titleYAxis.setProperty(b.gGraphs[f]._titleYAxis.getProperty());
      c.add(b.gGraphs[f].getDataProperties());
      c.setBackground(
        b.parameters.get("PAGEBACKGROUND_COLOR", b.colorRGBackground)
      );
      c.setWidth(true);
    }
    var j = b.CalcControl;
    if (j.formatGraph) {
      j.formatGraph(j, b.gReportGraphs);
    }
    if (j.reportComplete) {
      j.reportComplete(b.GuiControl);
    }
    if (b.reportComplete) {
      b.reportComplete(b.CalcControl, b.ReportText);
    }
    if (b.bReportAddButtonEvents) {
      b.addReportButtonEvents();
    }
    if (b.addReportExtraEvents) {
      b.addReportExtraEvents();
    }
    if (!b.KeepCalculatorOnPage) {
      b.ViewReport.focus();
      b.goScroll();
    }
    setTimeout(function () {
      b.inCommandTask(false);
    }, 400);
  },
  formatDefinitionEntry: function (d) {
    var a = KJE;
    var c = a.definitions.items;
    for (var b in c) {
      d = a.replace(b, c[b], d);
    }
    d = a.replace("<dt>", "<h3 class='KJEDefinition'>", d);
    d = a.replace("</dt>", "</h3>", d);
    d = a.replace("</dd>", "</p>", d);
    d = a.replace("<dd>", "<p>", d);
    d = a.replace("<p>", "<p class='KJEDefinition'>", d);
    if (a.parseDefinitions) {
      d = a.parseDefinitions(d);
    }
    return d;
  },
  addReportButtonEvents: function () {
    var b = KJE;
    var a = (b.PrintReport = document.getElementById("KJEPrintReport"));
    var c = (b.HideReport = document.getElementById("KJEHideReport"));
    var d = "click";
    if (a) {
      a.addEventListener(d, b.printTheReport, false);
    }
    if (c) {
      c.addEventListener(d, b.showReport, false);
    }
  },
};
KJE.util = {
  findPos: function (a) {
    var b = (curtop = 0);
    if (a.offsetParent) {
      do {
        b += a.offsetLeft;
        curtop += a.offsetTop;
      } while ((a = a.offsetParent));
    }
    return [b, curtop];
  },
  getPageScroll: function () {
    var b, a;
    if (self.pageYOffset) {
      a = self.pageYOffset;
      b = self.pageXOffset;
    } else {
      if (document.documentElement && document.documentElement.scrollTop) {
        a = document.documentElement.scrollTop;
        b = document.documentElement.scrollLeft;
      } else {
        if (document.body) {
          a = document.body.scrollTop;
          b = document.body.scrollLeft;
        }
      }
    }
    return [b, a];
  },
  findPosRelativeToViewport: function (c) {
    var b = this.findPos(c);
    var a = this.getPageScroll();
    return [b[0] - a[0], b[1] - a[1]];
  },
};
KJE.stripDate = function (a) {
  if (!a) {
    return "";
  }
  var c = a.length;
  var d = "";
  while (c > 0) {
    var b = a.charAt(c - 1);
    switch (b) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "/":
        d = b + d;
        break;
      case "-":
        d = b + "/";
        break;
      default:
        break;
    }
    c--;
  }
  return d;
};
KJE.strip = function (a, f) {
  if (!a) {
    return "0";
  }
  var c = a.length;
  var e = "";
  var g = 0;
  var h = 0;
  while (c > 0) {
    var b = a.charAt(c - 1);
    switch (b) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        e = b + e;
        break;
      case ".":
        if (!g) {
          e = b + e;
        }
        g++;
        break;
      case "-":
      case "(":
        h++;
        break;
      default:
        break;
    }
    c--;
  }
  if (e == "") {
    return "0";
  }
  return h && !f ? "-" + e : e;
};
KJE.InputModern = true;
KJE.WindowsOS = navigator.userAgent.indexOf("Windows") != -1;
KJE.IE7 = navigator.appVersion.indexOf("MSIE 7.") != -1;
KJE.IE8 = navigator.appVersion.indexOf("MSIE 8.") != -1;
KJE.IE9 = navigator.appVersion.indexOf("MSIE 9.") != -1;
KJE.CHROME = navigator.userAgent.toLowerCase().indexOf("chrome") !== -1;
KJE.FIREFOX = navigator.userAgent.toLowerCase().indexOf("Firefox") !== -1;
KJE.IE7and8 = (KJE.IE7 || KJE.IE8) && !window.addEventListener;
KJE.IEOld = KJE.IE9 || KJE.IE7and8;
KJE.Safari =
  navigator.userAgent.indexOf("Safari") != -1 &&
  navigator.userAgent.indexOf("Chrome") == -1;
if (!KJE.IE7and8) {
  KJE.IE7 = false;
}
KJE.VML = false;
KJE.List = function () {
  this.length = 0;
  this.items = {};
  this.bLock = {};
};
KJE.List.prototype.getSet = function (b, a) {
  if (this.exists(b)) {
    return this.items[b];
  }
  return this.set(b, a);
};
KJE.List.prototype.get = function (b, a) {
  if (typeof this.items[b] == "undefined") {
    a = a;
  } else {
    a = this.items[b];
  }
  if (typeof a == "string") {
    a = KJE.parseList ? KJE.parseList(a) : a;
  }
  return a;
};
KJE.List.prototype.exists = function (a) {
  return !(typeof this.items[a] == "undefined");
};
KJE.List.prototype.locked = function (a) {
  return !(typeof this.bLock[a] == "undefined");
};
KJE.List.prototype.set = function (b, c, a) {
  if (typeof c != "undefined") {
    if (typeof this.items[b] == "undefined") {
      this.length++;
    }
    if (this.locked(b)) {
      return this.items[b];
    } else {
      if (a) {
        this.bLock[b] = true;
      }
      this.items[b] = c;
    }
  }
  return c;
};
KJE.setExtraClientInputs = function (b) {
  var a = KJE.inputs.items;
  b.EXTRA_CLIENTNAME = a.EXTRA_CLIENTNAME.getValue();
  b.EXTRA_NOTES = a.EXTRA_NOTES.getValue();
  b.EXTRA_DATE = a.EXTRA_DATE.getValue();
};
KJE.setExtraClientReport = function (d, e) {
  var c = KJE;
  var f = KJE.parameters.get(
    "EXTRA_CLIENT_BLOCK",
    "<div class='KJEReportExtraClientBlock'>" +
      (d.EXTRA_CLIENTNAME
        ? "<strong>Prepared for: EXTRA_CLIENTNAME</strong> "
        : "") +
      (d.EXTRA_NOTES ? "<br>EXTRA_NOTES<br>" : "") +
      (d.EXTRA_DATE ? "EXTRA_DATE" : "") +
      "</div>"
  );
  var a = e.indexOf("**EXTRA_CLIENT_BLOCK**");
  if (a < 0) {
    e = "**EXTRA_CLIENT_BLOCK**" + e;
  }
  if (d.EXTRA_CLIENTNAME || d.EXTRA_NOTES || d.EXTRA_DATE) {
    e = c.replace("**EXTRA_CLIENT_BLOCK**", f, e);
  } else {
    e = c.replace("**EXTRA_CLIENT_BLOCK**", "", e);
  }
  e = c.replace("EXTRA_CLIENTNAME", d.EXTRA_CLIENTNAME, e);
  e = c.replace("EXTRA_NOTES", d.EXTRA_NOTES, e);
  e = c.replace("EXTRA_DATE", c.dateFormat(d.EXTRA_DATE, ""), e);
  return e;
};
KJE.CalculatorWidth = KJE.CalculatorWidthMax;
(KJE.ReportDocumentStart =
  '<!DOCTYPE html><html><head><title>**REPORT_TITLE**</title><meta name="viewport" content="height=device-height,width=device-width,initial-scale=1">**REPORT_DEFAULT_STYLE**<link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET**" /><link type="text/css" rel="StyleSheet" href="**REPORT_STYLE_SHEET2**" />**REPORT_FONT_STYLE**</head><body ' +
  KJE.KJEReportBodyClass +
  ">**HEADER**"),
  (KJE.MSG_SR_HEADER =
    "By changing any value in the following form fields, calculated values are immediately provided for displayed output values. Click the view report button to see all of your results.");
KJE.parameters = new KJE.List();
KJE.inputs = new KJE.List();
KJE.droppers = new KJE.List();
KJE.definitions = new KJE.List();
KJE.UKuejna = "KJE Calculator License Not Found for: ";
KJE.subheader = "";
KJE.iStorageTime = 1000;
KJE.STORAGE_NONE = 0;
KJE.STORAGE_AUTO = 1;
KJE.bStorageNonsupportWarning = true;
KJE.bStorageOK = function () {
  if (typeof Storage !== "undefined") {
    try {
      localStorage.setItem("localStorage", 1);
      localStorage.removeItem("localStorage");
    } catch (a) {
      KJE.bUseStorage = KJE.STORAGE_NONE;
      return false;
    }
    return true;
  }
  return false;
};
KJE.bStorageInit = function () {
  KJE.oStorageItems = null;
  KJE.bUseStorage = KJE.parameters.get("LOCAL_STORAGE", KJE.STORAGE_AUTO);
  KJE.sStorageKey = typeof KJE.CalcType != "undefined" ? KJE.CalcType : "TEMP";
  if (KJE.bStorageOK()) {
    try {
      var b = localStorage.getItem(KJE.sStorageKey);
      if (KJE.LZString) {
        b = KJE.LZString.decompressFromEncodedURIComponent(b);
      }
      KJE.oStorageItems = JSON.parse(b);
    } catch (c) {
      KJE.oStorageItems = {};
    }
    if (KJE.oStorageItems == null) {
      KJE.oStorageItems = {};
    }
    localStorage.setItem(KJE.sStorageKey + "_href", KJE.formatHref());
    localStorage.setItem(KJE.sStorageKey + "_title", document.title);
  } else {
    KJE.bUseStorage = KJE.STORAGE_NONE;
  }
  if (KJE.getURLValueParam) {
    var a = KJE.getURLValueParam();
    if (a) {
      KJE.oStorageItems = a;
    }
  }
  return KJE.bUseStorage;
};
KJE.StorageSet = function () {
  if (KJE.bUseStorage) {
    if (KJE.bStorageTimeout) {
      clearTimeout(KJE.bStorageTimeout);
    }
    KJE.bStorageTimeout = setTimeout(KJE.bStorageSet, KJE.iStorageTime);
  }
};
KJE.getJSONFromInputs = function () {
  var b = KJE.inputs.items;
  var a = {};
  for (var c in b) {
    if (b.hasOwnProperty(c)) {
      if (b[c]._inputType != KJE.TypeLabel && b[c]._inputType != KJE.TypeNone) {
        a[c] = b[c]._value;
      }
      if (b[c]._inputTypeAdditional == KJE.TypeDropBox) {
        a[b[c]._Additional.name] = b[c]._Additional.value;
      }
    }
  }
  var d = JSON.stringify(a);
  return d;
};
KJE.bStorageSet = function (c, b) {
  var a = KJE.getJSONFromInputs();
  if (KJE.LZString) {
    a = KJE.LZString.compressToEncodedURIComponent(a);
  }
  if (KJE.bUseStorage) {
    localStorage.setItem(KJE.sStorageKey + (c ? "#" + c : ""), a);
    if (b) {
      localStorage.setItem(KJE.sStorageKey + "#" + c + "_name", b);
    }
  }
  return a;
};
KJE.bStoragePopulate = function (c) {
  var b = KJE.inputs.items;
  for (var d in b) {
    var a = false;
    if (c.hasOwnProperty(d)) {
      a = c[d];
    } else {
      if (b.hasOwnProperty(d)) {
        a = b[d].vDefault;
      }
    }
    var e = null;
    if (b[d]._inputTypeAdditional != KJE.TypeNone) {
      if (c.hasOwnProperty(b[d]._Additional.name)) {
        e = c[b[d]._Additional.name];
      } else {
        e = b[d].vDefault2;
      }
    }
    KJE.InputItem.InputSetValues(b[d], a, e, false);
  }
  KJE.results(true);
};
KJE.StorageGet = function (b, a) {
  var d = KJE.parameters.get(b, a);
  if (KJE.oStorageItems && KJE.bUseStorage) {
    var c = KJE.oStorageItems[b];
    if (c != null) {
      d = c;
    }
  }
  return d;
};
KJE.bHrefTrimURL = true;
KJE.formatHref = function () {
  var a = document.location.href;
  if (KJE.bHrefTrimURL) {
    var b = a.indexOf("?");
    if (b > 0) {
      a = a.substr(0, b);
    }
  }
  return a;
};
KJE.MenuResizeTimeOut = null;
KJE.MenuWindowVisible = false;
KJE.MenuSelectedRow = -1;
KJE.menuInit = function (b) {
  KJE.sMenuRESET =
    "<div class='KJEMenuGroupRow'><input type=button class='KJEMenuButton KJEMenuButtonWide' id=KJEReset value='" +
    KJE.parameters.get("MSG_MENU_RESET", "Reset to Defaults") +
    "'/></div>";
  KJE.sMenuCLEAR =
    "<div class='KJEMenuGroupRow'><input type=button class='KJEMenuButton KJEMenuButtonWide' id=KJEClear value='" +
    KJE.parameters.get("MSG_MENU_CLEAR", "Clear all Fields") +
    "'/></div>";
  KJE.sMenuHTMLAuto = "**RESET****CALCCLEAR**";
  KJE.MenuHeader =
    '<div class="KJEMenuHeader"><h3 id="KJEMenuWindowTitle">**MSG_MENU_TITLE**</h3></div>';
  KJE.ShowMenu = KJE.parameters.get("SHOW_MENU", KJE.ShowExtraClientInputs);
  if (KJE.ShowMenu) {
    if (b) {
      b.style.paddingRight = KJE.CalcTitlePaddingMenu + "px";
    }
    var a = (KJE.Menu = document.getElementById("KJEMenu"));
    if (a) {
      KJE.MenuContainer = document.getElementById("KJEMenuContainer");
      a.addEventListener("click", KJE.showMenu, false);
      KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
    }
  }
};
KJE.MenuResize = function () {
  if (KJE.ShowMenu) {
    var a = KJE;
    clearTimeout(a.MenuResizeTimeOut);
    a.MenuResizeTimeOut = setTimeout(a.resizeMenu, 50);
  }
};
KJE.displayMenu = function (a) {
  if (KJE.ShowMenu) {
    var b = KJE.Menu.style;
    if (a && KJE.ShowMenu) {
      b.display = "Inline-Block";
      KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
    } else {
      b.display = "None";
      KJE.MenuContainer.removeAttribute(KJE.sExpand);
    }
  }
};
KJE.resizeMenu = function () {
  var a = KJE;
  if (a.reportViewable || !a.ShowMenu) {
    return false;
  }
  if (a.MenuWindowVisible) {
    a.MenuWindowShow();
  }
};
KJE.showMenu = function () {
  if (KJE.MenuWindowVisible) {
    setTimeout(KJE.MenuWindowHide, 1);
  } else {
    setTimeout(KJE.MenuWindowShow, 1);
  }
};
KJE.MenuWindowHide = function (c) {
  if (KJE.ShowMenu && KJE.MenuWindow) {
    var a = KJE;
    a.MenuWindow.style.display = "none";
    KJE.MenuContainer.setAttribute(KJE.sExpand, "false");
    if (c) {
    } else {
      try {
        KJE.Menu.focus();
      } catch (b) {}
    }
    a.MenuWindowVisible = null;
  }
};
KJE.MenuWindowOffset = function () {
  var a = KJE.MenuWindow.offsetParent;
  if (a) {
    var b = KJE.getScreenCoord(0, 0, a);
    return { x: -b.x, y: -b.y };
  } else {
    return { x: 0, y: 0 };
  }
};
KJE.MSG_MENU_TITLE = "Additional Functions ";
KJE.MenuWindowShow = function () {
  var b = KJE;
  b.DataPointHide();
  if (b.DefnPoint) {
    b.DefnPointHide();
  }
  if (b.MenuWindow == null) {
    b.MenuWindow = document.getElementById("KJEMenuWindow");
    KJE.MenuHeader = b.replace(
      "**MSG_MENU_CLOSE**",
      KJE.MSG_DEFN_CLOSE_LABEL,
      KJE.MenuHeader
    );
    var d = false;
    if (KJE.initMenuMulti && KJE.bUseStorage == KJE.STORAGE_MULTI) {
      d = KJE.initMenuMulti();
    }
    if (!d || KJE.bUseStorage == KJE.STORAGE_NONE) {
      KJE.MenuHeader = b.replace(
        "**MSG_MENU_TITLE**",
        KJE.MSG_MENU_TITLE,
        KJE.MenuHeader
      );
      b.MenuWindow.innerHTML =
        KJE.MenuHeader +
        b.replace(
          "**CALCCLEAR**",
          KJE.sMenuCLEAR,
          b.replace(
            "**RESET**",
            KJE.sMenuRESET,
            b.replace(
              "**EMAIL**",
              b.replace("**EMAIL_DEFAULT**", KJE.sEmailDefault, KJE.sMenuEMAIL),
              b.sMenuHTMLAuto
            )
          )
        );
    }
    var a = (b.MenuWindow.buttonReset = document.getElementById("KJEReset"));
    var c = (b.MenuWindow.buttonClear = document.getElementById("KJEClear"));
    var f = (b.MenuWindow.buttonEmail = document.getElementById("KJEEmail"));
    var e = (b.MenuWindow.buttonEmail = document.getElementById("KJECopyLink"));
    if (a) {
      a.addEventListener("click", KJE.resetPage, false);
    }
    if (c) {
      c.addEventListener("click", KJE.clearPage, false);
    }
    if (f) {
      f.addEventListener("click", KJE.emailpage, false);
    }
    if (e) {
      e.addEventListener("click", KJE.copyLink, false);
    }
  }
  b.MenuWindow.style.display = "block";
  KJE.MenuContainer.setAttribute(KJE.sExpand, "true");
  b.MenuWindowVisible = true;
};
KJE.resetPage = function () {
  if (KJE.MenuColorRows && KJE.bUseStorage) {
    KJE.MenuColorRows(-1);
  }
  KJE.bStoragePopulate({});
};
KJE.clearPage = function () {
  var a = KJE;
  var b = a.inputs.items;
  if (a.MenuColorRows && a.bUseStorage) {
    a.MenuColorRows(-1);
  }
  a.bStoragePopulate({});
  for (var c in b) {
    if (b[c]._inputType == a.TypeNumber) {
      var d = b[c]._minimum < 0 ? 0 : b[c]._minimum;
      b[c].setValue(d, true);
    } else {
      if (b[c]._inputType == a.TypeDate) {
        b[c].setText("");
      } else {
        if (b[c]._inputType == a.TypeString) {
          b[c].setText("");
        }
      }
    }
  }
  a.calcClear();
};
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", KJE.init, false);
}
KJE.INIT_BLANK = 1;
KJE.INIT_ZERO = 2;
KJE.INIT_NORMAL = 0;
KJE.INIT = KJE.INIT_NORMAL;
KJE.INIT_NOCHANGE = "NOCHANGE";
KJE.INIT_DEFAULT_NORMAL = [
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
];
KJE.INIT_DEFAULT_ZERO = [
  KJE.INIT_NOCHANGE,
  0,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
];
KJE.INIT_DEFAULT_BLANK = [
  KJE.INIT_NOCHANGE,
  "",
  "",
  "",
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
  KJE.INIT_NOCHANGE,
];
KJE.INIT_ACTION = KJE.INIT_DEFAULT_NORMAL;
KJE.errorObject = function (a, b) {
  this.err = a;
  this.oInputElement = b;
};
KJE.getURLValueParam = function () {
  var g = {};
  var f = window.location.href;
  var a = f.indexOf(KJE.URLValueParm);
  if (a > 0) {
    var c = f.substring(a + KJE.URLValueParm.length + 1);
    if (c) {
      var b = null;
      try {
        b =
          "{" +
          KJE.replace(
            "*",
            '"',
            KJE.replace(
              "(",
              "",
              KJE.replace(
                ")",
                "",
                KJE.replace(";", "", KJE.replace("EMPTY", '""', c))
              )
            )
          ) +
          "}";
        b = JSON.parse(b);
      } catch (d) {
        b = null;
      }
    }
    if (b == "" || b == null) {
      alert(
        "There was an error in the data sent to this calculator. This can be caused by editing or changing a calculator link. We were unable to populate the calculator with the sent values. Calculator will appear with default values."
      );
      return false;
    }
    return b;
  }
  return false;
};
KJE.iAddMoreCount = 0;
KJE.iAddMoreDropperCount = 0;
KJE.initializeMore = function (d, c, a, b) {
  if (d.addMoreInit) {
  } else {
    d.oAddMores = new Array();
    d.addMoreInit = function (f, h, m, j) {
      var g = new Object();
      g.sRows = h;
      var k = (g.oRowsToShow = new Array(h.length));
      g.visibleMax = f;
      g.visibleCount = KJE.parameters.get(
        "VISIBLE_COUNT" + j,
        KJE.parameters.get("VISIBLE_COUNT", 1)
      );
      g.AddMore = document.getElementById("KJEAddMore" + (j + 1));
      this.oAddMores[KJE.iAddMoreCount] = g;
      var i = this;
      if (g.AddMore) {
        g.AddMore.addEventListener("click", function (n) {
          i.addMore(j);
        });
        for (var l = 0; l < h.length; l++) {
          k[l] = new Array(f);
          if (Array.isArray(h[l])) {
            for (var e = 0; e < f; e++) {
              k[l][e] = h[l][e]._container;
              if (m[l]) {
                if (h[l][e].getValue() > 0) {
                  g.visibleCount = g.visibleCount <= e ? e + 1 : g.visibleCount;
                }
              }
            }
          } else {
            for (var e = 0; e < f; e++) {
              k[l][e] = this.getInputDivider(h[l], e);
            }
          }
        }
        for (var e = g.visibleCount; e < g.visibleMax; e++) {
          if (g.visibleCount <= e) {
            for (var l = 0; l < h.length; l++) {
              if (k[l][e]) {
                k[l][e].style.display = "none";
              }
            }
          }
        }
      }
    };
    d.getInputDivider = function (e, g) {
      var f = document.getElementById("KJE-" + e + "" + (g + 1));
      return f ? f : false;
    };
    d.addMoreDropper = function (e, f) {
      KJE.iAddMoreDropperCount++;
      f = f ? f : KJE.iAddMoreDropperCount;
      this.oAddMores[f - 1].AddMoreDropper = e;
    };
    d.addMore = function (j) {
      var f = this.oAddMores[j].sRows;
      var n = this.oAddMores[j].oRowsToShow;
      var k = this.oAddMores[j].visibleCount;
      var e = this.oAddMores[j].visibleMax;
      if (k < e) {
        for (var o = 0; o < f.length; o++) {
          if (n[o][k]) {
            n[o][k].style.display = "block";
            var i = n[o][k].id;
            if (i) {
              var i = i.replace("KJE-C-", "");
              if (KJE.inputs.items[i]) {
                KJE.inputs.items[i].newWidth();
              }
            }
          }
        }
        var g = n[1][k];
        if (g) {
          var m = g.getElementsByTagName("input")[0];
          if (m) {
            m.focus();
          }
        }
      }
      if (k >= e - 1) {
        document.getElementById("KJEAddMore" + (j + 1)).style.display = "none";
      }
      k++;
      this.oAddMores[j].visibleCount = k;
      var h = this.oAddMores[j].AddMoreDropper;
      var l = h._iHeight ? h._iHeight : 0;
      KJE.elementHeight(h._idDroppee.style, "100%");
      setTimeout(function () {
        h._iHeight = h._idDroppee.offsetHeight - KJE._idDroppeePadding;
        KJE.elementHeight(h._idDroppee.style, h._iHeight + "px");
      }, 250);
    };
  }
  d.addMoreInit(c, a, b, KJE.iAddMoreCount);
  KJE.iAddMoreCount++;
};
KJE.elementHeight = function (a, b) {
  if (KJE.bElementStyling) {
    a.height = b;
  }
};
KJE.elementWidth = function (a, b) {
  if (KJE.bElementStyling) {
    a.width = b;
  }
};
if (!document.getElementById("KJEAllContent")) {
  if (document.currentScript) {
    KJE.AllContentTemp = document.createElement("span");
    document.currentScript.parentNode.insertBefore(
      KJE.AllContentTemp,
      document.currentScript
    );
  }
}
KJE.parameters.set("USE_INPUT_SIDEBYSIDE", true);
KJE.bHT = false;
KJE.getDate = function (b, c, a) {
  var e = null;
  if (c + a + b >= 0) {
    if (c >= 1 && c <= 12 && a >= 1 && a <= 31 && b >= 1 && b <= 9999) {
      var e = new Date(b, c - 1, a);
    }
  }
  if (e == null) {
    throw KJE.getKJEReplaced(KJE.MSG_INVALID_DATE);
  }
  return e;
};
KJE.getAge = function (c, a) {
  if (c) {
    var d = new Date();
    var b = d.getFullYear() - c.getFullYear();
    if (!a) {
      if (
        d.getMonth() < c.getMonth() ||
        (d.getMonth() == c.getMonth() && d.getDate() < c.getDate())
      ) {
        b--;
      }
    }
  } else {
    throw KJE.getKJEReplaced(KJE.MSG_INVALID_DATE);
  }
  return Math.floor(b);
};
KJE.SUM_ARRAY = function (a) {
  var c = a.length;
  var b = 0;
  for (var d = 0; d < c; d++) {
    b += a[d];
  }
  return b;
};
KJE.ROR_MONTH = function (a) {
  return Math.pow(1 + a, 1 / 12) - 1;
};
KJE.ROR_PERIOD = function (a, b) {
  return Math.pow(1 + a, 1 / b) - 1;
};
KJE.APY_MONTH = function (a) {
  return KJE.FV_AMT(a, 12, 1) - 1;
};
KJE.NPV_AMT = function (b, c, a) {
  if (b == -1) {
    return 0;
  }
  return a / Math.pow(1 + b, c);
};
KJE.FV_AMT = function (b, c, a) {
  if (b == 0) {
    return a;
  }
  return a / Math.pow(1 + b, -1 * c);
};
KJE.FV_BEGIN = function (a, c, b) {
  if (a == 0) {
    return c * b;
  }
  return (b / a) * (Math.pow(1 + a, c + 1) - 1) - b;
};
KJE.FV = function (a, c, b) {
  if (a == 0) {
    return c * b;
  }
  return (b / a) * (Math.pow(1 + a, c) - 1);
};
KJE.PV = function (a, c, b) {
  return KJE.NPV_AMT(a, c, KJE.FV(a, c, b));
};
KJE.PV_BEGIN = function (a, c, b) {
  return KJE.NPV_AMT(a, c, KJE.FV_BEGIN(a, c, b));
};
KJE.RATE = function (h, c, b) {
  var a = 0;
  var g = 1;
  var e = c;
  var d = KJE.PMT;
  for (var f = 1; f < 50; f++) {
    e = d(a, h, b);
    if (e == c) {
      return a;
    } else {
      if (e < c) {
        a += g;
      } else {
        a -= g;
      }
    }
    g = g / 2;
  }
  return a;
};
KJE.PERIODS = function (b, c, a) {
  if (b == 0 && c != 0) {
    return a / c;
  }
  var f = 3120;
  var h = 1560;
  var e = c;
  var d = KJE.PMT;
  for (var g = 1; g < 50; g++) {
    e = d(b, f, a);
    if (e == c) {
      return f;
    } else {
      if (e < c) {
        f -= h;
      } else {
        f += h;
      }
    }
    h = h / 2;
  }
  return f;
};
KJE.PERIODS_FV = function (h, i, a) {
  var f = 720;
  var g = 360;
  var e = i;
  var d = KJE.PMT;
  var c = KJE.NPV_AMT;
  for (var b = 1; b < 50; b++) {
    e = d(h, f, c(h, f, a));
    if (e == i) {
      return f;
    } else {
      if (e < i) {
        f -= g;
      } else {
        f += g;
      }
    }
    g = g / 2;
  }
  return f;
};
KJE.APR = function (f, c, b, a, e) {
  var d = KJE.PMT(b, f, a + e);
  return KJE.RATE(f, d, a);
};
KJE.PMT = function (a, c, b) {
  if (c <= 0) {
    return b;
  }
  if (c <= 1) {
    return b * (1 + a);
  }
  if (a == 0) {
    return b / c;
  }
  return (b * a) / (1 - Math.pow(1 + a, c * -1));
};
KJE.PMT_BEGIN = function (a, h, e) {
  var c = KJE.PMT;
  if (h <= 1) {
    return e;
  }
  var b = c(a, h, e);
  var g = b / 2;
  var d = 0;
  for (var f = 1; f < 50; f++) {
    d = c(a, h - 1, e - b);
    if (d == b) {
      return b;
    } else {
      if (d < b) {
        b -= g;
      } else {
        b += g;
      }
    }
    g = g / 2;
  }
  return b;
};
KJE.showCode = function (e, h, d, b) {
  var g = b;
  if (!d) {
    var c = g.indexOf(e);
    var a = g.indexOf(h);
    var f = "";
    while (c > 0 && a > c) {
      f = g.substring(0, c);
      f += g.substring(a + h.length);
      c = f.indexOf(e);
      a = f.indexOf(h);
      g = f;
    }
    g = f == "" ? b : f;
  }
  g = KJE.replace(e, "", g);
  g = KJE.replace(h, "", g);
  return g;
};
KJE.ScheduleTableTitle = "Periodic Schedule";
KJE._sTableHeader =
  "<p class='KJEFooter KJEScheduleNote'>**ROTATE_MESSAGE**</p><table class='KJEScheduleTable KJEReportTableShrink' summary='**TITLE_TAG**'>";
KJE._sTableFooter = "</table>";
KJE._sFooterRow = "<tr class='KJEScheduleFooterRow' >";
KJE._sTopRow = "<tr class='KJEScheduleHeaderRow' >";
KJE._sEvenRow = "<tr class='KJEScheduleEvenRow' >";
KJE._sOddRow = "<tr class='KJEScheduleOddRow' >";
KJE._sRowFooter = "</tr>";
KJE._sHeading = "<th class='KJEScheduleHeading' >";
KJE._sHeadingUnderline =
  "<th class='KJEScheduleHeading KJEScheduleHeadingBorder' >";
KJE._sHeadingLeftBorder =
  "<th class='KJEScheduleHeading KJEScheduleHeadingLeftBorder' >";
KJE._sHeadingRightBorder =
  "<th class='KJEScheduleHeading KJEScheduleHeadingRightBorder' >";
KJE._sHeadingFooter = "</th>";
KJE._sCell = "<td class='KJEScheduleCell' >";
KJE._sCellStrong = "<td class='KJEScheduleCellStrong' >";
KJE._sCellFooter = "</td>";
KJE._sScheduleRotate =
  "(Rotate device or make window larger to view schedule.)";
KJE._sScheduleHeader = "<thead class='KJEScheduleTHeader'>";
KJE._sScheduleHeaderEnd = "</thead>";
KJE._sScheduleFooter = "<tfoot class='KJEScheduleTFooter'>";
KJE._sScheduleFooterEnd = "</tfoot>";
KJE._sScheduleBody = "<tbody class='KJEScheduleTBody'>";
KJE._sScheduleBodyEnd = "</tbody>";
KJE._sCellBorderClass = "KJECellBorder";
KJE.ScheduleGroupingNotStarted = 0;
KJE.ScheduleGroupingStarted = 1;
KJE.ScheduleGroupingEnded = 2;
KJE.Repeating = function (a) {
  a = !a ? "MSG_REPORT_COL" : a;
  this.sRepeating = "";
  this.nRepeatingCount = 0;
  this.bScheduleHeader = KJE.ScheduleGroupingNotStarted;
  this.bScheduleFooter = KJE.ScheduleGroupingNotStarted;
  this.bScheduleBody = KJE.ScheduleGroupingNotStarted;
  this.sReportCols = new Array(15);
  this.bReportRequired = new Array(15);
  for (var b = 0; b < 15; b++) {
    this.sReportCols[b] = KJE.parameters.get(a + (b + 1), "");
    this.bReportRequired[b] = KJE.parameters.get(
      "MSG_REPORT_REQ" + (b + 1),
      true
    );
  }
};
KJE.Repeating.prototype.sReportCol = function (a, b) {
  var c = "";
  if (b < 1 || b > this.sReportCols.length) {
    c = a;
  } else {
    if (!this.sReportCols[b - 1] || this.sReportCols[b - 1] == "") {
      c = a;
    } else {
      c = this.sReportCols[b - 1];
    }
  }
  return c;
};
KJE.Repeating.prototype.getRepeat = function (d) {
  var a = KJE;
  var c = a._sTableHeader.replace("**ROTATE_MESSAGE**", KJE._sScheduleRotate);
  var b = a._sScheduleBodyEnd + a._sTableFooter;
  return (
    c.replace(
      "**TITLE_TAG**",
      d
        ? d.replace("'", "&#39;")
        : a.parameters.get("MSG_REPEAT_TITLE", a.ScheduleTableTitle)
    ) +
    this.sRepeating +
    b
  );
};
KJE.Repeating.prototype.clearRepeat = function () {
  this.sRepeating = "";
  this.bScheduleHeader = KJE.ScheduleGroupingNotStarted;
  this.bScheduleFooter = KJE.ScheduleGroupingNotStarted;
  this.bScheduleBody = KJE.ScheduleGroupingNotStarted;
  this.nRepeatingCount = 0;
};
KJE.Repeating.prototype.add = function (p, n, c, b, k, m, d, l) {
  var q = "";
  if (arguments.length == 0) {
    return q;
  }
  var f = this.bReportRequired;
  var a = "";
  var j = "";
  for (var h = m.length; h > 1; h--) {
    if (m[h - 1] != null) {
      break;
    }
  }
  var g = 0;
  d = d ? true : false;
  var o = "";
  for (var e = 0; e < h; e++) {
    if (m[e] != null) {
      if (m[e] != "" && f[e]) {
        if (m[e].sContent) {
          j = m[e].sContent;
          a = m[e].sCell ? m[e].sCell : p;
          if (m[e].sFormat) {
            a = a.replace(">", " " + m[e].sFormat + ">");
          }
          d = false;
        } else {
          a = p;
          if (d) {
            a = a.replace("' >", "' scope='col' >");
          }
          j = m[e];
        }
        if (g == 0) {
          o = j + "";
        }
        if (e < h - 1) {
          a = a.replace("class='", "class='" + k + " ");
        }
        g++;
        q += KJE.Repeating.bCellRemoveHeader(a, j, n, l);
      }
    }
  }
  if (g > 0 && d) {
    q = KJE.replace(
      "' >",
      "' width=" + KJE.number(Math.floor(100 / g), 0) + "% >",
      q
    );
  }
  this.sRepeating += c + KJE.Repeating.bDataHeader(l, q, o) + b;
};
KJE.Repeating.bCellRemoveHeader = function (b, a, d, c) {
  s = b + a + d;
  if (c && (a.trim().toLowerCase() == "&nbsp;" || a.trim() == "")) {
    s = s
      .replace("<th", "<td")
      .replace("</th>", "</td>")
      .replace("scope='col'", "");
  }
  return s;
};
KJE.Repeating.bDataHeader = function (c, a, b) {
  if (!c && b.trim().toLowerCase() != "&nbsp;" && b.trim() != "") {
    a = a.replace("<td", "<th scope='row' ").replace("</td>", "</th>");
  }
  return a;
};
KJE.Repeating.prototype.addHeader = function () {
  var a = KJE;
  if (this.bScheduleHeader == KJE.ScheduleGroupingNotStarted) {
    this.bScheduleHeader = KJE.ScheduleGroupingStarted;
    this.sRepeating += KJE._sScheduleHeader;
  }
  this.add(
    a._sHeading,
    a._sHeadingFooter,
    a._sTopRow,
    a._sRowFooter,
    "",
    arguments,
    true,
    true
  );
};
KJE.Repeating.prototype.addFooter = function () {
  var a = KJE;
  var c = false;
  var d = arguments;
  if (typeof arguments[0] === "boolean") {
    d = new Array();
    c = arguments[0];
    for (var b = 1; b < arguments.length; b++) {
      d[b - 1] = arguments[b];
    }
  }
  if (!c) {
    if (this.bScheduleHeader == KJE.ScheduleGroupingStarted) {
      this.bScheduleHeader = KJE.ScheduleGroupingEnded;
      this.sRepeating += KJE._sScheduleHeaderEnd;
    }
    if (this.bScheduleFooter == KJE.ScheduleGroupingNotStarted) {
      this.bScheduleFooter = KJE.ScheduleGroupingStarted;
      this.sRepeating += KJE._sScheduleFooter;
    }
  }
  this.add(
    a._sCellStrong,
    a._sCellFooter,
    a._sFooterRow,
    a._sRowFooter,
    a._sCellBorderClass,
    d,
    true,
    true
  );
};
KJE.Repeating.prototype.addRepeat = function () {
  var a = KJE;
  if (this.bScheduleHeader == KJE.ScheduleGroupingStarted) {
    this.bScheduleHeader = KJE.ScheduleGroupingEnded;
    this.sRepeating += KJE._sScheduleHeaderEnd;
  }
  if (this.bScheduleFooter == KJE.ScheduleGroupingStarted) {
    this.bScheduleFooter = KJE.ScheduleGroupingEnded;
    this.sRepeating += KJE._sScheduleFooterEnd;
  }
  if (this.bScheduleBody == KJE.ScheduleGroupingNotStarted) {
    this.bScheduleBody = KJE.ScheduleGroupingEnded;
    this.sRepeating += KJE._sScheduleBody;
  }
  this.add(
    a._sCell,
    a._sCellFooter,
    this.nRepeatingCount % 2 == 0 ? a._sOddRow : a._sEvenRow,
    a._sRowFooter,
    a._sCellBorderClass,
    arguments,
    false,
    false
  );
  this.nRepeatingCount++;
};
KJE.collapseSection = function (a, c) {
  var b = a.scrollHeight;
  a.style.transition = "";
  requestAnimationFrame(function () {
    a.style.height = b + "px";
    a.style.display = KJE.DropeeDisplay;
    requestAnimationFrame(function () {
      a.style.transition = KJE.DropeeTransition;
      requestAnimationFrame(function () {
        a.style.paddingTop = 0 + "px";
        a.style.height = 0 + "px";
      });
    });
  });
  a.addEventListener("transitionend", function (d) {
    a.removeEventListener("transitionend", arguments.callee);
    a.style.visibility = "hidden";
    a.style.display = "none";
    (c ? c : a).setAttribute(KJE.sExpand, "false");
    a.style.overflow = "hidden";
    a.style.height = 0 + "px";
    KJE.resizeGraphs(true);
    KJE.inCommandTask(false);
  });
};
KJE.expandSection = function (a, b) {
  a.style.overflow = "hidden";
  a.style.height = 0 + "px";
  a.style.display = KJE.DropeeDisplay;
  a.style.paddingTop = KJE._idDroppeePadding + "px";
  requestAnimationFrame(function () {
    var c = a.scrollHeight;
    requestAnimationFrame(function () {
      a.style.height = c + "px";
    });
  });
  a.addEventListener("transitionend", function (c) {
    a.removeEventListener("transitionend", arguments.callee);
    a.style.height = "auto";
    (b ? b : a).setAttribute(KJE.sExpand, "true");
    a.style.overflow = "visible";
    KJE.resizeGraphs(true);
    KJE.inCommandTask(false);
  });
};
KJE.getScreenCoord = function (g, a, b) {
  var f = 0;
  var e = 0;
  do {
    f += b.offsetLeft;
    e += b.offsetTop;
  } while ((b = b.offsetParent));
  var d = f + g;
  var c = e + a;
  return { x: d, y: c };
};
KJE.getMouseCoord = function (a, j, c) {
  var n = 0;
  var m = 0;
  do {
    n += j.offsetLeft;
    m += j.offsetTop;
  } while ((j = j.offsetParent));
  var h = 0;
  var e = 0;
  var g = a.pageX;
  if (g == null) {
    var b = document.documentElement;
    var l = b && b.scrollLeft != null ? b : document.body;
    h = a.clientX + l.scrollLeft;
    e = a.clientY + l.scrollTop;
  } else {
    if (c) {
      var k = a.touches[0];
      h = k.pageX;
      e = k.pageY;
    } else {
      h = g;
      e = a.pageY;
    }
  }
  var i = h - n;
  var f = e - m;
  return { x: i, y: f };
};
KJE.sIncomplete = "?";
KJE.DropperColors = false;
KJE.DropperHide = false;
KJE.iDropperCount = 0;
KJE.sToggleTitle =
  "<table **EXPANDED** class='KJEToggleTable' " +
  KJE.MSG_ADA_TABLE +
  "><tr><td class='**TITLE_CLASS** KJEToggleTitle99Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2><span class='KJEAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td class='KJEToggleIcon **IMG**'>**ICON**</td></tr></table>";
KJE.sToggleTitleH2Only =
  "<div class='KJEToggleTitle100Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2></div>";
KJE.sToggleTitle2 =
  "<table **EXPANDED** class='KJEToggleTable' " +
  KJE.MSG_ADA_TABLE +
  "><tr><td class='**TITLE_CLASS** KJEToggleTitle49Cell'><h2 class='**TITLE_CLASS**'>**TITLE_TEXT**</h2><span class='KJEAccessibleInLine' aria-live='polite'><br>**IMG_TEXT**</span></td><td class='**TITLE_CLASS** KJEToggleTitle99Cell'>**TITLE_TEXT2**</td><td class='KJEToggleIcon **IMG**'>**ICON**</td></tr></table>";
KJE.MSG_DEFINE_PREFIX = "Define: ";
KJE.MSG_DEFINE_HELPICON = "?";
KJE.MSG_DEFN_CLOSE_LABEL = "Close definition";
KJE.MSG_SLIDER = "slider";
KJE.ErrorsDisplayAfterInputField = false;
KJE.POPUP_REQUIRED_MSG = true;
KJE.HELP_ON_ICON_ONLY = false;
KJE.sToggleAltTextClose = "";
KJE.sToggleAltTextOpen = "";
KJE.sToggleTitleClass = "KJEToggleTitle";
KJE.sInputDescTextClass = "KJESubTitle";
KJE.sInputDescAlignDefault = "KJERight";
KJE.sToggleIcon = "KJEInputIcon";
KJE.sToggleOpen = "<div class='KJEToggleOpen' aria-hidden='true'></div>";
KJE.sToggleClose = "<div class='KJEToggleClose' aria-hidden='true'></div>";
KJE.sExpand = "aria-expanded";
KJE.sExpanded = "";
KJE.sCollapse = "";
KJE.DefinitionIconPosition = 1;
KJE.DefinitionIconPositionLeft = 0;
KJE.DefinitionIconPositionRight = 1;
KJE.DefinitionIconPositionLeftOut = 2;
KJE.DefinitionIconPositionRightOut = 3;
KJE.DefinitionIconPositionLeftNonDefn = 4;
KJE.DefinitionIconPosition5 = 5;
KJE.DefinitionIconPositionAsIs = 6;
KJE.InputFieldPosition = "absolute";
KJE.InputFieldDisplay = "inline-block";
KJE.DropeeTransition = "height 0.5s";
KJE.DropeeDisplay = "block";
KJE.DropeeWidth = "100%";
KJE.bShowSliders = true;
KJE.FMT_NUMBER = 0;
KJE.FMT_DOLLARS = 1;
KJE.FMT_PERCENT = 2;
KJE.FMT_INPUT = 3;
KJE.FMT_YESNO = 4;
KJE.FMT_STRING = 5;
KJE.FMT_SOCIALSECURITY = 6;
KJE.sCP = "$";
KJE.sCS = "";
KJE.sPP = "";
KJE.sPS = "%";
KJE.sNP = "";
KJE.sNS = "";
KJE.sPC = ",";
KJE.sPD = ".";
KJE.sCC = ",";
KJE.sCD = ".";
KJE.bEuropeDecimals = false;
KJE.ACCOUNTING_NEGATIVE = false;
KJE.format = new Array();
KJE.iDPItemHeight = 28;
KJE.iDPDropHeight = 32;
KJE.iDPInputHeight = 22;
KJE.iDPInputTop = 2;
KJE.iDPInputPad = 5;
KJE.iDPSliderPad = 0;
KJE.iDPDropBoxPad = 5;
KJE.iDPDropBoxModernPad = 20;
KJE.iDPDroppeeForceSize = false;
KJE.DataPointX = 0;
KJE.DataPointY = 0;
KJE.bNoLabel = false;
KJE.bPlusMinus = false;
KJE.TwoLineEntry = false;
KJE.RadioesTwoLineEntry = false;
KJE.SetLabelLength = true;
KJE.iDPRowHeight = 32;
KJE.iRadioPad = 5;
KJE.iRadioLabelPad = 40;
KJE.iInputContainerPad = 10;
KJE.setPriorYear = function (e, c) {
  var b = document.getElementById("KJEPriorYear");
  if (b) {
    b.innerHTML = e + "";
  }
  var a = document.getElementsByClassName("KJEPriorYear");
  var d;
  for (d = 0; d < a.length; d++) {
    a[d].innerHTML = c;
  }
};
KJE.subText = function (a, c, b) {
  c = KJE.sInputDescTextClass + " " + (c ? c : KJE.sInputDescAlignDefault);
  b = b ? b : "div";
  return "<" + b + " class='" + c + "'>" + a + "</" + b + ">";
};
KJE.nbr = function (p, e, b, m, c, q, o) {
  var t = KJE;
  if (!p) {
    p = 0;
  }
  q = q || false;
  c = c || false;
  b = b || "";
  m = m || "";
  e = e || 0;
  if (e > 10) {
    e = 10;
  }
  var f = t.round(p, e);
  var j = f < 0;
  if (j) {
    f *= -1;
  }
  var h = (f + "").split(".");
  var g = "";
  if (e > 0) {
    if (!h[1]) {
      if (!c) {
        g = "0000000000".substr(0, e);
      }
    } else {
      if (h[1].length == e) {
        g = h[1];
      } else {
        g = h[1] + (c ? "" : "0000000000".substr(0, e - h[1].length));
      }
    }
    if (g.length > 0) {
      g = t.sPD + g;
    }
  }
  var a = "";
  if (!q && f > 999) {
    var k = h[0].length;
    if (k % 3 > 0) {
      a = h[0].substr(0, k % 3) + t.sPC;
    }
    for (var d = k % 3; d < k; d += 3) {
      a += h[0].substr(d, 3) + (d + 3 < k ? t.sPC : "");
    }
  } else {
    a = h[0];
  }
  if (a == "") {
    a = "0";
  }
  if (o && o > a.length) {
    a = "0000000000" + a;
    a = a.substring(a.length - o);
  }
  return (
    (j ? (t.ACCOUNTING_NEGATIVE ? "(" : "-") : "") +
    b +
    a +
    g +
    m +
    (t.ACCOUNTING_NEGATIVE && j ? ")" : "")
  );
};
KJE.format[KJE.FMT_NUMBER] = function (a, b) {
  return KJE.nbr(a, b, "", "", true, false);
};
KJE.number = KJE.format[KJE.FMT_NUMBER];
KJE.format[KJE.FMT_DOLLARS] = function (a, b) {
  return KJE.nbr(a, b, KJE.sCP, KJE.sCS, false, false);
};
KJE.dollars = KJE.format[KJE.FMT_DOLLARS];
KJE.format[KJE.FMT_PERCENT] = function (a, b) {
  return KJE.nbr(a * 100, b, KJE.sPP, KJE.sPS, true, false);
};
KJE.percent = KJE.format[KJE.FMT_PERCENT];
KJE.format[KJE.FMT_SOCIALSECURITY] = function (a) {
  var b = KJE.nbr(a, 0, "", "", true, true, 9);
  return b.substr(0, 3) + "-" + b.substr(3, 2) + "-" + b.substr(5, 4);
};
KJE.socialsecurity = KJE.format[KJE.FMT_SOCIALSECURITY];
KJE.format[KJE.FMT_INPUT] = function (a, b, c) {
  return KJE.nbr(a, b, "", "", true, true, c);
};
KJE.input = KJE.format[KJE.FMT_INPUT];
KJE.format[KJE.FMT_YESNO] = function (a) {
  return a ? KJE.YES : KJE.NO;
};
KJE.yesno = KJE.format[KJE.FMT_YESNO];
KJE.round = function (b, a) {
  return a ? Math.round(b * Math.pow(10, a)) / Math.pow(10, a) : Math.round(b);
};
KJE.appendSpan = function (e, b, a, d) {
  var c = document.createElement("span");
  c.setAttribute("id", b);
  c.className = a;
  c.innerHTML = d;
  e.appendChild(c);
  return c;
};
KJE.setLabelWrap = function (e, h, d, g, c, f, b) {
  if (!g) {
    if (b || e == KJE.TypeLabel || e == KJE.TypeRadios) {
      h._oLabel = document.createElement("div");
    } else {
      h._oLabel = document.createElement("label");
      var a = document.createAttribute("for");
      a.value = d;
      h._oLabel.setAttributeNode(a);
    }
    if (f) {
      h._oLabel.className = f;
    }
    h.appendChild(h._oLabel);
  }
  if (c) {
    KJE.setLabelText(h, c);
  }
};
KJE.setLabelText = function (b, a) {
  if (b._oLabel) {
    b._oLabel.innerHTML = a;
  } else {
    b.innerHTML = a;
  }
};
KJE.SliderKnobExtraClass = false;
KJE.SliderKnobSize = 12;
KJE.SliderLeftMargin = 12;
KJE.SliderKnobVertAdj = -3;
KJE.SliderLabelVertAdj = 0;
KJE.LabelLength = 210;
KJE.InputLength = 110;
KJE.RightPad = 10;
KJE.LabelLeftMargin = 0;
KJE.InputTotalLength =
  KJE.LabelLeftMargin + KJE.LabelLength + KJE.InputLength + KJE.RightPad;
KJE.SliderMinLength = 150;
KJE.TypeNone = 0;
KJE.TypeNumber = 1;
KJE.TypeString = 2;
KJE.TypeDate = 3;
KJE.TypeRadio = 4;
KJE.TypeRadios = 8;
KJE.TypeCheckbox = 5;
KJE.TypeDropBox = 6;
KJE.TypeLabel = 7;
KJE.SliderScale = new Object();
KJE.s_scale = new Array(10);
KJE.s_scale[0] = [0, 1000, 5000, 10000, 10, 50, 100];
KJE.s_scale[1] = [0, 1000, 5000, 20000, 10, 50, 200];
KJE.s_scale[2] = [0, 1000, 10000, 100000, 50, 100, 1000];
KJE.s_scale[3] = [0, 10000, 100000, 500000, 250, 1000, 5000];
KJE.s_scale[4] = [0, 10000, 100000, 1000000, 250, 1000, 10000];
KJE.s_scale[5] = [0, 100000, 1000000, 10000000, 500, 10000, 100000];
KJE.s_scale[6] = [0, 500, 2500, 5000, 10, 50, 100];
KJE.s_scale[7] = [0, 100, 500, 1000, 5, 25, 50];
KJE.s_scale[8] = [12, 48, 84, 120, 6, 6, 6];
KJE.s_scale[9] = [0, 100, 200, 300, 10, 10, 10];
KJE.s_label = new Array(10);
KJE.k = "k";
KJE.m = "m";
KJE.s_label[0] = ["$0", "$1k", "$5k", "$10k"];
KJE.s_label[1] = ["$0", "$1k", "$5k", "$20k"];
KJE.s_label[2] = ["$0", "$1k", "$10k", "$100k"];
KJE.s_label[3] = ["$0", "$10k", "$100k", "$500k"];
KJE.s_label[4] = ["$0", "$10k", "$100k", "$1m"];
KJE.s_label[5] = ["$0", "$100k", "$1m", "$10m"];
KJE.s_label[6] = ["$0", "$500", "$2.5k", "$5k"];
KJE.s_label[7] = ["$0", "$100", "$500", "$1k"];
KJE.s_label[8] = ["12", "48", "84", "120"];
KJE.s_label[9] = ["$0", "$100", "$200", "$300"];
KJE.MakeScale = function (a, e, c, f, h, g, d) {
  var b = this;
  b._Min = a;
  b._Mid1 = e;
  b._Mid2 = c;
  b._Max = f;
  b._stepMin = h;
  b._stepMid = g;
  b._stepMax = d;
  b._range = 100;
};
KJE.useScale = function (b) {
  var a = KJE;
  var c = a.s_scale[b];
  return new a.MakeScale(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
};
KJE.s_Translate = function (a, b, h, g, f, c, j, i) {
  var e = 0;
  if (a > 66.66) {
    e = Math.round((g + ((a - 66.66) / 33.33) * (f - g)) / i) * i;
  } else {
    if (a > 33.33) {
      e = Math.round((h + ((a - 33.33) / 33.33) * (g - h)) / j) * j;
    } else {
      if (a > 0) {
        e = Math.round(((a / 33.33) * (h - b)) / c) * c + b;
      } else {
        e = b;
      }
    }
  }
  return e > f ? f : e;
};
KJE.s_Untranslate = function (b, a, e, c, f) {
  var g = 0;
  if (b > f) {
    return 100;
  } else {
    if (b > c) {
      g = 66.66 + ((b - c) * 33.33) / (f - c);
    } else {
      if (b > e) {
        g = 33.33 + ((b - e) * 33.33) / (c - e);
      } else {
        g = ((b - a) * 33.33) / (e - a);
      }
    }
  }
  return g < 0 ? 0 : g;
};
KJE.Slider = function (g, i, f, c, e, k, a, j, b, d, h) {
  return new KJE.InputItem(
    d,
    KJE.TypeNumber,
    g,
    i,
    true,
    "KJE-" + g,
    f,
    c,
    0,
    e,
    k,
    a,
    h ? false : j,
    h ? null : b
  );
};
KJE.MortgageAmtSlider = function (f, e, b, d, c) {
  var a = KJE;
  return a.Slider(
    f,
    e,
    a.Default.MortgageMin,
    a.Default.MortgageMax,
    d ? d : 0,
    a.FMT_DOLLARS,
    0,
    [
      a.dollars(a.Default.MortgageMin / 1000) + a.k,
      a.dollars(200) + a.k,
      a.dollars(500) + a.k,
      a.dollars(1) + a.m,
    ],
    new a.MakeScale(0, 200000, 500000, 1000000, 5000, 10000, 20000),
    b,
    c
  );
};
KJE.LoanAmtSlider = function (e, d, b, c) {
  var a = KJE;
  return a.Slider(
    e,
    d,
    a.Default.MortgageMin,
    a.Default.MortgageMax,
    0,
    a.FMT_DOLLARS,
    0,
    [
      a.dollars(a.Default.MortgageMin / 1000) + a.k,
      a.dollars(5) + a.k,
      a.dollars(25) + a.k,
      a.dollars(100) + a.k,
    ],
    new a.MakeScale(0, 5000, 25000, 100000, 100, 500, 1000),
    b,
    c
  );
};
KJE.MortgageTermSlider = function (f, d, e, b, c) {
  var a = KJE;
  return a.Slider(
    f,
    d,
    a.Default.MortgageTermMin,
    a.Default.MortgageTermMax,
    0,
    a.FMT_NUMBER,
    e ? e : a.Default.MortgageTermIncrement,
    [
      a.Default.MortgageTermMin,
      a.number(
        Math.floor(
          (a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.334 +
            a.Default.MortgageTermMin
        )
      ),
      a.number(
        Math.floor(
          (a.Default.MortgageTermMax - a.Default.MortgageTermMin) * 0.667 +
            a.Default.MortgageTermMin
        )
      ),
      a.number(a.Default.MortgageTermMax),
    ],
    null,
    b,
    c
  );
};
KJE.MortgageTermDropBoxSlider = function (f, e, c, d) {
  var a = KJE;
  var b = a.getMortgageTermList().v;
  if (d) {
    a.DropBox(f, e, b);
    return;
  }
  return a.DropBoxSlider(f, e, b);
};
KJE.NumberSlider = function (i, k, b, g, e, a, f, c, h, j) {
  var d = h ? true : false;
  c = c ? c : b;
  h = h ? h : g;
  a = a ? a : 1;
  var m = KJE;
  var l = [
    m.number(c),
    m.number(Math.floor((h - c) * 0.334 + c)),
    m.number(Math.floor((h - c) * 0.667 + c)),
    m.number(h),
  ];
  return m.Slider(
    i,
    k,
    b,
    g,
    e ? e : 0,
    m.FMT_NUMBER,
    a,
    l,
    d
      ? new m.MakeScale(
          c,
          Math.floor((h - c) * 0.334 + c),
          Math.floor((h - c) * 0.667 + c),
          h,
          a,
          a,
          a
        )
      : null,
    f,
    j
  );
};
KJE.InputSlider = function (f, j, b, e, c, h, a, d, i) {
  var k = KJE;
  var g = k.Slider(
    f,
    j,
    b,
    e,
    c ? c : 0,
    k.FMT_INPUT,
    a ? a : 1,
    [
      b,
      k.input(Math.floor((e - b) * 0.334 + b)),
      k.input(Math.floor((e - b) * 0.667 + b)),
      k.input(e),
    ],
    null,
    d,
    i
  );
  g._iPadding = h;
  g.setValue(g.getValue(), true);
  return g;
};
KJE.DollarSlider = function (h, k, b, f, c, a, e, d, j) {
  e = e >= 0 && e <= 9 ? e : -1;
  var l = KJE;
  if (e == -1) {
    for (var g = 0; g <= 7; g++) {
      if (l.s_scale[g][3] == f) {
        e = g;
        break;
      }
    }
  }
  if (e != -1) {
    return l.Slider(
      h,
      k,
      b,
      f,
      c ? c : 0,
      l.FMT_DOLLARS,
      1,
      l.s_label[e],
      l.useScale(e),
      d,
      j
    );
  }
  return l.Slider(
    h,
    k,
    b,
    f,
    !c && c != 0 ? 2 : c,
    l.FMT_DOLLARS,
    a ? a : 10,
    [
      l.dollars(b),
      l.dollars(Math.floor((f - b) * 0.334 + b)),
      l.dollars(Math.floor((f - b) * 0.667 + b)),
      l.dollars(f),
    ],
    null,
    d,
    j
  );
};
KJE.ZipcodeInput = function (e, d, b) {
  var a = KJE;
  var c = new KJE.InputItem(
    b,
    KJE.TypeNumber,
    e,
    d,
    true,
    "KJE-" + e,
    0,
    99999,
    0,
    0,
    a.FMT_INPUT,
    0,
    false
  );
  c._iPadding = 5;
  c.setValue(c.getValue(), true);
  return c;
};
KJE.SocialSecurityInput = function (e, d, b) {
  var a = KJE;
  var c = new KJE.InputItem(
    b,
    KJE.TypeNumber,
    e,
    d,
    true,
    "KJE-" + e,
    -999999999,
    999999999,
    0,
    0,
    a.FMT_SOCIALSECURITY,
    0,
    false
  );
  c._iPadding = 9;
  c.bAbsoluteValue = true;
  c.setValue(c.getValue(), true);
  return c;
};
KJE.DollarInput = function (g, f, d, a, e, c) {
  var b = KJE;
  return new KJE.InputItem(
    c,
    KJE.TypeNumber,
    g,
    f,
    true,
    "KJE-" + g,
    d,
    a,
    0,
    !e && e != 0 ? 2 : e,
    b.FMT_DOLLARS,
    0,
    false
  );
};
KJE.PercentInput = function (g, f, d, a, e, c) {
  var b = KJE;
  return new KJE.InputItem(
    c,
    KJE.TypeNumber,
    g,
    f,
    true,
    "KJE-" + g,
    d,
    a,
    0,
    !e && e != 0 ? 2 : e,
    b.FMT_PERCENT,
    0,
    false
  );
};
KJE.PercentSlider = function (i, m, b, h, f, a, g, k) {
  var o = KJE;
  var b = o.parameters.get("SLIDER_MIN_" + i, b);
  var h = o.parameters.get("SLIDER_MAX_" + i, h);
  var a = o.parameters.get("SLIDER_INC_" + i, a);
  var c = 100;
  var l = 1;
  var j = 0;
  if ((b - h) % 3 != 0 && h < 12) {
    c = 10;
    j = 1;
  }
  var e = o.percent(Math.floor(((h - b) * 0.334 + b) * c) / (100 * c), j);
  var d = o.percent(Math.floor(((h - b) * 0.667 + b) * c) / (100 * c), j);
  var n = [o.percent(b / 100), e, d, o.percent(h / 100)];
  return o.Slider(
    i,
    m,
    b,
    h,
    !f && f != 0 ? 2 : f,
    o.FMT_PERCENT,
    a ? a : 0.1,
    n,
    null,
    g,
    k
  );
};
KJE.LoanRateSlider = function (e, d, b, c) {
  var a = KJE;
  return a.RateSlider(
    e,
    d,
    a.Default.LoanRateMin,
    a.Default.LoanRateMax,
    a.Default.LoanSliderRateMax,
    null,
    b,
    c
  );
};
KJE.MortgageRateSlider = function (e, d, b, c) {
  var a = KJE;
  return a.RateSlider(
    e,
    d,
    a.Default.MortgageRateMin,
    a.Default.MortgageRateMax,
    a.Default.MortgageSliderRateMax,
    null,
    b,
    c
  );
};
KJE.InvestRateSlider = function (e, d, b, c) {
  var a = KJE;
  return a.RateSlider(
    e,
    d,
    a.Default.InvestRateMin,
    a.Default.InvestRateMax,
    a.Default.InvestSliderRateMax,
    null,
    b,
    c
  );
};
KJE.InflationRateSlider = function (e, d, b, c) {
  var a = KJE;
  return a.RateSlider(
    e,
    d,
    a.Default.InflationRateMin,
    a.Default.InflationRateMax,
    a.Default.InflationSliderRateMax,
    null,
    b,
    c
  );
};
KJE.preKJE = function (a) {
  return a ? "KJE-" + a : null;
};
KJE.suffix = function (b, a) {
  return a ? b + a : null;
};
KJE.RateSlider = function (f, n, i, d, h, a, c, k) {
  a = a ? a : 0.5;
  i = i ? i : 0;
  d = d ? d : 25;
  h = h ? h : 12;
  var o = KJE;
  var j = o.percent;
  var g = h - i;
  var m = Math.floor(g * 0.337 + i);
  var l = Math.floor(g * 0.667 + i);
  var e = [j(i / 100), j(m / 100), j(l / 100), j(h / 100)];
  var b = new o.MakeScale(i, m, l, h, a, a, a);
  return o.Slider(f, n, i, d, 3, o.FMT_PERCENT, 0, e, b, c, k);
};
KJE.Nbr = function (f, g, e, a, b, h, d, c) {
  var i = KJE;
  return new i.InputItem(
    c,
    i.TypeNumber,
    f,
    g,
    true,
    "KJE-" + f,
    e,
    a,
    0,
    b,
    h,
    0,
    false,
    false,
    i.suffix(f, "_TRAIL"),
    i.suffix(i.preKJE(f), "_TRAIL"),
    d,
    null,
    null,
    i.TypeLabel
  );
};
KJE.NbrDropBox = function (e, g, d, a, c, i, f, h, b) {
  var j = KJE;
  return new j.InputItem(
    b,
    j.TypeNumber,
    e,
    g,
    true,
    "KJE-" + e,
    d,
    a,
    0,
    c,
    i,
    0,
    false,
    false,
    f,
    j.preKJE(f),
    h ? h : g
  );
};
KJE.Checkbox = function (e, d, f, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeCheckbox,
    e,
    d,
    true,
    "KJE-" + e,
    0,
    0,
    f,
    0,
    0,
    0,
    false,
    false,
    null,
    null,
    b
  );
};
KJE.DropBoxString = function (f, d, e, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeDropBox,
    f,
    d,
    true,
    "KJE-" + f,
    0,
    0,
    0,
    0,
    a.FMT_STRING,
    0,
    false,
    false,
    e,
    a.preKJE(e),
    b
  );
};
KJE.DropBox = function (f, d, e, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeDropBox,
    f,
    d,
    true,
    "KJE-" + f,
    0,
    0,
    a.parameters.get(f, 0),
    0,
    0,
    0,
    false,
    false,
    e,
    a.preKJE(e),
    b
  );
};
KJE.DropBoxSlider = function (d, c, e, b) {
  var a = KJE;
  var f = [
    e[0],
    e[Math.floor(e.length * 0.333)],
    e[Math.floor(e.length * 0.666)],
    e[e.length - 1],
  ];
  return new a.InputItem(
    b,
    a.TypeDropBox,
    d,
    c,
    true,
    "KJE-" + d,
    0,
    e.length - 1,
    0,
    0,
    0,
    1,
    f,
    null
  );
};
KJE.Label = function (f, d, e, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeLabel,
    f,
    d,
    true,
    "KJE-" + f,
    0,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    e,
    a.preKJE(e),
    b
  );
};
KJE.StringInput = function (f, d, e, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeString,
    f,
    d,
    true,
    "KJE-" + f,
    0,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    e,
    a.preKJE(e),
    b
  );
};
KJE.Date = function (f, d, e, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeDate,
    f,
    d,
    true,
    "KJE-" + f,
    0,
    0,
    "TODAY",
    0,
    0,
    0,
    false,
    false,
    e,
    a.preKJE(e),
    b
  );
};
KJE.Radiobox = function (f, e, d, g, b, c) {
  var a = KJE;
  return new a.InputItem(
    c,
    a.TypeRadio,
    e,
    d,
    b ? false : true,
    "KJE-" + e,
    0,
    0,
    g,
    0,
    0,
    0,
    false,
    false,
    null,
    null,
    b,
    null,
    f
  );
};
KJE.Radioboxes = function (g, f, h, d, b, e, c) {
  var a = KJE;
  return new a.InputItem(
    e,
    a.TypeRadios,
    g,
    f,
    true,
    "KJE-" + g + "1",
    0,
    0,
    h,
    0,
    0,
    0,
    false,
    false,
    g,
    a.suffix(a.preKJE(g), "2"),
    d,
    b,
    null,
    c
  );
};
KJE.InputItem = function (
  ap,
  i,
  g,
  h,
  a,
  aq,
  aj,
  X,
  m,
  z,
  M,
  F,
  aB,
  l,
  y,
  G,
  al,
  I,
  ar,
  A
) {
  var E = this;
  var aw = KJE;
  var av = aw.setLabelWrap;
  var ao = aw.parameters;
  var af = KJE.TwoLineEntry;
  var ab = KJE.TwoLineEntry || KJE.RadioesTwoLineEntry;
  E._inputType = i;
  E._name = g;
  E._inputRequired =
    E._inputType != aw.TypeLabel &&
    E._inputType != aw.TypeRadios &&
    E._inputType != aw.TypeRadio &&
    E._inputType != aw.TypeCheckbox &&
    E.inputType != aw.TypeDropBox &&
    KJE.InputItem.AltNotRequired != true;
  E._inputTypeAdditional = aw.TypeNone;
  E._inputTypeAdditionalRequired = false;
  E._increment = Math.abs(F);
  E._decimals = z;
  E._iPadding = 0;
  E._format = M;
  E._minimum = aj;
  E._maximum = X;
  E._range = X - aj;
  E.bShow = true;
  E.bValidate = true;
  E.bIncompleteCheck = true;
  E.bNoLabel = KJE.bNoLabel;
  E.vDefault = ao.get(E._name, m);
  E.oAdditional = G;
  E.bUseStoredForDefault = ao.get("USFD_" + E._name, true);
  E.bAbsoluteValue = false;
  E.idRG = null;
  E.bValueBeenSet = false;
  var S = ao.get("MSG_" + g + "1", al);
  var V = ao.get("MSG_" + g + "2", I);
  var an =
    typeof document.createElement != "undefined" &&
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.offsetWidth == "number";
  if (!an) {
    return;
  }
  E._sError = "";
  E._bError = false;
  E._InComplete = false;
  E._mouseDown = false;
  aw.inputs.set(g, this);
  var au = (E._container = document.getElementById("KJE-C-" + E._name));
  if (!au) {
    E._inputType = aw.TypeNone;
    E.setValue(E.vDefault, true);
    return;
  }
  var P = au.parentElement.nodeName;
  au.className = "KJEInputContainer";
  var f = au.style;
  au.setAttribute("aria-live", "assertive");
  au.setAttribute("aria-atomic", "true");
  au.backgroundColor = f.backgroundColor;
  var w = au.offsetWidth;
  E.bSlider = aB != false && KJE.bShowSliders == true && KJE.bNativeSlider;
  if (l) {
    E._oScale = l;
  }
  var d = aw.iDPInputPad;
  var J = (E._inputField = document.getElementById(aq));
  var W = (E._iInputFieldDiv = document.getElementById(aq + "Div"));
  if (W == null && KJE.InputFieldPosition == "static") {
    W = document.createElement("div");
    W.className = "KJEInputFieldContainer";
    J.parentNode.insertBefore(W, J);
    W.appendChild(J);
  }
  var ag = J.style;
  J.name = ar ? ar : E._name;
  J.className = aw.InputClass;
  if (
    E._inputType != aw.TypeRadio &&
    E._inputType != aw.TypeRadios &&
    E._inputType != aw.TypeCheckbox
  ) {
    KJE.elementHeight(ag, aw.iDPInputHeight - KJE.iDPInputTop + "px");
  }
  if (E._inputType != aw.TypeRadios) {
    ag.top = (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
    ag.position = KJE.InputFieldPosition;
  }
  ag.display = KJE.InputFieldDisplay;
  E._sLabel = ao.get("MSG_" + E._name, h);
  var ad = (E._fieldset = document.getElementById("KJE-FS-" + E._name));
  if (ad) {
    ad.className = "KJEAccessibleFieldSet";
    var D = document.createElement("legend");
    D.className = "KJEAccessibleFieldSetLegend";
    D.innerText = E._sLabel;
    ad.insertBefore(D, ad.firstChild);
  }
  var C = 0;
  var ae = false;
  if (h != null && aw.LabelLength != 0) {
    ae = true;
    ap = ap ? " " + ap : "";
    var c =
      "KJE-D-" +
      (aw.InputItem.AltHelpName ? aw.InputItem.AltHelpName : E._name);
    var T = document.getElementById(c);
    E.className =
      (T && KJE.PopupDefinitions && !KJE.HELP_ON_ICON_ONLY
        ? "KJEHelp "
        : "KJELabel ") + ap;
    var az = E.getLabelForInput(i, aq, a, J, aw.ErrorsDisplayAfterInputField);
    E.spanInputRangeDesc = az._oRangeSpan;
    E.spanInputRangeDescInnerHtml = az._oRangeSpan
      ? az._oRangeSpan.innerHTML
      : null;
    E.spanInputRequiredDesc = az._oRequiredSpan;
    E.spanInputRangeID = az._oRangeSpanName;
    try {
      au.insertBefore(az, ad ? ad : W ? W : J);
    } catch (L) {}
    if (T && KJE.PopupDefinitions) {
      E.oDivDefn = KJE.AddDefinitionEvents(
        az,
        T,
        E._sLabel,
        E._name,
        KJE.DefinitionIconPosition,
        J,
        null,
        null,
        KJE.HELP_ON_ICON_ONLY
      );
    }
    if (aw.TwoLineEntry) {
      C = 0;
    } else {
      C = az.offsetWidth;
      if (!C) {
        C = aw.LabelLength;
      }
    }
    if (az._oLabel) {
      az._oLabel.style.marginTop =
        aw.iDPInputHeight / 4 + aw.iDPInputTop + "px";
    }
    if (aw.TwoLineEntry) {
      KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
    } else {
      if (az._oLabel) {
        if (
          az._oLabel.offsetHeight + 6 > aw.iDPRowHeight &&
          KJE.bElementStyling
        ) {
          az._oLabel.style.marginTop = "0px";
        }
        if (az._oLabel.offsetHeight + 6 > aw.iDPRowHeight) {
          au.style.height = az._oLabel.offsetHeight + 6 + "px";
        }
      }
    }
  }
  J.indent = (aw.deviceInputPad ? aw.deviceInputPad : d) + C;
  if (E.bNoLabel) {
    J.indent = 0;
    C = 0;
  }
  if (E._inputType === aw.TypeCheckbox || E._inputType === aw.TypeRadio) {
    E._sTrailingText = S;
    if (az._oLabel) {
      ag.left = C + aw.iRadioPad + "px";
    } else {
      ag.left = aw.iRadioLabelPad + "px";
    }
    if (S) {
      var t = document.createElement("div");
      var am = t.style;
      av(ae ? aw.TypeLabel : E._inputType, t, aq, false, E._sTrailingText);
      t.className = "KJETrailingLabel";
      am.position = KJE.InputFieldPosition;
      am.display = KJE.InputFieldDisplay;
      C = C + d * 1.5 + (J.offsetWidth ? J.offsetWidth : 15);
      if (az._oLabel) {
        am.left = C + "px";
      } else {
        am.left = aw.iRadioLabelPad * 2 + "px";
      }
      au.appendChild(t);
      am.top =
        (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
        aw.iDPInputHeight / 4 +
        aw.iDPInputTop +
        "px";
      var R = t.offsetHeight;
      if (R + 6 > aw.iDPRowHeight) {
        am.top =
          (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
          (aw.iDPInputHeight / 4 + aw.iDPInputTop) +
          "px";
      }
      C += t.offsetWidth;
      E._label2 = t;
    }
  } else {
    if (E._inputType === aw.TypeRadios) {
      var w = aw.CalculatorWidth - aw.iDPInputPad * 2;
      var o = document.createElement("div");
      var ai = o.style;
      ai.left = C + aw.iRadioPad + "px";
      ai.position = KJE.InputFieldPosition;
      ai.display = KJE.InputFieldDisplay;
      o.className = "KJERadioFieldContainer";
      KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
      E._sTrailingText = S;
      E._sTrailingText2 = V;
      var t = document.createElement("div");
      var am = t.style;
      av(aw.TypeRadio, t, aq, false, E._sTrailingText);
      t.className = "KJERadioTrailingLabel";
      J.title = (h ? h + aw.Colon + " " : "") + E._sTrailingText;
      var j = (E._Additional = document.getElementById(G));
      var ay = j.style;
      E._inputTypeAdditional = aw.TypeRadios;
      j.name = ar ? ar : E._name;
      j.className = KJE.InputClass;
      var q = (E._label3 = document.createElement("div"));
      var ax = q.style;
      av(aw.TypeRadio, q, G, false, E._sTrailingText2);
      q.className = "KJERadioTrailingLabel";
      j.title = (h ? h + aw.Colon + " " : "") + E._sTrailingText2;
      var aa = document.createElement("div");
      aa.className = "KJERadioHolder";
      var Z = document.createElement("div");
      Z.className = "KJERadioHolder";
      o.className = "KJERadioes";
      J.parentNode.insertBefore(o, J);
      aa.appendChild(J);
      aa.appendChild(t);
      Z.appendChild(j);
      Z.appendChild(q);
      o.appendChild(aa);
      o.appendChild(Z);
      E._oDivRadios = o;
      j.addEventListener("change", aw.dataChanged, false);
    } else {
      if (E._inputType === aw.TypeDropBox) {
        J.className = "KJEDropBox";
        var at = (aw.deviceInputPad ? aw.deviceInputPad : d) + C;
        var N = aw.iDPDropHeight - aw.iDPInputTop;
        if (W) {
          var B = W.style;
          W.className = "KJEDropBoxDivModern";
          J.className = "KJEDropBox KJEDropBoxModern";
          B.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
          B.position = KJE.InputFieldPosition;
          B.display = KJE.InputFieldDisplay;
          B.left = at + "px";
          ag.top = "0px";
          KJE.elementHeight(ag, N + "px");
          KJE.elementHeight(B, N + "px");
        } else {
          ag.left = at + "px";
          ag.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
          KJE.elementHeight(ag, aw.iDPDropHeight - KJE.iDPInputTop * 2 + "px");
        }
        KJE.InputItem.bDropBoxRequired(g, J);
      } else {
        if (E._inputType === aw.TypeLabel) {
          J.className = "KJEOutputLabel " + ap;
          ag.top =
            (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
            aw.iDPInputHeight / 4 +
            aw.iDPInputTop +
            "px";
          ag.left = C + d + "px";
          J.indent += aw.deviceInputPad;
          KJE.elementHeight(ag, aw.iDPItemHeight - 2 + "px");
        } else {
          if (E._inputType === aw.TypeString || E._inputType === aw.TypeDate) {
            ag.left = (aw.deviceInputPad ? aw.deviceInputPad : d) + C + "px";
          } else {
            ag.width = aw.InputLength + "px";
            if (aw.deviceUseNumberType) {
              var p = document.createElement("div");
              var aC = p.style;
              p.className = "KJELabelBold";
              aC.position = KJE.InputFieldPosition;
              aC.display = KJE.InputFieldDisplay;
              aC.width = aw.deviceInputPad + "px";
              aC.left = C + "px";
              aC.top =
                (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
                aw.iDPInputHeight / 4 +
                aw.iDPInputTop +
                "px";
              if (M == aw.FMT_DOLLARS) {
                p.innerHTML = aw.sCP + aw.sCS;
              } else {
                if (M == aw.FMT_PERCENT) {
                  p.innerHTML = aw.sPP + aw.sPS;
                } else {
                  p.innerHTML = "";
                }
              }
              KJE.elementHeight(aC, aw.iDPInputHeight + "px");
              au.appendChild(p);
              d = p.offsetWidth + 1;
            }
            if (
              aw.deviceUseNumberType &&
              E._maximum < 1000 &&
              !(KJE.bEuropeDecimals && E._decimals > 0)
            ) {
              J.type = "number";
              if (E._decimals > 0) {
                J.setAttribute("step", "any");
              }
            }
            ag.left = C + d + "px";
          }
        }
      }
    }
  }
  if (G && aw.TypeRadios != E._inputType) {
    var j = (E._Additional = document.getElementById(G));
    if (E._Additional) {
      var ay = j.style;
      ay.position = KJE.InputFieldPosition;
      ay.display = KJE.InputFieldDisplay;
      ay.top = (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
      var w = aw.CalculatorWidth - aw.iDPInputPad * 2;
      j.setAttribute("aria-required", "true");
      E._inputTypeAdditional = aw.TypeDropBox;
      var K = (E._AdditionalDiv = document.getElementById(G + "Div"));
      j.name = y;
      j.className = "KJEDropBox";
      j.setAttribute("aria-label", S);
      var k = aw.iDPDropHeight - aw.iDPInputTop;
      var ac =
        C + (aw.offsetWidth ? aw.offsetWidth(J) : J.offsetWidth) + 5 + d * 2;
      var n = ac - d;
      var Y = w - ac;
      if (K) {
        var U = K.style;
        K.className = "KJEDropBoxDivModern";
        j.className = "KJEDropBox KJEDropBoxModern";
        U.position = KJE.InputFieldPosition;
        U.display = KJE.InputFieldDisplay;
        U.top =
          (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop - 1 + "px";
        U.height = k + "px";
        U.left = n + "px";
        U.width = Y + "px";
        ay.left = 0 + "px";
        ay.top =
          (aw.TwoLineEntry ? aw.iDPRowHeight : 0) + aw.iDPInputTop + "px";
      } else {
        ay.left = n + "px";
      }
      ay.width = Y + "px";
      ay.height = k + "px";
      j.indent = ac;
      if (Y < aw.SliderMinLength && au.offsetWidth) {
        ay.top = aw.iDPRowHeight + "px";
        KJE.elementHeight(f, aw.iDPRowHeight * 2 + "px");
      }
      j.addEventListener("change", aw.dataChanged, false);
    } else {
      if (S) {
        E._inputTypeAdditional = aw.TypeLabel;
        E._sTrailingText = S;
        var t = document.createElement("div");
        var am = t.style;
        av(i, t, G, false, E._sTrailingText, null, h ? true : false);
        t.className = "KJETrailingLabel";
        am.position = KJE.InputFieldPosition;
        am.display = KJE.InputFieldDisplay;
        am.left =
          C +
          (aw.deviceInputPad ? aw.deviceInputPad : d) +
          d +
          aw.InputLength +
          5 +
          "px";
        am.top =
          (aw.TwoLineEntry ? aw.iDPRowHeight : 0) +
          (aw.iDPInputHeight / 4 + aw.iDPInputTop) +
          "px";
        E._Additional = t;
        j = E._Additional = t;
        E._label2 = t;
        au.appendChild(t);
      }
    }
  } else {
    if (E.bSlider) {
      var ah =
        C +
        (aw.deviceInputPad ? aw.deviceInputPad : d) +
        d +
        aw.InputLength +
        aw.SliderLeftMargin;
      var N = aw.iDPItemHeight;
      var x = (E._slider = document.createElement("div"));
      var H = x.style;
      x.setAttribute("aria-hidden", "true");
      if (!KJE.bPlusMinus) {
        x.labels = E.setLabelSlider(N, aB, x);
        x.labels.indent = ah;
        H.position = KJE.InputFieldPosition;
        H.display = KJE.InputFieldDisplay;
        H.left = ah + "px";
        x.className = "KJESlider";
      } else {
        x.className = "KJEIncrementer";
        H.position = KJE.InputFieldPosition;
        H.display = KJE.InputFieldDisplay;
        H.left = ah + d + "px";
      }
      if (aw.TwoLineEntry) {
        H.top = aw.iDPRowHeight + "px";
      }
      x.indent = ah;
      x.unselectable = "on";
      H.height = N + "px";
      x.bMO = true;
      if (W && KJE.InputFieldPosition == "static") {
        W.appendChild(E._slider);
      } else {
        au.appendChild(E._slider);
      }
      if (KJE.bPlusMinus) {
        var b = (E._plus = document.createElement("div"));
        var aA = (E._minus = document.createElement("div"));
        var ak = b.style;
        var u = aA.style;
        aA.className = "KJEIncrementControl KJEIncrementMinus";
        b.className = "KJEIncrementControl KJEIncrementPlus";
        u.bMouseoutignore = ak.bMouseoutignore = true;
        u.unselectable = ak.unselectable = "on";
        u.position = ak.position = "relative";
        u.cursor = ak.cursor = "pointer";
        x.appendChild(E._minus);
        x.appendChild(E._plus);
        E.AddPlusMinusEvents(b, aA);
      } else {
        var r = (E._line = document.createElement("input"));
        r.setAttribute("type", "range");
        r.setAttribute("aria-hidden", "true");
        r.setAttribute("min", "0");
        r.setAttribute("max", "100");
        r.setAttribute("step", ".01");
        if (KJE.showSliderTitle) {
          r.title = KJE.FTR(E._sLabel + " " + KJE.MSG_SLIDER);
        }
        r.tabIndex = "-1";
        KJE.elementHeight(r.style, aw.iDPRowHeight / 2 + 2 + "px");
        r.style.outline = "none";
        r.className = "KJERange";
        var O = r.style;
        r.bMouseoutignore = true;
        r.unselectable = "on";
        O.position = "relative";
        O.cursor = "pointer";
        x.appendChild(E._line);
        var Q = aw.SliderKnobSize;
        E.bSetRange = true;
        E.AddNativeEvents(r);
        O.left = "0px";
        E._posAdjust = 0;
      }
    }
  }
  E.labelOffsetWidth = C;
  E.vDefault2 =
    E._inputTypeAdditional != aw.TypeNone ? E._Additional.value : null;
  aw.InputItem.InputSetValues(E, E.vDefault, E.vDefault2, true);
  E.AddInputEvents(J);
  if (ao.get(g + "_HIDE", false)) {
    E.bValidate = false;
    E.hide();
  }
  if (ao.get(g + "_DISABLE", KJE.bLockDown ? true : false)) {
    E.disable();
  }
};
KJE.InputItem.bDropBoxRequired = function (b, a) {
  var c = true;
  if (KJE.parameters.get(b + "_HIDE", false)) {
    c = false;
  } else {
    if (KJE.parameters.get(b + "_DISABLE", KJE.bLockDown ? true : false)) {
      c = false;
    }
  }
  KJE.InputItem.setRequiredAttribute(a, c);
  return;
};
KJE.InputItem.prototype.getLabelForInput = function (c, h, f, b, d) {
  var a = this;
  var i = KJE;
  var g = (a._label = document.createElement("div"));
  var e = g.style;
  e.position = KJE.InputFieldPosition;
  e.display = KJE.InputFieldDisplay;
  if (i.SetLabelLength) {
    e.width = i.LabelLength + "px";
  }
  e.left = KJE.LabelLeftMargin + "px";
  i.setLabelWrap(c, g, h, !f, null, a.className);
  g.className = a.className;
  if (g._oLabel) {
    g._oLabel.setAttribute("id", "KJE-LB-" + a._name);
    g._oTextSpan = i.appendSpan(
      g._oLabel,
      "KJE-RT-" + a._name,
      a.className,
      a.bNoLabel ? "" : a._sLabel
    );
    g._oColonSpan = i.appendSpan(
      g._oLabel,
      "KJE-RC-" + a._name,
      a.className,
      a.bNoLabel ? "" : i.Colon
    );
    g._oRequiredSpan = null;
    if (a._inputRequired) {
      g._oRequiredSpan = i.appendSpan(
        d ? b.parentNode : g._oLabel,
        "KJE-RR-" + a._name,
        "KJERequired",
        i.InputItem.getRequiredSymbol(a._inputRequired)
      );
    }
    g._oRangeSpan = null;
    if (a._inputType == i.TypeNumber) {
      g._oRangeSpanName = "KJE-RG-" + a._name;
      g._oRangeSpan = i.appendSpan(
        d ? b.parentNode : g._oLabel,
        g._oRangeSpanName,
        "KJEAccessibleInLine",
        i.getKJEReplaced(
          i.MSG_VALID_RANGE,
          i.format[a._format](
            a._minimum / (a._format == i.FMT_PERCENT ? 100 : 1),
            a._decimals
          ),
          i.format[a._format](
            a._maximum / (a._format == i.FMT_PERCENT ? 100 : 1),
            a._decimals
          )
        )
      );
    } else {
      if (a._inputType == i.TypeDate) {
        g._oRangeSpanName = "KJE-RG-" + a._name;
        g._oRangeSpan = i.appendSpan(
          d ? b.parentNode : g._oLabel,
          g._oRangeSpanName,
          "KJEAccessibleInLine",
          i.getKJEReplaced(i.MSG_INVALID_DATE, a._sLabel)
        );
      }
    }
    g._oLabel.style.marginTop = i.iDPInputHeight / 4 + i.iDPInputTop + "px";
  }
  return g;
};
KJE.InputItem.prototype.setInputItemRequired = function (b) {
  var a = this;
  a._inputRequired = b;
  KJE.InputItem.setRequiredAttribute(a._inputField, b);
  if (a._label._oRequiredSpan) {
    a._label._oRequiredSpan.innerHTML = KJE.InputItem.getRequiredSymbol(b);
  }
};
KJE.InputItem.getRequiredSymbol = function (a) {
  return a ? KJE.MSG_REQUIRED_SYMBOL : KJE.MSG_NOTREQUIRED_SYMBOL;
};
KJE.InputItem.setRequiredAttribute = function (a, b) {
  if (a) {
    a.setAttribute("aria-required", b ? "true" : "false");
  }
};
KJE.InputItem.InputSetValues = function (e, d, f, a) {
  var c = KJE;
  var g = d;
  if (a && e.bUseStoredForDefault) {
    g = KJE.StorageGet(e._name, g);
  }
  switch (e._inputType) {
    case c.TypeRadios:
    case c.TypeRadio:
      e._inputField.checked = g;
      if (e.oAdditional) {
        e._Additional.checked = !e._inputField.checked;
      }
      break;
    case c.TypeCheckbox:
      e._inputField.checked = g;
      break;
    case c.TypeDropBox:
      var b = c.setDropBox(e._inputField, g);
      e._InComplete = false;
      if (b == 0 && KJE.bFirstNotValid) {
        e._InComplete = true;
      }
      break;
    case c.TypeLabel:
      e._inputField.innerHTML = g;
      break;
    case c.TypeDate:
      e._inputField.value = g;
      e.setTypedDate(true);
      break;
    case c.TypeString:
      e._inputField.value = g;
      e.setTypedString(true);
      break;
    case c.TypeNumber:
      e._inputField.value = g;
      e.setTypedValue(true);
  }
  if (e._inputTypeAdditional != c.TypeNone) {
    var g = f;
    if (a && e.bUseStoredForDefault) {
      g = c.StorageGet(e._Additional.name, e.vDefault, e.bUseStoredForDefault);
    }
    switch (e._inputTypeAdditional) {
      case c.TypeDropBox:
        var b = c.setDropBox(e._Additional, g);
        e._InComplete = false;
        if (b == 0 && KJE.bFirstNotValid) {
          e._InComplete = true;
        }
        break;
      case c.TypeDate:
        e._Additional.value = g;
        break;
      case c.TypeString:
        e._Additional.value = g;
        break;
      case c.TypeNumber:
        e._Additional.value = g;
        e.setTypedValue(true);
    }
  }
};
KJE.InputItem.AltHelpName = false;
KJE.AddDescribedBy = function (a, b) {
  if (KJE.bDescribedBy) {
    a.setAttribute("aria-describedby", b ? b : a.sDescribedBy);
  } else {
    a.removeAttribute("aria-describedby");
  }
};
KJE.AddDefinitionEvents = function (m, o, i, j, c, e, h, n, f, g) {
  var l = 50;
  var k = KJE.iDPInputHeight - 5;
  var b = document.createElement("div");
  b.className = "KJEGuiDefnPopup" + (n ? " " + n : "");
  b.id = "KJE-PODEFN-" + j;
  if (e) {
    if (!f) {
      if (KJE.bDescribedBy) {
        e.sDescribedBy = b.id;
        KJE.AddDescribedBy(e);
      }
    }
  }
  var d = g;
  if (d == null) {
    d = document.createElement("button");
    d.id = "KJE-PO-" + j;
    var a = (d.open_help_button = "PO-" + j);
    if (a) {
      e.addEventListener(
        "focus",
        function (p) {
          if (KJE.MenuWindowHide && e != KJE.Menu) {
            KJE.MenuWindowHide(true);
          }
        },
        false
      );
    }
  }
  d.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + i);
  d.className = "KJEDefinitionIcon" + (h ? " " + h : "");
  d.innerHTML = KJE.MSG_DEFINE_HELPICON;
  d.tabIndex = "0";
  d.setAttribute("type", "button");
  b.id_closebutton = "KJE-POCLOSE-" + j;
  b.innerHTML =
    "<div class=KJEDefinitionPopup>" +
    (o.innerHTML ? o.innerHTML : o) +
    "</div>";
  var c = c ? c : KJE.DefinitionIconPosition;
  if (c == 1) {
    d.style.cssFloat = "right";
    m.appendChild(d);
  } else {
    if (c == 0) {
      d.style.cssFloat = "left";
      m.insertBefore(d, m.firstChild);
    } else {
      if (c == 2) {
        m.insertBefore(d, m);
      } else {
        if (c == 4) {
          m.insertBefore(d, m.firstChild);
        } else {
          if (c == 3 || c == 5) {
            KJE.insertAfter(d, m);
          }
        }
      }
    }
  }
  b.setAttribute("aria-label", KJE.MSG_DEFINE_PREFIX + i);
  d.addEventListener(
    "focus",
    function (p) {
      if (KJE.MenuWindowHide) {
        KJE.MenuWindowHide(true);
      }
      if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint != b) {
        KJE.DefnPointHide();
      }
      p.preventDefault();
    },
    false
  );
  if (KJE.bDescribedBy) {
    d.setAttribute("aria-controls", b.id);
  }
  if (f) {
    d.addEventListener(
      "click",
      function (p) {
        if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
          KJE.DefnPointHide();
        } else {
          KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
        }
        p.preventDefault();
      },
      false
    );
  } else {
    if (c < 4) {
      m.addEventListener(
        "click",
        function (p) {
          if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
            KJE.DefnPointHide();
          } else {
            KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
          }
          p.preventDefault();
        },
        false
      );
    }
    if (c > 1) {
      d.addEventListener(
        "click",
        function (p) {
          if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint == b) {
            KJE.DefnPointHide();
          } else {
            KJE.DefnPointShow(d, b, l, k, m, 60000, j, c);
          }
          p.preventDefault();
        },
        false
      );
    }
  }
  d.setAttribute(KJE.sExpand, "false");
  b.style.display = "none";
  b.setAttribute("aria-hidden", "true");
  m.parentNode.insertBefore(b, m.nextSibling);
  return b;
};
KJE.InputItem.prototype.AddPlusMinusEvents = function (c, a) {
  var b = this;
  c.addEventListener(
    "click",
    function (d) {
      b.doIncrement(true);
    },
    false
  );
  a.addEventListener(
    "click",
    function (d) {
      b.doIncrement(false);
    },
    false
  );
};
KJE.InputItem.prototype.AddNativeEvents = function (b) {
  var a = this;
  b.addEventListener(
    "input",
    function (c) {
      if (a.bSetRange) {
        a.setRangeValue(c);
      }
      if (KJE.MenuWindowHide) {
        KJE.MenuWindowHide(true);
      }
      a.bSetRange = true;
    },
    false
  );
  b.addEventListener(
    "change",
    function (c) {
      a.setRangeValue(c);
      if (KJE.MenuWindowHide) {
        KJE.MenuWindowHide(true);
      }
    },
    false
  );
  a.setLowerFill(b);
};
KJE.InputItem.prototype.setCSSProperty = function () {
  this._line.style.setProperty(
    "--webkitProgressPercent",
    Math.ceil(
      ((this._line.value - this._line.min) /
        (this._line.max - this._line.min)) *
        1000
    ) /
      10 +
      "%"
  );
};
KJE.InputItem.prototype.handleUpAndLeave = function () {
  this.isRangeChanging = false;
};
KJE.InputItem.prototype.handleDown = function () {
  this.isRangeChanging = true;
};
KJE.InputItem.prototype.setLowerFill = function (b) {
  if (!KJE.CHROME && !KJE.Safari) {
    return;
  }
  var a = this;
  this.isRangeChanging = false;
  b.addEventListener("mousemove", function () {
    if (!a.isRangeChanging) {
      return;
    }
    a.setCSSProperty();
  });
  b.addEventListener("mousedown", function () {
    a.isRangeChanging = true;
  });
  b.addEventListener("mouseup", function () {
    a.isRangeChanging = false;
  });
  b.addEventListener("mouseleave", function () {
    a.isRangeChanging = false;
  });
  b.addEventListener("click", function () {
    a.setCSSProperty();
  });
};
KJE.InputItem.prototype.AddInputEvents = function (b) {
  var a = this;
  b.addEventListener(
    "change",
    function (c) {
      a.doBlur(c);
    },
    false
  );
  b.addEventListener(
    "focus",
    function (c) {
      a.doFocus(c);
    },
    false
  );
  b.addEventListener(
    "keypress",
    function (c) {
      if (c.keyCode == 13) {
        a.doBlur();
        return KJE.Dropper.stopBubble(c);
      }
    },
    false
  );
};
KJE.InputItem.prototype.doFocus = function () {
  var a = KJE;
  switch (this._inputType) {
    case a.TypeRadio:
    case a.TypeRadios:
    case a.TypeCheckbox:
    case a.TypeDropBox:
    case a.TypeLabel:
      break;
    case a.TypeDate:
    case a.TypeString:
    case a.TypeNumber:
      this._inputField.select();
      if (this._inputField.value == this.getName()) {
        this._inputField.value = "";
      }
  }
  if (this.oDivDefn) {
    if (KJE.DefnPointTimeOut > 0 && KJE.DefnPoint != this.oDivDefn) {
      KJE.DefnPointHide();
    }
  }
  if (KJE.MenuWindowHide) {
    KJE.MenuWindowHide(true);
  }
};
KJE.InputItem.prototype.doBlur = function () {
  var b = KJE;
  var c = this;
  switch (c._inputType) {
    case b.TypeRadio:
    case b.TypeRadios:
    case b.TypeCheckbox:
      b.dataChanged();
      break;
    case b.TypeDropBox:
      c._InComplete = false;
      var a = c._inputField.selectedIndex;
      if (a == 0 && c.bFirstNotValid) {
        c._InComplete = true;
      }
      c.setSliderPosition(c._inputField.selectedIndex);
      b.dataChanged();
      break;
    case b.TypeDate:
      c.setTypedDate();
      break;
    case b.TypeString:
      c.setTypedString();
      break;
    case b.TypeNumber:
      c.setTypedValue();
  }
};
KJE.InputItem.prototype.doClick = function (b, a) {
  this.setMouseValue(b, a);
};
KJE.InputItem.prototype.doMouseUp = function (c, a) {
  var b = this;
  b._mouseDown = false;
};
KJE.InputItem.prototype.doMouseOut = function (g, f) {
  var b = this;
  var c = window.event;
  if (b._inputField.disabled) {
    return;
  }
  if (b._mouseDown) {
    if (!g) {
      var g = c;
    }
    var d = c ? g.srcElement : g.target;
    if (d.bMouseoutignore) {
      return;
    }
    var a = g.relatedTarget ? g.relatedTarget : g.toElement;
    while (a != d && a.nodeName != "BODY") {
      a = a.parentNode;
    }
    if (d != a) {
      b.doMouseUp();
    }
  }
};
KJE.InputItem.prototype.doMouseDown = function (c, b) {
  var a = this;
  if (a._inputField.disabled) {
    return;
  }
  a._mouseDown = true;
  if (c) {
    a.setMouseValue(c, b);
  }
};
KJE.InputItem.prototype.doMouseMove = function (c, b) {
  var a = this;
  if (a._mouseDown) {
    a.setMouseValue(c, b);
  }
};
KJE.InputItem.prototype.setRangeValue = function (a) {
  v = this._line.value;
  this.setChangeValue(v / 100);
};
KJE.InputItem.prototype.setMouseValue = function (h, g) {
  var d = this;
  var a = KJE.getMouseCoord(h, d._slider, g);
  if (a.x >= 0) {
    var c = d._posAdjust;
    var f = d._slider.offsetWidth;
    var b = (a.x - c) / (f - c);
    this.setChangeValue(b);
  }
};
KJE.InputItem.prototype.setChangeValue = function (b) {
  var c = this;
  var e = c._minimum;
  var f = c._maximum;
  var d = c._oScale;
  if (d) {
    b = KJE.s_Translate(
      b * 100,
      d._Min,
      d._Mid1,
      d._Mid2,
      d._Max,
      d._stepMin,
      d._stepMid,
      d._stepMax
    );
  } else {
    var a = c._increment;
    b = b * c._range + e;
    b = a == 1 ? Math.round(b) : Math.round(b / a) * a;
  }
  c._InComplete = false;
  c.setValue(b > f ? f : b < e ? e : b, false, true);
};
KJE.InputItem.prototype.doIncrement = function (d) {
  var c = this;
  var a = c._format;
  var e = c._minimum;
  var f = c._maximum;
  if (a == KJE.FMT_PERCENT) {
    iIncrement = 1;
  } else {
    if (f < 20) {
      iIncrement = 0.5;
    } else {
      if (f < 100) {
        iIncrement = 1;
      } else {
        if (f < 250) {
          iIncrement = 5;
        } else {
          if (f < 1000) {
            iIncrement = 10;
          } else {
            if (f < 10000) {
              iIncrement = 100;
            } else {
              iIncrement = 1000;
            }
          }
        }
      }
    }
  }
  var b = c.getValue() + (d ? 1 : -1) * iIncrement;
  c._InComplete = false;
  c.setValue(b > f ? f : b < e ? e : b, false, true);
};
KJE.InputItem.prototype.validate = function () {
  var b = this;
  if (b.bValidate) {
    if (b._bError) {
      throw b._sError;
    }
    var a = !(b.bIncompleteCheck && b._InComplete);
    if (!a) {
      b.setIncomplete();
    }
    return a;
  } else {
    return true;
  }
};
KJE.InputItem.prototype.setValue = function (p, b, j) {
  var r = KJE;
  var l = this;
  var k = l._inputField;
  var g = l._format;
  var f = l._container;
  var i = l._inputType;
  var a = false;
  if (i == r.TypeNone) {
    l._value = p;
    l._bError = false;
    return;
  } else {
    if (i == r.TypeDate) {
      var o = new Date();
      try {
        var c = new Array();
        if (p.indexOf("/") > 0) {
          c = p.split("/");
          c[0] = Math.round(c[0]);
          c[1] = Math.round(c[1]);
          c[2] = Math.round(c[2]);
        } else {
          c[0] = Math.round(p.substring(0, 2));
          c[1] = Math.round(p.substring(2, 4));
          c[2] = Math.round(p.substring(4));
        }
        if (c[2] < 100) {
          c[2] += 2000;
        }
        o = KJE.getDate(c[2], c[0], c[1]);
      } catch (m) {
        a = true;
      }
      if (a) {
        l._sError = r.getKJEReplaced(r.MSG_INVALID_DATE, l._sLabel);
        l._value = null;
      } else {
        l._value = o;
        k.value = r.dateFormat(o);
      }
    } else {
      if (i == r.TypeString) {
        k.value = p;
      } else {
        if (i == r.TypeDropBox) {
          k.selectedIndex = Math.round(p);
          l.setSliderPosition(p);
        } else {
          if (i == r.TypeLabel) {
            k.innerHTML = p;
          } else {
            if (i == r.TypeCheckbox) {
              k.checked = p;
            } else {
              if (l.bValidate) {
                if (p > l._maximum) {
                  l._sError = r.getKJEReplaced(
                    this.MSG_EXCEEDS_LIMIT_OF_RANGE
                      ? this.MSG_EXCEEDS_LIMIT_OF_RANGE
                      : r.MSG_EXCEEDS_LIMIT_OF_RANGE,
                    l._sLabel,
                    r.format[g](
                      r.FMT_PERCENT == g ? l._maximum / 100 : l._maximum,
                      l._decimals,
                      l._iPadding
                    )
                  );
                  a = true;
                } else {
                  if (p < l._minimum) {
                    l._sError = r.getKJEReplaced(
                      this.MSG_UNDER_LIMIT_OF_RANGE
                        ? this.MSG_UNDER_LIMIT_OF_RANGE
                        : r.MSG_UNDER_LIMIT_OF_RANGE,
                      l._sLabel,
                      r.format[g](
                        r.FMT_PERCENT == g ? l._minimum / 100 : l._minimum,
                        l._decimals,
                        l._iPadding
                      )
                    );
                    a = true;
                  }
                }
              }
              var q = (l._value = r.round(p, l._decimals));
              var h = "";
              if (
                r.deviceUseNumberType &&
                (g == r.FMT_DOLLARS || g == r.FMT_PERCENT)
              ) {
                h = r.nbr(q, l._decimals, "", "", true, false);
              } else {
                h = r.format[g](
                  g == r.FMT_PERCENT ? q / 100 : q,
                  l._decimals,
                  l._iPadding
                );
              }
              k.value = r.replace("&nbsp;", " ", h);
              l.setSliderPosition(q);
            }
          }
        }
      }
    }
  }
  l._bError = a;
  if (a) {
    l.setError();
  } else {
    l.setGoodInput();
  }
  if (!b) {
    r.dataChanged(j);
  }
};
KJE.InputItem.prototype.setCalculationError = function (a) {
  this.setGoodInput();
  this.setError(a.err);
};
KJE.InputItem.prototype.setSliderPosition = function (a) {
  var f = this;
  if (f.bSlider) {
    var e = f._slider.width;
    if (e && (a || a == 0)) {
      var g = f._oScale;
      var d = f._posAdjust;
      var b = 0;
      if (g) {
        b = KJE.s_Untranslate(a, g._Min, g._Mid1, g._Mid2, g._Max) / 100;
      } else {
        var h = f._maximum;
        var c = f._minimum;
        b = ((a > h ? h : a < c ? c : a) - c) / f._range;
      }
      f._line.value = b * 100;
      if (KJE.CHROME || KJE.Safari) {
        if (f.setCSSProperty) {
          f.setCSSProperty();
        }
      }
    }
  }
};
KJE.InputItem.prototype.setTypedString = function (c) {
  var b = KJE.replace;
  var a = this;
  a.setValue(
    b("<", "", b(">", "", b("(", "", b(")", "", a._inputField.value)))),
    c
  );
};
KJE.InputItem.prototype.setTypedDate = function (f) {
  var a = KJE;
  var c = this;
  var e = c._inputField.value;
  var b = e;
  c._InComplete = false;
  if (e == "TODAY") {
    b = a.dateFormat(new Date());
  } else {
    if (e == "NEXT_MONTH") {
      var g = new Date();
      g.setMonth(g.getMonth() + 1);
      b = a.dateFormat(g);
    } else {
      if (b.substr(10, 1) == "T") {
        b = b.substr(5, 2) + "/" + b.substr(8, 2) + "/" + b.substr(0, 4);
      }
      b = a.stripDate(b);
      if (b == "" || b == c._sLabel) {
        c._inputField.value = c.bNoLabel ? c._sLabel : "";
        c._InComplete = true;
        c._bError = false;
        if (c.bIncompleteCheck) {
          c.setIncomplete();
        }
        if (!f) {
          a.dataChanged();
        }
        c._value = null;
        return;
      }
    }
  }
  c.setValue(b, f);
};
KJE.InputItem.prototype.setGoodInput = function () {
  var a = this;
  if (a._inputType != KJE.TypeNone) {
    a._container.style.backgroundColor = a._container.backgroundColor;
    if (a.spanInputRequiredDesc && KJE.POPUP_REQUIRED_MSG) {
      if (a.spanInputRequiredDescMsg) {
        a.spanInputRequiredDescMsg.className = KJE.REQUIRED_HOVER_CLASS;
      }
      if (a.spanInputRangeDescInnerHtml) {
        if (a.spanInputRangeDescInnerHtml != a.spanInputRangeDesc.innerHTML) {
          a.spanInputRangeDesc.innerHTML = a.spanInputRangeDescInnerHtml;
        }
      }
    }
    if (a.spanInputRangeDesc) {
      a.spanInputRangeDesc.className = "KJEAccessibleInLine";
    }
    a._inputField.setAttribute("aria-invalid", "false");
    if (a._inputField.sDescribedBy) {
      KJE.AddDescribedBy(a._inputField);
    } else {
      a._inputField.removeAttribute("aria-describedby");
    }
    if (a._inputField.classes) {
      a._inputField.className = a._inputField.classes;
    }
  }
};
KJE.InputItem.prototype.setError = function (a) {
  var b = this;
  b._container.style.backgroundColor = KJE.ErrorBackground;
  if (b.spanInputRangeDesc) {
    b.spanInputRangeDesc.className = "KJEGuiErrorPopup";
    if (a) {
      b.spanInputRangeDesc.innerHTML = a;
    }
    KJE.AddDescribedBy(
      b._inputField,
      b.spanInputRangeID +
        (b._inputField.sDescribedBy ? " " + b._inputField.sDescribedBy : "")
    );
  }
  b._inputField.setAttribute("aria-invalid", "true");
  b._inputField.className =
    b.preserveClasses(b._inputField) + " KJEInputErrorField";
};
KJE.InputItem.prototype.setIncomplete = function () {
  if (KJE.initializing > 1 || this.bValueBeenSet) {
    var b = this;
    var a = KJE;
    b._container.style.backgroundColor = a.IncompleteBackground;
    if (b.spanInputRequiredDesc && a.POPUP_REQUIRED_MSG) {
      b.spanInputRequiredDescMsg = b.spanInputRequiredDesc.firstElementChild;
      if (b.spanInputRequiredDescMsg) {
        b.spanInputRequiredDescMsg.className = "KJEGuiErrorPopup";
      }
    }
    b._inputField.setAttribute("aria-invalid", "true");
    b._inputField.className =
      b.preserveClasses(b._inputField) + " KJEInputErrorField";
  }
};
KJE.InputItem.prototype.preserveClasses = function (a) {
  if (a.classes) {
  } else {
    a.classes = a.className;
  }
  return a.classes;
};
KJE.InputItem.prototype.setTypedValue = function (e) {
  var a = KJE;
  var c = this;
  c._InComplete = false;
  var d = c._inputField.value;
  if (d == "" || d == c._sLabel) {
    c.setSliderPosition(c._minimum);
    c._inputField.value = c.bNoLabel ? c._sLabel : "";
    c._InComplete = true;
    c._bError = false;
    if (c.bIncompleteCheck) {
      c.setIncomplete();
    }
    if (!e) {
      a.dataChanged();
      this.bValueBeenSet = true;
    }
  } else {
    var b = a.round(parseFloat(a.strip(d, c.bAbsoluteValue)), c._decimals);
    c.bSetRange = false;
    c.setValue(b, e);
  }
};
KJE.InputItem.prototype.getSecondValue = function () {
  var a = this;
  return a.getV(a._inputTypeAdditional, a._Additional);
};
KJE.InputItem.prototype.getValue = function () {
  var a = this;
  return (a._value = a.getV(a._inputType, a._inputField, a._format));
};
KJE.InputItem.prototype.setText = function (a) {
  var b = this;
  return b.setT(b._inputType, b._inputField, a);
};
KJE.InputItem.prototype.setSecondText = function (a) {
  var b = this;
  return b.setT(b._inputTypeAdditional, b._Additional, a);
};
KJE.InputItem.prototype.getSecondFormatted = function () {
  var a = this;
  return a.getF(a._inputTypeAdditional, a._Additional);
};
KJE.InputItem.prototype.getFormatted = function () {
  var a = this;
  return a._InComplete ? KJE.sIncomplete : a.getF(a._inputType, a._inputField);
};
KJE.InputItem.prototype.getF = function (g, f) {
  var b = KJE;
  var e = "";
  var d = this;
  var c = d._value;
  var a = d._format;
  switch (g) {
    case b.TypeRadio:
    case b.TypeRadios:
    case b.TypeCheckbox:
      e = f.value;
      break;
    case b.TypeDropBox:
      e = f[f.selectedIndex].text;
      break;
    case b.TypeLabel:
      e = f.innerHTML;
      break;
    case b.TypeDate:
      e = b.dateFormat(c);
      break;
    case b.TypeString:
      e = f.value;
      break;
    case b.TypeNumber:
      e = b.format[a](
        a == b.FMT_PERCENT ? c / 100 : c,
        d._decimals,
        d._iPadding
      );
      break;
    case b.TypeNone:
      e = c;
  }
  return e;
};
KJE.InputItem.prototype.getV = function (f, e, b) {
  var a = KJE;
  var c = 0;
  var d = this;
  switch (f) {
    case a.TypeRadio:
    case a.TypeRadios:
    case a.TypeCheckbox:
      c = e.checked;
      break;
    case a.TypeDropBox:
      c = e[e.selectedIndex].value;
      if (b != a.FMT_STRING) {
        c = Math.round(c);
      }
      break;
    case a.TypeLabel:
      c = e.innerHTML;
      break;
    case a.TypeDate:
      c = d._value;
      break;
    case a.TypeString:
      c = e.value;
      break;
    case a.TypeNumber:
      c = a.round(parseFloat(a.strip(e.value, d.bAbsoluteValue)), d._decimals);
      break;
    case a.TypeNone:
      c = d._value;
  }
  return c;
};
KJE.InputItem.prototype.setT = function (e, d, b) {
  var a = KJE;
  var c = this;
  switch (e) {
    case a.TypeRadio:
    case a.TypeRadios:
    case a.TypeCheckbox:
      break;
    case a.TypeDropBox:
      break;
    case a.TypeLabel:
      d.innerHTML = b;
      break;
    case a.TypeDate:
      d.value = b;
      c.setTypedDate(true);
      break;
    case a.TypeString:
      d.value = b;
      c.setTypedString(true);
      break;
    case a.TypeNumber:
      d.value = a.replace("&nbsp;", " ", b);
      c.setTypedValue(true);
      break;
  }
};
KJE.InputItem.prototype.shortDesc = function () {
  return this._sLabel + KJE.Colon + " " + this.getFormatted();
};
KJE.InputItem.prototype.containerWidth = function () {
  return this._container.offsetWidth - KJE.iInputContainerPad;
};
KJE.InputItem.prototype.newWidth = function () {
  var m = KJE;
  var f = this;
  var e = f._inputField;
  var a = f._Additional;
  if (f._inputType == m.TypeNone) {
    return;
  }
  var k = this.containerWidth();
  var d = f.SliderX();
  var j = false;
  if (!f._sTrailingText && !f.bSlider) {
    switch (f._inputType) {
      case m.TypeRadio:
      case m.TypeCheckbox:
      case m.TypeNumber:
      case m.TypeDate:
      case m.TypeRadios:
        break;
      case m.TypeString:
        var c = Math.max(k - e.indent - m.iDPInputPad * 3, 0);
        var b = Math.max(k - e.indent - m.iDPInputPad, 0);
        if (c < m.InputLength) {
          c = b > m.InputLength ? m.InputLength : b;
        }
        j = true;
        break;
      case m.TypeDropBox:
        var c = Math.max(k - e.indent - m.iDPInputPad, 0);
        var b = Math.max(k - e.indent + m.iDPInputPad, 0);
        if (c < m.InputLength + m.iDPInputPad * 2) {
          c =
            b > m.InputLength + m.iDPInputPad * 2
              ? m.InputLength + m.iDPInputPad * 2
              : b;
        }
        j = true;
        break;
      case m.TypeLabel:
        var c = Math.max(k - e.indent + m.iDPInputPad, 0);
        j = true;
    }
  }
  if (!j) {
    switch (f._inputType) {
      case m.TypeRadio:
      case m.TypeCheckbox:
        break;
      case m.TypeRadios:
        var c = Math.max(k - e.indent, 0);
        if (c < m.InputLength) {
          c = m.InputLength;
        }
        j = true;
        break;
      case m.TypeDropBox:
        var c = m.InputLength + KJE.iDPDropBoxPad * 2;
        var b = Math.max(k - e.indent + m.iDPInputPad, 0);
        if (b < c) {
          c = b;
        }
        j = true;
        break;
      case m.TypeNumber:
      case m.TypeDate:
      case m.TypeString:
        if (f._sTrailingText) {
          if (f._label2 && f.bTooNarrowForSlider()) {
            f._label2.style.display = "none";
          } else {
            if (f._label2) {
              f._label2.style.display = KJE.InputFieldDisplay;
            }
          }
        }
      case m.TypeLabel:
        var c = Math.max(
          k -
            m.iDPInputPad -
            e.indent -
            (f.SliderWidthAdjust ? f.SliderWidthAdjust : m.SliderWidthAdjust),
          0
        );
        if (f.bTooNarrowForSlider() && c < KJE.InputLength) {
        } else {
          c = KJE.InputLength;
        }
        j = true;
    }
  }
  if (j) {
    if (f._inputType == m.TypeRadios) {
      if (f._oDivRadios) {
        f._oDivRadios.style.width = c + "px";
      }
    } else {
      if (f._iInputFieldDiv) {
        f._iInputFieldDiv.style.width = c + "px";
        e.style.width = c + "px";
      } else {
        e.style.width = c + "px";
      }
    }
  }
  if (a) {
    if (a.indent && f._inputTypeAdditional != m.TypeRadios) {
      var c = d + 10 - a.indent;
      if (f._AdditionalDiv) {
        f._AdditionalDiv.style.width = c + "px";
        a.style.width = c + KJE.iDPDropBoxModernPad + "px";
      } else {
        a.style.width = c + "px";
      }
    }
  }
  var g = f._slider;
  if (g && !e.disabled) {
    this.showSlider(g);
  }
  var l = f._label2;
  if (l) {
    var h = l.offsetHeight;
    if (h + 6 > m.iDPRowHeight) {
      l.style.top = (m.TwoLineEntry ? m.iDPRowHeight : 0) + "px";
      KJE.elementHeight(f._container.style, h + 6 + "px");
    } else {
      KJE.elementHeight(f._container.style, "");
      l.style.top =
        (m.TwoLineEntry ? m.iDPRowHeight : 0) +
        (m.iDPInputHeight / 4 + m.iDPInputTop) +
        "px";
    }
  }
};
KJE.InputItem.prototype.SliderX = function () {
  var a = this.containerWidth();
  return (
    a -
    KJE.iDPInputPad * 2 -
    (this.SliderWidthAdjust ? this.SliderWidthAdjust : KJE.SliderWidthAdjust)
  );
};
KJE.InputItem.prototype.bTooNarrowForSlider = function () {
  return (
    this.SliderX() -
      KJE.InputTotalLength +
      (KJE.TwoLineEntry ? KJE.LabelLeftMargin + KJE.LabelLength : 0) <
    KJE.SliderMinLength
  );
};
KJE.InputItem.prototype.showSlider = function (e) {
  var a = KJE;
  var d = this;
  var c = d.SliderX();
  if (e.indent) {
    if (d.bTooNarrowForSlider()) {
      e.style.display = "none";
      if (e.labels) {
        e.labels.style.display = "none";
      }
    } else {
      e.style.display = "inline-block";
      if (e.labels) {
        e.labels.style.display = "inline-block";
        var b = c - e.indent;
        e.width = b;
        e.style.width = b + "px";
        d._line.style.width = b + "px";
        e.labels.style.width = c - (e.labels.indent + KJE.iDPSliderPad) + "px";
        d.setSliderPosition(
          d._inputType == a.TypeDropBox ? d._inputField.selectedIndex : d._value
        );
      }
    }
  }
};
KJE.InputItem.prototype.hide = function () {
  var a = this._container;
  if (a) {
    this.bShow = false;
    a.style.display = "none";
  }
};
KJE.InputItem.prototype.show = function () {
  var a = this._container;
  if (a) {
    this.bShow = true;
    a.style.display = "block";
  }
};
KJE.InputItem.prototype.setLabelSlider = function (g, h, e) {
  var j = ["left", "center", "center", "right"];
  var d = document.createElement("div");
  d.className = "KJEScale";
  d.setAttribute("aria-hidden", "true");
  d.className = "KJEScale";
  d.unselectable = "on";
  d.style.position = "absolute";
  d.style.height = g + "px";
  d.style.cursor = "pointer";
  d.style.top = "0";
  d.style.left = KJE.iDPSliderPad + "px";
  (e ? e : this._container).appendChild(d);
  var a = KJE.SliderLabelVertAdj;
  if (h) {
    var c = (h.length > 5 ? 5 : h.length) - 1;
    for (var b = 0; b <= c; b++) {
      var f = document.createElement("div");
      f.className = "KJEScale";
      f.unselectable = "on";
      f.style.position = "absolute";
      f.style.height = g + "px";
      f.style.textAlign = j[b == c ? 3 : b];
      f.style.cursor = "pointer";
      f.style.top = 0 + a + "px";
      if (c == 4) {
        switch (b) {
          case 0:
            f.style.width = "100%";
            f.style.left = 0;
            break;
          case 1:
            f.style.width = "55%";
            f.style.left = 0;
            break;
          case 2:
            f.style.width = "100%";
            break;
          case 3:
            f.style.width = "75%";
            f.style.left = 0;
            break;
          case 4:
            f.style.width = "100%";
            f.style.right = 0;
            break;
        }
      } else {
        if (c < 2) {
          f.style.width = "100%";
        } else {
          f.style.width = (c > 2 ? 66.66 : 100) + "%";
        }
        if (b > 1) {
          f.style.right = 0;
        } else {
          f.style.left = 0;
        }
      }
      f.innerHTML = h[b];
      d.appendChild(f);
    }
  }
  return d;
};
KJE.InputItem.prototype.disable = function (a, b) {
  var d = this;
  var e = d._inputType;
  var c = d._label2;
  var f = d._label;
  if (e == KJE.TypeNone) {
    return false;
  }
  d.bValidate = false;
  d._container.style.backgroundColor = d._container.backgroundColor;
  d._InComplete = false;
  if (e == KJE.TypeCheckbox) {
    if (c) {
      c.className = "KJETrailingLabel KJETrailingLabelDisable";
    }
  }
  if (f && !a) {
    f.className = d.className + " KJETrailingLabelDisable";
  }
  if (d.bSlider) {
    if (d._slider.labels) {
      d._slider.labels.style.display = "none";
    }
    d._slider.style.display = "none";
  }
  if (d._inputField && b) {
    d._inputField.style.display = "none";
  }
  if (d._inputField) {
    d.setInputItemRequired(false, true);
    if (d.spanInputRangeDesc) {
      d.spanInputRangeDesc.style.display = "none";
    }
  }
  return (d._inputField.disabled = true);
};
KJE.InputItem.prototype.enable = function () {
  var a = KJE;
  var c = this;
  var d = c._inputType;
  var b = c._label2;
  var e = c._label;
  if (d == a.TypeNone) {
    return false;
  }
  c.bValidate = true;
  if (d == a.TypeCheckbox) {
    if (b) {
      b.className = "KJETrailingLabel";
    }
  }
  if (e) {
    e.className = this.className;
  }
  if (c.bSlider) {
    c.showSlider(c._slider);
  }
  if (c._inputField) {
    c._inputField.style.display = KJE.InputFieldDisplay;
    c.setInputItemRequired(true, true);
    if (c.spanInputRangeDesc) {
      c.spanInputRangeDesc.style.display = "inline";
    }
  }
  if (d == a.TypeDate) {
    c.setTypedDate(true);
  }
  if (d == a.TypeNumber) {
    c.setTypedValue(true);
  }
  return (c._inputField.disabled = false);
};
KJE.InputItem.prototype.getName = function () {
  return this._sLabel;
};
KJE.shortDesc = function () {
  var b = "";
  for (var a = 0; a < arguments.length; a++) {
    if (arguments[a].shortDesc) {
      b += arguments[a].shortDesc() + (a == arguments.length - 1 ? "" : ", ");
    } else {
      b += arguments[a];
    }
  }
  return b;
};
KJE.DataPointTimeOut = -1;
KJE.DataPointObject = null;
KJE.DataPointShow = function (f, c, b, g, h, d) {
  var j = KJE;
  if (!d) {
    d = 2500;
  }
  j.DataPoint.style.display = "block";
  var i = j.getScreenCoord(b, g, h);
  var a = j.DataPointOffset();
  j.DataPoint.style.left = i.x + a.x - 47 + j.DataPointX + "px";
  j.DataPoint.style.top = i.y + a.y - 5 + j.DataPointY + "px";
  j.DataPoint.innerHTML = c;
  if (j.DataPointTimeOut) {
    clearTimeout(j.DataPointTimeOut);
  }
  j.DataPointTimeOut = setTimeout(j.DataPointHide, d);
  j.DataPointObject = h;
};
KJE.DataPointHide = function () {
  var a = KJE;
  a.DataPoint.style.display = "none";
  if (a.DataPointTimeOut) {
    clearTimeout(a.DataPointTimeOut);
  }
  a.DataPointTimeOut = -1;
  a.DataPointObject = null;
};
KJE.DataPointOffset = function () {
  var a = KJE.DataPoint.offsetParent;
  if (a) {
    var b = KJE.getScreenCoord(0, 0, a);
    return { x: -b.x, y: -b.y };
  } else {
    return { x: 0, y: 0 };
  }
};
KJE.DefnPointTimeOut = -1;
KJE.DefnPoint = null;
KJE.DefnPointX = 5;
KJE.DefnPointY = 19;
KJE.DefnPointShow = function (b, i, c, g, f, e, d, a) {
  var h = KJE;
  if (h.DefnPointTimeOut) {
    clearTimeout(h.DefnPointTimeOut);
  }
  if (h.DefnPoint) {
    h.DefnPointHide();
  }
  if (!e) {
    e = 2500;
  }
  h.DefnPoint = i;
  if (typeof i.pDroppee == "undefined") {
    i.pDroppee = KJE.isInDroppee(i);
  }
  i.style.display = "block";
  KJE.DefnPoint.focus();
  if (!i.closeButtonActive) {
    i.close_button = document.getElementById(i.id_closebutton);
    if (i.close_button) {
      i.close_button.addEventListener(
        "click",
        function (j) {
          KJE.DefnPointHide(b.open_help_button);
        },
        false
      );
    }
    i.closeButtonActive = true;
    i.aButton = b;
  }
  if (a != h.DefinitionIconPositionAsIs) {
    i.style.left = h.DefnPointX + "px";
    i.style.top = h.DefnPointY + "px";
  }
  i.setAttribute("aria-hidden", "false");
  h.DefnPointTimeOut = setTimeout(h.DefnPointHide, e);
  b.setAttribute(h.sExpand, "true");
};
KJE.DefnPointHide = function (d) {
  var a = KJE;
  var c = a.DefnPoint;
  c.style.display = "none";
  c.aButton.setAttribute(a.sExpand, "false");
  c.setAttribute("aria-hidden", "true");
  if (a.DefnPointTimeOut) {
    clearTimeout(a.DefnPointTimeOut);
  }
  a.DefnPointTimeOut = -1;
  a.DefnPoint = null;
  if (d) {
    try {
      document.getElementById("KJE-" + d).focus();
    } catch (b) {}
  }
};
KJE.sDropperTitle =
  "<div class=KJEToggleIcon>**ICON**</div><div class=KJEToggleTitle>**TITLE_TEXT**</div>";
KJE.DropperDefined = function (a) {
  return document.getElementById("KJE-P-" + a);
};
KJE.DivDefined = function (a) {
  return document.getElementById("KJE-D-" + a);
};
KJE.Dropper = function (f, c, p, o, h, g) {
  var j = this;
  var m = (j._idDropper = document.getElementById("KJE-P-" + f));
  var k = (j._idDrop = document.getElementById("KJE-D-" + f));
  var b = (j._idDroppee = document.getElementById("KJE-E-" + f));
  m.className = "KJEDropper";
  k.className = "KJEDrop";
  b.className = "KJEDroppee";
  j.getOpen = p ? p : false;
  j.getClosed = o ? o : false;
  j._bShow = true;
  j.InCalculator = h ? false : true;
  j._sInnerHTML = m.innerHTML;
  j._sName = f;
  if (!KJE.DropperHide) {
    if (g) {
      m.style.display = "none";
    }
    var j = this;
    var q = KJE;
    q.iDropperCount += 1;
    var a = "DROPPER_OPEN" + q.number(q.iDropperCount);
    c = KJE.IEOld || q.parameters.get(a, c) ? true : false;
    m.setAttribute("role", "button");
    m.setAttribute("aria-controls", "KJE-E-" + f);
    q._idDroppeePadding = 0;
    if (b) {
      if (!q._idDroppeePadding) {
        try {
          q._idDroppeePadding = parseInt(
            window
              .getComputedStyle(b, null)
              .getPropertyValue("padding-top")
              .replace("px", "")
          );
        } catch (l) {}
      }
    }
    m.tabIndex = "0";
    b.style.display = KJE.DropeeDisplay;
    b.style.width = KJE.DropeeWidth;
    b.style.transition = q.DropeeTransition;
    j._iHeight = b.scrollHeight;
    if (!j._iHeight || q.iDPDroppeeForceSize) {
      j._iHeight = 0;
      var n = b.getElementsByTagName("div");
      for (var d = 0; d < n.length; d++) {
        if (n[d].className == "KJEInputContainer") {
          j._iHeight += q.iDPRowHeight;
        }
      }
      j._iHeight += 10;
    }
    j.sExtraClass = q.DropperColors
      ? q.DropperColors.length >= q.iDropperCount
        ? q.DropperColors[q.iDropperCount - 1]
        : false
      : false;
    j.AddEvents();
    j.show(c ? true : false);
    if (!c) {
      if (!(KJE.InputFieldPosition == "static")) {
        KJE.elementHeight(b.style, "auto");
      }
      b.style.display = "none";
      b.style.visibility = "hidden";
      m.setAttribute(q.sExpand, "false");
    } else {
      b.style.display = KJE.DropeeDisplay;
      KJE.elementHeight(b.style, "auto");
      m.setAttribute(q.sExpand, "true");
    }
  }
};
KJE.Dropper.prototype.AddEvents = function () {
  var a = this;
  var b = a._idDrop;
  b.addEventListener(
    "click",
    function () {
      a.toggle(a);
    },
    false
  );
  b.addEventListener(
    "keypress",
    function (c) {
      if (c.keyCode == 32 || c.keyCode == 13) {
        a.toggle(a);
        return KJE.Dropper.stopBubble(c);
      }
    },
    false
  );
  b.addEventListener(
    "keydown",
    function (c) {
      if (c.keyCode == 32 || c.keyCode == 13) {
        a.toggle(a);
        return KJE.Dropper.stopBubble(c);
      }
    },
    false
  );
  b.addEventListener(
    "focus",
    function (c) {
      if (KJE.MenuWindowHide) {
        KJE.MenuWindowHide(true);
      }
      return KJE.Dropper.stopBubble(c);
    },
    false
  );
};
KJE.Dropper.prototype.setHidden = function (b) {
  var a = this;
  a._idDrop.style.display = "none";
  a._idDroppee.style.display = "none";
};
KJE.Dropper.prototype.setShown = function (b) {
  var a = this;
  a._idDrop.style.display = "block";
  if (a._bShow) {
    a._idDroppee.style.display = KJE.DropeeDisplay;
  }
};
KJE.Dropper.prototype.setBackground = function (b) {
  var a = this;
  if (a._idDrop) {
    a._idDrop.style.backgroundColor = b;
  }
  a._idDroppee.style.backgroundColor = b;
};
KJE.Dropper.prototype.setText = function (b) {
  var c = this;
  var d = c.getOpen;
  var a = c.getClosed;
  var f = c._bShow;
  if (b) {
  } else {
    if (f && d) {
      if ("function" == typeof d) {
        b = d();
      } else {
        b = d;
      }
    } else {
      if (!f && a) {
        if ("function" == typeof a) {
          b = a();
        } else {
          b = a;
        }
      } else {
        b = c._sInnerHTML;
      }
    }
  }
  var e = b;
  e = KJE.replace(
    "<div class='KJESubTitle'>",
    " ",
    KJE.replace("</div>", " ", e)
  ).trim();
  e = KJE.replace("<div class='KJESubTitle KJECenter'>", " ", e);
  e = KJE.replace("<div class='KJESubTitle KJERightBold'>", " ", e);
  e = KJE.replace("|", " ", e);
  c._idDropper.setAttribute("aria-label", e);
  c._idDropper.innerHTML = KJE.setToggleTitleText(b, c, KJE);
};
KJE.Dropper.prototype.show = function (a) {
  var b = this;
  b._bShow = a;
  b.setText();
};
KJE.Dropper.prototype.toggle = function () {
  if (KJE.IEOld) {
    return;
  }
  if (KJE.inCommandTask(true)) {
    return;
  }
  var a = this;
  var b = a._idDroppee;
  b.style.overflow = "hidden";
  if (a._bShow) {
    a.doClose(500);
  } else {
    a.doOpen(500);
  }
};
KJE.Dropper.prototype.doClose = function (c) {
  if (KJE.MenuWindowHide) {
    KJE.MenuWindowHide(true);
  }
  var a = this;
  if (a._bShow) {
    KJE.collapseSection(a._idDroppee, a._idDropper);
    a.show(false);
    var b = a._idDroppee;
  }
};
KJE.Dropper.prototype.doOpen = function (d) {
  if (KJE.MenuWindowHide) {
    KJE.MenuWindowHide(true);
  }
  var b = this;
  if (!b._bShow) {
    KJE.expandSection(b._idDroppee, b._idDropper);
    b.show(true);
    var c = b._idDroppee;
    c.style.visibility = "visible";
    for (var a in KJE.inputs.items) {
      KJE.inputs.items[a].newWidth();
    }
  }
};
KJE.Dropper.stopBubble = function (a) {
  a.cancelBubble = true;
  a.returnValue = false;
  if (a.stopPropagation) {
    a.stopPropagation();
  }
  if (a.preventDefault) {
    a.preventDefault();
  }
  return false;
};
KJE.Dropper.prototype.open = function (a, b) {
  return;
};
KJE.addDiv = function (c, b, d) {
  var a = document.getElementById("KJE-D-" + c);
  if (a) {
    a.className = "KJEInputDiv" + (d ? " " + d : "");
    if (b) {
      a.style.backgroundColor = b;
    }
  }
  return a;
};
KJE.addDropper = function (b, a) {
  if (a) {
    b.setBackground(a);
  }
  KJE.droppers.set(b._sName, b);
  return b;
};
KJE.setToggleTitleText = function (e, h, d, g) {
  if (!e) {
    e = "";
  }
  var f = e.indexOf("<");
  var k = e.indexOf("|");
  if (f > 0 && k > 0) {
    f = f > k ? k : f;
  } else {
    f = f < k ? k : f;
  }
  var i = (f > 0 ? e.substring(0, f) : e).trim();
  if (i.charAt(i.length - 1) == ".") {
    i = i.slice(0, -1);
  }
  if (i.charAt(i.length - 1) != KJE.Colon.trim()) {
    i += KJE.Colon;
  }
  var l = "";
  var b = "";
  var n = "";
  if (h) {
    l = h._bShow ? d.sToggleAltTextOpen : d.sToggleAltTextClose;
    b = h._bShow ? d.sToggleClose : d.sToggleOpen;
    n = h._bShow ? d.sExpanded : d.sCollapse;
  }
  var m = KJE.sToggleTitle;
  var c = "";
  var j = e.indexOf("|");
  var a = g || !h ? "" : d.sToggleIcon;
  if (g || !h) {
    b = "";
    l = "";
  }
  if (j > -1) {
    m = KJE.sToggleTitle2;
    c = e.substring(j + 1);
    e = e.substring(0, j);
  } else {
    if (!h || g) {
      m = KJE.sToggleTitleH2Only;
    }
  }
  if (h != null) {
    if (h.sExtraClass) {
      m = KJE.replace("**EXTRA_CLASS**", h.sExtraClass, m);
    }
  }
  return m
    .replace("**IMG_TEXT**", l)
    .replace("**SUMMARY_TEXT**", i)
    .replace("**TITLE_TEXT**", e)
    .replace("**TITLE_TEXT**", e)
    .replace("**TITLE_TEXT2**", c)
    .replace("**ICON**", b)
    .replace("**IMG**", a)
    .replace("**TITLE_CLASS**", d.sToggleTitleClass)
    .replace("**TITLE_CLASS**", d.sToggleTitleClass)
    .replace("**EXPANDED**", n);
};
KJE.setDropBox = function (c, b) {
  b = b + "";
  for (var a = 0; a < c.options.length; a++) {
    if (c.options[a].value == b) {
      c.options[a].selected = true;
      break;
    }
  }
  return a;
};
KJE.getDropBox = function (f, g, d, h, b) {
  b = b ? ' class="' + b + '" ' : "";
  h = h ? h : d;
  var e = h.length;
  var a = d.length;
  var k = "<select name=" + f + " id=KJE-" + f + b + ">";
  for (var c = 0; c < a; c++) {
    var j = d[c] == g ? " selected='selected' " : "";
    k += "<option value='" + d[c] + "' " + j + ">" + (c >= e ? d[c] : h[c]);
  }
  k += "</select>";
  if (KJE.InputModern) {
    k = "<div id=KJE-" + f + b + "Div >" + k + "</div>";
  }
  return k;
};
KJE.getTermChoice = function (l, k, e, h, b, m, g, d, o, f) {
  var q = new Array();
  var p = new Array();
  if (f) {
  } else {
    f = KJE.Default.MortgageTermIncrement;
  }
  m = m ? m : "";
  g = g ? g : false;
  o = o ? o : 1;
  var a = 0;
  var j = KJE.parameters.get("TERM_SHOW_ADDITIONAL", 7);
  for (var c = o; c <= h; c++) {
    if ((e && c <= b) || c % f == 0 || c == j) {
      if ((j == 0 && (c == 5 || c == 25 || c == 35)) == false) {
        q[a] =
          c +
          " " +
          (c == 1 ? KJE.MSG_YEAR_LBL : KJE.MSG_YEARS_LBL) +
          (c > b ? m : "");
        p[a] = c;
        a++;
      }
    }
  }
  if (d) {
    return KJE.getDropBox(l, k, p, q, g);
  } else {
    return { d: q, v: p };
  }
};
KJE.getMortgageTermChoice = function (b, c, d) {
  var a = KJE;
  return a.getTermChoice(
    b,
    c,
    a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageShowAll),
    a.parameters.get("MORTGAGE_TERM_MAX", a.Default.MortgageTermMax),
    a.parameters.get("MORTGAGE_SHOW_MAX", a.Default.MortgageShowAllMax),
    "",
    false,
    d,
    a.parameters.get("MORTGAGE_TERM_MIN", a.Default.MortgageTermMin)
  );
};
KJE.getMortgageTermDrop = function (a, b) {
  return KJE.getMortgageTermChoice(a, b, true);
};
KJE.getMortgageTermList = function () {
  return KJE.getMortgageTermChoice("", 0, false);
};
KJE.insertAfter = function (b, a) {
  a.parentNode.insertBefore(b, a.nextSibling);
};
KJE.hasClass = function (b, a) {
  return (" " + b.className + " ").indexOf(" " + a + " ") > -1;
};
KJE.isInDroppee = function (b) {
  var a = b.parentNode;
  if (a) {
    if (KJE.hasClass(a, "KJEDroppee")) {
    } else {
      a = a.parentNode;
      if (a) {
        if (KJE.hasClass(a, "KJEDroppee")) {
          return a;
        }
      }
    }
  }
  return a;
};
KJE.iGraphFixedWidth = 0;
KJE.gScaleLabel = ["", "Thousands of ", "Millions of ", "Billions of "];
KJE.gScaleLabelMax = [0, 100000, 100000000, 100000000000];
KJE.gScaleLabelFactor = [1, 1000, 1000000, 1000000000];
KJE.gFont = [];
KJE.gFontStyle = [];
KJE.gFontSize = [];
KJE.gFontDefault = ["Arial", "Arial", "Arial", "Arial", "Arial", "Arial"];
KJE.gFontStyleDefault = ["bold", "bold", "", "", "bold", ""];
KJE.gFontSizeDefault = [13, 11, 11, 11, 11, 9];
KJE.g = new Object();
KJE.g.sToggleAltTextClose = "";
KJE.g.sToggleAltTextOpen = "";
KJE.g.sNewGraphPleaseComplete = "please complete inputs to view graph";
KJE.g.sToggleTitleClass = "KJEGraphTitle";
KJE.g.sToggleIcon = "KJEGraphIcon";
KJE.g.sToggleOpen = "<div class='KJEToggleOpen' aria-hidden='true'></div>";
KJE.g.sToggleClose = "<div class='KJEToggleClose' aria-hidden='true'></div>";
KJE.g.sExpanded = "";
KJE.g.sCollapse = "";
KJE.g.sExpand = "aria-expanded";
KJE.gHeight = 350;
KJE.gHeightReport = 350;
KJE.gWidthMax = 900;
KJE.gWidthReport = 900;
KJE.gLegendMin = 550;
KJE.gLegendFontMin = 400;
KJE.gColorBackground = "#FFFFFF";
KJE.gColorForeground = "#333333";
KJE.gColorGrid = "#AAAAAA";
KJE.gColorGridBackground1 = "#f7f7f7";
KJE.gColorGridBackground2 = "#f7f7f7";
KJE.gColorAxisLine = "#333333";
KJE.gColorText = "#000000";
KJE.gColorList = [
  "#0000D4",
  "#64A650",
  "#0080FF",
  "#FFF200",
  "#5f007f",
  "#F15A22",
  "#B72467",
  "#6DC8BF",
  "#FF0000",
  "#ff00ff",
  "#ffff00",
  "#00ffff",
  "#7f007f",
  "#7f0000",
  "#007f7f",
  "#0000ff",
  "#00c8ff",
  "#60ffff",
  "#bfffbf",
  "#ffff90",
  "#a0c8ef",
];
KJE.gPleaseComplete = "";
KJE.gWidthAdjust = 0;
KJE.gPIE = 0;
KJE.gCOLUMN = 1;
KJE.gCATEGORIES = 2;
KJE.gSTACKED = 3;
KJE.gLINE = 4;
KJE.gGraphDescription = [
  "Pie Chart",
  "Column Graph",
  "Column Graph",
  "Stacked Column Graph",
  "Line Graph",
];
KJE.gGetFontHeight = function (a) {
  return Math.ceil(a.measureText("m").width + 2);
};
KJE.gDarker = function (d, h) {
  if (d[0] == "#") {
    d = d.slice(1);
  }
  var c = parseInt(d, 16);
  var f = (c >> 16) * h;
  if (f > 255) {
    f = 255;
  } else {
    if (f < 0) {
      f = 0;
    }
  }
  var a = ((c >> 8) & 255) * h;
  if (a > 255) {
    a = 255;
  } else {
    if (a < 0) {
      a = 0;
    }
  }
  var e = (c & 255) * h;
  if (e > 255) {
    e = 255;
  } else {
    if (e < 0) {
      e = 0;
    }
  }
  return (
    "rgb(" + Math.floor(f) + "," + Math.floor(a) + "," + Math.floor(e) + ")"
  );
};
KJE.MSG_ADA_GRAPH_TEXT =
  "Please use the calculator's report to see detailed calculation results in tabular form.";
KJE.MSG_ADA_REPORTGRAPH_TEXT =
  "Results shown are available in tabular form on tables that follow this image.";
KJE.MSG_ADA_GRAPH_SPAN =
  "<span class=KJEAccessible id='KJE-F-GRAPH**X**_TITLE'>**FIG_GRAPHTITLE**</span> **FIG_GRAPHTYPE**: **FIG_ADA_GRAPH_TEXT**";
KJE.MSG_ADA_GRAPH_ARIA_LABEL =
  "**FIG_GRAPHTYPE**: **FIG_GRAPHTITLE**: **FIG_ADA_GRAPH_TEXT**";
KJE.MSG_GRAPH_CANVAS =
  "<div id=KJE-C-GRAPH**X** style='width:100%;'><canvas id=KJE-G-GRAPH**X** aria-label='**FIG_GRAPHTITLE**' role='img'></canvas></div>";
KJE.MSG_ADA_GRAPH =
  "<figure style='margin:0; padding:0;'><figcaption id='KJE-F-GRAPH**X**' class=KJEAccessible>**MSG_ADA_GRAPH_SPAN**</figcaption>**GRAPH**</figure>";
KJE.getGraphCode = function (b) {
  var a = KJE;
  var c = a.replace(a.MSG_GRAPH, a.MSG_GRAPH_CANVAS, a.MSG_ADA_GRAPH);
  return a.replace("**X**", b + "", c);
};
KJE.gTitle = new Object();
KJE.gGraphLine = new Object();
KJE.gAxis = new Object();
KJE.gGraphColumn = new Object();
KJE.gGraphPie = new Object();
KJE.gTitle.HORIZONTAL = 0;
KJE.gTitle.VERTICAL = 1;
KJE.gLegend = new Object();
KJE.gLegend.LEFT = 0;
KJE.gLegend.RIGHT = 1;
KJE.gLegend.TOP = 3;
KJE.gLegend.BOTTOM = 4;
KJE.gLegend.TOP_LEFT = 5;
KJE.gLegend.TOP_RIGHT = 6;
KJE.gLegend.BOTTOM_LEFT = 7;
KJE.gLegend.BOTTOM_RIGHT = 8;
KJE.gLegend.GRID_TOP_RIGHT = 9;
KJE.gLegend.GRID_TOP_LEFT = 10;
KJE.gLegend.GRID_BOTTOM_RIGHT = 11;
KJE.gLegend.GRID_BOTTOM_LEFT = 12;
KJE.gLegend.GRID_TOP = 13;
KJE.gLegend.GRID_BOTTOM = 14;
KJE.gLegend.GRID_RIGHT = 15;
KJE.gLegend.GRID_LEFT = 16;
KJE.gLegend.TOP_GRID_ALIGN = 17;
KJE.gLegend.BANDED_LEGEND = 0;
KJE.gLegend.DATA_SERIES_LEGEND = 1;
KJE.gLegend.CATEGORY_LEGEND = 2;
KJE.gLegend.ROUND_LEGEND = 0;
KJE.gLegend.SQUARE_LEGEND = 1;
KJE.gLegend._sSHADOW_COLOR = "";
KJE.gTITLE_FONT = 0;
KJE.gBOLD_FONT = 1;
KJE.gPLAIN_FONT = 2;
KJE.gLEGEND_FONT = 3;
KJE.gLEGEND_FONT_BOLD = 4;
KJE.gLEGEND_FONT_TINY = 5;
KJE.gSCALE = 2;
KJE.ggetFont = function (b, c) {
  var a = KJE;
  var d = a.gFontSize.length <= b ? a.gFontSizeDefault[b] : a.gFontSize[b];
  var e = a.gFont.length <= b ? a.gFontDefault[b] : a.gFont[b];
  var f = a.gFontStyle.length <= b ? a.gFontStyleDefault[b] : a.gFontStyle[b];
  if (a.gFontStyle.length <= b) {
  } else {
  }
  return f + " " + Math.floor(a.gSCALE * d) + "pt " + e.trim();
};
KJE.gBORDER_WIDTH = 10 * KJE.gSCALE;
KJE.gLegend._iSIDE_BORDER_WIDTH = 14 * KJE.gSCALE;
KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH = 3 * KJE.gSCALE;
KJE.gLegend._iBOX_SIDE_LENGTH = 14 * KJE.gSCALE;
KJE.gLegend._iCIR_SIDE_LENGTH = 10 * KJE.gSCALE;
KJE.gLegend._iBOX_TO_LABEL_SPACE = 4 * KJE.gSCALE;
KJE.gLegend._sSHADOW_BLUR_X = 0;
KJE.gLegend._sSHADOW_BLUR_Y = 0;
KJE.gLegend._LINE_WIDTH = KJE.gSCALE;
KJE.gLegend._LINE_SPACE = 12 * KJE.gSCALE;
KJE.gLegend._PAD = KJE.gSCALE * 4;
KJE.gGraphPie._LINE_WIDTH = KJE.gSCALE * 4;
KJE.gGraphPie._FLAT = true;
KJE.gGraphPie._DROP_SHADOW = false;
KJE.gGraphLine._CLICKABLE = 7 * KJE.gSCALE;
KJE.gGraphLine._sSHADOW_BLUR = 0;
KJE.gGraphLine._LINE_WIDTH = 3 * KJE.gSCALE;
KJE.gGraphLine._sSHADOW_BLUR_X = 0;
KJE.gGraphLine._sSHADOW_BLUR_Y = 0;
KJE.gGraphColumn._LINE_WIDTH = KJE.gSCALE * 2;
KJE.giGridLineWidth = KJE.gSCALE;
KJE.gAxis.TICK_LENGTH = 3 * KJE.gSCALE;
KJE.gAxis.LABEL_SPACE_LENGTH = 5 * KJE.gSCALE;
KJE.gAxis.LINE_WIDTH = KJE.gSCALE * 1;
KJE.gAxis.LEFT = 0;
KJE.gAxis.RIGHT = 1;
KJE.gAxis.TOP = 3;
KJE.gAxis.BOTTOM = 4;
KJE.gGraphColumn.LINE_NONE = 0;
KJE.gGraphColumn.LINE_ON_FIRST_ONLY = 2;
KJE.gGraphColumn.LINE_ON_ALL = 3;
KJE.gGraphColumn._sSHADOW_COLOR = "";
KJE.gGraphColumn._sSHADOW_BLUR = 0;
KJE.gGraphColumn._sSHADOW_BLUR_X = 0;
KJE.gGraphColumn._sSHADOW_BLUR_Y = 0;
KJE.gGraphPie._LINE_JOIN = "round";
KJE.gGraphPie._LINE_COLOR = "#000000";
KJE.gGraphLine.AREA_NONE = 0;
KJE.gGraphLine.AREA_ALL = 1;
KJE.gGraphLine.AREA_FIRST_ONLY = 2;
KJE.gGraphLine.AREA_SECOND_ONLY = 3;
KJE.gGraphLine.AREA_BANDED = 4;
KJE.gGraphLine._sSHADOW_COLOR = "";
KJE.sgvStr = function (a) {
  if (a == null) {
    return null;
  }
  return a
    .replace(/%%/g, '"')
    .replace(/@@/g, "|")
    .replace(/\^\^/g, ",")
    .replace(/!!/, "~");
};
KJE.spvStr = function (a) {
  if (a == null) {
    return null;
  }
  if (a.replace) {
    return a
      .replace(/"/g, "%%")
      .replace(/\|/g, "@@")
      .replace(/,/g, "^^")
      .replace(/~/g, "!!");
  } else {
    return a;
  }
};
KJE.spvColor = function (a) {
  if (!a) {
    return "#000000";
  }
  return a;
};
KJE.sgvColor = function (a) {
  if (!a) {
    return "#000000";
  }
  return a;
};
KJE.sgv = function (b, a) {
  if (b == null) {
    return a;
  } else {
    if (b == "null") {
      return a;
    } else {
      if (b == " ") {
        return a;
      } else {
        if (typeof a == "string") {
          return KJE.sgvStr(b);
        } else {
          if (typeof a == "boolean") {
            if (b == "") {
              return a;
            }
            return b.trim() == "true";
          } else {
            if (typeof a == "number") {
              return parseFloat(b);
            }
          }
        }
      }
    }
  }
};
KJE.sgvNumList = function (d) {
  if (d == null) {
    return null;
  } else {
    if (d == "null") {
      return null;
    } else {
      if (d.trim() == "") {
        return null;
      } else {
        var b = d.split(",");
        var a = KJE.FloatArray(b.length);
        for (var c = 0; c < b.length; c++) {
          a[c] = parseFloat(b[c]);
        }
      }
    }
  }
  return a;
};
KJE.sgvStrList2 = function (d) {
  var a = [];
  if (d == null) {
    a = null;
  } else {
    if (d == "null") {
      a = null;
    } else {
      if (d.trim() == "") {
        a = null;
      } else {
        var c = d.split("~");
        for (var b = 0; b < c.length; b++) {
          a[b] = KJE.sgvStrList(c[b]);
        }
      }
    }
  }
  return a;
};
KJE.sgvStrList = function (d) {
  var a = [];
  if (d == null) {
    a = null;
  } else {
    if (d == "null") {
      a = null;
    } else {
      if (d.trim() == "") {
        a = null;
      } else {
        var c = d.split(",");
        for (var b = 0; b < c.length; b++) {
          a[b] = KJE.sgvStr(c[b]);
        }
      }
    }
  }
  return a;
};
KJE.spvStringList2 = function (d) {
  var a = KJE;
  if (d == null) {
    return "null";
  }
  var c = a.spvStringList(d[0]);
  for (var b = 1; b < d.length; b++) {
    c += "~" + a.spvStringList(d[b]);
  }
  return c;
};
KJE.spvStringList = function (d) {
  var a = KJE;
  if (d == null) {
    return "null";
  }
  var c = a.spvStr(d[0]);
  for (var b = 1; b < d.length; b++) {
    c += "," + a.spvStr(d[b]);
  }
  return c;
};
KJE.spvColorList = function (d) {
  var a = KJE;
  if (d == null) {
    return "null";
  }
  var c = a.spvStr(d[0]);
  for (var b = 1; b < d.length; b++) {
    c += "," + a.spvColor(d[b]);
  }
  return c;
};
KJE.spvFloatList = function (e, d) {
  var a = KJE;
  if (e == null) {
    return "null";
  }
  var c = "" + a.input(e[0], d);
  for (var b = 1; b < e.length; b++) {
    c += "," + a.input(e[b], d);
  }
  return c;
};
KJE.gNewGraph = function (f, i, a, e, k, g, h, b) {
  var c = document.getElementById("KJE-C-" + i);
  if (c) {
    var j = KJE;
    e = !j.parameters.get("GRAPH_OPEN" + Math.floor(j.gGraphs.length + 1), !e);
    var d = (j.gGraphs[j.gGraphs.length] = new j.gCanvas(
      c,
      f,
      i,
      a,
      e,
      k,
      g,
      h,
      b
    ));
    if (f == j.gPIE || f == j.gCATEGORIES) {
      d._bPopDetail = false;
    }
    if (f == j.gSTACKED || f == j.gLINE || f == j.gPIE) {
      d._showItemLabelOnTop = false;
    }
    return d;
  } else {
    return null;
  }
};
KJE.gCanvas = function (c, g, o, b, e, q, j, l, a) {
  var k = this;
  k.sGraphName = o;
  k._titleGraphFigure = null;
  var p = KJE;
  var n = (k.wCanvas = document.getElementById("KJE-G-" + o));
  k._bPopDetail = true;
  k._bPopCat = true;
  k.wContainer = c;
  k.wContainer.className = "KJEGraphContainer";
  k.wCanvas.className = "KJEGraph";
  k.wContainer.style.transition = p.DropeeTransition;
  k._ctx = null;
  k.InCalculator = l ? false : true;
  k.bBorder = a ? false : true;
  k.sTitle = j;
  k.TT = j;
  k.bTitleInitialized = false;
  k._sGraphType = g;
  k._gtGraphType = new p.gType(g);
  var d = (k.fFigureCaption = document.getElementById("KJE-F-" + o));
  if (d) {
    d.innerHTML = p.replace(
      "GRAPH**X**",
      o,
      p.replace(
        "**FIG_GRAPHTYPE**",
        KJE.gGraphDescription[g],
        p.replace(
          "**FIG_ADA_GRAPH_TEXT**",
          p.MSG_ADA_GRAPH_TEXT,
          p.MSG_ADA_GRAPH_SPAN
        )
      )
    );
  }
  var h = c.clientWidth;
  k.FONT_TITLE = p.ggetFont(p.gTITLE_FONT, h);
  k.FONT_BOLD = p.ggetFont(p.gBOLD_FONT, h);
  k.FONT_PLAIN = p.ggetFont(p.gPLAIN_FONT, h);
  k.FONT_LEGEND = p.ggetFont(p.gLEGEND_FONT, h);
  k.FONT_LEGEND_BOLD = p.ggetFont(p.gLEGEND_FONT_BOLD, h);
  k.FONT_LEGEND_TINY = p.ggetFont(p.gLEGEND_FONT_TINY, h);
  k._legend = new p.gGraphLegend(p.gLegend.RIGHT, this);
  k._grid = new p.gGrid(this);
  k._axisY = new p.gValueAxis(this);
  k._axisX = new p.gCategoryAxis(this);
  k._titleGraph = new p.gGraphTitle(k.sTitle);
  k._titleXAxis = new p.gGraphTitle("");
  k._titleYAxis = new p.gGraphTitle(p.sCurrency);
  k._titleYAxis._iOrientation = p.gTitle.VERTICAL;
  k._vDataSeries = new Array();
  k._showItemLabel = false;
  k._showItemLabelFmt = p.FMT_DOLLARS;
  k._showItemLabelDecimals = k._iLimit = 0;
  k._showItemLabelOnTop = k._showLabelFactor = true;
  k._iArea = p.gGraphLine.AREA_NONE;
  k._cGrid = p.gColorGrid;
  k._cGridBackground1 = p.gColorGridBackground1;
  k._cGridBackground2 = p.gColorGridBackground2;
  k._cAxisLine = p.gColorAxisLine;
  k._cTextColor = p.gColorText;
  k._sGraphCategories =
    k._sGraphCategoriesBold =
    k._sValueLabels =
    k._showItemValues =
      null;
  k._colorList = p.gColorList;
  k._iDataSeriesCount = 0;
  if (b) {
    var m = (k.wTitle = document.createElement("DIV"));
    m.className =
      k.InCalculator && k.bBorder ? "KJEGraphDropper" : "KJEDropperReport";
    if (k.InCalculator) {
      m.setAttribute("role", "button");
      m.tabIndex = "0";
    }
    c.insertBefore(m, n);
  }
  if (k.wTitle && !l) {
    k.wTitle.addEventListener(
      "click",
      function (i) {
        k.toggle();
      },
      false
    );
    k.wTitle.addEventListener(
      "keypress",
      function (i) {
        if (i.keyCode == 32 || i.keyCode == 13) {
          return KJE.Dropper.stopBubble(i);
        }
      },
      false
    );
    k.wTitle.addEventListener(
      "keydown",
      function (i) {
        if (i.keyCode == 32 || i.keyCode == 13) {
          k.toggle();
          return KJE.Dropper.stopBubble(i);
        }
      },
      false
    );
  }
  if (n) {
    var f = k._gtGraphType;
    n.addEventListener(
      "click",
      function (t) {
        var i = KJE.getMouseCoord(t, n);
        var r = f.getWedgeValue(i.x, i.y);
        if (r) {
          KJE.DataPointShow(t, r.s, r.x, r.y, n);
        }
      },
      false
    );
    n.addEventListener(
      "mousemove",
      function (t) {
        var i = KJE.getMouseCoord(t, n);
        var r = f.getWedgeValue(i.x, i.y);
        if (r) {
          KJE.DataPointShow(t, r.s, r.x, r.y, n);
        }
      },
      false
    );
  }
  k.setBackground(q);
  this.setHeight();
  this.setWidth();
  k.wCanvas.style.overflow = "hidden";
  k.wCanvas.style.display = "block";
  k.show(!e, k.sTitle);
};
KJE.gCanvas.prototype.setShown = function (b) {
  var a = this;
  a.wContainer.style.display = "block";
  a.wContainer.style.width = "100%";
  this.setHeight(false);
  this.setWidth(true);
};
KJE.gCanvas.prototype.getFigureTitle = function () {
  return this.titleGraphFigure;
};
KJE.gCanvas.prototype.setAriaRole = function (c, e) {
  var a = KJE;
  var d = a.MSG_ADA_REPORTGRAPH_TEXT;
  if (e) {
    d = a.MSG_ADA_GRAPH_TEXT;
  }
  this.wCanvas.setAttribute("alt", a.gGraphDescription[this._sGraphType]);
  this.wCanvas.setAttribute("role", "img");
  var b = a.replace(
    "**FIG_GRAPHTYPE**",
    a.gGraphDescription[this._sGraphType],
    a.replace(
      "**FIG_GRAPHTITLE**",
      c ? c : "",
      a.replace("**FIG_ADA_GRAPH_TEXT**", d, a.MSG_ADA_GRAPH_ARIA_LABEL)
    )
  );
  if (b == "") {
    b = "Graph will be available when all required entries are entered.";
  }
  this.wCanvas.setAttribute("aria-label", b);
};
KJE.gCanvas.prototype.setHidden = function (b) {
  var a = this;
  a.wContainer.style.display = "none";
};
KJE.gCanvas.prototype.setTitle = function (a) {
  this.sTitle = a;
};
KJE.gCanvas.prototype.toggle = function () {
  if (KJE.Error || KJE.InComplete) {
    return;
  }
  if (KJE.inCommandTask(true)) {
    return;
  }
  var b = this;
  var c = b.wCanvas;
  var a = 0;
  if (this._bShow) {
    this._bShow = false;
    this.show(false);
  } else {
    setTimeout(function () {
      this._bShow = true;
      b.show(true);
      b.paint(null, true);
    }, 25);
  }
  setTimeout(function () {
    KJE.inCommandTask(false);
  }, 500);
};
KJE.gCanvas.prototype.show = function (b, a) {
  if (this.wTitle) {
    var c = this;
    c._bShow = b;
    var d = c.wTitle;
    d.innerHTML = KJE.setToggleTitleText(
      a ? a : this._titleGraph.s,
      c,
      KJE.g,
      !this.InCalculator
    );
    if (b) {
      if (this.InCalculator) {
        d.setAttribute(KJE.g.sExpand, "true");
      }
      this.setWidth();
      this.setHeight();
    } else {
      if (this.InCalculator) {
        d.setAttribute(KJE.g.sExpand, "false");
      }
      c.wCanvas.style.height = "0px";
    }
    if (this.InCalculator) {
    }
  }
};
KJE.gCanvas.prototype.setProperty = function (d) {
  var b = d.split("|");
  var a = KJE.sgv;
  var e = KJE.sgvStrList;
  var c = this;
  c.removeAll();
  for (var f = 0; f < b.length; f++) {
    switch (f) {
      case 0:
        if (b[f] != c._gtGraphType._iGraphType) {
          this._gtGraphType = new KJE.gType(b[f]);
        }
        break;
      case 1:
        c._showItemLabel = a(b[f], c._showItemLabel);
        break;
      case 2:
        c._showItemLabelFmt = a(b[f], c._showItemLabelFmt);
        break;
      case 3:
        c._showItemLabelDecimals = a(b[f], c._showItemLabelDecimals);
        break;
      case 4:
        c._showItemLabelOnTop = a(b[f], c._showItemLabelOnTop);
        break;
      case 5:
        c._iArea = a(b[f], c._iArea);
        break;
      case 6:
        c._cBackground = a(b[f], c._cBackground);
        break;
      case 7:
        c._cGrid = a(b[f], c._cGrid);
        break;
      case 8:
        c._cGridBackground1 = a(b[f], c._cGridBackground1);
        break;
      case 9:
        c._cGridBackground2 = a(b[f], c._cGridBackground2);
        break;
      case 10:
        c._cAxisLine = a(b[f], c._cAxisLine);
        break;
      case 11:
        c._cTextColor = a(b[f], c._cTextColor);
        break;
      case 12:
        c._iLimit = a(b[f], c._iLimit);
        break;
      case 13:
        c._sGraphCategories = e(b[f]);
        break;
      case 14:
        c._sGraphCategoriesBold = e(b[f]);
        break;
      case 15:
        c._sValueLabels = e(b[f]);
        break;
      case 16:
        c._colorList = e(b[f]);
        break;
      case 17:
        c._showItemValues = a(b[f], c._showItemValues);
        break;
      case 18:
        c._bPopDetail = a(b[f], c._bPopDetail);
        break;
      case 19:
        c._bPopCat = a(b[f], c._bPopCat);
        break;
      case 20:
        c._showLabelFactor = a(b[f], c._showLabelFactor);
        break;
    }
  }
};
KJE.gCanvas.prototype.getProperty = function () {
  var c = KJE.spvStringList;
  var b = this;
  var a = KJE;
  return (
    b._gtGraphType._iGraphType +
    "|" +
    b._showItemLabel +
    "|" +
    b._showItemLabelFmt +
    "|" +
    b._showItemLabelDecimals +
    "|" +
    b._showItemLabelOnTop +
    "|" +
    b._iArea +
    "|" +
    a.spvColor(b._cBackground) +
    "|" +
    a.spvColor(b._cGrid) +
    "|" +
    a.spvColor(b._cGridBackground1) +
    "|" +
    a.spvColor(b._cGridBackground2) +
    "|" +
    a.spvColor(b._cAxisLine) +
    "|" +
    a.spvColor(b._cTextColor) +
    "|" +
    b._iLimit +
    "|" +
    c(b._sGraphCategories) +
    "|" +
    c(b._sGraphCategoriesBold) +
    "|" +
    c(b._sValueLabels) +
    "|" +
    a.spvColorList(b._colorList) +
    "|" +
    a.spvStringList2(b._showItemValues) +
    "|" +
    b._bPopDetail +
    "|" +
    b._bPopCat +
    "|" +
    b._showLabelFactor
  );
};
KJE.gCanvas.prototype.getColor = function (a) {
  a -= 1;
  a %= this._colorList.length;
  return this._colorList[a];
};
KJE.gCanvas.prototype.blank = function () {
  this.removeAll();
  this.paint();
  if (this.wTitle) {
    this.setTitleGraph(KJE.gPleaseComplete);
  }
};
KJE.gCanvas.prototype.getDataSeriesCount = function () {
  return this._iDataSeriesCount;
};
KJE.gCanvas.prototype.getDataProperties = function () {
  var a = "";
  for (var b = 0; b < this._iDataSeriesCount; b++) {
    a += "|" + this._vDataSeries[b].getProperty();
  }
  return a.substring(1);
};
KJE.gCanvas.prototype.getValueCount = function () {
  var b = this._iDataSeriesCount;
  var a = this._iLimit;
  var c = 0;
  while (b) {
    c = this._vDataSeries[b - 1].getValueCount();
    if (a > c || a == 0) {
      a = c;
    }
    b--;
  }
  return a;
};
KJE.gCanvas.prototype.getMinValue = function () {
  if (this._vDataSeries == null) {
    return 0;
  }
  var a = this._vDataSeries[0].getMinValue(this._iLimit);
  var b = a;
  for (var c = 1; c < this._iDataSeriesCount; c++) {
    b = this._vDataSeries[c].getMinValue(this._iLimit);
    if (b < a) {
      a = b;
    }
  }
  return a;
};
KJE.gCanvas.prototype.getMaxValue = function () {
  if (this._vDataSeries == null) {
    return 0;
  }
  var d = 0;
  var f = 0;
  if (this._gtGraphType._iGraphType == KJE.gSTACKED) {
    var c = new Array();
    for (var a = 0; a < this._vDataSeries.length; a++) {
      var b = this._vDataSeries[a]._fValues;
      for (var e = 0; e < b.length; e++) {
        c[e] = b[e] + (c[e] ? c[e] : 0);
      }
    }
    return Math.max.apply(Math, c);
  } else {
    d = this._vDataSeries[0].getMaxValue(this._iLimit);
    f = d;
    for (e = 1; e < this._iDataSeriesCount; e++) {
      f = this._vDataSeries[e].getMaxValue(this._iLimit);
      if (f > d) {
        d = f;
      }
    }
    return d;
  }
};
KJE.gCanvas.prototype.add = function (c) {
  if (c == null) {
  } else {
    if (typeof c == "string") {
      if (c.trim() == "") {
      } else {
        var a = c.split("|");
        for (var b = 0; b < a.length; b++) {
          this._vDataSeries[this._iDataSeriesCount] = new KJE.gGraphDataSeries(
            a[b],
            null,
            null,
            null
          );
          this._vDataSeries[this._iDataSeriesCount].gCanvasPointer = this;
          this._iDataSeriesCount++;
        }
      }
    } else {
      this._vDataSeries[this._iDataSeriesCount] = c;
      this._vDataSeries[this._iDataSeriesCount].gCanvasPointer = this;
      this._iDataSeriesCount++;
    }
  }
};
KJE.gCanvas.prototype.removeAll = function () {
  this._vDataSeries = new Array();
  this._iDataSeriesCount = 0;
  this._iLimit = 0;
  this._gtGraphType.syncSetup(this);
  this._legend._cBGColor = null;
};
KJE.gCanvas.prototype.paint = function (e, c) {
  if (this.sTitle) {
    this.setTitleGraph(this.sTitle);
  }
  if (!this.wCanvas.getContext) {
    return;
  }
  if (!c) {
    if (!this._bShow) {
      return;
    }
  }
  var b = this.wCanvas.getContext("2d");
  if (b.canvas.width == 0 || b.canvas.height == 0) {
    return;
  }
  if (b) {
    this._ctx = b;
  }
  var a = this._ctx.canvas.width;
  var d = this._ctx.canvas.height;
  if (this._iDataSeriesCount != 0) {
    b.fillStyle = this._cBackground;
    b.fillRect(0, 0, a, d);
    this._gtGraphType.paint(this._ctx, a, d);
  } else {
    b.fillStyle = this._cBackground;
    b.fillRect(0, 0, a, d);
  }
};
KJE.gCanvas.prototype.setGraphCategories = function (a) {
  this._sGraphCategories = a;
};
KJE.gCanvas.prototype.setBackground = function (a) {
  this.wContainer.style.backgroundColor = a;
  this._cBackground = a;
};
KJE.gCanvas.prototype.setWidth = function (c, b) {
  bForceWidth = b ? true : false;
  var a = 0;
  if (!bForceWidth) {
    this.wContainer.style.width = "100%";
    a = this.wContainer.clientWidth;
    if (!a) {
      a = KJE.CalculatorWidth;
    }
  } else {
    a = b;
  }
  if (a > KJE.gWidthMax && !this.InCalculator) {
    a = KJE.gWidthMax;
  }
  a -= KJE.gWidthAdjust;
  this.wCanvas.style.width = this.wContainer.style.width = a + "px";
  this.wCanvas.width = a * KJE.gSCALE;
  this.iWidth = a;
  if (c) {
    this.paint();
  }
};
KJE.gCanvas.prototype.setHeight = function (c) {
  if (!this.InCalculator) {
    this.setCanvasHeight(c, KJE.gHeightReport);
  } else {
    if (KJE.bSidebySideViewing) {
      var b = 0;
      var a = 0;
      for (var d = 0; d < KJE.gGraphs.length; d++) {
        if (KJE.gGraphs[d]._bShow) {
          b++;
          a += KJE.gGraphs[d].wTitle.clientHeight;
        }
      }
      iHeight = KJE.iDropperHeights() - a;
      if (b > 1) {
        iHeight = Math.round(iHeight / b);
      }
      if (KJE.gHeight > iHeight) {
        iHeight = KJE.gHeight;
      }
      for (var d = 0; d < KJE.gGraphs.length; d++) {
        KJE.gGraphs[d].setCanvasHeight(true, iHeight);
      }
    } else {
      this.setCanvasHeight(c, KJE.gHeight);
    }
  }
};
KJE.gCanvas.prototype.setCanvasHeight = function (a, b) {
  if (this._bShow) {
    this.wCanvas.style.height = b + "px";
  }
  this.iGraphHeight = b;
  this.wCanvas.height = b * KJE.gSCALE;
  if (a) {
    this.paint(null, true);
  }
};
KJE.gCanvas.prototype.getBackground = function () {
  return this._cBackground;
};
KJE.gCanvas.prototype.setTitleGraph = function (c) {
  var b = this;
  if (!(b._titleGraph.s == c) || !b.bTitleInitialized) {
    if (b.wTitle) {
      b.wTitle.innerHTML = KJE.setToggleTitleText(c, b, KJE.g, !b.InCalculator);
    }
    b._titleGraph.setText(c);
    if (b._titleGraphFigure == null) {
      b._titleGraphFigure = document.getElementById(
        "KJE-F-" + b.sGraphName + "_TITLE"
      );
    }
    if (b._titleGraphFigure) {
      var d = (c.indexOf("<") > 0 ? c.substring(0, c.indexOf("<")) : c).trim();
      if (d.substring(d.length - 1, d.length) === ".") {
        d = d.substring(0, d.length - 1);
      }
      b._titleGraphFigure.innerHTML = b.titleGraphFigure = d;
      b.setAriaRole(d, true);
    }
    var a = c.indexOf("<");
    var e = c;
    if (a > 0) {
      e = e.substring(0, a);
    } else {
      if (c.length > 100) {
        var a = c.indexOf(":");
        if (a > 0) {
          e = e.substring(0, a);
        }
        var a = c.indexOf(".");
        if (a > 0) {
          e = e.substring(0, a);
        }
      }
    }
    e = KJE.replace(
      "<div class='KJESubTitle'>",
      " ",
      KJE.replace("</div>", " ", e)
    ).trim();
    b.wTitle.setAttribute(
      "aria-label",
      e == "" ? "Empty Graph - required inputs not complete" : e
    );
  }
};
KJE.gCanvas.prototype.setTitleTemplate = function () {
  var b = this.TT;
  for (var a = 0; a < arguments.length; a++) {
    b = b.replace("KJE" + (a + 1), arguments[a]);
  }
  this.sTitle = b;
};
KJE.gCanvas.prototype.getFormat = function (c, g, b) {
  var e = "";
  var d = this;
  var f = d._showItemLabelFmt;
  var a = d._showItemValues;
  if (a == null) {
    e = KJE.format[f](
      c / (f == KJE.FMT_PERCENT && d._showLabelFactor ? 100 : 1),
      d._showItemLabelDecimals
    );
  } else {
    if (a.length > g) {
      if (a[g].length > b) {
        e = a[g][b];
      }
    }
  }
  return e;
};
KJE.gGraphDataSeries = function (i, p, k, l, g, j, d) {
  var h = this;
  h._iDecimals = d ? d : 2;
  var e = i instanceof Array;
  if (!e && KJE.TypedArray) {
    e = i instanceof Float64Array;
  }
  if (e) {
    h._fValues = i;
    h._sSeriesTitle = p;
    h._cColor = k;
    h._sSeriesTitleBold = !l ? "" : l;
    h._sSeriesPop = !g ? p : g;
    h._bNoPopDetails = j ? true : false;
  } else {
    var m = i.split("~");
    var o = m.length;
    var a = KJE.sgv;
    for (var b = 0; b < o; b++) {
      switch (b) {
        case 0:
          h._cColor = a(m[b], "#0000FF");
          break;
        case 1:
          h._sSeriesTitle = a(m[b], "");
          break;
        case 2:
          h._sSeriesTitleBold = a(m[b], "");
          break;
        case 3:
          h._fValues = KJE.sgvNumList(m[b]);
          break;
        case 4:
          h._sSeriesPop = a(m[b], h._sSeriesTitle);
          break;
        case 5:
          h._bNoPopDetails = a(m[b], false);
          break;
        case 6:
          h._iDecimals = a(m[b], 2);
          break;
      }
    }
  }
  h._sSeriesTitle = KJE.removeHTMLTags(h._sSeriesTitle);
  h._sSeriesTitleBold = KJE.removeHTMLTags(h._sSeriesTitleBold);
};
KJE.removeHTMLTags = function (c) {
  while (c) {
    var b = c.indexOf("<");
    var a = c.indexOf(">");
    if (b < a && b >= 0 && a > 0) {
      c = c.substr(0, b) + c.substr(a + 1, c.length - 1);
    } else {
      break;
    }
  }
  return c;
};
KJE.gGraphDataSeries.prototype.getProperty = function () {
  var a = KJE;
  var b = this._iDecimals + (this.gCanvasPointer._showLabelFactor ? 0 : 2);
  return (
    this._cColor +
    "~" +
    a.spvStr(this._sSeriesTitle) +
    "~" +
    a.spvStr(this._sSeriesTitleBold) +
    "~" +
    a.spvFloatList(this._fValues, b) +
    "~" +
    a.spvStr(this._sSeriesPop) +
    "~" +
    this._bNoPopDetails +
    "~" +
    KJE.number(this._iDecimals)
  );
};
KJE.gGraphDataSeries.prototype.getValueCount = function () {
  if (this._fValues == null) {
    return 0;
  }
  return this._fValues.length;
};
KJE.gGraphDataSeries.prototype.getMinValue = function (c) {
  var a = this._fValues;
  if (a == null) {
    return 0;
  }
  var b = a[0];
  var d = a.length;
  if (d > c && c != 0) {
    d = c;
  }
  for (var e = 1; e < d; e++) {
    if (b > a[e]) {
      b = a[e];
    }
  }
  return b;
};
KJE.gGraphDataSeries.prototype.getMaxValue = function (c) {
  var a = this._fValues;
  if (a == null) {
    return 0;
  }
  var d = a.length;
  if (d > c && c != 0) {
    d = c;
  }
  var b = a[0];
  for (var e = d - 1; e > 0; e--) {
    if (b < a[e]) {
      b = a[e];
    }
  }
  return b;
};
KJE.gGraphTitle = function (a) {
  var b = this;
  b._iOrientation = KJE.gTitle.HORIZONTAL;
  b.s = a;
  b.f = "11pt Helvetica";
  b.c = "#000000";
  b.bShow = true;
  b.sText = "";
};
KJE.gGraphTitle.prototype.setProperty = function (a) {
  this.setText(KJE.sgv(a, ""));
};
KJE.gGraphTitle.prototype.getProperty = function () {
  return KJE.spvStr(this.s);
};
KJE.gGraphTitle.prototype.paint = function (b, a, e, c, d) {
  b.font = this.f;
  b.fillStyle = this.c;
  b.shadowBlur = "";
  b.shadowColor = "";
  b.shadowOffsetX = "";
  b.shadowOffsetY = "";
  b.textAlign = "center";
  b.textBaseline = "middle";
  if (this._iWidth != 0) {
    if (this._iOrientation == KJE.gTitle.VERTICAL) {
      b.save();
      b.rotate(-Math.PI / 2);
      b.fillText(KJE.FTR(this.sText), -e - d / 2, a + c / 2);
      b.restore();
    } else {
      b.fillText(KJE.FTR(this.sText), a + c / 2, e + d / 2);
    }
  }
};
KJE.gGraphTitle.prototype.setText = function (a) {
  this.s = a;
};
KJE.gGraphTitle.prototype.setFont = function (a) {
  this.f = a;
};
KJE.gGraphTitle.prototype.setColor = function (a) {
  this.c = a;
};
KJE.gGraphTitle.prototype.setTitle = function (b, d) {
  var a = 0;
  var f = 0;
  var c = d || "";
  c += c == "" && this.s == KJE.sCurrency ? "" : this.s || "";
  if (c != "" && this.bShow) {
    b.font = this.f;
    var e = (f = KJE.gGetFontHeight(b) + 10);
    a = b.measureText(KJE.FTR(c)).width;
    if (this._iOrientation == KJE.gTitle.VERTICAL) {
      f = a;
      a = e;
    }
  }
  this.sText = c;
  this._iHeight = f;
  this._iWidth = a;
};
KJE.gGraphLegend = function (c, a) {
  this._gGraph = a;
  var b = this;
  b._iShape = KJE.gLegend.ROUND_LEGEND;
  b._iOrientation = c;
  b._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
  b._border = false;
  b._cBGColor = null;
  b._iLegendWidth = 0;
  b.LINE_SPACE = KJE.gLegend._LINE_SPACE;
  b._bShow = true;
  b._cColor = "#000000";
  b._iXOffset = 0;
  b._iYOffset = 0;
  b._iWidthOffset = 0;
  b._iHeightOffset = 0;
  b._iMaxLegendLength = 0;
  b._iWidth = 0;
  b._iHeight = 0;
  b._iFontHeight = 0;
  b._iColorBoxYOffset = 0;
  b._iLabelOffset = 0;
  b._iColorBoxOffset = 0;
  b._iBORDER_WIDTH = 0;
};
KJE.gGraphLegend.prototype.setProperty = function (d) {
  var b = d.split("|");
  var a = KJE.sgv;
  var c = this;
  for (var e = 0; e < b.length; e++) {
    switch (e) {
      case 0:
        c._cBGColor = a(b[e], c._cBGColor);
        break;
      case 1:
        c._iShape = a(b[e], c._iShape);
        break;
      case 2:
        c._iOrientation = a(b[e], c._iOrientation);
        break;
      case 3:
        c._border = a(b[e], c._border);
        break;
      case 4:
        c._iLegendWidth = a(b[e], c._iLegendWidth);
        break;
      case 5:
        c.LINE_SPACE = a(b[e], c.LINE_SPACE);
        break;
      case 6:
        c._bShow = a(b[e], c._bShow);
        break;
    }
  }
};
KJE.gGraphLegend.prototype.getProperty = function () {
  var a = this;
  if (a._cBGColor == null) {
    a._cBGColor = a._gGraph.getBackground();
  }
  return (
    a._cBGColor +
    "|" +
    a._iShape +
    "|" +
    a._iOrientation +
    "|" +
    a._border +
    "|" +
    a._iLegendWidth +
    "|" +
    a.LINE_SPACE +
    "|" +
    a._bShow
  );
};
KJE.gGraphLegend.prototype.setVisible = function (a) {
  this._bShow = a;
};
KJE.gGraphLegend.prototype.useOrientation = function (a) {
  var b = this._iOrientation;
  this.bLegendSmall = false;
  if (a / KJE.gSCALE < KJE.gLegendMin) {
    b = KJE.gLegend.BOTTOM;
  }
  return b;
};
KJE.gGraphLegend.prototype.paint = function (m, j, h, n, f, c, b, r, p) {
  var o = this;
  var q = o._iHeight;
  var l = o._iWidth;
  var e = this._iBORDER_WIDTH;
  var a = KJE.gLegend._iTOPBOTTOM_BORDER_WIDTH;
  if (!c) {
    c = 0;
  }
  if (!b) {
    b = 0;
  }
  if (!r) {
    r = 0;
  }
  if (!p) {
    p = 0;
  }
  m.textAlign = "left";
  m.textBaseline = "middle";
  var g = KJE.gLegend;
  var d = o.useOrientation(m.canvas.width);
  switch (d) {
    case g.TOP:
      f = q;
      break;
    case g.TOP_GRID_ALIGN:
      f = q;
      n = l;
      j = c;
      break;
    case g.BOTTOM:
      h += f - q;
      f = q;
      break;
    case g.LEFT:
      if (b > 0) {
        h = b;
      }
      if (p > 0) {
        f = p;
      }
      n = l;
      break;
    case g.RIGHT:
      if (b > 0) {
        h = b;
      }
      if (p > 0) {
        f = p;
      }
      j += n - l;
      n = l;
      break;
    case g.TOP_LEFT:
      f = q;
      n = l;
      break;
    case g.BOTTOM_LEFT:
      h += f - q;
      f = q;
      n = l;
      break;
    case g.TOP_RIGHT:
      j += n - l;
      f = q;
      n = l;
      break;
    case g.BOTTOM_RIGHT:
      h += f - q;
      j += n - l;
      f = q;
      n = l;
      break;
    case g.GRID_TOP_RIGHT:
      j = c - a + r - l;
      h = b + a;
      n = l;
      f = q;
      break;
    case g.GRID_TOP_LEFT:
      j = c + a;
      h = b + a;
      n = l;
      f = q;
      break;
    case g.GRID_BOTTOM_RIGHT:
      j = c - a + r - l;
      h = b - a + p - q;
      n = l;
      f = q;
      break;
    case g.GRID_BOTTOM_LEFT:
      j = c + a;
      h = b - a + p - q;
      n = l;
      f = q;
      break;
    case g.GRID_TOP:
      j = c;
      h = b + e;
      n = r;
      f = q;
      break;
    case g.GRID_BOTTOM:
      j = c;
      h = b - e + p - q;
      n = r;
      f = q;
      break;
    case g.GRID_LEFT:
      j = c + e;
      h = b;
      n = l;
      f = p;
      break;
    case g.GRID_RIGHT:
      j = c - e + r - l;
      h = b;
      n = l;
      f = p;
      break;
  }
  if (this._bShow) {
    var k = j + n / 2 - l / 2;
    var i = h + f / 2 - q / 2;
    if (this._border) {
      m.fillStyle = this._cBGColor;
      m.fillRect(k - 0.5, i - 0.5, l, q);
      m.strokeStyle = this._gGraph._cTextColor;
      m.strokeRect(k - 0.5, i - 0.5, l, q);
    }
    if (this._legendType <= g.DATA_SERIES_LEGEND) {
      this.drawDataSeriesLegend(m, k, i);
      return;
    }
    this.drawCategoryLegend(m, k, i);
  }
};
KJE.gGraphLegend.prototype.drawDataSeriesLegend = function (i, e, d) {
  var f = this._gGraph._vDataSeries.length;
  var h = new Array(f);
  var a = new Array(f);
  var g = new Array(f);
  var c = this._gGraph._vDataSeries;
  for (var b = 0; b < f; b++) {
    h[b] = c[b]._cColor;
    a[b] = c[b]._sSeriesTitle;
    g[b] = c[b]._sSeriesTitleBold;
  }
  this.drawLegend(i, e, d, h, a, g);
};
KJE.gGraphLegend.prototype.drawCategoryLegend = function (a, e, d) {
  var b = this._gGraph._sGraphCategories;
  var c = this._gGraph._sGraphCategoriesBold;
  this.drawLegend(a, e, d, this._gGraph._colorList, b, c);
};
KJE.gGraphLegend.prototype.drawLegend = function (t, l, i, z, a, p) {
  var g = KJE.gLegend;
  var w = i + g._iSIDE_BORDER_WIDTH;
  var c = this._iShape == g.SQUARE_LEGEND;
  var u = 0;
  var d = this.LINE_SPACE + this._iFontHeight;
  var o = this._iColorBoxOffset;
  var b = this._iColorBoxYOffset;
  var h = g._iSIDE_BORDER_WIDTH;
  var A = g._PAD;
  var y = this.bLegendSmall
    ? this._gGraph.FONT_LEGEND_TINY
    : this._gGraph.FONT_LEGEND_BOLD;
  var e = this.bLegendSmall
    ? this._gGraph.FONT_LEGEND_TINY
    : this._gGraph.FONT_LEGEND;
  var f = this._legendType == g.BANDED_LEGEND;
  var x = a.length;
  var m = KJE.FTR;
  t.font = e;
  t.lineWidth = g._LINE_WIDTH;
  t.shadowColor = g._sSHADOW_COLOR;
  t.shadowOffsetX = g._sSHADOW_BLUR_X;
  t.shadowOffsetY = g._sSHADOW_BLUR_Y;
  for (var r = 0; r < x; r++) {
    t.fillStyle = z[r];
    if (c) {
      t.fillRect(l + o, w + b, h, h);
    } else {
      var q = g._iCIR_SIDE_LENGTH;
      t.beginPath();
      t.arc(l + o + q - A, w + b + q, q, 0, Math.PI * 2, true);
      t.closePath();
      t.fill();
      t.lineWidth = g._LINE_WIDTH * 2;
      t.strokeStyle = KJE.gDarker(t.fillStyle, 0.6);
      t.stroke();
    }
    w += d;
    if (f) {
      r++;
    }
  }
  t.lineWidth = g._LINE_WIDTH;
  t.shadowBlur = "0";
  t.shadowColor = g._sSHADOW_COLOR;
  t.shadowOffsetX = "0";
  t.shadowOffsetY = "0";
  t.fillStyle = this._cTextColor;
  w = i + h + b + h / 2 + (!c ? this._iFontHeight / 2 : A);
  var j = l + this._iLabelOffset;
  for (r = 0; r < x; r++) {
    t.fillText(m(a[r]), j, w);
    if (p && p[r]) {
      u = t.measureText(m(a[r])).width;
      t.font = y;
      t.fillText(m(p[r]), j + u, w);
      t.font = e;
    }
    w += d;
    if (f) {
      r++;
    }
  }
};
KJE.gGraphLegend.prototype.setSize = function (l) {
  var j = KJE.gLegend;
  var g = this;
  g._iWidth = 0;
  g._iHeight = 0;
  g._iXOffset = 0;
  g._iYOffset = 0;
  var d = (g._iWidthOffset = g._iBORDER_WIDTH = KJE.gBORDER_WIDTH);
  g._iHeightOffset = 0;
  if (g._bShow) {
    var i = j._iSIDE_BORDER_WIDTH;
    var c = g._gGraph;
    var h = g.LINE_SPACE;
    var f = g._iFontHeight;
    var e = j._PAD;
    g._iColorBoxOffset = i + e;
    g._iLabelOffset = i + i + j._iBOX_TO_LABEL_SPACE + e * 2;
    var k = (g._iWidth = g._iLabelOffset + g._iMaxLegendLength + i);
    var b = (g._iHeight =
      i +
      (f + h) *
        (g._legendType == j.CATEGORY_LEGEND
          ? c._sGraphCategories == null
            ? 0
            : c._sGraphCategories.length
          : c.getDataSeriesCount()) -
      h +
      i);
    g._iColorBoxYOffset = Math.ceil((f - i) / 2) + e;
    var a = g.useOrientation(l.canvas.width);
    switch (a) {
      case j.TOP:
      case j.TOP_GRID_ALIGN:
        g._iYOffset = b + d;
      case j.BOTTOM:
        g._iHeightOffset = b + d;
        break;
      case j.LEFT:
      case j.TOP_LEFT:
      case j.BOTTOM_LEFT:
        g._iXOffset = k + d;
        g._iWidthOffset = k + d + d;
        break;
      case j.RIGHT:
      case j.TOP_RIGHT:
      case j.BOTTOM_RIGHT:
        g._iWidthOffset = k + d;
        break;
    }
  }
};
KJE.gGraphLegend.prototype.setINF = function (k) {
  oThis = this;
  oThis._cColor = oThis._gGraph._cTextColor;
  oThis._cTextColor = oThis._gGraph._cTextColor;
  if (oThis._cBGColor == null) {
    oThis._cBGColor = oThis._gGraph._cBackground;
  }
  oThis._iMaxLegendLength = 0;
  oThis._iFontHeight = 0;
  oThis._iFontDescent = 0;
  var b = oThis.useOrientation(k.canvas.width);
  var c = oThis.bLegendSmall
    ? oThis._gGraph.FONT_LEGEND_TINY
    : oThis._gGraph.FONT_LEGEND_BOLD;
  var d = oThis.bLegendSmall
    ? oThis._gGraph.FONT_LEGEND_TINY
    : oThis._gGraph.FONT_LEGEND;
  if (oThis._bShow) {
    if (oThis._iLegendWidth > 0) {
      oThis._iMaxLegendLength = oThis._iLegendWidth;
    } else {
      k.font = d;
      var f = 0;
      var j = "";
      var h = oThis._gGraph._vDataSeries.length;
      var l = "";
      if (oThis._legendType != KJE.gLegend.CATEGORY_LEGEND) {
        for (var g = 0; g < h; g++) {
          l = oThis._gGraph._vDataSeries[g]._sSeriesTitle;
          j = oThis._gGraph._vDataSeries[g]._sSeriesTitleBold;
          j = j ? j : "";
          f = k.measureText(KJE.FTR(l)).width;
          if (j != "") {
            k.font = oThis.FONT_LEGEND_BOLD;
            f += k.measureText(KJE.FTR(j)).width;
            k.font = d;
          }
          if (f > oThis._iMaxLegendLength) {
            oThis._iMaxLegendLength = f;
          }
        }
      } else {
        if (oThis._gGraph._sGraphCategories != null) {
          var h = oThis._gGraph._sGraphCategories.length;
          var a =
            oThis._gGraph._sGraphCategoriesBold == null
              ? 0
              : oThis._gGraph._sGraphCategoriesBold.length;
          for (var e = 0; e < h; e++) {
            l = oThis._gGraph._sGraphCategories[e];
            j = e < a ? oThis._gGraph._sGraphCategoriesBold[e] : "";
            f = k.measureText(KJE.FTR(l)).width;
            if (e < a) {
              k.font = c;
              f += k.measureText(KJE.FTR(j)).width;
              k.font = d;
            }
            if (f > oThis._iMaxLegendLength) {
              oThis._iMaxLegendLength = f;
            }
          }
        }
      }
    }
    oThis._iFontHeight = KJE.gGetFontHeight(k);
  }
};
KJE.gValueAxis = function (a) {
  this._gGraph = a;
  this._font = a.FONT_PLAIN;
  this._bShow = true;
  this._cColor = "#FFFFFF";
  this._cLine = "#000000";
  this._cTextColor = "#000000";
  this._iFormat = KJE.FMT_DOLLARS;
  this._iXOffset = 0;
  this._iYOffset = 0;
  this._iLabelCount = 0;
  this._iMaxLabelLength = 0;
  this._iMaxLength = 0;
  this._iWidth = 0;
  this._iHeight = 0;
  this._iPixelsPerIncrement = 0;
  this._iDataLength = 0;
  this._fValuePerPixel = 0;
  this._iFontHeight = 0;
  this._iFormat = KJE.FMT_DOLLARS;
  this._bAutoMaximum = true;
  this._bAutoMinimum = false;
  this._axisMinimum = 0;
  this._axisMaximum = 100;
  this._sUnits = "";
  this._iUnitFactor = 1;
  this._fAbsoluteMinValue = 0;
  this._fAbsoluteMaxValue = 0;
  this._fRange = 0;
  this._fMinValue = 0;
  this._fMaxValue = 0;
  this._iIncrement = 0;
  this._iFactor = 0;
  this._fIncrement = 0;
  this._iZeroIntersects = 0;
};
KJE.gValueAxis.prototype.setProperty = function (c) {
  var b = c.split("|");
  var a = KJE.sgv;
  for (var d = 0; d < b.length; d++) {
    switch (d) {
      case 0:
        this._bShow = a(b[d], this._bShow);
        break;
      case 1:
        this._iFormat = a(b[d], this._iFormat);
        break;
      case 2:
        this._bAutoMaximum = a(b[d], this._bAutoMaximum);
        break;
      case 3:
        this._bAutoMinimum = a(b[d], this._bAutoMinimum);
        break;
      case 4:
        this._axisMaximum = a(b[d], this._axisMaximum);
        break;
      case 5:
        this._axisMinimum = a(b[d], this._axisMinimum);
        break;
    }
  }
};
KJE.gValueAxis.prototype.getProperty = function () {
  return (
    this._bShow +
    "|" +
    this._iFormat +
    "|" +
    this._bAutoMaximum +
    "|" +
    this._bAutoMinimum +
    "|" +
    KJE.input(this._axisMaximum, 2) +
    "|" +
    KJE.input(this._axisMinimum, 2)
  );
};
KJE.gValueAxis.prototype.getLabel = function (a) {
  if (this._gGraph._sValueLabels == null) {
    return KJE.format[this._iFormat](
      a / this._iUnitFactor,
      this._fAbsoluteMaxValue - this._fAbsoluteMinValue <= 5 ? 2 : 0
    );
  } else {
    return this._gGraph._sValueLabels[Math.floor(a)];
  }
};
KJE.gValueAxis.prototype.getNextIncrement = function (b) {
  var a = this._iIncrement;
  return this._gGraph._sValueLabels == null
    ? this._fRange > 100
      ? b - a * this._iFactor
      : Math.round(b * this._iFactor - a) / this._iFactor
    : b - 1;
};
KJE.gValueAxis.prototype.paint = function (i, h, g) {
  if (this._bShow) {
    var f = KJE.gAxis;
    i.font = this._font;
    var a = this._iWidth - f.TICK_LENGTH - f.LINE_WIDTH;
    var c = f.LABEL_SPACE_LENGTH + f.TICK_LENGTH;
    var e = 0;
    var d = this.getStartingPlotValue();
    for (var b = 0; b <= this._iLabelCount; b++) {
      i.strokeStyle = this._cTextColor;
      if (this._iPixelsPerIncrement < this._iFontHeight) {
        if (b % 2 != 0) {
          this.drawText(i, h, g, this.getLabel(d), c, e);
        }
      } else {
        this.drawText(i, h, g, this.getLabel(d), c, e);
      }
      i.strokeStyle = this._cColor;
      i.beginPath();
      this.drawLine(
        i,
        h,
        g,
        a,
        e,
        a + f.TICK_LENGTH + KJE.gAxis.LINE_WIDTH / 2,
        e,
        this._cLine
      );
      e += this._iPixelsPerIncrement;
      d = this.getNextIncrement(d);
    }
    this.drawLine(
      i,
      h,
      g,
      a + f.TICK_LENGTH,
      0,
      a + f.TICK_LENGTH,
      this._iDataLength,
      this._cLine
    );
  }
};
KJE.gValueAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
  b.strokeStyle = g;
  b.lineWidth = KJE.gAxis.LINE_WIDTH;
  b.moveTo(a + e + 0.5, h + f + 0.5);
  b.lineTo(c + e + 0.5, d + f + 0.5);
  b.stroke();
};
KJE.gValueAxis.prototype.drawText = function (h, e, c, i, g, f) {
  var d = h.measureText(KJE.FTR(i)).width;
  var a = f + this._iFontHeight / 2;
  var b = this._iWidth - g - d;
  h.textAlign = "left";
  h.textBaseline = "bottom";
  h.font = this._font;
  h.fillText(KJE.FTR(i), e + b, c + a);
};
KJE.gValueAxis.prototype.setSize = function (a, b) {
  a.font = this._font;
  a.fillStyle = this._cColor;
  this._iPixelsPerIncrement = Math.floor(b / this._iLabelCount);
  this._iDataLength = this._iPixelsPerIncrement * this._iLabelCount;
  this._iMaxLength = b;
  this._iHeight = this._iDataLength;
  var f = 0;
  var d = this.getStartingPlotValue();
  for (var e = 0; e <= this._iLabelCount; e++) {
    if (d == 0) {
      this._iZeroIntersects = f;
      break;
    }
    d = this.getNextIncrement(d);
    f += this._iPixelsPerIncrement;
  }
  var c = KJE.gAxis;
  this._iWidth =
    this._iMaxLabelLength + c.LABEL_SPACE_LENGTH + c.TICK_LENGTH + c.LINE_WIDTH;
  this._iYOffset = this._bShow ? this._iHeight : 0;
  this._iXOffset = this._bShow ? this._iWidth : 0;
  this._fValuePerPixel = this._iDataLength / this._fRange;
};
KJE.gValueAxis.prototype.setFormat = function (a) {
  this._iFormat = a;
};
KJE.gValueAxis.prototype.setINF = function (j) {
  this._cLine = this._gGraph._cAxisLine;
  this._cColor = this._gGraph._cTextColor;
  this._cTextColor = this._gGraph._cTextColor;
  this._iFontHeight = KJE.gGetFontHeight(j);
  j.font = this._font;
  j.strokeStyle = this._cTextColor;
  this._fAbsoluteMaxValue = this._bAutoMaximum
    ? this._gGraph.getMaxValue() *
      (this._gGraph._showItemLabelOnTop && this._gGraph._showItemLabel
        ? 1.09
        : 1)
    : this._axisMaximum;
  this._fAbsoluteMinValue = this._bAutoMinimum
    ? this._gGraph.getMinValue()
    : this._axisMinimum;
  if (
    this._fAbsoluteMaxValue < 0.00001 &&
    this._fAbsoluteMaxValue > -0.00001 &&
    this._fAbsoluteMinValue < 0.00001 &&
    this._fAbsoluteMinValue > -0.00001
  ) {
    this._fAbsoluteMaxValue = 25;
  } else {
    if (
      this._fAbsoluteMaxValue < 1 &&
      this._fAbsoluteMaxValue > -1 &&
      this._fAbsoluteMinValue < 1 &&
      this._fAbsoluteMinValue > -1 &&
      this._iFormat == KJE.FMT_DOLLARS
    ) {
      this._fAbsoluteMaxValue = 1;
    }
  }
  var d = this._fAbsoluteMaxValue - this._fAbsoluteMinValue;
  this._iFactor = 1;
  this._iIncrement = 1;
  this._fIncrement = 1;
  if (this._gGraph._sValueLabels != null) {
  } else {
    var g = d;
    if (g > 100) {
      while (g > 200) {
        this._iFactor *= 10;
        g = d / this._iFactor;
      }
    } else {
      while (g <= 20) {
        this._iFactor *= 10;
        g = d * this._iFactor;
      }
    }
    this._iIncrement = g > 100 ? 20 : g > 50 ? 10 : 5;
    this._fIncrement =
      d > 100
        ? this._iIncrement * this._iFactor
        : this._iIncrement / this._iFactor;
  }
  if (this._fAbsoluteMinValue == 0) {
    this._fMinValue = 0;
  } else {
    if (this._fAbsoluteMinValue % this._fIncrement == 0) {
      this._fMinValue = this._fAbsoluteMinValue;
    } else {
      this._fMinValue =
        Math.floor(this._fAbsoluteMinValue / this._fIncrement) *
        this._fIncrement;
    }
  }
  if (this._fAbsoluteMaxValue == 0) {
    this._fMaxValue = 0;
  } else {
    if (this._fAbsoluteMaxValue % this._fIncrement == 0) {
      this._fMaxValue = this._fAbsoluteMaxValue;
    } else {
      this._fMaxValue = Math.ceil(this._fAbsoluteMaxValue / this._fIncrement);
      this._fMaxValue =
        Math.round(this._iFactor * this._fMaxValue * this._fIncrement) /
        this._iFactor;
    }
  }
  this._fRange = this._fMaxValue - this._fMinValue;
  if (this._fRange == 0) {
    this.fRange = this._fIncrement;
  }
  if (this._gGraph._sValueLabels == null) {
    this._iLabelCount = Math.round(this._fRange / this._fIncrement);
  } else {
    this._iLabelCount = this._gGraph._sValueLabels.length - 1;
  }
  this.setGraphUnits(this._fMaxValue, this._fMinValue);
  if (this._bShow) {
    var a = this.getStartingPlotValue();
    var e = 0;
    var c = 0;
    var f = this._iLabelCount;
    for (var b = 0; b <= f; b++) {
      c = j.measureText(KJE.FTR(this.getLabel(a))).width;
      e = c > e ? c : e;
      a = this.getNextIncrement(a);
    }
    var h = KJE.gAxis;
    this._iMaxLabelLength = e;
    this._iFontHeight = KJE.gGetFontHeight(j);
    this._iWidth =
      this._iMaxLabelLength +
      h.LABEL_SPACE_LENGTH +
      h.TICK_LENGTH +
      h.LINE_WIDTH;
  }
};
KJE.gValueAxis.prototype.getStartingPlotValue = function () {
  return this._gGraph._sValueLabels == null
    ? this._fMaxValue
    : this._gGraph._sValueLabels.length - 1;
};
KJE.gValueAxis.prototype.setVisible = function (a) {
  this._bShow = a;
};
KJE.gValueAxis.prototype.getDataLength = function () {
  return this._iDataLength;
};
KJE.gValueAxis.prototype.setGraphUnits = function (d, g) {
  var a = KJE;
  g = g || 0;
  var c = a.gScaleLabelMax;
  var e = a.gScaleLabelFactor;
  var f = c.length;
  for (var b = f - 1; b >= 0; b--) {
    if (d >= c[b] || g <= -1 * c[b]) {
      this._sUnits = a.gScaleLabel[b];
      this._iUnitFactor = e[b];
      break;
    }
  }
  return this._iUnitFactor;
};
KJE.gCategoryAxis = function (a) {
  this._gGraph = a;
  this._bShow = true;
  this._cColor = "#FFFFFF";
  this._cLine = "#000000";
  this._cTextColor = "#000000";
  this._fFont = "11pt Helvetica";
  this._iXOffset = 0;
  this._iYOffset = 0;
  this._iLabelCount = 0;
  this._iMaxLabelLength = 0;
  this._iWidth = 0;
  this._iHeight = 0;
  this._iPixelsPerIncrement = 0;
  this._iDataLength = 0;
  this._iFontHeight = 0;
  this._iFontOffset = 0;
  this._fSpacingPercent = 0.25;
  this._fDataGapPercent = 0;
  this._bNoOffset = false;
  this._sCategories = new Array();
  this._iCategoryCount;
  this._iBarCount;
  this._iBarWidth;
  this._iSpaceWidth;
  this._iGapWidth;
  this._iBarsPerCategory;
  this._iAxisSegmentLength;
  this._bVertical = false;
};
KJE.gCategoryAxis.prototype.setProperty = function (c) {
  var b = c.split("|");
  var a = KJE.sgv;
  for (var d = 0; d < b.length; d++) {
    switch (d) {
      case 0:
        this._bShow = a(b[d], this._bShow);
        break;
      case 1:
        this._fSpacingPercent = a(b[d], this._fSpacingPercent);
        break;
      case 2:
        this._fDataGapPercent = a(b[d], this._fDataGapPercent);
        break;
    }
    d++;
  }
};
KJE.gCategoryAxis.prototype.getProperty = function () {
  return (
    this._bShow +
    "|" +
    KJE.input(this._fSpacingPercent, 2) +
    "|" +
    KJE.input(this._fDataGapPercent, 2)
  );
};
KJE.gCategoryAxis.prototype.paint = function (m, j, h, r, u) {
  var p = this;
  if (p._bShow) {
    var t = KJE.gAxis;
    h += u;
    m.font = p._fFont;
    var c = t.TICK_LENGTH;
    var q = t.LABEL_SPACE_LENGTH + t.LINE_WIDTH + t.TICK_LENGTH;
    var e = c + t.LABEL_SPACE_LENGTH;
    var a = 0;
    var b = 0;
    var d = 1;
    var i = p._sCategories;
    var f = p._iCategoryCount;
    var n = p._bVertical;
    var o = (n ? p._iFontHeight : p._iMaxLabelLength) + q;
    if (o > p._iAxisSegmentLength && f > 2) {
      d = Math.ceil(f / (p._iDataLength / o));
    }
    m.strokeStyle = p._cLine;
    m.beginPath();
    for (var g = 0; g < f; g++) {
      b = p.getCategoryLeft(g);
      if (g == 0) {
        b -= t.LINE_WIDTH;
      }
      m.moveTo(b + j + 0.5, 0 + h + 0.5);
      m.lineTo(b + j + 0.5, c + h + 0.5);
    }
    m.moveTo(j - 1, h + 0.5);
    m.lineTo(p._iWidth + j + 0.5, h + 0.5);
    m.stroke();
    if (i) {
      m.setStyle = p._cTextColor;
      if (n) {
        m.save();
        m.rotate(-Math.PI / 2);
        m.textAlign = "right";
        m.textBaseline = "middle";
      } else {
        m.textAlign = "center";
        m.textBaseline = "top";
      }
      p.getCatOffset = p._bNoOffset ? p.getCategoryLeft : p.getCategoryMid;
      var l = i.length;
      var k = KJE.FTR;
      for (var g = 0; g < f; g++) {
        a = p.getCatOffset(g);
        if (
          d < 2 ||
          (g % d == 0 && g < f - d * 0.9 && g != f - 2) ||
          g == f - 1
        ) {
          if (g < l) {
            if (n) {
              m.fillText(k(i[g]), -h - e - 0.5, j + a - 0.5);
            } else {
              m.fillText(k(i[g]), j + a + 0.5, h + e + 0.5);
            }
          }
        }
      }
      if (n) {
        m.restore();
      }
    }
  } else {
    m.moveTo(j - 1, h + u + 0.5);
    m.lineTo(p._iWidth + j + 0.5, h + u + 0.5);
    m.stroke();
  }
};
KJE.gCategoryAxis.prototype.drawLine = function (b, e, f, a, h, c, d, g) {
  b.beginPath();
  b.strokeStyle = g;
  b.moveTo(a + e + 0.5, h + f + 0.5);
  b.lineTo(c + e + 0.5, d + f + 0.5);
  b.stroke();
};
KJE.gCategoryAxis.prototype.setSize = function (k, d) {
  k.font = this._fFont;
  var e = this._gGraph.getValueCount() - (this._bNoOffset ? 1 : 0);
  var a = this._gGraph.getDataSeriesCount();
  var h = a * e;
  var j = 2 * e;
  var b = (a - 1) * e;
  this._iWidth = d;
  this._iDataLength = d;
  var c = Math.floor(
    this._iWidth /
      Math.round(j * this._fSpacingPercent + h + b * this._fDataGapPercent)
  );
  var i = c * this._fDataGapPercent;
  var f = Math.floor((this._iDataLength - c * h - i * b) / j);
  this._iAxisSegmentLength = 2 * f + i * (a - 1) + c * a;
  this._iXOffset = 0;
  this._iYOffset = 0;
  if (this._bShow) {
    var g = KJE.gAxis;
    if (
      this._iMaxLabelLength > this._iAxisSegmentLength &&
      this._iMaxLabelLength > k.measureText("9999").width &&
      this._iMaxLabelLength < k.measureText("9999999999999999999").width
    ) {
      this._iHeight = this._iMaxLabelLength + g.TICK_LENGTH;
      this._bVertical = true;
    } else {
      this._iHeight =
        this._iFontHeight + g.LABEL_SPACE_LENGTH + g.TICK_LENGTH + g.LINE_WIDTH;
      this._bVertical = false;
    }
  } else {
    this._iHeight = 0;
  }
  this._iBarsPerCategory = a;
  this._iBarWidth = c;
  this._iGapWidth = i;
  this._iSpaceWidth = f;
};
KJE.gCategoryAxis.prototype.setINF = function (a) {
  this._iCategoryCount = this._gGraph.getValueCount();
  this._sCategories = this._gGraph._sGraphCategories;
  this._fFont = this._gGraph.FONT_PLAIN;
  this._cColor = this._gGraph._cTextColor;
  this._cTextColor = this._gGraph._cTextColor;
  this._cLine = this._gGraph._cAxisLine;
  this._iFontHeight = 0;
  this._iMaxLabelLength = 0;
  this._iHeight = 0;
  if (this._bShow) {
    var b = KJE.gAxis;
    if (this._sCategories) {
      this._iFontHeight = KJE.gGetFontHeight(a);
    } else {
      this._iFontHeight = -b.LABEL_SPACE_LENGTH * 2;
    }
    a.font = this._fFont;
    a.strokeStyle = this._cColor;
    this._iMaxLabelLength = this.getMaximumCategoryLength(
      a,
      this._iCategoryCount,
      this._sCategories
    );
  }
};
KJE.gCategoryAxis.prototype.getCategoryLeft = function (a) {
  return Math.round(
    (this._iWidth / (this._iCategoryCount - (this._bNoOffset ? 1 : 0))) * a
  );
};
KJE.gCategoryAxis.prototype.getCategoryMid = function (a) {
  return (
    Math.round((this._iWidth / this._iCategoryCount) * a) +
    Math.round(
      (this._iBarsPerCategory * this._iBarWidth +
        (this._iBarsPerCategory - 1) * this._iGapWidth) /
        2
    ) +
    this._iSpaceWidth
  );
};
KJE.gCategoryAxis.prototype.getDataWidth = function () {
  return this._iGapWidth + this._iBarWidth;
};
KJE.gCategoryAxis.prototype.getMaximumCategoryLength = function (b, e, d) {
  if (d == null) {
    return 0;
  }
  if (d.length == 0) {
    return 0;
  }
  var a = 0;
  var c = 0;
  for (var f = 0; f < e && f < d.length; f++) {
    c = b.measureText(KJE.FTR(d[f])).width + 3;
    a = c > a ? c : a;
  }
  return a;
};
KJE.gCategoryAxis.prototype.setVisible = function (a) {
  this._bShow = a;
};
KJE.gGrid = function (a) {
  this._gGraph = a;
  this._showYGridLines = KJE.parameters.get("YGridLines", true);
  this._showXGridLines = KJE.parameters.get("XGridLines", false);
  this._lineWidth = KJE.giGridLineWidth;
};
KJE.gGrid.prototype.setProperty = function (c) {
  var b = c.split("|");
  var a = KJE.sgv;
  for (var d = 0; d < b.length; d++) {
    switch (d) {
      case 0:
        this._showYGridLines = a(b[d], this._showYGridLines);
        break;
      case 1:
        this._showXGridLines = a(b[d], this._showXGridLines);
        break;
      case 2:
        this._lineWidth = a(b[d], this._lineWidth);
        break;
    }
  }
};
KJE.gGrid.prototype.getProperty = function () {
  return (
    this._showYGridLines + "|" + this._showXGridLines + "|" + this._lineWidth
  );
};
KJE.gGrid.prototype.paint = function (q, n, m) {
  var j = this._gGraph._axisX._iDataLength;
  var p = this._gGraph._axisY._iDataLength;
  var d = q.createLinearGradient(0, 0, 0, p);
  d.addColorStop(0, this._gGraph._cGridBackground1);
  d.addColorStop(1, this._gGraph._cGridBackground2);
  q.fillStyle = d;
  q.fillRect(n, m, j, p + 1);
  q.beginPath();
  q.strokeStyle = this._gGraph._cGrid;
  q.lineWidth = this._lineWidth * 2;
  q.strokeRect(n - 2, m, j + 2, p);
  q.strokeStyle = this._gGraph._cAxisLine;
  q.beginPath();
  q.moveTo(n, m + p);
  q.lineTo(n + j, m + p);
  q.closePath();
  q.strokeStyle = this._gGraph._cGrid;
  var k, i, g;
  var b = this._gGraph.getValueCount();
  q.lineWidth = this._lineWidth;
  if (this._showXGridLines) {
    k = 0;
    i = 0;
    g = 0;
    for (var h = 0; h < b; h++) {
      g = this._axisX.getCategoryLeft(h);
      if (h == 0) {
        k--;
      }
      k = n + g;
      q.moveTo(k + 0.5, m);
      q.lineTo(k + 0.5, m + p);
    }
  }
  var f = 0;
  if (this._showYGridLines) {
    i = m;
    var a = this._gGraph._axisY._iLabelCount;
    var c = this._gGraph._axisY._iPixelsPerIncrement;
    var o = this._gGraph._axisY._iZeroIntersects;
    for (var e = 0; e < a; e++) {
      if (o + m == i) {
        f = i;
      }
      q.moveTo(n, i + 0.5);
      q.lineTo(n + j, i + 0.5);
      i = i + c;
    }
  }
  q.strokeStyle = this._gGraph._cGrid;
  q.stroke();
  q.closePath();
  if (f) {
    q.beginPath();
    q.strokeStyle = this._gGraph._cAxisLine;
    q.moveTo(n, f + 0.5);
    q.lineTo(n + j, f + 0.5);
    q.stroke();
    q.closePath();
  }
};
KJE.gType = function (a) {
  this._iGraphType = a;
  this.bTitleHigher = false;
  this._gGraph = null;
  this.xPopup = new Array();
  this.yPopup = new Array();
  this.xArray = new Array();
  this.yArray = new Array();
  this.sItems = new Array();
};
KJE.gType.prototype.syncSetup = function (a) {
  this._gGraph = a;
  if (a.wTitle) {
    a.wTitle.style.fontColor = a._cTextColor;
    a._titleGraph.bShow = false;
  }
  a._titleGraph.setFont(a.FONT_TITLE);
  a._titleXAxis.setFont(a.FONT_BOLD);
  a._titleYAxis.setFont(a.FONT_BOLD);
  a._titleGraph.setColor(a._cTextColor);
  a._titleXAxis.setColor(a._cTextColor);
  a._titleYAxis.setColor(a._cTextColor);
  switch (this._iGraphType) {
    case KJE.gCOLUMN:
      a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
      a._axisX._fDataGapPercent = 0.05;
      this.bTitleHigher = true;
      break;
    case KJE.gCATEGORIES:
      a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
      a._axisX._fDataGapPercent = 0.05;
      this.bTitleHigher = true;
      break;
    case KJE.gLINE:
      a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
      a._axisX._fDataGapPercent = 100;
      this.bTitleHigher = false;
      a._axisX._bNoOffset = true;
      break;
    case KJE.gPIE:
      a._legend._legendType = KJE.gLegend.CATEGORY_LEGEND;
      this.bTitleHigher = false;
      break;
    case KJE.gSTACKED:
      a._legend._legendType = KJE.gLegend.DATA_SERIES_LEGEND;
      a._axisX._fDataGapPercent = -1;
      this.bTitleHigher = true;
      break;
  }
};
KJE.gType.prototype.paint = function (t, q, F) {
  var x = this;
  var y = x._gGraph;
  var D = y._legend;
  var d = y._axisX;
  var b = y._axisY;
  var w = y._titleXAxis;
  var l = y._titleYAxis;
  var G = y._titleGraph;
  G.setTitle(t);
  D.setINF(t);
  y._axisX.setINF(t);
  y._axisY.setINF(t);
  w.setTitle(t, "");
  l.setTitle(t, y._axisY._sUnits);
  var H = false;
  var I = KJE.gBORDER_WIDTH;
  var B = KJE.gBORDER_WIDTH;
  var K = q - 2 * KJE.gBORDER_WIDTH;
  var A = F - 2 * KJE.gBORDER_WIDTH;
  var m = G._iHeight;
  var e = I;
  var h = B + (H ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH;
  var f = K;
  var c = A - ((H ? Math.ceil(m / 2) : 0) + m + KJE.gBORDER_WIDTH);
  D.setSize(t);
  var E, i, p, j, L, a, z, o, M, C, k, n, g, J, r, u;
  switch (x._iGraphType) {
    case KJE.gPIE:
      E = e;
      i = h;
      p = f;
      j = c;
      L = f;
      a = c;
      z = e;
      o = h;
      M = e;
      C = h;
      k = f;
      n = c;
      g = e + D._iXOffset;
      J = h + D._iYOffset;
      r = f - D._iWidthOffset;
      u = c - D._iHeightOffset;
      break;
    default:
      E = e + D._iXOffset;
      i = h + D._iYOffset;
      p = f - D._iWidthOffset;
      j = c - D._iHeightOffset;
      L = p - l._iWidth - KJE.gBORDER_WIDTH;
      a = j - w._iHeight - KJE.gBORDER_WIDTH;
      d.setSize(t, L - b._iWidth);
      b.setSize(t, a - d._iHeight);
      z = E + l._iWidth + KJE.gBORDER_WIDTH;
      o = i + (b._iMaxLength - b._iHeight);
      M = z + b._iXOffset;
      C = o + d._iYOffset;
      k = d._iDataLength;
      n = b._iDataLength;
      g = M;
      J = C;
      r = k;
      u = n;
  }
  switch (x._iGraphType) {
    case KJE.gPIE:
      break;
    default:
      y._grid.paint(t, M, C);
      w.paint(
        t,
        M,
        b._iDataLength + C + d._iHeight + w._iHeight / 2,
        k,
        w._iHeight
      );
      l.paint(t, E, C, l._iWidth, n);
      b.paint(t, z, o + d._iXOffset, k, n);
      d.paint(t, z + b._iXOffset, o, k, n);
  }
  switch (x._iGraphType) {
    case KJE.gCATEGORIES:
    case KJE.gCOLUMN:
      x.paintDataColumn(t, g, J, r, u);
      break;
    case KJE.gLINE:
      x.paintDataLine(t, g, J, r, u);
      break;
    case KJE.gPIE:
      x.paintDataPie(t, g, J, r, u);
      break;
    case KJE.gSTACKED:
      x.paintDataStacked(t, g, J, r, u);
      break;
  }
  G.paint(t, I, B - (H ? Math.ceil(m / 4) : 0), K, m);
  D.paint(t, e, h, f, c, M, C, k, n);
};
KJE.gType.prototype.paintDataColumn = function (t, m, j, z, f) {
  var r;
  var L = this._gGraph;
  var B = KJE.gGraphColumn;
  var F = this;
  var c = L._axisX._iBarWidth;
  var u = L._axisY._fValuePerPixel;
  var g = L._axisX._iSpaceWidth;
  var G = L._axisX.getDataWidth();
  var q = L._axisY._fMinValue;
  var J = L._axisY._fMaxValue;
  var b = L._axisY._iZeroIntersects;
  var C = L.getValueCount();
  t.shadowColor = B._sSHADOW_COLOR;
  t.shadowBlur = B._sSHADOW_BLUR;
  t.shadowOffsetX = c < B._sSHADOW_BLUR_X * 3 ? 0 : B._sSHADOW_BLUR_X;
  var p = (t.shadowOffsetY = c < B._sSHADOW_BLUR_X * 3 ? 0 : B._sSHADOW_BLUR_Y);
  t.lineWidth = B._LINE_WIDTH;
  var N = new Array();
  var a = new Array();
  var d = new Array();
  var M = 0;
  t.font = L.FONT_LEGEND;
  if (!L._showItemLabelOnTop) {
    M = -KJE.gGetFontHeight(t);
  }
  t.textAlign = "center";
  t.textBaseline = "bottom";
  var I = 0;
  var i = 0;
  var A = "";
  var e = L._legend._legendType != KJE.gLegend.CATEGORY_LEGEND;
  var o =
    L._sGraphCategoriesBold != null &&
    L._legend._legendType == KJE.gLegend.CATEGORY_LEGEND;
  var h = L._axisX._sCategories;
  for (var K = 0; K < L._vDataSeries.length; K++) {
    if (e) {
      A = L._vDataSeries[K]._sSeriesPop;
    }
    var E = -9191;
    var w = -9191;
    t.fillStyle = L._vDataSeries[K]._cColor;
    var l = L._vDataSeries[K]._fValues;
    var D;
    var k, H;
    N[K] = new Array();
    a[K] = new Array();
    d[K] = new Array();
    for (var r = 0; r < C; r++) {
      D = m + L._axisX.getCategoryLeft(r) + g + K * G;
      I = l[r];
      if (I < 0) {
        if (J < 0) {
          k = j;
          H = -1 * Math.round((I + J) * u);
        } else {
          k = j + b;
          H = -1 * Math.round(I * u);
        }
      } else {
        if (q > 0) {
          H = Math.round((I - q) * u);
          k = j + f - H;
        } else {
          H = Math.round(I * u);
          k = j + b - H;
        }
      }
      t.beginPath();
      if (L._legend._legendType == KJE.gLegend.CATEGORY_LEGEND) {
        t.fillStyle = L.getColor(r + 1);
      } else {
        t.fillStyle = L._vDataSeries[K]._cColor;
      }
      t.strokeStyle = t.fillStyle;
      t.fillRect(D, k, c, H);
      t.shadowOffsetY = "0";
      if (c > KJE.gGraphColumn._LINE_WIDTH * 4) {
        t.strokeStyle = KJE.gDarker(t.fillStyle, 0.6);
        t.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
        t.strokeRect(D, k, c, H);
      }
      if (
        L._iArea == KJE.gGraphColumn.LINE_ON_ALL ||
        (L._iArea == KJE.gGraphColumn.LINE_ON_FIRST_ONLY && K == 0)
      ) {
        t.lineWidth = KJE.gGraphLine._LINE_WIDTH;
        t.shadowOffsetY = KJE.gGraphLine._sSHADOW_BLUR_Y;
        if (w != -9191) {
          t.beginPath();
          t.moveTo(E + c / 2, w);
          t.lineTo(D + c / 2, k);
          t.stroke();
        }
        E = D;
        w = k;
      }
      t.closePath();
      N[K][r] = L.getFormat(l[r], K, r);
      F.xPopup[i] = (D + c / 2) / KJE.gSCALE;
      F.yPopup[i] = (k + H) / KJE.gSCALE;
      F.xArray[i] = new Array(4);
      F.yArray[i] = new Array(4);
      F.xArray[i][0] = D / KJE.gSCALE;
      F.yArray[i][0] = k / KJE.gSCALE;
      F.xArray[i][1] = (D + c) / KJE.gSCALE;
      F.yArray[i][1] = F.yArray[i][0];
      F.xArray[i][2] = F.xArray[i][1];
      F.yArray[i][2] = (k + H) / KJE.gSCALE;
      F.xArray[i][3] = F.xArray[i][0];
      F.yArray[i][3] = F.yArray[i][2];
      F.sItems[i++] =
        A +
        " " +
        (h ? h[r] : "") +
        (o
          ? L._sGraphCategoriesBold[r]
            ? L._sGraphCategoriesBold[r]
            : ""
          : "") +
        (L._bPopDetail ? KJE.Colon + " " + N[K][r] : "");
      a[K][r] = D + c / 2;
      d[K][r] = k - M;
    }
  }
  F.xArray.length = i;
  F.yArray.length = i;
  F.sItems.length = i;
  t.shadowBlur = "0";
  t.shadowOffsetX = "0";
  t.shadowOffsetY = "0";
  t.fillStyle = L._cTextColor;
  if (L._showItemLabel) {
    for (K = 0; K < N.length; K++) {
      if (!(N[K].length > 3 && z < 600)) {
        for (r = 0; r < N[K].length; r++) {
          t.beginPath();
          t.fillText(KJE.FTR(N[K][r]), a[K][r], d[K][r]);
          t.closePath();
        }
      }
    }
  }
};
KJE.gType.prototype.paintDataLine = function (p, j, g, u, d) {
  var b = KJE;
  var k = b.gGraphLine;
  var c = KJE.gSCALE;
  var F = this._gGraph;
  var C = this;
  var q = F._axisY._fValuePerPixel;
  var o = F._axisY._fMinValue;
  var D = F._axisY._fMaxValue;
  var a = F._axisY._iZeroIntersects;
  var z = F.getValueCount();
  var f = 0;
  var r = k._CLICKABLE;
  p.shadowBlur = k._sSHADOW_BLUR;
  p.shadowColor = k._sSHADOW_COLOR;
  p.shadowOffsetX = k._sSHADOW_BLUR_X;
  p.lineWidth = k._LINE_WIDTH;
  p.shadowOffsetY = k._sSHADOW_BLUR_Y;
  var e = F._axisX._sCategories;
  for (var E = 0; E < F._vDataSeries.length; E++) {
    var w = F._vDataSeries[E]._sSeriesPop;
    var l = F._vDataSeries[E]._bNoPopDetails;
    p.fillStyle = F._vDataSeries[E]._cColor;
    p.strokeStyle = F._vDataSeries[E]._cColor;
    var i = F._vDataSeries[E]._fValues;
    var B;
    var h;
    var A = -9191;
    var t = -9191;
    for (var m = 0; m < z; m++) {
      B = j + F._axisX.getCategoryLeft(m) - 0.5;
      h = a - Math.round(i[m] * q) + 0.5;
      if (D < 0) {
        h = -1 * Math.round((i[m] + D) * q);
      } else {
        if (o > 0) {
          h = d - Math.round((i[m] - o) * q);
        }
      }
      h += g;
      if (t != -9191) {
        p.beginPath();
        p.strokeStyle = F._vDataSeries[E]._cColor;
        p.fillStyle = F._vDataSeries[E]._cColor;
        if (
          F._iArea == k.AREA_ALL ||
          (F._iArea == k.AREA_FIRST_ONLY && E == 0) ||
          (F._iArea == k.AREA_SECOND_ONLY && E == 1)
        ) {
          p.moveTo(A, g + d);
          p.lineTo(A, t);
          p.lineTo(B + 0.5, h);
          p.lineTo(B + 0.5, g + d);
          p.lineTo(A, g + d);
          p.fill();
        } else {
          p.moveTo(B + 0.5, h);
          p.lineTo(A, t);
          p.stroke();
        }
      }
      C.xPopup[f] = (B - 5) / c;
      C.yPopup[f] = (h + 5) / c;
      C.xArray[f] = KJE.IntArray(4);
      C.yArray[f] = KJE.IntArray(4);
      C.xArray[f][0] = (B - r) / c;
      C.yArray[f][0] = (h - r) / c;
      C.xArray[f][1] = (B + r) / c;
      C.yArray[f][1] = C.yArray[f][0];
      C.xArray[f][2] = C.xArray[f][1];
      C.yArray[f][2] = (h + r) / c;
      C.xArray[f][3] = C.xArray[f][0];
      C.yArray[f][3] = C.yArray[f][2];
      C.sItems[f++] =
        w +
        (l
          ? ""
          : " " +
            (e ? e[m] : "") +
            (F._bPopDetail ? b.Colon + " " + F.getFormat(i[m], E, m) : ""));
      A = B;
      t = h;
    }
  }
  C.xArray.length = f;
  C.yArray.length = f;
  C.sItems.length = f;
};
KJE.gType.prototype.paintDataPie = function (t, b, a, D, d) {
  var H = 0;
  var F = this._gGraph;
  var C = this;
  var l = F._vDataSeries[0]._fValues;
  for (var r = 0; r < l.length; r++) {
    H += l[r];
  }
  var o = -1;
  for (var r = 0; r < l.length; r++) {
    if (H == l[r]) {
      o = r;
    }
  }
  var k = Math.round(D / 2 + b);
  var j = Math.round(d / 2 + a);
  var G = 0;
  if (D / d) {
    G = Math.floor(d / 24);
    j -= Math.ceil(G / 2) + 1;
    d -= Math.ceil(G) + 1;
  }
  t.save();
  var g = 1;
  var f = 1;
  if (!KJE.gGraphPie._FLAT) {
    var g = D > d ? D / d : 1;
    var f = D > d ? 1 : d / D;
  }
  k = k / g;
  j = j / f;
  t.scale(g, f);
  var c = Math.round(Math.min(D / 2, d / 2));
  var u = 0;
  var B = 0;
  t.shadowBlur = 0;
  t.shadowOffsetX = G;
  t.shadowOffsetY = G;
  t.lineWidth = KJE.gGraphPie._LINE_WIDTH;
  t.lineJoin = KJE.gGraphPie._LINE_JOIN;
  t.fillStyle = KJE.gGraphPie._LINE_COLOR;
  var h = F._axisX._sCategories;
  if (o >= 0 || H == 0) {
    if (H == 0) {
      o = 1;
    } else {
      o += 1;
    }
    t.fillStyle = F.getColor(o);
    t.moveTo(k, j);
    t.beginPath();
    t.arc(k, j, c, 0, Math.PI * 2, true);
    t.closePath();
    t.stroke();
    t.fill();
    t.fillStyle = F.getColor(o);
    t.strokeStyle = KJE.gDarker(F.getColor(o), 0.6);
    t.moveTo(k, j);
    t.beginPath();
    t.arc(k, j, c, 0, Math.PI * 2, true);
    t.closePath();
    t.stroke();
    t.fill();
  } else {
    if (KJE.gGraphPie._DROP_SHADOW) {
      for (var z = l.length - 1; z >= 0; z--) {
        if (l[z] != 0) {
          B = l[z] / H;
          t.fillStyle = KJE.gDarker(F.getColor(z + 1), 0.5);
          t.shadowColor = t.fillStyle;
          t.beginPath();
          t.moveTo(k, j);
          var A = u * Math.PI * 2;
          var w = z == 0 && l[z] > 0 ? 0 : (u + B) * Math.PI * 2;
          t.arc(k, j, c, A, w, false);
          t.lineTo(k, j);
          t.closePath();
          t.fill();
          u += B;
        }
      }
    }
    u = 0;
    t.shadowBlur = 0;
    t.shadowOffsetX = 0;
    t.shadowOffsetY = 0;
    var m = 0;
    for (z = l.length - 1; z >= 0; z--) {
      if (l[z] != 0) {
        B = l[z] / H;
        if (B < 0) {
          B = 0;
        }
        t.fillStyle = F.getColor(z + 1);
        t.strokeStyle = KJE.gDarker(F.getColor(z + 1), 0.6);
        t.beginPath();
        t.moveTo(k, j);
        var A = u * Math.PI * 2;
        var w = z == 0 && l[z] > 0 ? 0 : (u + B) * Math.PI * 2;
        t.arc(k, j, c, A, w, false);
        t.lineTo(k, j);
        t.closePath();
        t.stroke();
        t.fill();
        var e = Math.ceil(B * 20 + 0.01);
        C.xArray[m] = KJE.IntArray(e + 2);
        C.yArray[m] = KJE.IntArray(e + 2);
        C.xArray[m][0] = (k * g) / KJE.gSCALE;
        C.yArray[m][0] = (j * f) / KJE.gSCALE;
        var E = B / e;
        for (var q = 0; q < e; q++) {
          C.xArray[m][q + 1] =
            ((k + c * Math.cos((u + E * q) * Math.PI * 2)) * g) / KJE.gSCALE;
          C.yArray[m][q + 1] =
            ((j + c * Math.sin((u + E * q) * Math.PI * 2)) * f) / KJE.gSCALE;
          if (q == Math.floor(e / 2)) {
            C.xPopup[m] =
              ((k + c * 0.75 * Math.cos((u + E * q) * Math.PI * 2)) * g) /
                KJE.gSCALE -
              5;
            C.yPopup[m] =
              ((j + c * 0.75 * Math.sin((u + E * q) * Math.PI * 2)) * f) /
                KJE.gSCALE +
              10;
          }
        }
        C.xArray[m][e + 1] =
          ((k + c * Math.cos((u + B) * Math.PI * 2)) * g) / KJE.gSCALE;
        C.yArray[m][e + 1] =
          ((j + c * Math.sin((u + B) * Math.PI * 2)) * f) / KJE.gSCALE;
        C.sItems[m] =
          (h ? h[z] : "") +
          (F._bPopDetail ? KJE.Colon + " " + F.getFormat(l[z], 0, z) : "");
        u += B;
        m++;
      }
    }
    C.xArray.length = m;
    C.yArray.length = m;
    C.sItems.length = m;
    C.xPopup.length = m;
    C.yPopup.length = m;
  }
  t.restore();
};
KJE.gType.prototype.paintDataStacked = function (p, G, F, R, N) {
  var D = this._gGraph;
  var d = D._axisY;
  var e = D._axisX;
  var K = KJE.gGraphColumn;
  var B = this;
  var H = e._iBarWidth;
  var a = d._fValuePerPixel;
  var A = e._iSpaceWidth;
  var r = e.getDataWidth();
  var c = d._fMinValue;
  var g = d._fMaxValue;
  var h = d._iZeroIntersects;
  var t = D.getValueCount();
  var m = new Array();
  var w = new Array();
  var k = new Array();
  var J = new Array();
  var O = B.xArray;
  var o = B.yArray;
  var u = B.sItems;
  var l = B.xPopup;
  var L = B.yPopup;
  var j = e._sCategories;
  p.shadowColor = K._sSHADOW_COLOR;
  p.shadowBlur = K._sSHADOW_BLUR;
  p.shadowOffsetX = H < K._sSHADOW_BLUR_X * 3 ? 0 : K._sSHADOW_BLUR_X;
  var b = (p.shadowOffsetY = H < K._sSHADOW_BLUR_X * 3 ? 0 : K._sSHADOW_BLUR_Y);
  p.lineWidth = K._LINE_WIDTH;
  p.font = D.FONT_LEGEND;
  p.textAlign = "center";
  p.textBaseline = "bottom";
  var i = 5;
  if (!D._showItemLabelOnTop) {
    i = -KJE.gGetFontHeight(p);
  }
  var E = null;
  for (var I = 0; I < D._vDataSeries.length; I++) {
    E = D._vDataSeries[I]._fValues;
    for (var P = 0; P < E.length; P++) {
      m[P] = E[P] + (m[P] ? m[P] : 0);
    }
  }
  for (P = 0; P < m.length; P++) {
    w[P] = D.getFormat(m[P], I - 1, P);
  }
  var S = 0;
  var q = 0;
  for (I = 0; I < D._vDataSeries.length; I++) {
    var z = D._vDataSeries[I]._sSeriesPop;
    var Q = 0;
    var C = 0;
    var f = 0;
    E = D._vDataSeries[I]._fValues;
    for (P = 0; P < t; P++) {
      Q = G + e.getCategoryLeft(P) + A + I * r;
      S = m[P];
      m[P] -= E[P];
      if (S < 0) {
        if (g < 0) {
          C = F;
          f = -1 * Math.round((S + g) * a);
        } else {
          C = F + h;
          f = -1 * Math.round(S * a);
        }
      } else {
        if (c > 0) {
          f = Math.round((S - c) * a);
          C = F + N - f;
        } else {
          f = Math.round(S * a);
          C = F + h - f;
        }
      }
      p.beginPath();
      p.fillStyle = D._vDataSeries[I]._cColor;
      if (I == 0) {
        p.shadowOffsetY = b;
        p.fillRect(Q, C, H, f);
        if (H > KJE.gGraphColumn._LINE_WIDTH * 4) {
          p.strokeStyle = KJE.gDarker(p.fillStyle, 0.6);
          p.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
          p.strokeRect(Q, C, H, f);
        }
        k[P] = Q + H / 2;
        J[P] = C - i;
      }
      p.shadowOffsetY = "0";
      p.fillRect(Q, C, H, f);
      if (H > KJE.gGraphColumn._LINE_WIDTH * 4) {
        p.strokeStyle = KJE.gDarker(p.fillStyle, 0.6);
        p.lineWidth = KJE.gGraphColumn._LINE_WIDTH;
        p.strokeRect(Q, C, H, f);
      }
      var M = C + Math.floor(E[P] * a);
      l[q] = (Q + H / 2) / KJE.gSCALE;
      L[q] = M / KJE.gSCALE;
      O[q] = new Array(4);
      o[q] = new Array(4);
      O[q][0] = Q / KJE.gSCALE;
      o[q][0] = C / KJE.gSCALE;
      O[q][1] = (Q + H) / KJE.gSCALE;
      o[q][1] = o[q][0];
      O[q][2] = O[q][1];
      o[q][2] = M / KJE.gSCALE;
      O[q][3] = O[q][0];
      o[q][3] = o[q][2];
      u[q++] =
        z +
        (D._bPopCat && j ? " " + e._sCategories[P] : "") +
        (D._bPopDetail ? KJE.Colon + " " + D.getFormat(E[P], I, P) : "");
    }
  }
  O.length = q;
  o.length = q;
  u.length = q;
  p.shadowBlur = "0";
  p.shadowOffsetX = "0";
  p.shadowOffsetY = "0";
  p.fillStyle = D._cTextColor;
  if (D._showItemLabel) {
    for (P = 0; P < m.length; P++) {
      p.beginPath();
      p.fillText(KJE.FTR(w[P]), k[P], J[P]);
      p.closePath();
    }
  }
};
KJE.gType.prototype.poly = function (e, f, a, k) {
  var d,
    b,
    h = 0;
  if (e) {
    var g = e.length;
    for (d = 0, b = g - 1; d < g; b = d++) {
      if (
        ((f[d] <= k && k < f[b]) || (f[b] <= k && k < f[d])) &&
        a < ((e[b] - e[d]) * (k - f[d])) / (f[b] - f[d]) + e[d]
      ) {
        h = !h;
      }
    }
  }
  return h;
};
KJE.gType.prototype.getWedgeValue = function (a, i) {
  var e = this;
  var g = e.xArray;
  var f = e.yArray;
  var d = e.sItems.length;
  for (var b = d; b > -1; b--) {
    var h = e.poly(g[b], f[b], a, i);
    if (h) {
      return { x: e.xPopup[b], y: e.yPopup[b], s: e.sItems[b] };
    }
  }
  return null;
};
KJE.FTR = function (a) {
  return a;
};
KJE.lang = "EN";
KJE.definitions.set(
  "**ROR_DEFINITION**",
  "The actual rate of return is largely dependent on the types of investments you select.  The Standard & Poor's 500&reg; (S&P 500&reg;) for the 10 years ending December 31<sup>st</sup> 2022, had an annual compounded rate of return of 12.6%, including reinvestment of dividends. From January 1, 1970 to December 31<sup>st</sup> 2022, the average annual compounded rate of return for the S&P 500&reg;, including reinvestment of dividends, was approximately 10.7% (source: www.spglobal.com). Since 1970, the highest 12-month return was 61% (June 1982 through June 1983). The lowest 12-month return was -43% (March 2008 to March 2009). Savings accounts at a financial institution may pay as little as 0.25% or less but carry significantly lower risk of loss of principal balances.<p>It is important to remember that these scenarios are hypothetical and that future rates of return can't be predicted with certainty and that investments that pay higher rates of return are generally subject to higher risk and volatility. The actual rate of return on investments can vary widely over time, especially for long-term investments. This includes the potential loss of principal on your investment. It is not possible to invest directly in an index and the compounded rate of return noted above does not reflect sales charges and other fees that investment funds and/or investment companies may charge."
);
KJE.definitions.set(
  "**ROR_SHORT_DEFINITION**",
  "It is important to remember that these scenarios are hypothetical and that future interest rates can't be predicted with certainty."
);
KJE.definitions.set(
  "**INFLATION_DEFINITION**",
  "This is what you expect for the average long-term inflation rate. A common measure of inflation in the U.S. is the Consumer Price Index (CPI).  From 1925 through 2022 the CPI has a long-term average of 3.0% annually. Over the last 40 years the highest CPI recorded was 13.5% in 1980. For the 12 months ending October 31<sup>st</sup> 2022 the CPI for All Urban Consumers (CPI-U) was 7.7% as reported by the U.S. Bureau of Labor Statistics."
);
KJE.gColorGridBackground1 = "#f7f7f7";
KJE.gColorGridBackground2 = "#f7f7f7";
KJE.ReportHeader =
  "<div class='KJEReportTitleBlock'><div class='KJEReportTitle'>**REPORT_TITLE**</div>www.canwebuildit.com</div>";
KJE.ReportFooter =
  "<div class=KJECenter><p class='KJEReportFooter KJECenter'>Information and interactive calculators are made available to you only as self-help tools for your independent use and are not intended to provide investment or tax advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.</p></div><!--EXTRA_FOOTER-->";
KJE.parameters.set("ADDITIONAL_FIELDS", true);
KJE.parameters.set("COMPANY_SAVINGS_PLAN", 0);
KJE.parameters.set("FEDERAL_TAX_WITHHOLDING", 0);
KJE.parameters.set("INSURANCE_AND_BENEFITS", 0);
KJE.parameters.set("LOCAL_TAX_WITHHOLDING", 0);
KJE.parameters.set("MSG_TOTAL_PAYCHECK", "Total net monthly pay is");
KJE.parameters.set("MSG_YOUR_ADDITIONAL1", "Other debt payments");
KJE.parameters.set("MSG_YOUR_ADDITIONAL2", "Other monthly expenses");
KJE.parameters.set("MSG_YOUR_INCOME", "Gross amount paid");
KJE.parameters.set("OTHER_INCOME", 0);
KJE.parameters.set("OTHER_TAXES_AND_WITHHOLDINGS", 0);

KJE.parameters.set("STATE_TAX_WITHHOLDING", 0);
KJE.parameters.set("YOUR_ADDITIONAL1", 0.0);
KJE.parameters.set("YOUR_ADDITIONAL2", 0.0);
KJE.parameters.set("YOUR_AUTO_GAS_AND_MAINTENANCE", 0);
KJE.parameters.set("YOUR_AUTO_INSURANCE", 0);
KJE.parameters.set("YOUR_AUTO_PAYMENT", 0);
KJE.parameters.set("YOUR_AUTO_PAYMENT_2", 0);
KJE.parameters.set("YOUR_BANK_SERVICE_CHARGE", 0);
KJE.parameters.set("YOUR_CABLE", 0);
KJE.parameters.set("YOUR_CREDIT_CARD_PAYMENTS", 0);
KJE.parameters.set("YOUR_DONATIONS", 0);
KJE.parameters.set("YOUR_ELECTRIC", 0);
KJE.parameters.set("YOUR_FOOD", 0);
KJE.parameters.set("YOUR_GAS", 0);
KJE.parameters.set("YOUR_GENERAL_MERCHANDISE", 0);
KJE.parameters.set("YOUR_GIFT_EXPENSE", 0);
KJE.parameters.set("YOUR_HEALTH", 0);
KJE.parameters.set("YOUR_HOME_INSURANCE", 0);
KJE.parameters.set("YOUR_HOME_MAINTAINCE", 0);
KJE.parameters.set("YOUR_HOUSE_PAYMENT", 0);
KJE.parameters.set("YOUR_INCOME", 0);
KJE.parameters.set("YOUR_INTERNET", 0);
KJE.parameters.set("YOUR_LIFE", 0);
KJE.parameters.set("YOUR_MEDICAL", 0);
KJE.parameters.set("YOUR_SCHOOL_OR_DAYCARE", 0);
KJE.parameters.set("YOUR_SEWER", 0);
KJE.parameters.set("YOUR_TELEPHONE", 0);
KJE.parameters.set("YOUR_TRAVEL_AND_ENTERTAINMENT", 0);

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
