# TaxEase Website v5

This version returns to the **v3 Taxpayer Category behavior and layout**.

## What was corrected
- The Taxpayer Category remains a normal selectable category just like v3.
- It is NOT replaced by the v4 custom category system.
- The category dropdown now uses a stronger light-yellow/cream gradient, hover effect, focus glow, icon area, and colored options instead of looking plain white.
- The calculator is simpler for beginners: the user chooses a situation and TaxEase applies the supported rate automatically.
- No user needs to manually know or type a tax percentage.
- Unsupported or ambiguous cases are blocked instead of guessed.

## Supported calculator cases
1. Individual Income Tax
   - 2023-onward graduated tax table
   - qualified 8% purely self-employed/professional option
   - mixed-income compensation + qualified 8% business/professional portion
2. General Domestic Corporate Income Tax
   - 20% / 25% regular rate test
   - optional 2% MCIT comparison beginning with the applicable fourth-taxable-year condition
3. VAT
   - 12% output VAT
   - VAT-inclusive calculation uses 12/112
   - simplified payable = output VAT less allowable input VAT entered
4. General Section 116 Percentage Tax
   - 3% of gross quarterly sales
5. Capital Gains Tax — Philippine Real Property
   - 6% of the highest of selling price, BIR zonal value, or assessor fair market value
   - only when the property is a capital asset
6. Capital Gains Tax — Unlisted Shares
   - 15% of net capital gain for supported domestic-corporation shares not traded through a local or foreign stock exchange
7. Estate Tax
   - 6% of net taxable estate for deaths on or after January 1, 2018
8. Donor's Tax
   - 6% after the ₱250,000 annual exempt amount
9. Documentary Stamp Tax — Real Property Conveyance
   - ₱15 per ₱1,000 or fractional part of the applicable higher base
10. Common Expanded Withholding Tax
   - selected common payment types only; rate is chosen automatically
11. Sweetened Beverage Excise Tax
   - ₱6/liter, ₱12/liter for HFCS cases, or exempt for the supported sweetener choices

## Accuracy approach
TaxEase is designed to be accurate **within the exact supported scenario shown in the form**. It does not pretend that one formula covers every Philippine tax transaction.

For actual filing, the taxpayer may still need additional information such as exemptions, credits, BIR registration status, transaction classification, supporting documents, or special tax regimes.

## Official BIR materials checked during this revision
- Current BIR Form 1701-MS / 1701A materials and 2023-onward individual tax table
- BIR Revenue Regulations No. 7-2025 for corporate income tax rates
- BIR VAT materials for the 12% VAT rate
- BIR percentage-tax materials for the general Section 116 case
- BIR Form 1706 / capital-gains materials
- BIR transfer-tax regulations for estate and donor's tax
- BIR Form 2000-OT for real-property documentary stamp tax
- BIR expanded-withholding materials
- BIR sweetened-beverage excise regulations

## Files
- index.html
- style.css
- script.js
- README.md

## GitHub Pages
Extract the ZIP and upload all four files to the root of your GitHub repository. Then enable GitHub Pages from the `main` branch and `/ (root)`.

No XAMPP, PHP, MySQL, npm, or database is required.
