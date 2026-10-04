const featureData = {
  tax101: {
    icon:"📚", title:"Tax 101",
    intro:"Understand basic tax concepts using simple explanations.",
    target:"overview", action:"Review overview",
    cards:[
      ["Tax","Money collected by government under law to help fund public services and government programs."],
      ["Taxpayer","A person or organization that may have a legal duty to register, file, report, or pay a tax."],
      ["Taxable income","The amount actually subject to income tax after the applicable rules are applied."],
      ["Deduction","An amount allowed by tax rules that may reduce taxable income."],
      ["Tax rate","The percentage or graduated schedule applied to a tax base. TaxEase selects it automatically in supported cases."],
      ["Tax return","A form used to report required tax information and compute tax due."]
    ]
  },
  types: {
    icon:"🧾", title:"Tax Types Guide",
    intro:"See the Philippine tax situations supported by the TaxEase calculator.",
    target:"calculator", action:"Open tax calculator",
    cards:[
      ["Income Tax","Includes individual graduated rates, qualified 8% self-employed options, and general domestic corporate income tax."],
      ["VAT","A simplified 12% VAT-payable calculation for taxable sales, with input VAT entered by the user."],
      ["Section 116 Tax","A 3% calculator limited to the general Section 116 non-VAT case."],
      ["Capital Gains Tax","Supported calculations for Philippine real property classified as a capital asset and unlisted shares of a domestic corporation."],
      ["Estate & Donor's Tax","Current 6% transfer-tax calculations using the proper taxable base entered by the user."],
      ["DST, Withholding & Excise","Supported real-property DST, selected common expanded withholding cases, and sweetened-beverage excise."]
    ]
  },
  calculator: {
    icon:"🧮", title:"Tax Calculator",
    intro:"Choose a tax type and answer simple questions. TaxEase selects the supported rate automatically.",
    target:"calculator", action:"Use calculator",
    cards:[
      ["No rate memorizing","You choose the situation; TaxEase chooses the supported rate or tax table."],
      ["Simple questions","The form changes depending on the selected tax."],
      ["Protected calculations","Unsupported cases are stopped instead of being guessed."],
      ["Clear result","The result shows the tax base and the rate or rule used."],
      ["Step-by-step","Each calculation explains how the amount was reached."],
      ["Estimate notice","Actual filing can still require additional BIR facts, documents, exemptions, and credits."]
    ]
  },
  category: {
    icon:"👤", title:"Taxpayer Category",
    intro:"Choose the category that best describes your main situation.",
    target:"category", action:"Choose category",
    cards:[
      ["Student","For learners who want to understand how taxes work."],
      ["Employee","For people earning compensation from an employer."],
      ["Freelancer / Professional","For people independently earning from services, projects, or professional practice."],
      ["Self-employed","For people earning from their own trade, activity, or business."],
      ["Online seller","For people selling goods or services online."],
      ["Small business owner","For people operating a small business."]
    ]
  },
  income: {
    icon:"💰", title:"Income & Deduction Input",
    intro:"Enter only the values requested by the selected tax calculator.",
    target:"calculator", action:"Enter amounts",
    cards:[
      ["Taxable income","Used by the graduated individual-income-tax calculator."],
      ["Gross sales / receipts","Used by qualified 8% and Section 116 calculations."],
      ["Input VAT","Used by the simplified VAT-payable calculator."],
      ["Property values","Selling price, zonal value, and assessor value are compared when required."],
      ["Net estate / gifts","Used after applicable deductions or exemptions have already been determined."],
      ["Payment / volume","Used for supported withholding and sweetened-beverage excise cases."]
    ]
  },
  deadline: {
    icon:"📅", title:"Tax Deadline Reminders",
    intro:"Create personal browser-based reminders for dates that matter to you.",
    target:"reminders", action:"Add reminder",
    cards:[
      ["Add a title","Name the reminder."],
      ["Choose a date","Select the date you want to remember."],
      ["Saved locally","Reminders stay in this browser using local storage."],
      ["Date order","Saved reminders appear in chronological order."],
      ["Delete anytime","Remove a reminder with one click."],
      ["Personal reminder","A date you enter is not automatically an official BIR deadline."]
    ]
  },
  steps: {
    icon:"🔎", title:"Step-by-Step Guide",
    intro:"Every supported result explains the rule used.",
    target:"calculator", action:"View calculator",
    cards:[
      ["Step 1","Choose the tax type."],
      ["Step 2","Answer the simple questions shown."],
      ["Step 3","TaxEase selects the supported rate or tax table."],
      ["Step 4","The proper tax base is calculated."],
      ["Step 5","The result and rule used are shown."],
      ["Step 6","For real filing, verify the final obligation with current BIR requirements."]
    ]
  },
  updates: {
    icon:"🔄", title:"Tax Updates",
    intro:"Tax rules can change, so current official BIR information matters.",
    target:"calculator", action:"See calculator notice",
    cards:[
      ["Current rules","Rates, thresholds, forms, exemptions, and procedures can change."],
      ["Official source","Actual filing decisions should be checked against current BIR issuances."],
      ["Supported scope","TaxEase calculates only the cases stated in each calculator."],
      ["No guessed rates","The user is not asked to invent a percentage."],
      ["No automatic filing","TaxEase does not submit returns or payments."],
      ["Estimate only","Results do not replace an official assessment or professional tax advice."]
    ]
  }
};

