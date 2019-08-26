import { TitleService } from './shared/title.service';

import { NewsService } from './news-detail/news.service';

import { FinancialPlanningComponent } from './gst-registration/financial-planning.component';
import { BrowserModule,Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { CountersComponent } from './counters/counters.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { routingModule } from './app.route';
import { HomeComponent } from './home/home.component';
import { AboutSection2Component } from './about-section2/about-section2.component';
import { GstReturnFillingComponent } from './gst-return-filling/gst-return-filling.component';
import { GstMigrationComponent } from './gst-migration/gst-migration.component';
import { GstSoftwareToolComponent } from './gst-software-tool/gst-software-tool.component';
import { GstAssessmentComponent } from './gst-assessment/gst-assessment.component';
import { GstServiceProviderComponent } from './gst-service-provider/gst-service-provider.component';
import { GstTermsComponent } from './gst-terms/gst-terms.component';
import { GstPrivacyPolicyComponent } from './gst-privacy-policy/gst-privacy-policy.component';
import { GstNewsComponent } from './gst-news/gst-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ErpServicesComponent } from './ERP SERVICES/erp-services/erp-services.component';
import { HomeErpComponent } from './home-erp/home-erp.component';
import { BankTransactionsComponent } from './ERP SERVICES/bank-transactions/bank-transactions.component';
import { ErpProductsComponent } from './ERP SERVICES/erp-products/erp-products.component';
import { ErpPurchasesComponent } from './ERP SERVICES/erp-purchases/erp-purchases.component';
import { ErpSalesComponent } from './ERP SERVICES/erp-sales/erp-sales.component';
import { ErpAssetsComponent } from './ERP SERVICES/erp-assets/erp-assets.component';
import { ErpProfitLossComponent } from './ERP SERVICES/erp-profit-loss/erp-profit-loss.component';
import { ErpExpensesComponent } from './ERP SERVICES/erp-expenses/erp-expenses.component';
import { ErpUserManagementComponent } from './ERP SERVICES/erp-user-management/erp-user-management.component';
import { ErpVendorManagementComponent } from './ERP SERVICES/erp-vendor-management/erp-vendor-management.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    BannerComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    CountersComponent,
    TeamComponent,
    ContactComponent,
    BlogComponent,
    PartnersComponent,
    FooterTopComponent,
    FooterCopyrightComponent,
    AllServicesComponent,
    HomeComponent,
    AboutSection2Component,
    FinancialPlanningComponent,
    GstReturnFillingComponent,
    GstMigrationComponent,
    GstSoftwareToolComponent,
    GstAssessmentComponent,
    GstServiceProviderComponent,
    GstTermsComponent,
    GstPrivacyPolicyComponent,
    GstNewsComponent,
    NewsDetailComponent,
    ContactNavComponent,
    PricingComponent,
    AboutComponent,
    ErpServicesComponent,
    HomeErpComponent,
    BankTransactionsComponent,
    ErpProductsComponent,
    ErpPurchasesComponent,
    ErpSalesComponent,
    ErpAssetsComponent,
    ErpProfitLossComponent,
    ErpExpensesComponent,
    ErpUserManagementComponent,
    ErpVendorManagementComponent,
    
    
    
      ],
  imports: [
    BrowserModule,routingModule,HttpClientModule,BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},NewsService,TitleService],

  bootstrap: [AppComponent]
})
export class AppModule { }
