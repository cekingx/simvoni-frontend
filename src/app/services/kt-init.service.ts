import { Injectable } from '@angular/core';

declare let KTLayoutHeader: any;
declare let KTLayoutHeaderMenu: any;
declare let KTLayoutHeaderTopbar: any;
declare let KTLayoutBrand: any;
declare let KTLayoutAside: any;
declare let KTLayoutAsideToggle: any;
declare let KTLayoutAsideMenu: any;
declare let KTLayoutSubheader: any;
declare let KTLayoutContent: any;
declare let KTLayoutFooter: any;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class KtInitService {

  constructor() { }

  initialize() {
    $(document).ready(function() {
      // Init Desktop & Mobile Headers
      KTLayoutHeader.init('kt_header', 'kt_header_mobile');

      // Init Header Menu
      KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');

      // Init Header Topbar For Mobile Mode
      KTLayoutHeaderTopbar.init('kt_header_mobile_topbar_toggle');

      // Init Brand Panel For Logo
      KTLayoutBrand.init('kt_brand');

      // Init Aside
      KTLayoutAside.init('kt_aside');

      // Init Aside Menu Toggle
      KTLayoutAsideToggle.init('kt_aside_toggle');

      // Init Aside Menu
      KTLayoutAsideMenu.init('kt_aside_menu');

      // Init Subheader
      KTLayoutSubheader.init('kt_subheader');

      // Init Content
      KTLayoutContent.init('kt_content');

      // Init Footer
      KTLayoutFooter.init('kt_footer');
    });
  }
}