const categoryInfo = {
  "Student":["🎓","You selected Student. TaxEase can help you learn basic tax concepts and understand taxes before or while you begin earning income."],
  "Employee":["💼","You selected Employee. Compensation income, withholding, and annual income-tax concepts may be especially relevant."],
  "Freelancer":["💻","You selected Freelancer. Income tax, business taxes, and withholding may be relevant depending on your registration and activity."],
  "Professional":["🧑‍💼","You selected Professional. Income tax and business-tax rules may apply depending on your professional practice."],
  "Self-employed individual":["🛠️","You selected Self-employed individual. Income tax and business taxes may apply depending on your registration, sales, and tax option."],
  "Online seller":["🛍️","You selected Online seller. Income and business-tax rules may apply to online selling depending on your circumstances."],
  "Small business owner":["🏪","You selected Small business owner. Income tax, VAT or Section 116 percentage tax, withholding, and other business obligations may be relevant."]
};

const taxConfigs = {
  individual:{
    icon:"👤", title:"Individual Income Tax",
    fields:[
      {type:"select",id:"individualMode",label:"Which situation matches you?",icon:"👤",options:[
        ["graduated","I already know my annual taxable income — use graduated rates"],
        ["pure8","I am purely self-employed/professional and officially elected the 8% option"],
        ["mixed8","I earn compensation + business/professional income and elected 8% for the business part"]
      ],hint:"If you are not sure whether you officially elected the 8% option, use graduated rates or verify your BIR registration/return."},
      {type:"number",id:"taxableIncome",label:"Annual taxable income",prefix:"₱",placeholder:"e.g. 450000",hint:"Enter taxable income, not simply gross salary.",showFor:"graduated"},
      {type:"number",id:"pure8Gross",label:"Annual gross sales / receipts + other non-operating income",prefix:"₱",placeholder:"e.g. 900000",showFor:"pure8"},
      {type:"number",id:"mixedComp",label:"Annual taxable compensation income",prefix:"₱",placeholder:"e.g. 400000",showFor:"mixed8"},
      {type:"number",id:"mixedBiz",label:"Annual business/professional gross sales / receipts + other non-operating income",prefix:"₱",placeholder:"e.g. 500000",hint:"For mixed income, the ₱250,000 reduction is not applied to this business portion.",showFor:"mixed8"}
    ]
  },

  corporate:{
    icon:"🏢", title:"Corporate Income Tax — General Domestic Corporation",
    fields:[
      {type:"number",id:"corpTaxable",label:"Net taxable income",prefix:"₱",placeholder:"e.g. 3000000"},
      {type:"number",id:"corpAssets",label:"Total assets excluding the land where office/plant/equipment are situated",prefix:"₱",placeholder:"e.g. 80000000"},
      {type:"select",id:"mcitApplies",label:"Has the corporation reached the 4th taxable year after operations started?",icon:"📆",options:[
        ["no","No — do not compare with MCIT"],
        ["yes","Yes — compare regular income tax with 2% MCIT"]
      ]},
      {type:"number",id:"corpGross",label:"Gross income for MCIT purposes",prefix:"₱",placeholder:"e.g. 5000000",hint:"Shown only when MCIT comparison is selected.",showFor:"yes"}
    ],
    note:"This calculator covers a general domestic corporation only. Special RBE/incentive regimes are not included."
  },

  vat:{
    icon:"🧾", title:"Value-Added Tax (VAT)",
    fields:[
      {type:"select",id:"vatBasis",label:"Does the sales amount already include VAT?",icon:"🧾",options:[
        ["exclusive","No — sales are VAT-exclusive"],
        ["inclusive","Yes — sales already include 12% VAT"]
      ]},
      {type:"number",id:"vatSales",label:"Taxable sales amount",prefix:"₱",placeholder:"e.g. 112000"},
      {type:"number",id:"inputVat",label:"Allowable input VAT",prefix:"₱",placeholder:"e.g. 5000",value:"0"}
    ],
    note:"Zero-rated, exempt, withholding-VAT, and special transactions require different treatment and are not computed here."
  },

  percentage:{
    icon:"🧾", title:"Section 116 Percentage Tax",
    fields:[
      {type:"select",id:"sec116Eligible",label:"Are you subject to the general Section 116 non-VAT percentage tax?",icon:"✅",options:[
        ["yes","Yes"],
        ["no","No / I am not sure"]
      ]},
      {type:"number",id:"grossSales",label:"Gross quarterly sales",prefix:"₱",placeholder:"e.g. 100000"}
    ],
    note:"This calculator is only for the general Section 116 case, which uses 3%."
  },

  capitalReal:{
    icon:"🏠", title:"Capital Gains Tax — Philippine Real Property",
    fields:[
      {type:"select",id:"realCapital",label:"Is the property classified as a capital asset?",icon:"🏠",options:[
        ["yes","Yes — capital asset"],
        ["no","No / I am not sure"]
      ]},
      {type:"number",id:"sellingPrice",label:"Gross selling price",prefix:"₱",placeholder:"e.g. 2500000"},
      {type:"number",id:"zonalValue",label:"BIR zonal value",prefix:"₱",placeholder:"e.g. 2700000"},
      {type:"number",id:"assessorValue",label:"Fair market value per tax declaration / assessor",prefix:"₱",placeholder:"e.g. 2600000"}
    ],
    note:"This does not cover ordinary assets, principal-residence exemption, or the government-buyer special option."
  },

  capitalShares:{
    icon:"📈", title:"Capital Gains Tax — Unlisted Shares",
    fields:[
      {type:"number",id:"netCapitalGain",label:"Net capital gain",prefix:"₱",placeholder:"e.g. 200000",hint:"For shares of a domestic corporation not traded through a local or foreign stock exchange."}
    ]
  },

  estate:{
    icon:"📜", title:"Estate Tax",
    fields:[
      {type:"select",id:"estatePeriod",label:"When did the decedent die?",icon:"📜",options:[
        ["current","January 1, 2018 or later"],
        ["old","Before January 1, 2018"]
      ]},
      {type:"number",id:"netEstate",label:"Net taxable estate",prefix:"₱",placeholder:"e.g. 3000000",hint:"Enter net taxable estate after applicable deductions have already been determined."}
    ]
  },

  donor:{
    icon:"🎁", title:"Donor's Tax",
    fields:[
      {type:"number",id:"totalGifts",label:"Total net taxable gifts for the calendar year",prefix:"₱",placeholder:"e.g. 500000",hint:"Do not include donations that are legally exempt from donor's tax."}
    ]
  },

  dst:{
    icon:"📄", title:"Documentary Stamp Tax — Real Property Conveyance",
    fields:[
      {type:"number",id:"dstConsideration",label:"Consideration / selling price",prefix:"₱",placeholder:"e.g. 2000000"},
      {type:"number",id:"dstFMV",label:"Fair market value",prefix:"₱",placeholder:"e.g. 2200000",hint:"The higher amount is used for this supported Section 196 computation."}
    ]
  },

  withholding:{
    icon:"✂️", title:"Common Expanded Withholding Tax",
    fields:[
      {type:"select",id:"withholdingType",label:"What type of payment is this?",icon:"✂️",options:[
        ["profInd5","Professional/talent fee — individual, current-year gross income ≤ ₱3M and not VAT-registered (5%)"],
        ["profInd10","Professional/talent fee — individual, > ₱3M or VAT-registered (10%)"],
        ["profCorp10","Professional/talent fee — non-individual, current-year gross income ≤ ₱720,000 (10%)"],
        ["profCorp15","Professional/talent fee — non-individual, current-year gross income > ₱720,000 (15%)"],
        ["rent","Covered business rental (5%)"],
        ["contractor","Prime contractor / sub-contractor payment (2%)"],
        ["topGoods","Top withholding agent — local/resident supplier of goods (1%)"],
        ["topServices","Top withholding agent — local/resident supplier of services (2%)"],
        ["creditCard","Credit-card company payment to business entity (0.5%)"],
        ["marketplace","E-marketplace / digital financial service remittance where withholding applies (0.5%)"]
      ],hint:"Choose only a description that clearly matches the payment. Other withholding categories can use different rules."},
      {type:"number",id:"withholdingBase",label:"Gross payment / withholding base",prefix:"₱",placeholder:"e.g. 50000"}
    ]
  },

  excise:{
    icon:"🥤", title:"Sweetened Beverage Excise Tax",
    fields:[
      {type:"select",id:"sweetener",label:"Which sweetener is used?",icon:"🥤",options:[
        ["regular","Caloric/non-caloric sweetener without HFCS — ₱6 per liter"],
        ["hfcs","HFCS alone or combined with other sweeteners — ₱12 per liter"],
        ["exempt","Pure coconut sap sugar or pure steviol glycosides — exempt"]
      ]},
      {type:"number",id:"liters",label:"Total covered beverage volume",suffix:"liters",placeholder:"e.g. 100"}
    ],
    note:"Other excise products use different product-specific rules and are intentionally not guessed here."
  }
};

