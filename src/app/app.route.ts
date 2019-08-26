import { ErpVendorManagementComponent } from './ERP SERVICES/erp-vendor-management/erp-vendor-management.component';
import { ErpUserManagementComponent } from './ERP SERVICES/erp-user-management/erp-user-management.component';
import { ErpProfitLossComponent } from './ERP SERVICES/erp-profit-loss/erp-profit-loss.component';
import { ErpSalesComponent } from './ERP SERVICES/erp-sales/erp-sales.component';
import { BankTransactionsComponent } from './ERP SERVICES/bank-transactions/bank-transactions.component';
import { ErpServicesComponent } from './ERP SERVICES/erp-services/erp-services.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { GstNewsComponent } from './gst-news/gst-news.component';
import { GstPrivacyPolicyComponent } from './gst-privacy-policy/gst-privacy-policy.component';
import { GstServiceProviderComponent } from './gst-service-provider/gst-service-provider.component';
import { GstAssessmentComponent } from './gst-assessment/gst-assessment.component';
import { GstMigrationComponent } from './gst-migration/gst-migration.component';
import { GstReturnFillingComponent } from './gst-return-filling/gst-return-filling.component';
import { FinancialPlanningComponent } from './gst-registration/financial-planning.component';
import { Routes, RouterModule } from '@angular/router'
import { AllServicesComponent } from './all-services/all-services.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from './partners/partners.component';
import { HomeComponent } from './home/home.component';
import { GstSoftwareToolComponent } from './gst-software-tool/gst-software-tool.component';
import { GstTermsComponent } from './gst-terms/gst-terms.component';
import { ErpProductsComponent } from './ERP SERVICES/erp-products/erp-products.component';
import { ErpPurchasesComponent } from './ERP SERVICES/erp-purchases/erp-purchases.component';
import { ErpAssetsComponent } from './ERP SERVICES/erp-assets/erp-assets.component';
import { ErpExpensesComponent } from './ERP SERVICES/erp-expenses/erp-expenses.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    data:{ title:'Complete GST solutions'}
  },
  {
    path:'services',
    component:AllServicesComponent,
    data: {title: 'AllServices'}
  },
  {
    path:'home',
    component:HomeComponent,
    data:{ title:'Complete GST solutions'}

  },
  {
    path:'GST-Registration',
    component:FinancialPlanningComponent,
    data: {title: 'GST Registration'}
  },
  {
    path:'GST-Retrurn-Filling',
    component:GstReturnFillingComponent,
    data: {title: 'GST Return Filling'}
  },
  {
    path:'GST-Migration',
    component:GstMigrationComponent,
    data: {title: 'GST Migration'}
  },
  {
    path:'GST-Software',
    component:GstSoftwareToolComponent,
    data: {title: 'GST Software'}

  },
  {
    path:'GST-Assessment',
    component:GstAssessmentComponent,
    data: {title: 'GST Assessment'}

  },
  {
    path:'GST-Service-Provider',
    component:GstServiceProviderComponent,
    data: {title: 'GST Service Provider'}

  },
  {
    path:'Terms',
    component:GstTermsComponent,
    data: {title: 'GST Terms'}

  },
  {
  path:'Privacy-Policy',
  component:GstPrivacyPolicyComponent,
  data: {title: 'GST Privacy Policy'}

  },
  {
    path:'News',
    component:GstNewsComponent,
    data: {title: 'GST News'}

  },
  {
    path:'News-Detail/:id',
    component:NewsDetailComponent,
    data: {title: 'GST News Detail'}

  },
  {
    path:'Contact-Nav',
    component:ContactNavComponent,
    data: {title: 'Contact'}

  },
  {
    path:'Pricing',
    component:PricingComponent,
    data: {title: 'Pricing'}

  },
 { 
    path:'ERP',
    component:ErpServicesComponent,
    data: {title: 'GST ERP services'}

  },
  { 
    path:'About',
    component:AboutComponent,
    data: {title: 'About'}

  },
  {
    path:'bank',
    component:BankTransactionsComponent,
    data: {title: 'Bank Transactions'}

  },
  {
    path:'ERP-Products',
    component:ErpProductsComponent,
    data: {title: 'ERP Products'}

  },
  {
    path:'ERP-Purchases',
    component:ErpPurchasesComponent,
    data: {title: 'ERP Purchases'}

  },
  {
    path:'ERP-Sales',
    component:ErpSalesComponent,
    data: {title: 'ERP Sales'}

  },
  {
    path:'ERP-Assets',
    component:ErpAssetsComponent,
    data: {title: 'ERP Assets'}

  },
  {
    path:'ERP-Profit-Loss',
    component:ErpProfitLossComponent,
    data: {title: 'ERP Profit & Loss'}

  },
  {
    path:'ERP-Expenses',
    component:ErpExpensesComponent,
    data: {title: 'ERP Expenses'}

  },
  {
    path:'ERP-User-Management',
    component:ErpUserManagementComponent,
    data: {title: 'ERP UserManagement'}

  },
  {
    path:'ERP-Vendor-Management',
    component:ErpVendorManagementComponent,
    data: {title: 'ERP VendorManagement'}

  }
];

export const routingModule = RouterModule.forRoot(routes, { useHash: true });

