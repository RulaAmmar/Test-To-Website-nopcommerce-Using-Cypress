/// <reference types="cypress"/>  

it("Visit the site",()=>{
cy.visit("/")
cy.visit("/login")
cy.contains("h1","Sign in")
cy.get("h1.text-xs-center.ng-binding")
cy.get(".row > div > h1")
// *******
cy.contains("Need an account?")
cy.contains("a","Need an account?")
cy.get("p.text-xs-center :nth-child(2)")
//******
cy.get("[type=text]")
cy.get("[placeholder=Email]")
cy.get("[ng-disabled='$ctrl.isSubmitting'] fieldset:nth-child(2) input")
cy.get("[ng-model='$ctrl.formData.email']")
//******
cy.get("[type=password]")
cy.get("[placeholder=Password]")
cy.get("[ng-disabled='$ctrl.isSubmitting'] fieldset:nth-child(3) input")
cy.get("[ng-model='$ctrl.formData.password']")
//****** 
cy.get("[type='submit']")
cy.get("button[ng-bind='$ctrl.title']")
cy.get("[ng-disabled='$ctrl.isSubmitting']").find("button")
//**** */
cy.get(".navbar-brand")
cy.contains("a","conduit")
//** */
cy.contains("a","Home")
cy.get("ul[show-authed='false'] li:first-child a")
//** */
cy.contains("a","Sign up") 
cy.get("ul[show-authed='false'] li:last-child a")
cy.get("ul[show-authed='false'] li a")
//*** */
cy.contains("h1","conduit")
cy.get(".banner div.container h1")
cy.get(".banner div.container").find("h1")
//*** */
cy.contains("A place to share your knowledge.")
cy.contains("p","A place to share")
cy.get(".banner div.container p")
//*** */
cy.contains("Global Feed")
cy.contains("a","Global Feed")
cy.get(".feed-toggle ul li:nth-child(2) a")
//** */
cy.contains("Popular Tags")
cy.contains("p","Popular Tags")
cy.get(".sidebar p")
cy.get(".sidebar > p")
//*** */
cy.contains("a","codebaseShow")
cy.get(".sidebar div:nth-child(2) a").eq(3)
cy.get(".sidebar div a:nth-child(4)")
//** */
cy.contains("a","deserunt")
cy.get(".sidebar div:nth-child(2) a").eq(9)
cy.get(".sidebar div a:nth-child(10)")
//** */
cy.contains("span","2167")
cy.contains("2167")
cy.get("ng-transclude").find("span").contains("2167")
cy.get("span").filter(":contains(Read more...)").eq(0)
cy.contains("span","Read more...") //على اساس انو كونتينز برجع اول عنصر بلاقيه 
//** */
cy.visit("/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863")
cy.contains(" the FTP pixel through the online SSL interface!")
//** */
cy.get(".banner > .container article-actions > .ng-isolate-scope > div a img")
cy.get(".banner > .container article-actions > .ng-isolate-scope > div .info a")
cy.get(".banner > .container article-actions> .ng-isolate-scope > div .info span")
cy.get(".banner > .container article-actions > .ng-isolate-scope > div > ng-transclude > span:last-child follow-btn button")
cy.get(" .banner > .container article-actions>.ng-isolate-scope>div >ng-transclude>span:last-child favorite-btn button *")
cy.contains("p","Quia quo")
//** */
cy.contains("rerum")
cy.get(".tag-list > li:first-child")
cy.get(".tag-list").find("li").first()
cy.get(".tag-list").find("li").contains("rerum")
//** */
cy.contains("quae")
cy.get(".tag-list > li:last-child")
cy.get(".tag-list").find("li").last()
cy.get(".tag-list").find("li").contains("quae")
})