const withholdingRates = {
  profInd5:{rate:.05,label:"5%"},
  profInd10:{rate:.10,label:"10%"},
  profCorp10:{rate:.10,label:"10%"},
  profCorp15:{rate:.15,label:"15%"},
  rent:{rate:.05,label:"5%"},
  contractor:{rate:.02,label:"2%"},
  topGoods:{rate:.01,label:"1%"},
  topServices:{rate:.02,label:"2%"},
  creditCard:{rate:.005,label:"0.5%"},
  marketplace:{rate:.005,label:"0.5%"}
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const menuBtn = $("#menuBtn");
const mainNav = $("#mainNav");
menuBtn.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
$$(".main-nav a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
}));

function renderFeature(key, scroll=false){
  const item = featureData[key];
  $("#detailIcon").textContent = item.icon;
  $("#detailTitle").textContent = item.title;
  $("#detailIntro").textContent = item.intro;
  $("#detailAction").textContent = item.action;
  $("#detailAction").dataset.target = item.target;
  $("#detailContent").innerHTML = item.cards.map(([t,p]) =>
    `<article class="detail-box"><strong>${t}</strong><p>${p}</p></article>`
  ).join("");
  $$(".feature-card").forEach(b => b.classList.toggle("active", b.dataset.feature === key));
  if(scroll && innerWidth < 651) $("#featureDetail").scrollIntoView({behavior:"smooth",block:"start"});
}
$$(".feature-card").forEach(b => b.addEventListener("click", () => renderFeature(b.dataset.feature,true)));
$("#detailAction").addEventListener("click", e => {
  const target = document.getElementById(e.currentTarget.dataset.target);
  if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
});
renderFeature("tax101");

