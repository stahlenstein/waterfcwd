function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

if (window.location.href == "https://www.floydcountyga.gov/404-error") {
    console.log('uh hey');
    const oldContent = document.querySelector("#background > div.page-outer > div.container2-wrapper > div > div.content > div")
    oldContent.remove();

    const contentStart = document.querySelector("#background > div.page-outer > div.container2-wrapper > div > div.content");
    contentStart.innerHTML = `
    <div class="main-content-wrapper" style="
    float: left;
    width: 54%;
    margin-left: 23%;
    margin-right: -177%;
">
  <div class="main" role="main">
    <!-- <div class="above-content-wrapper"> -->
    <!--</div> -->
    <div class="content-outer-border">
      <div class="content-inner-border">
        <a id="main-content"></a>
        <div class="title-wrapper">
          <h1 id="page-title">Service Address Availability</h1>
        </div>
        <div class="region region-content">
          <div id="block-system-main" class="block block-system">
            <div class="block-header"></div>
            <div class="block-content">
              <div id="node-2515" class="node node-page clearfix" about="/water" typeof="sioc:Item foaf:Document">
                <span property="dc:title" content="Water" class="rdf-meta element-hidden"></span>
                <div class="content_main">
                  <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even" property="content:encoded">
                        <p>
    Use the search tool below to check for an address within Floyd County, Georgia to ensure that it has water service. You can also use the search tool below if you need to know whether your address is service by Floyd County Water or by Rome City Water.
</p>
                      </div>
                      <div class="topnav" data-dashlane-rid="bb4d48fc5f4d9a42" data-form-type="">
                    <input type="text" placeholder="Search.." data-dashlane-rid="78d1f03a1b6508ea" data-form-type="">      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="sidebar-wrapper sidebar-first-wrapper">
  <div class="region region-sidebar-first">
    <div id="block-block-13" class="block block-block">
      <div class="block-header"></div>
      <div class="block-content">
        <div class="view view-taxonomy-name-from-synonym view-id-taxonomy_name_from_synonym view-display-id-default view-dom-id-microsite_title">
          <div class="view-content">
            <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
              <div class="views-field views-field-name aha_ada_fixes_span">
                <div class="field-content aha_ada_fixes_span microsite_name">
                  <a href="/water" style="font-size: 38px;">Water</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="block-jquerymenu-175" class="block block-jquerymenu">
      <div class="block-header"></div>
      <div class="block-content">
        <!--[if IE]>
						<div class="ie">
							<![endif]-->
        <ul class="menu jquerymenu jquerymenu-processed">
          <li class="first">
            <a href="/water/page/pay-your-water-bill" title="Pay Your Water Bill">Pay Your Water Bill</a>
          </li>
          <li>
            <a href="/water/page/water-quality-report" title="Water Quality Report">Water Quality Report</a>
          </li>
          <li>
            <a href="/water/page/meter-installation" title="Meter Installation">Meter Installation</a>
          </li>
          <li>
            <a href="/water/page/service-requests" title="Service Requests">Service Requests</a>
          </li><li>
            <a href="/404-error" title="Service Address Availability">Service Address Availability</a>
          </li>
          <li>
            <a href="/water/page/water-billing-information" title="Water Billing Information">Water Billing Information</a>
          </li>
          <li class="last">
            <a href="/water/page/water-conservation-tips" title="Water Conservation Tips">Water Conservation Tips</a>
          </li>
        </ul>
        <!--[if IE]>
						</div>
						<![endif]-->
      </div>
    </div>
  </div>
  <div id="sidebar-second-catcher"></div>
</div>
<div class="sidebar-wrapper sidebar-second-wrapper" style="
    float: right;
    width: 23%;
    margin-right: 0%;
    margin-left: -23%;
">
  <div class="region region-sidebar-second">
    <div id="block-block-3" class="block block-block">
      <div class="block-header">
        <h2 style="font-size: 26px;">Contact Information</h2>
      </div>
      <div class="block-content">
        <div class="view view-contact-info-block view-id-contact_info_block view-display-id-block view-dom-id-custom_contact">
          <div class="view-content">
            <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
              <div class="views-field views-field-body">
                <div class="field-content">
                  <p>217 Calhoun Avenue <br> P.O. Box 1169 <br> Rome, GA 30162 <br> (706)&nbsp;291‑5130 </p>
                  <p>
                    <b>Utilities Administrator:</b>
                    <br> Steve Hulsey
                  </p>
                </div>
              </div>
              <div class="views-field views-field-edit-node aha_ada_fixes_span">
                <div class="field-content aha_ada_fixes_span"></div>
              </div>
              <div class="views-field views-field-view-node aha_ada_fixes_span">
                <div class="field-content aha_ada_fixes_span">
                  <a href="/water/custom-contact-page/water-contact-information">View Full Contact Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    </div>
`;
    const pageTitle = document.querySelector("head > title");
    pageTitle.setAttribute("title", "Service Address Availability")
    pageTitle.innerHTML = "Water | Service Address Availability"
};


const linkTable = document.querySelector("#block-jquerymenu-175 > div.block-content > ul")
const linkTab = document.querySelector("#block-jquerymenu-175 > div.block-content > ul > li:nth-child(4)")
const refTab = document.querySelector("#block-jquerymenu-175 > div.block-content > ul > li:nth-child(4)")
const clone = linkTab.cloneNode(true);

insertAfter(clone, refTab);

const newElement = document.querySelector("#block-jquerymenu-175 > div.block-content > ul > li:nth-child(5) > a");

newElement.innerHTML = "Service Address Availability";
newElement.setAttribute("title", "Service Address Availability");
newElement.setAttribute("href", "/404-error");