function updateCategory(value, syncCalculator=true){
  const info = categoryInfo[value];
  $("#categoryLeading").textContent = info ? info[0] : "👤";
  $("#categoryVisual").textContent = info ? info[0] : "👤";
  $("#categoryPanelTitle").textContent = value || "No category selected";
  $("#categoryMessage").textContent = info ? info[1] : "Select a category to see a short guide.";
  if(syncCalculator){
    $("#calculatorCategory").value = value;
    $("#calculatorCategoryIcon").textContent = info ? info[0] : "👤";
  }
}
$("#categorySelectMain").addEventListener("change", e => {
  updateCategory(e.target.value,true);
  if(e.target.value) showToast(`${e.target.value} selected.`, categoryInfo[e.target.value][0]);
});
$("#calculatorCategory").addEventListener("change", e => {
  const info = categoryInfo[e.target.value];
  $("#calculatorCategoryIcon").textContent = info ? info[0] : "👤";
  $("#categorySelectMain").value = e.target.value;
  updateCategory(e.target.value,false);
});

function money(v){
  return new Intl.NumberFormat("en-PH",{
    style:"currency",currency:"PHP",minimumFractionDigits:2,maximumFractionDigits:2
  }).format(v || 0);
}
function num(id){
  const el = document.getElementById(id);
  if(!el) return 0;
  const n = Number(el.value);
  return Number.isFinite(n) ? n : NaN;
}
function val(id){
  const el = document.getElementById(id);
  return el ? el.value : "";
}
function validNums(arr){
  return arr.every(n => Number.isFinite(n) && n >= 0);
}

function graduatedTax(t){
  if(t <= 250000) return {tax:0, rule:"0% because taxable income is not over ₱250,000"};
  if(t <= 400000) return {tax:(t-250000)*.15, rule:"15% of the excess over ₱250,000"};
  if(t <= 800000) return {tax:22500+(t-400000)*.20, rule:"₱22,500 + 20% of the excess over ₱400,000"};
  if(t <= 2000000) return {tax:102500+(t-800000)*.25, rule:"₱102,500 + 25% of the excess over ₱800,000"};
  if(t <= 8000000) return {tax:402500+(t-2000000)*.30, rule:"₱402,500 + 30% of the excess over ₱2,000,000"};
  return {tax:2202500+(t-8000000)*.35, rule:"₱2,202,500 + 35% of the excess over ₱8,000,000"};
}

function selectField(f){
  return `<label class="field-group">
    <span>${f.label}</span>
    <div class="dynamic-select">
      <span class="dynamic-select-icon">${f.icon || "✨"}</span>
      <select id="${f.id}">
        ${f.options.map(([v,t]) => `<option value="${v}">${t}</option>`).join("")}
      </select>
      <span class="dynamic-chevron">⌄</span>
    </div>
    ${f.hint ? `<small>${f.hint}</small>` : ""}
  </label>`;
}

function numberField(f){
  const prefix = f.prefix ? `<span>${f.prefix}</span>` : "";
  const suffix = f.suffix ? `<span style="padding:0 14px 0 0;color:#837a66;font-weight:800">${f.suffix}</span>` : "";
  return `<label class="field-group${f.showFor ? " conditional-hidden" : ""}" ${f.showFor ? `data-show-for="${f.showFor}"` : ""}>
    <span>${f.label}</span>
    <div class="${f.prefix || f.suffix ? "money-field" : "plain-field"}">
      ${prefix}<input id="${f.id}" type="number" min="0" step="any" inputmode="decimal"
      placeholder="${f.placeholder || ""}" ${f.value !== undefined ? `value="${f.value}"` : ""}>${suffix}
    </div>
    ${f.hint ? `<small>${f.hint}</small>` : ""}
  </label>`;
}
function fieldHTML(f){ return f.type === "select" ? selectField(f) : numberField(f); }

function updateConditionalFields(type){
  if(type === "individual"){
    const mode = val("individualMode");
    $$("#dynamicFields [data-show-for]").forEach(el =>
      el.classList.toggle("conditional-hidden", el.dataset.showFor !== mode)
    );
  }
  if(type === "corporate"){
    const mode = val("mcitApplies");
    $$("#dynamicFields [data-show-for]").forEach(el =>
      el.classList.toggle("conditional-hidden", el.dataset.showFor !== mode)
    );
  }
}

function setTaxType(type){
  const c = taxConfigs[type];
  $("#taxTypeSelect").value = type;
  $("#taxTypeIcon").textContent = c.icon;
  $("#dynamicFields").innerHTML =
    (c.note ? `<div class="guided-note"><strong>Scope:</strong> ${c.note}</div>` : "") +
    c.fields.map(fieldHTML).join("");
  $("#resultTitle").textContent = c.title;
  $("#resultIcon").textContent = c.icon;
  $("#resultAmount").textContent = "₱0.00";
  $("#resultSubtext").textContent = "Enter the requested information, then calculate.";
  $("#resultMetrics").innerHTML =
    `<div><span>Tax base</span><strong>₱0.00</strong></div><div><span>Rate / rule</span><strong>Automatic</strong></div>`;
  $("#calculationSteps").innerHTML =
    `<li>Answer the questions shown on the left.</li><li>TaxEase automatically applies the supported rate or tax table.</li><li>Click <strong>Calculate Estimate</strong>.</li>`;
  $("#formMessage").textContent = "";
  $$(".tax-chip").forEach(b => b.classList.toggle("active", b.dataset.tax === type));
  updateConditionalFields(type);
}
$("#taxTypeSelect").addEventListener("change", e => setTaxType(e.target.value));
$$(".tax-chip").forEach(b => b.addEventListener("click", () => setTaxType(b.dataset.tax)));
document.addEventListener("change", e => {
  if(e.target.id === "individualMode") updateConditionalFields("individual");
  if(e.target.id === "mcitApplies") updateConditionalFields("corporate");
});
setTaxType("individual");

function resultData(type){
  if(type === "individual"){
    const mode = val("individualMode");

    if(mode === "graduated"){
      const taxable = num("taxableIncome");
      if(!validNums([taxable])) throw new Error("Please enter a valid annual taxable income.");
      const r = graduatedTax(taxable);
      return {
        tax:r.tax, base:taxable, rule:r.rule,
        sub:"Annual individual income-tax estimate using the BIR graduated table effective January 1, 2023 onward.",
        steps:[
          `Annual taxable income: <strong>${money(taxable)}</strong>`,
          `Rule used: <strong>${r.rule}</strong>`,
          `Estimated annual income tax: <strong>${money(r.tax)}</strong>`
        ]
      };
    }

    if(mode === "pure8"){
      const gross = num("pure8Gross");
      if(!validNums([gross])) throw new Error("Please enter valid annual gross sales/receipts.");
      if(gross > 3000000) throw new Error("This 8% calculator is limited to the BIR 1701A-qualified case with gross sales/receipts and other non-operating income not exceeding ₱3,000,000.");
      const base = Math.max(0, gross - 250000);
      const tax = base * .08;
      return {
        tax, base, rule:"8% of gross sales/receipts and other non-operating income above ₱250,000",
        sub:"For a qualified purely self-employed/professional taxpayer who officially elected the 8% option.",
        steps:[
          `Annual gross sales/receipts + other non-operating income: <strong>${money(gross)}</strong>`,
          `Less ₱250,000 reduction: <strong>${money(Math.min(gross,250000))}</strong>`,
          `8% tax base: <strong>${money(base)}</strong>`,
          `Estimated income tax: <strong>${money(tax)}</strong>`
        ]
      };
    }

    const comp = num("mixedComp");
    const biz = num("mixedBiz");
    if(!validNums([comp,biz])) throw new Error("Please enter valid compensation and business/professional amounts.");
    if(biz > 3000000) throw new Error("This mixed-income 8% calculator is limited to the supported BIR case where business/professional gross sales/receipts do not exceed ₱3,000,000.");
    const compResult = graduatedTax(comp);
    const businessTax = biz * .08;
    const tax = compResult.tax + businessTax;

    return {
      tax, base:comp + biz,
      rule:"Graduated tax on taxable compensation + 8% on business/professional gross income",
      sub:"Mixed-income estimate where the 8% option was officially elected for the business/professional portion.",
      steps:[
        `Taxable compensation income: <strong>${money(comp)}</strong>`,
        `Tax on compensation: <strong>${money(compResult.tax)}</strong> (${compResult.rule})`,
        `Business/professional gross income: <strong>${money(biz)}</strong>`,
        `8% business tax: <strong>${money(businessTax)}</strong> — no ₱250,000 reduction for mixed income`,
        `Estimated combined income tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "corporate"){
    const taxable = num("corpTaxable");
    const assets = num("corpAssets");
    const mcitChoice = val("mcitApplies");

    if(!validNums([taxable,assets])) throw new Error("Please enter valid corporate income and asset amounts.");

    const rate = (taxable <= 5000000 && assets <= 100000000) ? .20 : .25;
    const regular = taxable * rate;

    if(mcitChoice === "yes"){
      const gross = num("corpGross");
      if(!validNums([gross])) throw new Error("Please enter gross income for the MCIT comparison.");
      const mcit = gross * .02;
      const tax = Math.max(regular, mcit);
      const useMCIT = mcit > regular;

      return {
        tax,
        base:useMCIT ? gross : taxable,
        rule:useMCIT ? "2% MCIT because it is higher than regular corporate income tax" : `${(rate*100).toFixed(0)}% regular corporate income tax`,
        sub:"General domestic-corporation estimate with the 20%/25% regular-rate test and a 2% MCIT comparison.",
        steps:[
          `Net taxable income: <strong>${money(taxable)}</strong>`,
          `Total assets entered: <strong>${money(assets)}</strong>`,
          `Regular rate selected: <strong>${(rate*100).toFixed(0)}%</strong>`,
          `Regular corporate income tax: <strong>${money(regular)}</strong>`,
          `2% MCIT on gross income ${money(gross)}: <strong>${money(mcit)}</strong>`,
          `Higher tax used: <strong>${money(tax)}</strong>`
        ]
      };
    }

    return {
      tax:regular, base:taxable, rule:`${(rate*100).toFixed(0)}% regular corporate income tax`,
      sub:"General domestic-corporation estimate before any MCIT comparison.",
      steps:[
        `Net taxable income: <strong>${money(taxable)}</strong>`,
        `Total assets entered: <strong>${money(assets)}</strong>`,
        `Automatic rate: <strong>${(rate*100).toFixed(0)}%</strong>`,
        `Estimated corporate income tax: <strong>${money(regular)}</strong>`
      ]
    };
  }

  if(type === "vat"){
    const basis = val("vatBasis");
    const sales = num("vatSales");
    const input = num("inputVat");
    if(!validNums([sales,input])) throw new Error("Please enter valid VAT amounts.");

    const output = basis === "inclusive" ? sales * (12/112) : sales * .12;
    const base = basis === "inclusive" ? sales / 1.12 : sales;
    const payable = Math.max(0, output - input);

    return {
      tax:payable, base, rule:"12% VAT",
      sub:input > output
        ? "Input VAT entered exceeds output VAT; estimated VAT payable is ₱0.00. Any excess input VAT treatment depends on applicable BIR rules."
        : "Simplified VAT payable estimate: output VAT less allowable input VAT entered.",
      steps:[
        `Sales entered: <strong>${money(sales)}</strong>`,
        `Treatment: <strong>${basis === "inclusive" ? "VAT-inclusive — VAT extracted using 12/112" : "VAT-exclusive — output VAT computed at 12%"}</strong>`,
        `Output VAT: <strong>${money(output)}</strong>`,
        `Less allowable input VAT entered: <strong>${money(input)}</strong>`,
        `Estimated VAT payable: <strong>${money(payable)}</strong>`
      ]
    };
  }

  if(type === "percentage"){
    if(val("sec116Eligible") !== "yes") throw new Error("Use this calculator only if you are subject to the general Section 116 non-VAT percentage tax.");
    const base = num("grossSales");
    if(!validNums([base])) throw new Error("Please enter valid gross quarterly sales.");
    const tax = base * .03;
    return {
      tax, base, rule:"3% of gross quarterly sales",
      sub:"General Section 116 percentage-tax estimate.",
      steps:[
        `Gross quarterly sales: <strong>${money(base)}</strong>`,
        `Automatic Section 116 rate: <strong>3%</strong>`,
        `Estimated percentage tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "capitalReal"){
    if(val("realCapital") !== "yes") throw new Error("The 6% capital-gains calculator applies only when the Philippine real property is classified as a capital asset.");
    const selling = num("sellingPrice");
    const zonal = num("zonalValue");
    const assessor = num("assessorValue");
    if(!validNums([selling,zonal,assessor])) throw new Error("Please enter valid property values.");

    const base = Math.max(selling,zonal,assessor);
    const tax = base * .06;

    return {
      tax, base,
      rule:"6% of the highest of selling price, BIR zonal value, or assessor fair market value",
      sub:"Supported Philippine real-property capital-asset calculation.",
      steps:[
        `Gross selling price: <strong>${money(selling)}</strong>`,
        `BIR zonal value: <strong>${money(zonal)}</strong>`,
        `Assessor fair market value: <strong>${money(assessor)}</strong>`,
        `Highest value used as tax base: <strong>${money(base)}</strong>`,
        `Automatic rate: <strong>6%</strong>`,
        `Estimated capital gains tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "capitalShares"){
    const base = num("netCapitalGain");
    if(!validNums([base])) throw new Error("Please enter a valid net capital gain.");
    const tax = base * .15;
    return {
      tax, base, rule:"15% of net capital gain",
      sub:"For shares of a domestic corporation not traded through a local or foreign stock exchange.",
      steps:[
        `Net capital gain: <strong>${money(base)}</strong>`,
        `Automatic rate: <strong>15%</strong>`,
        `Estimated capital gains tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "estate"){
    if(val("estatePeriod") === "old") throw new Error("This website does not calculate pre-2018 estate tax because older estates use different historical rules.");
    const base = num("netEstate");
    if(!validNums([base])) throw new Error("Please enter a valid net taxable estate.");
    const tax = base * .06;
    return {
      tax, base, rule:"6% of net taxable estate",
      sub:"Current-rate estate-tax estimate for a decedent who died on or after January 1, 2018.",
      steps:[
        `Net taxable estate: <strong>${money(base)}</strong>`,
        `Automatic rate: <strong>6%</strong>`,
        `Estimated estate tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "donor"){
    const gifts = num("totalGifts");
    if(!validNums([gifts])) throw new Error("Please enter a valid taxable gift amount.");
    const base = Math.max(0, gifts - 250000);
    const tax = base * .06;
    return {
      tax, base, rule:"6% after the ₱250,000 annual exempt amount",
      sub:"Current donor's-tax estimate for taxable gifts under the TRAIN-era rule.",
      steps:[
        `Total net taxable gifts entered: <strong>${money(gifts)}</strong>`,
        `Less annual exempt amount: <strong>${money(Math.min(gifts,250000))}</strong>`,
        `Taxable gifts after exemption: <strong>${money(base)}</strong>`,
        `Automatic rate: <strong>6%</strong>`,
        `Estimated donor's tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "dst"){
    const consideration = num("dstConsideration");
    const fmv = num("dstFMV");
    if(!validNums([consideration,fmv])) throw new Error("Please enter valid real-property values.");

    const base = Math.max(consideration,fmv);
    const units = Math.ceil(base / 1000);
    const tax = units * 15;

    return {
      tax, base, rule:"₱15 per ₱1,000 or fractional part",
      sub:"Supported documentary-stamp calculation for a deed of sale/conveyance of real property.",
      steps:[
        `Consideration / selling price: <strong>${money(consideration)}</strong>`,
        `Fair market value: <strong>${money(fmv)}</strong>`,
        `Higher value used as base: <strong>${money(base)}</strong>`,
        `Tax units: <strong>${units.toLocaleString()} × ₱15</strong>`,
        `Estimated DST: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "withholding"){
    const code = val("withholdingType");
    const item = withholdingRates[code];
    const base = num("withholdingBase");
    if(!item) throw new Error("Please choose a supported payment type.");
    if(!validNums([base])) throw new Error("Please enter a valid payment amount.");

    const tax = base * item.rate;
    return {
      tax, base, rule:`${item.label} expanded withholding tax`,
      sub:"Selected common expanded-withholding scenario. Other payment types may use different rates.",
      steps:[
        `Gross payment / withholding base: <strong>${money(base)}</strong>`,
        `Automatic rate for the selected payment: <strong>${item.label}</strong>`,
        `Estimated tax to withhold: <strong>${money(tax)}</strong>`
      ]
    };
  }

  if(type === "excise"){
    const kind = val("sweetener");
    const liters = num("liters");
    if(!validNums([liters])) throw new Error("Please enter a valid number of liters.");

    const perLiter = kind === "hfcs" ? 12 : kind === "exempt" ? 0 : 6;
    const tax = liters * perLiter;
    const rule = perLiter === 0 ? "Exempt for the selected sweetener" : `₱${perLiter} per liter`;

    return {
      tax, base:liters, baseLabel:"Volume", baseDisplay:`${liters.toLocaleString()} L`,
      rule, sub:"Sweetened-beverage excise calculation only; other excise products use different rules.",
      steps:[
        `Covered beverage volume: <strong>${liters.toLocaleString()} liters</strong>`,
        `Automatic rule: <strong>${rule}</strong>`,
        `Estimated excise tax: <strong>${money(tax)}</strong>`
      ]
    };
  }

  throw new Error("This tax type is not supported.");
}

$("#taxForm").addEventListener("submit", e => {
  e.preventDefault();
  $("#formMessage").textContent = "";
  const type = $("#taxTypeSelect").value;

  try{
    const r = resultData(type);
    $("#resultAmount").textContent = money(r.tax);
    $("#resultSubtext").textContent = r.sub;
    $("#resultMetrics").innerHTML = `
      <div><span>${r.baseLabel || "Tax base"}</span><strong>${r.baseDisplay || money(r.base)}</strong></div>
      <div><span>Rate / rule used</span><strong>${r.rule}</strong></div>`;
    $("#calculationSteps").innerHTML = r.steps.map(s => `<li>${s}</li>`).join("");
    showToast("Estimate calculated.","🧮");

    if(innerWidth < 981){
      $("#resultCard").scrollIntoView({behavior:"smooth",block:"center"});
    }
  }catch(err){
    $("#formMessage").textContent = err.message;
  }
});

$("#resetCalc").addEventListener("click", () => {
  setTaxType($("#taxTypeSelect").value);
  $("#calculatorCategory").value = "";
  $("#calculatorCategoryIcon").textContent = "👤";
});

const STORAGE_KEY = "taxease-reminders-v5";
function readReminders(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []}
  catch{return []}
}
function writeReminders(items){ localStorage.setItem(STORAGE_KEY,JSON.stringify(items)); }
function safe(v){
  return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
    .replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function renderReminders(){
  const list = readReminders().sort((a,b)=>a.date.localeCompare(b.date));
  const box = $("#reminderList");
  if(!list.length){
    box.innerHTML = `<div class="empty-state"><span>📭</span><p>No reminders yet.</p></div>`;
    return;
  }
  box.innerHTML = list.map(item=>{
    const d = new Date(`${item.date}T00:00:00`);
    const day = d.toLocaleDateString("en-PH",{day:"2-digit"});
    const mon = d.toLocaleDateString("en-PH",{month:"short"});
    const full = d.toLocaleDateString("en-PH",{year:"numeric",month:"long",day:"numeric"});
    return `<div class="reminder-item">
      <div class="date-box"><strong>${day}</strong><small>${mon}</small></div>
      <div class="reminder-copy"><strong>${safe(item.name)}</strong><small>${full}</small></div>
      <button type="button" class="delete-reminder" data-id="${item.id}" aria-label="Delete reminder">×</button>
    </div>`;
  }).join("");
}

$("#reminderForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#reminderName").value.trim();
  const date = $("#reminderDate").value;
  if(!name || !date) return;
  const items = readReminders();
  items.push({id:Date.now(),name,date});
  writeReminders(items);
  e.target.reset();
  renderReminders();
  showToast("Reminder saved.","📅");
});

$("#reminderList").addEventListener("click", e => {
  const b = e.target.closest(".delete-reminder");
  if(!b) return;
  writeReminders(readReminders().filter(x => x.id !== Number(b.dataset.id)));
  renderReminders();
  showToast("Reminder removed.","✓");
});

$("#premiumButton").addEventListener("click", () =>
  showToast("Premium: advanced calculations, personalized tax guides, reminders, and tax updates for ₱49/month.","⭐")
);

let toastTimer;
function showToast(message,icon="✓"){
  clearTimeout(toastTimer);
  $("#toastIcon").textContent = icon;
  $("#toastText").textContent = message;
  $("#toast").classList.add("show");
  toastTimer = setTimeout(()=>$("#toast").classList.remove("show"),2600);
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});
$$(".reveal").forEach(el=>observer.observe(el));

renderReminders();
